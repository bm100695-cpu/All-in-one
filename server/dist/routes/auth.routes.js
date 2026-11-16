"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../prisma");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { email, password, name, role = 'STUDENT', targetExamId, referralCode: inputRefCode } = req.body;
        if (!email || !password || !name) {
            res.status(400).json({ error: 'Name, email, and password are required.' });
            return;
        }
        const existing = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (existing) {
            res.status(409).json({ error: 'User with this email already exists.' });
            return;
        }
        // Check for valid referrer
        let referrer = null;
        if (inputRefCode) {
            referrer = await prisma_1.prisma.user.findUnique({
                where: { referralCode: String(inputRefCode).trim().toUpperCase() },
            });
        }
        const passwordHash = await bcryptjs_1.default.hash(password, 10);
        const firstName = name.trim().split(' ')[0].replace(/[^A-Za-z]/g, '').toUpperCase() || 'USER';
        const myReferralCode = `TN-${firstName}-${Math.floor(1000 + Math.random() * 9000)}`;
        const user = await prisma_1.prisma.user.create({
            data: {
                email,
                passwordHash,
                name,
                role,
                targetExamId,
                referralCode: myReferralCode,
                referredById: referrer ? referrer.id : null,
                referralCredits: 1, // Welcome bonus: 1 free test credit
            },
        });
        // Reward referrer with +1 test credit & track referral
        if (referrer && referrer.id !== user.id) {
            await prisma_1.prisma.$transaction([
                prisma_1.prisma.user.update({
                    where: { id: referrer.id },
                    data: { referralCredits: (referrer.referralCredits || 0) + 1 },
                }),
                prisma_1.prisma.referral.create({
                    data: {
                        referrerId: referrer.id,
                        referredUserId: user.id,
                        referralCode: referrer.referralCode,
                        status: 'COMPLETED',
                        rewardCredits: 1,
                    },
                }),
            ]);
        }
        // Assign Free Plan subscription
        const freePlan = await prisma_1.prisma.subscriptionPlan.findUnique({ where: { code: 'FREE' } });
        if (freePlan) {
            await prisma_1.prisma.subscription.create({
                data: {
                    userId: user.id,
                    planId: freePlan.id,
                    status: 'ACTIVE',
                },
            });
        }
        const authPayload = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        };
        const token = (0, auth_1.generateToken)(authPayload);
        res.status(201).json({
            message: 'Registration successful',
            token,
            user: authPayload,
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});
// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: 'Email and password are required.' });
            return;
        }
        const user = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (!user) {
            res.status(401).json({ error: 'Invalid email or password.' });
            return;
        }
        const isValid = await bcryptjs_1.default.compare(password, user.passwordHash);
        if (!isValid) {
            res.status(401).json({ error: 'Invalid email or password.' });
            return;
        }
        const authPayload = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        };
        const token = (0, auth_1.generateToken)(authPayload);
        res.json({
            message: 'Login successful',
            token,
            user: authPayload,
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});
// Quick demo role switch (Instantly switches role for pairing/testing without retyping credentials)
router.post('/demo-switch', async (req, res) => {
    try {
        const { role } = req.body; // STUDENT, ADMIN, CONTENT_REVIEWER, INSTITUTION_ADMIN
        const targetEmail = role === 'ADMIN'
            ? 'admin@examverse.ai'
            : role === 'CONTENT_REVIEWER'
                ? 'reviewer@examverse.ai'
                : role === 'INSTITUTION_ADMIN'
                    ? 'institution@examverse.ai'
                    : 'student@examverse.ai';
        const user = await prisma_1.prisma.user.findUnique({ where: { email: targetEmail } });
        if (!user) {
            res.status(404).json({ error: 'Demo user not found. Please run seed script.' });
            return;
        }
        const authPayload = {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        };
        const token = (0, auth_1.generateToken)(authPayload);
        res.json({
            message: `Switched active session to ${user.role} (${user.name})`,
            token,
            user: authPayload,
        });
    }
    catch (error) {
        console.error('Demo switch error:', error);
        res.status(500).json({ error: 'Demo switch failed' });
    }
});
// Get current profile
router.get('/me', auth_1.authenticate, async (req, res) => {
    try {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                avatar: true,
                targetExamId: true,
                referralCode: true,
                referralCredits: true,
                createdAt: true,
            },
        });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json({ user });
    }
    catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
});
exports.default = router;
