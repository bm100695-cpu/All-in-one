import { prisma } from '../prisma';
import { AuthUser } from '../middleware/auth';
import {
  SUPERTET_DECLARATION_HI,
  SUPERTET_DEFAULT_INSTRUCTIONS_EN,
  SUPERTET_DEFAULT_INSTRUCTIONS_HI,
  SUPERTET_EXAM_SLUG,
  SUPERTET_HISTORICAL_BENCHMARKS,
  SUPERTET_SUBJECT_HI_MAP,
  SUPERTET_SUBJECTS,
} from './constants';
import { checkSuperTetMockAccess } from './access';

export interface SuperTetResponseItem {
  questionId: string;
  selectedOption: string | null;
  markedForReview?: boolean;
  visited?: boolean;
  timeSpentSec?: number;
}

export class SuperTetHttpError extends Error {
  status: number;
  code: string;
  extra?: Record<string, any>;
  constructor(status: number, message: string, code = 'SUPERTET_ERROR', extra?: Record<string, any>) {
    super(message);
    this.status = status;
    this.code = code;
    this.extra = extra;
  }
}

function safeParseJson<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function parseCorrectOption(correctAnswerJson: string): string {
  const parsed = safeParseJson<any>(correctAnswerJson, 'A');
  if (Array.isArray(parsed)) return String(parsed[0] || 'A').trim().toUpperCase();
  return String(parsed || 'A').trim().toUpperCase();
}

function normalizeResponses(input: any): SuperTetResponseItem[] {
  if (!Array.isArray(input)) return [];
  const seen = new Map<string, SuperTetResponseItem>();
  for (const item of input) {
    if (!item || typeof item.questionId !== 'string') continue;
    const opt =
      item.selectedOption && ['A', 'B', 'C', 'D'].includes(String(item.selectedOption).toUpperCase())
        ? String(item.selectedOption).toUpperCase()
        : null;
    seen.set(item.questionId, {
      questionId: item.questionId,
      selectedOption: opt,
      markedForReview: Boolean(item.markedForReview),
      visited: Boolean(item.visited || opt || item.markedForReview),
      timeSpentSec: Math.max(0, Math.min(3600, Math.round(Number(item.timeSpentSec || 0)))),
    });
  }
  return Array.from(seen.values());
}

function sanitizeQuestionsForAttempt(testQuestions: any[]) {
  return testQuestions.map((tq) => {
    const q = tq.question;
    const rawOptions = safeParseJson<any[]>(q.optionsJson, []);
    const options = rawOptions.map((o) => ({
      id: String(o.id),
      textHi: o.textHi ?? o.textEn ?? '',
      textEn: o.textEn ?? '',
    }));

    return {
      id: q.id,
      questionNumber: tq.questionNumber,
      sectionName: q.subject || tq.sectionName,
      subject: q.subject || tq.sectionName,
      subjectHi: SUPERTET_SUBJECT_HI_MAP[q.subject || ''] || q.subject || tq.sectionName,
      topic: q.topic || '',
      chapter: q.chapter || null,
      marks: tq.marks,
      negativeMarks: tq.negativeMarks,
      contentHi: q.contentHi || q.contentEn || '',
      contentEn: q.contentEn || '',
      options,
      diagramUrl: q.diagramUrl || null,
      difficulty: q.difficulty,
      referenceDate: q.referenceDate || null,
      sourceType: q.isPYQ ? 'VERIFIED_PYQ' : 'ORIGINAL_FULL_MOCK',
    };
  });
}

