import { Router, Request, Response } from 'express';
import { prisma } from '../prisma';
import { authenticate, requireRole } from '../middleware/auth';
import superTetPortalRouter from '../supertet/portal.routes';

const router = Router();
router.use('/', superTetPortalRouter);

function formatQuestion(q: any) {
  let options: any[] = [];
  let revisionHistory: any[] = [];
  try {
    options = JSON.parse(q.optionsJson || '[]');
  } catch {
    options = [];
  }
  try {
    revisionHistory = JSON.parse(q.revisionHistoryJson || '[]');
  } catch {
    revisionHistory = [];
  }
  return {
    id: q.id,
    superTetExamId: q.superTetExamId,
    examYear: q.examYear,
    questionNumber: q.questionNumber,
    subject: q.subject,
    topic: q.topic,
    questionHindi: q.questionHindi,
    questionEnglish: q.questionEnglish,
    options,
    correctAnswer: q.correctAnswer,
    answerKeyStatus: q.answerKeyStatus,
    answerKeySource: q.answerKeySource,
    answerKeyVerifiedAt: q.answerKeyVerifiedAt,
    explanationHindi: q.explanationHindi,
    explanationEnglish: q.explanationEnglish,
    difficulty: q.difficulty,
    sourceUrl: q.sourceUrl,
    sourceType: q.sourceType,
    verificationStatus: q.verificationStatus,
    languageType: q.languageType,
    isPYQ: q.isPYQ,
    isActive: q.isActive,
    revisionHistory,
    createdAt: q.createdAt,
    updatedAt: q.updatedAt,
  };
}

function formatExam(e: any) {
  let markingScheme: any = {};
  let subjectDistribution: Record<string, number> = {};
  try {
    markingScheme = JSON.parse(e.markingScheme || '{}');
  } catch {
    markingScheme = {};
  }
  try {
    subjectDistribution = JSON.parse(e.subjectDistribution || '{}');
  } catch {
    subjectDistribution = {};
  }
  return {
    ...e,
    markingScheme,
    subjectDistribution,
  };
}

// ============================================================================
// 1. GET /api/super-tet/years — Complete 2012–2025 Year-Wise Historical Matrix
// ============================================================================
router.get('/years', async (_req: Request, res: Response) => {
  try {
    const years = await prisma.superTetExam.findMany({
      where: { isPracticePaper: false },
      orderBy: { examYear: 'desc' },
      include: {
        _count: { select: { questions: true } },
      },
    });

    const formatted = years.map((y) => ({
      ...formatExam(y),
      actualImportedQuestions: y._count.questions,
    }));

    res.json({
      archivePeriod: '2012–2025',
      totalYearsTracked: formatted.length,
      conductedYears: formatted.filter((y) => y.verificationStatus !== 'NO_CONFIRMED_EXAM_RECORD').map((y) => y.examYear),
      years: formatted,
    });
  } catch (error) {
    console.error('Error fetching SUPER TET years:', error);
    res.status(500).json({ error: 'Failed to fetch SUPER TET year archive' });
  }
});

// ============================================================================
// 2. GET /api/super-tet/exams — All SUPER TET exams (Historical + Practice)
// ============================================================================
router.get('/exams', async (req: Request, res: Response) => {
  try {
    const { includeUnpublished } = req.query;
    const where: any = {};
    if (includeUnpublished !== 'true') {
      where.isPublished = true;
    }

    const exams = await prisma.superTetExam.findMany({
      where,
      orderBy: [{ isPracticePaper: 'asc' }, { examYear: 'desc' }],
      include: { _count: { select: { questions: true } } },
    });

    res.json({
      exams: exams.map((e) => ({
        ...formatExam(e),
        actualImportedQuestions: e._count.questions,
      })),
    });
  } catch (error) {
    console.error('Error fetching SUPER TET exams:', error);
    res.status(500).json({ error: 'Failed to fetch SUPER TET exams' });
  }
});

