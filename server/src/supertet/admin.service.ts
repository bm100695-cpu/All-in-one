import { prisma } from '../prisma';
import { parseIncludedMockTestIds } from '../test-access';
import {
  SUPERTET_DEFAULT_INSTRUCTIONS_EN,
  SUPERTET_DEFAULT_INSTRUCTIONS_HI,
  SUPERTET_EXAM_SLUG,
  SUPERTET_SUBJECT_QUOTAS,
  SUPERTET_SUBJECTS,
  SUPERTET_TOTAL_MARKS,
  SUPERTET_TOTAL_QUESTIONS,
} from './constants';
import {
  SuperTetQuestionInput,
  hashSuperTetQuestion,
  validateSuperTetPaper,
} from './validator';
import { SuperTetHttpError } from './cbt.service';

function safeJson<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function getSuperTetExamOrThrow() {
  const exam = await prisma.exam.findUnique({
    where: { slug: SUPERTET_EXAM_SLUG },
    include: {
      patternVersions: {
        orderBy: { version: 'desc' },
        take: 1,
        include: { sections: { orderBy: { order: 'asc' } } },
      },
    },
  });
  if (!exam) {
    throw new SuperTetHttpError(404, 'Super TET portal exam record not found.');
  }
  return exam;
}

export async function validateExistingSuperTetTest(testId: string) {
  const test = await prisma.test.findUnique({
    where: { id: testId },
    include: {
      exam: true,
      testQuestions: {
        orderBy: { questionNumber: 'asc' },
        include: { question: true },
      },
    },
  });
  if (!test || test.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Super TET test not found.');
  }

  const mappedQuestions: SuperTetQuestionInput[] = test.testQuestions.map((tq) => {
    const q = tq.question;
    const opts = safeJson<any[]>(q.optionsJson, []).map((o) => ({
      id: String(o.id).toUpperCase() as 'A' | 'B' | 'C' | 'D',
      textHi: String(o.textHi ?? o.textEn ?? ''),
      textEn: o.textEn ? String(o.textEn) : '',
    }));
    const rawAns = safeJson<any>(q.correctAnswerJson, 'A');
    const correctAnswer = (Array.isArray(rawAns) ? rawAns[0] : rawAns || 'A') as 'A' | 'B' | 'C' | 'D';

    return {
      questionNumber: tq.questionNumber,
      subject: q.subject || tq.sectionName,
      topic: q.topic || 'सामान्य',
      chapter: q.chapter || undefined,
      contentHi: q.contentHi || q.contentEn || '',
      contentEn: q.contentEn || '',
      options: opts,
      correctAnswer,
      explanationHi: q.explanationHi || q.explanationEn || '',
      explanationEn: q.explanationEn || '',
      formulaHi: q.formulaHi || undefined,
      formulaEn: q.formulaEn || undefined,
      grammarRuleHi: q.grammarRuleHi || undefined,
      diagramUrl: q.diagramUrl || undefined,
      referenceDate: q.referenceDate || undefined,
      difficulty: (q.difficulty as any) || 'MEDIUM',
      sourceType: (test.sourceType as any) || 'ORIGINAL_FULL_MOCK',
      isPYQ: q.isPYQ,
      pyqYear: q.pyqYear || undefined,
      sourceProvenance: q.sourceProvenance,
      sourceLicense: q.sourceLicense,
      verificationStatus: q.verificationStatus,
    };
  });

  const validation = validateSuperTetPaper({
    mockNumber: test.mockNumber || 0,
    sourcePaperKey: test.sourcePaperKey || test.id,
    title: test.title,
    description: test.description || '',
    difficultyTier: (test.difficultyTier as any) || 'EXAM_STANDARD',
    sourceType: (test.sourceType as any) || 'ORIGINAL_FULL_MOCK',
    accessType: test.accessType === 'premium' ? 'premium' : 'free',
    sourceReference: test.sourceReference || '',
    verificationStatus: test.verificationStatus || 'TUTORNOVE_PRACTICE',
    questions: mappedQuestions,
  });

  return { test, validation };
}

