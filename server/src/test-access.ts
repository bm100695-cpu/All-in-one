import { prisma } from './prisma';

export type MockAccessType = 'free' | 'premium';

type AccessControlledTest = {
  id: string;
  accessType?: string | null;
  accessLevel?: string | null;
  accessMode?: string | null;
  exam?: { slug?: string | null } | null;
};

function includedTestIds(plan: { includedMockTestsJson?: string | null }): string[] {
  try {
    const parsed = JSON.parse(plan.includedMockTestsJson || '[]');
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

function planAppliesToTest(plan: { examSlug?: string | null; includedMockTestsJson?: string | null }, test: AccessControlledTest): boolean {
  const selectedTests = includedTestIds(plan);
  if (selectedTests.length > 0) return selectedTests.includes(test.id);
  return !plan.examSlug || plan.examSlug === test.exam?.slug;
}

/**
 * The new access_type is authoritative. The legacy fields are only a safe
 * fallback for installations that have not applied the migration yet.
 */
export function getMockAccessType(test: AccessControlledTest): MockAccessType {
  if (test.accessType === 'premium') return 'premium';
  if (test.accessLevel === 'PREMIUM' || test.accessLevel === 'PAID') return 'premium';
  if (test.accessMode === 'PREMIUM' || test.accessMode === 'PAID') return 'premium';
  return 'free';
}

export function isStaffRole(role?: string): boolean {
  return role === 'ADMIN' || role === 'CONTENT_REVIEWER';
}

export async function canAccessMockTest(
  userId: string,
  role: string | undefined,
  test: AccessControlledTest,
): Promise<boolean> {
  if (getMockAccessType(test) === 'free' || isStaffRole(role)) return true;

  const now = new Date();
  const [entitlement, activeSubscription] = await Promise.all([
    prisma.entitlement.findFirst({
      where: {
        userId,
        isActive: true,
        AND: [
          { OR: [{ testId: test.id }, { testId: null, planCode: { not: 'PLAN_FREE_0' } }] },
          { OR: [{ expiresAt: null }, { expiresAt: { gt: now } }] },
        ],
      },
    }),
    prisma.subscription.findFirst({
      where: {
        userId,
        status: 'ACTIVE',
        OR: [{ endDate: null }, { endDate: { gt: now } }],
      },
      include: { plan: true },
      orderBy: { createdAt: 'desc' },
    }),
  ]);

  // Direct entitlements include individual-test and scoped-plan purchases.
  // Existing global entitlements remain valid so past purchases are never
  // revoked by a later pricing or plan-scope edit.
  if (entitlement) return true;
  if (!activeSubscription?.plan || activeSubscription.plan.price <= 0 || activeSubscription.plan.code.includes('FREE')) {
    return false;
  }

  const plan = activeSubscription.plan;
  if (!planAppliesToTest(plan, test)) return false;
  if (plan.testAccessLimit > 0) return (activeSubscription.testsRemaining ?? 0) > 0;
  return true;
}

/** Consume a pack slot exactly once, then persist an entitlement for the test. */
export async function consumeTestPackIfNeeded(
  userId: string,
  test: AccessControlledTest,
): Promise<boolean> {
  if (getMockAccessType(test) !== 'premium') return true;

  const activeSubscription = await prisma.subscription.findFirst({
    where: {
      userId,
      status: 'ACTIVE',
      OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
    },
    include: { plan: true },
    orderBy: { createdAt: 'desc' },
  });

  if (!activeSubscription?.plan) return true;
  const plan = activeSubscription.plan;
  if (plan.testAccessLimit <= 0 || !planAppliesToTest(plan, test)) return true;

  const hasEntitlement = await prisma.entitlement.findFirst({
    where: {
      userId,
      testId: test.id,
      isActive: true,
      OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
    },
  });
  if (hasEntitlement) return true;
  if ((activeSubscription.testsRemaining ?? 0) <= 0) return false;

  await prisma.$transaction([
    prisma.subscription.update({
      where: { id: activeSubscription.id },
      data: { testsRemaining: activeSubscription.testsRemaining! - 1 },
    }),
    prisma.entitlement.create({
      data: {
        userId,
        testId: test.id,
        planCode: plan.code,
        source: 'TEST_PACK',
        expiresAt: activeSubscription.endDate,
      },
    }),
  ]);
  return true;
}
