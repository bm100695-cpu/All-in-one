import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { prisma } from '../prisma';
import { canAccessMockTest, getMockAccessType, isStaffRole } from '../test-access';
import { authenticate, requireRole } from '../middleware/auth';

dotenv.config();

const router = Router();

const DEFAULT_CURRENCY = process.env.DEFAULT_CURRENCY || 'INR';
// This is the public Render service already used by the production frontend
// (see client/src/api.ts and render.yaml). It is a production-only safety net
// for services created before the Render blueprint environment variables were
// synced; local and staging environments must configure their own URL.
const PRODUCTION_API_ORIGIN = 'https://all-in-one-japb.onrender.com';
const CASHFREE_PAYMENT_METHODS = new Set([
  'GOOGLE_PAY', 'PHONEPE', 'PAYTM', 'OTHER_UPI', 'UPI_QR', 'CARD', 'NETBANKING',
]);
const MIN_CASHFREE_AMOUNT_PAISE = 100; // Cashfree orders must be at least ₹1.

function paiseToInr(paise: number): number {
  return Number((paise / 100).toFixed(2));
}

function toPaise(value: unknown, field = 'price'): number {
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric) || numeric < 0) {
    throw new Error(`${field} must be a valid non-negative INR amount.`);
  }
  const paise = Math.round(numeric * 100);
  if (!Number.isSafeInteger(paise)) throw new Error(`${field} is outside the supported range.`);
  return paise;
}

function storedPaise(record: { price?: number | null; pricePaise?: number | null }): number {
  const paise = Number(record.pricePaise);
  return Number.isSafeInteger(paise) && paise >= 0 ? paise : toPaise(record.price || 0);
}

function validatePremiumPrice(pricePaise: number, accessMode: string): number {
  if (accessMode === 'FREE') return 0;
  if (pricePaise < MIN_CASHFREE_AMOUNT_PAISE) {
    throw new Error('Premium price must be at least ₹1.00 for Cashfree checkout.');
  }
  return pricePaise;
}

async function normalizeIncludedMockTestIds(value: unknown, examSlug?: string | null): Promise<string[]> {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.some((id) => typeof id !== 'string' || !id.trim())) {
    throw new Error('includedMockTests must be an array of mock-test IDs.');
  }
  const ids = [...new Set(value.map((id) => id.trim()))];
  if (ids.length > 300) throw new Error('A plan can include at most 300 mock tests.');
  if (ids.length === 0) return [];

  const tests = await prisma.test.findMany({
    where: { id: { in: ids } },
    select: { id: true, exam: { select: { slug: true } } },
  });
  if (tests.length !== ids.length) throw new Error('One or more selected mock tests no longer exist.');
  const normalizedSlug = examSlug?.trim().toLowerCase() || null;
  if (normalizedSlug && tests.some((test) => test.exam.slug !== normalizedSlug)) {
    throw new Error('Selected mock tests must belong to the selected exam portal.');
  }
  return ids;
}

// Cashfree Checkout remains authoritative at payment time. This optional
// allow-list prevents the LMS from advertising a method that the merchant has
// not enabled. Leave it empty to show only the generic hosted-checkout entry.
function getConfiguredCashfreePaymentMethods(): string[] {
  return String(process.env.CASHFREE_ENABLED_PAYMENT_METHODS || '')
    .split(',')
    .map((method) => method.trim().toUpperCase())
    .filter((method) => CASHFREE_PAYMENT_METHODS.has(method));
}

// Cashfree redirects must use a trusted application origin. Never derive a
// return destination from a request Origin/Referer header.
function getTrustedCheckoutOrigin(): string {
  const configured = process.env.PUBLIC_APP_URL || process.env.CLIENT_APP_URL;
  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      console.warn('[Cashfree] Ignoring invalid PUBLIC_APP_URL / CLIENT_APP_URL value.');
    }
  }
  return 'https://all-in-one-git-main-brijesh17.vercel.app';
}

// Cashfree calls this endpoint asynchronously. Deployment configuration wins;
// the known production origin is only a migration fallback for this service.
function getCashfreeWebhookUrl(): string | undefined {
  const configured = process.env.CASHFREE_WEBHOOK_URL
    || process.env.PUBLIC_API_URL
    || (process.env.NODE_ENV === 'production' ? PRODUCTION_API_ORIGIN : '');
  if (!configured) return undefined;
  try {
    const url = new URL(configured);
    const basePath = url.pathname.replace(/\/$/, '');
    if (basePath.endsWith('/webhook/cashfree')) {
      return `${url.origin}${basePath}`;
    }
    const apiPath = basePath.endsWith('/api') ? basePath : `${basePath}/api`;
    return `${url.origin}${apiPath}/monetization/webhook/cashfree`;
  } catch {
    console.warn('[Cashfree] Ignoring invalid CASHFREE_WEBHOOK_URL / PUBLIC_API_URL value.');
    return undefined;
  }
}

/**
 * A successful browser redirect is not proof of payment. Requiring a public
 * notify URL when creating a Cashfree order ensures that the signed webhook
 * can complete verification even when the customer closes checkout before
 * returning to the LMS.
 */
function getRequiredCashfreeWebhookUrl(): string {
  const webhookUrl = getCashfreeWebhookUrl();
  if (!webhookUrl) {
    throw new Error(
      'Cashfree webhook is not configured. Set CASHFREE_WEBHOOK_URL or PUBLIC_API_URL on the server before accepting payments.'
    );
  }
  return webhookUrl;
}

// Gateway credentials are deployment secrets. They are read only from the
// server environment and are never accepted from the browser or stored in an
// audit log/database record.
export function getCashfreeConfig() {
  const appId = String(process.env.CASHFREE_APP_ID || '')
    .replace(/^["']|["']$/g, '')
    .trim();
  const secretKey = String(process.env.CASHFREE_SECRET_KEY || '')
    .replace(/^["']|["']$/g, '')
    .trim();
  const rawEnv = String(process.env.CASHFREE_ENVIRONMENT || process.env.CASHFREE_ENV || '')
    .replace(/^["']|["']$/g, '')
    .trim()
    .toUpperCase();
  const apiVersion = String(process.env.CASHFREE_API_VERSION || '2022-09-01').trim();

  // The selected environment is the single source of truth.  Never infer it
  // from a credential prefix: doing so can pair a production SDK with sandbox
  // API credentials (one common cause of an empty checkout).
  const isSandbox = rawEnv === 'TEST' || rawEnv === 'SANDBOX';
  const isProduction = rawEnv === 'PRODUCTION' || rawEnv === 'LIVE';
  const isEnvironmentConfigured = isSandbox || isProduction;

  // Fail closed: an absent or misspelled environment must never silently
  // create live orders. Sandbox is used as the inert default only so callers
  // can render a safe configuration error rather than a production checkout.
  const useProductionEndpoints = isProduction;
  const baseUrl = useProductionEndpoints ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';
  const isMasked = /x{4,}/i.test(secretKey);
  const isEnvironmentMismatch = isProduction && /^test/i.test(appId);
  const isLive = Boolean(
    isEnvironmentConfigured &&
    appId &&
    secretKey &&
    !appId.includes('placeholder') &&
    !secretKey.includes('placeholder') &&
    !isMasked
  );

  return {
    appId,
    secretKey,
    apiVersion,
    rawEnv: isProduction ? 'PRODUCTION' : 'TEST',
    environment: isProduction ? 'PRODUCTION' : 'TEST',
    mode: (isProduction ? 'production' : 'sandbox') as 'production' | 'sandbox',
    baseUrl,
    isProduction,
    isEnvironmentConfigured,
    isLive,
    isMasked,
    isEnvironmentMismatch,
  };
}

// Cashfree Order Creation Helper (Official API version 2022-09-01)
async function createCashfreeOrder(params: {
  orderId: string;
  orderAmount: number;
  orderCurrency?: string;
  customerDetails: {
    customerId: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
  };
  orderMeta?: {
    returnUrl?: string;
    notifyUrl?: string;
  };
  orderNote?: string;
}): Promise<{ paymentSessionId: string; orderId: string; cfOrderId?: string }> {
  const config = getCashfreeConfig();

  if (!config.isLive) {
    if (!config.isEnvironmentConfigured) {
      throw new Error(
        'Cashfree environment is not configured. Set CASHFREE_ENVIRONMENT to SANDBOX for test payments or PRODUCTION for authorised live payments; no order was created.'
      );
    }
    if (config.isMasked) {
      throw new Error(
        'CASHFREE_SECRET_KEY in server/.env is currently masked with "xxxx". Please set your unmasked production secret key.'
      );
    }
    throw new Error('Cashfree credentials (CASHFREE_APP_ID or CASHFREE_SECRET_KEY) are missing in environment variables.');
  }
  if (config.isEnvironmentMismatch) {
    throw new Error('Cashfree environment is PRODUCTION but the configured App ID looks like a sandbox key. Set both credentials and CASHFREE_ENVIRONMENT to the same environment.');
  }

  const url = `${config.baseUrl}/orders`;

  const cleanCustomerId = (params.customerDetails.customerId || 'cust_guest')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .slice(0, 50);
  const cleanPhone = (params.customerDetails.customerPhone || '9999999999')
    .replace(/\D/g, '')
    .slice(-10) || '9999999999';

  const orderPayload: any = {
    order_id: params.orderId,
    order_amount: Number(params.orderAmount.toFixed(2)),
    order_currency: params.orderCurrency || 'INR',
    customer_details: {
      customer_id: cleanCustomerId.length >= 3 ? cleanCustomerId : `cust_${cleanCustomerId}_01`,
      customer_name: params.customerDetails.customerName || 'Registered Candidate',
      customer_email: params.customerDetails.customerEmail || 'candidate@allinone.edu',
      customer_phone: cleanPhone.length === 10 ? cleanPhone : '9999999999',
    },
    order_note: params.orderNote || 'Exam Plan Purchase',
  };

  if (params.orderMeta?.returnUrl) {
    orderPayload.order_meta = {
      return_url: params.orderMeta.returnUrl,
      notify_url: params.orderMeta.notifyUrl,
    };
  }

  console.log(`[Cashfree API] POST ${url} | Order: ${params.orderId} | Amount: ₹${params.orderAmount} | AppId: ${config.appId.slice(0, 8)}... | API-Version: ${config.apiVersion}`);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'x-client-id': config.appId,
      'x-client-secret': config.secretKey,
      'x-api-version': config.apiVersion,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderPayload),
  });

  const text = await response.text();
  let data: any = {};
  try {
    data = JSON.parse(text);
  } catch {
    console.error(`[Cashfree API Error] Non-JSON response (${response.status}):`, text);
    throw new Error(`Cashfree gateway returned non-JSON response (${response.status})`);
  }

  if (!response.ok || !data.payment_session_id) {
    console.error(`[Cashfree API Error] Status ${response.status}:`, data);
    let errorMsg = data?.message || `Cashfree order creation failed with status ${response.status}`;
    if (response.status === 401 || errorMsg.toLowerCase().includes('authentication failed')) {
      if (config.appId.startsWith('TEST') || config.appId.startsWith('test')) {
        errorMsg = `Cashfree Authentication Failed: Your live server has a TEST App ID (${config.appId.slice(0, 8)}...) configured. Cashfree Live Production requires your unmasked Production App ID & Secret Key in Render Environment Variables.`;
      } else {
        errorMsg = 'Cashfree Authentication Failed: Live API rejected the credentials. Please verify your CASHFREE_APP_ID and CASHFREE_SECRET_KEY in Render.';
      }
    }
    throw new Error(errorMsg);
  }

  console.log(`[Cashfree API Success] Order ${params.orderId} created. Session: ${data.payment_session_id.slice(0, 15)}...`);

  return {
    paymentSessionId: data.payment_session_id,
    orderId: data.order_id || params.orderId,
    cfOrderId: data.cf_order_id,
  };
}

// Cashfree Order Status Fetch Helper (Official API version)
async function getCashfreeOrder(orderId: string): Promise<any> {
  const config = getCashfreeConfig();
  if (!config.isLive) {
    throw new Error('Cashfree credentials missing for order status check.');
  }

  const url = `${config.baseUrl}/orders/${encodeURIComponent(orderId)}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-client-id': config.appId,
      'x-client-secret': config.secretKey,
      'x-api-version': config.apiVersion,
    },
  });

  const text = await response.text();
  let data: any = {};
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Cashfree gateway returned non-JSON response (${response.status})`);
  }

  if (!response.ok) {
    console.error('Cashfree Get Order Error:', response.status, data);
    throw new Error(data?.message || `Failed to fetch Cashfree order status: ${response.status}`);
  }

  return data;
}

// Cashfree Order Payments Fetch Helper (Fetches actual transaction list for the order)
async function getCashfreePayments(orderId: string): Promise<any[]> {
  const config = getCashfreeConfig();
  if (!config.isLive) {
    throw new Error('Cashfree credentials missing for payment list check.');
  }

  const url = `${config.baseUrl}/orders/${encodeURIComponent(orderId)}/payments`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-client-id': config.appId,
      'x-client-secret': config.secretKey,
      'x-api-version': config.apiVersion,
    },
  });

  const text = await response.text();
  let data: any = [];
  try {
    data = JSON.parse(text);
  } catch {
    console.warn(`[Cashfree Payments Check] Non-JSON response (${response.status}) for order ${orderId}`);
    return [];
  }

  if (!response.ok) {
    console.warn(`[Cashfree Payments Check] Status ${response.status} for order ${orderId}:`, data);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

// Public gateway configuration status
router.get('/config', (_req: Request, res: Response) => {
  const config = getCashfreeConfig();
  const webhookConfigured = Boolean(getCashfreeWebhookUrl());
  res.json({
    currency: DEFAULT_CURRENCY,
    isGatewayConfigured: config.isLive && config.isEnvironmentConfigured && !config.isEnvironmentMismatch,
    supportedCurrencies: [DEFAULT_CURRENCY],
    activeGateway: 'Cashfree',
    cashfreeMode: config.mode,
    isMasked: config.isMasked,
    webhookConfigured,
    browserCheckout: 'HOSTED_CHECKOUT',
    supportedPaymentMethods: getConfiguredCashfreePaymentMethods(),
  });
});

// Deliberately reject browser-supplied payment keys. Configure these secrets
// in the deployment environment (Render/hosting provider) and redeploy.
router.post('/admin/cashfree-config', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  void req;
  res.status(410).json({
    error: 'Cashfree credentials must be configured as server environment variables. They cannot be saved through the admin dashboard.',
  });
});

