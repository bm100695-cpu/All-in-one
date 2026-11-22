import { prisma } from './prisma';

export type MockAccessType = 'free' | 'premium';

type AccessControlledTest = {
  id: string;
  accessType?: string | null;
  accessLevel?: string | null;
  accessMode?: string | null;
  exam?: { slug?: string | null } | null;
};

type AccessPlan = {
  code: string;
  examSlug?: string | null;
  includedExamsJson?: string | null;
  includedMockTestsJson?: string | null;
  testAccessLimit: number;
};

function jsonStringList(value?: string | null): string[] {
  try {
    const parsed = JSON.parse(value || '[]');
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string').map((item) => item.trim()).filter(Boolean)
      : [];
  } catch {
    return [];
  }
}

export function includedTestIds(plan: Pick<AccessPlan, 'includedMockTestsJson'>): string[] {
  return jsonStringList(plan.includedMockTestsJson);
}

/** True only when this plan's saved portal and test selection include the test. */
export function planAppliesToTest(plan: AccessPlan, test: AccessControlledTest): boolean {
  const selectedTests = includedTestIds(plan);
  // An explicit test selection is always the narrowest rule (Booster packs).
  if (selectedTests.length > 0) return selectedTests.includes(test.id);

  const testSlug = String(test.exam?.slug || '').toLowerCase();
  if (!testSlug) return false;
  if (plan.examSlug) return plan.examSlug.toLowerCase() === testSlug;

  // A global plan may still be restricted to a configured list of portals.
  const includedExams = jsonStringList(plan.includedExamsJson).map((slug) => slug.toLowerCase());
  return includedExams.length === 0 || includedExams.includes(testSlug);
}

/** The new access_type is authoritative; old columns only preserve old records. */
export function getMockAccessType(test: AccessControlledTest): MockAccessType {
  if (test.accessType === 'premium') return 'premium';
  if (test.accessLevel === 'PREMIUM' || test.accessLevel === 'PAID') return 'premium';
  if (test.accessMode === 'PREMIUM' || test.accessMode === 'PAID') return 'premium';
  return 'free';
}

export function isStaffRole(role?: string): boolean {
  return role === 'ADMIN' || role === 'CONTENT_REVIEWER';
}

export type MockAccessDecision = {
  allowed: boolean;
  reason: 'FREE' | 'STAFF' | 'DIRECT_ENTITLEMENT' | 'PLAN_INCLUDED' | 'PLAN_LIMIT_AVAILABLE' | 'LOCKED';
  subscriptionId?: string;
  planCode?: string;
  testsRemaining?: number | null;
};

/**
 * Server-side source of truth. It evaluates every active subscription so a
 * student can own separate packs for separate exam portals. Null/global
 * entitlements are never trusted by themselves because they carry no scope.
 */
export async function getMockAccessDecision(
  userId: string,
  role: string | undefined,
  test: AccessControlledTest,
): Promise<MockAccessDecision> {
  if (getMockAccessType(test) === 'free') return { allowed: true, reason: 'FREE' };
  if (isStaffRole(role)) return { allowed: true, reason: 'STAFF' };

  const now = new Date();
  const [directEntitlements, activeSubscriptions] = await Promise.all([
    prisma.entitlement.findMany({
      where: { userId, testId: test.id, isActive: true, OR: [{ expiresAt: null }, { expiresAt: { gt: now } }] },
      select: { planCode: true, source: true },
    }),
    prisma.subscription.findMany({
      where: { userId, status: 'ACTIVE', OR: [{ endDate: null }, { endDate: { gt: now } }] },
      include: { plan: true },
      orderBy: { createdAt: 'desc' },
    }),
  ]);

  // Individually purchased, admin-granted and referral test access is always
  // specific to this test. Plan entitlements must still pass plan scope below.
  if (directEntitlements.some((e) => ['TEST_PURCHASE', 'TEST_PACK', 'REFERRAL_CREDIT', 'ADMIN_GRANT'].includes(e.planCode) || ['TEST_PURCHASE', 'TEST_PACK', 'REFERRAL_CREDIT', 'ADMIN_GRANT'].includes(e.source))) {
    return { allowed: true, reason: 'DIRECT_ENTITLEMENT' };
  }

  for (const subscription of activeSubscriptions) {
    const plan = subscription.plan;
    if (plan.price <= 0 || plan.code.includes('FREE') || !planAppliesToTest(plan, test)) continue;
    // Explicit assignments are available immediately. An assigned 5-test
    // Booster unlocks exactly its five selected papers, not a random five.
    if (includedTestIds(plan).length > 0 || plan.testAccessLimit <= 0) {
      return { allowed: true, reason: 'PLAN_INCLUDED', subscriptionId: subscription.id, planCode: plan.code, testsRemaining: subscription.testsRemaining };
    }
    if ((subscription.testsRemaining ?? 0) > 0) {
      return { allowed: true, reason: 'PLAN_LIMIT_AVAILABLE', subscriptionId: subscription.id, planCode: plan.code, testsRemaining: subscription.testsRemaining };
    }
  }
  return { allowed: false, reason: 'LOCKED' };
}

export async function canAccessMockTest(userId: string, role: string | undefined, test: AccessControlledTest): Promise<boolean> {
  return (await getMockAccessDecision(userId, role, test)).allowed;
}

/** Consume an open-ended pack slot exactly once. Fixed assigned packs do not consume slots. */
export async function consumeTestPackIfNeeded(userId: string, role: string | undefined, test: AccessControlledTest): Promise<boolean> {
  if (getMockAccessType(test) !== 'premium' || isStaffRole(role)) return true;
  const decision = await getMockAccessDecision(userId, role, test);
  if (!decision.allowed) return false;
  if (decision.reason !== 'PLAN_LIMIT_AVAILABLE' || !decision.subscriptionId) return true;

  const consumed = await prisma.subscription.updateMany({
    where: { id: decision.subscriptionId, status: 'ACTIVE', testsRemaining: { gt: 0 } },
    data: { testsRemaining: { decrement: 1 } },
  });
  if (consumed.count !== 1) return false;

  const consumedSubscription = await prisma.subscription.findUnique({
    where: { id: decision.subscriptionId },
    select: { endDate: true },
  });
  await prisma.entitlement.create({
    data: {
      id: `pack_${decision.subscriptionId}_${test.id}`,
      userId,
      testId: test.id,
      planCode: decision.planCode || 'TEST_PACK',
      source: 'TEST_PACK',
      expiresAt: consumedSubscription?.endDate || null,
    },
  });
  return true;
}
