import { Router, Request, Response } from 'express';
import { prisma } from '../prisma';
import { authenticate, requireRole } from '../middleware/auth';
import { getMockAccessType, MockAccessType } from '../test-access';
import { SSC_CGL_SLUG, validateSscCglPaper } from '../ssc-cgl/validation';

const router = Router();

type DashboardRange = 'TODAY' | 'YESTERDAY' | 'LAST_7_DAYS' | 'LAST_30_DAYS' | 'THIS_MONTH' | 'CUSTOM';

function dashboardDateRange(query: Record<string, unknown>) {
  const requested = String(query.range || 'LAST_7_DAYS').toUpperCase() as DashboardRange;
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let start = new Date(startOfToday);
  let end = new Date(now);

  if (requested === 'TODAY') {
    start = startOfToday;
    end = new Date(startOfToday);
    end.setDate(end.getDate() + 1);
  } else if (requested === 'YESTERDAY') {
    end = startOfToday;
    start = new Date(startOfToday);
    start.setDate(start.getDate() - 1);
  } else if (requested === 'LAST_30_DAYS') {
    start.setDate(start.getDate() - 29);
    end = new Date(now);
  } else if (requested === 'THIS_MONTH') {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    end = new Date(now);
  } else if (requested === 'CUSTOM') {
    const customStart = new Date(String(query.start || ''));
    const customEnd = new Date(String(query.end || ''));
    if (!Number.isNaN(customStart.getTime()) && !Number.isNaN(customEnd.getTime()) && customEnd >= customStart) {
      start = customStart;
      end = new Date(customEnd);
      end.setDate(end.getDate() + 1);
    }
  } else {
    start.setDate(start.getDate() - 6);
    end = new Date(now);
  }

  return { range: requested, start, end };
}

/**
 * Read-only dashboard aggregation. Keep its definitions here so every card is
 * derived from the same database snapshot instead of independently failing UI
 * requests. Refunds deliberately remain "unverified" until gateway-backed
 * refund confirmation is implemented.
 */
router.get('/dashboard-summary', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { range, start, end } = dashboardDateRange(req.query as Record<string, unknown>);
    const examId = String(req.query.examId || '').trim();
    const examFilter = examId && examId !== 'ALL' ? { examId } : {};
    const period = { gte: start, lt: end };
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 6);

    const [
      totalStudents, periodRegistrations, weeklyRegistrations, activeStudents,
      exams, tests, completedAttempts, ongoingAttempts, activeLiveExams,
      successfulPayments, allPayingStudents, pendingPayments, failedPayments, paidSubscriptions,
      pendingQuestions, recentActivity,
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'STUDENT' } }),
      prisma.user.count({ where: { role: 'STUDENT', createdAt: period } }),
      prisma.user.count({ where: { role: 'STUDENT', createdAt: { gte: weekStart } } }),
      prisma.user.count({ where: { role: 'STUDENT', lastSeenAt: { gte: start, lt: end } } }),
      prisma.exam.count(),
      prisma.test.findMany({
        where: examFilter,
        select: { id: true, isPublished: true, status: true, accessType: true, accessLevel: true, accessMode: true },
      }),
      prisma.testAttempt.count({ where: { ...examFilter, status: 'COMPLETED', createdAt: period } }),
      prisma.testAttempt.count({ where: { ...examFilter, status: 'IN_PROGRESS' } }),
      prisma.liveTestSchedule.count({ where: { ...examFilter, status: 'LIVE_NOW' } }),
      prisma.payment.findMany({
        where: { status: 'SUCCESS', createdAt: period, OR: [{ amountPaise: { gt: 0 } }, { amount: { gt: 0 } }] },
        select: { userId: true, amount: true, amountPaise: true, examSlug: true, createdAt: true },
      }),
      prisma.payment.groupBy({ where: { status: 'SUCCESS', OR: [{ amountPaise: { gt: 0 } }, { amount: { gt: 0 } }] }, by: ['userId'] }),
      prisma.payment.count({ where: { status: 'PENDING', createdAt: period } }),
      prisma.payment.count({ where: { status: 'FAILED', createdAt: period } }),
      prisma.subscription.count({
        where: {
          status: 'ACTIVE',
          OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
          plan: { price: { gt: 0 }, code: { not: { contains: 'FREE' } } },
        },
      }),
      prisma.question.count({ where: { verificationStatus: { in: ['UNDER_REVIEW', 'DRAFT'] } } }),
      prisma.pricingAuditLog.findMany({
        orderBy: { createdAt: 'desc' }, take: 6,
        select: { id: true, targetTitle: true, targetType: true, notes: true, createdAt: true },
      }),
    ]);

    const premiumTests = tests.filter((test) => getMockAccessType(test) === 'premium');
    const publishedTests = tests.filter((test) => test.isPublished && ['PUBLISHED', 'ACTIVE'].includes(String(test.status).toUpperCase()));
    const draftTests = tests.filter((test) => !test.isPublished || String(test.status).toUpperCase() === 'DRAFT');
    const revenuePaise = successfulPayments.reduce((sum, payment) => sum + (payment.amountPaise > 0 ? payment.amountPaise : Math.round(payment.amount * 100)), 0);
    const uniquePayingStudents = allPayingStudents.length;
    const days = Array.from({ length: Math.max(1, Math.min(31, Math.ceil((end.getTime() - start.getTime()) / 86400000))) }, (_, index) => {
      const day = new Date(start);
      day.setDate(day.getDate() + index);
      return day;
    });
    const revenueByDay = days.map((day) => {
      const nextDay = new Date(day);
      nextDay.setDate(nextDay.getDate() + 1);
      const paise = successfulPayments
        .filter((payment) => payment.createdAt >= day && payment.createdAt < nextDay)
        .reduce((sum, payment) => sum + (payment.amountPaise > 0 ? payment.amountPaise : Math.round(payment.amount * 100)), 0);
      return { date: day.toISOString().slice(0, 10), paise };
    });

    res.json({
      filters: { range, start: start.toISOString(), end: end.toISOString(), examId: examId || 'ALL' },
      generatedAt: new Date().toISOString(),
      metrics: {
        totalStudents, periodRegistrations, weeklyRegistrations, activeStudents,
        uniquePayingStudents, freeStudents: Math.max(0, totalStudents - uniquePayingStudents),
        activePaidSubscriptions: paidSubscriptions, totalExamPortals: exams,
        totalMockTests: tests.length, publishedMockTests: publishedTests.length,
        draftMockTests: draftTests.length, freeMockTests: tests.length - premiumTests.length,
        premiumMockTests: premiumTests.length, completedAttempts, ongoingAttempts,
        activeLiveExams, verifiedRevenuePaise: revenuePaise,
        successfulPayments: successfulPayments.length, pendingPayments, failedPayments,
        confirmedRefunds: null,
      },
      revenue: { byDay: revenueByDay, refundVerification: 'NOT_CONFIGURED' },
      activities: recentActivity.map((entry) => ({
        id: entry.id, title: entry.targetTitle || entry.targetType, detail: entry.notes || 'Administrative change', createdAt: entry.createdAt,
      })),
      availability: {
        growthAnalytics: 'UNAVAILABLE_HISTORICAL_EVENTS_NOT_RECORDED',
        gatewayRefundConfirmation: 'NOT_CONFIGURED',
      },
    });
  } catch (error) {
    console.error('Error building admin dashboard summary:', error);
    res.status(500).json({ error: 'Failed to load the dashboard summary. No metrics were substituted.' });
  }
});