// Helper to ensure default subscription plans exist in database
async function ensureDefaultPlansExist(): Promise<void> {
  try {
    const defaultPlans = [
      {
        name: 'Free Starter Plan',
        code: 'PLAN_FREE_0',
        description: 'Essential CBT practice with real PYQ shift papers & answer keys.',
        price: 0,
        originalPrice: 0,
        discountPct: 0,
        currency: 'INR',
        durationDays: 365,
        billingInterval: 'ONCE',
        badge: 'Free Forever',
        featuresJson: JSON.stringify([
          '2 Free Mock Tests included',
          'Real CBT Exam Timer & Interface',
          'Instant Scorecard & Solutions',
          'No Credit Card Required',
        ]),
        isPublished: true,
        displayOrder: 1,
      },
      {
        name: '5-Test Booster Pack',
        code: 'PLAN_BOOSTER_49',
        description: 'Unlock 5 verified shift papers for your target exam with detailed solutions.',
        price: 49,
        originalPrice: 149,
        discountPct: 67,
        currency: 'INR',
        durationDays: 90,
        billingInterval: 'ONCE',
        badge: 'Top Choice',
        featuresJson: JSON.stringify([
          '5 Verified Mock Tests',
          'Detailed Step-by-Step Solutions',
          'Subject-wise Accuracy Audit',
          'Personal Mistake Journal Tagging',
        ]),
        isPublished: true,
        displayOrder: 2,
      },
      {
        name: 'Premium All-Access',
        code: 'PLAN_PRO_99',
        description: 'Unlock all 10 verified mock series and solutions for your target exam.',
        price: 99,
        originalPrice: 299,
        discountPct: 67,
        currency: 'INR',
        durationDays: 180,
        billingInterval: 'ONCE',
        badge: 'Best Value',
        featuresJson: JSON.stringify([
          '10 Full-Length Mock & PYQ Papers',
          'Complete Historical Archive Access',
          'Advanced Speed & Readiness Analytics',
          'Priority Reviewer Q&A Support',
        ]),
        isPublished: true,
        displayOrder: 3,
      },
      {
        name: 'All-Access 1-Year Super Pass',
        code: 'PLAN_YEARLY_199',
        description: 'Complete 1-year unlimited access to all 7 competitive & teaching exams.',
        price: 199,
        originalPrice: 599,
        discountPct: 67,
        currency: 'INR',
        durationDays: 365,
        billingInterval: 'YEARLY',
        badge: 'SUPER VALUE',
        featuresJson: JSON.stringify([
          'Full Access to All 7 Exams & 155+ Mock Tests',
          'UPTET, SUPER TET, JEE, NEET, CTET, SSC, UPSC',
          'Mistake Journal & Adaptive Question Re-Attempt',
          'Priority Live All-India Mock Tests with Rank',
        ]),
        isPublished: true,
        displayOrder: 4,
      },
      {
        name: 'Lifetime Master VIP Pass',
        code: 'PLAN_LIFETIME_499',
        description: 'One-time payment for lifetime VIP access to all present & upcoming tests.',
        price: 499,
        originalPrice: 1499,
        discountPct: 67,
        currency: 'INR',
        durationDays: 3650,
        billingInterval: 'LIFETIME',
        badge: 'VIP LIFETIME',
        featuresJson: JSON.stringify([
          'Lifetime Unlimited Access to Everything',
          'All Future Exams & Test Series Included',
          'Downloadable PDF Solution Sets',
          'VIP Support & Early Access to New Features',
        ]),
        isPublished: true,
        displayOrder: 5,
      },
    ];

    for (const p of defaultPlans) {
      await prisma.subscriptionPlan.upsert({
        where: { code: p.code },
        update: {
          isPublished: true,
          price: p.price,
          name: p.name,
          badge: p.badge,
        },
        create: p,
      });
    }
  } catch (err) {
    console.warn('ensureDefaultPlansExist notice:', err);
  }
}

// Auto-seed exam-specific starter plans if none exist for a given exam slug
async function ensureExamPlansExist(examSlug: string): Promise<void> {
  try {
    const cleanSlug = examSlug.trim().toLowerCase();
    const existing = await prisma.subscriptionPlan.findFirst({
      where: { examSlug: cleanSlug },
    });

    if (existing) {
      return; // Already initialized, keep admin custom edits completely intact
    }

    const exam = await prisma.exam.findUnique({
      where: { slug: cleanSlug },
      select: { title: true, shortName: true },
    });
    const examName = exam?.shortName || exam?.title || cleanSlug.toUpperCase();
    const prefix = cleanSlug.toUpperCase().replace(/[^A-Z0-9]/g, '_');

    const examDefaultPlans = [
      {
        name: 'Free Starter Plan',
        code: `PLAN_${prefix}_FREE_0`,
        description: `Essential practice for ${examName} with authentic shift papers and answer keys.`,
        price: 0,
        originalPrice: 0,
        discountPct: 0,
        currency: 'INR',
        durationDays: 365,
        billingInterval: 'ONCE',
        badge: 'Free Forever',
        examSlug: cleanSlug,
        featuresJson: JSON.stringify([
          '2 Free Mock Tests included',
          'Real CBT Exam Timer & Interface',
          'Instant Scorecard & Solutions',
          'No Credit Card Required',
        ]),
        isPublished: true,
        displayOrder: 1,
      },
      {
        name: '5-Test Booster Pack',
        code: `PLAN_${prefix}_BOOSTER_49`,
        description: `Unlock 5 verified shift papers for ${examName} with detailed solutions.`,
        price: 49,
        originalPrice: 149,
        discountPct: 67,
        currency: 'INR',
        durationDays: 90,
        billingInterval: 'ONCE',
        badge: 'Top Choice',
        examSlug: cleanSlug,
        featuresJson: JSON.stringify([
          '5 Verified Mock Tests',
          'Detailed Step-by-Step Solutions',
          'Subject-wise Accuracy Audit',
          'Personal Mistake Journal Tagging',
        ]),
        isPublished: true,
        displayOrder: 2,
      },
      {
        name: 'Premium All-Access',
        code: `PLAN_${prefix}_PRO_99`,
        description: `Unlock all 10 verified mock series and solutions for ${examName}.`,
        price: 99,
        originalPrice: 299,
        discountPct: 67,
        currency: 'INR',
        durationDays: 180,
        billingInterval: 'ONCE',
        badge: 'Best Value',
        examSlug: cleanSlug,
        featuresJson: JSON.stringify([
          '10 Full-Length Mock & PYQ Papers',
          'Complete Historical Archive Access',
          'Advanced Speed & Readiness Analytics',
          'Priority Reviewer Q&A Support',
        ]),
        isPublished: true,
        displayOrder: 3,
      },
    ];

    for (const p of examDefaultPlans) {
      await prisma.subscriptionPlan.upsert({
        where: { code: p.code },
        update: {},
        create: p,
      });
    }
  } catch (err) {
    console.warn(`ensureExamPlansExist notice for ${examSlug}:`, err);
  }
}

// Format subscription plan model with parsed JSON fields
function formatSubscriptionPlan(p: any) {
  return {
    ...p,
    priceINR: p.price,
    priceUSD: p.price === 0 ? 0 : Math.max(1, Math.round((p.price / 75) * 100) / 100),
    features: JSON.parse(p.featuresJson || '[]'),
    includedExams: JSON.parse(p.includedExamsJson || '[]'),
    includedPapers: JSON.parse(p.includedPapersJson || '[]'),
    includedMockTests: JSON.parse(p.includedMockTestsJson || '[]'),
  };
}

// Get all published subscription plans (optionally filtered and prioritized by examSlug)
router.get('/plans', async (req: Request, res: Response) => {
  try {
    const { examSlug, all } = req.query;
    const cleanSlug = examSlug && String(examSlug).trim() && String(examSlug) !== 'ALL'
      ? String(examSlug).trim().toLowerCase()
      : null;

    if (cleanSlug) {
      await ensureExamPlansExist(cleanSlug);
    } else {
      await ensureDefaultPlansExist();
    }

    const where: any = {};
    if (all !== 'true') {
      where.isPublished = true;
    }

    let plans: any[] = [];
    if (cleanSlug) {
      // A portal never inherits plans from another portal or global fallback.
      // Global plans can still be requested only by an unscoped platform view.
      plans = await prisma.subscriptionPlan.findMany({
        where: {
          ...where,
          examSlug: cleanSlug,
        },
        orderBy: { displayOrder: 'asc' },
      });
    } else {
      plans = await prisma.subscriptionPlan.findMany({
        where,
        orderBy: { displayOrder: 'asc' },
      });
    }

    res.json({ plans: plans.map(formatSubscriptionPlan) });
  } catch (error) {
    console.error('Error fetching plans:', error);
    res.status(500).json({ error: 'Failed to fetch subscription plans' });
  }
});

// Admin: Get all plans for a specific exam portal (including unpublished)
router.get('/admin/exam-plans/:examSlug', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { examSlug } = req.params;
    const cleanSlug = String(examSlug).trim().toLowerCase();
    await ensureExamPlansExist(cleanSlug);

    const plans = await prisma.subscriptionPlan.findMany({
      where: { examSlug: cleanSlug },
      orderBy: { displayOrder: 'asc' },
    });

    res.json({
      success: true,
      examSlug: cleanSlug,
      plans: plans.map(formatSubscriptionPlan),
    });
  } catch (error: any) {
    console.error('Error fetching admin exam plans:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch exam plans' });
  }
});

