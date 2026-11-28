import { canAccessMockTest, getMockAccessDecision, getMockAccessType, AccessControlledTest, MockAccessDecision } from '../test-access';

export type SuperTetAccessDecision = MockAccessDecision;

export async function checkSuperTetMockAccess(
  userId: string,
  role: string | undefined,
  test: AccessControlledTest
): Promise<SuperTetAccessDecision> {
  return getMockAccessDecision(userId, role, test);
}

export async function isSuperTetMockEntitled(
  userId: string,
  role: string | undefined,
  test: AccessControlledTest
): Promise<boolean> {
  return canAccessMockTest(userId, role, test);
}

export { getMockAccessType };
