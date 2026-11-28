import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';
import { authenticate, AuthUser, requireRole } from '../middleware/auth';
import { SUPERTET_EXAM_SLUG, SUPERTET_SUBJECTS } from './constants';
import { getSuperTetCatalog } from './catalog.service';
import {
  autosaveSuperTetAttempt,
  beginSuperTetAttemptTimer,
  getSuperTetAttemptResult,
  startOrResumeSuperTetAttempt,
  submitSuperTetAttempt,
  SuperTetHttpError,
} from './cbt.service';
import {
  createAdminSuperTetTest,
  getAdminSuperTetOverview,
  getAdminSuperTetTestQuestions,
  importQuestionsIntoSuperTetTest,
  listAdminSuperTetAttempts,
  listAdminSuperTetReports,
  resolveAdminSuperTetReport,
  updateAdminSuperTetPlanMocks,
  updateAdminSuperTetQuestion,
  updateAdminSuperTetTest,
  validateExistingSuperTetTest,
} from './admin.service';

const JWT_SECRET =
  process.env.JWT_SECRET || 'examverse_super_secret_jwt_key_2025_prod_grade_xyz';

const portalRouter = Router();

async function optionalAuthenticate(
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    next();
    return;
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded?.id || decoded?.userId;
    if (userId) {
      const dbUser = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          studentId: true,
          targetExamId: true,
        },
      });
      if (dbUser) {
        req.user = {
          id: dbUser.id,
          userId: dbUser.id,
          email: dbUser.email,
          name: dbUser.name,
          role: dbUser.role as AuthUser['role'],
          studentId: dbUser.studentId || undefined,
          targetExamId: dbUser.targetExamId || undefined,
        };
      }
    }
  } catch {
    // Public catalog falls back gracefully to guest view on invalid/expired optional token
  }
  next();
}

function handleError(res: Response, error: unknown, fallbackMessage: string) {
  if (error instanceof SuperTetHttpError) {
    res.status(error.status).json({
      error: error.message,
      code: error.code,
      ...(error.extra || {}),
    });
    return;
  }
  console.error(`[SuperTET API] ${fallbackMessage}:`, error);
  res.status(500).json({ error: fallbackMessage });
}

// ---------------------------------------------------------------------------
// STUDENT & PUBLIC CATALOG ENDPOINTS (/api/super-tet/...)
// ---------------------------------------------------------------------------

portalRouter.get('/catalog', optionalAuthenticate, async (req: Request, res: Response) => {
  try {
    const data = await getSuperTetCatalog(req.user, {
      difficultyTier: req.query.difficultyTier ? String(req.query.difficultyTier) : undefined,
      sourceType: req.query.sourceType ? String(req.query.sourceType) : undefined,
      accessType: req.query.accessType ? String(req.query.accessType) : undefined,
      attemptStatus: req.query.attemptStatus ? String(req.query.attemptStatus) : undefined,
      search: req.query.search ? String(req.query.search) : undefined,
      page: req.query.page ? Number(req.query.page) : 1,
      limit: req.query.limit ? Number(req.query.limit) : 100,
    });
    if (!data) {
      res.status(404).json({ error: 'Super TET portal is not initialized.' });
      return;
    }
    res.json(data);
  } catch (err) {
    handleError(res, err, 'Failed to load Super TET mock test catalog');
  }
});