// Validate a discount coupon code on the backend
router.post('/validate-coupon', authenticate, async (req: Request, res: Response) => {
  try {
    const { code, examSlug, planId, testId } = req.body;
    if (!code || typeof code !== 'string') {
      res.status(400).json({ error: 'Coupon code is required.' });
      return;
    }

    const coupon = await prisma.coupon.findUnique({
      where: { code: code.trim().toUpperCase() },
    });

    if (!coupon || !coupon.isActive) {
      res.status(404).json({ error: 'Invalid or inactive coupon code.' });
      return;
    }

    if (coupon.expiresAt && coupon.expiresAt < new Date()) {
      res.status(400).json({ error: 'This coupon has expired.' });
      return;
    }

    if (coupon.examSlug && examSlug && coupon.examSlug !== String(examSlug).toLowerCase()) {
      res.status(400).json({ error: `Coupon "${coupon.code}" is valid only for ${coupon.examSlug.toUpperCase()} items.` });
      return;
    }

    let discountedPrice: number | undefined = undefined;
    let originalPrice: number | undefined = undefined;

    if (planId) {
      const plan = await prisma.subscriptionPlan.findUnique({ where: { id: String(planId) } });
      if (plan) {
        if (examSlug && plan.examSlug !== String(examSlug).trim().toLowerCase()) {
          res.status(400).json({ error: 'The selected plan belongs to a different examination portal.' });
          return;
        }
        originalPrice = plan.price;
        discountedPrice = Math.max(1, Math.round(plan.price * (1 - coupon.discountPct / 100)));
      }
    } else if (testId) {
      const test = await prisma.test.findUnique({
        where: { id: String(testId) },
        include: { exam: { select: { slug: true } } },
      });
      if (test) {
        if (examSlug && test.exam.slug !== String(examSlug).trim().toLowerCase()) {
          res.status(400).json({ error: 'The selected test belongs to a different examination portal.' });
          return;
        }
        originalPrice = test.price;
        discountedPrice = Math.max(1, Math.round(test.price * (1 - coupon.discountPct / 100)));
      }
    }

    res.json({
      valid: true,
      code: coupon.code,
      discountPct: coupon.discountPct,
      examSlug: coupon.examSlug,
      originalPrice,
      discountedPrice,
    });
  } catch (error) {
    console.error('Coupon validation error:', error);
    res.status(500).json({ error: 'Failed to validate coupon' });
  }
});

// =========================================================================
// 2. USER SUBSCRIPTION & ENTITLEMENTS
// =========================================================================

// Get student's current active subscription & credits
router.get('/my-subscription', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;

    const [user, activeSub, entitlements, recentPayments] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
          referralCode: true,
          referralCredits: true,
        },
      }),
      prisma.subscription.findFirst({
        where: {
          userId,
          status: 'ACTIVE',
          OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
        },
        include: { plan: true },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.entitlement.findMany({
        where: {
          userId,
          isActive: true,
          OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
        },
        include: { test: { select: { id: true, title: true, accessLevel: true, accessMode: true, price: true } } },
      }),
      prisma.payment.findMany({
        where: { userId },
        include: {
          plan: { select: { name: true, code: true } },
          test: { select: { id: true, title: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 10,
      }),
    ]);

    // Fallback to FREE plan if no paid subscription active
    let effectivePlan = activeSub?.plan;
    if (!effectivePlan) {
      effectivePlan = (await prisma.subscriptionPlan.findUnique({
        where: { code: 'FREE' },
      })) || undefined;
    }

    res.json({
      user,
      subscription: activeSub
        ? {
          ...activeSub,
          plan: {
            ...activeSub.plan,
            features: JSON.parse(activeSub.plan.featuresJson || '[]'),
          },
        }
        : {
          id: 'free_starter_fallback',
          userId,
          planId: effectivePlan?.id || '',
          status: 'ACTIVE',
          testsRemaining: null,
          plan: effectivePlan
            ? {
              ...effectivePlan,
              features: JSON.parse(effectivePlan.featuresJson || '[]'),
            }
            : null,
        },
      effectivePlan: effectivePlan
        ? {
          ...effectivePlan,
          features: JSON.parse(effectivePlan.featuresJson || '[]'),
        }
        : null,
      entitlements,
      recentPayments,
      isPremium: Boolean(activeSub && activeSub.plan?.price > 0),
      testsRemaining: activeSub?.testsRemaining ?? 0,
      referralCredits: user?.referralCredits ?? 0,
      referralCode: user?.referralCode ?? '',
    });
  } catch (error) {
    console.error('Error fetching my subscription:', error);
    res.status(500).json({ error: 'Failed to retrieve subscription profile' });
  }
});

// Check access entitlement for a specific mock test with dynamic pricing info
router.get('/test-entitlement/:testId', authenticate, async (req: Request, res: Response) => {
  try {
    const testId = req.params.testId as string;
    const userId = req.user!.id;

    const test = await prisma.test.findUnique({
      where: { id: testId },
      select: {
        id: true,
        title: true,
        accessType: true,
        accessLevel: true,
        accessMode: true,
        price: true,
        pricePaise: true,
        originalPrice: true,
        discountPct: true,
        offerExpiresAt: true,
        exam: { select: { id: true, title: true, slug: true, accessMode: true, price: true } },
      },
    });

    if (!test) {
      res.status(404).json({ error: 'Test not found' });
      return;
    }

    const accessType = getMockAccessType(test);

    // Free/premium policy is controlled only by access_type; price is display
    // metadata and must never turn a premium test into a free one.
    if (accessType === 'free') {
      res.json({
        entitled: true,
        accessMode: 'FREE',
        accessLevel: 'FREE',
        accessType,
        price: 0,
        pricePaise: 0,
        reason: 'Free Mock Test',
      });
      return;
    }

    // 2. Admins and Content Reviewers bypass paywall
    if (isStaffRole(req.user!.role)) {
      res.json({
        entitled: true,
        accessMode: test.accessMode || 'PAID',
        accessLevel: 'PREMIUM',
        accessType,
        price: test.price,
        pricePaise: storedPaise(test),
        reason: 'Admin / Staff privileges',
      });
      return;
    }

    // Keep this endpoint aligned with the enforcement used by start/submit.
    if (await canAccessMockTest(userId, req.user!.role, test)) {
      res.json({
        entitled: true,
        accessMode: 'PREMIUM',
        accessLevel: 'PREMIUM',
        accessType,
        reason: 'Active premium subscription or test entitlement',
      });
      return;
    }

    // The remaining fields provide payment-screen context only.
    const activeSub = await prisma.subscription.findFirst({
      where: {
        userId,
        status: 'ACTIVE',
        OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
      },
      include: { plan: true },
      orderBy: { createdAt: 'desc' },
    });

    const isPaidSub = Boolean(
      activeSub &&
      activeSub.plan &&
      activeSub.plan.price > 0 &&
      !activeSub.plan.code.includes('FREE')
    );

    // Check if test pack / booster has remaining unlocks
    const isBoosterPack = Boolean(
      isPaidSub &&
      activeSub &&
      (activeSub.plan.code === 'PLAN_BOOSTER_49' || activeSub.plan.code === 'TEST_PACK_99' || activeSub.plan.code.includes('BOOSTER'))
    );
    const canUnlockWithPack = Boolean(isBoosterPack && (activeSub?.testsRemaining ?? 0) > 0);

    // Check referral credits
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { referralCredits: true },
    });
    const canRedeemCredit = (user?.referralCredits || 0) > 0;

    // Calculate effective discounted price if promotional offer is active
    const basePricePaise = storedPaise(test);
    let effectivePricePaise = basePricePaise;
    const isOfferActive = test.offerExpiresAt ? new Date(test.offerExpiresAt) > new Date() : true;
    if (test.discountPct > 0 && isOfferActive) {
      const discount = Math.round((basePricePaise * test.discountPct) / 100);
      effectivePricePaise = Math.max(MIN_CASHFREE_AMOUNT_PAISE, basePricePaise - discount);
    }

    res.json({
      entitled: false,
      accessMode: test.accessMode || 'PAID',
      accessLevel: 'PREMIUM',
      accessType,
      price: paiseToInr(effectivePricePaise),
      pricePaise: effectivePricePaise,
      originalPrice: test.originalPrice || test.price,
      discountPct: test.discountPct || 0,
      offerExpiresAt: test.offerExpiresAt,
      reason: 'Payment or active subscription required to unlock this test',
      canUnlockWithPack,
      testsRemainingInPack: activeSub?.testsRemaining || 0,
      canRedeemCredit,
      referralCredits: user?.referralCredits || 0,
    });
  } catch (error) {
    console.error('Entitlement check error:', error);
    res.status(500).json({ error: 'Failed to check test entitlement' });
  }
});

// =========================================================================
// 3. PAYMENT ORDER CREATION & VERIFICATION (CASHFREE DYNAMIC PRICING)
// =========================================================================