async function assertSuperTetStudentEligibility(user: AuthUser, test: any) {
  if (!test || test.exam?.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Super TET mock test not found.');
  }

  if (user.role === 'STUDENT') {
    if (user.targetExamId && user.targetExamId !== test.examId) {
      throw new SuperTetHttpError(
        403,
        'Strict Exam Isolation: Active session is locked to a different examination portal.'
      );
    }
    if (!test.isPublished || !test.isActive || test.status !== 'ACTIVE') {
      throw new SuperTetHttpError(403, 'This mock test is currently not live.');
    }
    const now = Date.now();
    if (test.availableFrom && new Date(test.availableFrom).getTime() > now) {
      throw new SuperTetHttpError(403, 'This mock test is not yet open for attempts.');
    }
    if (test.availableTo && new Date(test.availableTo).getTime() < now) {
      throw new SuperTetHttpError(403, 'This mock test window has closed.');
    }
  }

  const decision = await checkSuperTetMockAccess(user.id, user.role, test);
  if (!decision.allowed) {
    throw new SuperTetHttpError(
      402,
      decision.reason || 'This mock test requires an eligible Super TET subscription plan.',
      'PLAN_REQUIRED',
      { accessDecision: decision }
    );
  }
}

export async function gradeAndFinalizeAttempt(
  attemptId: string,
  incomingResponses?: SuperTetResponseItem[],
  options?: {
    isAutoTimeout?: boolean;
    tabSwitchCount?: number;
    fullscreenExitCount?: number;
  }
) {
  const attempt = await prisma.testAttempt.findUnique({
    where: { id: attemptId },
    include: {
      test: {
        include: {
          exam: true,
          testQuestions: {
            orderBy: { questionNumber: 'asc' },
            include: { question: true },
          },
        },
      },
    },
  });

  if (!attempt) {
    throw new SuperTetHttpError(404, 'Attempt not found.');
  }

  if (attempt.status === 'COMPLETED' || attempt.status === 'TIMED_OUT') {
    return attempt;
  }

  const storedResponses = normalizeResponses(safeParseJson(attempt.responsesJson, []));
  const nextResponses = incomingResponses && incomingResponses.length > 0 ? incomingResponses : storedResponses;
  const responseMap = new Map<string, SuperTetResponseItem>();
  for (const r of storedResponses) responseMap.set(r.questionId, r);
  for (const r of nextResponses) responseMap.set(r.questionId, r);

  const now = new Date();
  const maxDurationSec = (attempt.test.durationMinutes || 150) * 60;
  const startClock = attempt.confirmedAt || attempt.startedAt;
  const serverElapsed = Math.max(1, Math.round((now.getTime() - startClock.getTime()) / 1000));
  const boundedElapsed = Math.min(maxDurationSec, serverElapsed);

  const isTimedOut = Boolean(
    options?.isAutoTimeout ||
      (attempt.expiresAt && now.getTime() > attempt.expiresAt.getTime() + 10_000)
  );

  let totalScore = 0;
  let totalMarks = 0;
  let totalAttempted = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalUnattempted = 0;

  const subjectStatsMap = new Map<
    string,
    {
      subject: string;
      subjectHi: string;
      totalQuestions: number;
      attempted: number;
      correct: number;
      incorrect: number;
      unattempted: number;
      score: number;
      maxMarks: number;
      timeSpentSec: number;
    }
  >();

  for (const s of SUPERTET_SUBJECTS) {
    subjectStatsMap.set(s.key, {
      subject: s.key,
      subjectHi: s.sectionNameHi,
      totalQuestions: 0,
      attempted: 0,
      correct: 0,
      incorrect: 0,
      unattempted: 0,
      score: 0,
      maxMarks: 0,
      timeSpentSec: 0,
    });
  }

  const topicStatsMap = new Map<
    string,
    {
      subject: string;
      topic: string;
      totalQuestions: number;
      attempted: number;
      correct: number;
      incorrect: number;
      timeSpentSec: number;
    }
  >();

  const finalResponses: SuperTetResponseItem[] = [];

  for (const tq of attempt.test.testQuestions) {
    const q = tq.question;
    const subjKey = q.subject || tq.sectionName || 'General Knowledge & Current Affairs';
    const resp = responseMap.get(q.id);
    const selectedOption = resp?.selectedOption || null;
    const qTime = resp?.timeSpentSec || 0;
    const correctOpt = parseCorrectOption(q.correctAnswerJson);

    const marks = tq.marks ?? 1;
    const neg = tq.negativeMarks ?? 0;
    totalMarks += marks;

    if (!subjectStatsMap.has(subjKey)) {
      subjectStatsMap.set(subjKey, {
        subject: subjKey,
        subjectHi: SUPERTET_SUBJECT_HI_MAP[subjKey] || subjKey,
        totalQuestions: 0,
        attempted: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
        score: 0,
        maxMarks: 0,
        timeSpentSec: 0,
      });
    }
    const subjStat = subjectStatsMap.get(subjKey)!;
    subjStat.totalQuestions += 1;
    subjStat.maxMarks += marks;
    subjStat.timeSpentSec += qTime;

    const topicKey = `${subjKey}::${q.topic || 'सामान्य'}`;
    if (!topicStatsMap.has(topicKey)) {
      topicStatsMap.set(topicKey, {
        subject: subjKey,
        topic: q.topic || 'सामान्य',
        totalQuestions: 0,
        attempted: 0,
        correct: 0,
        incorrect: 0,
        timeSpentSec: 0,
      });
    }
    const topicStat = topicStatsMap.get(topicKey)!;
    topicStat.totalQuestions += 1;
    topicStat.timeSpentSec += qTime;

    if (selectedOption) {
      totalAttempted += 1;
      subjStat.attempted += 1;
      topicStat.attempted += 1;
      if (selectedOption === correctOpt) {
        totalCorrect += 1;
        totalScore += marks;
        subjStat.correct += 1;
        subjStat.score += marks;
        topicStat.correct += 1;
      } else {
        totalIncorrect += 1;
        totalScore -= neg;
        subjStat.incorrect += 1;
        subjStat.score -= neg;
        topicStat.incorrect += 1;
      }
    } else {
      totalUnattempted += 1;
      subjStat.unattempted += 1;
    }

    finalResponses.push({
      questionId: q.id,
      selectedOption,
      markedForReview: Boolean(resp?.markedForReview),
      visited: Boolean(resp?.visited || selectedOption),
      timeSpentSec: qTime,
    });
  }

  const accuracyPct =
    totalAttempted > 0 ? Number(((totalCorrect / totalAttempted) * 100).toFixed(2)) : 0;

  const subjectBreakdown = Array.from(subjectStatsMap.values())
    .filter((s) => s.totalQuestions > 0)
    .map((s) => ({
      ...s,
      accuracyPct: s.attempted > 0 ? Number(((s.correct / s.attempted) * 100).toFixed(2)) : 0,
      scorePct: s.maxMarks > 0 ? Number(((s.score / s.maxMarks) * 100).toFixed(2)) : 0,
    }));

  const topicBreakdown = Array.from(topicStatsMap.values()).map((t) => ({
    ...t,
    accuracyPct: t.attempted > 0 ? Number(((t.correct / t.attempted) * 100).toFixed(2)) : 0,
    scorePct: t.totalQuestions > 0 ? Number(((t.correct / t.totalQuestions) * 100).toFixed(2)) : 0,
  }));

  // Compute percentile only when >= 1 prior completed attempt exists (so current makes >= 2 real attempts)
  const peerScores = await prisma.testAttempt.findMany({
    where: {
      testId: attempt.testId,
      id: { not: attempt.id },
      status: { in: ['COMPLETED', 'TIMED_OUT'] },
    },
    select: { totalScore: true },
  });

  let percentile: number | null = null;
  if (peerScores.length >= 1) {
    const allScores = [...peerScores.map((p) => p.totalScore), totalScore];
    const belowOrEqual = allScores.filter((sc) => sc <= totalScore).length;
    percentile = Number(((belowOrEqual / allScores.length) * 100).toFixed(2));
  }

  const finalStatus = isTimedOut ? 'TIMED_OUT' : 'COMPLETED';
  const submittedAt =
    attempt.expiresAt && isTimedOut && now.getTime() > attempt.expiresAt.getTime()
      ? attempt.expiresAt
      : now;

  const sectionPayload = {
    subjects: subjectBreakdown,
    topics: topicBreakdown,
  };

  const updated = await prisma.testAttempt.update({
    where: { id: attempt.id },
    data: {
      status: finalStatus,
      submittedAt,
      totalScore,
      totalMarks,
      accuracyPct,
      percentile,
      totalAttempted,
      totalCorrect,
      totalIncorrect,
      totalUnattempted,
      timeSpentSeconds: boundedElapsed,
      tabSwitchCount: Math.max(attempt.tabSwitchCount || 0, options?.tabSwitchCount || 0),
      fullscreenExitCount: Math.max(
        attempt.fullscreenExitCount || 0,
        options?.fullscreenExitCount || 0
      ),
      sectionScoresJson: JSON.stringify(sectionPayload),
      responsesJson: JSON.stringify(finalResponses),
    },
  });

  return updated;
}

