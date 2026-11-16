import { Router, Request, Response } from 'express';
import { prisma } from '../prisma';
import { authenticate } from '../middleware/auth';

const router = Router();

function resolveSubjectKey(sectionName?: string | null, qSubject?: string | null): string {
  const s = (qSubject || sectionName || 'General').toLowerCase();
  if (s.includes('phys')) return 'Physics';
  if (s.includes('chem')) return 'Chemistry';
  if (s.includes('math')) return 'Mathematics';
  return qSubject || sectionName || 'General';
}

function getNumericalLimitBySubject(sections: any[]): Record<string, number> {
  const limits: Record<string, number> = {};
  for (const sec of sections || []) {
    const lower = (sec.name || '').toLowerCase();
    const subj = resolveSubjectKey(sec.name);
    if (lower.includes('section b') || lower.includes('numerical')) {
      limits[subj] = sec.maxToAttempt;
    } else if ((sec.totalQuestions === 30 && sec.maxToAttempt === 25) && !limits[subj]) {
      limits[subj] = 5;
    }
  }
  return limits;
}

function isNumericalResponseCorrect(numericalVal: number, q: any, correctAnswers: string[]): boolean {
  if (correctAnswers.some((a) => String(a).toUpperCase() === 'BONUS')) return true;
  const tol = typeof q.numericalTolerance === 'number' && q.numericalTolerance > 0 ? q.numericalTolerance : 0.01;
  if (q.numericalAnswer !== null && q.numericalAnswer !== undefined) {
    if (Math.abs(numericalVal - q.numericalAnswer) <= tol) return true;
  }
  // Support multi-value ("8 or 6") or range ("12 to 13") in correctAnswerJson
  for (const raw of correctAnswers) {
    const s = String(raw).trim().toLowerCase();
    const rangeMatch = s.match(/^(\-?\d+(?:\.\d+)?)\s*(?:to|-)\s*(\-?\d+(?:\.\d+)?)$/);
    if (rangeMatch) {
      const lo = Math.min(Number(rangeMatch[1]), Number(rangeMatch[2]));
      const hi = Math.max(Number(rangeMatch[1]), Number(rangeMatch[2]));
      if (numericalVal >= lo - tol && numericalVal <= hi + tol) return true;
    }
    for (const numStr of s.match(/\-?\d+(?:\.\d+)?/g) || []) {
      if (Math.abs(numericalVal - Number(numStr)) <= tol) return true;
    }
  }
  return false;
}

