import { prisma } from '../prisma';
import { AuthUser } from '../middleware/auth';
import { getMockAccessDecision, getMockAccessType, parseIncludedMockTestIds } from '../test-access';
import {
  SUPERTET_DIFFICULTY_TIERS,
  SUPERTET_EXAM_SLUG,
  SUPERTET_HISTORICAL_BENCHMARKS,
  SUPERTET_SUBJECTS,
} from './constants';

export interface CatalogFilterInput {
  difficultyTier?: string;
  sourceType?: string;
  accessType?: string;
  attemptStatus?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export async function getSuperTetExamRecord() {
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
  return exam;
}

export async function getSuperTetCatalog(user: AuthUser | undefined, filters: CatalogFilterInput = {}) {
  const exam = await getSuperTetExamRecord();
  if (!exam) {
    return null;
  }

  const now = new Date();
  const tests = await prisma.test.findMany({
    where: {
      examId: exam.id,
      isPublished: true,
      isActive: true,
      status: 'ACTIVE',
      AND: [
        { OR: [{ availableFrom: null }, { availableFrom: { lte: now } }] },
        { OR: [{ availableTo: null }, { availableTo: { gte: now } }] },
      ],
    },
    orderBy: [{ mockNumber: 'asc' }, { createdAt: 'asc' }],
    select: {
      id: true,
      title: true,
      description: true,
      examId: true,
      type: true,
      durationMinutes: true,
      totalMarks: true,
      totalQuestions: true,
      instructionsHi: true,
      instructionsEn: true,
      pyqReference: true,
      sourcePaperKey: true,
      sourceReference: true,
      isSourceVerified: true,
      accessLevel: true,
      accessMode: true,
      accessType: true,
      price: true,
      pricePaise: true,
      originalPrice: true,
      discountPct: true,
      isFeatured: true,
      isPublished: true,
      isActive: true,
      status: true,
      cycleYear: true,
      sourceType: true,
      verificationStatus: true,
      isBilingual: true,
      mockNumber: true,
      difficultyTier: true,
      premiumLabel: true,
      createdAt: true,
      _count: {
        select: { testQuestions: true, attempts: true },
      },
    },
  });

  // Load user's attempts, subscriptions, and entitlements cleanly in 3 batch queries (no N+1)
  const testIds = tests.map((t) => t.id);
  const attemptsByTestId = new Map<
    string,
    {
      attemptId: string;
      status: string;
      totalScore: number;
      accuracyPct: number;
      submittedAt: Date | null;
      startedAt: Date;
      confirmedAt: Date | null;
      expiresAt: Date | null;
      completedCount: number;
      bestScore: number | null;
    }
  >();

  let userSubscriptions: any[] = [];
  let userEntitlements: Set<string> = new Set();

  if (user) {
    const [userAttempts, subs, entitlements] = await Promise.all([
      prisma.testAttempt.findMany({
        where: { userId: user.id, examId: exam.id, testId: { in: testIds } },
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          testId: true,
          status: true,
          totalScore: true,
          accuracyPct: true,
          submittedAt: true,
          startedAt: true,
          confirmedAt: true,
          expiresAt: true,
        },
      }),
      prisma.subscription.findMany({
        where: {
          userId: user.id,
          status: 'ACTIVE',
          OR: [{ endDate: null }, { endDate: { gt: now } }],
        },
        include: { plan: true },
      }),
      prisma.entitlement.findMany({
        where: {
          userId: user.id,
          isActive: true,
          OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
        },
      }),
    ]);

    userSubscriptions = subs;
    userEntitlements = new Set(entitlements.filter((e) => e.testId).map((e) => e.testId!));
    const hasGlobalEntitlement = entitlements.some((e) => e.testId === null);
    if (hasGlobalEntitlement) {
      for (const tid of testIds) userEntitlements.add(tid);
    }

    for (const att of userAttempts) {
      const existing = attemptsByTestId.get(att.testId);
      const isDone = att.status === 'COMPLETED' || att.status === 'TIMED_OUT';
      if (!existing) {
        attemptsByTestId.set(att.testId, {
          attemptId: att.id,
          status: att.status,
          totalScore: att.totalScore,
          accuracyPct: att.accuracyPct,
          submittedAt: att.submittedAt,
          startedAt: att.startedAt,
          confirmedAt: att.confirmedAt,
          expiresAt: att.expiresAt,
          completedCount: isDone ? 1 : 0,
          bestScore: isDone ? att.totalScore : null,
        });
      } else if (isDone) {
        existing.completedCount += 1;
        existing.bestScore =
          existing.bestScore === null ? att.totalScore : Math.max(existing.bestScore, att.totalScore);
      }
    }
  }

