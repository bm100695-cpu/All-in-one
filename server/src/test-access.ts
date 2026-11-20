import { prisma } from './prisma';

export type MockAccessType = 'free' | 'premium';

type AccessControlledTest = {
  id: string;
  accessType?: string | null;
  accessLevel?: string | null;
  accessMode?: string | null;
  exam?: { slug?: string | null } | null;
};

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

  if (entitlement) return true;
  if (!activeSubscription?.plan || activeSubscription.plan.price <= 0 || activeSubscription.plan.code.includes('FREE')) {
    return false;
  }

  const plan = activeSubscription.plan;
  const isTestPack = plan.code === 'PLAN_BOOSTER_49' || plan.code === 'TEST_PACK_99' || plan.code.includes('BOOSTER');
  if (isTestPack) return (activeSubscription.testsRemaining ?? 0) > 0;

  // Global plans apply everywhere. Exam-scoped plans apply only to their exam.
  return !plan.examSlug || plan.examSlug === test.exam?.slug;
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
  const isTestPack = plan.code === 'PLAN_BOOSTER_49' || plan.code === 'TEST_PACK_99' || plan.code.includes('BOOSTER');
  if (!isTestPack) return true;

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