export async function getAdminSuperTetOverview() {
  const exam = await getSuperTetExamOrThrow();

  const [tests, plans, openReportsCount, totalReportsCount, recentAttemptsCount] = await Promise.all([
    prisma.test.findMany({
      where: { examId: exam.id },
      orderBy: [{ mockNumber: 'asc' }, { createdAt: 'desc' }],
      select: {
        id: true,
        title: true,
        description: true,
        type: true,
        durationMinutes: true,
        totalMarks: true,
        totalQuestions: true,
        mockNumber: true,
        difficultyTier: true,
        premiumLabel: true,
        sourceType: true,
        sourcePaperKey: true,
        sourceReference: true,
        verificationStatus: true,
        isSourceVerified: true,
        accessType: true,
        accessLevel: true,
        isPublished: true,
        isActive: true,
        status: true,
        cycleYear: true,
        instructionsHi: true,
        instructionsEn: true,
        createdAt: true,
        _count: {
          select: { testQuestions: true, attempts: true },
        },
      },
    }),
    prisma.subscriptionPlan.findMany({
      where: { examSlug: SUPERTET_EXAM_SLUG },
      orderBy: { pricePaise: 'asc' },
    }),
    prisma.superTetQuestionReport.count({ where: { status: 'OPEN' } }),
    prisma.superTetQuestionReport.count(),
    prisma.testAttempt.count({ where: { examId: exam.id } }),
  ]);

  const planLookup = new Map<string, string[]>();
  for (const plan of plans) {
    const ids = parseIncludedMockTestIds(plan.includedMockTestsJson);
    for (const id of ids) {
      const arr = planLookup.get(id) || [];
      arr.push(plan.name);
      planLookup.set(id, arr);
    }
  }

  const stats = {
    totalTests: tests.length,
    fullLengthMocks: tests.filter((t) => t.mockNumber !== null).length,
    activeCount: tests.filter((t) => t.status === 'ACTIVE' && t.isActive).length,
    publishedCount: tests.filter((t) => t.isPublished).length,
    draftCount: tests.filter((t) => t.status === 'DRAFT').length,
    inactiveCount: tests.filter((t) => t.status === 'INACTIVE').length,
    archivedCount: tests.filter((t) => t.status === 'ARCHIVED').length,
    freeCount: tests.filter((t) => t.accessType === 'free').length,
    premiumCount: tests.filter((t) => t.accessType === 'premium').length,
    complete150Count: tests.filter((t) => t._count.testQuestions === SUPERTET_TOTAL_QUESTIONS).length,
    incompleteCount: tests.filter((t) => t._count.testQuestions < SUPERTET_TOTAL_QUESTIONS).length,
    openReportsCount,
    totalReportsCount,
    totalAttemptsCount: recentAttemptsCount,
  };

  return {
    exam: {
      id: exam.id,
      slug: exam.slug,
      title: exam.title,
      shortName: exam.shortName,
      totalVerifiedPYQs: exam.totalVerifiedPYQs,
    },
    stats,
    subjects: SUPERTET_SUBJECTS,
    plans: plans.map((p) => ({
      id: p.id,
      code: p.code,
      name: p.name,
      price: p.price,
      pricePaise: p.pricePaise,
      testAccessLimit: p.testAccessLimit,
      isActive: p.isActive,
      includedMockTestIds: parseIncludedMockTestIds(p.includedMockTestsJson),
    })),
    tests: tests.map((t) => ({
      ...t,
      actualQuestionCount: t._count.testQuestions,
      attemptCount: t._count.attempts,
      isComplete150: t._count.testQuestions === SUPERTET_TOTAL_QUESTIONS,
      assignedPlans: planLookup.get(t.id) || [],
    })),
  };
}