// Create Cashfree payment order for a Plan, Single Test, or Exam Series
router.post('/create-order', authenticate, async (req: Request, res: Response) => {
  try {
    const { planId, planCode, testId, examId, couponCode, examSlug } = req.body;
    const userId = req.user!.id;

    // Case 1: Individual Mock Test Purchase
    if (testId) {
      const test = await prisma.test.findUnique({
        where: { id: testId },
        include: { exam: true },
      });

      if (!test) {
        res.status(404).json({ error: 'Mock test not found.' });
        return;
      }
      if (!test.isPublished) {
        res.status(400).json({ error: 'This mock test is not currently available for purchase.' });
        return;
      }

      if (examSlug && test.exam.slug !== String(examSlug).trim().toLowerCase()) {
        res.status(400).json({ error: 'The selected test belongs to a different examination portal.' });
        return;
      }

      // Only the canonical access type can grant a free test entitlement.
      // A premium test with a promotional/zero display price must still pass
      // the subscription gate in the start and submit endpoints.
      if (getMockAccessType(test) === 'free') {
        // Automatically grant entitlement
        await prisma.entitlement.upsert({
          where: { id: `free_${userId}_${test.id}` },
          update: { isActive: true },
          create: {
            id: `free_${userId}_${test.id}`,
            userId,
            testId: test.id,
            planCode: 'FREE_ACCESS',
            source: 'FREE_PROMO',
            expiresAt: null,
          },
        });
        res.json({
          freeUnlocked: true,
          message: 'Free test unlocked successfully!',
        });
        return;
      }

      // Server-side price calculation
      const basePricePaise = storedPaise(test);
      const originalPricePaise = test.originalPrice && test.originalPrice > test.price
        ? toPaise(test.originalPrice)
        : basePricePaise;
      let finalAmountPaise = basePricePaise;
      let discountAmountPaise = 0;
      let verifiedCouponCode: string | null = null;

      // Apply promotional discount if active
      const isOfferActive = test.offerExpiresAt ? new Date(test.offerExpiresAt) > new Date() : true;
      if (test.discountPct > 0 && isOfferActive) {
        discountAmountPaise = Math.round((basePricePaise * test.discountPct) / 100);
        finalAmountPaise = Math.max(MIN_CASHFREE_AMOUNT_PAISE, basePricePaise - discountAmountPaise);
      }

      // Apply coupon code if provided
      if (couponCode && typeof couponCode === 'string' && couponCode.trim()) {
        const coupon = await prisma.coupon.findUnique({
          where: { code: couponCode.trim().toUpperCase() },
        });
        if (coupon && coupon.isActive && (!coupon.expiresAt || coupon.expiresAt > new Date())) {
          if (!coupon.examSlug || coupon.examSlug === (test.exam?.slug || examSlug)) {
            const couponDiscountPaise = Math.round((finalAmountPaise * coupon.discountPct) / 100);
            discountAmountPaise += couponDiscountPaise;
            finalAmountPaise = Math.max(MIN_CASHFREE_AMOUNT_PAISE, finalAmountPaise - couponDiscountPaise);
            verifiedCouponCode = coupon.code;
          }
        }
      }

      const originalPrice = paiseToInr(originalPricePaise);
      const finalAmount = paiseToInr(finalAmountPaise);
      const discountAmount = paiseToInr(discountAmountPaise);
      const cfConfig = getCashfreeConfig();
      const amountInPaise = finalAmountPaise;
      const receipt = `rcpt_${Date.now()}_${userId.slice(-6)}`;
      const orderPrefix = cfConfig.isProduction ? 'order_' : 'test_order_';
      let orderId = `${orderPrefix}${Date.now()}_${userId.slice(-6)}`;
      let paymentSessionId: string | null = null;
      let gatewayUsed = 'CASHFREE';

      const user = await prisma.user.findUnique({ where: { id: userId } });

      // Check for valid existing pending order within last 15 minutes to avoid duplicate orders
      const recentPendingTestPayment = await prisma.payment.findFirst({
        where: {
          userId,
          testId: test.id,
          status: 'PENDING',
          amount: finalAmount,
          amountPaise: finalAmountPaise,
          createdAt: { gte: new Date(Date.now() - 15 * 60 * 1000) },
        },
        orderBy: { createdAt: 'desc' },
      });

      if (recentPendingTestPayment && cfConfig.isLive) {
        try {
          const existingOrder = await getCashfreeOrder(recentPendingTestPayment.orderId);
          if (existingOrder && existingOrder.order_status === 'ACTIVE' && existingOrder.payment_session_id) {
            console.log(`[Cashfree Order Reuse] Reusing existing active test order ${recentPendingTestPayment.orderId} for user ${userId}`);
            res.json({
              order_id: recentPendingTestPayment.orderId,
              orderId: recentPendingTestPayment.orderId,
              payment_session_id: existingOrder.payment_session_id,
              paymentSessionId: existingOrder.payment_session_id,
              cashfreeMode: cfConfig.mode,
              gateway: gatewayUsed,
              amount: finalAmount,
              originalPrice,
              discountAmount,
              couponCode: verifiedCouponCode,
              amountPaise: amountInPaise,
              currency: 'INR',
              planName: `Single Mock Test: ${test.title}`,
              description: `Unlock complete access & detailed analytics for ${test.title}`,
              receipt: recentPendingTestPayment.receipt,
              paymentDbId: recentPendingTestPayment.id,
              isLiveGateway: cfConfig.isLive,
              isReusedOrder: true,
            });
            return;
          }
        } catch {
          // Continue to create fresh order if status check fails
        }
      }

      if (cfConfig.isLive) {
        try {
          const clientOrigin = getTrustedCheckoutOrigin();
          const notifyUrl = getRequiredCashfreeWebhookUrl();
          const cfRes = await createCashfreeOrder({
            orderId,
            orderAmount: finalAmount,
            orderCurrency: 'INR',
            customerDetails: {
              customerId: userId,
              customerName: user?.name || 'Registered Candidate',
              customerEmail: user?.email || 'candidate@allinone.edu',
              customerPhone: (user as any)?.phone || '9999999999',
            },
            orderNote: `Mock Test: ${test.title}`,
            orderMeta: {
              returnUrl: `${clientOrigin}/?cf_order_id={order_id}`,
              notifyUrl,
            },
          });
          paymentSessionId = cfRes.paymentSessionId;
          orderId = cfRes.orderId;
          gatewayUsed = 'CASHFREE';
        } catch (cfErr: any) {
          console.error('[Cashfree Live Order Error for test]:', cfErr.message);
          res.status(502).json({
            error: `Cashfree gateway error: ${cfErr.message}`,
            message: cfErr.message,
          });
          return;
        }
      } else {
        res.status(502).json({
          error: cfConfig.isMasked
            ? 'Cashfree Secret Key is currently masked with "xxxx" in server/.env. Please configure your unmasked Cashfree production credentials.'
            : 'Cashfree credentials (CASHFREE_APP_ID / CASHFREE_SECRET_KEY) are missing in environment variables.',
          message: 'Cashfree production gateway unavailable. Please configure production keys.',
        });
        return;
      }

      const payment = await prisma.payment.create({
        data: {
          userId,
          testId: test.id,
          planId: null,
          examSlug: test.exam?.slug || examSlug || null,
          originalPrice,
          originalPricePaise,
          discountAmount,
          discountAmountPaise,
          couponCode: verifiedCouponCode,
          amount: finalAmount,
          amountPaise: finalAmountPaise,
          currency: 'INR',
          status: 'PENDING',
          orderId,
          receipt,
          notesJson: JSON.stringify({
            gateway: gatewayUsed,
            paymentSessionId,
            purchaseType: 'SINGLE_TEST',
            testId: test.id,
            testTitle: test.title,
            originalPrice,
            discountAmount,
            couponCode: verifiedCouponCode,
          }),
        },
      });

      res.json({
        order_id: orderId,
        orderId,
        payment_session_id: paymentSessionId,
        paymentSessionId,
        cashfreeMode: cfConfig.mode,
        gateway: gatewayUsed,
        amount: finalAmount,
        originalPrice,
        discountAmount,
        couponCode: verifiedCouponCode,
        amountPaise: amountInPaise,
        currency: 'INR',
        planName: `Single Mock Test: ${test.title}`,
        description: `Unlock complete access & detailed analytics for ${test.title}`,
        receipt,
        paymentDbId: payment.id,
        isLiveGateway: cfConfig.isLive,
      });
      return;
    }

    // Case 2: Subscription Plan Purchase
    if (!planId && !planCode) {
      res.status(400).json({ error: 'Plan ID, Plan Code, or Test ID is required.' });
      return;
    }

    if (examSlug) {
      await ensureExamPlansExist(String(examSlug).trim().toLowerCase());
    } else {
      await ensureDefaultPlansExist();
    }

    let plan: any = null;
    const lookupKey = String(planId || planCode || '').trim();

    // 1. Try finding by ID
    if (planId) {
      plan = await prisma.subscriptionPlan.findUnique({ where: { id: planId } }).catch(() => null);
    }

    // 2. Try finding by Code or variations
    if (!plan && lookupKey) {
      plan = await prisma.subscriptionPlan.findFirst({
        where: {
          OR: [
            { code: lookupKey },
            { code: lookupKey.toUpperCase() },
            { code: `PLAN_${lookupKey.toUpperCase()}` },
            { code: lookupKey.replace(/^(booster|pro|free)_/i, 'PLAN_$1_').toUpperCase() },
          ],
        },
      });
    }

    // 3. Fallback: match by known alias or price
    if (!plan && lookupKey) {
      const lower = lookupKey.toLowerCase();
      if (lower.includes('booster') || lower.includes('49')) {
        plan = await prisma.subscriptionPlan.findFirst({ where: { OR: [{ code: 'PLAN_BOOSTER_49' }, { price: 49 }] } });
      } else if (lower.includes('pro') || lower.includes('99') || lower.includes('premium')) {
        plan = await prisma.subscriptionPlan.findFirst({ where: { OR: [{ code: 'PLAN_PRO_99' }, { price: 99 }] } });
      } else if (lower.includes('free') || lower.includes('starter') || lower.includes('0')) {
        plan = await prisma.subscriptionPlan.findFirst({ where: { OR: [{ code: 'PLAN_FREE_0' }, { price: 0 }] } });
      } else if (lower.includes('year') || lower.includes('199')) {
        plan = await prisma.subscriptionPlan.findFirst({ where: { OR: [{ code: 'PLAN_YEARLY_199' }, { price: 199 }] } });
      } else if (lower.includes('lifetime') || lower.includes('499')) {
        plan = await prisma.subscriptionPlan.findFirst({ where: { OR: [{ code: 'PLAN_LIFETIME_499' }, { price: 499 }] } });
      }
    }

    // Never fabricate an unscoped plan during checkout. It would make a plan
    // visible in the wrong portal and overwrite the administrator's catalog.
    if (!plan) {
      res.status(404).json({ error: 'Subscription plan not found for the selected examination portal.' });
      return;
    }

    if (examSlug && plan.examSlug !== String(examSlug).trim().toLowerCase()) {
      res.status(400).json({ error: 'The selected subscription plan belongs to a different examination portal.' });
      return;
    }

    // A disabled plan must never become purchasable merely because a stale
    // client still has its identifier. Only an administrator can publish it.
    if (!plan.isPublished) {
      res.status(400).json({ error: 'This plan is not currently available for purchase.' });
      return;
    }

    if (storedPaise(plan) <= 0) {
      // Free plan: immediately activate
      await prisma.subscription.create({
        data: {
          userId,
          planId: plan.id,
          status: 'ACTIVE',
          startDate: new Date(),
        },
      });

      res.json({
        freePlanActivated: true,
        message: 'Free plan activated successfully',
      });
      return;
    }

    // Backend price & coupon validation + originalPrice snapshot
    const basePricePaise = storedPaise(plan);
    const originalPricePaise = plan.originalPrice && plan.originalPrice > plan.price
      ? toPaise(plan.originalPrice)
      : basePricePaise;
    let finalAmountPaise = basePricePaise;
    let discountAmountPaise = 0;
    let verifiedCouponCode: string | null = null;

    // Apply plan promotional discount if active
    const isOfferActive = plan.offerExpiresAt ? new Date(plan.offerExpiresAt) > new Date() : true;
    if (plan.discountPct > 0 && isOfferActive) {
      discountAmountPaise = Math.round((basePricePaise * plan.discountPct) / 100);
      finalAmountPaise = Math.max(MIN_CASHFREE_AMOUNT_PAISE, basePricePaise - discountAmountPaise);
    }

    if (couponCode && typeof couponCode === 'string' && couponCode.trim()) {
      const coupon = await prisma.coupon.findUnique({
        where: { code: couponCode.trim().toUpperCase() },
      });
      if (coupon && coupon.isActive && (!coupon.expiresAt || coupon.expiresAt > new Date())) {
        if (!coupon.examSlug || coupon.examSlug === (plan.examSlug || examSlug)) {
          const couponDiscountPaise = Math.round((finalAmountPaise * coupon.discountPct) / 100);
          discountAmountPaise += couponDiscountPaise;
          finalAmountPaise = Math.max(MIN_CASHFREE_AMOUNT_PAISE, finalAmountPaise - couponDiscountPaise);
          verifiedCouponCode = coupon.code;
        }
      }
    }

    const originalPrice = paiseToInr(originalPricePaise);
    const finalAmount = paiseToInr(finalAmountPaise);
    const discountAmount = paiseToInr(discountAmountPaise);
    const cfConfig = getCashfreeConfig();
    const amountInPaise = finalAmountPaise;
    const receipt = `rcpt_${Date.now()}_${userId.slice(-6)}`;
    const orderPrefix = cfConfig.isProduction ? 'order_' : 'test_order_';
    let orderId = `${orderPrefix}${Date.now()}_${userId.slice(-6)}`;
    let paymentSessionId: string | null = null;
    let gatewayUsed = 'CASHFREE';

    const user = await prisma.user.findUnique({ where: { id: userId } });

    // Check for valid existing pending order within last 15 minutes to avoid duplicate orders
    const recentPendingPlanPayment = await prisma.payment.findFirst({
      where: {
        userId,
        planId: plan.id,
        testId: null,
        status: 'PENDING',
        amount: finalAmount,
        amountPaise: finalAmountPaise,
        createdAt: { gte: new Date(Date.now() - 15 * 60 * 1000) },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (recentPendingPlanPayment && cfConfig.isLive) {
      try {
        const existingOrder = await getCashfreeOrder(recentPendingPlanPayment.orderId);
        if (existingOrder && existingOrder.order_status === 'ACTIVE' && existingOrder.payment_session_id) {
          console.log(`[Cashfree Order Reuse] Reusing existing active plan order ${recentPendingPlanPayment.orderId} for user ${userId}`);
          res.json({
            order_id: recentPendingPlanPayment.orderId,
            orderId: recentPendingPlanPayment.orderId,
            payment_session_id: existingOrder.payment_session_id,
            paymentSessionId: existingOrder.payment_session_id,
            cashfreeMode: cfConfig.mode,
            gateway: gatewayUsed,
            amount: finalAmount,
            originalPrice,
            discountAmount,
            couponCode: verifiedCouponCode,
            amountPaise: amountInPaise,
            currency: plan.currency || 'INR',
            planName: plan.name,
            planCode: plan.code,
            description: plan.description,
            receipt: recentPendingPlanPayment.receipt,
            paymentDbId: recentPendingPlanPayment.id,
            isLiveGateway: cfConfig.isLive,
            isReusedOrder: true,
          });
          return;
        }
      } catch {
        // Continue to create fresh order if status check fails
      }
    }

    if (cfConfig.isLive) {
      try {
        const clientOrigin = getTrustedCheckoutOrigin();
        const notifyUrl = getRequiredCashfreeWebhookUrl();
        const cfRes = await createCashfreeOrder({
          orderId,
          orderAmount: finalAmount,
          orderCurrency: plan.currency || 'INR',
          customerDetails: {
            customerId: userId,
            customerName: user?.name || 'Registered Candidate',
            customerEmail: user?.email || 'candidate@allinone.edu',
            customerPhone: (user as any)?.phone || '9999999999',
          },
          orderNote: `Plan: ${plan.name} (${plan.code})`,
          orderMeta: {
            returnUrl: `${clientOrigin}/?cf_order_id={order_id}`,
            notifyUrl,
          },
        });
        paymentSessionId = cfRes.paymentSessionId;
        orderId = cfRes.orderId;
        gatewayUsed = 'CASHFREE';
      } catch (cfErr: any) {
        console.error('[Cashfree Live Order Error for plan]:', cfErr.message);
        res.status(502).json({
          error: `Cashfree gateway error: ${cfErr.message}`,
          message: cfErr.message,
        });
        return;
      }
    } else {
      res.status(502).json({
        error: cfConfig.isMasked
          ? 'Cashfree Secret Key is currently masked with "xxxx" in server/.env. Please configure your unmasked Cashfree production credentials.'
          : 'Cashfree credentials (CASHFREE_APP_ID / CASHFREE_SECRET_KEY) are missing in environment variables.',
        message: 'Cashfree production gateway unavailable. Please configure production keys.',
      });
      return;
    }

    const payment = await prisma.payment.create({
      data: {
        userId,
        planId: plan.id,
        testId: null,
        examSlug: plan.examSlug || examSlug || null,
        originalPrice,
        originalPricePaise,
        discountAmount,
        discountAmountPaise,
        couponCode: verifiedCouponCode,
        amount: finalAmount,
        amountPaise: finalAmountPaise,
        currency: plan.currency || 'INR',
        status: 'PENDING',
        orderId,
        receipt,
        notesJson: JSON.stringify({
          gateway: gatewayUsed,
          paymentSessionId,
          planName: plan.name,
          planCode: plan.code,
          durationDays: plan.durationDays,
          originalPrice,
          discountAmount,
          couponCode: verifiedCouponCode,
        }),
      },
    });

    res.json({
      order_id: orderId,
      orderId,
      payment_session_id: paymentSessionId,
      paymentSessionId,
      cashfreeMode: cfConfig.mode,
      gateway: gatewayUsed,
      amount: finalAmount,
      originalPrice,
      discountAmount,
      couponCode: verifiedCouponCode,
      amountPaise: amountInPaise,
      currency: plan.currency || 'INR',
      planName: plan.name,
      planCode: plan.code,
      description: plan.description,
      receipt,
      paymentDbId: payment.id,
      isLiveGateway: cfConfig.isLive,
    });
    return;
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Failed to initiate payment order' });
  }
});

// =========================================================================
// CASHFREE VERIFICATION & WEBHOOK HANDLERS
// =========================================================================

// Shared transactional activation helper for verified payments
async function activatePaidOrder(params: {
  payment: any;
  cfOrderId: string;
  cfPaymentId?: string;
  paymentMethod?: string;
  signature: string;
  source: string;
}) {
  const { payment, cfOrderId, cfPaymentId, paymentMethod, signature, source } = params;

  return await prisma.$transaction(async (tx) => {
    // Re-check current payment status inside transaction to prevent double activation race
    const currentPayment = await tx.payment.findUnique({
      where: { id: payment.id },
      include: { plan: true, test: true },
    });

    if (!currentPayment) {
      throw new Error(`Payment record ${payment.id} not found.`);
    }

    if (currentPayment.status === 'SUCCESS') {
      const existingSub = await tx.subscription.findFirst({
        where: { userId: currentPayment.userId, paymentId: currentPayment.id },
        include: { plan: true },
      });
      return {
        alreadyActive: true,
        payment: currentPayment,
        subscription: existingSub,
      };
    }

    let parsedNotes: any = {};
    try {
      parsedNotes = JSON.parse(currentPayment.notesJson || '{}');
    } catch {
      parsedNotes = {};
    }

    parsedNotes.verifiedAt = new Date().toISOString();
    parsedNotes.paidAt = new Date().toISOString();
    parsedNotes.verificationSource = source;
    if (paymentMethod) parsedNotes.paymentMethod = paymentMethod;

    // Claim the pending payment atomically. Concurrent webhook/client retries
    // that lose this update must return the already-activated record instead
    // of creating another subscription or entitlement.
    const claim = await tx.payment.updateMany({
      where: { id: currentPayment.id, status: 'PENDING' },
      data: {
        status: 'SUCCESS',
        paymentId: cfPaymentId ? String(cfPaymentId) : currentPayment.paymentId || `cf_${Date.now()}`,
        method: paymentMethod || currentPayment.method || 'upi',
        signature,
        notesJson: JSON.stringify(parsedNotes),
      },
    });

    if (claim.count !== 1) {
      const activatedPayment = await tx.payment.findUnique({
        where: { id: currentPayment.id },
        include: { plan: true },
      });
      const existingSub = await tx.subscription.findFirst({
        where: { userId: currentPayment.userId, paymentId: currentPayment.id },
        include: { plan: true },
      });
      return {
        alreadyActive: true,
        payment: activatedPayment || currentPayment,
        subscription: existingSub,
      };
    }

    const updatedPayment = await tx.payment.findUnique({ where: { id: currentPayment.id } });
    if (!updatedPayment) {
      throw new Error(`Payment record ${currentPayment.id} was not available after activation.`);
    }

    let createdSubscription: any = null;

    if (currentPayment.testId) {
      // Single Mock Test Entitlement
      await tx.entitlement.upsert({
        where: { id: `ent_${currentPayment.userId}_${currentPayment.testId}` },
        update: { isActive: true },
        create: {
          id: `ent_${currentPayment.userId}_${currentPayment.testId}`,
          userId: currentPayment.userId,
          testId: currentPayment.testId,
          planCode: 'TEST_PURCHASE',
          source,
          expiresAt: null,
        },
      });
    } else if (currentPayment.plan) {
      const plan = currentPayment.plan;
      let endDate: Date | null = null;
      if (plan.durationDays > 0) {
        endDate = new Date(Date.now() + plan.durationDays * 24 * 60 * 60 * 1000);
      }

      let includedTestIds: string[] = [];
      try {
        const parsed = JSON.parse(plan.includedMockTestsJson || '[]');
        includedTestIds = Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
      } catch {
        includedTestIds = [];
      }
      if (includedTestIds.length === 0 && plan.examSlug && plan.testAccessLimit <= 0) {
        const scopedTests = await tx.test.findMany({
          where: { exam: { slug: plan.examSlug } },
          select: { id: true },
        });
        includedTestIds = scopedTests.map((test) => test.id);
      }

      // Deactivate previous active subscriptions for this user
      await tx.subscription.updateMany({
        where: { userId: currentPayment.userId, status: 'ACTIVE' },
        data: { status: 'CANCELLED' },
      });

      // A named selected-test pack grants every selected test for its duration.
      // The optional limit is only used for an open-ended scoped pack.
      const testsRemaining = includedTestIds.length === 0 && plan.testAccessLimit > 0
        ? plan.testAccessLimit
        : null;

      createdSubscription = await tx.subscription.create({
        data: {
          userId: currentPayment.userId,
          planId: plan.id,
          status: 'ACTIVE',
          startDate: new Date(),
          endDate,
          paymentId: updatedPayment.id,
          testsRemaining,
        },
        include: { plan: true },
      });

      // A selected-test plan grants only those tests. An exam-scoped plan is
      // snapshotted into direct entitlements so a later admin price/scope edit
      // cannot revoke a student's completed purchase. All-access plans keep a
      // global entitlement, matching the historic entitlement behaviour.
      if (includedTestIds.length > 0) {
        for (const testId of [...new Set(includedTestIds)]) {
          await tx.entitlement.upsert({
            where: { id: `plan_${currentPayment.id}_${testId}` },
            update: { isActive: true, expiresAt: endDate },
            create: {
              id: `plan_${currentPayment.id}_${testId}`,
              userId: currentPayment.userId,
              testId,
              planCode: plan.code,
              source,
              expiresAt: endDate,
            },
          });
        }
      } else if (!plan.examSlug && plan.testAccessLimit <= 0) {
        await tx.entitlement.upsert({
          where: { id: `plan_${currentPayment.id}_all` },
          update: { isActive: true, expiresAt: endDate },
          create: {
            id: `plan_${currentPayment.id}_all`,
            userId: currentPayment.userId,
            testId: null,
            planCode: plan.code,
            source,
            expiresAt: endDate,
          },
        });
      }
    }

    return {
      alreadyActive: false,
      payment: updatedPayment,
      subscription: createdSubscription,
    };
  });
}

// Cashfree Webhook Signature Verification (Official v3 / HMAC-SHA256)
export function verifyCashfreeWebhookSignature(
  rawBody: string,
  timestamp: string,
  signature: string,
  secretKey: string
): boolean {
  if (!rawBody || !timestamp || !signature || !secretKey) {
    return false;
  }

  try {
    // 1. Validate timestamp age (within 10 minutes to prevent replay attacks)
    const tsNumber = Number(timestamp);
    if (!isNaN(tsNumber)) {
      const tsMs = tsNumber > 10000000000 ? tsNumber : tsNumber * 1000;
      const now = Date.now();
      if (Math.abs(now - tsMs) > 10 * 60 * 1000) {
        console.warn(`[Cashfree Webhook] Expired or skewed timestamp: ${timestamp}`);
        return false;
      }
    }

    // 2. Compute HMAC-SHA256(timestamp + rawBody, secretKey) encoded in Base64
    const dataToSign = timestamp + rawBody;
    const computedSignature = crypto
      .createHmac('sha256', secretKey)
      .update(dataToSign)
      .digest('base64');

    // 3. Constant-time comparison
    const sigBuffer = Buffer.from(signature, 'utf8');
    const compBuffer = Buffer.from(computedSignature, 'utf8');

    if (sigBuffer.length !== compBuffer.length) {
      return false;
    }

    return crypto.timingSafeEqual(sigBuffer, compBuffer);
  } catch (err: any) {
    console.error('[Cashfree Webhook] Signature verification error:', err.message);
    return false;
  }
}

// Official Cashfree order verification endpoint (Called by client on checkout completion)
router.post('/verify-cashfree', authenticate, async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body;
    const userId = req.user!.id;

    if (!orderId || typeof orderId !== 'string') {
      res.status(400).json({ success: false, message: 'orderId is required.' });
      return;
    }

    const cleanOrderId = orderId.trim();

    const payment = await prisma.payment.findUnique({
      where: { orderId: cleanOrderId },
      include: { plan: true, test: true },
    });

    if (!payment) {
      res.status(404).json({ success: false, message: 'Payment order record not found in database.' });
      return;
    }

    // 1. Verify Student Ownership
    if (payment.userId !== userId && req.user!.role !== 'ADMIN') {
      res.status(403).json({ success: false, message: 'Unauthorized: This payment does not belong to your account.' });
      return;
    }

    // 2. Check if already processed (Idempotency)
    if (payment.status === 'SUCCESS') {
      const existingSub = await prisma.subscription.findFirst({
        where: { userId, paymentId: payment.id },
        include: { plan: true },
      });
      res.json({
        success: true,
        message: 'Payment has already been confirmed and is active.',
        payment,
        subscription: existingSub || undefined,
      });
      return;
    }

    // 3. Fetch Official Order from Cashfree REST API
    let cfOrder: any;
    try {
      cfOrder = await getCashfreeOrder(cleanOrderId);
    } catch (cfErr: any) {
      console.error(`[Cashfree Verify Error for ${cleanOrderId}]:`, cfErr.message);
      res.status(502).json({
        success: false,
        message: `Failed to verify with Cashfree gateway: ${cfErr.message}`,
      });
      return;
    }

    if (!cfOrder || !cfOrder.order_status) {
      res.status(502).json({
        success: false,
        message: 'Invalid response received from Cashfree gateway.',
      });
      return;
    }

    console.log(`[Cashfree Verify] Order: ${cleanOrderId} | Status: ${cfOrder.order_status} | Amount: ₹${cfOrder.order_amount}`);

    // 4. Strict Order Status Check: Only 'PAID' can activate courses!
    const orderStatus = cfOrder.order_status.toUpperCase();
    if (orderStatus !== 'PAID') {
      const isPending = orderStatus === 'ACTIVE';
      res.status(400).json({
        success: false,
        pending: isPending,
        orderStatus: cfOrder.order_status,
        message: isPending
          ? 'Payment is currently in progress. Please approve the payment in your UPI app and click Verify.'
          : `Payment not completed (Status: ${cfOrder.order_status}). Please retry.`,
      });
      return;
    }

    // 5. Strict Amount Verification
    const cfAmount = Number(cfOrder.order_amount);
    if (Math.abs(cfAmount - payment.amount) > 0.01) {
      console.error(`[Cashfree Verify Fraud] Amount mismatch! Cashfree: ${cfAmount}, Expected: ${payment.amount}`);
      res.status(400).json({
        success: false,
        message: 'Payment amount mismatch detected. Transaction flagged for security review.',
      });
      return;
    }

    // 6. Strict Currency Verification
    if (cfOrder.order_currency && cfOrder.order_currency.toUpperCase() !== 'INR') {
      res.status(400).json({
        success: false,
        message: 'Invalid currency detected. Expected INR.',
      });
      return;
    }

    // 7. Verify Actual Payment Exists in Cashfree Payments List
    let cfPaymentId = cfOrder.cf_order_id ? String(cfOrder.cf_order_id) : cleanOrderId;
    let paymentMethod = 'UPI';
    try {
      const paymentsList = await getCashfreePayments(cleanOrderId);
      const successfulPayment = paymentsList.find((p: any) => p.payment_status === 'SUCCESS');
      if (successfulPayment) {
        if (successfulPayment.cf_payment_id) {
          cfPaymentId = String(successfulPayment.cf_payment_id);
        }
        if (successfulPayment.payment_method) {
          paymentMethod = typeof successfulPayment.payment_method === 'object'
            ? Object.keys(successfulPayment.payment_method)[0]?.toUpperCase() || 'UPI'
            : String(successfulPayment.payment_method);
        }
      }
    } catch (pErr: any) {
      console.warn(`[Cashfree Payments List Check] Notice for ${cleanOrderId}:`, pErr.message);
    }

    // 8. Atomic Activation
    const result = await activatePaidOrder({
      payment,
      cfOrderId: cleanOrderId,
      cfPaymentId,
      paymentMethod,
      signature: `cashfree_api_verified_${Date.now()}`,
      source: 'CASHFREE_API',
    });

    const itemName = payment.test?.title || payment.plan?.name || 'Selected Plan';

    res.json({
      success: true,
      message: `Payment of ₹${payment.amount} verified! ${itemName} has been activated.`,
      payment: result.payment,
      subscription: result.subscription,
      purchasedTestId: payment.testId || undefined,
    });
  } catch (error: any) {
    console.error('Verify Cashfree error:', error);
    res.status(500).json({ success: false, message: error.message || 'Server error while verifying Cashfree payment.' });
  }
});

// Deprecated / Disabled: Manual UTR submissions are strictly rejected
router.post('/submit-upi-payment', authenticate, async (_req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Manual UTR submission is disabled. All payments must be securely completed and verified via Cashfree Payment Gateway.',
  });
});