portalRouter.get('/my-attempts', authenticate, async (req: Request, res: Response) => {
  try {
    const exam = await prisma.exam.findUnique({ where: { slug: SUPERTET_EXAM_SLUG } });
    if (!exam) {
      res.status(404).json({ error: 'Super TET exam not found.' });
      return;
    }

    const attempts = await prisma.testAttempt.findMany({
      where: { userId: req.user!.id, examId: exam.id },
      orderBy: { createdAt: 'desc' },
      include: {
        test: {
          select: {
            id: true,
            title: true,
            mockNumber: true,
            difficultyTier: true,
            sourceType: true,
            totalQuestions: true,
            totalMarks: true,
            durationMinutes: true,
          },
        },
      },
    });

    const completed = attempts.filter(
      (a) => a.status === 'COMPLETED' || a.status === 'TIMED_OUT'
    );

    const cumulativeSubjectMap = new Map<
      string,
      { subject: string; subjectHi: string; totalQuestions: number; correct: number; attempted: number }
    >();
    for (const s of SUPERTET_SUBJECTS) {
      cumulativeSubjectMap.set(s.key, {
        subject: s.key,
        subjectHi: s.sectionNameHi,
        totalQuestions: 0,
        correct: 0,
        attempted: 0,
      });
    }

    for (const att of completed) {
      try {
        const parsed = JSON.parse(att.sectionScoresJson || '{}');
        const subjects: any[] = Array.isArray(parsed.subjects) ? parsed.subjects : [];
        for (const sub of subjects) {
          const entry = cumulativeSubjectMap.get(sub.subject);
          if (entry) {
            entry.totalQuestions += Number(sub.totalQuestions || 0);
            entry.correct += Number(sub.correct || 0);
            entry.attempted += Number(sub.attempted || 0);
          }
        }
      } catch {
        // Ignore malformed legacy section JSON
      }
    }

    const avgScore =
      completed.length > 0
        ? Number((completed.reduce((acc, a) => acc + a.totalScore, 0) / completed.length).toFixed(2))
        : 0;
    const bestScore =
      completed.length > 0 ? Math.max(...completed.map((a) => a.totalScore)) : 0;
    const avgAccuracy =
      completed.length > 0
        ? Number((completed.reduce((acc, a) => acc + a.accuracyPct, 0) / completed.length).toFixed(2))
        : 0;

    res.json({
      attempts,
      analytics: {
        totalAttempts: attempts.length,
        completedCount: completed.length,
        inProgressCount: attempts.filter((a) => a.status === 'IN_PROGRESS').length,
        avgScore,
        bestScore,
        avgAccuracy,
        subjectMastery: Array.from(cumulativeSubjectMap.values()).map((s) => ({
          ...s,
          accuracyPct: s.attempted > 0 ? Number(((s.correct / s.attempted) * 100).toFixed(2)) : 0,
        })),
      },
    });
  } catch (err) {
    handleError(res, err, 'Failed to fetch Super TET attempts');
  }
});

portalRouter.post('/tests/:testId/start', authenticate, async (req: Request, res: Response) => {
  try {
    const payload = await startOrResumeSuperTetAttempt(req.user!, req.params.testId, {
      forceNew: Boolean(req.body?.forceNew),
    });
    res.json(payload);
  } catch (err) {
    handleError(res, err, 'Failed to start Super TET mock test');
  }
});

portalRouter.post('/attempts/:attemptId/begin', authenticate, async (req: Request, res: Response) => {
  try {
    const payload = await beginSuperTetAttemptTimer(req.user!, req.params.attemptId);
    res.json(payload);
  } catch (err) {
    handleError(res, err, 'Failed to confirm and start Super TET timer');
  }
});

portalRouter.post('/attempts/:attemptId/autosave', authenticate, async (req: Request, res: Response) => {
  try {
    const payload = await autosaveSuperTetAttempt(req.user!, req.params.attemptId, req.body || {});
    res.json(payload);
  } catch (err) {
    handleError(res, err, 'Failed to autosave Super TET attempt');
  }
});

portalRouter.post('/attempts/:attemptId/submit', authenticate, async (req: Request, res: Response) => {
  try {
    const result = await submitSuperTetAttempt(req.user!, req.params.attemptId, req.body || {});
    res.json(result);
  } catch (err) {
    handleError(res, err, 'Failed to submit Super TET mock test');
  }
});

portalRouter.get('/attempts/:attemptId/result', authenticate, async (req: Request, res: Response) => {
  try {
    const result = await getSuperTetAttemptResult(req.user!, req.params.attemptId);
    res.json(result);
  } catch (err) {
    handleError(res, err, 'Failed to load Super TET test result');
  }
});