export async function startOrResumeSuperTetAttempt(
  user: AuthUser,
  testId: string,
  options: { forceNew?: boolean } = {}
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

  await assertSuperTetStudentEligibility(user, test);

  const inProgress = await prisma.testAttempt.findFirst({
    where: { userId: user.id, testId: test!.id, status: 'IN_PROGRESS' },
    orderBy: { createdAt: 'desc' },
  });

  if (inProgress) {
    const nowMs = Date.now();
    if (inProgress.expiresAt && nowMs > inProgress.expiresAt.getTime()) {
      const finalized = await gradeAndFinalizeAttempt(inProgress.id, undefined, {
        isAutoTimeout: true,
      });
      if (!options.forceNew) {
        return {
          expiredOnReconnect: true,
          autoSubmittedAttemptId: finalized.id,
          status: finalized.status,
          attempt: finalized,
        };
      }
    } else if (!options.forceNew) {
      const remainingSeconds = inProgress.expiresAt
        ? Math.max(0, Math.floor((inProgress.expiresAt.getTime() - nowMs) / 1000))
        : (test!.durationMinutes || 150) * 60;

      return {
        expiredOnReconnect: false,
        resumed: true,
        candidate: {
          id: user.id,
          name: user.name,
          email: user.email,
          studentId: user.studentId || null,
        },
        declarationTextHi: SUPERTET_DECLARATION_HI,
        test: {
          id: test!.id,
          title: test!.title,
          mockNumber: test!.mockNumber,
          difficultyTier: test!.difficultyTier,
          sourceType: test!.sourceType,
          durationMinutes: test!.durationMinutes,
          totalMarks: test!.totalMarks,
          totalQuestions: test!.testQuestions.length,
          instructionsHi: test!.instructionsHi || SUPERTET_DEFAULT_INSTRUCTIONS_HI,
          instructionsEn: test!.instructionsEn || SUPERTET_DEFAULT_INSTRUCTIONS_EN,
          examName: test!.exam.title,
          examSlug: test!.exam.slug,
        },
        attempt: {
          id: inProgress.id,
          status: inProgress.status,
          startedAt: inProgress.startedAt,
          confirmedAt: inProgress.confirmedAt,
          expiresAt: inProgress.expiresAt,
          remainingSeconds,
          serverNow: new Date().toISOString(),
          tabSwitchCount: inProgress.tabSwitchCount,
          fullscreenExitCount: inProgress.fullscreenExitCount,
          responses: safeParseJson<SuperTetResponseItem[]>(inProgress.responsesJson, []),
        },
        sections: SUPERTET_SUBJECTS,
        questions: sanitizeQuestionsForAttempt(test!.testQuestions),
      };
    }
  }

  const created = await prisma.testAttempt.create({
    data: {
      userId: user.id,
      testId: test!.id,
      examId: test!.examId,
      status: 'IN_PROGRESS',
      totalMarks: test!.totalMarks || 150,
      responsesJson: '[]',
    },
  });

  return {
    expiredOnReconnect: false,
    resumed: false,
    candidate: {
      id: user.id,
      name: user.name,
      email: user.email,
      studentId: user.studentId || null,
    },
    declarationTextHi: SUPERTET_DECLARATION_HI,
    test: {
      id: test!.id,
      title: test!.title,
      mockNumber: test!.mockNumber,
      difficultyTier: test!.difficultyTier,
      sourceType: test!.sourceType,
      durationMinutes: test!.durationMinutes,
      totalMarks: test!.totalMarks,
      totalQuestions: test!.testQuestions.length,
      instructionsHi: test!.instructionsHi || SUPERTET_DEFAULT_INSTRUCTIONS_HI,
      instructionsEn: test!.instructionsEn || SUPERTET_DEFAULT_INSTRUCTIONS_EN,
      examName: test!.exam.title,
      examSlug: test!.exam.slug,
    },
    attempt: {
      id: created.id,
      status: created.status,
      startedAt: created.startedAt,
      confirmedAt: created.confirmedAt,
      expiresAt: created.expiresAt,
      remainingSeconds: (test!.durationMinutes || 150) * 60,
      serverNow: new Date().toISOString(),
      tabSwitchCount: 0,
      fullscreenExitCount: 0,
      responses: [] as SuperTetResponseItem[],
    },
    sections: SUPERTET_SUBJECTS,
    questions: sanitizeQuestionsForAttempt(test!.testQuestions),
  };
}