// List tests for an exam
router.get('/exam/:examId', async (req: Request, res: Response) => {
  try {
    const { examId } = req.params;

    const tests = await prisma.test.findMany({
      where: {
        examId,
        isPublished: true,
      },
      include: {
        patternVersion: {
          include: {
            sections: true,
          },
        },
        _count: {
          select: { testQuestions: true, attempts: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ tests });
  } catch (error) {
    console.error('Error fetching tests:', error);
    res.status(500).json({ error: 'Failed to fetch tests' });
  }
});

// Get test info & instructions preview without starting attempt
router.get('/:testId/info', async (req: Request, res: Response) => {
  try {
    const { testId } = req.params;

    const test = await prisma.test.findUnique({
      where: { id: testId },
      include: {
        exam: true,
        patternVersion: {
          include: {
            sections: {
              orderBy: { order: 'asc' },
            },
          },
        },
        _count: {
          select: { testQuestions: true },
        },
      },
    });

    if (!test) {
      res.status(404).json({ error: 'Test not found' });
      return;
    }

    const questionCount = test.testQuestions ? test.testQuestions.length : (test._count?.testQuestions ?? 0);
    if (questionCount === 0) {
      res.status(400).json({ error: 'This test currently has zero questions loaded and cannot be started.' });
      return;
    }

    res.json({
      test: {
        id: test.id,
        title: test.title,
        durationMinutes: test.durationMinutes,
        totalMarks: test.totalMarks,
        totalQuestions: test.totalQuestions,
        instructionsEn: test.instructionsEn,
        instructionsHi: test.instructionsHi,
        accessLevel: test.accessLevel,
        type: test.type,
        pyqReference: test.pyqReference,
        exam: {
          id: test.exam.id,
          title: test.exam.title,
          shortName: test.exam.shortName,
          conductingBody: test.exam.conductingBody,
        },
        patternVersion: test.patternVersion,
      },
      actualQuestionsCount: test._count.testQuestions,
    });
  } catch (error) {
    console.error('Error fetching test info:', error);
    res.status(500).json({ error: 'Failed to fetch test info' });
  }
});

// Start or resume test session (student must be authenticated)
router.post('/:testId/start', authenticate, async (req: Request, res: Response) => {
  try {
    const { testId } = req.params;
    const userId = req.user!.id;

    const test = await prisma.test.findUnique({
      where: { id: testId },
      include: {
        exam: true,
        patternVersion: {
          include: {
            sections: {
              orderBy: { order: 'asc' },
            },
          },
        },
        testQuestions: {
          include: {
            question: {
              select: {
                id: true,
                questionType: true,
                subject: true,
                contentEn: true,
                contentHi: true,
                diagramUrl: true,
                numericalTolerance: true,
                optionsJson: true,
                difficulty: true,
                isPYQ: true,
                pyqYear: true,
                pyqShift: true,
                sourceProvenance: true,
                verificationStatus: true,
                isAIGenerated: true,
              },
            },
          },
          orderBy: { questionNumber: 'asc' },
        },
      },
    });

    if (!test) {
      res.status(404).json({ error: 'Test not found' });
      return;
    }

    const questionCount = test.testQuestions ? test.testQuestions.length : (test._count?.testQuestions ?? 0);
    if (questionCount === 0) {
      res.status(400).json({ error: 'This test currently has zero questions loaded and cannot be started.' });
      return;
    }

    // Entitlement Check for PREMIUM tests (Phase 4: Backend-Controlled Access)
    if (test.accessLevel === 'PREMIUM' && req.user!.role !== 'ADMIN' && req.user!.role !== 'CONTENT_REVIEWER') {
      // 1. Check for active subscription
      const activeSub = await prisma.subscription.findFirst({
        where: {
          userId,
          status: 'ACTIVE',
          OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
        },
        include: { plan: true },
        orderBy: { createdAt: 'desc' },
      });

      // 2. Check for explicit entitlement (individual unlock, referral credit, or global)
      const entitlement = await prisma.entitlement.findFirst({
        where: {
          userId,
          isActive: true,
          AND: [
            { OR: [{ testId: null }, { testId: test.id }] },
            { OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] },
          ],
        },
      });

      const isSubUnlimited = Boolean(
        activeSub?.plan?.code === 'PREMIUM_MONTHLY_149' ||
          (activeSub?.plan?.examSlug && activeSub.plan.examSlug === test.exam.slug)
      );
      const hasSpecificEntitlement = Boolean(entitlement);

      if (!isSubUnlimited && !hasSpecificEntitlement) {
        // Check if student has a Test Pack with remaining tests
        if (activeSub && activeSub.plan.code === 'TEST_PACK_99' && (activeSub.testsRemaining ?? 0) > 0) {
          // Consume 1 test and grant entitlement
          await prisma.$transaction([
            prisma.subscription.update({
              where: { id: activeSub.id },
              data: { testsRemaining: activeSub.testsRemaining! - 1 },
            }),
            prisma.entitlement.create({
              data: {
                userId,
                testId: test.id,
                planCode: 'TEST_PACK_99',
                source: 'TEST_PACK',
                expiresAt: activeSub.endDate,
              },
            }),
          ]);
        } else {
          res.status(403).json({
            error: 'PREMIUM_LOCKED',
            message: `"${test.title}" is a Premium Mock Test. Unlock it with the ₹99 Test Pack, ₹149 Premium Monthly subscription, or by redeeming a referral credit.`,
            testTitle: test.title,
            testId: test.id,
            accessLevel: test.accessLevel,
          });
          return;
        }
      }
    }

    // Check for an existing in-progress attempt
    let attempt = await prisma.testAttempt.findFirst({
      where: {
        testId,
        userId,
        status: 'IN_PROGRESS',
      },
      orderBy: { startedAt: 'desc' },
    });

    if (!attempt) {
      // Create new attempt
      attempt = await prisma.testAttempt.create({
        data: {
          userId,
          testId,
          examId: test.examId,
          startedAt: new Date(),
          status: 'IN_PROGRESS',
          totalMarks: test.totalMarks,
          responsesJson: JSON.stringify([]),
        },
      });
    }

    // Parse options for student client (DO NOT leak correct answers!)
    const formattedQuestions = test.testQuestions.map((tq) => {
      let options: any[] = [];
      try {
        options = JSON.parse(tq.question.optionsJson);
      } catch (e) {
        options = [];
      }

      return {
        testQuestionId: tq.id,
        questionId: tq.questionId,
        questionNumber: tq.questionNumber,
        sectionName: tq.sectionName,
        marks: tq.marks,
        negativeMarks: tq.negativeMarks,
        questionType: tq.question.questionType,
        subject: tq.question.subject,
        contentEn: tq.question.contentEn,
        contentHi: tq.question.contentHi,
        diagramUrl: tq.question.diagramUrl,
        numericalTolerance: tq.question.numericalTolerance,
        options,
        difficulty: tq.question.difficulty,
        isPYQ: tq.question.isPYQ,
        pyqYear: tq.question.pyqYear,
        pyqShift: tq.question.pyqShift,
        sourceProvenance: tq.question.sourceProvenance,
        verificationStatus: tq.question.verificationStatus,
        isAIGenerated: tq.question.isAIGenerated,
      };
    });

    let existingResponses = [];
    try {
      existingResponses = JSON.parse(attempt.responsesJson || '[]');
    } catch (e) {
      existingResponses = [];
    }

    res.json({
      attemptId: attempt.id,
      startedAt: attempt.startedAt,
      timeSpentSeconds: attempt.timeSpentSeconds,
      test: {
        id: test.id,
        title: test.title,
        durationMinutes: test.durationMinutes,
        totalMarks: test.totalMarks,
        totalQuestions: test.totalQuestions,
        instructionsEn: test.instructionsEn,
        instructionsHi: test.instructionsHi,
        accessLevel: test.accessLevel,
        exam: {
          id: test.exam.id,
          title: test.exam.title,
          shortName: test.exam.shortName,
        },
        patternVersion: test.patternVersion,
      },
      questions: formattedQuestions,
      savedResponses: existingResponses,
    });
  } catch (error) {
    console.error('Error starting test:', error);
    res.status(500).json({ error: 'Failed to initialize test session' });
  }
});

// Autosave progress / heartbeat
router.post('/attempts/:attemptId/autosave', authenticate, async (req: Request, res: Response) => {
  try {
    const { attemptId } = req.params;
    const { responses, timeSpentSeconds } = req.body;
    const userId = req.user!.id;

    const attempt = await prisma.testAttempt.findFirst({
      where: { id: attemptId, userId, status: 'IN_PROGRESS' },
      include: {
        test: {
          include: {
            patternVersion: { include: { sections: true } },
            testQuestions: { include: { question: { select: { id: true, questionType: true, subject: true } } } },
          },
        },
      },
    });

    if (!attempt) {
      res.status(404).json({ error: 'Active test attempt not found' });
      return;
    }

    // Backend enforcement: check numerical limit per subject (e.g., max 5 out of 10)
    const respArr = Array.isArray(responses) ? responses : [];
    const limits = getNumericalLimitBySubject(attempt.test?.patternVersion?.sections || []);
    if (Object.keys(limits).length > 0) {
      const tqMap = new Map(attempt.test.testQuestions.map((tq) => [tq.questionId, tq]));
      const countsBySubj: Record<string, number> = {};
      for (const r of respArr) {
        const tq = tqMap.get(r?.questionId);
        if (!tq || tq.question.questionType !== 'NUMERICAL') continue;
        const hasVal = r.numericalValue !== undefined && r.numericalValue !== null && String(r.numericalValue).trim() !== '';
        const isActiveStatus = r.status === 'ANSWERED' || r.status === 'ANSWERED_AND_MARKED' || hasVal;
        if (hasVal && isActiveStatus) {
          const subj = resolveSubjectKey(tq.sectionName, tq.question.subject);
          countsBySubj[subj] = (countsBySubj[subj] || 0) + 1;
          const cap = limits[subj];
          if (cap && countsBySubj[subj] > cap) {
            res.status(400).json({
              error: 'NUMERICAL_LIMIT_EXCEEDED',
              subject: subj,
              limit: cap,
              message: `You can attempt only ${cap} numerical questions in this subject. Clear one of your existing numerical responses to answer another question.`,
            });
            return;
          }
        }
      }
    }

    await prisma.testAttempt.update({
      where: { id: attemptId },
      data: {
        responsesJson: JSON.stringify(respArr),
        timeSpentSeconds: Number(timeSpentSeconds) || attempt.timeSpentSeconds,
      },
    });

    res.json({ success: true, timestamp: new Date() });
  } catch (error) {
    console.error('Autosave error:', error);
    res.status(500).json({ error: 'Autosave failed' });
  }
});

// Submit test attempt & calculate accurate score according to exam pattern
router.post('/attempts/:attemptId/submit', authenticate, async (req: Request, res: Response) => {
  try {
    const { attemptId } = req.params;
    const { responses = [], timeSpentSeconds = 0 } = req.body;
    const userId = req.user!.id;

    const attempt = await prisma.testAttempt.findFirst({
      where: { id: attemptId, userId },
      include: {
        test: {
          include: {
            testQuestions: {
              include: {
                question: true,
              },
              orderBy: { questionNumber: 'asc' },
            },
            patternVersion: {
              include: {
                sections: true,
              },
            },
          },
        },
      },
    });

    if (!attempt) {
      res.status(404).json({ error: 'Attempt not found' });
      return;
    }

    if (attempt.status === 'COMPLETED') {
      res.json({ message: 'Attempt already submitted', attemptId });
      return;
    }

    const test = attempt.test;
    const pattern = test.patternVersion;

    // Map section rules by name
    const sectionRules = new Map<string, any>();
    pattern.sections.forEach((sec) => {
      sectionRules.set(sec.name, sec);
    });
    const numericalLimits = getNumericalLimitBySubject(pattern.sections);
    const numericalAttemptedBySubj: Record<string, number> = {};

    let totalScore = 0.0;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalAttempted = 0;
    let totalUnattempted = 0;

    const sectionBreakdown: Record<string, { score: number; maxMarks: number; correct: number; wrong: number; unattempted: number }> = {};
    const subjectBreakdown: Record<string, { score: number; maxMarks: number; mcqAttempted: number; numericalAttempted: number; correct: number; incorrect: number; unattempted: number; accuracyPct: number }> = {};
    const sectionCountsSeen: Record<string, number> = {};
    const processedResponses: any[] = [];
    const mistakeEntriesToCreate: any[] = [];

    // Evaluate each question in the test
    for (const tq of test.testQuestions) {
      const q = tq.question;
      const secName = tq.sectionName;
      const subjName = resolveSubjectKey(secName, q.subject);
      const secRule = sectionRules.get(secName);

      const marksPerCorrect = secRule ? secRule.marksPerCorrect : tq.marks;
      const negativeMarks = secRule ? secRule.negativeMarks : tq.negativeMarks;
      const unattemptedPenalty = secRule ? secRule.unattemptedPenalty : 0;

      if (!sectionBreakdown[secName]) {
        sectionBreakdown[secName] = { score: 0, maxMarks: 0, correct: 0, wrong: 0, unattempted: 0 };
      }
      if (!subjectBreakdown[subjName]) {
        subjectBreakdown[subjName] = { score: 0, maxMarks: 0, mcqAttempted: 0, numericalAttempted: 0, correct: 0, incorrect: 0, unattempted: 0, accuracyPct: 0 };
      }

      sectionCountsSeen[secName] = (sectionCountsSeen[secName] || 0) + 1;
      const secAttemptCap = secRule?.maxToAttempt ?? Number.MAX_SAFE_INTEGER;
      if (sectionCountsSeen[secName] <= secAttemptCap) {
        sectionBreakdown[secName].maxMarks += marksPerCorrect;
        subjectBreakdown[subjName].maxMarks += marksPerCorrect;
      }

      const userResp = responses.find((r: any) => r.questionId === q.id);
      const selectedOptions: string[] = userResp?.selectedOptionIds || [];
      const numericalVal: number | undefined = userResp?.numericalValue;
      const timeSpent: number = userResp?.timeSpentSec || 0;
      const status: string = userResp?.status || 'NOT_ANSWERED';

      let isAttempted = false;
      let isCorrect = false;
      let marksAwarded = 0;
      let excludedByLimit = false;

      // Parse correct answers
      let correctAnswers: string[] = [];
      try {
        correctAnswers = JSON.parse(q.correctAnswerJson);
      } catch (e) {
        correctAnswers = [];
      }

      if (q.questionType === 'SINGLE_CHOICE' || q.questionType === 'MULTI_CHOICE') {
        if (selectedOptions.length > 0) {
          isAttempted = true;
          if (correctAnswers.some((a) => String(a).toUpperCase() === 'BONUS')) {
            isCorrect = true;
          } else {
            const sortedSelected = [...selectedOptions].map((s) => s.toUpperCase()).sort();
            const sortedCorrect = [...correctAnswers].map((s) => s.toUpperCase()).sort();
            isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
          }
          subjectBreakdown[subjName].mcqAttempted++;
        }
      } else if (q.questionType === 'NUMERICAL') {
        if (numericalVal !== undefined && numericalVal !== null && !Number.isNaN(Number(numericalVal))) {
          const cap = numericalLimits[subjName] ?? Number.MAX_SAFE_INTEGER;
          const used = numericalAttemptedBySubj[subjName] || 0;
          if (used < cap) {
            numericalAttemptedBySubj[subjName] = used + 1;
            isAttempted = true;
            isCorrect = isNumericalResponseCorrect(Number(numericalVal), q, correctAnswers);
            subjectBreakdown[subjName].numericalAttempted++;
          } else {
            // Exceeds configured Section B attempt limit (e.g. >5 out of 10) - do not score
            excludedByLimit = true;
          }
        }
      }

      if (isAttempted) {
        totalAttempted++;
        if (isCorrect) {
          totalCorrect++;
          marksAwarded = marksPerCorrect;
          sectionBreakdown[secName].correct++;
          subjectBreakdown[subjName].correct++;
        } else {
          totalIncorrect++;
          marksAwarded = -negativeMarks;
          sectionBreakdown[secName].wrong++;
          subjectBreakdown[subjName].incorrect++;

          // Auto-queue mistake into persistent Mistake Journal
          mistakeEntriesToCreate.push({
            userId,
            questionId: q.id,
            testAttemptId: attempt.id,
            mistakeTag: 'CONCEPTUAL_GAP', // Default pending student self-reflection
            revisionStatus: 'NEEDS_ATTENTION',
            reviewCount: 0,
            nextReviewDue: new Date(Date.now() + 86400 * 1000 * 1), // 24hr spaced repetition
          });
        }
      } else {
        totalUnattempted++;
        marksAwarded = excludedByLimit ? 0 : -unattemptedPenalty;
        sectionBreakdown[secName].unattempted++;
        subjectBreakdown[subjName].unattempted++;
      }

      totalScore += marksAwarded;
      sectionBreakdown[secName].score += marksAwarded;
      subjectBreakdown[subjName].score += marksAwarded;

      processedResponses.push({
        questionId: q.id,
        testQuestionId: tq.id,
        sectionName: secName,
        subjectName: subjName,
        selectedOptionIds: selectedOptions,
        numericalValue: numericalVal,
        isAttempted,
        isCorrect,
        excludedByLimit,
        marksAwarded,
        timeSpentSec: timeSpent,
        status: isAttempted ? 'ANSWERED' : status,
      });
    }

    for (const sKey of Object.keys(subjectBreakdown)) {
      const sb = subjectBreakdown[sKey];
      const att = sb.mcqAttempted + sb.numericalAttempted;
      sb.score = Math.round(sb.score * 100) / 100;
      sb.accuracyPct = att > 0 ? Math.round((sb.correct / att) * 1000) / 10 : 0;
    }

    const accuracyPct = totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0.0;

    // Percentile only when valid comparison sample exists (>= 5 attempts)
    const existingAttempts = await prisma.testAttempt.findMany({
      where: {
        testId: test.id,
        status: 'COMPLETED',
      },
      select: { totalScore: true },
    });

    let percentile: number | null = null;
    if (existingAttempts.length >= 3) {
      const lowerScores = existingAttempts.filter((a) => a.totalScore < totalScore).length;
      percentile = Math.round(((lowerScores + 1) / (existingAttempts.length + 1)) * 1000) / 10;
    }

    // Save attempt record
    const updatedAttempt = await prisma.testAttempt.update({
      where: { id: attempt.id },
      data: {
        status: 'COMPLETED',
        submittedAt: new Date(),
        totalScore: Math.round(totalScore * 100) / 100,
        totalAttempted,
        totalCorrect,
        totalIncorrect,
        totalUnattempted,
        accuracyPct: Math.round(accuracyPct * 10) / 10,
        percentile,
        timeSpentSeconds,
        sectionScoresJson: JSON.stringify(sectionBreakdown),
        responsesJson: JSON.stringify(processedResponses),
      },
    });

    // Sync score & stats with LiveTestAttempt if this attempt was part of a scheduled Live Mock Test
    try {
      const liveAttempt = await prisma.liveTestAttempt.findFirst({
        where: { testAttemptId: attempt.id },
      });
      if (liveAttempt) {
        await prisma.liveTestAttempt.update({
          where: { id: liveAttempt.id },
          data: {
            attemptStatus: 'SUBMITTED',
            submittedAt: new Date(),
            score: Math.round(totalScore * 100) / 100,
            accuracyPct: Math.round(accuracyPct * 10) / 10,
            totalAttempted,
            totalCorrect,
            totalIncorrect,
            timeSpentSeconds: Number(timeSpentSeconds) || 0,
            sectionScoresJson: JSON.stringify(sectionBreakdown),
          },
        });
      }
    } catch (liveSyncErr) {
      console.warn('Live test attempt sync warning:', liveSyncErr);
    }

    // Bulk create mistake entries if any
    for (const entry of mistakeEntriesToCreate) {
      await prisma.mistakeJournalEntry.upsert({
        where: {
          id: `${entry.userId}_${entry.questionId}`,
        },
        create: entry,
        update: {
          testAttemptId: entry.testAttemptId,
          revisionStatus: 'NEEDS_ATTENTION',
          updatedAt: new Date(),
        },
      });
    }

    res.json({
      success: true,
      attemptId: updatedAttempt.id,
      score: updatedAttempt.totalScore,
      totalMarks: updatedAttempt.totalMarks,
      accuracyPct: updatedAttempt.accuracyPct,
      percentile: updatedAttempt.percentile,
      totalCorrect,
      totalIncorrect,
      totalUnattempted,
      sectionBreakdown,
      subjectBreakdown,
    });
  } catch (error) {
    console.error('Error submitting test:', error);
    res.status(500).json({ error: 'Failed to evaluate test submission' });
  }
});

// Review submitted test with full answers, step-by-step bilingual explanations, and provenance
router.get('/attempts/:attemptId/review', authenticate, async (req: Request, res: Response) => {
  try {
    const { attemptId } = req.params;
    const userId = req.user!.id;

    const attempt = await prisma.testAttempt.findUnique({
      where: { id: attemptId },
      include: {
        test: {
          include: {
            exam: true,
            patternVersion: true,
            testQuestions: {
              include: {
                question: {
                  include: {
                    syllabusNode: true,
                  },
                },
              },
              orderBy: { questionNumber: 'asc' },
            },
          },
        },
      },
    });

    if (!attempt) {
      res.status(404).json({ error: 'Attempt not found' });
      return;
    }

    // Role check: users can review their own attempts, admins/reviewers can review any
    if (attempt.userId !== userId && !['ADMIN', 'CONTENT_REVIEWER'].includes(req.user!.role)) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    let responses: any[] = [];
    try {
      responses = JSON.parse(attempt.responsesJson || '[]');
    } catch (e) {
      responses = [];
    }

    let sectionScores: Record<string, any> = {};
    try {
      sectionScores = JSON.parse(attempt.sectionScoresJson || '{}');
    } catch (e) {
      sectionScores = {};
    }

    // Build subject-wise breakdown from graded responses & section scores
    const subjectBreakdown: Record<string, { score: number; maxMarks: number; mcqAttempted: number; numericalAttempted: number; correct: number; incorrect: number; unattempted: number; accuracyPct: number }> = {};
    for (const [secKey, secData] of Object.entries(sectionScores)) {
      const subj = resolveSubjectKey(secKey);
      if (!subjectBreakdown[subj]) {
        subjectBreakdown[subj] = { score: 0, maxMarks: 0, mcqAttempted: 0, numericalAttempted: 0, correct: 0, incorrect: 0, unattempted: 0, accuracyPct: 0 };
      }
      subjectBreakdown[subj].score += Number((secData as any)?.score || 0);
      subjectBreakdown[subj].maxMarks += Number((secData as any)?.maxMarks || 0);
      subjectBreakdown[subj].correct += Number((secData as any)?.correct || 0);
      subjectBreakdown[subj].incorrect += Number((secData as any)?.wrong || 0);
      subjectBreakdown[subj].unattempted += Number((secData as any)?.unattempted || 0);
    }
    for (const tq of attempt.test.testQuestions) {
      const resp = responses.find((r: any) => r.questionId === tq.questionId);
      const subj = resolveSubjectKey(tq.sectionName, tq.question?.subject);
      if (!subjectBreakdown[subj]) {
        subjectBreakdown[subj] = { score: 0, maxMarks: tq.marks, mcqAttempted: 0, numericalAttempted: 0, correct: 0, incorrect: 0, unattempted: 0, accuracyPct: 0 };
      }
      if (resp?.isAttempted) {
        if (tq.question?.questionType === 'NUMERICAL') subjectBreakdown[subj].numericalAttempted++;
        else subjectBreakdown[subj].mcqAttempted++;
      }
    }
    for (const sKey of Object.keys(subjectBreakdown)) {
      const sb = subjectBreakdown[sKey];
      sb.score = Math.round(sb.score * 100) / 100;
      const att = sb.mcqAttempted + sb.numericalAttempted;
      sb.accuracyPct = att > 0 ? Math.round((sb.correct / att) * 1000) / 10 : 0;
    }

    // Combine questions with student responses
    const reviewQuestions = attempt.test.testQuestions.map((tq) => {
      const q = tq.question;
      const resp = responses.find((r: any) => r.questionId === q.id);

      let options = [];
      try {
        options = JSON.parse(q.optionsJson);
      } catch (e) {
        options = [];
      }

      let correctAnswers = [];
      try {
        correctAnswers = JSON.parse(q.correctAnswerJson);
      } catch (e) {
        correctAnswers = [];
      }

      return {
        questionId: q.id,
        questionNumber: tq.questionNumber,
        sectionName: tq.sectionName,
        marks: tq.marks,
        negativeMarks: tq.negativeMarks,
        questionType: q.questionType,
        subject: q.subject,
        contentEn: q.contentEn,
        contentHi: q.contentHi,
        diagramUrl: q.diagramUrl,
        options,
        correctAnswers,
        numericalAnswer: q.numericalAnswer,
        explanationEn: q.explanationEn,
        explanationHi: q.explanationHi,
        difficulty: q.difficulty,
        isPYQ: q.isPYQ,
        pyqYear: q.pyqYear,
        pyqShift: q.pyqShift,
        sourceProvenance: q.sourceProvenance,
        sourceLicense: q.sourceLicense,
        verificationStatus: q.verificationStatus,
        reviewerName: q.reviewerName,
        isAIGenerated: q.isAIGenerated,
        syllabusNode: q.syllabusNode,
        studentResponse: resp || {
          selectedOptionIds: [],
          numericalValue: null,
          isCorrect: false,
          marksAwarded: 0,
          status: 'NOT_ANSWERED',
        },
      };
    });

    res.json({
      attempt: {
        id: attempt.id,
        startedAt: attempt.startedAt,
        submittedAt: attempt.submittedAt,
        totalScore: attempt.totalScore,
        totalMarks: attempt.totalMarks,
        accuracyPct: attempt.accuracyPct,
        percentile: attempt.percentile,
        totalAttempted: attempt.totalAttempted,
        totalCorrect: attempt.totalCorrect,
        totalIncorrect: attempt.totalIncorrect,
        totalUnattempted: attempt.totalUnattempted,
        timeSpentSeconds: attempt.timeSpentSeconds,
        sectionScores,
        subjectBreakdown,
      },
      test: {
        id: attempt.test.id,
        title: attempt.test.title,
        exam: attempt.test.exam,
        pyqReference: attempt.test.pyqReference,
      },
      questions: reviewQuestions,
    });
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ error: 'Failed to fetch test review' });
  }
});

// Get user's completed attempt history
router.get('/history/my-attempts', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;

    const attempts = await prisma.testAttempt.findMany({
      where: {
        userId,
        status: 'COMPLETED',
      },
      include: {
        test: {
          select: {
            title: true,
            totalMarks: true,
            durationMinutes: true,
            exam: {
              select: {
                shortName: true,
                slug: true,
              },
            },
          },
        },
      },
      orderBy: { submittedAt: 'desc' },
    });

    res.json({ attempts });
  } catch (error) {
    console.error('Error fetching attempts history:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

export default router;