// Get questions pending review (Reviewers and Admins)
router.get('/review-queue', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (_req: Request, res: Response) => {
  try {
    const pendingQuestions = await prisma.question.findMany({
      where: {
        verificationStatus: {
          in: ['UNDER_REVIEW', 'DRAFT'],
        },
      },
      include: {
        exam: {
          select: { title: true, shortName: true },
        },
        syllabusNode: {
          select: { title: true, code: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const formatted = pendingQuestions.map((q) => {
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
        ...q,
        options,
        correctAnswers,
      };
    });

    res.json({ questions: formatted });
  } catch (error) {
    console.error('Error fetching review queue:', error);
    res.status(500).json({ error: 'Failed to fetch review queue' });
  }
});

// Approve or reject a question with audit trail
router.post('/review-question/:id', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { action, comments = '', reviewerName } = req.body;
    const reviewerId = req.user!.id;

    if (!['APPROVED', 'REJECTED', 'CHANGES_REQUESTED'].includes(action)) {
      res.status(400).json({ error: 'Invalid review action. Allowed: APPROVED, REJECTED, CHANGES_REQUESTED' });
      return;
    }

    const newStatus = action === 'APPROVED' ? 'VERIFIED' : action === 'REJECTED' ? 'REJECTED' : 'UNDER_REVIEW';

    const question = await prisma.question.update({
      where: { id },
      data: {
        verificationStatus: newStatus,
        reviewerName: reviewerName || req.user!.name,
        reviewedAt: new Date(),
        reviewerNotes: comments,
      },
    });

    // Create persistent review audit entry
    await prisma.questionReview.create({
      data: {
        questionId: id,
        reviewerId,
        action,
        comments,
        provenanceCheck: true,
        rubricVerified: true,
      },
    });

    res.json({
      success: true,
      message: `Question status updated to ${newStatus}`,
      question,
    });
  } catch (error) {
    console.error('Error submitting question review:', error);
    res.status(500).json({ error: 'Failed to update question review' });
  }
});

// Create or update exam pattern version (Never hardcode one exam's rules globally!)
router.post('/exams/:examId/pattern-version', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const examId = req.params.examId as string;
    const {
      versionName,
      effectiveFrom,
      durationMinutes,
      totalMarks,
      totalQuestions,
      questionsToAttempt,
      sectionalTimers = false,
      questionShuffling = true,
      languagesAllowed = ['en', 'hi'],
      sections = [],
    } = req.body;

    // Set other versions to not default if this one is default
    await prisma.examPatternVersion.updateMany({
      where: { examId },
      data: { isDefault: false },
    });

    const newVersion = await prisma.examPatternVersion.create({
      data: {
        examId,
        versionName,
        effectiveFrom: new Date(effectiveFrom || Date.now()),
        durationMinutes: Number(durationMinutes),
        totalMarks: Number(totalMarks),
        totalQuestions: Number(totalQuestions),
        questionsToAttempt: Number(questionsToAttempt),
        sectionalTimers: Boolean(sectionalTimers),
        questionShuffling: Boolean(questionShuffling),
        languagesAllowed: JSON.stringify(languagesAllowed),
        isDefault: true,
        sections: {
          create: sections.map((sec: any, index: number) => ({
            name: sec.name,
            order: index + 1,
            totalQuestions: Number(sec.totalQuestions),
            maxToAttempt: Number(sec.maxToAttempt),
            questionType: sec.questionType || 'MCQ_SINGLE',
            marksPerCorrect: Number(sec.marksPerCorrect || 4.0),
            negativeMarks: Number(sec.negativeMarks || 1.0),
            unattemptedPenalty: Number(sec.unattemptedPenalty || 0.0),
          })),
        },
      },
      include: {
        sections: true,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Exam pattern version successfully published',
      patternVersion: newVersion,
    });
  } catch (error) {
    console.error('Error creating pattern version:', error);
    res.status(500).json({ error: 'Failed to create exam pattern version' });
  }
});

// Coverage audit report
router.get('/coverage-audit', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (_req: Request, res: Response) => {
  try {
    const audits = await prisma.contentCoverageAudit.findMany({
      orderBy: { auditTimestamp: 'desc' },
    });

    const totalQuestions = await prisma.question.count();
    const verifiedQuestions = await prisma.question.count({ where: { verificationStatus: 'VERIFIED' } });
    const pendingQuestions = await prisma.question.count({ where: { verificationStatus: 'UNDER_REVIEW' } });
    const aiGeneratedQuestions = await prisma.question.count({ where: { isAIGenerated: true } });

    res.json({
      metrics: {
        totalQuestions,
        verifiedQuestions,
        pendingQuestions,
        aiGeneratedQuestions,
        officialPYQs: totalQuestions - aiGeneratedQuestions,
      },
      audits,
    });
  } catch (error) {
    console.error('Error fetching coverage audit:', error);
    res.status(500).json({ error: 'Failed to fetch coverage audit' });
  }
});

// ============================================================================
// All in One JEE Main PYQ Management Endpoints
// ============================================================================

// Filter and browse extracted PYQ questions
router.get('/pyq/questions', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { year, shift, subject, status } = req.query;

    const whereClause: any = { isPYQ: true };
    if (year && year !== 'ALL') {
      whereClause.pyqYear = String(year);
    }
    if (shift && shift !== 'ALL') {
      whereClause.pyqShift = { contains: String(shift) };
    }
    if (status && status !== 'ALL' && status !== 'INCOMPLETE') {
      whereClause.verificationStatus = String(status);
    }

    const questions = await prisma.question.findMany({
      where: whereClause,
      take: status === 'NEEDS_VERIFICATION' ? 500 : 120,
      include: {
        exam: { select: { title: true, shortName: true } },
        testQuestions: { select: { sectionName: true, questionNumber: true, marks: true, negativeMarks: true } },
        auditLogs: { orderBy: { createdAt: 'desc' }, take: 3 },
      },
      orderBy: [{ pyqYear: 'desc' }, { createdAt: 'desc' }],
    });

    const formatted = questions
      .map((q) => {
        let options = [];
        try {
          options = JSON.parse(q.optionsJson);
        } catch {
          options = [];
        }
        let correctAnswers = [];
        try {
          correctAnswers = JSON.parse(q.correctAnswerJson);
        } catch {
          correctAnswers = [];
        }

        const section = q.testQuestions[0]?.sectionName || q.subject || 'Physics';
        const qNum = q.testQuestions[0]?.questionNumber || 1;
        const marks = q.testQuestions[0]?.marks || 4;
        const negMarks = q.testQuestions[0]?.negativeMarks ?? 1;

        return {
          id: q.id,
          exam: 'JEE Main',
          year: q.pyqYear ? parseInt(q.pyqYear) : 2025,
          shift: q.pyqShift || 'Shift 1',
          subject: q.subject || section.split(' - ')[0] || 'Physics',
          sectionName: section,
          questionNumber: qNum,
          questionType: q.questionType === 'NUMERICAL' ? 'NUMERICAL' : 'MCQ',
          questionText: q.contentEn,
          diagramUrl: q.diagramUrl,
          options: options.map((opt: any) => ({
            key: opt.id || 'A',
            text: opt.textEn || '',
          })),
          correctAnswer: correctAnswers,
          numericalAnswer: q.numericalAnswer,
          explanation: q.explanationEn,
          marks,
          negativeMarks: -negMarks,
          source: {
            pdf: q.pyqPaper || 'JEE_Main.pdf',
            provenance: q.sourceProvenance,
          },
          verificationStatus: q.verificationStatus.toLowerCase(),
          isPublished: q.isPublished,
          auditLogs: q.auditLogs,
        };
      })
      .filter((q) => {
        if (subject && subject !== 'ALL') {
          if (!q.subject.toLowerCase().includes(String(subject).toLowerCase())) return false;
        }
        if (status === 'INCOMPLETE') {
          const badOpts = q.questionType === 'MCQ' && (q.options.length !== 4 || q.options.some((o: any) => !o.text.trim()));
          const badAns = !q.correctAnswer || q.correctAnswer.length === 0;
          return q.questionText.length < 20 || badOpts || badAns || q.verificationStatus === 'needs_verification';
        }
        return true;
      });

    res.json({ count: formatted.length, questions: formatted });
  } catch (error) {
    console.error('Error fetching PYQ questions:', error);
    res.status(500).json({ error: 'Failed to fetch PYQ questions' });
  }
});

