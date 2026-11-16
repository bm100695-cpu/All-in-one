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

// Get all published subscription plans (optionally filtered by examSlug)
router.get('/plans', async (req: Request, res: Response) => {
  try {
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
    const { code, examSlug, planId } = req.body;
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
      res.status(400).json({ error: `Coupon "${coupon.code}" is valid only for ${coupon.examSlug.toUpperCase()} plans.` });
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
        include: { test: { select: { id: true, title: true, accessLevel: true } } },
      }),
      prisma.payment.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ]);

    // Fallback to FREE plan if no paid subscription active
    let effectivePlan = activeSub?.plan;
    if (!effectivePlan) {
      effectivePlan = await prisma.subscriptionPlan.findUnique({
        where: { code: 'FREE' },
      }) || undefined;
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
      isPremium: activeSub?.plan?.code === 'PREMIUM_MONTHLY_149',
      testsRemaining: activeSub?.testsRemaining ?? 0,
      referralCredits: user?.referralCredits ?? 0,
      referralCode: user?.referralCode ?? '',
    });
  } catch (error) {
    console.error('Error fetching my subscription:', error);
    res.status(500).json({ error: 'Failed to retrieve subscription profile' });
  }
});

// Check access entitlement for a specific mock test
router.get('/test-entitlement/:testId', authenticate, async (req: Request, res: Response) => {
  try {
    const testId = req.params.testId as string;
    const userId = req.user!.id;

    const test = await prisma.test.findUnique({
      where: { id: testId },
      select: { id: true, title: true, accessLevel: true, exam: { select: { slug: true } } },
    });

    if (!test) {
      res.status(404).json({ error: 'Test not found' });
      return;
    }

    // Free test is accessible to everyone
    if (test.accessLevel === 'FREE') {
      res.json({
        entitled: true,
        accessLevel: 'FREE',
        reason: 'Public free tier mock test',
      });
      return;
    }

    // Admins and Content Reviewers bypass paywall
    if (req.user!.role === 'ADMIN' || req.user!.role === 'CONTENT_REVIEWER') {
      res.json({
        entitled: true,
        accessLevel: 'PREMIUM',
        reason: 'Staff / Admin privileges',
      });
      return;
    }

    // Check for monthly unlimited subscription
    const activeSub = await prisma.subscription.findFirst({
      where: {
        userId,
        status: 'ACTIVE',
        OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
      },
      include: { plan: true },
    });

    if (
      activeSub &&
      (activeSub.plan.code === 'PREMIUM_MONTHLY_149' ||
        (activeSub.plan.examSlug && activeSub.plan.examSlug === test.exam?.slug))
    ) {
      res.json({
        entitled: true,
        accessLevel: 'PREMIUM',
        reason: `Active ${activeSub.plan.name} Subscription`,
      });
      return;
    }

    // Check specific entitlement
    const entitlement = await prisma.entitlement.findFirst({
      where: {
        userId,
        isActive: true,
        AND: [
          { OR: [{ testId: null }, { testId }] },
          { OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] },
        ],
      },
    });

    if (entitlement) {
      res.json({
        entitled: true,
        accessLevel: 'PREMIUM',
        reason: `Unlocked via ${entitlement.source}`,
      });
      return;
    }

    // Check if test pack has remaining unlocks
    const canUnlockWithPack = activeSub && activeSub.plan.code === 'TEST_PACK_99' && (activeSub.testsRemaining || 0) > 0;

    // Check if user has referral credits
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { referralCredits: true },
    });
    const canRedeemCredit = (user?.referralCredits || 0) > 0;

    res.json({
      entitled: false,
      accessLevel: 'PREMIUM',
      reason: 'Premium mock test requires active plan or unlock credit',
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
// 3. PAYMENT ORDER CREATION & VERIFICATION (RAZORPAY)
// =========================================================================

// Create Razorpay payment order with backend coupon validation & original price snapshot
router.post('/create-order', authenticate, async (req: Request, res: Response) => {
  try {
    const { planId, planCode, couponCode, examSlug } = req.body;
    const userId = req.user!.id;

    if (!planId && !planCode) {
      res.status(400).json({ error: 'Plan ID or Plan Code is required.' });
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
    const originalPrice = plan.price;
    let finalAmount = originalPrice;
    let discountAmount = 0;
    let verifiedCouponCode: string | null = null;

    if (couponCode && typeof couponCode === 'string' && couponCode.trim()) {
      const coupon = await prisma.coupon.findUnique({
        where: { code: couponCode.trim().toUpperCase() },
      });
      if (coupon && coupon.isActive && (!coupon.expiresAt || coupon.expiresAt > new Date())) {
        if (!coupon.examSlug || coupon.examSlug === (plan.examSlug || examSlug)) {
          discountAmount = Math.round((originalPrice * coupon.discountPct) / 100);
          finalAmount = Math.max(1, originalPrice - discountAmount);
          verifiedCouponCode = coupon.code;
        }
      }
    }

    const amountInPaise = Math.round(finalAmount * 100);
    const receipt = `rcpt_${Date.now()}_${userId.slice(-6)}`;
    let orderId = '';

    if (razorpayClient) {
      // Call official Razorpay Orders API
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
      // Standard fallback order ID for test environments
      orderId = `order_sim_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    }

    // Persist Payment record in PENDING state with original price snapshot
    const payment = await prisma.payment.create({
      data: {
        userId,
        planId: plan.id,
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

// Verify official Razorpay payment signature & activate entitlement
router.post('/verify-payment', authenticate, async (req: Request, res: Response) => {
  try {
    const { orderId, paymentId, signature } = req.body;
    const userId = req.user!.id;

    if (!orderId || !paymentId) {
      res.status(400).json({ error: 'orderId and paymentId are required.' });
      return;
    }

    // Find the pending payment
    const payment = await prisma.payment.findUnique({
      where: { orderId },
      include: { plan: true },
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
      // In sandbox mode with placeholder credentials, verify non-empty parameters
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

    const plan = payment.plan;
    if (!plan) {
      res.status(500).json({ error: 'Associated subscription plan not found.' });
      return;
    }

    // Calculate expiration date
    let endDate: Date | null = null;
    if (plan.durationDays > 0) {
      endDate = new Date(Date.now() + plan.durationDays * 24 * 60 * 60 * 1000);
    }

    // Deactivate prior active subscriptions for this user
    await prisma.subscription.updateMany({
      where: { userId, status: 'ACTIVE' },
      data: { status: 'CANCELLED' },
    });

    // Create fresh Subscription
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

    // Create Entitlements
    if (plan.code === 'PREMIUM_MONTHLY_149') {
      // Global entitlement: access to all premium tests
      await prisma.entitlement.create({
        data: {
          userId,
          testId: null, // null = all eligible tests
          planCode: plan.code,
          source: 'SUBSCRIPTION',
          expiresAt: endDate,
        },
      });
    }

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

// Official Razorpay Webhook listener (Processes async captured/failed/refund events)
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

    console.log(`[Razorpay Webhook] Received event: ${event}`);

    if (event === 'payment.captured') {
      const p = payload.payment?.entity;
      if (p?.order_id) {
        await prisma.payment.updateMany({
          where: { orderId: p.order_id },
          data: {
            status: 'SUCCESS',
            paymentId: p.id,
            method: p.method,
          },
        });
      }
    } else if (event === 'payment.failed') {
      const p = payload.payment?.entity;
      if (p?.order_id) {
        await prisma.payment.updateMany({
          where: { orderId: p.order_id },
          data: {
            status: 'FAILED',
            errorMessage: p.error_description || 'Payment failed via gateway',
          },
        });
      }
    } else if (event === 'refund.processed') {
      const r = payload.refund?.entity;
      if (r?.payment_id) {
        await prisma.payment.updateMany({
          where: { paymentId: r.payment_id },
          data: {
            status: 'REFUNDED',
            refundId: r.id,
            refundAmount: r.amount / 100,
            refundStatus: 'COMPLETED',
            refundedAt: new Date(),
          },
        });
      }
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
      include: { plan: true },
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

    // Auto-generate referral code if missing
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

    // Deduct 1 credit & grant permanent entitlement for this test
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
          expiresAt: null, // lifetime unlock for redeemed test
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
// 5. ADMIN MONETIZATION & ANALYTICS DASHBOARD
// =========================================================================

// Get admin monetization overview
router.get('/admin/overview', authenticate, requireRole(['ADMIN']), async (_req: Request, res: Response) => {
  try {
    const [
      totalStudents,
      paidSubscriptions,
      successfulPayments,
      failedPayments,
      plans,
      recentTransactions,
      topTests,
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'STUDENT' } }),
      prisma.subscription.findMany({
        where: {
          status: 'ACTIVE',
          plan: { price: { gt: 0 } },
        },
        include: { plan: true },
      }),
      prisma.payment.findMany({
        where: { status: 'SUCCESS' },
      }),
      prisma.payment.count({ where: { status: 'FAILED' } }),
      prisma.subscriptionPlan.findMany({ orderBy: { displayOrder: 'asc' } }),
      prisma.payment.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          user: { select: { id: true, name: true, email: true } },
          plan: { select: { name: true, code: true, price: true } },
        },
      }),
      prisma.test.findMany({
        take: 5,
        orderBy: { attempts: { _count: 'desc' } },
        select: {
          id: true,
          title: true,
          accessLevel: true,
          _count: { select: { attempts: true } },
        },
      }),
    ]);

    const totalRevenue = successfulPayments.reduce((sum, p) => sum + p.amount, 0);
    const premiumStudentsCount = new Set(paidSubscriptions.map((s) => s.userId)).size;
    const freeStudentsCount = Math.max(0, totalStudents - premiumStudentsCount);
    const refundedPaymentsCount = await prisma.payment.count({ where: { status: 'REFUNDED' } });

    const metrics = {
      totalRevenueINR: totalRevenue,
      totalRevenueUSD: 0,
      activePaidSubscriptions: paidSubscriptions.length,
      totalStudents,
      freeStudents: freeStudentsCount,
      paidStudents: premiumStudentsCount,
      successfulPayments: successfulPayments.length,
      refundedPayments: refundedPaymentsCount,
    };

    res.json({
      metrics,
      totalStudents,
      freeStudentsCount,
      premiumStudentsCount,
      activePaidSubscriptionsCount: paidSubscriptions.length,
      totalVerifiedRevenue: totalRevenue,
      successfulTransactionsCount: successfulPayments.length,
      failedTransactionsCount: failedPayments,
      plans,
      recentPayments: recentTransactions,
      recentTransactions,
      topTests: topTests.map((t) => ({
        id: t.id,
        title: t.title,
        accessLevel: t.accessLevel,
        attemptsCount: t._count.attempts,
      })),
    });
  } catch (error) {
    console.error('Admin monetization overview error:', error);
    res.status(500).json({ error: 'Failed to fetch admin monetization data' });
  }
});

// Admin plan updates (update price, features, active status)
router.put('/admin/plans/:id', authenticate, requireRole(['ADMIN']), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price, isPublished, features } = req.body;

    const updated = await prisma.subscriptionPlan.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(price !== undefined && { price: Number(price) }),
        ...(isPublished !== undefined && { isPublished: Boolean(isPublished) }),
        ...(features && { featuresJson: JSON.stringify(features) }),
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

    // Process refund record & deactivate subscriptions
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