// Official Cashfree Webhook Listener (Handles both /webhook/cashfree and /cashfree-webhook)
const handleCashfreeWebhook = async (req: Request, res: Response) => {
  try {
    const rawBody = (req as any).rawBody || JSON.stringify(req.body);
    const signature = (req.headers['x-webhook-signature'] || req.headers['x-cf-signature']) as string;
    const timestamp = (req.headers['x-webhook-timestamp'] || req.headers['x-cf-timestamp']) as string;

    const cfConfig = getCashfreeConfig();

    if (!cfConfig.secretKey) {
      console.error('[Cashfree Webhook] Server secret key is not configured.');
      res.status(500).json({ status: 'CONFIG_ERROR' });
      return;
    }

    // 1. Verify Cryptographic Signature
    const isValid = verifyCashfreeWebhookSignature(rawBody, timestamp, signature, cfConfig.secretKey);
    if (!isValid) {
      console.warn('[Cashfree Webhook] Rejected webhook with invalid signature.');
      res.status(401).json({ status: 'INVALID_SIGNATURE' });
      return;
    }

    const event = typeof req.body === 'object' ? req.body : JSON.parse(rawBody);
    console.log('[Cashfree Webhook Verified] Event:', event?.type || event?.event_time);

    const orderId = event?.data?.order?.order_id;
    const orderStatus = event?.data?.order?.order_status;
    const orderAmount = Number(event?.data?.order?.order_amount);
    const orderCurrency = String(event?.data?.order?.order_currency || '').toUpperCase();
    const cfPaymentId = event?.data?.payment?.cf_payment_id || event?.data?.payment?.payment_id;
    const paymentMethod = event?.data?.payment?.payment_method
      ? (typeof event.data.payment.payment_method === 'object'
          ? Object.keys(event.data.payment.payment_method)[0]?.toUpperCase()
          : String(event.data.payment.payment_method))
      : 'UPI';

    if (!orderId) {
      res.status(200).json({ status: 'IGNORED_NO_ORDER_ID' });
      return;
    }

    // 2. Ignore non-paid events (e.g. USER_DROPPED, PENDING, FAILED)
    if (orderStatus !== 'PAID' && event?.type !== 'PAYMENT_SUCCESS_WEBHOOK') {
      console.log(`[Cashfree Webhook] Order ${orderId} status ${orderStatus} is not PAID.`);
      res.status(200).json({ status: 'IGNORED_NOT_PAID' });
      return;
    }

    const payment = await prisma.payment.findUnique({
      where: { orderId },
      include: { plan: true, test: true },
    });

    if (!payment) {
      console.warn(`[Cashfree Webhook] Order ${orderId} not found in database.`);
      res.status(200).json({ status: 'ORDER_NOT_FOUND' });
      return;
    }

    // 3. Verify Amount
    if (!isNaN(orderAmount) && Math.abs(orderAmount - payment.amount) > 0.01) {
      console.error(`[Cashfree Webhook Fraud Warning] Amount mismatch: Webhook=${orderAmount}, DB=${payment.amount}`);
      res.status(400).json({ status: 'AMOUNT_MISMATCH' });
      return;
    }

    if (orderCurrency && orderCurrency !== payment.currency.toUpperCase()) {
      console.error(`[Cashfree Webhook Fraud Warning] Currency mismatch: Webhook=${orderCurrency}, DB=${payment.currency}`);
      res.status(400).json({ status: 'CURRENCY_MISMATCH' });
      return;
    }

    // A valid signature proves the event came from Cashfree. Fetch the order
    // as a second source of truth before granting a subscription or test.
    const cfOrder = await getCashfreeOrder(orderId);
    if (
      String(cfOrder?.order_status || '').toUpperCase() !== 'PAID' ||
      Math.abs(Number(cfOrder?.order_amount) - payment.amount) > 0.01 ||
      String(cfOrder?.order_currency || '').toUpperCase() !== payment.currency.toUpperCase()
    ) {
      console.error(`[Cashfree Webhook] Official order validation failed for ${orderId}.`);
      res.status(400).json({ status: 'ORDER_VALIDATION_FAILED' });
      return;
    }

    // 4. Safe Idempotent Activation
    await activatePaidOrder({
      payment,
      cfOrderId: orderId,
      cfPaymentId: cfPaymentId ? String(cfPaymentId) : orderId,
      paymentMethod,
      signature: signature || 'cashfree_webhook_verified',
      source: 'CASHFREE_WEBHOOK',
    });

    console.log(`[Cashfree Webhook] Order ${orderId} activated successfully.`);
    res.status(200).json({ status: 'SUCCESS' });
  } catch (err: any) {
    console.error('[Cashfree Webhook Error]:', err);
    res.status(500).json({ status: 'ERROR', message: err.message });
  }
};