// Edit PYQ question details & options with persistent audit logging
router.put('/pyq/questions/:id', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const {
      questionText,
      options,
      correctAnswer,
      explanation,
      diagramUrl,
      questionType,
      subject,
      sectionName,
      verificationStatus,
    } = req.body;

    const existing = await prisma.question.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: 'Question not found' });
      return;
    }

    const formattedOptions = (options || []).map((o: any) => ({
      id: o.key,
      textEn: o.text,
    }));

    const mappedType =
      questionType === 'NUMERICAL'
        ? 'NUMERICAL'
        : questionType === 'MCQ' || questionType === 'SINGLE_CHOICE'
        ? 'SINGLE_CHOICE'
        : existing.questionType;

    const firstAns = Array.isArray(correctAnswer) ? correctAnswer[0] : correctAnswer;
    const numVal = mappedType === 'NUMERICAL' && firstAns !== undefined && !isNaN(Number(firstAns)) ? Number(firstAns) : null;

    const updated = await prisma.question.update({
      where: { id },
      data: {
        contentEn: questionText ?? existing.contentEn,
        optionsJson: options ? JSON.stringify(formattedOptions) : existing.optionsJson,
        correctAnswerJson: correctAnswer ? JSON.stringify(correctAnswer) : existing.correctAnswerJson,
        explanationEn: explanation ?? existing.explanationEn,
        diagramUrl: diagramUrl !== undefined ? diagramUrl : existing.diagramUrl,
        questionType: mappedType,
        subject: subject ?? existing.subject,
        numericalAnswer: numVal,
        verificationStatus: verificationStatus ? verificationStatus.toUpperCase() : existing.verificationStatus,
        reviewedAt: new Date(),
        reviewerName: req.user!.name,
      },
    });

    if (sectionName) {
      await prisma.testQuestion.updateMany({
        where: { questionId: id },
        data: { sectionName },
      });
    }

    await prisma.questionAuditLog.create({
      data: {
        questionId: id,
        paperTitle: existing.sourceProvenance,
        issueType: 'ADMIN_MANUAL_EDIT',
        previousContentEn: existing.contentEn.slice(0, 1000),
        previousOptionsJson: existing.optionsJson?.slice(0, 1000),
        previousAnswerJson: existing.correctAnswerJson,
        previousType: existing.questionType,
        newContentEn: updated.contentEn.slice(0, 1000),
        newType: updated.questionType,
        correctedBy: req.user!.name || req.user!.email,
        changeSummary: `Manual admin edit (${updated.verificationStatus})`,
      },
    });

    res.json({ success: true, message: 'Question updated & logged to audit trail', question: updated });
  } catch (error) {
    console.error('Error updating PYQ question:', error);
    res.status(500).json({ error: 'Failed to update question' });
  }
});

// Approve and publish / unpublish PYQ question
router.post('/pyq/questions/:id/status', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { verificationStatus, isPublished } = req.body;

    const updated = await prisma.question.update({
      where: { id },
      data: {
        verificationStatus: verificationStatus ? verificationStatus.toUpperCase() : undefined,
        isPublished: typeof isPublished === 'boolean' ? isPublished : undefined,
        reviewedAt: new Date(),
        reviewerName: req.user!.name,
      },
    });

    res.json({
      success: true,
      message: `Question verification status set to ${updated.verificationStatus}, published: ${updated.isPublished}`,
      question: updated,
    });
  } catch (error) {
    console.error('Error setting question status:', error);
    res.status(500).json({ error: 'Failed to update question status' });
  }
});