export async function beginSuperTetAttemptTimer(user: AuthUser, attemptId: string) {
  const attempt = await prisma.testAttempt.findUnique({
    where: { id: attemptId },
    include: { test: true, exam: true },
  });
  if (!attempt || attempt.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Super TET attempt not found.');
  }
  if (attempt.userId !== user.id) {
    throw new SuperTetHttpError(403, 'Unauthorized attempt access.');
  }
  if (attempt.status !== 'IN_PROGRESS') {
    return {
      alreadySubmitted: true,
      status: attempt.status,
      attemptId: attempt.id,
    };
  }

  const now = new Date();
  if (attempt.confirmedAt && attempt.expiresAt) {
    const remainingSeconds = Math.max(0, Math.floor((attempt.expiresAt.getTime() - now.getTime()) / 1000));
    if (remainingSeconds <= 0) {
      const finalized = await gradeAndFinalizeAttempt(attempt.id, undefined, { isAutoTimeout: true });
      return {
        expired: true,
        status: finalized.status,
        attemptId: finalized.id,
        confirmedAt: attempt.confirmedAt,
        expiresAt: attempt.expiresAt,
        remainingSeconds: 0,
        serverNow: now.toISOString(),
      };
    }
    return {
      alreadyConfirmed: true,
      attemptId: attempt.id,
      confirmedAt: attempt.confirmedAt,
      expiresAt: attempt.expiresAt,
      remainingSeconds,
      serverNow: now.toISOString(),
    };
  }

  const durationMs = (attempt.test.durationMinutes || 150) * 60_000;
  const expiresAt = new Date(now.getTime() + durationMs);
  const updated = await prisma.testAttempt.update({
    where: { id: attempt.id },
    data: {
      confirmedAt: now,
      expiresAt,
    },
  });

  return {
    attemptId: updated.id,
    confirmedAt: updated.confirmedAt,
    expiresAt: updated.expiresAt,
    remainingSeconds: Math.floor(durationMs / 1000),
    serverNow: now.toISOString(),
  };
}