export async function createAdminSuperTetTest(body: any) {
  const exam = await getSuperTetExamOrThrow();
  const pattern = exam.patternVersions[0];
  if (!pattern) {
    throw new SuperTetHttpError(400, 'No ExamPatternVersion configured for Super TET.');
  }

  const title = String(body.title || '').trim();
  if (!title) throw new SuperTetHttpError(400, 'Test title is required.');

  const mockNumber =
    body.mockNumber !== undefined && body.mockNumber !== null && body.mockNumber !== ''
      ? Number(body.mockNumber)
      : null;

  const accessType = body.accessType === 'premium' ? 'premium' : 'free';
  const created = await prisma.test.create({
    data: {
      title,
      description: String(body.description || ''),
      examId: exam.id,
      patternVersionId: pattern.id,
      type: String(body.type || 'FULL_MOCK'),
      durationMinutes: Number(body.durationMinutes || 150),
      totalMarks: Number(body.totalMarks || SUPERTET_TOTAL_MARKS),
      totalQuestions: Number(body.totalQuestions || SUPERTET_TOTAL_QUESTIONS),
      instructionsHi: String(body.instructionsHi || SUPERTET_DEFAULT_INSTRUCTIONS_HI),
      instructionsEn: String(body.instructionsEn || SUPERTET_DEFAULT_INSTRUCTIONS_EN),
      mockNumber,
      difficultyTier: body.difficultyTier ? String(body.difficultyTier) : 'EXAM_STANDARD',
      premiumLabel: body.premiumLabel ? String(body.premiumLabel) : accessType === 'premium' ? 'Premium' : null,
      sourceType: String(body.sourceType || 'ORIGINAL_FULL_MOCK'),
      sourceReference: body.sourceReference ? String(body.sourceReference) : null,
      verificationStatus: String(body.verificationStatus || 'TUTORNOVE_PRACTICE'),
      accessType,
      accessLevel: accessType === 'premium' ? 'PREMIUM' : 'FREE',
      accessMode: accessType === 'premium' ? 'PREMIUM' : 'FREE',
      status: 'DRAFT',
      isPublished: false,
      isActive: false,
      isBilingual: true,
    },
  });

  return created;
}

export async function updateAdminSuperTetTest(testId: string, body: any) {
  const existing = await prisma.test.findUnique({
    where: { id: testId },
    include: { exam: true, _count: { select: { testQuestions: true } } },
  });
  if (!existing || existing.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Super TET test not found.');
  }

  const wantsPublish = body.isPublished === true || body.status === 'PUBLISHED' || body.status === 'ACTIVE' || body.isActive === true;
  if (wantsPublish) {
    const { validation } = await validateExistingSuperTetTest(testId);
    if (!validation.valid) {
      throw new SuperTetHttpError(
        400,
        `Cannot publish or activate incomplete/invalid Super TET paper: ${validation.errors.slice(0, 5).join(' | ')}`,
        'VALIDATION_FAILED',
        { errors: validation.errors, subjectCounts: validation.subjectCounts }
      );
    }
  }

  const nextAccessType =
    body.accessType === 'premium' || body.accessType === 'free'
      ? body.accessType
      : existing.accessType;

  const nextStatus = body.status ? String(body.status) : existing.status;
  const nextIsActive =
    body.isActive !== undefined ? Boolean(body.isActive) : nextStatus === 'ACTIVE';
  const nextIsPublished =
    body.isPublished !== undefined
      ? Boolean(body.isPublished)
      : nextStatus === 'PUBLISHED' || nextStatus === 'ACTIVE'
      ? true
      : existing.isPublished;

  const updated = await prisma.test.update({
    where: { id: testId },
    data: {
      title: body.title !== undefined ? String(body.title).trim() : undefined,
      description: body.description !== undefined ? String(body.description) : undefined,
      durationMinutes: body.durationMinutes !== undefined ? Number(body.durationMinutes) : undefined,
      totalMarks: body.totalMarks !== undefined ? Number(body.totalMarks) : undefined,
      instructionsHi: body.instructionsHi !== undefined ? String(body.instructionsHi) : undefined,
      instructionsEn: body.instructionsEn !== undefined ? String(body.instructionsEn) : undefined,
      mockNumber:
        body.mockNumber !== undefined
          ? body.mockNumber === null || body.mockNumber === ''
            ? null
            : Number(body.mockNumber)
          : undefined,
      difficultyTier: body.difficultyTier !== undefined ? String(body.difficultyTier) : undefined,
      premiumLabel: body.premiumLabel !== undefined ? (body.premiumLabel ? String(body.premiumLabel) : null) : undefined,
      sourceType: body.sourceType !== undefined ? String(body.sourceType) : undefined,
      sourceReference: body.sourceReference !== undefined ? String(body.sourceReference) : undefined,
      verificationStatus:
        body.verificationStatus !== undefined ? String(body.verificationStatus) : undefined,
      isSourceVerified:
        body.isSourceVerified !== undefined ? Boolean(body.isSourceVerified) : undefined,
      accessType: nextAccessType,
      accessLevel: nextAccessType === 'premium' ? 'PREMIUM' : 'FREE',
      accessMode: nextAccessType === 'premium' ? 'PREMIUM' : 'FREE',
      status: nextStatus,
      isActive: nextIsActive,
      isPublished: nextIsPublished,
      activatedAt: nextIsActive && !existing.isActive ? new Date() : undefined,
      deactivatedAt: !nextIsActive && existing.isActive ? new Date() : undefined,
    },
  });

  return updated;
}