// Export verified PYQ questions in official JSON format
router.get('/pyq/export', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { year } = req.query;
    const whereClause: any = { isPYQ: true, verificationStatus: 'VERIFIED' };
    if (year && year !== 'ALL') {
      whereClause.pyqYear = String(year);
    }

    const questions = await prisma.question.findMany({
      where: whereClause,
      include: {
        testQuestions: { select: { sectionName: true, questionNumber: true, marks: true, negativeMarks: true } },
      },
      orderBy: [{ pyqYear: 'desc' }, { createdAt: 'asc' }],
    });

    const exportData = questions.map((q) => {
      let options = [];
      try {
        options = JSON.parse(q.optionsJson);
      } catch {
        options = [];
      }
      let correctAnswers = [];
      try {
        correctAnswers = JSON.parse(q.correctAnswerJson);
      } catch {
        correctAnswers = [];
      }

      const section = q.testQuestions[0]?.sectionName || 'Physics';
      const qNum = q.testQuestions[0]?.questionNumber || 1;
      const marks = q.testQuestions[0]?.marks || 4;
      const negMarks = q.testQuestions[0]?.negativeMarks || 1;

      return {
        exam: 'JEE Main',
        year: q.pyqYear ? parseInt(q.pyqYear) : 2025,
        session: 'Session 1',
        date: '2025-01-22',
        shift: q.pyqShift || 'Shift 1',
        subject: section,
        chapter: 'Mechanics',
        questionNumber: qNum,
        questionType: q.questionType === 'NUMERICAL' ? 'NUMERICAL' : 'MCQ',
        questionText: q.contentEn,
        options: options.map((opt: any) => ({
          key: opt.id || 'A',
          text: opt.textEn || '',
        })),
        correctAnswer: correctAnswers,
        explanation: q.explanationEn,
        marks,
        negativeMarks: -negMarks,
        source: {
          pdf: q.pyqPaper || 'JEE_Main.pdf',
          url: 'https://jeemain.nta.nic.in/',
        },
        contentType: 'PYQ',
        verificationStatus: 'verified',
        isPublished: q.isPublished,
      };
    });

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename=jee-main-verified-${year || 'all'}.json`);
    res.json(exportData);
  } catch (error) {
    console.error('Error exporting questions:', error);
    res.status(500).json({ error: 'Failed to export questions' });
  }
});

// ----------------------------------------------------------------------------
// User & Student Management (Strictly Admin Only)
// ----------------------------------------------------------------------------
router.get('/users', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { role, search } = req.query;
    const where: any = {};
    if (role && role !== 'ALL') {
      where.role = String(role);
    }
    if (search) {
      where.OR = [
        { name: { contains: String(search) } },
        { email: { contains: String(search) } },
        { studentId: { contains: String(search) } },
      ];
    }
    const users = await prisma.user.findMany({
      where,
      select: {
        id: true,
        studentId: true,
        name: true,
        email: true,
        role: true,
        targetExamId: true,
        referralCredits: true,
        createdAt: true,
        _count: {
          select: { attempts: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    res.json({ users, total: users.length });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.put('/users/:id/role', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { role } = req.body;
    const validRoles = ['STUDENT', 'ADMIN', 'CONTENT_REVIEWER', 'INSTITUTION_ADMIN'];
    if (!validRoles.includes(role)) {
      res.status(400).json({ error: `Invalid role. Allowed: ${validRoles.join(', ')}` });
      return;
    }
    const updated = await prisma.user.update({
      where: { id },
      data: { role },
      select: { id: true, studentId: true, name: true, email: true, role: true },
    });
    res.json({ success: true, message: `User role updated to ${role}`, user: updated });
  } catch (error) {
    console.error('Error updating user role:', error);
    res.status(500).json({ error: 'Failed to update user role' });
  }
});

// ----------------------------------------------------------------------------
// Centralized Multi-Exam Management (Add Exam, Edit Notice/Pattern, Tests, Question CRUD & Reorder)
// ----------------------------------------------------------------------------
const DEFAULT_CATEGORIES = [
  { name: 'Engineering Entrance', code: 'ENG', description: 'Undergraduate engineering admissions across IITs, NITs, IIITs and top universities.', icon: 'Cpu', displayOrder: 1 },
  { name: 'Medical Entrance', code: 'MED', description: 'National Eligibility cum Entrance Test for MBBS, BDS, and allied sciences.', icon: 'Activity', displayOrder: 2 },
  { name: 'Civil Services & UPSC', code: 'CIVIL', description: 'Prestigious national recruitment examinations for IAS, IPS, IFS and Central Services.', icon: 'Landmark', displayOrder: 3 },
  { name: 'Teaching & Eligibility', code: 'TET', description: 'Central and state teacher eligibility examinations (CTET, UPTET, SUPER TET).', icon: 'GraduationCap', displayOrder: 4 },
  { name: 'SSC & Government Recruitment', code: 'SSC', description: 'Staff Selection Commission exams (CGL, CHSL, MTS, CPO).', icon: 'Award', displayOrder: 5 },
  { name: 'Banking & Insurance', code: 'BANK', description: 'IBPS, SBI, RBI recruitment for Probationary Officers and Clerical cadres.', icon: 'Briefcase', displayOrder: 6 },
  { name: 'Graduate Aptitude & Masters', code: 'GATE', description: 'GATE CS, DA, ME, EC for admissions and PSU recruitment.', icon: 'BookOpen', displayOrder: 7 },
];

router.get('/exams', authenticate, requireRole(['ADMIN']), async (_req: Request, res: Response) => {
  try {
    let categories = await prisma.examCategory.findMany({ orderBy: { displayOrder: 'asc' } });
    
    // Auto-seed standard categories if empty
    if (categories.length === 0) {
      for (const cat of DEFAULT_CATEGORIES) {
        await prisma.examCategory.upsert({
          where: { code: cat.code },
          update: {},
          create: cat,
        });
      }
      categories = await prisma.examCategory.findMany({ orderBy: { displayOrder: 'asc' } });
    }

    const exams = await prisma.exam.findMany({
      include: {
        category: true,
        patternVersions: { include: { sections: { orderBy: { order: 'asc' } } } },
        _count: { select: { tests: true, questions: true } },
      },
      orderBy: { createdAt: 'asc' },
    });

    res.json({ categories, exams });
  } catch (error) {
    console.error('Error loading admin exams:', error);
    res.status(500).json({ error: 'Failed to load exams' });
  }
});

router.post('/exams', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const {
      slug,
      title,
      shortName,
      conductingBody,
      officialWebsite = 'https://allinone.edu',
      description,
      eligibilitySummary,
      categoryId,
      status = 'ACTIVE',
      isComingSoon = false,
      portalHeadline,
      latestNotification,
      notificationDate,
      officialNoticeUrl,
      accentColor = '#1D4ED8',
      durationMinutes = 150,
      totalMarks = 150,
      totalQuestions = 150,
      sections = [],
    } = req.body;

    if (!slug || !title || !shortName) {
      res.status(400).json({ error: 'slug, title, and shortName are required.' });
      return;
    }

    const cleanSlug = String(slug).trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');

    const existing = await prisma.exam.findUnique({ where: { slug: cleanSlug } });
    if (existing) {
      res.status(409).json({ error: `An exam portal with slug "${cleanSlug}" already exists.` });
      return;
    }

    // Resolve category
    let validCategoryId = categoryId;
    if (!validCategoryId) {
      const firstCat = await prisma.examCategory.findFirst({ orderBy: { displayOrder: 'asc' } });
      validCategoryId = firstCat?.id;
    }

    if (!validCategoryId) {
      const defaultCat = await prisma.examCategory.create({
        data: DEFAULT_CATEGORIES[0],
      });
      validCategoryId = defaultCat.id;
    }

    const exam = await prisma.exam.create({
      data: {
        slug: cleanSlug,
        title: String(title).trim(),
        shortName: String(shortName).trim(),
        conductingBody: String(conductingBody || 'Official Examination Authority').trim(),
        officialWebsite: String(officialWebsite).trim(),
        description: String(description || title).trim(),
        eligibilitySummary: String(eligibilitySummary || 'Refer to official notification').trim(),
        categoryId: validCategoryId,
        status,
        isComingSoon: Boolean(isComingSoon),
        portalHeadline: portalHeadline || `Prepare for ${shortName} with structured mock tests.`,
        latestNotification: latestNotification || 'Official notification details pending verification.',
        notificationDate: notificationDate || 'Verification Pending',
        officialNoticeUrl: officialNoticeUrl || officialWebsite,
        accentColor,
      },
    });

    const pv = await prisma.examPatternVersion.create({
      data: {
        examId: exam.id,
        versionName: `${shortName} Standard Pattern`,
        effectiveFrom: new Date(),
        durationMinutes: Number(durationMinutes),
        totalMarks: Number(totalMarks),
        totalQuestions: Number(totalQuestions),
        questionsToAttempt: Number(totalQuestions),
        isDefault: true,
      },
    });

    if (Array.isArray(sections) && sections.length > 0) {
      for (let i = 0; i < sections.length; i++) {
        const s = sections[i];
        await prisma.examSection.create({
          data: {
            patternVersionId: pv.id,
            name: String(s.name || `Section ${i + 1}`),
            order: i + 1,
            totalQuestions: Number(s.totalQuestions || 30),
            maxToAttempt: Number(s.maxToAttempt || s.totalQuestions || 30),
            marksPerCorrect: Number(s.marksPerCorrect ?? 1),
            negativeMarks: Number(s.negativeMarks ?? 0),
          },
        });
      }
    }

    res.status(201).json({ success: true, message: `Exam portal "${shortName}" created & live at /exams/${cleanSlug}`, exam });
  } catch (error: any) {
    console.error('Error creating exam:', error);
    res.status(500).json({ error: error.message || 'Failed to create exam' });
  }
});

router.put('/exams/:id', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const {
      title,
      shortName,
      conductingBody,
      officialWebsite,
      description,
      eligibilitySummary,
      status,
      isComingSoon,
      portalHeadline,
      latestNotification,
      notificationDate,
      officialNoticeUrl,
      accentColor,
      accessMode,
      categoryId,
    } = req.body;

    const updated = await prisma.exam.update({
      where: { id },
      data: {
        ...(title !== undefined ? { title } : {}),
        ...(shortName !== undefined ? { shortName } : {}),
        ...(conductingBody !== undefined ? { conductingBody } : {}),
        ...(officialWebsite !== undefined ? { officialWebsite } : {}),
        ...(description !== undefined ? { description } : {}),
        ...(eligibilitySummary !== undefined ? { eligibilitySummary } : {}),
        ...(status !== undefined ? { status } : {}),
        ...(isComingSoon !== undefined ? { isComingSoon: Boolean(isComingSoon) } : {}),
        ...(portalHeadline !== undefined ? { portalHeadline } : {}),
        ...(latestNotification !== undefined ? { latestNotification } : {}),
        ...(notificationDate !== undefined ? { notificationDate } : {}),
        ...(officialNoticeUrl !== undefined ? { officialNoticeUrl } : {}),
        ...(accentColor !== undefined ? { accentColor } : {}),
        ...(accessMode !== undefined ? { accessMode } : {}),
        ...(categoryId !== undefined ? { categoryId } : {}),
      },
    });
    res.json({ success: true, exam: updated });
  } catch (error) {
    console.error('Error updating exam:', error);
    res.status(500).json({ error: 'Failed to update exam' });
  }
});

router.patch('/exams/:id/publish', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { status, isComingSoon, accessMode } = req.body;

    const exam = await prisma.exam.update({
      where: { id },
      data: {
        ...(status !== undefined ? { status } : {}),
        ...(isComingSoon !== undefined ? { isComingSoon: Boolean(isComingSoon) } : {}),
        ...(accessMode !== undefined ? { accessMode } : {}),
      },
    });

    res.json({ success: true, message: `Exam status updated to ${exam.status}`, exam });
  } catch (error: any) {
    console.error('Error updating exam publish status:', error);
    res.status(500).json({ error: error.message || 'Failed to update exam status' });
  }
});

router.get('/exams/:examId/tests', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const tests = await prisma.test.findMany({
      where: { examId: req.params.examId },
      include: { _count: { select: { testQuestions: true } } },
      orderBy: { createdAt: 'desc' },
    });

    const total = tests.length;
    const active = tests.filter((t) => t.status === 'ACTIVE' || t.isActive).length;
    const published = tests.filter((t) => t.isPublished && t.status !== 'ACTIVE' && !t.isActive).length;
    const draft = tests.filter((t) => !t.isPublished && (t.status === 'DRAFT' || !t.status)).length;
    const inactive = tests.filter((t) => t.status === 'INACTIVE' || (!t.isActive && t.isPublished)).length;
    const archived = tests.filter((t) => t.status === 'ARCHIVED').length;

    res.json({
      tests,
      stats: {
        total,
        active,
        published,
        draft,
        inactive,
        archived,
      },
    });
  } catch (error) {
    console.error('Error fetching exam tests:', error);
    res.status(500).json({ error: 'Failed to fetch exam tests' });
  }
});

router.post('/tests', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { examId, title, type = 'FULL_MOCK', durationMinutes = 120, totalMarks = 100, accessType, accessLevel, instructionsEn } = req.body;
    if (!examId || !title) {
      res.status(400).json({ error: 'examId and title are required' });
      return;
    }
    // Accept the former accessLevel payload during the rollout so existing
    // admin clients keep creating the same kind of test.
    const requestedAccessType = accessType ?? (String(accessLevel).toUpperCase() === 'PREMIUM' ? 'premium' : 'free');
    const normalizedAccessType = String(requestedAccessType).toLowerCase() as MockAccessType;
    if (!['free', 'premium'].includes(normalizedAccessType)) {
      res.status(400).json({ error: 'accessType must be either "free" or "premium".' });
      return;
    }
    const pv = await prisma.examPatternVersion.findFirst({ where: { examId } });
    if (!pv) {
      res.status(400).json({ error: 'No ExamPatternVersion configured for this exam' });
      return;
    }
    const exam = await prisma.exam.findUnique({ where: { id: String(examId) }, select: { id: true } });
    if (!exam) {
      res.status(404).json({ error: 'Examination portal not found.' });
      return;
    }
    const test = await prisma.test.create({
      data: {
        examId,
        patternVersionId: pv.id,
        title: String(title).trim(),
        type,
        durationMinutes: Number(durationMinutes),
        totalMarks: Number(totalMarks),
        totalQuestions: 0,
        instructionsEn: instructionsEn || 'Standard All in One CBT Examination Instructions.',
        accessType: normalizedAccessType,
        // Keep legacy consumers in sync while they move to accessType.
        accessLevel: normalizedAccessType === 'premium' ? 'PREMIUM' : 'FREE',
        accessMode: normalizedAccessType === 'premium' ? 'PREMIUM' : 'FREE',
        isPublished: false,
        status: 'DRAFT',
        isActive: false,
        sourceType: type === 'PREVIOUS_YEAR_PAPER' ? 'VERIFIED_PYQ' : 'PATTERN_PRACTICE',
      },
    });
    res.status(201).json({ success: true, test });
  } catch (error) {
    console.error('Error creating test:', error);
    res.status(500).json({ error: 'Failed to create test' });
  }
});

// Update the canonical Free/Premium policy for a mock test. This intentionally
// has its own endpoint so visibility/scheduling changes cannot alter access.
router.patch('/tests/:id/access', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const normalizedAccessType = String(req.body.accessType || '').toLowerCase() as MockAccessType;
    if (!['free', 'premium'].includes(normalizedAccessType)) {
      res.status(400).json({ error: 'accessType must be either "free" or "premium".' });
      return;
    }

    const test = await prisma.test.update({
      where: { id: req.params.id as string },
      data: {
        accessType: normalizedAccessType,
        accessLevel: normalizedAccessType === 'premium' ? 'PREMIUM' : 'FREE',
        accessMode: normalizedAccessType === 'premium' ? 'PREMIUM' : 'FREE',
      },
    });
    res.json({ success: true, test: { ...test, accessType: getMockAccessType(test) } });
  } catch (error: any) {
    if (error?.code === 'P2025') {
      res.status(404).json({ error: 'Test not found' });
      return;
    }
    console.error('Error updating mock test access:', error);
    res.status(500).json({ error: 'Failed to update mock test access' });
  }
});

router.put('/tests/:id', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { title, description, instructionsEn, durationMinutes, totalMarks, totalQuestions, accessType, availableFrom, availableTo } = req.body;
    if (title !== undefined && !String(title).trim()) {
      res.status(400).json({ error: 'Test title cannot be empty.' }); return;
    }
    if (accessType !== undefined && !['free', 'premium'].includes(String(accessType).toLowerCase())) {
      res.status(400).json({ error: 'accessType must be either "free" or "premium".' }); return;
    }
    const normalized = accessType ? String(accessType).toLowerCase() as MockAccessType : undefined;
    const test = await prisma.test.update({ where: { id: req.params.id as string }, data: {
      ...(title !== undefined ? { title: String(title).trim() } : {}),
      ...(description !== undefined ? { description: String(description) } : {}),
      ...(instructionsEn !== undefined ? { instructionsEn: String(instructionsEn) } : {}),
      ...(durationMinutes !== undefined ? { durationMinutes: Number(durationMinutes) } : {}),
      ...(totalMarks !== undefined ? { totalMarks: Number(totalMarks) } : {}),
      ...(totalQuestions !== undefined ? { totalQuestions: Number(totalQuestions) } : {}),
      ...(availableFrom !== undefined ? { availableFrom: availableFrom ? new Date(availableFrom) : null } : {}),
      ...(availableTo !== undefined ? { availableTo: availableTo ? new Date(availableTo) : null } : {}),
      ...(normalized ? { accessType: normalized, accessLevel: normalized === 'premium' ? 'PREMIUM' : 'FREE', accessMode: normalized === 'premium' ? 'PREMIUM' : 'FREE' } : {}),
    }});
    res.json({ success: true, test });
  } catch (error: any) { res.status(500).json({ error: error.message || 'Failed to save test changes' }); }
});

router.patch('/tests/:id/publish', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { isPublished } = req.body;
    const existingTest: any = await prisma.test.findUnique({ where: { id: String(req.params.id) }, include: { exam: { select: { slug: true } } } });
    if (!existingTest) {
      res.status(404).json({ error: 'Test not found.' });
      return;
    }
    if (isPublished && existingTest.exam.slug === SSC_CGL_SLUG) {
      const validation = await validateSscCglPaper(existingTest.id);
      if (!validation.valid) {
        res.status(400).json({ error: 'SSC CGL paper cannot be published until source validation passes.', validation });
        return;
      }
    }
    const count = await prisma.testQuestion.count({ where: { testId: req.params.id } });
    if (isPublished && count === 0) {
      res.status(400).json({ error: 'Cannot publish a mock test with 0 questions.' });
      return;
    }
    const isPub = Boolean(isPublished);
    const test = await prisma.test.update({
      where: { id: req.params.id },
      data: {
        isPublished: isPub,
        status: isPub ? 'PUBLISHED' : 'DRAFT',
        isActive: false, // Publishing does NOT automatically make test live to students
        totalQuestions: count,
      },
    });
    res.json({ success: true, test });
  } catch (error) {
    console.error('Error toggling test publish:', error);
    res.status(500).json({ error: 'Failed to update publish state' });
  }
});

// Update test status / visibility / live activation & scheduling
router.patch('/tests/:id/status', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, isActive, availableFrom, availableTo, singleActiveMode } = req.body;

    const existingTest = await prisma.test.findUnique({
      where: { id },
      include: { _count: { select: { testQuestions: true } } },
    });

    if (!existingTest) {
      res.status(404).json({ error: 'Test not found' });
      return;
    }

    const targetStatus = status || (isActive ? 'ACTIVE' : 'INACTIVE');
    const targetIsActive = targetStatus === 'ACTIVE' || Boolean(isActive);

    if (targetIsActive) {
      const qCount = existingTest._count?.testQuestions ?? existingTest.totalQuestions;
      if (qCount === 0) {
        res.status(400).json({ error: 'Cannot activate a mock test with 0 questions. Please add questions first.' });
        return;
      }
      const exam = await prisma.exam.findUnique({ where: { id: existingTest.examId }, select: { slug: true } });
      if (exam?.slug === SSC_CGL_SLUG) {
        const validation = await validateSscCglPaper(existingTest.id);
        if (!validation.valid) {
          res.status(400).json({ error: 'SSC CGL paper cannot be activated until source validation passes.', validation });
          return;
        }
      }
    }

    // If singleActiveMode is requested and activating this test, deactivate all other tests for this exam
    if (singleActiveMode && targetIsActive) {
      await prisma.test.updateMany({
        where: { examId: existingTest.examId, id: { not: existingTest.id } },
        data: {
          status: 'INACTIVE',
          isActive: false,
          deactivatedAt: new Date(),
        },
      });
    }

    const updateData: any = {
      status: targetStatus,
      isActive: targetIsActive,
      ...(targetIsActive ? { isPublished: true, activatedAt: new Date() } : {}),
      ...(targetStatus === 'INACTIVE' ? { deactivatedAt: new Date() } : {}),
      ...(availableFrom !== undefined ? { availableFrom: availableFrom ? new Date(availableFrom) : null } : {}),
      ...(availableTo !== undefined ? { availableTo: availableTo ? new Date(availableTo) : null } : {}),
    };

    const updatedTest = await prisma.test.update({
      where: { id },
      data: updateData,
    });

    res.json({
      success: true,
      test: updatedTest,
      message: targetIsActive
        ? `Test "${updatedTest.title}" is now ACTIVE (LIVE for students).`
        : `Test "${updatedTest.title}" is now ${targetStatus}.`,
    });
  } catch (error: any) {
    console.error('Error updating test status:', error);
    res.status(500).json({ error: error.message || 'Failed to update test status' });
  }
});

router.get('/tests/:testId/questions', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const tqs = await prisma.testQuestion.findMany({
      where: { testId: req.params.testId },
      include: { question: true },
      orderBy: { questionNumber: 'asc' },
    });
    res.json({ questions: tqs });
  } catch (error) {
    console.error('Error loading test questions:', error);
    res.status(500).json({ error: 'Failed to fetch test questions' });
  }
});

router.post('/questions', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const {
      examId,
      testId,
      sectionName = 'General',
      subject = 'General',
      topic = 'General',
      contentEn,
      contentHi,
      options,
      correctAnswer = 'A',
      explanationEn = '',
      explanationHi = '',
      marks = 1,
      negativeMarks = 0,
      isPYQ = false,
    } = req.body;

    if (!examId || !contentEn || !Array.isArray(options) || options.length < 4) {
      res.status(400).json({ error: 'examId, contentEn, and 4 options are required' });
      return;
    }

    if (testId) {
      const test = await prisma.test.findFirst({ where: { id: String(testId), examId: String(examId) }, select: { id: true } });
      if (!test) {
        res.status(400).json({ error: 'Questions can only be attached to a test in the same examination portal.' });
        return;
      }
    }

    const q = await prisma.question.create({
      data: {
        examId,
        contentEn,
        contentHi: contentHi || null,
        optionsJson: JSON.stringify(options),
        correctAnswerJson: JSON.stringify([correctAnswer]),
        explanationEn,
        explanationHi: explanationHi || null,
        subject,
        topic,
        isPYQ: Boolean(isPYQ),
        sourceProvenance: isPYQ ? 'Official Examination Archive' : 'All in One Original Practice Bank',
        sourceLicense: 'Educational Archive',
        verificationStatus: 'VERIFIED',
        isPublished: true,
      },
    });

    if (testId) {
      const existingCount = await prisma.testQuestion.count({ where: { testId } });
      await prisma.testQuestion.create({
        data: {
          testId,
          questionId: q.id,
          sectionName,
          questionNumber: existingCount + 1,
          marks: Number(marks),
          negativeMarks: Number(negativeMarks),
        },
      });
      await prisma.test.update({
        where: { id: testId },
        data: { totalQuestions: existingCount + 1 },
      });
    }

    res.status(201).json({ success: true, question: q });
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ error: 'Failed to create question' });
  }
});

router.delete('/questions/:id', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    await prisma.question.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Question deleted' });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ error: 'Failed to delete question' });
  }
});

router.put('/questions/:id', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { contentEn, options, correctAnswer, explanationEn, subject, topic, marks, negativeMarks } = req.body;
    const question = await prisma.question.update({ where: { id: req.params.id as string }, data: {
      ...(contentEn !== undefined ? { contentEn: String(contentEn) } : {}),
      ...(options !== undefined ? { optionsJson: JSON.stringify(options) } : {}),
      ...(correctAnswer !== undefined ? { correctAnswerJson: JSON.stringify([correctAnswer]) } : {}),
      ...(explanationEn !== undefined ? { explanationEn: String(explanationEn) } : {}),
      ...(subject !== undefined ? { subject: String(subject) } : {}), ...(topic !== undefined ? { topic: String(topic) } : {}),
    }});
    if (marks !== undefined || negativeMarks !== undefined) await prisma.testQuestion.updateMany({ where: { questionId: question.id }, data: { ...(marks !== undefined ? { marks: Number(marks) } : {}), ...(negativeMarks !== undefined ? { negativeMarks: Number(negativeMarks) } : {}) } });
    res.json({ success: true, question });
  } catch (error: any) { res.status(500).json({ error: error.message || 'Failed to update question' }); }
});

// Exchange / Swap two question positions inside a test
router.post('/tests/:testId/reorder', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { testQuestionIdA, testQuestionIdB } = req.body;
    const [tqA, tqB] = await Promise.all([
      prisma.testQuestion.findUnique({ where: { id: testQuestionIdA } }),
      prisma.testQuestion.findUnique({ where: { id: testQuestionIdB } }),
    ]);
    if (!tqA || !tqB) {
      res.status(404).json({ error: 'One or both TestQuestion records not found' });
      return;
    }
    await prisma.$transaction([
      prisma.testQuestion.update({ where: { id: tqA.id }, data: { questionNumber: tqB.questionNumber } }),
      prisma.testQuestion.update({ where: { id: tqB.id }, data: { questionNumber: tqA.questionNumber } }),
    ]);
    res.json({ success: true, message: `Swapped Q.${tqA.questionNumber} and Q.${tqB.questionNumber}` });
  } catch (error) {
    console.error('Error reordering questions:', error);
    res.status(500).json({ error: 'Failed to swap question positions' });
  }
});

// ==========================================
// STUDENT LIVE ACTIVITY & HISTORY MONITORING
// ==========================================

// Get real-time student activity, live test attempts, target exam distribution, and attempts history
router.get('/students/activity', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { search, examSlug, status, page = '1', limit = '25' } = req.query as Record<string, string>;
    const pageNum = Math.max(1, parseInt(page) || 1);
    const take = Math.min(100, Math.max(1, parseInt(limit) || 25));
    const skip = (pageNum - 1) * take;

    // 1. Summary counts & exams
    const studentDirectoryWhere: any = { role: 'STUDENT' };
    if (search && search.trim()) {
      const studentSearch = search.trim();
      studentDirectoryWhere.OR = [
        { name: { contains: studentSearch } },
        { email: { contains: studentSearch } },
        { studentId: { contains: studentSearch } },
      ];
    }

    const [totalStudents, loggedInStudents, inProgressCount, completedCount, allExams, studentDirectoryTotal, recentStudents] = await Promise.all([
      prisma.user.count({ where: { role: 'STUDENT' } }),
      prisma.user.count({ where: { role: 'STUDENT', lastLoginAt: { not: null } } }),
      prisma.testAttempt.count({ where: { status: 'IN_PROGRESS' } }),
      prisma.testAttempt.count({ where: { status: 'COMPLETED' } }),
      prisma.exam.findMany({
        select: { id: true, slug: true, title: true, shortName: true, accentColor: true },
      }),
      prisma.user.count({ where: studentDirectoryWhere }),
      prisma.user.findMany({
        where: studentDirectoryWhere,
        select: {
          id: true,
          name: true,
          email: true,
          studentId: true,
          targetExamId: true,
          createdAt: true,
          lastLoginAt: true,
          lastSeenAt: true,
        },
        orderBy: [
          { lastSeenAt: 'desc' },
          { createdAt: 'desc' },
        ],
        take: 50,
      }),
    ]);

    const examMapBySlug = new Map(allExams.map(e => [e.slug.toLowerCase(), e]));
    const examMapById = new Map(allExams.map(e => [e.id, e]));

    // 2. Target Exam Distribution among students
    const studentsByTargetExam = await prisma.user.groupBy({
      by: ['targetExamId'],
      where: { role: 'STUDENT' },
      _count: { id: true },
    });

    const targetExamDistribution = studentsByTargetExam.map(g => {
      const slugKey = (g.targetExamId || 'unassigned').toLowerCase();
      const exam = examMapBySlug.get(slugKey) || examMapById.get(g.targetExamId || '');
      return {
        targetExamId: g.targetExamId || 'UNASSIGNED',
        examName: exam ? exam.title : (g.targetExamId ? g.targetExamId.toUpperCase() : 'Unassigned'),
        shortName: exam ? exam.shortName : (g.targetExamId ? g.targetExamId.toUpperCase() : 'Unassigned'),
        accentColor: exam?.accentColor || '#64748B',
        count: g._count.id,
      };
    }).sort((a, b) => b.count - a.count);

    // 3. Live Active In-Progress Sessions (students writing exams right now)
    const liveAttempts = await prisma.testAttempt.findMany({
      where: { status: 'IN_PROGRESS' },
      include: {
        user: {
          select: { id: true, name: true, email: true, studentId: true, targetExamId: true, avatar: true },
        },
        test: {
          select: { id: true, title: true, durationMinutes: true, totalMarks: true, totalQuestions: true, type: true },
        },
        exam: {
          select: { id: true, title: true, shortName: true, slug: true, accentColor: true },
        },
      },
      orderBy: { startedAt: 'desc' },
      take: 50,
    });

    const formattedLiveAttempts = liveAttempts.map((att: any) => {
      const startedAt = new Date(att.startedAt);
      const elapsedMinutes = Math.max(0, Math.floor((Date.now() - startedAt.getTime()) / (1000 * 60)));
      return {
        id: att.id,
        startedAt: att.startedAt,
        elapsedMinutes,
        status: att.status,
        user: att.user,
        test: att.test,
        exam: att.exam,
      };
    });

    // 4. Live Exam Distribution (which exams are currently being attempted right now)
    const liveExamsCount: Record<string, { examName: string; shortName: string; count: number; accentColor: string }> = {};
    for (const la of formattedLiveAttempts) {
      const examKey = la.exam?.shortName || la.exam?.title || 'Unknown Exam';
      if (!liveExamsCount[examKey]) {
        liveExamsCount[examKey] = {
          examName: la.exam?.title || examKey,
          shortName: la.exam?.shortName || examKey,
          count: 0,
          accentColor: la.exam?.accentColor || '#1D4ED8',
        };
      }
      liveExamsCount[examKey].count += 1;
    }

    // 5. Paginated & Filtered Attempts History
    const whereClause: any = {};
    if (status && status !== 'ALL') {
      whereClause.status = status;
    }
    if (examSlug && examSlug !== 'ALL') {
      const matchExam = allExams.find(e => e.slug.toLowerCase() === examSlug.toLowerCase() || e.id === examSlug);
      if (matchExam) {
        whereClause.examId = matchExam.id;
      }
    }
    if (search && search.trim()) {
      const s = search.trim();
      whereClause.OR = [
        { user: { name: { contains: s } } },
        { user: { email: { contains: s } } },
        { user: { studentId: { contains: s } } },
        { test: { title: { contains: s } } },
      ];
    }

    const [totalHistoryCount, historyAttempts] = await Promise.all([
      prisma.testAttempt.count({ where: whereClause }),
      prisma.testAttempt.findMany({
        where: whereClause,
        include: {
          user: {
            select: { id: true, name: true, email: true, studentId: true, targetExamId: true, avatar: true },
          },
          test: {
            select: { id: true, title: true, durationMinutes: true, totalMarks: true, totalQuestions: true, type: true },
          },
          exam: {
            select: { id: true, title: true, shortName: true, slug: true, accentColor: true },
          },
        },
        orderBy: { startedAt: 'desc' },
        skip,
        take,
      }),
    ]);

    const formattedHistory = (historyAttempts as any[]).map((att: any) => {
      let sectionScores = {};
      try {
        sectionScores = JSON.parse(att.sectionScoresJson || '{}');
      } catch (e) {
        sectionScores = {};
      }

      return {
        id: att.id,
        startedAt: att.startedAt,
        submittedAt: att.submittedAt,
        status: att.status,
        totalScore: att.totalScore,
        totalMarks: att.totalMarks || (att.test ? att.test.totalMarks : 0),
        accuracyPct: att.accuracyPct,
        percentile: att.percentile,
        totalAttempted: att.totalAttempted,
        totalCorrect: att.totalCorrect,
        totalIncorrect: att.totalIncorrect,
        totalUnattempted: att.totalUnattempted,
        timeSpentSeconds: att.timeSpentSeconds,
        sectionScores,
        user: att.user,
        test: att.test,
        exam: att.exam,
      };
    });

    res.json({
      summary: {
        totalStudents,
        loggedInStudents,
        activeInTest: inProgressCount,
        completedAttempts: completedCount,
        targetExamDistribution,
        liveExamsDistribution: Object.values(liveExamsCount),
      },
      liveAttempts: formattedLiveAttempts,
      students: {
        total: studentDirectoryTotal,
        limit: 50,
        entries: recentStudents,
      },
      history: {
        total: totalHistoryCount,
        page: pageNum,
        totalPages: Math.ceil(totalHistoryCount / take) || 1,
        limit: take,
        attempts: formattedHistory,
      },
      availableExams: allExams,
    });
  } catch (error) {
    console.error('Error fetching admin student activity:', error);
    res.status(500).json({ error: 'Failed to fetch student activity' });
  }
});

// Detailed history for a specific student
router.get('/students/:userId/history', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        studentId: true,
        role: true,
        targetExamId: true,
        examSelectedAt: true,
        avatar: true,
        referralCredits: true,
        createdAt: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    const attempts = await prisma.testAttempt.findMany({
      where: { userId },
      include: {
        test: {
          select: { id: true, title: true, durationMinutes: true, totalMarks: true, totalQuestions: true, type: true },
        },
        exam: {
          select: { id: true, title: true, shortName: true, slug: true, accentColor: true },
        },
      },
      orderBy: { startedAt: 'desc' },
    });

    const formattedAttempts = (attempts as any[]).map((att: any) => {
      let sectionScores = {};
      try {
        sectionScores = JSON.parse(att.sectionScoresJson || '{}');
      } catch (e) {
        sectionScores = {};
      }
      return {
        id: att.id,
        startedAt: att.startedAt,
        submittedAt: att.submittedAt,
        status: att.status,
        totalScore: att.totalScore,
        totalMarks: att.totalMarks || (att.test ? att.test.totalMarks : 0),
        accuracyPct: att.accuracyPct,
        percentile: att.percentile,
        totalAttempted: att.totalAttempted,
        totalCorrect: att.totalCorrect,
        totalIncorrect: att.totalIncorrect,
        totalUnattempted: att.totalUnattempted,
        timeSpentSeconds: att.timeSpentSeconds,
        sectionScores,
        test: att.test,
        exam: att.exam,
      };
    });

    const completedAttempts = formattedAttempts.filter((a: any) => a.status === 'COMPLETED');
    const totalCompleted = completedAttempts.length;
    const avgScore = totalCompleted > 0
      ? Math.round((completedAttempts.reduce((acc: number, a: any) => acc + a.totalScore, 0) / totalCompleted) * 10) / 10
      : 0;
    const avgAccuracy = totalCompleted > 0
      ? Math.round((completedAttempts.reduce((acc: number, a: any) => acc + a.accuracyPct, 0) / totalCompleted) * 10) / 10
      : 0;
    const bestScore = totalCompleted > 0
      ? Math.max(...completedAttempts.map((a: any) => a.totalScore))
      : 0;

    res.json({
      student: user,
      stats: {
        totalAttempts: formattedAttempts.length,
        totalCompleted,
        avgScore,
        avgAccuracy,
        bestScore,
        lastActiveAt: formattedAttempts[0]?.startedAt || user.createdAt,
      },
      attempts: formattedAttempts,
    });
  } catch (error) {
    console.error('Error fetching student history:', error);
    res.status(500).json({ error: 'Failed to fetch student history' });
  }
});

// Detailed attempt breakdown for admin review
router.get('/attempts/:attemptId/detail', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const attemptId = req.params.attemptId as string;
    const attempt = await prisma.testAttempt.findUnique({
      where: { id: attemptId },
      include: {
        user: {
          select: { id: true, name: true, email: true, studentId: true, targetExamId: true },
        },
        test: {
          select: { id: true, title: true, durationMinutes: true, totalMarks: true, totalQuestions: true, type: true },
        },
        exam: {
          select: { id: true, title: true, shortName: true, slug: true, accentColor: true },
        },
      },
    });

    if (!attempt) {
      res.status(404).json({ error: 'Attempt not found' });
      return;
    }

    let sectionScores = {};
    let responses = [];
    try {
      sectionScores = JSON.parse(attempt.sectionScoresJson || '{}');
    } catch (e) {}
    try {
      responses = JSON.parse(attempt.responsesJson || '[]');
    } catch (e) {}

    res.json({
      attempt: {
        ...attempt,
        sectionScores,
        responses,
      },
    });
  } catch (error) {
    console.error('Error fetching attempt detail:', error);
    res.status(500).json({ error: 'Failed to fetch attempt detail' });
  }
});

export default router;
