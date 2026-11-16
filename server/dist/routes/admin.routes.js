"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../prisma");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Get questions pending review (Reviewers and Admins)
router.get('/review-queue', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN', 'CONTENT_REVIEWER']), async (_req, res) => {
    try {
        const pendingQuestions = await prisma_1.prisma.question.findMany({
            where: {
                verificationStatus: {
                    in: ['UNDER_REVIEW', 'DRAFT'],
                },
            },
            include: {
                exam: {
                    select: { title: true, shortName: true },
                },
                syllabusNode: {
                    select: { title: true, code: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        const formatted = pendingQuestions.map((q) => {
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
                ...q,
                options,
                correctAnswers,
            };
        });
        res.json({ questions: formatted });
    }
    catch (error) {
        console.error('Error fetching review queue:', error);
        res.status(500).json({ error: 'Failed to fetch review queue' });
    }
});
// Approve or reject a question with audit trail
router.post('/review-question/:id', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN', 'CONTENT_REVIEWER']), async (req, res) => {
    try {
        const id = req.params.id;
        const { action, comments = '', reviewerName } = req.body;
        const reviewerId = req.user.id;
        if (!['APPROVED', 'REJECTED', 'CHANGES_REQUESTED'].includes(action)) {
            res.status(400).json({ error: 'Invalid review action. Allowed: APPROVED, REJECTED, CHANGES_REQUESTED' });
            return;
        }
        const newStatus = action === 'APPROVED' ? 'VERIFIED' : action === 'REJECTED' ? 'REJECTED' : 'UNDER_REVIEW';
        const question = await prisma_1.prisma.question.update({
            where: { id },
            data: {
                verificationStatus: newStatus,
                reviewerName: reviewerName || req.user.name,
                reviewedAt: new Date(),
                reviewerNotes: comments,
            },
        });
        // Create persistent review audit entry
        await prisma_1.prisma.questionReview.create({
            data: {
                questionId: id,
                reviewerId,
                action,
                comments,
                provenanceCheck: true,
                rubricVerified: true,
            },
        });
        res.json({
            success: true,
            message: `Question status updated to ${newStatus}`,
            question,
        });
    }
    catch (error) {
        console.error('Error submitting question review:', error);
        res.status(500).json({ error: 'Failed to update question review' });
    }
});
// Create or update exam pattern version (Never hardcode one exam's rules globally!)
router.post('/exams/:examId/pattern-version', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN']), async (req, res) => {
    try {
        const examId = req.params.examId;
        const { versionName, effectiveFrom, durationMinutes, totalMarks, totalQuestions, questionsToAttempt, sectionalTimers = false, questionShuffling = true, languagesAllowed = ['en', 'hi'], sections = [], } = req.body;
        // Set other versions to not default if this one is default
        await prisma_1.prisma.examPatternVersion.updateMany({
            where: { examId },
            data: { isDefault: false },
        });
        const newVersion = await prisma_1.prisma.examPatternVersion.create({
            data: {
                examId,
                versionName,
                effectiveFrom: new Date(effectiveFrom || Date.now()),
                durationMinutes: Number(durationMinutes),
                totalMarks: Number(totalMarks),
                totalQuestions: Number(totalQuestions),
                questionsToAttempt: Number(questionsToAttempt),
                sectionalTimers: Boolean(sectionalTimers),
                questionShuffling: Boolean(questionShuffling),
                languagesAllowed: JSON.stringify(languagesAllowed),
                isDefault: true,
                sections: {
                    create: sections.map((sec, index) => ({
                        name: sec.name,
                        order: index + 1,
                        totalQuestions: Number(sec.totalQuestions),
                        maxToAttempt: Number(sec.maxToAttempt),
                        questionType: sec.questionType || 'MCQ_SINGLE',
                        marksPerCorrect: Number(sec.marksPerCorrect || 4.0),
                        negativeMarks: Number(sec.negativeMarks || 1.0),
                        unattemptedPenalty: Number(sec.unattemptedPenalty || 0.0),
                    })),
                },
            },
            include: {
                sections: true,
            },
        });
        res.status(201).json({
            success: true,
            message: 'Exam pattern version successfully published',
            patternVersion: newVersion,
        });
    }
    catch (error) {
        console.error('Error creating pattern version:', error);
        res.status(500).json({ error: 'Failed to create exam pattern version' });
    }
});
// Coverage audit report
router.get('/coverage-audit', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN', 'CONTENT_REVIEWER']), async (_req, res) => {
    try {
        const audits = await prisma_1.prisma.contentCoverageAudit.findMany({
            orderBy: { auditTimestamp: 'desc' },
        });
        const totalQuestions = await prisma_1.prisma.question.count();
        const verifiedQuestions = await prisma_1.prisma.question.count({ where: { verificationStatus: 'VERIFIED' } });
        const pendingQuestions = await prisma_1.prisma.question.count({ where: { verificationStatus: 'UNDER_REVIEW' } });
        const aiGeneratedQuestions = await prisma_1.prisma.question.count({ where: { isAIGenerated: true } });
        res.json({
            metrics: {
                totalQuestions,
                verifiedQuestions,
                pendingQuestions,
                aiGeneratedQuestions,
                officialPYQs: totalQuestions - aiGeneratedQuestions,
            },
            audits,
        });
    }
    catch (error) {
        console.error('Error fetching coverage audit:', error);
        res.status(500).json({ error: 'Failed to fetch coverage audit' });
    }
});
// ============================================================================
// TutorNove JEE Main PYQ Management Endpoints
// ============================================================================
// Filter and browse extracted PYQ questions
router.get('/pyq/questions', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN', 'CONTENT_REVIEWER']), async (req, res) => {
    try {
        const { year, shift, subject, status } = req.query;
        const whereClause = { isPYQ: true };
        if (year && year !== 'ALL') {
            whereClause.pyqYear = String(year);
        }
        if (shift && shift !== 'ALL') {
            whereClause.pyqShift = { contains: String(shift) };
        }
        if (status && status !== 'ALL') {
            whereClause.verificationStatus = String(status);
        }
        const questions = await prisma_1.prisma.question.findMany({
            where: whereClause,
            include: {
                exam: { select: { title: true, shortName: true } },
                testQuestions: { select: { sectionName: true, questionNumber: true, marks: true, negativeMarks: true } },
            },
            orderBy: [{ pyqYear: 'desc' }, { createdAt: 'desc' }],
        });
        const formatted = questions
            .map((q) => {
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
            const section = q.testQuestions[0]?.sectionName || 'Physics';
            const qNum = q.testQuestions[0]?.questionNumber || 1;
            const marks = q.testQuestions[0]?.marks || 4;
            const negMarks = q.testQuestions[0]?.negativeMarks || 1;
            return {
                id: q.id,
                exam: 'JEE Main',
                year: q.pyqYear ? parseInt(q.pyqYear) : 2025,
                shift: q.pyqShift || 'Shift 1',
                subject: section,
                questionNumber: qNum,
                questionType: q.questionType === 'NUMERICAL' ? 'NUMERICAL' : 'MCQ',
                questionText: q.contentEn,
                options: options.map((opt) => ({
                    key: opt.id || 'A',
                    text: opt.textEn || '',
                })),
                correctAnswer: correctAnswers,
                numericalAnswer: q.numericalAnswer,
                explanation: q.explanationEn,
                marks,
                negativeMarks: -negMarks,
                source: {
                    pdf: q.pyqPaper || 'JEE_Main.pdf',
                    provenance: q.sourceProvenance,
                },
                verificationStatus: q.verificationStatus.toLowerCase(),
                isPublished: q.isPublished,
            };
        })
            .filter((q) => {
            if (subject && subject !== 'ALL') {
                return q.subject === subject;
            }
            return true;
        });
        res.json({ count: formatted.length, questions: formatted });
    }
    catch (error) {
        console.error('Error fetching PYQ questions:', error);
        res.status(500).json({ error: 'Failed to fetch PYQ questions' });
    }
});
// Edit PYQ question details & options
router.put('/pyq/questions/:id', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN', 'CONTENT_REVIEWER']), async (req, res) => {
    try {
        const id = req.params.id;
        const { questionText, options, correctAnswer, explanation, marks, negativeMarks, verificationStatus } = req.body;
        const formattedOptions = (options || []).map((o) => ({
            id: o.key,
            textEn: o.text,
        }));
        const updated = await prisma_1.prisma.question.update({
            where: { id },
            data: {
                contentEn: questionText,
                optionsJson: JSON.stringify(formattedOptions),
                correctAnswerJson: JSON.stringify(correctAnswer || []),
                explanationEn: explanation,
                numericalAnswer: typeof correctAnswer?.[0] === 'number' ? correctAnswer[0] : null,
                verificationStatus: verificationStatus ? verificationStatus.toUpperCase() : undefined,
                reviewedAt: new Date(),
                reviewerName: req.user.name,
            },
        });
        res.json({ success: true, message: 'Question updated successfully', question: updated });
    }
    catch (error) {
        console.error('Error updating PYQ question:', error);
        res.status(500).json({ error: 'Failed to update question' });
    }
});
// Approve and publish / unpublish PYQ question
router.post('/pyq/questions/:id/status', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN']), async (req, res) => {
    try {
        const id = req.params.id;
        const { verificationStatus, isPublished } = req.body;
        const updated = await prisma_1.prisma.question.update({
            where: { id },
            data: {
                verificationStatus: verificationStatus ? verificationStatus.toUpperCase() : undefined,
                isPublished: typeof isPublished === 'boolean' ? isPublished : undefined,
                reviewedAt: new Date(),
                reviewerName: req.user.name,
            },
        });
        res.json({
            success: true,
            message: `Question verification status set to ${updated.verificationStatus}, published: ${updated.isPublished}`,
            question: updated,
        });
    }
    catch (error) {
        console.error('Error setting question status:', error);
        res.status(500).json({ error: 'Failed to update question status' });
    }
});
// Export verified PYQ questions in official JSON format
router.get('/pyq/export', auth_1.authenticate, (0, auth_1.requireRole)(['ADMIN', 'CONTENT_REVIEWER']), async (req, res) => {
    try {
        const { year } = req.query;
        const whereClause = { isPYQ: true, verificationStatus: 'VERIFIED' };
        if (year && year !== 'ALL') {
            whereClause.pyqYear = String(year);
        }
        const questions = await prisma_1.prisma.question.findMany({
            where: whereClause,
            include: {
                testQuestions: { select: { sectionName: true, questionNumber: true, marks: true, negativeMarks: true } },
            },
            orderBy: [{ pyqYear: 'desc' }, { createdAt: 'asc' }],
        });
        const exportData = questions.map((q) => {
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
            const section = q.testQuestions[0]?.sectionName || 'Physics';
            const qNum = q.testQuestions[0]?.questionNumber || 1;
            const marks = q.testQuestions[0]?.marks || 4;
            const negMarks = q.testQuestions[0]?.negativeMarks || 1;
            return {
                exam: 'JEE Main',
                year: q.pyqYear ? parseInt(q.pyqYear) : 2025,
                session: 'Session 1',
                date: '2025-01-22',
                shift: q.pyqShift || 'Shift 1',
                subject: section,
                chapter: 'Mechanics',
                questionNumber: qNum,
                questionType: q.questionType === 'NUMERICAL' ? 'NUMERICAL' : 'MCQ',
                questionText: q.contentEn,
                options: options.map((opt) => ({
                    key: opt.id || 'A',
                    text: opt.textEn || '',
                })),
                correctAnswer: correctAnswers,
                explanation: q.explanationEn,
                marks,
                negativeMarks: -negMarks,
                source: {
                    pdf: q.pyqPaper || 'JEE_Main.pdf',
                    url: 'https://jeemain.nta.nic.in/',
                },
                contentType: 'PYQ',
                verificationStatus: 'verified',
                isPublished: q.isPublished,
            };
        });
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', `attachment; filename=jee-main-verified-${year || 'all'}.json`);
        res.json(exportData);
    }
    catch (error) {
        console.error('Error exporting questions:', error);
        res.status(500).json({ error: 'Failed to export questions' });
    }
});
exports.default = router;