export async function getAdminSuperTetTestQuestions(
  testId: string,
  filters: { subject?: string; search?: string } = {}
) {
  const test = await prisma.test.findUnique({
    where: { id: testId },
    include: {
      exam: true,
      testQuestions: {
        orderBy: { questionNumber: 'asc' },
        include: { question: true },
      },
    },
  });
  if (!test || test.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Super TET test not found.');
  }

  const subjectCounts: Record<string, number> = Object.fromEntries(
    SUPERTET_SUBJECTS.map((s) => [s.key, 0])
  );
  for (const tq of test.testQuestions) {
    const subj = tq.question.subject || tq.sectionName;
    subjectCounts[subj] = (subjectCounts[subj] || 0) + 1;
  }

  const searchNorm = (filters.search || '').trim().toLowerCase();
  const rows = test.testQuestions
    .filter((tq) => {
      if (filters.subject && filters.subject !== 'ALL' && tq.question.subject !== filters.subject) {
        return false;
      }
      if (searchNorm) {
        const hay = `${tq.question.contentHi || ''} ${tq.question.contentEn || ''} ${tq.question.topic || ''} ${tq.questionNumber}`.toLowerCase();
        if (!hay.includes(searchNorm)) return false;
      }
      return true;
    })
    .map((tq) => {
      const q = tq.question;
      const ans = safeJson<any>(q.correctAnswerJson, 'A');
      return {
        testQuestionId: tq.id,
        questionId: q.id,
        questionNumber: tq.questionNumber,
        subject: q.subject || tq.sectionName,
        topic: q.topic || '',
        chapter: q.chapter || '',
        contentHi: q.contentHi || '',
        contentEn: q.contentEn || '',
        options: safeJson<any[]>(q.optionsJson, []),
        correctAnswer: Array.isArray(ans) ? ans[0] : ans,
        explanationHi: q.explanationHi || '',
        explanationEn: q.explanationEn || '',
        formulaHi: q.formulaHi || '',
        formulaEn: q.formulaEn || '',
        grammarRuleHi: q.grammarRuleHi || '',
        referenceDate: q.referenceDate || '',
        diagramUrl: q.diagramUrl || '',
        difficulty: q.difficulty,
        isPYQ: q.isPYQ,
        sourceProvenance: q.sourceProvenance,
        verificationStatus: q.verificationStatus,
      };
    });

  return {
    test: {
      id: test.id,
      title: test.title,
      mockNumber: test.mockNumber,
      sourceType: test.sourceType,
      difficultyTier: test.difficultyTier,
      totalQuestions: test.testQuestions.length,
      subjectCounts,
      quotas: SUPERTET_SUBJECT_QUOTAS,
    },
    questions: rows,
  };
}

