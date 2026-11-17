import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import { prisma } from '../prisma';
import { authenticate, requireRole } from '../middleware/auth';

const router = Router();

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder_key_id';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'rzp_test_placeholder_key_secret';
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || 'rzp_webhook_placeholder_secret';
const DEFAULT_CURRENCY = process.env.DEFAULT_CURRENCY || 'INR';

const isRazorpayLive =
  RAZORPAY_KEY_ID &&
  RAZORPAY_KEY_SECRET &&
  !RAZORPAY_KEY_ID.includes('placeholder') &&
  !RAZORPAY_KEY_SECRET.includes('placeholder');

let razorpayClient: Razorpay | null = null;
if (isRazorpayLive) {
  try {
    razorpayClient = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });
  } catch (err) {
    console.warn('Failed to initialize Razorpay SDK client:', err);
  }
}

// =========================================================================
// 1. PUBLIC CONFIGURATION & PLANS
// =========================================================================

// Public gateway configuration status
router.get('/config', (_req: Request, res: Response) => {
  res.json({
    keyId: isRazorpayLive ? RAZORPAY_KEY_ID : 'rzp_test_mock_tutor_nove',
    currency: DEFAULT_CURRENCY,
    isGatewayConfigured: isRazorpayLive,
    supportedCurrencies: ['INR', 'USD'],
    activeGateway: 'Razorpay (Official Server-Verified)',
  });
});

// Helper to ensure default subscription plans exist in database
async function ensureDefaultPlansExist(): Promise<void> {
  try {
    const count = await prisma.subscriptionPlan.count();
    if (count > 0) return;

    const defaultPlans = [
      {
        name: 'Free Starter Pass',
        code: 'PLAN_FREE_0',
        description: 'Essential CBT practice with real PYQ shift papers & answer keys.',
        price: 0,
        originalPrice: 0,
        discountPct: 0,
        currency: 'INR',
        durationDays: 365,
        billingInterval: 'ONCE',
        featuresJson: JSON.stringify([
          'Access to Official PYQ Shift Papers',
          'Authentic NTA / Board CBT Exam Simulator',
          'Instant Scorecard & Answer Review',
          'No Credit Card Required',
        ]),
        isPublished: true,
        displayOrder: 1,
      },
      {
        name: 'Target Exam 30-Day Booster',
        code: 'PLAN_BOOSTER_49',
        description: 'Intensive 30-day exam preparation with full access to mock tests & derivations.',
        price: 49,
        originalPrice: 149,
        discountPct: 67,
        currency: 'INR',
        durationDays: 30,
        billingInterval: 'ONCE',
        badge: 'POPULAR',
        featuresJson: JSON.stringify([
          'Full 30-Day Unlimited Mock Tests',
          'Complete Step-by-Step Derivations & Solutions',
          'AI Readiness Index & Weakness Analysis',
          'AIR Rank & Percentile Prediction',
        ]),
        isPublished: true,
        displayOrder: 2,
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
        badge: 'BEST VALUE',
        featuresJson: JSON.stringify([
          'Full Access to All 7 Exams & 155+ Mock Tests',
          'UPTET, SUPER TET, JEE, NEET, CTET, SSC, UPSC',
          'Mistake Journal & Adaptive Question Re-Attempt',
          'Priority Live All-India Mock Tests with Rank',
        ]),
        isPublished: true,
        displayOrder: 3,
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
        displayOrder: 4,
      },
    ];

    for (const p of defaultPlans) {
      await prisma.subscriptionPlan.create({ data: p });
    }
  } catch (err) {
    console.warn('ensureDefaultPlansExist notice:', err);
  }
}