router.post('/webhook/cashfree', handleCashfreeWebhook);
router.post('/cashfree-webhook', handleCashfreeWebhook);

// Backward-compatible payment verification endpoint (strictly delegates to verify-cashfree)
router.post('/verify-payment', authenticate, async (req: Request, res: Response) => {
  req.url = '/verify-cashfree';
  return router.handle(req, res, () => {});
});

// Backward-compatible webhook endpoint
router.post('/webhook', async (_req: Request, res: Response) => {
  res.json({ status: 'ok', received: true });
});

// Student's full payment history
router.get('/my-payments', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;
    const payments = await prisma.payment.findMany({
      where: { userId },
      include: {
        plan: { select: { name: true, code: true } },
        test: { select: { id: true, title: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ payments });
  } catch (error) {
    console.error('Payment history error:', error);
    res.status(500).json({ error: 'Failed to retrieve payment records' });
  }
});

// =========================================================================
// 4. REFERRAL SYSTEM & REDEMPTION
// =========================================================================

// Get student's referral profile & shareable link
router.get('/referral/me', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = req.user!.id;

    let user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        referralCode: true,
        referralCredits: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    if (!user.referralCode) {
      const newCode = `TN-${user.name.split(' ')[0].toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      user = await prisma.user.update({
        where: { id: userId },
        data: { referralCode: newCode, referralCredits: 1 },
      });
    }

    const referrals = await prisma.referral.findMany({
      where: { referrerId: userId },
      include: {
        referredUser: {
          select: { id: true, name: true, createdAt: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      referralCode: user.referralCode,
      referralCredits: user.referralCredits,
      referralLink: `https://allinone.edu/?ref=${user.referralCode}`,
      successfulReferralsCount: referrals.length,
      referrals,
      creditRules: {
        rewardPerReferral: '1 Free Premium Mock Test Credit',
        redemptionRate: '1 Credit = 1 Official Shift Mock Paper Unlock',
      },
    });
  } catch (error) {
    console.error('Referral lookup error:', error);
    res.status(500).json({ error: 'Failed to load referral stats' });
  }
});

// Redeem 1 referral credit to unlock a premium mock test
router.post('/referral/redeem', authenticate, async (req: Request, res: Response) => {
  try {
    const { testId } = req.body;
    const userId = req.user!.id;

    if (!testId) {
      res.status(400).json({ error: 'testId is required.' });
      return;
    }

    const [user, test] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.test.findUnique({ where: { id: testId } }),
    ]);

    if (!user || user.referralCredits < 1) {
      res.status(403).json({
        error: 'INSUFFICIENT_CREDITS',
        message: 'You have 0 referral credits. Share your link with friends to earn free test credits!',
      });
      return;
    }

    if (!test) {
      res.status(404).json({ error: 'Mock test not found.' });
      return;
    }

    await prisma.$transaction([
      prisma.user.update({
        where: { id: userId },
        data: { referralCredits: user.referralCredits - 1 },
      }),
      prisma.entitlement.create({
        data: {
          userId,
          testId,
          planCode: 'REFERRAL_REWARD',
          source: 'REFERRAL_CREDIT',
          expiresAt: null,
        },
      }),
    ]);

    res.json({
      success: true,
      message: `Successfully unlocked "${test.title}" using 1 referral credit!`,
      remainingCredits: user.referralCredits - 1,
    });
  } catch (error) {
    console.error('Referral redemption error:', error);
    res.status(500).json({ error: 'Failed to redeem referral credit' });
  }
});

// =========================================================================
// 5. DYNAMIC ADMIN PRICING & PLAN MANAGEMENT SYSTEM
// =========================================================================

