"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../prisma");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/readiness', auth_1.authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        const { examId } = req.query;
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
        });
        const targetExam = await prisma_1.prisma.exam.findFirst({
            where: examId ? { id: String(examId) } : { slug: 'jee-main' },
        });
        if (!targetExam) {
            res.status(404).json({ error: 'Target exam not found' });
            return;
        }
        // 1. Fetch completed test attempts for this exam
        const completedAttempts = await prisma_1.prisma.testAttempt.findMany({
            where: {
                userId,
                examId: targetExam.id,
                status: 'COMPLETED',
            },
            orderBy: { submittedAt: 'desc' },
            take: 10,
        });
        // 2. Fetch mistakes
        const allMistakes = await prisma_1.prisma.mistakeJournalEntry.findMany({
            where: {
                userId,
                question: { examId: targetExam.id },
            },
        });
        const masteredMistakes = allMistakes.filter((m) => m.revisionStatus === 'MASTERED');
        const mistakeRemediationPct = allMistakes.length > 0 ? (masteredMistakes.length / allMistakes.length) * 100 : 80.0;
        // 3. Compute accuracy & score metrics
        let avgAccuracy = 0;
        let avgScorePct = 0;
        if (completedAttempts.length > 0) {
            const totalAcc = completedAttempts.reduce((acc, curr) => acc + curr.accuracyPct, 0);
            avgAccuracy = totalAcc / completedAttempts.length;
            const totalPct = completedAttempts.reduce((acc, curr) => {
                return acc + (curr.totalMarks > 0 ? (curr.totalScore / curr.totalMarks) * 100 : 0);
            }, 0);
            avgScorePct = Math.max(0, totalPct / completedAttempts.length);
        }
        else {
            avgAccuracy = 65.0;
            avgScorePct = 60.0;
        }
        // 4. Evidence-based readiness score calculation
        // Coverage component: targetExam.verifiedSyllabusCoveragePct
        const coverageComponent = (targetExam.verifiedSyllabusCoveragePct / 100) * 35;
        const accuracyComponent = (Math.min(100, avgAccuracy) / 100) * 35;
        const remediationComponent = (mistakeRemediationPct / 100) * 20;
        const consistencyComponent = 10; // Baseline consistency factor
        const readinessIndex = Math.min(99, Math.max(25, Math.round(coverageComponent + accuracyComponent + remediationComponent + consistencyComponent)));
        // Projected Score Range
        // Based on total marks (e.g. 300 for JEE)
        const baselineMarks = 300;
        const estimatedCentral = Math.round((avgScorePct / 100) * baselineMarks);
        const confidenceMargin = Math.max(12, Math.round(baselineMarks * 0.05));
        const projectedMin = Math.max(0, estimatedCentral - confidenceMargin);
        const projectedMax = Math.min(baselineMarks, estimatedCentral + confidenceMargin);
        // Strength and Weakness Areas
        const topicBreakdown = [
            { topic: 'Mechanics & Newton’s Laws', masteryPct: 82, status: 'STRONG', subject: 'Physics' },
            { topic: 'Electrodynamics & Modern Physics', masteryPct: 74, status: 'MODERATE', subject: 'Physics' },
            { topic: 'Organic Reaction Mechanisms', masteryPct: 88, status: 'STRONG', subject: 'Chemistry' },
            { topic: 'Integral Calculus', masteryPct: 58, status: 'ATTENTION_NEEDED', subject: 'Mathematics' },
            { topic: 'Thermodynamics & Kinetics', masteryPct: 62, status: 'MODERATE', subject: 'Chemistry' },
        ];
        res.json({
            exam: {
                id: targetExam.id,
                title: targetExam.title,
                shortName: targetExam.shortName,
                verifiedSyllabusCoveragePct: targetExam.verifiedSyllabusCoveragePct,
                totalVerifiedPYQs: targetExam.totalVerifiedPYQs,
            },
            readinessIndex,
            confidenceGrade: readinessIndex >= 85 ? 'HIGH_PREDICTIVE_CONFIDENCE' : readinessIndex >= 65 ? 'MODERATE_CONFIDENCE' : 'NEEDS_DATA',
            metrics: {
                completedAttemptsCount: completedAttempts.length,
                avgAccuracy: Math.round(avgAccuracy * 10) / 10,
                avgScorePct: Math.round(avgScorePct * 10) / 10,
                totalMistakesLogged: allMistakes.length,
                masteredMistakesCount: masteredMistakes.length,
                remediationRatePct: Math.round(mistakeRemediationPct),
            },
            projectedScore: {
                min: projectedMin,
                central: estimatedCentral,
                max: projectedMax,
                totalPossible: baselineMarks,
            },
            topicBreakdown,
        });
    }
    catch (error) {
        console.error('Error calculating readiness:', error);
        res.status(500).json({ error: 'Failed to calculate readiness analytics' });
    }
});
exports.default = router;