export async function updateAdminSuperTetQuestion(questionId: string, body: any) {
  const existing = await prisma.question.findUnique({
    where: { id: questionId },
    include: { exam: true },
  });
  if (!existing || existing.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Super TET question not found.');
  }

  let optionsJson = existing.optionsJson;
  if (Array.isArray(body.options)) {
    if (body.options.length !== 4) {
      throw new SuperTetHttpError(400, 'Question must have exactly 4 options (A, B, C, D).');
    }
    optionsJson = JSON.stringify(
      body.options.map((o: any, idx: number) => ({
        id: String(o.id || ['A', 'B', 'C', 'D'][idx]).toUpperCase(),
        textHi: String(o.textHi ?? o.textEn ?? ''),
        textEn: String(o.textEn ?? ''),
      }))
    );
  }

  let correctAnswerJson = existing.correctAnswerJson;
  if (body.correctAnswer !== undefined) {
    const ans = String(body.correctAnswer).trim().toUpperCase();
    if (!['A', 'B', 'C', 'D'].includes(ans)) {
      throw new SuperTetHttpError(400, 'correctAnswer must be A, B, C, or D.');
    }
    correctAnswerJson = JSON.stringify([ans]);
  }

  const nextContentHi = body.contentHi !== undefined ? String(body.contentHi) : existing.contentHi || '';
  const nextContentEn = body.contentEn !== undefined ? String(body.contentEn) : existing.contentEn;
  const nextSubject = body.subject !== undefined ? String(body.subject) : existing.subject || '';

  const updated = await prisma.question.update({
    where: { id: questionId },
    data: {
      subject: body.subject !== undefined ? String(body.subject) : undefined,
      topic: body.topic !== undefined ? String(body.topic) : undefined,
      chapter: body.chapter !== undefined ? (body.chapter ? String(body.chapter) : null) : undefined,
      contentHi: body.contentHi !== undefined ? String(body.contentHi) : undefined,
      contentEn: body.contentEn !== undefined ? String(body.contentEn) : undefined,
      optionsJson,
      correctAnswerJson,
      explanationHi: body.explanationHi !== undefined ? String(body.explanationHi) : undefined,
      explanationEn: body.explanationEn !== undefined ? String(body.explanationEn) : undefined,
      formulaHi: body.formulaHi !== undefined ? (body.formulaHi ? String(body.formulaHi) : null) : undefined,
      formulaEn: body.formulaEn !== undefined ? (body.formulaEn ? String(body.formulaEn) : null) : undefined,
      grammarRuleHi:
        body.grammarRuleHi !== undefined
          ? body.grammarRuleHi
            ? String(body.grammarRuleHi)
            : null
          : undefined,
      referenceDate:
        body.referenceDate !== undefined
          ? body.referenceDate
            ? String(body.referenceDate)
            : null
          : undefined,
      diagramUrl:
        body.diagramUrl !== undefined ? (body.diagramUrl ? String(body.diagramUrl) : null) : undefined,
      difficulty: body.difficulty !== undefined ? String(body.difficulty) : undefined,
      sourceProvenance:
        body.sourceProvenance !== undefined ? String(body.sourceProvenance) : undefined,
      verificationStatus:
        body.verificationStatus !== undefined ? String(body.verificationStatus) : undefined,
      isPYQ: body.isPYQ !== undefined ? Boolean(body.isPYQ) : undefined,
      duplicateCheckHash: hashSuperTetQuestion(nextSubject, nextContentHi, nextContentEn),
    },
  });

  if (body.subject !== undefined) {
    await prisma.testQuestion.updateMany({
      where: { questionId: updated.id },
      data: { sectionName: String(body.subject) },
    });
  }

  return updated;
}

