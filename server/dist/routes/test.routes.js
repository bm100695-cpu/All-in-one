"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../prisma");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// List tests for an exam
router.get('/exam/:examId', async (req, res) => {
    try {
        const { examId } = req.params;
        const tests = await prisma_1.prisma.test.findMany({
            where: {
                examId,
                isPublished: true,
            },
            include: {
                patternVersion: {
                    include: {
                        sections: true,
                    },
                },
                _count: {
                    select: { testQuestions: true, attempts: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        res.json({ tests });
    }
    catch (error) {
        console.error('Error fetching tests:', error);
        res.status(500).json({ error: 'Failed to fetch tests' });
    }
});
// Get test info & instructions preview without starting attempt
router.get('/:testId/info', async (req, res) => {
    try {
        const { testId } = req.params;
        const test = await prisma_1.prisma.test.findUnique({
            where: { id: testId },
            include: {
                exam: true,
                patternVersion: {
                    include: {
                        sections: {
                            orderBy: { order: 'asc' },
                        },
                    },
                },
                _count: {
                    select: { testQuestions: true },
                },
            },
        });
        if (!test) {
            res.status(404).json({ error: 'Test not found' });
            return;
        }
        res.json({
            test: {
                id: test.id,
                title: test.title,
                durationMinutes: test.durationMinutes,
                totalMarks: test.totalMarks,
                totalQuestions: test.totalQuestions,
                instructionsEn: test.instructionsEn,
                instructionsHi: test.instructionsHi,
                accessLevel: test.accessLevel,
                type: test.type,
                pyqReference: test.pyqReference,
                exam: {
                    id: test.exam.id,
                    title: test.exam.title,
                    shortName: test.exam.shortName,
                    conductingBody: test.exam.conductingBody,
                },
                patternVersion: test.patternVersion,
            },
            actualQuestionsCount: test._count.testQuestions,
        });
    }
    catch (error) {
        console.error('Error fetching test info:', error);
        res.status(500).json({ error: 'Failed to fetch test info' });
    }
});
// Start or resume test session (student must be authenticated)
router.post('/:testId/start', auth_1.authenticate, async (req, res) => {
    try {
        const { testId } = req.params;
        const userId = req.user.id;
        const test = await prisma_1.prisma.test.findUnique({
            where: { id: testId },
            include: {
                exam: true,
                patternVersion: {
                    include: {
                        sections: {
                            orderBy: { order: 'asc' },
                        },
                    },
                },
                testQuestions: {
                    include: {
                        question: {
                            select: {
                                id: true,
                                questionType: true,
                                contentEn: true,
                                contentHi: true,
                                optionsJson: true,
                                difficulty: true,
                                isPYQ: true,
                                pyqYear: true,
                                pyqShift: true,
                                sourceProvenance: true,
                                isAIGenerated: true,
                            },
                        },
                    },
                    orderBy: { questionNumber: 'asc' },
                },
            },
        });
        if (!test) {
            res.status(404).json({ error: 'Test not found' });
            return;
        }
        // Entitlement Check for PREMIUM tests (Phase 4: Backend-Controlled Access)
        if (test.accessLevel === 'PREMIUM' && req.user.role !== 'ADMIN' && req.user.role !== 'CONTENT_REVIEWER') {
            // 1. Check for active subscription
            const activeSub = await prisma_1.prisma.subscription.findFirst({
                where: {
                    userId,
                    status: 'ACTIVE',
                    OR: [{ endDate: null }, { endDate: { gt: new Date() } }],
                },
                include: { plan: true },
                orderBy: { createdAt: 'desc' },
            });
            // 2. Check for explicit entitlement (individual unlock, referral credit, or global)
            const entitlement = await prisma_1.prisma.entitlement.findFirst({
                where: {
                    userId,
                    isActive: true,
                    OR: [{ testId: null }, { testId: test.id }],
                    OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
                },
            });
            const isSubUnlimited = activeSub?.plan?.code === 'PREMIUM_MONTHLY_149';
            const hasSpecificEntitlement = Boolean(entitlement);
            if (!isSubUnlimited && !hasSpecificEntitlement) {
                // Check if student has a Test Pack with remaining tests
                if (activeSub && activeSub.plan.code === 'TEST_PACK_99' && (activeSub.testsRemaining ?? 0) > 0) {
                    // Consume 1 test and grant entitlement
                    await prisma_1.prisma.$transaction([
                        prisma_1.prisma.subscription.update({
                            where: { id: activeSub.id },
                            data: { testsRemaining: activeSub.testsRemaining - 1 },
                        }),
                        prisma_1.prisma.entitlement.create({
                            data: {
                                userId,
                                testId: test.id,
                                planCode: 'TEST_PACK_99',
                                source: 'TEST_PACK',
                                expiresAt: activeSub.endDate,
                            },
                        }),
                    ]);
                }
                else {
                    res.status(403).json({
                        error: 'PREMIUM_LOCKED',
                        message: `"${test.title}" is a Premium Mock Test. Unlock it with the ₹99 Test Pack, ₹149 Premium Monthly subscription, or by redeeming a referral credit.`,
                        testTitle: test.title,
                        testId: test.id,
                        accessLevel: test.accessLevel,
                    });
                    return;
                }
            }
        }
        // Check for an existing in-progress attempt
        let attempt = await prisma_1.prisma.testAttempt.findFirst({
            where: {
                testId,
                userId,
                status: 'IN_PROGRESS',
            },
            orderBy: { startedAt: 'desc' },
        });
        if (!attempt) {
            // Create new attempt
            attempt = await prisma_1.prisma.testAttempt.create({
                data: {
                    userId,
                    testId,
                    examId: test.examId,
                    startedAt: new Date(),
                    status: 'IN_PROGRESS',
                    totalMarks: test.totalMarks,
                    responsesJson: JSON.stringify([]),
                },
            });
        }
        // Parse options for student client (DO NOT leak correct answers!)
        const formattedQuestions = test.testQuestions.map((tq) => {
            let options = [];
            try {
                options = JSON.parse(tq.question.optionsJson);
            }
            catch (e) {
                options = [];
            }
            return {
                testQuestionId: tq.id,
                questionId: tq.questionId,
                questionNumber: tq.questionNumber,
                sectionName: tq.sectionName,
                marks: tq.marks,
                negativeMarks: tq.negativeMarks,
                questionType: tq.question.questionType,
                contentEn: tq.question.contentEn,
                contentHi: tq.question.contentHi,
                options,
                difficulty: tq.question.difficulty,
                isPYQ: tq.question.isPYQ,
                pyqYear: tq.question.pyqYear,
                pyqShift: tq.question.pyqShift,
                sourceProvenance: tq.question.sourceProvenance,
                isAIGenerated: tq.question.isAIGenerated,
            };
        });
        let existingResponses = [];
        try {
            existingResponses = JSON.parse(attempt.responsesJson || '[]');
        }
        catch (e) {
            existingResponses = [];
        }
        res.json({
            attemptId: attempt.id,
            startedAt: attempt.startedAt,
            timeSpentSeconds: attempt.timeSpentSeconds,
            test: {
                id: test.id,
                title: test.title,
                durationMinutes: test.durationMinutes,
                totalMarks: test.totalMarks,
                totalQuestions: test.totalQuestions,
                instructionsEn: test.instructionsEn,
                instructionsHi: test.instructionsHi,
                accessLevel: test.accessLevel,
                exam: {
                    id: test.exam.id,
                    title: test.exam.title,
                    shortName: test.exam.shortName,
                },
                patternVersion: test.patternVersion,
            },
            questions: formattedQuestions,
            savedResponses: existingResponses,
        });
    }
    catch (error) {
        console.error('Error starting test:', error);
        res.status(500).json({ error: 'Failed to initialize test session' });
    }
});
// Autosave progress / heartbeat
router.post('/attempts/:attemptId/autosave', auth_1.authenticate, async (req, res) => {
    try {
        const { attemptId } = req.params;
        const { responses, timeSpentSeconds } = req.body;
        const userId = req.user.id;
        const attempt = await prisma_1.prisma.testAttempt.findFirst({
            where: { id: attemptId, userId, status: 'IN_PROGRESS' },
        });
        if (!attempt) {
            res.status(404).json({ error: 'Active test attempt not found' });
            return;
        }
        await prisma_1.prisma.testAttempt.update({
            where: { id: attemptId },
            data: {
                responsesJson: JSON.stringify(responses || []),
                timeSpentSeconds: Number(timeSpentSeconds) || attempt.timeSpentSeconds,
            },
        });
        res.json({ success: true, timestamp: new Date() });
    }
    catch (error) {
        console.error('Autosave error:', error);
        res.status(500).json({ error: 'Autosave failed' });
    }
});
// Submit test attempt & calculate accurate score according to exam pattern
router.post('/attempts/:attemptId/submit', auth_1.authenticate, async (req, res) => {
    try {
        const { attemptId } = req.params;
        const { responses = [], timeSpentSeconds = 0 } = req.body;
        const userId = req.user.id;
        const attempt = await prisma_1.prisma.testAttempt.findFirst({
            where: { id: attemptId, userId },
            include: {
                test: {
                    include: {
                        testQuestions: {
                            include: {
                                question: true,
                            },
                        },
                        patternVersion: {
                            include: {
                                sections: true,
                            },
                        },
                    },
                },
            },
        });
        if (!attempt) {
            res.status(404).json({ error: 'Attempt not found' });
            return;
        }
        if (attempt.status === 'COMPLETED') {
            res.json({ message: 'Attempt already submitted', attemptId });
            return;
        }
        const test = attempt.test;
        const pattern = test.patternVersion;
        // Map section rules by name
        const sectionRules = new Map();
        pattern.sections.forEach((sec) => {
            sectionRules.set(sec.name, sec);
        });
        let totalScore = 0.0;
        let totalCorrect = 0;
        let totalIncorrect = 0;
        let totalAttempted = 0;
        let totalUnattempted = 0;
        const sectionBreakdown = {};
        const processedResponses = [];
        const mistakeEntriesToCreate = [];
        // Evaluate each question in the test
        for (const tq of test.testQuestions) {
            const q = tq.question;
            const secName = tq.sectionName;
            const secRule = sectionRules.get(secName);
            const marksPerCorrect = secRule ? secRule.marksPerCorrect : tq.marks;
            const negativeMarks = secRule ? secRule.negativeMarks : tq.negativeMarks;
            const unattemptedPenalty = secRule ? secRule.unattemptedPenalty : 0;
            if (!sectionBreakdown[secName]) {
                sectionBreakdown[secName] = { score: 0, maxMarks: 0, correct: 0, wrong: 0, unattempted: 0 };
            }
            sectionBreakdown[secName].maxMarks += marksPerCorrect;
            const userResp = responses.find((r) => r.questionId === q.id);
            const selectedOptions = userResp?.selectedOptionIds || [];
            const numericalVal = userResp?.numericalValue;
            const timeSpent = userResp?.timeSpentSec || 0;
            const status = userResp?.status || 'NOT_ANSWERED';
            let isAttempted = false;
            let isCorrect = false;
            let marksAwarded = 0;
            // Parse correct answers
            let correctAnswers = [];
            try {
                correctAnswers = JSON.parse(q.correctAnswerJson);
            }
            catch (e) {
                correctAnswers = [];
            }
            if (q.questionType === 'SINGLE_CHOICE' || q.questionType === 'MULTI_CHOICE') {
                if (selectedOptions.length > 0) {
                    isAttempted = true;
                    // Check if arrays match
                    const sortedSelected = [...selectedOptions].sort();
                    const sortedCorrect = [...correctAnswers].sort();
                    isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
                }
            }
            else if (q.questionType === 'NUMERICAL') {
                if (numericalVal !== undefined && numericalVal !== null) {
                    isAttempted = true;
                    if (q.numericalAnswer !== null) {
                        isCorrect = Math.abs(numericalVal - q.numericalAnswer) < 0.01;
                    }
                }
            }
            if (isAttempted) {
                totalAttempted++;
                if (isCorrect) {
                    totalCorrect++;
                    marksAwarded = marksPerCorrect;
                    sectionBreakdown[secName].correct++;
                }
                else {
                    totalIncorrect++;
                    marksAwarded = -negativeMarks;
                    sectionBreakdown[secName].wrong++;
                    // Auto-queue mistake into persistent Mistake Journal
                    mistakeEntriesToCreate.push({
                        userId,
                        questionId: q.id,
                        testAttemptId: attempt.id,
                        mistakeTag: 'CONCEPTUAL_GAP', // Default pending student self-reflection
                        revisionStatus: 'NEEDS_ATTENTION',
                        reviewCount: 0,
                        nextReviewDue: new Date(Date.now() + 86400 * 1000 * 1), // 24hr spaced repetition
                    });
                }
            }
            else {
                totalUnattempted++;
                marksAwarded = -unattemptedPenalty;
                sectionBreakdown[secName].unattempted++;
            }
            totalScore += marksAwarded;
            sectionBreakdown[secName].score += marksAwarded;
            processedResponses.push({
                questionId: q.id,
                testQuestionId: tq.id,
                sectionName: secName,
                selectedOptionIds: selectedOptions,
                numericalValue: numericalVal,
                isAttempted,
                isCorrect,
                marksAwarded,
                timeSpentSec: timeSpent,
                status: isAttempted ? 'ANSWERED' : status,
            });
        }
        const accuracyPct = totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0.0;
        // Percentile only when valid comparison sample exists (>= 5 attempts)
        const existingAttempts = await prisma_1.prisma.testAttempt.findMany({
            where: {
                testId: test.id,
                status: 'COMPLETED',
            },
            select: { totalScore: true },
        });
        let percentile = null;
        if (existingAttempts.length >= 3) {
            const lowerScores = existingAttempts.filter((a) => a.totalScore < totalScore).length;
            percentile = Math.round(((lowerScores + 1) / (existingAttempts.length + 1)) * 1000) / 10;
        }
        // Save attempt record
        const updatedAttempt = await prisma_1.prisma.testAttempt.update({
            where: { id: attempt.id },
            data: {
                status: 'COMPLETED',
                submittedAt: new Date(),
                totalScore: Math.round(totalScore * 100) / 100,
                totalAttempted,
                totalCorrect,
                totalIncorrect,
                totalUnattempted,
                accuracyPct: Math.round(accuracyPct * 10) / 10,
                percentile,
                timeSpentSeconds,
                sectionScoresJson: JSON.stringify(sectionBreakdown),
                responsesJson: JSON.stringify(processedResponses),
            },
        });
        // Bulk create mistake entries if any
        for (const entry of mistakeEntriesToCreate) {
            await prisma_1.prisma.mistakeJournalEntry.upsert({
                where: {
                    id: `${entry.userId}_${entry.questionId}`,
                },
                create: entry,
                update: {
                    testAttemptId: entry.testAttemptId,
                    revisionStatus: 'NEEDS_ATTENTION',
                    updatedAt: new Date(),
                },
            });
        }
        res.json({
            success: true,
            attemptId: updatedAttempt.id,
            score: updatedAttempt.totalScore,
            totalMarks: updatedAttempt.totalMarks,
            accuracyPct: updatedAttempt.accuracyPct,
            percentile: updatedAttempt.percentile,
            totalCorrect,
            totalIncorrect,
            totalUnattempted,
            sectionBreakdown,
        });
    }
    catch (error) {
        console.error('Error submitting test:', error);
        res.status(500).json({ error: 'Failed to evaluate test submission' });
    }
});
// Review submitted test with full answers, step-by-step bilingual explanations, and provenance
router.get('/attempts/:attemptId/review', auth_1.authenticate, async (req, res) => {
    try {
        const { attemptId } = req.params;
        const userId = req.user.id;
        const attempt = await prisma_1.prisma.testAttempt.findUnique({
            where: { id: attemptId },
            include: {
                test: {
                    include: {
                        exam: true,
                        patternVersion: true,
                        testQuestions: {
                            include: {
                                question: {
                                    include: {
                                        syllabusNode: true,
                                    },
                                },
                            },
                            orderBy: { questionNumber: 'asc' },
                        },
                    },
                },
            },
        });
        if (!attempt) {
            res.status(404).json({ error: 'Attempt not found' });
            return;
        }
        // Role check: users can review their own attempts, admins/reviewers can review any
        if (attempt.userId !== userId && !['ADMIN', 'CONTENT_REVIEWER'].includes(req.user.role)) {
            res.status(403).json({ error: 'Access denied' });
            return;
        }
        let responses = [];
        try {
            responses = JSON.parse(attempt.responsesJson || '[]');
        }
        catch (e) {
            responses = [];
        }
        let sectionScores = {};
        try {
            sectionScores = JSON.parse(attempt.sectionScoresJson || '{}');
        }
        catch (e) {
            sectionScores = {};
        }
        // Combine questions with student responses
        const reviewQuestions = attempt.test.testQuestions.map((tq) => {
            const q = tq.question;
            const resp = responses.find((r) => r.questionId === q.id);
            let options = [];
            try {
                options = JSON.parse(q.optionsJson);
            }
            catch (e) {
                options = [];
            }
            let correctAnswers = [];
            try {
                correctAnswers = JSON.parse(q.correctAnswerJson);
            }
            catch (e) {
                correctAnswers = [];
            }
            return {
                questionId: q.id,
                questionNumber: tq.questionNumber,
                sectionName: tq.sectionName,
                marks: tq.marks,
                negativeMarks: tq.negativeMarks,
                questionType: q.questionType,
                contentEn: q.contentEn,
                contentHi: q.contentHi,
                options,
                correctAnswers,
                numericalAnswer: q.numericalAnswer,
                explanationEn: q.explanationEn,
                explanationHi: q.explanationHi,
                difficulty: q.difficulty,
                isPYQ: q.isPYQ,
                pyqYear: q.pyqYear,
                pyqShift: q.pyqShift,
                sourceProvenance: q.sourceProvenance,
                sourceLicense: q.sourceLicense,
                verificationStatus: q.verificationStatus,
                reviewerName: q.reviewerName,
                isAIGenerated: q.isAIGenerated,
                syllabusNode: q.syllabusNode,
                studentResponse: resp || {
                    selectedOptionIds: [],
                    numericalValue: null,
                    isCorrect: false,
                    marksAwarded: 0,
                    status: 'NOT_ANSWERED',
                },
            };
        });
        res.json({
            attempt: {
                id: attempt.id,
                startedAt: attempt.startedAt,
                submittedAt: attempt.submittedAt,
                totalScore: attempt.totalScore,
                totalMarks: attempt.totalMarks,
                accuracyPct: attempt.accuracyPct,
                percentile: attempt.percentile,
                totalAttempted: attempt.totalAttempted,
                totalCorrect: attempt.totalCorrect,
                totalIncorrect: attempt.totalIncorrect,
                totalUnattempted: attempt.totalUnattempted,
                timeSpentSeconds: attempt.timeSpentSeconds,
                sectionScores,
            },
            test: {
                id: attempt.test.id,
                title: attempt.test.title,
                exam: attempt.test.exam,
                pyqReference: attempt.test.pyqReference,
            },
            questions: reviewQuestions,
        });
    }
    catch (error) {
        console.error('Error fetching review:', error);
        res.status(500).json({ error: 'Failed to fetch test review' });
    }
});
// Get user's completed attempt history
router.get('/history/my-attempts', auth_1.authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        const attempts = await prisma_1.prisma.testAttempt.findMany({
            where: {
                userId,
                status: 'COMPLETED',
            },
            include: {
                test: {
                    select: {
                        title: true,
                        totalMarks: true,
                        durationMinutes: true,
                        exam: {
                            select: {
                                shortName: true,
                                slug: true,
                            },
                        },
                    },
                },
            },
            orderBy: { submittedAt: 'desc' },
        });
        res.json({ attempts });
    }
    catch (error) {
        console.error('Error fetching attempts history:', error);
        res.status(500).json({ error: 'Failed to fetch history' });
    }
});
exports.default = router;
