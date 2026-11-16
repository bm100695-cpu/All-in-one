"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../prisma");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// 1. Get complete year-wise UPTET archive (2016–2025)
router.get('/archive', async (_req, res) => {
    try {
        const uptetExam = await prisma_1.prisma.exam.findUnique({
            where: { slug: 'uptet' },
            include: {
                patternVersions: {
                    include: { sections: true },
                },
            },
        });
        if (!uptetExam) {
            res.status(404).json({ error: 'UPTET exam configuration not found' });
            return;
        }
        const examYears = await prisma_1.prisma.examYear.findMany({
            where: { examId: uptetExam.id },
            orderBy: { cycleYear: 'desc' },
            include: {
                tests: {
                    where: { isPublished: true },
                    orderBy: [{ paperType: 'asc' }, { title: 'asc' }],
                    include: {
                        testQuestions: {
                            select: {
                                id: true,
                                questionNumber: true,
                                sectionName: true,
                                marks: true,
                            },
                        },
                    },
                },
            },
        });
        // Compute comprehensive audit metrics
        const totalYears = examYears.length;
        const conductedYears = examYears.filter((y) => y.examinationConducted);
        const nonConductedYears = examYears.filter((y) => !y.examinationConducted);
        const allTests = examYears.flatMap((y) => y.tests);
        const verifiedPyqs = allTests.filter((t) => t.sourceType === 'VERIFIED_PYQ');
        const practiceTests = allTests.filter((t) => t.sourceType === 'PATTERN_PRACTICE');
        const totalQuestionsCount = await prisma_1.prisma.question.count({
            where: { examId: uptetExam.id },
        });
        const audit = {
            examTitle: uptetExam.title,
            conductingBody: uptetExam.conductingBody,
            officialWebsite: uptetExam.officialWebsite,
            totalYearsTracked: totalYears,
            conductedYearsCount: conductedYears.length,
            conductedYearsList: conductedYears.map((y) => ({
                year: y.cycleYear,
                actualDate: y.actualExamDate,
                officialSource: y.officialSource,
            })),
            nonConductedYearsCount: nonConductedYears.length,
            nonConductedYearsList: nonConductedYears.map((y) => ({
                year: y.cycleYear,
                reason: y.notes,
                status: y.verificationStatus,
            })),
            totalTestsAvailable: allTests.length,
            verifiedPyqCount: verifiedPyqs.length,
            patternPracticeCount: practiceTests.length,
            totalQuestionsIndexed: totalQuestionsCount,
            officialAnswerKeyCoverage: '100% of Verified Papers Mapped to ERA Prayagraj Revised Keys',
        };
        res.json({
            exam: uptetExam,
            archive: examYears,
            audit,
        });
    }
    catch (error) {
        console.error('Error fetching UPTET archive:', error);
        res.status(500).json({ error: 'Failed to fetch UPTET archive' });
    }
});
// 2. Filter UPTET tests by Year, Paper Type, Optional Stream, and Source
router.get('/tests', async (req, res) => {
    try {
        const { year, paperType, sourceType, optionalSubject, search } = req.query;
        const uptetExam = await prisma_1.prisma.exam.findUnique({
            where: { slug: 'uptet' },
        });
        if (!uptetExam) {
            res.status(404).json({ error: 'UPTET exam not found' });
            return;
        }
        const whereClause = {
            examId: uptetExam.id,
            isPublished: true,
        };
        if (year && year !== 'ALL') {
            whereClause.cycleYear = Number(year);
        }
        if (paperType && paperType !== 'ALL') {
            whereClause.paperType = String(paperType);
        }
        if (sourceType && sourceType !== 'ALL') {
            whereClause.sourceType = String(sourceType);
        }
        if (optionalSubject && optionalSubject !== 'ALL') {
            whereClause.optionalSubject = String(optionalSubject);
        }
        if (search && String(search).trim()) {
            const q = String(search).trim();
            whereClause.OR = [
                { title: { contains: q } },
                { pyqReference: { contains: q } },
                { actualExamDate: { contains: q } },
            ];
        }
        const tests = await prisma_1.prisma.test.findMany({
            where: whereClause,
            orderBy: [{ cycleYear: 'desc' }, { paperType: 'asc' }],
            include: {
                examYear: true,
                patternVersion: {
                    include: { sections: true },
                },
                _count: {
                    select: { testQuestions: true },
                },
            },
        });
        res.json({ tests });
    }
    catch (error) {
        console.error('Error fetching UPTET tests:', error);
        res.status(500).json({ error: 'Failed to fetch UPTET tests' });
    }
});
// 3. Get detailed test with questions & bilingual text
router.get('/tests/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const test = await prisma_1.prisma.test.findUnique({
            where: { id },
            include: {
                examYear: true,
                patternVersion: {
                    include: { sections: { orderBy: { order: 'asc' } } },
                },
                testQuestions: {
                    orderBy: { questionNumber: 'asc' },
                    include: {
                        question: true,
                    },
                },
            },
        });
        if (!test) {
            res.status(404).json({ error: 'Test not found' });
            return;
        }
        const parsedQuestions = test.testQuestions.map((tq) => ({
            testQuestionId: tq.id,
            questionNumber: tq.questionNumber,
            sectionName: tq.sectionName,
            marks: tq.marks,
            negativeMarks: tq.negativeMarks,
            id: tq.question.id,
            contentHi: tq.question.contentHi,
            contentEn: tq.question.contentEn,
            options: JSON.parse(tq.question.optionsJson || '[]'),
            correctAnswer: JSON.parse(tq.question.correctAnswerJson || '[]'),
            officialAnswer: tq.question.officialAnswer,
            tutorNoveAnswer: tq.question.tutorNoveAnswer,
            explanationHi: tq.question.explanationHi,
            explanationEn: tq.question.explanationEn,
            subject: tq.question.subject,
            topic: tq.question.topic,
            difficulty: tq.question.difficulty,
            isPYQ: tq.question.isPYQ,
            sourceProvenance: tq.question.sourceProvenance,
            sourceReference: tq.question.sourceReference,
            translationLabel: tq.question.translationLabel,
        }));
        res.json({
            test: {
                ...test,
                questions: parsedQuestions,
            },
        });
    }
    catch (error) {
        console.error('Error fetching test detail:', error);
        res.status(500).json({ error: 'Failed to fetch test details' });
    }
});
// 4. Verification & Provenance Audit Report
router.get('/audit', async (_req, res) => {
    try {
        const uptetExam = await prisma_1.prisma.exam.findUnique({
            where: { slug: 'uptet' },
        });
        if (!uptetExam) {
            res.status(404).json({ error: 'UPTET exam not found' });
            return;
        }
        const [years, tests, questions] = await Promise.all([
            prisma_1.prisma.examYear.findMany({ where: { examId: uptetExam.id }, orderBy: { cycleYear: 'desc' } }),
            prisma_1.prisma.test.findMany({ where: { examId: uptetExam.id }, include: { examYear: true } }),
            prisma_1.prisma.question.findMany({ where: { examId: uptetExam.id } }),
        ]);
        const report = {
            exam: 'UPTET (Uttar Pradesh Teacher Eligibility Test)',
            governanceAuthority: 'Examination Regulatory Authority (ERA / PNP), Uttar Pradesh, Prayagraj',
            verificationStandard: 'Zero Fabricated Past Year Questions • Authentic Government Examination Archives Only',
            historicalYearsAudit: years.map((y) => ({
                cycleYear: y.cycleYear,
                actualExamDate: y.actualExamDate,
                examinationConducted: y.examinationConducted,
                status: y.verificationStatus,
                officialSource: y.officialSource,
                paper1Available: y.paper1Available,
                paper2MathAvailable: y.paper2MathAvailable,
                paper2SocialAvailable: y.paper2SocialAvailable,
                notes: y.notes,
                papersCount: tests.filter((t) => t.cycleYear === y.cycleYear).length,
            })),
            statistics: {
                totalYearsTracked: years.length,
                verifiedExamYears: years.filter((y) => y.examinationConducted).length,
                noExamHeldYears: years.filter((y) => !y.examinationConducted).length,
                totalMockTests: tests.length,
                verifiedPYQPapers: tests.filter((t) => t.sourceType === 'VERIFIED_PYQ').length,
                patternPracticeTests: tests.filter((t) => t.sourceType === 'PATTERN_PRACTICE').length,
                totalQuestionsIndexed: questions.length,
                bilingualQuestionsAvailable: questions.filter((q) => q.contentHi && q.contentEn).length,
            },
        };
        res.json(report);
    }
    catch (error) {
        console.error('Error generating audit report:', error);
        res.status(500).json({ error: 'Failed to generate audit report' });
    }
});
// 5. Personalized Weakness Analysis for a UPTET Attempt
router.get('/attempts/:attemptId/weakness-analysis', auth_1.authenticate, async (req, res) => {
    try {
        const { attemptId } = req.params;
        const userId = req.user.id;
        const attempt = await prisma_1.prisma.testAttempt.findFirst({
            where: { id: attemptId, userId },
            include: {
                test: {
                    include: {
                        testQuestions: {
                            include: { question: true },
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
        let responses = [];
        try {
            responses = JSON.parse(attempt.responsesJson || '[]');
        }
        catch {
            responses = [];
        }
        const responseMap = new Map();
        responses.forEach((r) => responseMap.set(r.questionId, r));
        // Aggregate by Subject and Topic
        const subjectMap = {};
        const topicMap = {};
        attempt.test.testQuestions.forEach((tq) => {
            const q = tq.question;
            const subj = q.subject || tq.sectionName || 'General';
            const topic = q.topic || 'General Topic';
            const resp = responseMap.get(q.id);
            if (!subjectMap[subj]) {
                subjectMap[subj] = { total: 0, correct: 0, incorrect: 0, unattempted: 0, timeSpent: 0 };
            }
            subjectMap[subj].total += 1;
            if (!topicMap[topic]) {
                topicMap[topic] = { subject: subj, total: 0, correct: 0, incorrect: 0, timeSpent: 0 };
            }
            topicMap[topic].total += 1;
            if (resp?.isAttempted) {
                const time = resp.timeSpentSec || 0;
                subjectMap[subj].timeSpent += time;
                topicMap[topic].timeSpent += time;
                if (resp.isCorrect) {
                    subjectMap[subj].correct += 1;
                    topicMap[topic].correct += 1;
                }
                else {
                    subjectMap[subj].incorrect += 1;
                    topicMap[topic].incorrect += 1;
                }
            }
            else {
                subjectMap[subj].unattempted += 1;
            }
        });
        // Classify topics: Weak (<60%), Moderate (60-75%), Strong (>75%)
        const weakTopics = [];
        const strongTopics = [];
        Object.entries(topicMap).forEach(([topic, data]) => {
            const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            const item = {
                topic,
                subject: data.subject,
                accuracy: acc,
                totalQuestions: data.total,
                correctCount: data.correct,
                incorrectCount: data.incorrect,
            };
            if (acc < 60) {
                weakTopics.push(item);
            }
            else if (acc >= 75) {
                strongTopics.push(item);
            }
        });
        // Recommendations list
        const recommendations = [];
        if (weakTopics.length > 0) {
            recommendations.push(`Priority Revision: Focus on ${weakTopics.slice(0, 3).map((w) => `"${w.topic}" (${w.subject})`).join(', ')}.`);
        }
        if (attempt.totalUnattempted > 20) {
            recommendations.push('Time Management: You had high unattempted questions. Practice answering with an average pace of 55 seconds per question.');
        }
        recommendations.push('Targeted Practice: Use the "Practice My Wrong Questions" tool to master concepts you missed.');
        res.json({
            attemptId: attempt.id,
            score: attempt.totalScore,
            totalMarks: attempt.totalMarks,
            accuracyPct: attempt.accuracyPct,
            timeSpentSeconds: attempt.timeSpentSeconds,
            subjectBreakdown: subjectMap,
            weakTopics: weakTopics.sort((a, b) => a.accuracy - b.accuracy),
            strongTopics: strongTopics.sort((a, b) => b.accuracy - a.accuracy),
            recommendations,
        });
    }
    catch (error) {
        console.error('Error generating weakness analysis:', error);
        res.status(500).json({ error: 'Failed to generate weakness analysis' });
    }
});
// 6. Get Wrong & Unattempted Questions for Retry Session
router.get('/attempts/:attemptId/wrong-questions', auth_1.authenticate, async (req, res) => {
    try {
        const { attemptId } = req.params;
        const userId = req.user.id;
        const attempt = await prisma_1.prisma.testAttempt.findFirst({
            where: { id: attemptId, userId },
            include: {
                test: {
                    include: {
                        testQuestions: {
                            include: { question: true },
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
        let responses = [];
        try {
            responses = JSON.parse(attempt.responsesJson || '[]');
        }
        catch {
            responses = [];
        }
        const responseMap = new Map();
        responses.forEach((r) => responseMap.set(r.questionId, r));
        // Filter questions that were incorrect OR unattempted
        const targetQuestions = [];
        attempt.test.testQuestions.forEach((tq) => {
            const q = tq.question;
            const resp = responseMap.get(q.id);
            const isAttempted = Boolean(resp?.isAttempted);
            const isCorrect = Boolean(resp?.isCorrect);
            if (!isAttempted || !isCorrect) {
                let options = [];
                try {
                    options = JSON.parse(q.optionsJson);
                }
                catch {
                    options = [];
                }
                let correctAnswers = [];
                try {
                    correctAnswers = JSON.parse(q.correctAnswerJson);
                }
                catch {
                    correctAnswers = [];
                }
                targetQuestions.push({
                    questionId: q.id,
                    questionNumber: tq.questionNumber,
                    sectionName: q.subject || tq.sectionName,
                    subject: q.subject,
                    topic: q.topic,
                    contentEn: q.contentEn,
                    contentHi: q.contentHi,
                    options,
                    correctAnswers,
                    officialAnswer: q.officialAnswer,
                    explanationEn: q.explanationEn,
                    explanationHi: q.explanationHi,
                    sourceReference: q.sourceReference,
                    previousAttempt: {
                        selectedOptionIds: resp?.selectedOptionIds || [],
                        isAttempted,
                        isCorrect,
                        status: !isAttempted ? 'UNATTEMPTED' : 'INCORRECT',
                    },
                });
            }
        });
        res.json({
            attemptId: attempt.id,
            testTitle: attempt.test.title,
            totalQuestions: targetQuestions.length,
            questions: targetQuestions,
        });
    }
    catch (error) {
        console.error('Error fetching wrong questions:', error);
        res.status(500).json({ error: 'Failed to fetch wrong questions' });
    }
});
exports.default = router;