export async function importQuestionsIntoSuperTetTest(
  testId: string,
  rows: any[],
  options: { replaceExisting?: boolean } = {}
) {
  const test = await prisma.test.findUnique({
    where: { id: testId },
    include: {
      exam: {
        include: {
          patternVersions: {
            take: 1,
            include: { sections: true },
          },
        },
      },
    },
  });
  if (!test || test.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Super TET test not found.');
  }
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new SuperTetHttpError(400, 'No question rows provided for import.');
  }

  const sections = test.exam.patternVersions[0]?.sections || [];
  const resolveSectionId = (subject: string) => {
    const s = subject.toLowerCase();
    const match = (kw: string) => sections.find((sec) => sec.name.toLowerCase().includes(kw))?.id;
    if (s.includes('hindi') || s.includes('sanskrit') || s.includes('english')) return match('hindi');
    if (s.includes('general knowledge') || s.includes('current affairs')) return match('general');
    if (s.includes('mathematics') || s.includes('math')) return match('math');
    if (s.includes('science') || s.includes('environmental')) return match('science');
    if (s.includes('child') || s.includes('teaching') || s.includes('life skills')) return match('child');
    if (s.includes('reasoning') || s.includes('information technology')) return match('reasoning');
    return sections[0]?.id || null;
  };

  const normalized: SuperTetQuestionInput[] = rows.map((r: any, idx: number) => {
    const qNum = Number(r.questionNumber || idx + 1);
    const subject = String(r.subject || '').trim();
    const opts = Array.isArray(r.options)
      ? r.options.map((o: any, oi: number) => ({
          id: (String(o.id || ['A', 'B', 'C', 'D'][oi]).toUpperCase()) as 'A' | 'B' | 'C' | 'D',
          textHi: String(o.textHi ?? o.text ?? ''),
          textEn: String(o.textEn ?? ''),
        }))
      : [
          { id: 'A' as const, textHi: String(r.optionAHi || r.optionA || ''), textEn: String(r.optionAEn || '') },
          { id: 'B' as const, textHi: String(r.optionBHi || r.optionB || ''), textEn: String(r.optionBEn || '') },
          { id: 'C' as const, textHi: String(r.optionCHi || r.optionC || ''), textEn: String(r.optionCEn || '') },
          { id: 'D' as const, textHi: String(r.optionDHi || r.optionD || ''), textEn: String(r.optionDEn || '') },
        ];

    return {
      questionNumber: qNum,
      subject,
      topic: String(r.topic || 'सामान्य'),
      chapter: r.chapter ? String(r.chapter) : undefined,
      contentHi: String(r.contentHi || r.questionHindi || r.question || ''),
      contentEn: String(r.contentEn || r.questionEnglish || r.contentHi || r.questionHindi || ''),
      options: opts,
      correctAnswer: String(r.correctAnswer || 'A').trim().toUpperCase() as 'A' | 'B' | 'C' | 'D',
      explanationHi: String(r.explanationHi || r.explanationHindi || r.explanation || ''),
      explanationEn: String(r.explanationEn || r.explanationEnglish || r.explanationHi || ''),
      formulaHi: r.formulaHi ? String(r.formulaHi) : undefined,
      formulaEn: r.formulaEn ? String(r.formulaEn) : undefined,
      grammarRuleHi: r.grammarRuleHi ? String(r.grammarRuleHi) : undefined,
      diagramUrl: r.diagramUrl ? String(r.diagramUrl) : undefined,
      referenceDate: r.referenceDate ? String(r.referenceDate) : undefined,
      difficulty: (String(r.difficulty || 'MEDIUM').toUpperCase()) as 'EASY' | 'MEDIUM' | 'HARD',
      sourceType: (test.sourceType as any) || 'ORIGINAL_FULL_MOCK',
      isPYQ: Boolean(r.isPYQ),
      pyqYear: r.pyqYear ? String(r.pyqYear) : undefined,
      sourceProvenance: String(r.sourceProvenance || test.sourceReference || 'Super TET Admin Import'),
      sourceLicense: String(r.sourceLicense || 'Educational Practice Bank'),
      verificationStatus: String(r.verificationStatus || 'VERIFIED'),
    };
  });

  if (options.replaceExisting || normalized.length === SUPERTET_TOTAL_QUESTIONS) {
    const check = validateSuperTetPaper({
      mockNumber: test.mockNumber || 0,
      sourcePaperKey: test.sourcePaperKey || test.id,
      title: test.title,
      description: test.description || '',
      difficultyTier: (test.difficultyTier as any) || 'EXAM_STANDARD',
      sourceType: (test.sourceType as any) || 'ORIGINAL_FULL_MOCK',
      accessType: test.accessType === 'premium' ? 'premium' : 'free',
      sourceReference: test.sourceReference || '',
      verificationStatus: test.verificationStatus || 'TUTORNOVE_PRACTICE',
      questions: normalized,
    });
    if (!check.valid) {
      throw new SuperTetHttpError(
        400,
        `Import rejected by Super TET validator: ${check.errors.slice(0, 6).join(' | ')}`,
        'IMPORT_VALIDATION_FAILED',
        { errors: check.errors, subjectCounts: check.subjectCounts }
      );
    }
  }

  await prisma.$transaction(async (tx) => {
    if (options.replaceExisting) {
      await tx.testQuestion.deleteMany({ where: { testId: test.id } });
    }
    for (const q of normalized) {
      const createdQ = await tx.question.create({
        data: {
          examId: test.examId,
          sectionId: resolveSectionId(q.subject),
          questionType: 'SINGLE_CHOICE',
          contentEn: q.contentEn || q.contentHi,
          contentHi: q.contentHi,
          optionsJson: JSON.stringify(q.options),
          correctAnswerJson: JSON.stringify([q.correctAnswer]),
          explanationEn: q.explanationEn || q.explanationHi,
          explanationHi: q.explanationHi,
          difficulty: q.difficulty,
          isPYQ: Boolean(q.isPYQ),
          pyqYear: q.pyqYear || null,
          sourceProvenance: q.sourceProvenance,
          sourceLicense: q.sourceLicense || 'Educational Practice Bank',
          verificationStatus: q.verificationStatus || 'VERIFIED',
          subject: q.subject,
          topic: q.topic,
          chapter: q.chapter || null,
          formulaHi: q.formulaHi || null,
          formulaEn: q.formulaEn || null,
          grammarRuleHi: q.grammarRuleHi || null,
          referenceDate: q.referenceDate || null,
          diagramUrl: q.diagramUrl || null,
          duplicateCheckHash: hashSuperTetQuestion(q.subject, q.contentHi, q.contentEn),
          isPublished: true,
        },
      });
      await tx.testQuestion.create({
        data: {
          testId: test.id,
          questionId: createdQ.id,
          sectionName: q.subject,
          questionNumber: q.questionNumber,
          marks: 1,
          negativeMarks: 0,
        },
      });
    }
    const totalCount = await tx.testQuestion.count({ where: { testId: test.id } });
    await tx.test.update({
      where: { id: test.id },
      data: { totalQuestions: totalCount, totalMarks: totalCount },
    });
  });

  return { importedCount: normalized.length, testId: test.id };
}