  // Enrich each test using identical logic to test-access.ts
  const isAdmin = user?.role === 'ADMIN';
  const enriched = tests.map((t) => {
    const resolvedAccessType = getMockAccessType(t);
    let isEntitled = resolvedAccessType === 'free' || isAdmin;
    let accessReason = isEntitled ? (isAdmin ? 'Admin access' : 'Free mock test') : 'Requires Super TET plan';
    let unlockedViaPlan: string | null = null;

    if (!isEntitled && user) {
      if (userEntitlements.has(t.id)) {
        isEntitled = true;
        accessReason = 'Unlocked via entitlement';
      } else {
        for (const sub of userSubscriptions) {
          const plan = sub.plan;
          if (!plan) continue;
          if (plan.examSlug && plan.examSlug !== SUPERTET_EXAM_SLUG) continue;
          const included = parseIncludedMockTestIds(plan.includedMockTestsJson);
          if (included.includes(t.id)) {
            isEntitled = true;
            accessReason = `Unlocked via ${plan.name}`;
            unlockedViaPlan = plan.name;
            break;
          }
        }
      }
    }

    const attemptSummary = attemptsByTestId.get(t.id) || null;
    const myAttemptStatus = !attemptSummary
      ? 'NOT_ATTEMPTED'
      : attemptSummary.status === 'IN_PROGRESS'
      ? 'IN_PROGRESS'
      : 'COMPLETED';

    return {
      ...t,
      actualQuestionCount: t._count.testQuestions,
      totalStudentAttempts: t._count.attempts,
      accessType: resolvedAccessType,
      isEntitled,
      accessReason,
      unlockedViaPlan,
      myAttemptStatus,
      myAttempt: attemptSummary,
    };
  });

  // Compute summary stats before filter
  const tierCounts: Record<string, number> = {};
  const sourceCounts: Record<string, number> = {};
  let freeMocksCount = 0;
  let premiumMocksCount = 0;
  let attemptedCount = 0;
  let completedCount = 0;

  for (const item of enriched) {
    const tier = item.difficultyTier || 'EXAM_STANDARD';
    tierCounts[tier] = (tierCounts[tier] || 0) + 1;
    const src = item.sourceType || 'ORIGINAL_FULL_MOCK';
    sourceCounts[src] = (sourceCounts[src] || 0) + 1;
    if (item.accessType === 'free') freeMocksCount++;
    else premiumMocksCount++;
    if (item.myAttemptStatus !== 'NOT_ATTEMPTED') attemptedCount++;
    if (item.myAttemptStatus === 'COMPLETED') completedCount++;
  }

  // Apply search/filters
  const searchNorm = (filters.search || '').trim().toLowerCase();
  const filtered = enriched.filter((item) => {
    if (filters.difficultyTier && filters.difficultyTier !== 'ALL') {
      if (item.difficultyTier !== filters.difficultyTier) return false;
    }
    if (filters.sourceType && filters.sourceType !== 'ALL') {
      if (item.sourceType !== filters.sourceType) return false;
    }
    if (filters.accessType && filters.accessType !== 'ALL') {
      if (item.accessType !== filters.accessType.toLowerCase()) return false;
    }
    if (filters.attemptStatus && filters.attemptStatus !== 'ALL') {
      if (item.myAttemptStatus !== filters.attemptStatus) return false;
    }
    if (searchNorm) {
      const hay = [
        item.title,
        item.description,
        item.sourceReference,
        item.mockNumber ? `mock ${item.mockNumber} m${item.mockNumber}` : '',
        item.premiumLabel,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      if (!hay.includes(searchNorm)) return false;
    }
    return true;
  });

  const page = Math.max(1, Number(filters.page || 1));
  const limit = Math.min(200, Math.max(1, Number(filters.limit || 100)));
  const startIdx = (page - 1) * limit;
  const paged = filtered.slice(startIdx, startIdx + limit);

  const plans = await prisma.subscriptionPlan.findMany({
    where: {
      isActive: true,
      examSlug: SUPERTET_EXAM_SLUG,
    },
    orderBy: { pricePaise: 'asc' },
  });

  return {
    exam: {
      id: exam.id,
      slug: exam.slug,
      title: exam.title,
      shortName: exam.shortName,
      conductingBody: exam.conductingBody,
      totalVerifiedPYQs: exam.totalVerifiedPYQs,
    },
    summary: {
      totalLiveMocks: enriched.length,
      filteredCount: filtered.length,
      freeMocksCount,
      premiumMocksCount,
      attemptedCount,
      completedCount,
      tierCounts,
      sourceCounts,
    },
    difficultyTiers: SUPERTET_DIFFICULTY_TIERS,
    subjects: SUPERTET_SUBJECTS,
    historicalBenchmarks: SUPERTET_HISTORICAL_BENCHMARKS,
    plans: plans.map((p) => ({
      id: p.id,
      code: p.code,
      name: p.name,
      description: p.description,
      price: p.price,
      pricePaise: p.pricePaise,
      originalPrice: p.originalPrice,
      durationDays: p.durationDays,
      testAccessLimit: p.testAccessLimit,
      includedMockTestIds: parseIncludedMockTestIds(p.includedMockTestsJson),
      features: (() => {
        try {
          return JSON.parse(p.featuresJson || '[]');
        } catch {
          return [];
        }
      })(),
    })),
    pagination: {
      page,
      limit,
      total: filtered.length,
      totalPages: Math.max(1, Math.ceil(filtered.length / limit)),
    },
    tests: paged,
  };
}

export async function verifySingleTestEntitlement(user: AuthUser, testId: string) {
  const test = await prisma.test.findUnique({ where: { id: testId } });
  if (!test) return null;
  return getMockAccessDecision(user.id, user.role, test);
}