// ============================================================================
// 3. GET /api/super-tet/exams/:year — Detailed Exam Info & Notice for Year
// ============================================================================
router.get('/exams/:year', async (req: Request, res: Response) => {
  try {
    const yearNum = Number(req.params.year);
    if (isNaN(yearNum)) {
      res.status(400).json({ error: 'Invalid exam year parameter' });
      return;
    }

    const exam = await prisma.superTetExam.findFirst({
      where: { examYear: yearNum, isPracticePaper: false },
      include: {
        _count: { select: { questions: true } },
      },
    });

    if (!exam) {
      res.status(404).json({ error: `No SUPER TET record found for ${yearNum}` });
      return;
    }

    const subjectCountsRaw = await prisma.superTetQuestion.groupBy({
      by: ['subject'],
      where: { superTetExamId: exam.id, isActive: true },
      _count: { id: true },
    });

    const actualSubjectBreakdown: Record<string, number> = {};
    for (const s of subjectCountsRaw) {
      actualSubjectBreakdown[s.subject] = s._count.id;
    }

    res.json({
      exam: {
        ...formatExam(exam),
        actualImportedQuestions: exam._count.questions,
        actualSubjectBreakdown,
      },
    });
  } catch (error) {
    console.error('Error fetching SUPER TET year exam:', error);
    res.status(500).json({ error: 'Failed to load exam details' });
  }
});