// Comprehensive Admin Pricing Overview (Exams, Tests, Plans, Stats, Audit Logs)
router.get('/admin/overview', authenticate, requireRole(['ADMIN']), async (_req: Request, res: Response) => {
  try {
    await ensureDefaultPlansExist();

    const [
      totalExams,
      freeExams,
      paidExams,
      totalTests,
      freeTests,
      paidTests,
      plans,
      successfulPayments,
      failedPayments,
      allExams,
      allTests,
      recentPayments,
      auditLogs,
      activeSubscriptionsCount,
    ] = await Promise.all([
      prisma.exam.count(),
      prisma.exam.count({ where: { accessMode: 'FREE' } }),
      prisma.exam.count({ where: { accessMode: { not: 'FREE' } } }),
      prisma.test.count(),
      prisma.test.count({
        where: {
          OR: [{ accessMode: 'FREE' }, { accessLevel: 'FREE' }, { price: 0 }],
        },
      }),
      prisma.test.count({
        where: {
          AND: [
            { accessMode: { not: 'FREE' } },
            { accessLevel: { not: 'FREE' } },
            { price: { gt: 0 } },
          ],
        },
      }),
      prisma.subscriptionPlan.findMany({ orderBy: { displayOrder: 'asc' } }),
      prisma.payment.findMany({ where: { status: 'SUCCESS' } }),
      prisma.payment.count({ where: { status: 'FAILED' } }),
      prisma.exam.findMany({
        orderBy: { title: 'asc' },
        select: {
          id: true,
          title: true,
          shortName: true,
          slug: true,
          category: true,
          accessMode: true,
          price: true,
          originalPrice: true,
          discountPct: true,
          offerExpiresAt: true,
          _count: { select: { tests: true } },
        },
      }),
      prisma.test.findMany({
        orderBy: [{ examId: 'asc' }, { createdAt: 'desc' }],
        take: 150,
        select: {
          id: true,
          title: true,
          type: true,
          accessMode: true,
          accessLevel: true,
          price: true,
          originalPrice: true,
          discountPct: true,
          offerExpiresAt: true,
          isPublished: true,
          exam: { select: { id: true, title: true, shortName: true, slug: true } },
          _count: { select: { testQuestions: true, attempts: true } },
        },
      }),
      prisma.payment.findMany({
        take: 15,
        orderBy: { createdAt: 'desc' },
        include: {
          user: { select: { id: true, name: true, email: true } },
          plan: { select: { name: true, code: true, price: true } },
          test: { select: { id: true, title: true } },
        },
      }),
      prisma.pricingAuditLog.findMany({
        take: 30,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.subscription.count({
        where: {
          status: 'ACTIVE',
          OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
        },
      }),
    ]);

    const totalRevenue = successfulPayments.reduce((sum, p) => sum + p.amount, 0);
    const activePlansCount = plans.filter((p) => p.isPublished).length;

    const parsedPlans = plans.map((p) => ({
      ...p,
      priceINR: p.price,
      originalPriceINR: p.originalPrice || p.price,
      discountPercent: p.discountPct || 0,
      isActive: p.isPublished,
      features: JSON.parse(p.featuresJson || '[]'),
      includedExams: JSON.parse(p.includedExamsJson || '[]'),
      includedPapers: JSON.parse(p.includedPapersJson || '[]'),
      includedMockTests: JSON.parse(p.includedMockTestsJson || '[]'),
    }));

    const parsedExams = allExams.map((ex) => ({
      ...ex,
      priceINR: ex.price,
      originalPriceINR: ex.originalPrice || ex.price,
      discountPercent: ex.discountPct || 0,
      isPublished: true,
    }));

    const parsedTests = allTests.map((t) => ({
      ...t,
      priceINR: t.price,
      originalPriceINR: t.originalPrice || t.price,
      discountPercent: t.discountPct || 0,
      totalQuestions: t._count?.testQuestions || 0,
    }));

    res.json({
      stats: {
        totalExams,
        freeExams,
        paidExams,
        totalTests,
        freeTests,
        paidTests,
        activePlans: activePlansCount,
        totalRevenue,
        totalSubscribers: activeSubscriptionsCount,
        successfulTransactions: successfulPayments.length,
        failedTransactions: failedPayments,
      },
      exams: parsedExams,
      tests: parsedTests,
      plans: parsedPlans,
      recentPayments,
      auditLogs,
    });
  } catch (error) {
    console.error('Admin pricing overview error:', error);
    res.status(500).json({ error: 'Failed to fetch admin pricing data' });
  }
});

// Admin Content Pricing listing (Exams + Tests)
router.get('/admin/content-pricing', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { type, accessMode } = req.query;

    const examWhere: any = {};
    if (accessMode && accessMode !== 'ALL') {
      examWhere.accessMode = String(accessMode);
    }

    const testWhere: any = {};
    if (accessMode && accessMode !== 'ALL') {
      testWhere.accessMode = String(accessMode);
    }

    const [exams, tests] = await Promise.all([
      prisma.exam.findMany({
        where: examWhere,
        include: {
          category: true,
          _count: { select: { tests: true } },
        },
        orderBy: { title: 'asc' },
      }),
      prisma.test.findMany({
        where: testWhere,
        take: 300,
        include: {
          exam: {
            select: { id: true, title: true, slug: true, category: true },
          },
          _count: { select: { testQuestions: true } },
        },
        orderBy: [{ examId: 'asc' }, { createdAt: 'desc' }],
      }),
    ]);

    const formattedExams = exams.map((ex) => ({
      id: ex.id,
      title: ex.title,
      slug: ex.slug,
      shortName: ex.shortName,
      category: ex.category?.name || 'General',
      accessMode: ex.accessMode,
      price: ex.price,
      priceINR: ex.price,
      originalPrice: ex.originalPrice || ex.price,
      originalPriceINR: ex.originalPrice || ex.price,
      discountPct: ex.discountPct || 0,
      discountPercent: ex.discountPct || 0,
      isPublished: true,
      offerExpiresAt: ex.offerExpiresAt,
      testsCount: ex._count?.tests || 0,
    }));

    const formattedTests = tests.map((t) => ({
      id: t.id,
      title: t.title,
      type: t.type,
      accessMode: t.accessMode,
      accessLevel: t.accessLevel,
      price: t.price,
      priceINR: t.price,
      originalPrice: t.originalPrice || t.price,
      originalPriceINR: t.originalPrice || t.price,
      discountPct: t.discountPct || 0,
      discountPercent: t.discountPct || 0,
      isPublished: t.isPublished,
      totalQuestions: t.totalQuestions || t._count?.testQuestions || 0,
      exam: t.exam,
      offerExpiresAt: t.offerExpiresAt,
    }));

    res.json({
      exams: formattedExams,
      tests: formattedTests,
    });
  } catch (error) {
    console.error('Error fetching admin content pricing:', error);
    res.status(500).json({ error: 'Failed to fetch content pricing list' });
  }
});

// Update pricing & access control for Exam, Test, or Bulk Tests
router.put('/admin/content-pricing', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const adminId = req.user!.id;
    const targetType = req.body.targetType || req.body.contentType;
    const targetId = req.body.targetId || req.body.contentId;
    const accessMode = req.body.accessMode;
    const price = req.body.price !== undefined ? req.body.price : req.body.priceINR;
    const pricePaiseInput = req.body.pricePaise;
    const originalPrice = req.body.originalPrice !== undefined ? req.body.originalPrice : req.body.originalPriceINR;
    const discountPct = req.body.discountPct !== undefined ? req.body.discountPct : req.body.discountPercent;
    const offerExpiresAt = req.body.offerExpiresAt;
    const notes = req.body.notes;
    const bulkTestIds = req.body.bulkTestIds;

    if (!targetType) {
      res.status(400).json({ error: 'targetType or contentType is required.' });
      return;
    }

    // 1. Single Exam Pricing Update
    if (targetType === 'EXAM') {
      const existingExam = await prisma.exam.findUnique({ where: { id: targetId } });
      if (!existingExam) {
        res.status(404).json({ error: 'Exam not found' });
        return;
      }

      const updatedExam = await prisma.exam.update({
        where: { id: targetId },
        data: {
          accessMode: accessMode || existingExam.accessMode,
          price: price !== undefined ? Number(price) : existingExam.price,
          originalPrice: originalPrice !== undefined ? Number(originalPrice) : existingExam.originalPrice,
          discountPct: discountPct !== undefined ? Number(discountPct) : existingExam.discountPct,
          offerExpiresAt: offerExpiresAt !== undefined ? (offerExpiresAt ? new Date(offerExpiresAt) : null) : existingExam.offerExpiresAt,
        },
      });

      // Audit Log
      await prisma.pricingAuditLog.create({
        data: {
          adminId,
          targetType: 'EXAM',
          targetId: existingExam.id,
          targetTitle: existingExam.title,
          previousPrice: existingExam.price,
          newPrice: updatedExam.price,
          previousAccess: existingExam.accessMode,
          newAccess: updatedExam.accessMode,
          notes: notes || `Updated pricing for exam ${existingExam.title}`,
        },
      });

      res.json({
        success: true,
        message: `Pricing and access updated for exam "${updatedExam.title}"`,
        exam: updatedExam,
      });
      return;
    }

    // 2. Single Test Pricing Update
    if (targetType === 'TEST') {
      const existingTest = await prisma.test.findUnique({ where: { id: targetId } });
      if (!existingTest) {
        res.status(404).json({ error: 'Mock test not found' });
        return;
      }

      const newAccessMode = String(accessMode || existingTest.accessMode || 'FREE').toUpperCase();
      if (!['FREE', 'PAID', 'PREMIUM', 'PRIVATE', 'COMING_SOON', 'DISABLED'].includes(newAccessMode)) {
        res.status(400).json({ error: 'Mock test access mode is invalid.' });
        return;
      }
      const requestedPaise = pricePaiseInput !== undefined
        ? Number(pricePaiseInput)
        : price !== undefined ? toPaise(price) : storedPaise(existingTest);
      if (!Number.isSafeInteger(requestedPaise) || requestedPaise < 0) {
        res.status(400).json({ error: 'pricePaise must be a non-negative integer.' });
        return;
      }
      const newPricePaise = validatePremiumPrice(requestedPaise, newAccessMode);
      const newPrice = paiseToInr(newPricePaise);
      const newAccessLevel = newAccessMode === 'FREE' ? 'FREE' : newAccessMode;
      const newAccessType = newAccessMode === 'FREE' ? 'free' : 'premium';

      const updatedTest = await prisma.test.update({
        where: { id: targetId },
        data: {
          accessMode: newAccessMode,
          accessLevel: newAccessLevel,
          accessType: newAccessType,
          price: newPrice,
          pricePaise: newPricePaise,
          originalPrice: originalPrice !== undefined ? Number(originalPrice) : existingTest.originalPrice,
          discountPct: discountPct !== undefined ? Number(discountPct) : existingTest.discountPct,
          offerExpiresAt: offerExpiresAt !== undefined ? (offerExpiresAt ? new Date(offerExpiresAt) : null) : existingTest.offerExpiresAt,
          ...(req.body.isPublished !== undefined && { isPublished: Boolean(req.body.isPublished) }),
        },
      });

      // Audit Log
      await prisma.pricingAuditLog.create({
        data: {
          adminId,
          targetType: 'TEST',
          targetId: existingTest.id,
          targetTitle: existingTest.title,
          previousPrice: existingTest.price,
          newPrice: updatedTest.price,
          previousAccess: existingTest.accessMode,
          newAccess: updatedTest.accessMode,
          notes: notes || `Updated pricing for mock test ${existingTest.title} to ${newAccessMode} (${newPricePaise} paise)`,
        },
      });

      res.json({
        success: true,
        message: `Pricing updated for test "${updatedTest.title}"`,
        test: updatedTest,
      });
      return;
    }

    // 3. Bulk Tests Pricing Update
    if (targetType === 'BULK_TESTS') {
      if (!bulkTestIds || !Array.isArray(bulkTestIds) || bulkTestIds.length === 0) {
        res.status(400).json({ error: 'bulkTestIds array is required for bulk updates.' });
        return;
      }

      const newAccessMode = String(accessMode || 'PAID').toUpperCase();
      if (!['FREE', 'PAID', 'PREMIUM', 'PRIVATE', 'COMING_SOON', 'DISABLED'].includes(newAccessMode)) {
        res.status(400).json({ error: 'Mock test access mode is invalid.' });
        return;
      }
      const requestedPaise = pricePaiseInput !== undefined
        ? Number(pricePaiseInput)
        : price !== undefined ? toPaise(price) : 0;
      const newPricePaise = validatePremiumPrice(requestedPaise, newAccessMode);
      const newPrice = paiseToInr(newPricePaise);
      const newAccessLevel = newAccessMode === 'FREE' ? 'FREE' : newAccessMode;

      const updateData: any = {
        accessMode: newAccessMode,
        accessLevel: newAccessLevel,
        accessType: newAccessMode === 'FREE' ? 'free' : 'premium',
        pricePaise: newPricePaise,
      };
      if (price !== undefined || pricePaiseInput !== undefined || newAccessMode === 'FREE') updateData.price = newPrice;
      if (originalPrice !== undefined) updateData.originalPrice = Number(originalPrice);
      if (discountPct !== undefined) updateData.discountPct = Number(discountPct);
      if (offerExpiresAt !== undefined) updateData.offerExpiresAt = offerExpiresAt ? new Date(offerExpiresAt) : null;
      if (req.body.isPublished !== undefined) updateData.isPublished = Boolean(req.body.isPublished);

      const updatedBatch = await prisma.test.updateMany({
        where: { id: { in: bulkTestIds } },
        data: updateData,
      });

      // Audit Log
      await prisma.pricingAuditLog.create({
        data: {
          adminId,
          targetType: 'BULK_TESTS',
          targetId: bulkTestIds.join(','),
          targetTitle: `${bulkTestIds.length} tests bulk updated`,
          previousPrice: 0,
          newPrice: price !== undefined ? Number(price) : 0,
          previousAccess: 'MULTIPLE',
          newAccess: newAccessMode,
          notes: notes || `Bulk updated ${bulkTestIds.length} tests to ${newAccessMode} (₹${newPrice})`,
        },
      });

      res.json({
        success: true,
        message: `Bulk updated ${updatedBatch.count} mock tests successfully.`,
        count: updatedBatch.count,
      });
      return;
    }

    res.status(400).json({ error: 'Invalid targetType' });
  } catch (error) {
    console.error('Content pricing update error:', error);
    res.status(500).json({ error: 'Failed to update content pricing' });
  }
});