export async function autosaveSuperTetAttempt(
  user: AuthUser,
  attemptId: string,
  payload: {
    responses?: any[];
    tabSwitchCount?: number;
    fullscreenExitCount?: number;
  }
) {
  const attempt = await prisma.testAttempt.findUnique({
    where: { id: attemptId },
    include: { exam: true, test: true },
  });
  if (!attempt || attempt.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Attempt not found.');
  }
  if (attempt.userId !== user.id) {
    throw new SuperTetHttpError(403, 'Unauthorized.');
  }
  if (attempt.status !== 'IN_PROGRESS') {
    return {
      autoSubmitted: true,
      status: attempt.status,
      attemptId: attempt.id,
      remainingSeconds: 0,
      serverNow: new Date().toISOString(),
    };
  }

  const normalizedIncoming = normalizeResponses(payload.responses);
  const stored = normalizeResponses(safeParseJson(attempt.responsesJson, []));
  const mergedMap = new Map<string, SuperTetResponseItem>();
  for (const r of stored) mergedMap.set(r.questionId, r);
  for (const r of normalizedIncoming) mergedMap.set(r.questionId, r);
  const merged = Array.from(mergedMap.values());

  const now = new Date();
  if (attempt.expiresAt && now.getTime() > attempt.expiresAt.getTime()) {
    const finalized = await gradeAndFinalizeAttempt(attempt.id, merged, {
      isAutoTimeout: true,
      tabSwitchCount: payload.tabSwitchCount,
      fullscreenExitCount: payload.fullscreenExitCount,
    });
    return {
      autoSubmitted: true,
      status: finalized.status,
      attemptId: finalized.id,
      remainingSeconds: 0,
      serverNow: now.toISOString(),
    };
  }

  const startClock = attempt.confirmedAt || attempt.startedAt;
  const elapsedSeconds = Math.min(
    (attempt.test.durationMinutes || 150) * 60,
    Math.max(0, Math.round((now.getTime() - startClock.getTime()) / 1000))
  );
  const remainingSeconds = attempt.expiresAt
    ? Math.max(0, Math.floor((attempt.expiresAt.getTime() - now.getTime()) / 1000))
    : (attempt.test.durationMinutes || 150) * 60;

  await prisma.testAttempt.update({
    where: { id: attempt.id },
    data: {
      responsesJson: JSON.stringify(merged),
      timeSpentSeconds: elapsedSeconds,
      tabSwitchCount: Math.max(attempt.tabSwitchCount || 0, Number(payload.tabSwitchCount || 0)),
      fullscreenExitCount: Math.max(
        attempt.fullscreenExitCount || 0,
        Number(payload.fullscreenExitCount || 0)
      ),
    },
  });

  return {
    autoSubmitted: false,
    status: 'IN_PROGRESS',
    attemptId: attempt.id,
    savedResponsesCount: merged.length,
    remainingSeconds,
    serverNow: now.toISOString(),
  };
}