// ============================================================================
// 4. GET /api/super-tet/questions/:year — Paginated/Full Questions w/ Filters
//    Never defaults to 5 or 10 when full paper requested!
// ============================================================================
router.get('/questions/:year', async (req: Request, res: Response) => {
  try {
    const yearNum = Number(req.params.year);
    if (isNaN(yearNum)) {
      res.status(400).json({ error: 'Invalid exam year' });
      return;
    }

    const {
      subject,
      search,
      language,
      verificationStatus,
      isPractice,
      sort = 'questionNumber_asc',
      page = '1',
      limit = 'all',
    } = req.query;

    const exam = await prisma.superTetExam.findFirst({
      where: {
        examYear: yearNum,
        isPracticePaper: isPractice === 'true',
      },
    });

    if (!exam) {
      res.status(404).json({ error: `No SUPER TET exam found for year ${yearNum}` });
      return;
    }

    const where: any = {
      superTetExamId: exam.id,
      isActive: true,
    };

    if (subject && subject !== 'ALL') {
      where.subject = String(subject);
    }

    if (verificationStatus && verificationStatus !== 'ALL') {
      where.verificationStatus = String(verificationStatus);
    }

    if (language && language !== 'ALL') {
      where.languageType = String(language);
    }

    if (search && String(search).trim()) {
      const q = String(search).trim();
      where.OR = [
        { questionHindi: { contains: q } },
        { questionEnglish: { contains: q } },
        { topic: { contains: q } },
        { subject: { contains: q } },
      ];
    }

    const orderBy: any =
      sort === 'questionNumber_desc'
        ? { questionNumber: 'desc' }
        : sort === 'difficulty'
        ? { difficulty: 'asc' }
        : { questionNumber: 'asc' };

    const totalCount = await prisma.superTetQuestion.count({ where });

    let take: number | undefined = undefined;
    let skip: number | undefined = undefined;
    const pageNum = Math.max(1, Number(page) || 1);

    if (limit !== 'all') {
      const limitNum = Number(limit);
      if (!isNaN(limitNum) && limitNum > 0) {
        take = limitNum;
        skip = (pageNum - 1) * limitNum;
      }
    }

    const rows = await prisma.superTetQuestion.findMany({
      where,
      orderBy,
      take,
      skip,
    });

    res.json({
      examYear: yearNum,
      examName: exam.examName,
      totalCount,
      page: pageNum,
      limit: take || 'all',
      questions: rows.map(formatQuestion),
    });
  } catch (error) {
    console.error('Error fetching SUPER TET questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// ============================================================================
// 5. GET /api/super-tet/questions/:year/:subject — Subject-Filtered Full List
// ============================================================================
router.get('/questions/:year/:subject', async (req: Request, res: Response) => {
  try {
    const yearNum = Number(req.params.year);
    const subjectParam = decodeURIComponent(req.params.subject);

    if (isNaN(yearNum)) {
      res.status(400).json({ error: 'Invalid exam year' });
      return;
    }

    const exam = await prisma.superTetExam.findFirst({
      where: { examYear: yearNum, isPracticePaper: req.query.isPractice === 'true' },
    });

    if (!exam) {
      res.status(404).json({ error: `Exam not found for ${yearNum}` });
      return;
    }

    const rows = await prisma.superTetQuestion.findMany({
      where: {
        superTetExamId: exam.id,
        isActive: true,
        subject: subjectParam,
      },
      orderBy: { questionNumber: 'asc' },
    });

    res.json({
      examYear: yearNum,
      subject: subjectParam,
      totalCount: rows.length,
      questions: rows.map(formatQuestion),
    });
  } catch (error) {
    console.error('Error fetching subject questions:', error);
    res.status(500).json({ error: 'Failed to fetch subject questions' });
  }
});

// ============================================================================
// 6. GET /api/super-tet/papers/:year — Complete Historical Paper & All Questions
// ============================================================================
router.get('/papers/:year', async (req: Request, res: Response) => {
  try {
    const yearNum = Number(req.params.year);
    if (isNaN(yearNum)) {
      res.status(400).json({ error: 'Invalid exam year' });
      return;
    }

    const exam = await prisma.superTetExam.findFirst({
      where: { examYear: yearNum, isPracticePaper: false },
    });

    if (!exam) {
      res.status(404).json({ error: `No paper record found for ${yearNum}` });
      return;
    }

    const questions = await prisma.superTetQuestion.findMany({
      where: { superTetExamId: exam.id, isActive: true },
      orderBy: { questionNumber: 'asc' },
    });

    res.json({
      paper: formatExam(exam),
      totalQuestionsReturned: questions.length,
      questions: questions.map(formatQuestion),
    });
  } catch (error) {
    console.error('Error fetching SUPER TET paper:', error);
    res.status(500).json({ error: 'Failed to fetch SUPER TET paper' });
  }
});

// ============================================================================
// 7. GET /api/super-tet/papers/:year/metadata — Paper Audit & Missing Qs
// ============================================================================
router.get('/papers/:year/metadata', async (req: Request, res: Response) => {
  try {
    const yearNum = Number(req.params.year);
    if (isNaN(yearNum)) {
      res.status(400).json({ error: 'Invalid exam year' });
      return;
    }

    const exam = await prisma.superTetExam.findFirst({
      where: { examYear: yearNum, isPracticePaper: req.query.isPractice === 'true' },
    });

    if (!exam) {
      res.status(404).json({ error: `No SUPER TET paper found for ${yearNum}` });
      return;
    }

    const existingQuestions = await prisma.superTetQuestion.findMany({
      where: { superTetExamId: exam.id, isActive: true },
      select: { questionNumber: true, subject: true, answerKeyStatus: true, verificationStatus: true },
      orderBy: { questionNumber: 'asc' },
    });

    const importedNumbers = new Set(existingQuestions.map((q) => q.questionNumber));
    const missingQuestionNumbers: number[] = [];
    if (exam.expectedQuestions > 0) {
      for (let i = 1; i <= exam.expectedQuestions; i++) {
        if (!importedNumbers.has(i)) missingQuestionNumbers.push(i);
      }
    }

    const verifiedAnswerCount = existingQuestions.filter(
      (q) => q.answerKeyStatus === 'VERIFIED' || q.answerKeyStatus === 'REVISED_KEY'
    ).length;
    const pendingAnswerCount = existingQuestions.filter((q) => q.answerKeyStatus === 'PENDING').length;
    const disputedCount = existingQuestions.filter((q) => q.answerKeyStatus === 'DISPUTED').length;

    res.json({
      metadata: {
        ...formatExam(exam),
        expectedQuestions: exam.expectedQuestions,
        importedQuestionsCount: existingQuestions.length,
        missingQuestionsCount: missingQuestionNumbers.length,
        missingQuestionNumbers,
        verifiedAnswerCount,
        pendingAnswerCount,
        disputedCount,
      },
    });
  } catch (error) {
    console.error('Error fetching SUPER TET paper metadata:', error);
    res.status(500).json({ error: 'Failed to fetch paper metadata' });
  }
});

// ============================================================================
// 8. GET /api/super-tet/practice-tests — Practice Papers Strictly Separated
// ============================================================================
router.get('/practice-tests', async (_req: Request, res: Response) => {
  try {
    const practiceExams = await prisma.superTetExam.findMany({
      where: { isPracticePaper: true, isPublished: true },
      orderBy: { examYear: 'desc' },
      include: { _count: { select: { questions: true } } },
    });

    res.json({
      note: 'All in One original practice mocks aligned with the latest official SUPER TET syllabus. Strictly separated from historical PYQs.',
      practiceTests: practiceExams.map((e) => ({
        ...formatExam(e),
        actualImportedQuestions: e._count.questions,
      })),
    });
  } catch (error) {
    console.error('Error fetching SUPER TET practice tests:', error);
    res.status(500).json({ error: 'Failed to fetch practice tests' });
  }
});

// ============================================================================
// 9. GET /api/super-tet/sources/:year — Provenance & Official Notice Sources
// ============================================================================
router.get('/sources/:year', async (req: Request, res: Response) => {
  try {
    const yearNum = Number(req.params.year);
    if (isNaN(yearNum)) {
      res.status(400).json({ error: 'Invalid exam year' });
      return;
    }

    const exam = await prisma.superTetExam.findFirst({
      where: { examYear: yearNum, isPracticePaper: false },
    });

    if (!exam) {
      res.status(404).json({ error: `No source record for ${yearNum}` });
      return;
    }

    res.json({
      examYear: exam.examYear,
      examName: exam.examName,
      conductingAuthority: exam.conductingAuthority,
      notificationDate: exam.notificationDate || 'Official notice unavailable',
      applicationDates: exam.applicationDates || 'Unavailable',
      examDate: exam.examDate,
      verificationStatus: exam.verificationStatus,
      notificationSource: exam.notificationSource || 'Official notice unavailable',
      paperSource: exam.paperSource || 'Verified question paper unavailable',
      answerKeySource: exam.answerKeySource || 'Official answer key unavailable',
      notes: exam.notes,
    });
  } catch (error) {
    console.error('Error fetching sources:', error);
    res.status(500).json({ error: 'Failed to fetch sources' });
  }
});

// ============================================================================
// 10. Bookmarks Endpoints (Authenticated Student)
// ============================================================================
router.get('/bookmarks', authenticate, async (req: Request, res: Response) => {
  try {
    const bookmarks = await prisma.superTetBookmark.findMany({
      where: { userId: req.user!.id },
      include: { question: true },
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      bookmarks: bookmarks.map((b) => ({
        id: b.id,
        questionId: b.questionId,
        notes: b.notes,
        createdAt: b.createdAt,
        question: formatQuestion(b.question),
      })),
    });
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    res.status(500).json({ error: 'Failed to fetch bookmarked questions' });
  }
});

router.post('/bookmarks', authenticate, async (req: Request, res: Response) => {
  try {
    const { questionId, notes } = req.body;
    if (!questionId) {
      res.status(400).json({ error: 'questionId is required' });
      return;
    }

    const bookmark = await prisma.superTetBookmark.upsert({
      where: {
        userId_questionId: {
          userId: req.user!.id,
          questionId: String(questionId),
        },
      },
      update: { notes: notes || null },
      create: {
        userId: req.user!.id,
        questionId: String(questionId),
        notes: notes || null,
      },
    });

    res.json({ message: 'Question bookmarked', bookmark });
  } catch (error) {
    console.error('Error saving bookmark:', error);
    res.status(500).json({ error: 'Failed to bookmark question' });
  }
});

router.delete('/bookmarks/:questionId', authenticate, async (req: Request, res: Response) => {
  try {
    await prisma.superTetBookmark.deleteMany({
      where: {
        userId: req.user!.id,
        questionId: req.params.questionId,
      },
    });
    res.json({ message: 'Bookmark removed' });
  } catch (error) {
    console.error('Error removing bookmark:', error);
    res.status(500).json({ error: 'Failed to remove bookmark' });
  }
});

// ============================================================================
// 11. ADMIN ROUTES (Strictly Protected: ADMIN Only)
// ============================================================================

// 11a. Add or update historical exam year
router.post('/admin/years', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const {
      examYear,
      isPracticePaper = false,
      examName,
      examDate,
      notificationDate,
      applicationDates,
      conductingAuthority,
      notificationSource,
      paperSource,
      answerKeySource,
      expectedQuestions = 150,
      totalMarks = 150,
      duration = 150,
      markingScheme = {},
      subjectDistribution = {},
      verificationStatus = 'AUTHENTIC_SOURCE_VERIFICATION_PENDING',
      notes,
    } = req.body;

    if (!examYear || isNaN(Number(examYear))) {
      res.status(400).json({ error: 'Valid examYear is required' });
      return;
    }

    const yr = Number(examYear);
    const exam = await prisma.superTetExam.upsert({
      where: {
        examYear_isPracticePaper: {
          examYear: yr,
          isPracticePaper: Boolean(isPracticePaper),
        },
      },
      update: {
        examName: examName || `SUPER TET ${yr}`,
        examDate: examDate || 'NO_EXAM_CONDUCTED',
        notificationDate,
        applicationDates,
        conductingAuthority: conductingAuthority || 'Examination Regulatory Authority (PNP), Prayagraj',
        notificationSource,
        paperSource,
        answerKeySource,
        expectedQuestions: Number(expectedQuestions),
        totalMarks: Number(totalMarks),
        duration: Number(duration),
        markingScheme: JSON.stringify(markingScheme),
        subjectDistribution: JSON.stringify(subjectDistribution),
        verificationStatus,
        notes,
      },
      create: {
        examYear: yr,
        isPracticePaper: Boolean(isPracticePaper),
        examName: examName || `SUPER TET ${yr}`,
        examDate: examDate || 'NO_EXAM_CONDUCTED',
        notificationDate,
        applicationDates,
        conductingAuthority: conductingAuthority || 'Examination Regulatory Authority (PNP), Prayagraj',
        notificationSource,
        paperSource,
        answerKeySource,
        expectedQuestions: Number(expectedQuestions),
        totalMarks: Number(totalMarks),
        duration: Number(duration),
        markingScheme: JSON.stringify(markingScheme),
        subjectDistribution: JSON.stringify(subjectDistribution),
        verificationStatus,
        isPublished: false,
        notes,
      },
    });

    res.json({ message: 'SUPER TET exam year saved', exam: formatExam(exam) });
  } catch (error) {
    console.error('Error saving SUPER TET year:', error);
    res.status(500).json({ error: 'Failed to save exam year' });
  }
});

// 11b. Validated Bulk JSON Import with Completeness, Duplicate & Missing Q Detection
router.post('/admin/import', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const {
      examYear,
      isPracticePaper = false,
      source = 'Admin JSON Import',
      questions = [],
      publishIfComplete = false,
    } = req.body;

    if (!examYear || !Array.isArray(questions) || questions.length === 0) {
      res.status(400).json({ error: 'examYear and a non-empty questions array are required' });
      return;
    }

    const yr = Number(examYear);
    const exam = await prisma.superTetExam.findFirst({
      where: { examYear: yr, isPracticePaper: Boolean(isPracticePaper) },
    });

    if (!exam) {
      res.status(404).json({ error: `SUPER TET exam record for ${yr} not found. Create year record first.` });
      return;
    }

    const seenInPayload = new Set<number>();
    const duplicateQuestions: Array<{ questionNumber: number; reason: string }> = [];
    const validationErrors: Array<{ index: number; questionNumber?: number; error: string }> = [];
    const validQuestions: any[] = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const qNum = Number(q.questionNumber);

      if (!qNum || isNaN(qNum) || qNum <= 0) {
        validationErrors.push({ index: i, error: 'Missing or invalid questionNumber' });
        continue;
      }

      if (seenInPayload.has(qNum)) {
        duplicateQuestions.push({ questionNumber: qNum, reason: 'Duplicate questionNumber in import payload' });
        continue;
      }
      seenInPayload.add(qNum);

      if (!q.questionHindi && !q.questionEnglish) {
        validationErrors.push({ index: i, questionNumber: qNum, error: 'Both questionHindi and questionEnglish cannot be empty' });
        continue;
      }

      if (!q.subject || !String(q.subject).trim()) {
        validationErrors.push({ index: i, questionNumber: qNum, error: 'Subject classification is required' });
        continue;
      }

      if (!Array.isArray(q.options) || q.options.length < 4) {
        validationErrors.push({ index: i, questionNumber: qNum, error: 'All 4 options (A, B, C, D) must be provided' });
        continue;
      }

      if (!['A', 'B', 'C', 'D', 'PENDING', 'DISPUTED'].includes(String(q.correctAnswer || 'PENDING'))) {
        validationErrors.push({ index: i, questionNumber: qNum, error: 'Invalid correctAnswer mapping' });
        continue;
      }

      validQuestions.push({ ...q, questionNumber: qNum });
    }

    // Check existing DB records for duplicates or upsert
    let insertedCount = 0;
    let updatedCount = 0;

    for (const q of validQuestions) {
      const existing = await prisma.superTetQuestion.findUnique({
        where: {
          superTetExamId_questionNumber: {
            superTetExamId: exam.id,
            questionNumber: q.questionNumber,
          },
        },
      });

      const payloadData = {
        subject: String(q.subject).trim(),
        topic: String(q.topic || q.subject).trim(),
        questionHindi: String(q.questionHindi || q.questionEnglish).trim(),
        questionEnglish: String(q.questionEnglish || q.questionHindi).trim(),
        optionsJson: JSON.stringify(q.options),
        correctAnswer: String(q.correctAnswer || 'PENDING'),
        answerKeyStatus: q.correctAnswer === 'PENDING' ? 'PENDING' : q.answerKeyStatus || 'VERIFIED',
        answerKeySource: String(q.answerKeySource || source),
        answerKeyVerifiedAt: q.answerKeyVerifiedAt || new Date().toISOString().split('T')[0],
        explanationHindi: String(q.explanationHindi || 'आधिकारिक व्याख्या उपलब्ध नहीं है।'),
        explanationEnglish: String(q.explanationEnglish || 'Official explanation pending.'),
        difficulty: q.difficulty || 'MEDIUM',
        sourceUrl: q.sourceUrl || source,
        sourceType: Boolean(isPracticePaper) ? 'TUTORNOVE_PRACTICE' : 'OFFICIAL_PYQ',
        verificationStatus: q.verificationStatus || (Boolean(isPracticePaper) ? 'TUTORNOVE_PRACTICE' : 'VERIFIED_OFFICIAL'),
        languageType: q.languageType || 'BILINGUAL_ORIGINAL',
        isPYQ: !Boolean(isPracticePaper),
        isActive: true,
      };

      if (existing) {
        await prisma.superTetQuestion.update({
          where: { id: existing.id },
          data: payloadData,
        });
        updatedCount++;
      } else {
        await prisma.superTetQuestion.create({
          data: {
            superTetExamId: exam.id,
            examYear: yr,
            questionNumber: q.questionNumber,
            ...payloadData,
          },
        });
        insertedCount++;
      }
    }

    // Compute comprehensive post-import report
    const allDbQuestions = await prisma.superTetQuestion.findMany({
      where: { superTetExamId: exam.id, isActive: true },
      select: { questionNumber: true, answerKeyStatus: true },
      orderBy: { questionNumber: 'asc' },
    });

    const dbNums = new Set(allDbQuestions.map((x) => x.questionNumber));
    const missingQuestions: number[] = [];
    const expectedTotal = exam.expectedQuestions || allDbQuestions.length;
    for (let n = 1; n <= expectedTotal; n++) {
      if (!dbNums.has(n)) missingQuestions.push(n);
    }

    const verifiedAnswers = allDbQuestions.filter(
      (x) => x.answerKeyStatus === 'VERIFIED' || x.answerKeyStatus === 'REVISED_KEY'
    ).length;
    const pendingAnswers = allDbQuestions.filter((x) => x.answerKeyStatus === 'PENDING').length;

    const isComplete = expectedTotal > 0 && missingQuestions.length === 0 && pendingAnswers === 0;
    const shouldPublish = publishIfComplete && isComplete;

    await prisma.superTetExam.update({
      where: { id: exam.id },
      data: {
        totalQuestions: allDbQuestions.length,
        isPublished: shouldPublish ? true : exam.isPublished,
      },
    });

    res.json({
      importReport: {
        examYear: yr,
        source,
        expectedQuestions: expectedTotal,
        importedQuestions: allDbQuestions.length,
        newlyInserted: insertedCount,
        updatedExisting: updatedCount,
        missingQuestionsCount: missingQuestions.length,
        missingQuestions: missingQuestions.slice(0, 50),
        duplicateQuestionsCount: duplicateQuestions.length,
        duplicateQuestions,
        validationErrorsCount: validationErrors.length,
        validationErrors,
        verifiedAnswers,
        pendingAnswers,
        finalPublicationStatus: shouldPublish
          ? 'PUBLISHED_COMPLETE'
          : isComplete
          ? 'READY_TO_PUBLISH'
          : 'PARTIAL_IMPORT_INCOMPLETE',
      },
    });
  } catch (error) {
    console.error('Error importing SUPER TET questions:', error);
    res.status(500).json({ error: 'Import failed' });
  }
});

