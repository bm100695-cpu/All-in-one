"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../prisma");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Get student's mistake journal entries
router.get('/', auth_1.authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        const { status, tag, examId } = req.query;
        const whereClause = { userId };
        if (status) {
            whereClause.revisionStatus = String(status);
        }
        if (tag) {
            whereClause.mistakeTag = String(tag);
        }
        if (examId) {
            whereClause.question = { examId: String(examId) };
        }
        const mistakes = await prisma_1.prisma.mistakeJournalEntry.findMany({
            where: whereClause,
            include: {
                question: {
                    include: {
                        exam: {
                            select: { shortName: true, title: true, slug: true },
                        },
                        syllabusNode: {
                            select: { title: true, code: true, level: true },
                        },
                    },
                },
                attempt: {
                    select: {
                        id: true,
                        submittedAt: true,
                        totalScore: true,
                    },
                },
            },
            orderBy: { updatedAt: 'desc' },
        });
        // Parse options & answers for the journal card
        const formattedMistakes = mistakes.map((m) => {
            let options = [];
            try {
                options = JSON.parse(m.question.optionsJson);
            }
            catch (e) {
                options = [];
            }
            let correctAnswers = [];
            try {
                correctAnswers = JSON.parse(m.question.correctAnswerJson);
            }
            catch (e) {
                correctAnswers = [];
            }
            return {
                id: m.id,
                mistakeTag: m.mistakeTag,
                userNotes: m.userNotes,
                revisionStatus: m.revisionStatus,
                reviewCount: m.reviewCount,
                lastReviewedAt: m.lastReviewedAt,
                nextReviewDue: m.nextReviewDue,
                createdAt: m.createdAt,
                question: {
                    id: m.question.id,
                    contentEn: m.question.contentEn,
                    contentHi: m.question.contentHi,
                    options,
                    correctAnswers,
                    numericalAnswer: m.question.numericalAnswer,
                    explanationEn: m.question.explanationEn,
                    explanationHi: m.question.explanationHi,
                    difficulty: m.question.difficulty,
                    isPYQ: m.question.isPYQ,
                    pyqYear: m.question.pyqYear,
                    pyqShift: m.question.pyqShift,
                    sourceProvenance: m.question.sourceProvenance,
                    exam: m.question.exam,
                    syllabusNode: m.question.syllabusNode,
                },
                attempt: m.attempt,
            };
        });
        // Summary statistics for dashboard
        const tagCounts = {};
        const statusCounts = {
            NEEDS_ATTENTION: 0,
            REVISING: 0,
            MASTERED: 0,
        };
        mistakes.forEach((m) => {
            tagCounts[m.mistakeTag] = (tagCounts[m.mistakeTag] || 0) + 1;
            if (statusCounts[m.revisionStatus] !== undefined) {
                statusCounts[m.revisionStatus]++;
            }
        });
        res.json({
            mistakes: formattedMistakes,
            summary: {
                totalMistakes: mistakes.length,
                statusCounts,
                tagCounts,
            },
        });
    }
    catch (error) {
        console.error('Error fetching mistake journal:', error);
        res.status(500).json({ error: 'Failed to fetch mistake journal' });
    }
});
// Update mistake note or status
router.patch('/:id', auth_1.authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const { mistakeTag, userNotes, revisionStatus } = req.body;
        const userId = req.user.id;
        const entry = await prisma_1.prisma.mistakeJournalEntry.findFirst({
            where: { id, userId },
        });
        if (!entry) {
            res.status(404).json({ error: 'Mistake entry not found' });
            return;
        }
        const updated = await prisma_1.prisma.mistakeJournalEntry.update({
            where: { id },
            data: {
                mistakeTag: mistakeTag !== undefined ? mistakeTag : entry.mistakeTag,
                userNotes: userNotes !== undefined ? userNotes : entry.userNotes,
                revisionStatus: revisionStatus !== undefined ? revisionStatus : entry.revisionStatus,
                lastReviewedAt: new Date(),
                reviewCount: revisionStatus === 'MASTERED' ? entry.reviewCount + 1 : entry.reviewCount,
            },
        });
        res.json({ success: true, entry: updated });
    }
    catch (error) {
        console.error('Error updating mistake entry:', error);
        res.status(500).json({ error: 'Failed to update mistake entry' });
    }
});
// Re-attempt a mistake question
router.post('/:id/re-attempt', auth_1.authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const { selectedOptionIds, numericalValue } = req.body;
        const userId = req.user.id;
        const entry = await prisma_1.prisma.mistakeJournalEntry.findFirst({
            where: { id, userId },
            include: { question: true },
        });
        if (!entry) {
            res.status(404).json({ error: 'Mistake entry not found' });
            return;
        }
        const q = entry.question;
        let correctAnswers = [];
        try {
            correctAnswers = JSON.parse(q.correctAnswerJson);
        }
        catch (e) {
            correctAnswers = [];
        }
        let isCorrect = false;
        if (q.questionType === 'SINGLE_CHOICE' || q.questionType === 'MULTI_CHOICE') {
            const sortedSelected = [...(selectedOptionIds || [])].sort();
            const sortedCorrect = [...correctAnswers].sort();
            isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
        }
        else if (q.questionType === 'NUMERICAL') {
            if (numericalValue !== undefined && q.numericalAnswer !== null) {
                isCorrect = Math.abs(numericalValue - q.numericalAnswer) < 0.01;
            }
        }
        // Auto promote revision status on successful re-attempt
        let newStatus = entry.revisionStatus;
        if (isCorrect) {
            newStatus = entry.revisionStatus === 'NEEDS_ATTENTION' ? 'REVISING' : 'MASTERED';
        }
        const updated = await prisma_1.prisma.mistakeJournalEntry.update({
            where: { id },
            data: {
                revisionStatus: newStatus,
                reviewCount: entry.reviewCount + 1,
                lastReviewedAt: new Date(),
            },
        });
        res.json({
            isCorrect,
            explanationEn: q.explanationEn,
            explanationHi: q.explanationHi,
            entry: updated,
        });
    }
    catch (error) {
        console.error('Error in re-attempt:', error);
        res.status(500).json({ error: 'Re-attempt failed' });
    }
});
exports.default = router;