export async function submitSuperTetAttempt(
  user: AuthUser,
  attemptId: string,
  payload: {
    responses?: any[];
    tabSwitchCount?: number;
    fullscreenExitCount?: number;
    isAutoTimeout?: boolean;
  }
) {
  const attempt = await prisma.testAttempt.findUnique({
    where: { id: attemptId },
    include: { exam: true },
  });
  if (!attempt || attempt.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Attempt not found.');
  }
  if (attempt.userId !== user.id) {
    throw new SuperTetHttpError(403, 'Unauthorized.');
  }

  const normalizedIncoming = normalizeResponses(payload.responses);
  const finalized = await gradeAndFinalizeAttempt(attempt.id, normalizedIncoming, {
    isAutoTimeout: payload.isAutoTimeout,
    tabSwitchCount: payload.tabSwitchCount,
    fullscreenExitCount: payload.fullscreenExitCount,
  });

  return getSuperTetAttemptResult(user, finalized.id);
}

export async function getSuperTetAttemptResult(user: AuthUser, attemptId: string) {
  const attempt = await prisma.testAttempt.findUnique({
    where: { id: attemptId },
    include: {
      exam: true,
      test: {
        include: {
          testQuestions: {
            orderBy: { questionNumber: 'asc' },
            include: { question: true },
          },
        },
      },
    },
  });

  if (!attempt || attempt.exam.slug !== SUPERTET_EXAM_SLUG) {
    throw new SuperTetHttpError(404, 'Attempt not found.');
  }
  if (attempt.userId !== user.id && user.role !== 'ADMIN') {
    throw new SuperTetHttpError(403, 'Unauthorized attempt access.');
  }
  if (attempt.status === 'IN_PROGRESS') {
    throw new SuperTetHttpError(
      403,
      'Solutions and scorecard are locked until the mock test is submitted.'
    );
  }

  const responses = normalizeResponses(safeParseJson(attempt.responsesJson, []));
  const responseMap = new Map<string, SuperTetResponseItem>();
  for (const r of responses) responseMap.set(r.questionId, r);

  const storedSections = safeParseJson<{ subjects?: any[]; topics?: any[] }>(
    attempt.sectionScoresJson,
    {}
  );

  // Real cohort comparison strictly from real completed attempts (no fake benchmarks)
  const cohortAttempts = await prisma.testAttempt.findMany({
    where: {
      testId: attempt.testId,
      status: { in: ['COMPLETED', 'TIMED_OUT'] },
    },
    select: {
      id: true,
      userId: true,
      totalScore: true,
      accuracyPct: true,
      submittedAt: true,
    },
    orderBy: [{ totalScore: 'desc' }, { timeSpentSeconds: 'asc' }],
  });

  const comparisonSampleSize = cohortAttempts.length;
  let realRank: number | null = null;
  let realPercentile: number | null = null;
  let averageCohortScore: number | null = null;
  let topperScore: number | null = null;

  if (comparisonSampleSize >= 2) {
    const idx = cohortAttempts.findIndex((c) => c.id === attempt.id);
    realRank = idx >= 0 ? idx + 1 : null;
    const belowOrEqual = cohortAttempts.filter((c) => c.totalScore <= attempt.totalScore).length;
    realPercentile = Number(((belowOrEqual / comparisonSampleSize) * 100).toFixed(2));
    averageCohortScore = Number(
      (
        cohortAttempts.reduce((acc, c) => acc + c.totalScore, 0) / comparisonSampleSize
      ).toFixed(2)
    );
    topperScore = cohortAttempts[0]?.totalScore ?? null;
  }

  // Previous attempts by same user on same mock
  const previousUserAttempts = await prisma.testAttempt.findMany({
    where: {
      userId: attempt.userId,
      testId: attempt.testId,
      id: { not: attempt.id },
      status: { in: ['COMPLETED', 'TIMED_OUT'] },
    },
    orderBy: { submittedAt: 'desc' },
    take: 5,
    select: {
      id: true,
      totalScore: true,
      totalMarks: true,
      accuracyPct: true,
      timeSpentSeconds: true,
      submittedAt: true,
    },
  });

  // Load user's core bookmarks & reports for this attempt's questions
  const qIds = attempt.test.testQuestions.map((tq) => tq.questionId);
  const [bookmarks, reports] = await Promise.all([
    prisma.superTetCoreBookmark.findMany({
      where: { userId: user.id, questionId: { in: qIds } },
      select: { questionId: true },
    }),
    prisma.superTetQuestionReport.findMany({
      where: { userId: user.id, questionId: { in: qIds } },
      select: { questionId: true, status: true, issueType: true },
    }),
  ]);
  const bookmarkedSet = new Set(bookmarks.map((b) => b.questionId));
  const reportMap = new Map(reports.map((r) => [r.questionId, r]));

  const detailedQuestions = attempt.test.testQuestions.map((tq) => {
    const q = tq.question;
    const resp = responseMap.get(q.id);
    const selectedOption = resp?.selectedOption || null;
    const correctAnswer = parseCorrectOption(q.correctAnswerJson);
    const isCorrect = selectedOption !== null && selectedOption === correctAnswer;
    const rawOptions = safeParseJson<any[]>(q.optionsJson, []);

    return {
      questionNumber: tq.questionNumber,
      questionId: q.id,
      subject: q.subject || tq.sectionName,
      subjectHi: SUPERTET_SUBJECT_HI_MAP[q.subject || ''] || q.subject || tq.sectionName,
      topic: q.topic || '',
      chapter: q.chapter || null,
      contentHi: q.contentHi || q.contentEn || '',
      contentEn: q.contentEn || '',
      options: rawOptions.map((o) => ({
        id: String(o.id),
        textHi: o.textHi ?? o.textEn ?? '',
        textEn: o.textEn ?? '',
      })),
      correctAnswer,
      selectedOption,
      isCorrect,
      isAttempted: selectedOption !== null,
      markedForReview: Boolean(resp?.markedForReview),
      timeSpentSec: resp?.timeSpentSec || 0,
      explanationHi: q.explanationHi || q.explanationEn || '',
      explanationEn: q.explanationEn || '',
      formulaHi: q.formulaHi || null,
      formulaEn: q.formulaEn || null,
      grammarRuleHi: q.grammarRuleHi || null,
      diagramUrl: q.diagramUrl || null,
      referenceDate: q.referenceDate || null,
      sourceType: q.isPYQ ? 'VERIFIED_PYQ' : attempt.test.sourceType || 'ORIGINAL_FULL_MOCK',
      sourceProvenance: q.sourceProvenance,
      isBookmarked: bookmarkedSet.has(q.id),
      myReport: reportMap.get(q.id) || null,
    };
  });

  const subjectBreakdown = storedSections.subjects || [];
  const topicBreakdown = storedSections.topics || [];

  const strongTopics = topicBreakdown
    .filter((t) => t.attempted >= 1 && t.accuracyPct >= 75)
    .sort((a, b) => b.accuracyPct - a.accuracyPct || b.correct - a.correct)
    .slice(0, 8);

  const moderateTopics = topicBreakdown
    .filter((t) => t.attempted >= 1 && t.accuracyPct >= 50 && t.accuracyPct < 75)
    .sort((a, b) => b.totalQuestions - a.totalQuestions)
    .slice(0, 8);

  const weakTopics = topicBreakdown
    .filter((t) => (t.attempted >= 1 && t.accuracyPct < 50) || (t.totalQuestions >= 2 && t.correct === 0))
    .sort((a, b) => a.accuracyPct - b.accuracyPct || b.totalQuestions - a.totalQuestions)
    .slice(0, 8);

  const weakSubjects = [...subjectBreakdown]
    .sort((a, b) => a.scorePct - b.scorePct)
    .slice(0, 3);

  const recommendations = weakSubjects.map((s) => ({
    subject: s.subject,
    subjectHi: s.subjectHi,
    scorePct: s.scorePct,
    adviceHi:
      s.scorePct < 50
        ? `${s.subjectHi} (${s.score}/${s.maxMarks}) को प्राथमिकता दें — मूल सिद्धांत दोहराएँ और इस खंड के 20 अतिरिक्त प्रश्न हल करें।`
        : `${s.subjectHi} में सटीकता (${s.accuracyPct}%) बढ़ाने हेतु गलत प्रश्नों की व्याख्या का पुनरीक्षण करें।`,
  }));

  const avgTimePerQuestionSec =
    attempt.totalQuestions > 0
      ? Number((attempt.timeSpentSeconds / attempt.test.testQuestions.length).toFixed(1))
      : attempt.test.testQuestions.length > 0
      ? Number((attempt.timeSpentSeconds / attempt.test.testQuestions.length).toFixed(1))
      : 0;

  return {
    attempt: {
      id: attempt.id,
      status: attempt.status,
      startedAt: attempt.startedAt,
      confirmedAt: attempt.confirmedAt,
      submittedAt: attempt.submittedAt,
      totalScore: attempt.totalScore,
      totalMarks: attempt.totalMarks || attempt.test.totalMarks || 150,
      accuracyPct: attempt.accuracyPct,
      totalAttempted: attempt.totalAttempted,
      totalCorrect: attempt.totalCorrect,
      totalIncorrect: attempt.totalIncorrect,
      totalUnattempted: attempt.totalUnattempted,
      timeSpentSeconds: attempt.timeSpentSeconds,
      avgTimePerQuestionSec,
      tabSwitchCount: attempt.tabSwitchCount,
      fullscreenExitCount: attempt.fullscreenExitCount,
      realRank,
      realPercentile,
      comparisonSampleSize,
      averageCohortScore,
      topperScore,
    },
    test: {
      id: attempt.test.id,
      title: attempt.test.title,
      mockNumber: attempt.test.mockNumber,
      difficultyTier: attempt.test.difficultyTier,
      sourceType: attempt.test.sourceType,
      durationMinutes: attempt.test.durationMinutes,
      totalQuestions: attempt.test.testQuestions.length,
    },
    subjectBreakdown,
    topicBreakdown,
    strongTopics,
    moderateTopics,
    weakTopics,
    recommendations,
    previousUserAttempts,
    historicalBenchmarks: SUPERTET_HISTORICAL_BENCHMARKS,
    questions: detailedQuestions,
  };
}