// 11c. Update question & preserve answer key revisions without deleting history
router.put('/admin/questions/:id', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const existing = await prisma.superTetQuestion.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ error: 'Question not found' });
      return;
    }

    const {
      questionHindi,
      questionEnglish,
      options,
      correctAnswer,
      answerKeyStatus,
      answerKeySource,
      explanationHindi,
      explanationEnglish,
      subject,
      topic,
      difficulty,
      sourceUrl,
      verificationStatus,
      revisionReason,
    } = req.body;

    let history: any[] = [];
    try {
      history = JSON.parse(existing.revisionHistoryJson || '[]');
    } catch {
      history = [];
    }

    // Preserve previous answer in revision history if correctAnswer is changing
    if (correctAnswer && correctAnswer !== existing.correctAnswer) {
      history.push({
        previousAnswer: existing.correctAnswer,
        updatedAnswer: correctAnswer,
        reason: revisionReason || `Revised by Admin (${req.user!.name})`,
        date: new Date().toISOString().split('T')[0],
      });
    }

    const updated = await prisma.superTetQuestion.update({
      where: { id },
      data: {
        questionHindi: questionHindi ?? existing.questionHindi,
        questionEnglish: questionEnglish ?? existing.questionEnglish,
        optionsJson: options ? JSON.stringify(options) : existing.optionsJson,
        correctAnswer: correctAnswer ?? existing.correctAnswer,
        answerKeyStatus: answerKeyStatus ?? (correctAnswer && correctAnswer !== existing.correctAnswer ? 'REVISED_KEY' : existing.answerKeyStatus),
        answerKeySource: answerKeySource ?? existing.answerKeySource,
        explanationHindi: explanationHindi ?? existing.explanationHindi,
        explanationEnglish: explanationEnglish ?? existing.explanationEnglish,
        subject: subject ?? existing.subject,
        topic: topic ?? existing.topic,
        difficulty: difficulty ?? existing.difficulty,
        sourceUrl: sourceUrl ?? existing.sourceUrl,
        verificationStatus: verificationStatus ?? existing.verificationStatus,
        revisionHistoryJson: JSON.stringify(history),
      },
    });

    res.json({
      message: 'Question updated (historical revision audit preserved)',
      question: formatQuestion(updated),
    });
  } catch (error) {
    console.error('Error updating SUPER TET question:', error);
    res.status(500).json({ error: 'Failed to update question' });
  }
});

