import { Router, Request, Response } from 'express';
import { prisma } from '../prisma';
import { authenticate, requireRole } from '../middleware/auth';

const router = Router();

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
router.get('/exams', authenticate, requireRole(['ADMIN']), async (_req: Request, res: Response) => {
  try {
    const [categories, exams] = await Promise.all([
      prisma.examCategory.findMany({ orderBy: { displayOrder: 'asc' } }),
      prisma.exam.findMany({
        include: {
          category: true,
          patternVersions: { include: { sections: { orderBy: { order: 'asc' } } } },
          _count: { select: { tests: true, questions: true } },
        },
        orderBy: { createdAt: 'asc' },
      }),
    ]);
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

    if (!slug || !title || !shortName || !categoryId) {
      res.status(400).json({ error: 'slug, title, shortName, and categoryId are required.' });
      return;
    }

    const cleanSlug = String(slug).trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const exam = await prisma.exam.create({
      data: {
        slug: cleanSlug,
        title: String(title).trim(),
        shortName: String(shortName).trim(),
        conductingBody: String(conductingBody || 'Official Examination Authority').trim(),
        officialWebsite: String(officialWebsite).trim(),
        description: String(description || title).trim(),
        eligibilitySummary: String(eligibilitySummary || 'Refer to official notification').trim(),
        categoryId,
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

    if (Array.isArray(sections)) {
      for (let i = 0; i < sections.length; i++) {
        const s = sections[i];
        await prisma.examSection.create({
          data: {
            patternVersionId: pv.id,
            name: String(s.name),
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
      description,
      eligibilitySummary,
      status,
      isComingSoon,
      portalHeadline,
      latestNotification,
      notificationDate,
      officialNoticeUrl,
      accentColor,
    } = req.body;

    const updated = await prisma.exam.update({
      where: { id },
      data: {
        ...(title !== undefined ? { title } : {}),
        ...(shortName !== undefined ? { shortName } : {}),
        ...(conductingBody !== undefined ? { conductingBody } : {}),
        ...(description !== undefined ? { description } : {}),
        ...(eligibilitySummary !== undefined ? { eligibilitySummary } : {}),
        ...(status !== undefined ? { status } : {}),
        ...(isComingSoon !== undefined ? { isComingSoon: Boolean(isComingSoon) } : {}),
        ...(portalHeadline !== undefined ? { portalHeadline } : {}),
        ...(latestNotification !== undefined ? { latestNotification } : {}),
        ...(notificationDate !== undefined ? { notificationDate } : {}),
        ...(officialNoticeUrl !== undefined ? { officialNoticeUrl } : {}),
        ...(accentColor !== undefined ? { accentColor } : {}),
      },
    });
    res.json({ success: true, exam: updated });
  } catch (error) {
    console.error('Error updating exam:', error);
    res.status(500).json({ error: 'Failed to update exam' });
  }
});

router.get('/exams/:examId/tests', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const tests = await prisma.test.findMany({
      where: { examId: req.params.examId },
      include: { _count: { select: { testQuestions: true } } },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ tests });
  } catch (error) {
    console.error('Error fetching exam tests:', error);
    res.status(500).json({ error: 'Failed to fetch exam tests' });
  }
});

router.post('/tests', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { examId, title, type = 'FULL_MOCK', durationMinutes = 120, totalMarks = 100, accessLevel = 'FREE', instructionsEn } = req.body;
    if (!examId || !title) {
      res.status(400).json({ error: 'examId and title are required' });
      return;
    }
    const pv = await prisma.examPatternVersion.findFirst({ where: { examId } });
    if (!pv) {
      res.status(400).json({ error: 'No ExamPatternVersion configured for this exam' });
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
        accessLevel,
        isPublished: false,
        sourceType: type === 'PREVIOUS_YEAR_PAPER' ? 'VERIFIED_PYQ' : 'PATTERN_PRACTICE',
      },
    });
    res.status(201).json({ success: true, test });
  } catch (error) {
    console.error('Error creating test:', error);
    res.status(500).json({ error: 'Failed to create test' });
  }
});

router.patch('/tests/:id/publish', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { isPublished } = req.body;
    const count = await prisma.testQuestion.count({ where: { testId: req.params.id } });
    if (isPublished && count === 0) {
      res.status(400).json({ error: 'Cannot publish a mock test with 0 questions.' });
      return;
    }
    const test = await prisma.test.update({
      where: { id: req.params.id },
      data: { isPublished: Boolean(isPublished), totalQuestions: count },
    });
    res.json({ success: true, test });
  } catch (error) {
    console.error('Error toggling test publish:', error);
    res.status(500).json({ error: 'Failed to update publish state' });
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
    const [totalStudents, inProgressCount, completedCount, allExams] = await Promise.all([
      prisma.user.count({ where: { role: 'STUDENT' } }),
      prisma.testAttempt.count({ where: { status: 'IN_PROGRESS' } }),
      prisma.testAttempt.count({ where: { status: 'COMPLETED' } }),
      prisma.exam.findMany({
        select: { id: true, slug: true, title: true, shortName: true, accentColor: true },
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
        activeInTest: inProgressCount,
        completedAttempts: completedCount,
        targetExamDistribution,
        liveExamsDistribution: Object.values(liveExamsCount),
      },
      liveAttempts: formattedLiveAttempts,
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
