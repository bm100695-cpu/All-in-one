const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const state = { entitlements: [], subscriptions: [], subscriptionQuery: null };
const prisma = {
  subscription: {
    findMany: async (query) => {
      state.subscriptionQuery = query;
      return state.subscriptions;
    },
    updateMany: async () => ({ count: 0 }),
    findUnique: async () => null,
  },
  entitlement: {
    findMany: async () => state.entitlements,
    create: async () => ({}),
  },
};

const source = fs.readFileSync(path.join(__dirname, '..', 'src', 'test-access.ts'), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const moduleExports = {};
new Function('require', 'exports', 'module', compiled)(
  (request) => request === './prisma' ? { prisma } : require(request),
  moduleExports,
  { exports: moduleExports },
);

const {
  getMockAccessDecision,
  getMockAccessType,
} = moduleExports;

const premiumTest = { id: 'test-included', accessType: 'premium', exam: { slug: 'jee-main' } };
const otherPremiumTest = { id: 'test-locked', accessType: 'premium', exam: { slug: 'jee-main' } };
const paidPlan = (overrides = {}) => ({
  id: 'plan-5',
  code: 'PLAN_JEE_BOOSTER',
  name: '₹5 Booster Plan',
  price: 5,
  currency: 'INR',
  isPublished: true,
  testAccessLimit: 5,
  includedMockTestsJson: JSON.stringify(['test-included', 'test-2', 'test-3', 'test-4', 'test-5']),
  ...overrides,
});
const verifiedPayment = (overrides = {}) => ({
  userId: 'student-1',
  planId: 'plan-5',
  status: 'SUCCESS',
  amount: 5,
  currency: 'INR',
  orderId: 'order_paid',
  paymentId: 'cf_paid',
  ...overrides,
});
const subscription = (plan = paidPlan(), payment = verifiedPayment()) => ({
  id: 'sub-1',
  testsRemaining: null,
  plan,
  payment,
});

async function decisionFor(test, subscriptions = []) {
  state.entitlements = [];
  state.subscriptions = subscriptions;
  return getMockAccessDecision('student-1', 'STUDENT', test);
}

async function main() {
  assert.equal(getMockAccessType({ accessType: 'PREMIUM' }), 'premium');
  assert.equal(getMockAccessType({ accessLevel: 'paid' }), 'premium');

  assert.equal((await decisionFor(premiumTest)).allowed, false, 'new student cannot open premium test');
  assert.equal((await decisionFor(premiumTest, [subscription(paidPlan({ id: 'free-plan', code: 'PLAN_JEE_FREE_0', price: 0 }), verifiedPayment({ planId: 'free-plan', amount: 0 }))])).allowed, false, 'Free Starter subscription cannot unlock premium papers');
  assert.equal((await decisionFor(premiumTest, [subscription(paidPlan(), verifiedPayment({ status: 'PENDING' }))])).allowed, false, 'pending payment cannot unlock');
  assert.equal((await decisionFor(premiumTest, [subscription(paidPlan(), verifiedPayment({ status: 'FAILED' }))])).allowed, false, 'failed payment cannot unlock');
  assert.equal((await decisionFor(premiumTest, [subscription(paidPlan(), verifiedPayment({ planId: 'other-plan' }))])).allowed, false, 'payment must belong to the purchased plan');
  assert.equal((await decisionFor(premiumTest, [subscription(paidPlan({ isPublished: false }))])).allowed, false, 'archived plan cannot unlock');

  const entitled = await decisionFor(premiumTest, [subscription()]);
  assert.equal(entitled.allowed, true, 'verified paid plan unlocks assigned test');
  assert.equal(entitled.reason, 'PLAN_INCLUDED');
  assert.equal((await decisionFor(otherPremiumTest, [subscription()])).allowed, false, 'unassigned premium test stays locked');

  const standardIds = ['test-included', ...Array.from({ length: 14 }, (_, index) => `standard-${index + 2}`)];
  const standardPlan = paidPlan({ id: 'plan-15', code: 'PLAN_STANDARD_49', testAccessLimit: 15, includedMockTestsJson: JSON.stringify(standardIds) });
  assert.equal((await decisionFor(premiumTest, [subscription(standardPlan, verifiedPayment({ planId: 'plan-15', amount: 49 }))])).allowed, true, '₹49 plan unlocks an explicitly assigned paper');
  assert.equal((await decisionFor(premiumTest, [subscription({ ...standardPlan, includedMockTestsJson: JSON.stringify(standardIds.slice(0, 14)) }, verifiedPayment({ planId: 'plan-15', amount: 49 }))])).allowed, false, '₹49 plan with fewer than 15 assigned papers fails closed');

  assert.equal(state.subscriptionQuery.where.status, 'ACTIVE');
  assert.ok(state.subscriptionQuery.where.OR.some((rule) => rule.endDate?.gt instanceof Date), 'expired subscriptions are excluded in the database query');
  console.log('test-access policy checks passed');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