// 11d. Publish / Unpublish Paper (with Completeness Guard)
router.patch('/admin/exams/:year/publish', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const yearNum = Number(req.params.year);
    const { isPublished, isPracticePaper = false, allowPartial = false } = req.body;

    const exam = await prisma.superTetExam.findFirst({
      where: { examYear: yearNum, isPracticePaper: Boolean(isPracticePaper) },
    });

    if (!exam) {
      res.status(404).json({ error: `Exam record for ${yearNum} not found` });
      return;
    }

    const count = await prisma.superTetQuestion.count({
      where: { superTetExamId: exam.id, isActive: true },
    });

    if (isPublished && exam.expectedQuestions > 0 && count < exam.expectedQuestions && !allowPartial) {
      res.status(400).json({
        error: `Cannot publish as complete paper: Only ${count} of ${exam.expectedQuestions} expected questions are imported. Pass allowPartial: true to publish as verified subset.`,
      });
      return;
    }

    const updated = await prisma.superTetExam.update({
      where: { id: exam.id },
      data: {
        isPublished: Boolean(isPublished),
        totalQuestions: count,
      },
    });

    res.json({
      message: `SUPER TET ${yearNum} publication status set to ${Boolean(isPublished)}`,
      exam: formatExam(updated),
    });
  } catch (error) {
    console.error('Error toggling publish status:', error);
    res.status(500).json({ error: 'Failed to update publication status' });
  }
});