export async function updateAdminSuperTetPlanMocks(planId: string, mockTestIds: string[]) {
  const plan = await prisma.subscriptionPlan.findUnique({ where: { id: planId } });
  if (!plan || plan.examSlug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Super TET subscription plan not found.');
  }

  const uniqueIds = Array.from(new Set(mockTestIds.filter((x) => typeof x === 'string' && x.trim())));
  const validTests = await prisma.test.findMany({
    where: {
      id: { in: uniqueIds },
      exam: { slug: SUPERTET_EXAM_SLUG },
      accessType: 'premium',
    },
    select: { id: true },
  });
  const validatedIds = validTests.map((t) => t.id);

  if (plan.testAccessLimit > 0 && validatedIds.length > plan.testAccessLimit) {
    throw new SuperTetHttpError(
      400,
      `Plan "${plan.name}" supports at most ${plan.testAccessLimit} assigned premium mock tests (got ${validatedIds.length}).`
    );
  }

  const updated = await prisma.subscriptionPlan.update({
    where: { id: plan.id },
    data: {
      includedMockTestsJson: JSON.stringify(validatedIds),
    },
  });

  return {
    planId: updated.id,
    code: updated.code,
    name: updated.name,
    includedMockTestIds: validatedIds,
  };
}

export async function listAdminSuperTetReports(status?: string) {
  const exam = await getSuperTetExamOrThrow();
  const reports = await prisma.superTetQuestionReport.findMany({
    where: {
      question: { examId: exam.id },
      ...(status && status !== 'ALL' ? { status } : {}),
    },
    orderBy: { createdAt: 'desc' },
    take: 150,
    include: {
      user: { select: { id: true, name: true, email: true, studentId: true } },
      question: {
        select: {
          id: true,
          subject: true,
          topic: true,
          contentHi: true,
          contentEn: true,
          correctAnswerJson: true,
          explanationHi: true,
        },
      },
    },
  });
  return reports;
}

export async function resolveAdminSuperTetReport(
  reportId: string,
  adminId: string,
  body: { status: string; adminNotes?: string }
) {
  const report = await prisma.superTetQuestionReport.findUnique({ where: { id: reportId } });
  if (!report) {
    throw new SuperTetHttpError(404, 'Report not found.');
  }

  const nextStatus = ['OPEN', 'UNDER_REVIEW', 'RESOLVED', 'DISMISSED'].includes(body.status)
    ? body.status
    : 'RESOLVED';

  return prisma.superTetQuestionReport.update({
    where: { id: reportId },
    data: {
      status: nextStatus,
      adminNotes: body.adminNotes !== undefined ? String(body.adminNotes) : report.adminNotes,
      resolvedBy: adminId,
      resolvedAt: nextStatus === 'RESOLVED' || nextStatus === 'DISMISSED' ? new Date() : null,
    },
  });
}

export async function listAdminSuperTetAttempts(limit = 100) {
  const exam = await getSuperTetExamOrThrow();
  return prisma.testAttempt.findMany({
    where: { examId: exam.id },
    orderBy: { createdAt: 'desc' },
    take: Math.min(250, Math.max(1, limit)),
    select: {
      id: true,
      status: true,
      totalScore: true,
      totalMarks: true,
      accuracyPct: true,
      totalAttempted: true,
      totalCorrect: true,
      totalIncorrect: true,
      timeSpentSeconds: true,
      tabSwitchCount: true,
      fullscreenExitCount: true,
      startedAt: true,
      submittedAt: true,
      user: { select: { id: true, name: true, email: true, studentId: true } },
      test: { select: { id: true, title: true, mockNumber: true, difficultyTier: true } },
    },
  });
}