// Get all published subscription plans (optionally filtered by examSlug)
router.get('/plans', async (req: Request, res: Response) => {
  try {
    await ensureDefaultPlansExist();
    const { examSlug } = req.query;
    const where: any = { isPublished: true };
    if (examSlug && String(examSlug).trim() && String(examSlug) !== 'ALL') {
      const cleanSlug = String(examSlug).trim().toLowerCase();
      where.OR = [{ examSlug: cleanSlug }, { examSlug: null }];
    }

    const plans = await prisma.subscriptionPlan.findMany({
      where,
      orderBy: { displayOrder: 'asc' },
    });

    const parsedPlans = plans.map((p) => ({
      ...p,
      priceINR: p.price,
      priceUSD: p.price === 0 ? 0 : Math.max(1, Math.round(p.price / 75)),
      features: JSON.parse(p.featuresJson || '[]'),
      includedExams: JSON.parse(p.includedExamsJson || '[]'),
      includedPapers: JSON.parse(p.includedPapersJson || '[]'),
      includedMockTests: JSON.parse(p.includedMockTestsJson || '[]'),
    }));

    res.json({ plans: parsedPlans });
  } catch (error) {
    console.error('Error fetching plans:', error);
    res.status(500).json({ error: 'Failed to fetch subscription plans' });
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
        originalPrice = plan.price;
        discountedPrice = Math.max(1, Math.round(plan.price * (1 - coupon.discountPct / 100)));
      }
    } else if (testId) {
      const test = await prisma.test.findUnique({ where: { id: String(testId) } });
      if (test) {
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
        accessLevel: true,
        accessMode: true,
        price: true,
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

    // 1. Free test is accessible to everyone immediately (DYNAMIC PRICING CHECK)
    if (test.accessMode === 'FREE' || test.accessLevel === 'FREE' || test.price === 0) {
      res.json({
        entitled: true,
        accessMode: 'FREE',
        accessLevel: 'FREE',
        price: 0,
        reason: 'Free Mock Test',
      });
      return;
    }

    // 2. Admins and Content Reviewers bypass paywall
    if (req.user!.role === 'ADMIN' || req.user!.role === 'CONTENT_REVIEWER') {
      res.json({
        entitled: true,
        accessMode: test.accessMode || 'PAID',
        accessLevel: 'PREMIUM',
        price: test.price,
        reason: 'Admin / Staff privileges',
      });
      return;
    }

    // 3. Check for specific entitlement (e.g. single test purchased or referral redeemed)
    const specificEntitlement = await prisma.entitlement.findFirst({
      where: {
        userId,
        isActive: true,
        AND: [
          { OR: [{ testId: null }, { testId }] },
          { OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] },
        ],
      },
    });

    if (specificEntitlement) {
      res.json({
        entitled: true,
        accessMode: test.accessMode || 'PAID',
        accessLevel: 'PREMIUM',
        reason: `Unlocked via ${specificEntitlement.source}`,
      });
      return;
    }

    // 4. Check for active subscription that includes this test or exam
    const activeSub = await prisma.subscription.findFirst({
      where: {
        userId,
        status: 'ACTIVE',
        OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
      },
      include: { plan: true },
    });

    if (activeSub) {
      const plan = activeSub.plan;
      // All-access plans
      if (plan.code === 'PREMIUM_MONTHLY_149' || plan.price >= 499 || !plan.examSlug) {
        res.json({
          entitled: true,
          accessMode: test.accessMode || 'PAID',
          accessLevel: 'PREMIUM',
          reason: `Active ${plan.name} Subscription`,
        });
        return;
      }
      // Scoped exam plan
      if (plan.examSlug && test.exam?.slug && plan.examSlug === test.exam.slug) {
        res.json({
          entitled: true,
          accessMode: test.accessMode || 'PAID',
          accessLevel: 'PREMIUM',
          reason: `Included in ${plan.name}`,
        });
        return;
      }
    }

    // Check if test pack has remaining unlocks
    const canUnlockWithPack = Boolean(activeSub && activeSub.plan.code === 'TEST_PACK_99' && (activeSub.testsRemaining || 0) > 0);

    // Check referral credits
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { referralCredits: true },
    });
    const canRedeemCredit = (user?.referralCredits || 0) > 0;

    // Calculate effective discounted price if promotional offer is active
    let effectivePrice = test.price;
    const isOfferActive = test.offerExpiresAt ? new Date(test.offerExpiresAt) > new Date() : true;
    if (test.discountPct > 0 && isOfferActive) {
      const discount = Math.round((test.price * test.discountPct) / 100);
      effectivePrice = Math.max(1, test.price - discount);
    }

    res.json({
      entitled: false,
      accessMode: test.accessMode || 'PAID',
      accessLevel: 'PREMIUM',
      price: effectivePrice,
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
// 3. PAYMENT ORDER CREATION & VERIFICATION (RAZORPAY DYNAMIC PRICING)
// =========================================================================

// Create Razorpay payment order for a Plan, Single Test, or Exam Series
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

      // Check if test is free
      if (test.accessMode === 'FREE' || test.accessLevel === 'FREE' || test.price <= 0) {
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
      const originalPrice = test.originalPrice && test.originalPrice > test.price ? test.originalPrice : test.price;
      let finalAmount = test.price;
      let discountAmount = 0;
      let verifiedCouponCode: string | null = null;

      // Apply promotional discount if active
      const isOfferActive = test.offerExpiresAt ? new Date(test.offerExpiresAt) > new Date() : true;
      if (test.discountPct > 0 && isOfferActive) {
        discountAmount = Math.round((test.price * test.discountPct) / 100);
        finalAmount = Math.max(1, test.price - discountAmount);
      }

      // Apply coupon code if provided
      if (couponCode && typeof couponCode === 'string' && couponCode.trim()) {
        const coupon = await prisma.coupon.findUnique({
          where: { code: couponCode.trim().toUpperCase() },
        });
        if (coupon && coupon.isActive && (!coupon.expiresAt || coupon.expiresAt > new Date())) {
          if (!coupon.examSlug || coupon.examSlug === (test.exam?.slug || examSlug)) {
            const couponDiscount = Math.round((finalAmount * coupon.discountPct) / 100);
            discountAmount += couponDiscount;
            finalAmount = Math.max(1, finalAmount - couponDiscount);
            verifiedCouponCode = coupon.code;
          }
        }
      }

      const amountInPaise = Math.round(finalAmount * 100);
      const receipt = `test_${Date.now()}_${userId.slice(-6)}`;
      let orderId = '';

      if (razorpayClient) {
        const rzpOrder = await razorpayClient.orders.create({
          amount: amountInPaise,
          currency: 'INR',
          receipt,
          notes: {
            purchaseType: 'SINGLE_TEST',
            testId: test.id,
            testTitle: test.title,
            examSlug: test.exam?.slug || examSlug || 'general',
            userId,
          },
        });
        orderId = rzpOrder.id;
      } else {
        orderId = `order_sim_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
      }

      const payment = await prisma.payment.create({
        data: {
          userId,
          testId: test.id,
          planId: null,
          examSlug: test.exam?.slug || examSlug || null,
          originalPrice,
          discountAmount,
          couponCode: verifiedCouponCode,
          amount: finalAmount,
          currency: 'INR',
          status: 'PENDING',
          orderId,
          receipt,
          notesJson: JSON.stringify({
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
        orderId,
        amount: finalAmount,
        originalPrice,
        discountAmount,
        couponCode: verifiedCouponCode,
        amountPaise: amountInPaise,
        currency: 'INR',
        keyId: isRazorpayLive ? RAZORPAY_KEY_ID : 'rzp_test_mock_all_in_one',
        planName: `Single Mock Test: ${test.title}`,
        description: `Unlock complete access & detailed analytics for ${test.title}`,
        receipt,
        paymentDbId: payment.id,
        isLiveGateway: isRazorpayLive,
      });
      return;
    }

    // Case 2: Subscription Plan Purchase
    if (!planId && !planCode) {
      res.status(400).json({ error: 'Plan ID, Plan Code, or Test ID is required.' });
      return;
    }

    const plan = planId
      ? await prisma.subscriptionPlan.findUnique({ where: { id: planId } })
      : await prisma.subscriptionPlan.findUnique({ where: { code: planCode } });

    if (!plan || !plan.isPublished) {
      res.status(404).json({ error: 'Subscription plan not found or unavailable.' });
      return;
    }

    if (plan.price <= 0) {
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
    const originalPrice = plan.originalPrice && plan.originalPrice > plan.price ? plan.originalPrice : plan.price;
    let finalAmount = plan.price;
    let discountAmount = 0;
    let verifiedCouponCode: string | null = null;

    // Apply plan promotional discount if active
    const isOfferActive = plan.offerExpiresAt ? new Date(plan.offerExpiresAt) > new Date() : true;
    if (plan.discountPct > 0 && isOfferActive) {
      discountAmount = Math.round((plan.price * plan.discountPct) / 100);
      finalAmount = Math.max(1, plan.price - discountAmount);
    }

    if (couponCode && typeof couponCode === 'string' && couponCode.trim()) {
      const coupon = await prisma.coupon.findUnique({
        where: { code: couponCode.trim().toUpperCase() },
      });
      if (coupon && coupon.isActive && (!coupon.expiresAt || coupon.expiresAt > new Date())) {
        if (!coupon.examSlug || coupon.examSlug === (plan.examSlug || examSlug)) {
          const couponDiscount = Math.round((finalAmount * coupon.discountPct) / 100);
          discountAmount += couponDiscount;
          finalAmount = Math.max(1, finalAmount - couponDiscount);
          verifiedCouponCode = coupon.code;
        }
      }
    }

    const amountInPaise = Math.round(finalAmount * 100);
    const receipt = `rcpt_${Date.now()}_${userId.slice(-6)}`;
    let orderId = '';

    if (razorpayClient) {
      const rzpOrder = await razorpayClient.orders.create({
        amount: amountInPaise,
        currency: plan.currency || 'INR',
        receipt,
        notes: {
          planId: plan.id,
          planCode: plan.code,
          examSlug: plan.examSlug || examSlug || 'global',
          userId,
        },
      });
      orderId = rzpOrder.id;
    } else {
      orderId = `order_sim_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    }

    const payment = await prisma.payment.create({
      data: {
        userId,
        planId: plan.id,
        testId: null,
        examSlug: plan.examSlug || examSlug || null,
        originalPrice,
        discountAmount,
        couponCode: verifiedCouponCode,
        amount: finalAmount,
        currency: plan.currency || 'INR',
        status: 'PENDING',
        orderId,
        receipt,
        notesJson: JSON.stringify({
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
      orderId,
      amount: finalAmount,
      originalPrice,
      discountAmount,
      couponCode: verifiedCouponCode,
      amountPaise: amountInPaise,
      currency: plan.currency || 'INR',
      keyId: isRazorpayLive ? RAZORPAY_KEY_ID : 'rzp_test_mock_all_in_one',
      planName: plan.name,
      planCode: plan.code,
      description: plan.description,
      receipt,
      paymentDbId: payment.id,
      isLiveGateway: isRazorpayLive,
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Failed to initiate payment order' });
  }
});

// Verify official Razorpay payment signature & activate entitlement / subscription
router.post('/verify-payment', authenticate, async (req: Request, res: Response) => {
  try {
    const { orderId, paymentId, signature } = req.body;
    const userId = req.user!.id;

    if (!orderId || !paymentId) {
      res.status(400).json({ error: 'orderId and paymentId are required.' });
      return;
    }

    const payment = await prisma.payment.findUnique({
      where: { orderId },
      include: { plan: true, test: true },
    });

    if (!payment) {
      res.status(404).json({ error: 'Payment order record not found.' });
      return;
    }

    if (payment.status === 'SUCCESS') {
      res.json({
        success: true,
        message: 'Payment has already been verified and processed.',
        paymentId: payment.paymentId,
      });
      return;
    }

    // Security: Verify signature with RAZORPAY_KEY_SECRET using HMAC-SHA256
    let isSignatureValid = false;
    if (isRazorpayLive) {
      const generatedSignature = crypto
        .createHmac('sha256', RAZORPAY_KEY_SECRET)
        .update(`${orderId}|${paymentId}`)
        .digest('hex');

      isSignatureValid = generatedSignature === signature;
    } else {
      isSignatureValid = Boolean(orderId && paymentId && (signature || paymentId.startsWith('pay_')));
    }

    if (!isSignatureValid) {
      await prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: 'FAILED',
          errorMessage: 'Invalid HMAC SHA-256 payment signature verification failed',
        },
      });

      res.status(400).json({
        error: 'Payment verification failed. Security signature mismatch.',
      });
      return;
    }

    // Update Payment to SUCCESS
    const updatedPayment = await prisma.payment.update({
      where: { id: payment.id },
      data: {
        paymentId,
        signature: signature || 'verified_server_hash',
        status: 'SUCCESS',
      },
    });

    // Case A: Single Mock Test Purchase
    if (payment.testId) {
      await prisma.entitlement.create({
        data: {
          userId,
          testId: payment.testId,
          planCode: 'TEST_PURCHASE',
          source: 'TEST_PURCHASE',
          expiresAt: null, // Lifetime access to this specific purchased test
        },
      });

      res.json({
        success: true,
        message: `Payment of ₹${payment.amount} verified! "${payment.test?.title || 'Mock Test'}" has been unlocked permanently.`,
        payment: updatedPayment,
        purchasedTestId: payment.testId,
      });
      return;
    }

    // Case B: Subscription Plan Purchase
    const plan = payment.plan;
    if (!plan) {
      res.status(500).json({ error: 'Associated subscription plan not found.' });
      return;
    }

    let endDate: Date | null = null;
    if (plan.durationDays > 0) {
      endDate = new Date(Date.now() + plan.durationDays * 24 * 60 * 60 * 1000);
    }

    // Deactivate prior active subscriptions for this user
    await prisma.subscription.updateMany({
      where: { userId, status: 'ACTIVE' },
      data: { status: 'CANCELLED' },
    });

    const subscription = await prisma.subscription.create({
      data: {
        userId,
        planId: plan.id,
        status: 'ACTIVE',
        startDate: new Date(),
        endDate,
        paymentId: updatedPayment.id,
        testsRemaining: plan.code === 'TEST_PACK_99' ? 5 : null,
      },
      include: { plan: true },
    });

    // Create entitlements
    await prisma.entitlement.create({
      data: {
        userId,
        testId: null, // Global access to eligible tests
        planCode: plan.code,
        source: 'SUBSCRIPTION',
        expiresAt: endDate,
      },
    });

    res.json({
      success: true,
      message: `Payment of ₹${payment.amount} verified successfully! ${plan.name} has been activated.`,
      payment: updatedPayment,
      subscription: {
        ...subscription,
        plan: {
          ...subscription.plan,
          features: JSON.parse(subscription.plan.featuresJson || '[]'),
        },
      },
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ error: 'Server error while verifying payment.' });
  }
});

// Official Razorpay Webhook listener
router.post('/webhook', async (req: Request, res: Response) => {
  try {
    const webhookSignature = req.headers['x-razorpay-signature'] as string;
    const bodyStr = JSON.stringify(req.body);

    if (RAZORPAY_WEBHOOK_SECRET && !RAZORPAY_WEBHOOK_SECRET.includes('placeholder')) {
      const expected = crypto
        .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
        .update(bodyStr)
        .digest('hex');

      if (expected !== webhookSignature) {
        res.status(400).json({ error: 'Invalid webhook signature' });
        return;
      }
    }

    const event = req.body.event;
    const payload = req.body.payload;

    if (event === 'payment.captured') {
      const orderId = payload.payment.entity.order_id;
      const paymentId = payload.payment.entity.id;

      await prisma.payment.updateMany({
        where: { orderId, status: 'PENDING' },
        data: {
          status: 'SUCCESS',
          paymentId,
          signature: 'webhook_captured',
        },
      });
    }

    res.json({ status: 'ok', received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Webhook processing error' });
  }
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

      const newAccessMode = accessMode || existingTest.accessMode;
      const newPrice = price !== undefined ? Number(price) : existingTest.price;
      const newAccessLevel = newAccessMode === 'FREE' || newPrice === 0 ? 'FREE' : 'PREMIUM';

      const updatedTest = await prisma.test.update({
        where: { id: targetId },
        data: {
          accessMode: newAccessMode,
          accessLevel: newAccessLevel,
          price: newPrice,
          originalPrice: originalPrice !== undefined ? Number(originalPrice) : existingTest.originalPrice,
          discountPct: discountPct !== undefined ? Number(discountPct) : existingTest.discountPct,
          offerExpiresAt: offerExpiresAt !== undefined ? (offerExpiresAt ? new Date(offerExpiresAt) : null) : existingTest.offerExpiresAt,
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
          notes: notes || `Updated pricing for mock test ${existingTest.title}`,
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

      const newAccessMode = accessMode || 'PAID';
      const newPrice = price !== undefined ? Number(price) : 0;
      const newAccessLevel = newAccessMode === 'FREE' || newPrice === 0 ? 'FREE' : 'PREMIUM';

      const updateData: any = {
        accessMode: newAccessMode,
        accessLevel: newAccessLevel,
      };
      if (price !== undefined) updateData.price = newPrice;
      if (originalPrice !== undefined) updateData.originalPrice = Number(originalPrice);
      if (discountPct !== undefined) updateData.discountPct = Number(discountPct);
      if (offerExpiresAt !== undefined) updateData.offerExpiresAt = offerExpiresAt ? new Date(offerExpiresAt) : null;

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
          previousPrice: null,
          newPrice: price !== undefined ? Number(price) : null,
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
    } = req.body;

    const price = req.body.price !== undefined ? req.body.price : req.body.priceINR;
    const originalPrice = req.body.originalPrice !== undefined ? req.body.originalPrice : req.body.originalPriceINR;
    const discountPct = req.body.discountPct !== undefined ? req.body.discountPct : req.body.discountPercent;
    const isPublished = req.body.isPublished !== undefined ? req.body.isPublished : (req.body.isActive !== undefined ? req.body.isActive : true);

    if (!name || price === undefined) {
      res.status(400).json({ error: 'Plan name and price are required.' });
      return;
    }

    const planCode = code
      ? code.trim().toUpperCase()
      : `PLAN_${name.replace(/[^A-Za-z0-9]/g, '_').toUpperCase()}_${Date.now().toString().slice(-4)}`;

    const newPlan = await prisma.subscriptionPlan.create({
      data: {
        name,
        code: planCode,
        description: description || '',
        price: Number(price),
        originalPrice: originalPrice ? Number(originalPrice) : Number(price),
        discountPct: discountPct ? Number(discountPct) : 0,
        currency: 'INR',
        durationDays: Number(durationDays) || 30,
        billingInterval: billingInterval || 'MONTHLY',
        featuresJson: JSON.stringify(features || []),
        includedExamsJson: JSON.stringify(includedExams || []),
        includedPapersJson: JSON.stringify(includedPapers || []),
        includedMockTestsJson: JSON.stringify(includedMockTests || []),
        examSlug: examSlug || null,
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
        previousPrice: null,
        newPrice: newPlan.price,
        previousAccess: null,
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
    } = req.body;

    const price = req.body.price !== undefined ? req.body.price : req.body.priceINR;
    const originalPrice = req.body.originalPrice !== undefined ? req.body.originalPrice : req.body.originalPriceINR;
    const discountPct = req.body.discountPct !== undefined ? req.body.discountPct : req.body.discountPercent;
    const isPublished = req.body.isPublished !== undefined ? req.body.isPublished : (req.body.isActive !== undefined ? req.body.isActive : undefined);

    const existingPlan = await prisma.subscriptionPlan.findUnique({ where: { id } });
    if (!existingPlan) {
      res.status(404).json({ error: 'Subscription plan not found' });
      return;
    }

    const updated = await prisma.subscriptionPlan.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(price !== undefined && { price: Number(price) }),
        ...(originalPrice !== undefined && { originalPrice: Number(originalPrice) }),
        ...(discountPct !== undefined && { discountPct: Number(discountPct) }),
        ...(durationDays !== undefined && { durationDays: Number(durationDays) }),
        ...(billingInterval && { billingInterval }),
        ...(features && { featuresJson: JSON.stringify(features) }),
        ...(includedExams && { includedExamsJson: JSON.stringify(includedExams) }),
        ...(includedPapers && { includedPapersJson: JSON.stringify(includedPapers) }),
        ...(includedMockTests && { includedMockTestsJson: JSON.stringify(includedMockTests) }),
        ...(examSlug !== undefined && { examSlug: examSlug || null }),
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
        notes: `Updated subscription plan ${updated.name}`,
      },
    });

    res.json({
      success: true,
      message: 'Plan updated successfully',
      plan: {
        ...updated,
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