// Core Question Bookmarks (for the 100 Full-Length Mocks)
portalRouter.get('/core-bookmarks', authenticate, async (req: Request, res: Response) => {
  try {
    const subjectFilter = req.query.subject ? String(req.query.subject) : undefined;
    const bookmarks = await prisma.superTetCoreBookmark.findMany({
      where: {
        userId: req.user!.id,
        ...(subjectFilter && subjectFilter !== 'ALL'
          ? { question: { subject: subjectFilter } }
          : {}),
      },
      orderBy: { createdAt: 'desc' },
      include: {
        question: {
          select: {
            id: true,
            subject: true,
            topic: true,
            chapter: true,
            contentHi: true,
            contentEn: true,
            optionsJson: true,
            correctAnswerJson: true,
            explanationHi: true,
            explanationEn: true,
            formulaHi: true,
            grammarRuleHi: true,
            referenceDate: true,
          },
        },
      },
    });
    res.json({ bookmarks });
  } catch (err) {
    handleError(res, err, 'Failed to fetch Super TET bookmarks');
  }
});

portalRouter.post('/core-bookmarks', authenticate, async (req: Request, res: Response) => {
  try {
    const { questionId, testId, notes } = req.body || {};
    if (!questionId) {
      res.status(400).json({ error: 'questionId is required.' });
      return;
    }
    const q = await prisma.question.findUnique({
      where: { id: String(questionId) },
      include: { exam: true },
    });
    if (!q || q.exam.slug !== SUPERTET_EXAM_SLUG) {
      res.status(404).json({ error: 'Super TET question not found.' });
      return;
    }

    const existing = await prisma.superTetCoreBookmark.findUnique({
      where: { userId_questionId: { userId: req.user!.id, questionId: q.id } },
    });
    if (existing) {
      await prisma.superTetCoreBookmark.delete({ where: { id: existing.id } });
      res.json({ bookmarked: false, questionId: q.id });
      return;
    }

    const created = await prisma.superTetCoreBookmark.create({
      data: {
        userId: req.user!.id,
        questionId: q.id,
        testId: testId ? String(testId) : null,
        notes: notes ? String(notes) : null,
      },
    });
    res.status(201).json({ bookmarked: true, bookmark: created });
  } catch (err) {
    handleError(res, err, 'Failed to toggle Super TET bookmark');
  }
});

portalRouter.delete('/core-bookmarks/:questionId', authenticate, async (req: Request, res: Response) => {
  try {
    await prisma.superTetCoreBookmark.deleteMany({
      where: { userId: req.user!.id, questionId: req.params.questionId },
    });
    res.json({ deleted: true });
  } catch (err) {
    handleError(res, err, 'Failed to remove Super TET bookmark');
  }
});

// Student Report Incorrect Question
portalRouter.post('/questions/:questionId/report', authenticate, async (req: Request, res: Response) => {
  try {
    const q = await prisma.question.findUnique({
      where: { id: req.params.questionId },
      include: { exam: true },
    });
    if (!q || q.exam.slug !== SUPERTET_EXAM_SLUG) {
      res.status(404).json({ error: 'Super TET question not found.' });
      return;
    }
    const issueType = String(req.body?.issueType || 'WRONG_ANSWER').toUpperCase();
    const description = String(req.body?.description || '').trim();
    if (description.length < 5) {
      res.status(400).json({ error: 'Please describe the issue in at least 5 characters.' });
      return;
    }
    const created = await prisma.superTetQuestionReport.create({
      data: {
        userId: req.user!.id,
        questionId: q.id,
        testId: req.body?.testId ? String(req.body.testId) : null,
        attemptId: req.body?.attemptId ? String(req.body.attemptId) : null,
        issueType,
        description,
      },
    });
    res.status(201).json({ report: created });
  } catch (err) {
    handleError(res, err, 'Failed to submit question report');
  }
});