// Create new custom subscription plan
router.post('/admin/plans', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const adminId = req.user!.id;
    const {
      name,
      code,
      description,
      durationDays,
      billingInterval,
      features,
      includedExams,
      includedPapers,
      includedMockTests,
      examSlug,
      badge,
      displayOrder,
      offerExpiresAt,
      testAccessLimit,
    } = req.body;

    const price = req.body.price !== undefined ? req.body.price : req.body.priceINR;
    const pricePaiseInput = req.body.pricePaise;
    const originalPrice = req.body.originalPrice !== undefined ? req.body.originalPrice : req.body.originalPriceINR;
    const discountPct = req.body.discountPct !== undefined ? req.body.discountPct : req.body.discountPercent;
    const isPublished = req.body.isPublished !== undefined ? req.body.isPublished : (req.body.isActive !== undefined ? req.body.isActive : true);

    if (!name || (price === undefined && pricePaiseInput === undefined)) {
      res.status(400).json({ error: 'Plan name and price are required.' });
      return;
    }

    const pricePaise = pricePaiseInput !== undefined ? Number(pricePaiseInput) : toPaise(price);
    if (!Number.isSafeInteger(pricePaise) || pricePaise < 0) {
      res.status(400).json({ error: 'pricePaise must be a non-negative integer.' });
      return;
    }
    const payablePaise = validatePremiumPrice(pricePaise, pricePaise === 0 ? 'FREE' : 'PREMIUM');
    const originalPricePaise = originalPrice !== undefined ? toPaise(originalPrice) : payablePaise;
    const normalizedExamSlug = examSlug ? String(examSlug).trim().toLowerCase() : null;
    const normalizedIncludedMockTests = await normalizeIncludedMockTestIds(includedMockTests || [], normalizedExamSlug);

    const planCode = code
      ? code.trim().toUpperCase()
      : `PLAN_${name.replace(/[^A-Za-z0-9]/g, '_').toUpperCase()}_${Date.now().toString().slice(-4)}`;

    const newPlan = await prisma.subscriptionPlan.create({
      data: {
        name,
        code: planCode,
        description: description || '',
        price: paiseToInr(payablePaise),
        pricePaise: payablePaise,
        originalPrice: paiseToInr(originalPricePaise),
        originalPricePaise,
        discountPct: discountPct ? Number(discountPct) : 0,
        currency: 'INR',
        durationDays: Number(durationDays) || 30,
        testAccessLimit: Math.max(0, Number(testAccessLimit) || 0),
        billingInterval: billingInterval || 'MONTHLY',
        featuresJson: JSON.stringify(features || []),
        includedExamsJson: JSON.stringify(includedExams || []),
        includedPapersJson: JSON.stringify(includedPapers || []),
        includedMockTestsJson: JSON.stringify(normalizedIncludedMockTests),
        examSlug: normalizedExamSlug,
        badge: badge || null,
        isPublished: isPublished !== undefined ? Boolean(isPublished) : true,
        displayOrder: Number(displayOrder) || 10,
        offerExpiresAt: offerExpiresAt ? new Date(offerExpiresAt) : null,
      },
    });

    await prisma.pricingAuditLog.create({
      data: {
        adminId,
        targetType: 'PLAN',
        targetId: newPlan.id,
        targetTitle: newPlan.name,
        previousPrice: 0,
        newPrice: newPlan.price,
        previousAccess: 'NONE',
        newAccess: newPlan.isPublished ? 'ACTIVE' : 'INACTIVE',
        notes: `Created new pricing plan: ${newPlan.name} (₹${newPlan.price})`,
      },
    });

    res.json({
      success: true,
      message: `Plan "${newPlan.name}" created successfully.`,
      plan: {
        ...newPlan,
        priceINR: newPlan.price,
        originalPriceINR: newPlan.originalPrice,
        discountPercent: newPlan.discountPct,
        isActive: newPlan.isPublished,
        features: JSON.parse(newPlan.featuresJson || '[]'),
      },
    });
  } catch (error: any) {
    console.error('Create plan error:', error);
    res.status(500).json({ error: error.message || 'Failed to create plan' });
  }
});

// Update custom subscription plan
router.put('/admin/plans/:id', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const adminId = req.user!.id;
    const id = req.params.id as string;
    const {
      name,
      description,
      durationDays,
      billingInterval,
      features,
      includedExams,
      includedPapers,
      includedMockTests,
      examSlug,
      badge,
      displayOrder,
      offerExpiresAt,
      testAccessLimit,
    } = req.body;

    const price = req.body.price !== undefined ? req.body.price : req.body.priceINR;
    const pricePaiseInput = req.body.pricePaise;
    const originalPrice = req.body.originalPrice !== undefined ? req.body.originalPrice : req.body.originalPriceINR;
    const discountPct = req.body.discountPct !== undefined ? req.body.discountPct : req.body.discountPercent;
    const isPublished = req.body.isPublished !== undefined ? req.body.isPublished : (req.body.isActive !== undefined ? req.body.isActive : undefined);

    const existingPlan = await prisma.subscriptionPlan.findUnique({ where: { id } });
    if (!existingPlan) {
      res.status(404).json({ error: 'Subscription plan not found' });
      return;
    }

    const nextPricePaise = pricePaiseInput !== undefined
      ? Number(pricePaiseInput)
      : price !== undefined ? toPaise(price) : storedPaise(existingPlan);
    if (!Number.isSafeInteger(nextPricePaise) || nextPricePaise < 0) {
      res.status(400).json({ error: 'pricePaise must be a non-negative integer.' });
      return;
    }
    const validatedPricePaise = validatePremiumPrice(nextPricePaise, nextPricePaise === 0 ? 'FREE' : 'PREMIUM');
    const normalizedExamSlug = examSlug !== undefined
      ? (examSlug ? String(examSlug).trim().toLowerCase() : null)
      : existingPlan.examSlug;
    const normalizedIncludedMockTests = includedMockTests !== undefined
      ? await normalizeIncludedMockTestIds(includedMockTests, normalizedExamSlug)
      : undefined;

    const updated = await prisma.subscriptionPlan.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...((price !== undefined || pricePaiseInput !== undefined) && { price: paiseToInr(validatedPricePaise), pricePaise: validatedPricePaise }),
        ...(originalPrice !== undefined && { originalPrice: paiseToInr(toPaise(originalPrice)), originalPricePaise: toPaise(originalPrice) }),
        ...(discountPct !== undefined && { discountPct: Number(discountPct) }),
        ...(durationDays !== undefined && { durationDays: Number(durationDays) }),
        ...(testAccessLimit !== undefined && { testAccessLimit: Math.max(0, Number(testAccessLimit) || 0) }),
        ...(billingInterval && { billingInterval }),
        ...(features && { featuresJson: JSON.stringify(features) }),
        ...(includedExams && { includedExamsJson: JSON.stringify(includedExams) }),
        ...(includedPapers && { includedPapersJson: JSON.stringify(includedPapers) }),
        ...(normalizedIncludedMockTests !== undefined && { includedMockTestsJson: JSON.stringify(normalizedIncludedMockTests) }),
        ...(examSlug !== undefined && { examSlug: normalizedExamSlug }),
        ...(badge !== undefined && { badge }),
        ...(isPublished !== undefined && { isPublished: Boolean(isPublished) }),
        ...(displayOrder !== undefined && { displayOrder: Number(displayOrder) }),
        ...(offerExpiresAt !== undefined && { offerExpiresAt: offerExpiresAt ? new Date(offerExpiresAt) : null }),
      },
    });

    await prisma.pricingAuditLog.create({
      data: {
        adminId,
        targetType: 'PLAN',
        targetId: updated.id,
        targetTitle: updated.name,
        previousPrice: existingPlan.price,
        newPrice: updated.price,
        previousAccess: existingPlan.isPublished ? 'ACTIVE' : 'INACTIVE',
        newAccess: updated.isPublished ? 'ACTIVE' : 'INACTIVE',
        notes: `Updated subscription plan ${updated.name} (₹${updated.price})`,
      },
    });

    res.json({
      success: true,
      message: 'Plan updated successfully',
      plan: {
        ...updated,
        priceINR: updated.price,
        originalPriceINR: updated.originalPrice,
        discountPercent: updated.discountPct,
        isActive: updated.isPublished,
        features: JSON.parse(updated.featuresJson || '[]'),
      },
    });
  } catch (error) {
    console.error('Update plan error:', error);
    res.status(500).json({ error: 'Failed to update plan' });
  }
});

// Delete or archive subscription plan
router.delete('/admin/plans/:id', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const adminId = req.user!.id;
    const id = req.params.id as string;

    const plan = await prisma.subscriptionPlan.findUnique({ where: { id } });
    if (!plan) {
      res.status(404).json({ error: 'Plan not found' });
      return;
    }

    // If there are existing subscriptions, mark as unpublished (archived) instead of deleting
    const subCount = await prisma.subscription.count({ where: { planId: id } });
    if (subCount > 0) {
      await prisma.subscriptionPlan.update({
        where: { id },
        data: { isPublished: false },
      });

      await prisma.pricingAuditLog.create({
        data: {
          adminId,
          targetType: 'PLAN',
          targetId: id,
          targetTitle: plan.name,
          previousPrice: plan.price,
          newPrice: 0,
          previousAccess: 'ACTIVE',
          newAccess: 'ARCHIVED',
          notes: `Archived plan "${plan.name}" because it has ${subCount} existing subscriptions`,
        },
      });

      res.json({
        success: true,
        message: `Plan "${plan.name}" has active subscribers, so it has been unpublished/archived.`,
      });
      return;
    }

    await prisma.subscriptionPlan.delete({ where: { id } });

    await prisma.pricingAuditLog.create({
      data: {
        adminId,
        targetType: 'PLAN',
        targetId: id,
        targetTitle: plan.name,
        previousPrice: plan.price,
        newPrice: 0,
        previousAccess: 'ACTIVE',
        newAccess: 'DELETED',
        notes: `Deleted plan "${plan.name}"`,
      },
    });

    res.json({
      success: true,
      message: `Plan "${plan.name}" deleted successfully.`,
    });
  } catch (error) {
    console.error('Delete plan error:', error);
    res.status(500).json({ error: 'Failed to delete plan' });
  }
});

// Pricing audit log history
router.get('/admin/audit-logs', authenticate, requireRole(['ADMIN']), async (_req: Request, res: Response) => {
  try {
    const logs = await prisma.pricingAuditLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    res.json({ logs });
  } catch (error) {
    console.error('Fetch audit logs error:', error);
    res.status(500).json({ error: 'Failed to retrieve pricing audit logs' });
  }
});

// Admin manual refund processing
router.post('/admin/refund', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { paymentId, reason } = req.body;

    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: { user: true, plan: true },
    });

    if (!payment) {
      res.status(404).json({ error: 'Payment record not found' });
      return;
    }

    if (payment.status !== 'SUCCESS') {
      res.status(400).json({ error: 'Only successful payments can be refunded' });
      return;
    }

    const refundRef = `ref_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`;
    await prisma.$transaction([
      prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: 'REFUNDED',
          refundId: refundRef,
          refundAmount: payment.amount,
          refundReason: reason || 'Customer requested refund via admin review',
          refundStatus: 'COMPLETED',
          refundedAt: new Date(),
        },
      }),
      prisma.subscription.updateMany({
        where: { paymentId: payment.id },
        data: { status: 'CANCELLED' },
      }),
      prisma.entitlement.deleteMany({
        where: { userId: payment.userId, planCode: payment.plan?.code || '' },
      }),
    ]);

    res.json({
      success: true,
      message: `Refund of ₹${payment.amount} recorded for ${payment.user.name}. Access revoked.`,
      refundId: refundRef,
    });
  } catch (error) {
    console.error('Refund processing error:', error);
    res.status(500).json({ error: 'Failed to process refund' });
  }
});

export default router;