// 11e. Admin Year Audit — Missing Questions & Duplicate Detection
router.get('/admin/audit/:year', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const yearNum = Number(req.params.year);
    const exam = await prisma.superTetExam.findFirst({
      where: { examYear: yearNum, isPracticePaper: req.query.isPractice === 'true' },
    });

    if (!exam) {
      res.status(404).json({ error: `Record for ${yearNum} not found` });
      return;
    }

    const qs = await prisma.superTetQuestion.findMany({
      where: { superTetExamId: exam.id },
      orderBy: { questionNumber: 'asc' },
    });

    const numSet = new Set(qs.map((q) => q.questionNumber));
    const missingNumbers: number[] = [];
    for (let i = 1; i <= (exam.expectedQuestions || 0); i++) {
      if (!numSet.has(i)) missingNumbers.push(i);
    }

    // Check text duplicates
    const seenText = new Map<string, number[]>();
    for (const q of qs) {
      const key = q.questionHindi.trim().toLowerCase().slice(0, 80);
      const list = seenText.get(key) || [];
      list.push(q.questionNumber);
      seenText.set(key, list);
    }
    const textDuplicates = Array.from(seenText.entries())
      .filter(([, nums]) => nums.length > 1)
      .map(([snippet, questionNumbers]) => ({ snippet, questionNumbers }));

    res.json({
      exam: formatExam(exam),
      actualQuestionsCount: qs.length,
      expectedQuestions: exam.expectedQuestions,
      missingNumbers,
      textDuplicates,
      questions: qs.map(formatQuestion),
    });
  } catch (error) {
    console.error('Error running SUPER TET audit:', error);
    res.status(500).json({ error: 'Failed to run year audit' });
  }
});

export default router;