// ---------------------------------------------------------------------------
// ADMIN SUPER TET MANAGEMENT ENDPOINTS (/api/super-tet/admin/...)
// ---------------------------------------------------------------------------

portalRouter.get(
  '/admin/overview',
  authenticate,
  requireRole(['ADMIN']),
  async (_req: Request, res: Response) => {
    try {
      const overview = await getAdminSuperTetOverview();
      res.json(overview);
    } catch (err) {
      handleError(res, err, 'Failed to fetch Super TET admin overview');
    }
  }
);

portalRouter.post(
  '/admin/tests',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const test = await createAdminSuperTetTest(req.body || {});
      res.status(201).json({ test });
    } catch (err) {
      handleError(res, err, 'Failed to create Super TET mock test');
    }
  }
);

portalRouter.put(
  '/admin/tests/:testId',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const test = await updateAdminSuperTetTest(req.params.testId, req.body || {});
      res.json({ test });
    } catch (err) {
      handleError(res, err, 'Failed to update Super TET mock test');
    }
  }
);

portalRouter.get(
  '/admin/tests/:testId/validate',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const { validation } = await validateExistingSuperTetTest(req.params.testId);
      res.json(validation);
    } catch (err) {
      handleError(res, err, 'Failed to validate Super TET mock test');
    }
  }
);

portalRouter.get(
  '/admin/tests/:testId/questions',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const result = await getAdminSuperTetTestQuestions(req.params.testId, {
        subject: req.query.subject ? String(req.query.subject) : undefined,
        search: req.query.search ? String(req.query.search) : undefined,
      });
      res.json(result);
    } catch (err) {
      handleError(res, err, 'Failed to fetch Super TET test questions');
    }
  }
);

portalRouter.put(
  '/admin/core-questions/:questionId',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const question = await updateAdminSuperTetQuestion(req.params.questionId, req.body || {});
      res.json({ question });
    } catch (err) {
      handleError(res, err, 'Failed to update Super TET question');
    }
  }
);

portalRouter.post(
  '/admin/tests/:testId/import-questions',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const rows = Array.isArray(req.body?.questions) ? req.body.questions : req.body;
      const result = await importQuestionsIntoSuperTetTest(req.params.testId, rows, {
        replaceExisting: Boolean(req.body?.replaceExisting),
      });
      res.json(result);
    } catch (err) {
      handleError(res, err, 'Failed to import Super TET questions');
    }
  }
);

portalRouter.put(
  '/admin/plans/:planId/mocks',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const mockTestIds = Array.isArray(req.body?.mockTestIds) ? req.body.mockTestIds : [];
      const result = await updateAdminSuperTetPlanMocks(req.params.planId, mockTestIds);
      res.json(result);
    } catch (err) {
      handleError(res, err, 'Failed to update Super TET plan mock test mapping');
    }
  }
);

portalRouter.get(
  '/admin/reports',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const reports = await listAdminSuperTetReports(
        req.query.status ? String(req.query.status) : undefined
      );
      res.json({ reports });
    } catch (err) {
      handleError(res, err, 'Failed to fetch Super TET question reports');
    }
  }
);

portalRouter.put(
  '/admin/reports/:reportId',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const report = await resolveAdminSuperTetReport(
        req.params.reportId,
        req.user!.id,
        req.body || {}
      );
      res.json({ report });
    } catch (err) {
      handleError(res, err, 'Failed to resolve Super TET question report');
    }
  }
);

portalRouter.get(
  '/admin/attempts',
  authenticate,
  requireRole(['ADMIN']),
  async (req: Request, res: Response) => {
    try {
      const attempts = await listAdminSuperTetAttempts(
        req.query.limit ? Number(req.query.limit) : 100
      );
      res.json({ attempts });
    } catch (err) {
      handleError(res, err, 'Failed to fetch Super TET student attempts');
    }
  }
);

export default portalRouter;
