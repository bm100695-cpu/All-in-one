"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crypto_1 = __importDefault(require("crypto"));
const razorpay_1 = __importDefault(require("razorpay"));
const prisma_1 = require("../prisma");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder_key_id';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'rzp_test_placeholder_key_secret';
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || 'rzp_webhook_placeholder_secret';
const DEFAULT_CURRENCY = process.env.DEFAULT_CURRENCY || 'INR';
const isRazorpayLive = RAZORPAY_KEY_ID &&
    RAZORPAY_KEY_SECRET &&
    !RAZORPAY_KEY_ID.includes('placeholder') &&
    !RAZORPAY_KEY_SECRET.includes('placeholder');
let razorpayClient = null;
if (isRazorpayLive) {
    try {
        razorpayClient = new razorpay_1.default({
            key_id: RAZORPAY_KEY_ID,
            key_secret: RAZORPAY_KEY_SECRET,
        });
    }
    catch (err) {
        console.warn('Failed to initialize Razorpay SDK client:', err);
    }
}
// =========================================================================
// 1. PUBLIC CONFIGURATION & PLANS
// =========================================================================
// Public gateway configuration status
router.get('/config', (_req, res) => {
    res.json({
        keyId: isRazorpayLive ? RAZORPAY_KEY_ID : 'rzp_test_mock_tutor_nove',
        currency: DEFAULT_CURRENCY,
        isGatewayConfigured: isRazorpayLive,
        supportedCurrencies: ['INR', 'USD'],
        activeGateway: 'Razorpay (Official Server-Verified)',
    });
});
// Get all published subscription plans
router.get('/plans', async (_req, res) => {
    try {
        const plans = await prisma_1.prisma.subscriptionPlan.findMany({
            where: { isPublished: true },
            orderBy: { displayOrder: 'asc' },
        });
        const parsedPlans = plans.map((p) => ({
            ...p,
            features: JSON.parse(p.featuresJson || '[]'),
        }));
        res.json({ plans: parsedPlans });
    }
    catch (error) {
        console.error('Error fetching plans:', error);
        res.status(500).json({ error: 'Failed to fetch subscription plans' });
    }
});
// =========================================================================
// 2. USER SUBSCRIPTION & ENTITLEMENTS
// =========================================================================
// Get student's current active subscription & credits
router.get('/my-subscription', auth_1.authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        const [user, activeSub, entitlements, recentPayments] = await Promise.all([
            prisma_1.prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    referralCode: true,
                    referralCredits: true,
                },
            }),
            prisma_1.prisma.subscription.findFirst({
                where: {
                    userId,
                    status: 'ACTIVE',
                    OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
                },
                include: { plan: true },
                orderBy: { createdAt: 'desc' },
            }),
            prisma_1.prisma.entitlement.findMany({
                where: {
                    userId,
                    isActive: true,
                    OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
                },
                include: { test: { select: { id: true, title: true, accessLevel: true } } },
            }),
            prisma_1.prisma.payment.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                take: 5,
            }),
        ]);
        // Fallback to FREE plan if no paid subscription active
        let effectivePlan = activeSub?.plan;
        if (!effectivePlan) {
            effectivePlan = await prisma_1.prisma.subscriptionPlan.findUnique({
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
                : null,
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
    }
    catch (error) {
        console.error('Error fetching my subscription:', error);
        res.status(500).json({ error: 'Failed to retrieve subscription profile' });
    }
});
// Check access entitlement for a specific mock test
router.get('/test-entitlement/:testId', auth_1.authenticate, async (req, res) => {
    try {
        const { testId } = req.params;
        const userId = req.user.id;
        const test = await prisma_1.prisma.test.findUnique({
            where: { id: testId },
            select: { id: true, title: true, accessLevel: true },
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
        if (req.user.role === 'ADMIN' || req.user.role === 'CONTENT_REVIEWER') {
            res.json({
                entitled: true,
                accessLevel: 'PREMIUM',
                reason: 'Staff / Admin privileges',
            });
            return;
        }
        // Check for monthly unlimited subscription
        const activeSub = await prisma_1.prisma.subscription.findFirst({
            where: {
                userId,
                status: 'ACTIVE',
                OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
            },
            include: { plan: true },
        });
        if (activeSub && activeSub.plan.code === 'PREMIUM_MONTHLY_149') {
            res.json({
                entitled: true,
                accessLevel: 'PREMIUM',
                reason: 'Active Premium Monthly All-Access Subscription',
            });
            return;
        }
        // Check specific entitlement
        const entitlement = await prisma_1.prisma.entitlement.findFirst({
            where: {
                userId,
                isActive: true,
                OR: [{ testId: null }, { testId }],
                OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
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
        const user = await prisma_1.prisma.user.findUnique({
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
    }
    catch (error) {
        console.error('Entitlement check error:', error);
        res.status(500).json({ error: 'Failed to check test entitlement' });
    }
});
// =========================================================================
// 3. PAYMENT ORDER CREATION & VERIFICATION (RAZORPAY)
// =========================================================================
// Create Razorpay payment order
router.post('/create-order', auth_1.authenticate, async (req, res) => {
    try {
        const { planId } = req.body;
        const userId = req.user.id;
        if (!planId) {
            res.status(400).json({ error: 'Plan ID is required.' });
            return;
        }
        const plan = await prisma_1.prisma.subscriptionPlan.findUnique({
            where: { id: planId },
        });
        if (!plan || !plan.isPublished) {
            res.status(404).json({ error: 'Subscription plan not found or unavailable.' });
            return;
        }
        if (plan.price <= 0) {
            // Free plan: immediately activate
            await prisma_1.prisma.subscription.create({
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
        const amountInPaise = Math.round(plan.price * 100);
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
                    userId,
                },
            });
            orderId = rzpOrder.id;
        }
        else {
            // Standard fallback order ID for test environments
            orderId = `order_sim_${Date.now()}_${crypto_1.default.randomBytes(4).toString('hex')}`;
        }
        // Persist Payment record in PENDING state
        const payment = await prisma_1.prisma.payment.create({
            data: {
                userId,
                planId: plan.id,
                amount: plan.price,
                currency: plan.currency || 'INR',
                status: 'PENDING',
                orderId,
                receipt,
                notesJson: JSON.stringify({
                    planName: plan.name,
                    planCode: plan.code,
                    durationDays: plan.durationDays,
                }),
            },
        });
        res.json({
            orderId,
            amount: plan.price,
            amountPaise: amountInPaise,
            currency: plan.currency || 'INR',
            keyId: isRazorpayLive ? RAZORPAY_KEY_ID : 'rzp_test_mock_tutor_nove',
            planName: plan.name,
            planCode: plan.code,
            description: plan.description,
            receipt,
            paymentDbId: payment.id,
            isLiveGateway: isRazorpayLive,
        });
    }
    catch (error) {
        console.error('Create order error:', error);
        res.status(500).json({ error: 'Failed to initiate payment order' });
    }
});
// Verify official Razorpay payment signature & activate entitlement
router.post('/verify-payment', auth_1.authenticate, async (req, res) => {
    try {
        const { orderId, paymentId, signature } = req.body;
        const userId = req.user.id;
        if (!orderId || !paymentId) {
            res.status(400).json({ error: 'orderId and paymentId are required.' });
            return;
        }
        // Find the pending payment
        const payment = await prisma_1.prisma.payment.findUnique({
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
            const generatedSignature = crypto_1.default
                .createHmac('sha256', RAZORPAY_KEY_SECRET)
                .update(`${orderId}|${paymentId}`)
                .digest('hex');
            isSignatureValid = generatedSignature === signature;
        }
        else {
            // In sandbox mode with placeholder credentials, verify non-empty parameters
            isSignatureValid = Boolean(orderId && paymentId && (signature || paymentId.startsWith('pay_')));
        }
        if (!isSignatureValid) {
            await prisma_1.prisma.payment.update({
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
        const updatedPayment = await prisma_1.prisma.payment.update({
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
        let endDate = null;
        if (plan.durationDays > 0) {
            endDate = new Date(Date.now() + plan.durationDays * 24 * 60 * 60 * 1000);
        }
        // Deactivate prior active subscriptions for this user
        await prisma_1.prisma.subscription.updateMany({
            where: { userId, status: 'ACTIVE' },
            data: { status: 'CANCELLED' },
        });
        // Create fresh Subscription
        const subscription = await prisma_1.prisma.subscription.create({
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
            await prisma_1.prisma.entitlement.create({
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
    }
    catch (error) {
        console.error('Payment verification error:', error);
        res.status(500).json({ error: 'Server error while verifying payment.' });
    }
});
// Official Razorpay Webhook listener (Processes async captured/failed/refund events)
router.post('/webhook', async (req, res) => {
    try {
        const webhookSignature = req.headers['x-razorpay-signature'];
        const bodyStr = JSON.stringify(req.body);
        if (RAZORPAY_WEBHOOK_SECRET && !RAZORPAY_WEBHOOK_SECRET.includes('placeholder')) {
            const expected = crypto_1.default
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
                await prisma_1.prisma.payment.updateMany({
                    where: { orderId: p.order_id },
                    data: {
                        status: 'SUCCESS',
                        paymentId: p.id,
                        method: p.method,
                    },
                });
            }
        }
        else if (event === 'payment.failed') {
            const p = payload.payment?.entity;
            if (p?.order_id) {
                await prisma_1.prisma.payment.updateMany({
                    where: { orderId: p.order_id },
                    data: {
                        status: 'FAILED',
                        errorMessage: p.error_description || 'Payment failed via gateway',
                    },
                });
            }
        }
        else if (event === 'refund.processed') {
            const r = payload.refund?.entity;
            if (r?.payment_id) {
                await prisma_1.prisma.payment.updateMany({
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
    }
    catch (error) {
        console.error('Webhook processing error:', error);
        res.status(500).json({ error: 'Webhook processing error' });
    }
});
// Student's full payment history
router.get('/my-payments', auth_1.authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        const payments = await prisma_1.prisma.payment.findMany({
            where: { userId },
            include: { plan: true },
            orderBy: { createdAt: 'desc' },
        });
        res.json({ payments });
    }
    catch (error) {
        console.error('Payment history error:', error);
        res.status(500).json({ error: 'Failed to retrieve payment records' });
    }
});
// =========================================================================
// 4. REFERRAL SYSTEM & REDEMPTION
// =========================================================================
// Get student's referral profile & shareable link
router.get('/referral/me', auth_1.authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        let user = await prisma_1.prisma.user.findUnique({
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
            user = await prisma_1.prisma.user.update({
                where: { id: userId },
                data: { referralCode: newCode, referralCredits: 1 },
            });
        }
        const referrals = await prisma_1.prisma.referral.findMany({
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
            referralLink: `https://tutornove.edu/?ref=${user.referralCode}`,
            successfulReferralsCount: referrals.length,
            referrals,
            creditRules: {
                rewardPerReferral: '1 Free Premium Mock Test Credit',
                redemptionRate: '1 Credit = 1 Official Shift Mock Paper Unlock',
            },
        });
    }
    catch (error) {
        console.error('Referral lookup error:', error);
        res.status(500).json({ error: 'Failed to load referral stats' });
    }
});
// Redeem 1 referral credit to unlock a premium mock test
router.post('/referral/redeem', auth_1.authenticate, async (req, res) => {
    try {
        const { testId } = req.body;
        const userId = req.user.id;
        if (!testId) {
            res.status(400).json({ error: 'testId is required.' });
            return;
        }
        const [user, test] = await Promise.all([
            prisma_1.prisma.user.findUnique({ where: { id: userId } }),
            prisma_1.prisma.test.findUnique({ where: { id: testId } }),
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
        await prisma_1.prisma.$transaction([
            prisma_1.prisma.user.update({
                where: { id: userId },
                data: { referralCredits: user.referralCredits - 1 },
            }),
            prisma_1.prisma.entitlement.create({
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
    }
    catch (error) {
        console.error('Referral redemption error:', error);
        res.status(500).json({ error: 'Failed to redeem referral credit' });
    }
});
// =========================================================================
// 5. ADMIN MONETIZATION & ANALYTICS DASHBOARD
// =========================================================================
// Get admin monetization overview
router.get('/admin/overview', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN']), async (_req, res) => {
    try {
        const [totalStudents, paidSubscriptions, successfulPayments, failedPayments, plans, recentTransactions, topTests,] = await Promise.all([
            prisma_1.prisma.user.count({ where: { role: 'STUDENT' } }),
            prisma_1.prisma.subscription.findMany({
                where: {
                    status: 'ACTIVE',
                    plan: { price: { gt: 0 } },
                },
                include: { plan: true },
            }),
            prisma_1.prisma.payment.findMany({
                where: { status: 'SUCCESS' },
            }),
            prisma_1.prisma.payment.count({ where: { status: 'FAILED' } }),
            prisma_1.prisma.subscriptionPlan.findMany({ orderBy: { displayOrder: 'asc' } }),
            prisma_1.prisma.payment.findMany({
                take: 10,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: { select: { id: true, name: true, email: true } },
                    plan: { select: { name: true, code: true, price: true } },
                },
            }),
            prisma_1.prisma.test.findMany({
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
        res.json({
            totalStudents,
            freeStudentsCount,
            premiumStudentsCount,
            activePaidSubscriptionsCount: paidSubscriptions.length,
            totalVerifiedRevenue: totalRevenue,
            successfulTransactionsCount: successfulPayments.length,
            failedTransactionsCount: failedPayments,
            plans,
            recentTransactions,
            topTests: topTests.map((t) => ({
                id: t.id,
                title: t.title,
                accessLevel: t.accessLevel,
                attemptsCount: t._count.attempts,
            })),
        });
    }
    catch (error) {
        console.error('Admin monetization overview error:', error);
        res.status(500).json({ error: 'Failed to fetch admin monetization data' });
    }
});
// Admin plan updates (update price, features, active status)
router.put('/admin/plans/:id', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN']), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, isPublished, features } = req.body;
        const updated = await prisma_1.prisma.subscriptionPlan.update({
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
    }
    catch (error) {
        console.error('Update plan error:', error);
        res.status(500).json({ error: 'Failed to update plan' });
    }
});
// Admin manual refund processing
router.post('/admin/refund', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN']), async (req, res) => {
    try {
        const { paymentId, reason } = req.body;
        const payment = await prisma_1.prisma.payment.findUnique({
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
        const refundRef = `ref_${Date.now()}_${crypto_1.default.randomBytes(3).toString('hex')}`;
        await prisma_1.prisma.$transaction([
            prisma_1.prisma.payment.update({
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
            prisma_1.prisma.subscription.updateMany({
                where: { paymentId: payment.id },
                data: { status: 'CANCELLED' },
            }),
            prisma_1.prisma.entitlement.deleteMany({
                where: { userId: payment.userId, planCode: payment.plan?.code || '' },
            }),
        ]);
        res.json({
            success: true,
            message: `Refund of ₹${payment.amount} recorded for ${payment.user.name}. Access revoked.`,
            refundId: refundRef,
        });
    }
    catch (error) {
        console.error('Refund processing error:', error);
        res.status(500).json({ error: 'Failed to process refund' });
    }
});
exports.default = router;
