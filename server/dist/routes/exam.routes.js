"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../prisma");
const router = (0, express_1.Router)();
// Get all exam categories with stats
router.get('/categories', async (_req, res) => {
    try {
        const categories = await prisma_1.prisma.examCategory.findMany({
            orderBy: { displayOrder: 'asc' },
            include: {
                exams: {
                    select: {
                        id: true,
                        slug: true,
                        title: true,
                        shortName: true,
                        verifiedSyllabusCoveragePct: true,
                        totalVerifiedPYQs: true,
                        status: true,
                    },
                },
            },
        });
        res.json({ categories });
    }
    catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});
// Search & list exams
router.get('/directory', async (req, res) => {
    try {
        const { category, search } = req.query;
        const whereClause = {
            status: 'ACTIVE',
        };
        if (category) {
            whereClause.category = {
                code: String(category).toUpperCase(),
            };
        }
        if (search) {
            whereClause.OR = [
                { title: { contains: String(search) } },
                { shortName: { contains: String(search) } },
                { conductingBody: { contains: String(search) } },
            ];
        }
        const exams = await prisma_1.prisma.exam.findMany({
            where: whereClause,
            include: {
                category: true,
                patternVersions: {
                    where: { isDefault: true },
                    include: {
                        sections: true,
                    },
                },
            },
            orderBy: { totalVerifiedPYQs: 'desc' },
        });
        res.json({ exams });
    }
    catch (error) {
        console.error('Error fetching exams:', error);
        res.status(500).json({ error: 'Failed to fetch exams' });
    }
});
// Get detailed exam profile by slug
router.get('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const exam = await prisma_1.prisma.exam.findUnique({
            where: { slug },
            include: {
                category: true,
                patternVersions: {
                    include: {
                        sections: {
                            orderBy: { order: 'asc' },
                        },
                    },
                    orderBy: { effectiveFrom: 'desc' },
                },
                syllabusNodes: {
                    orderBy: { weightagePct: 'desc' },
                },
                tests: {
                    where: { isPublished: true },
                    select: {
                        id: true,
                        title: true,
                        type: true,
                        durationMinutes: true,
                        totalMarks: true,
                        totalQuestions: true,
                        pyqReference: true,
                    },
                },
            },
        });
        if (!exam) {
            res.status(404).json({ error: 'Exam not found' });
            return;
        }
        // Fetch verified provenance coverage audit
        const audit = await prisma_1.prisma.contentCoverageAudit.findFirst({
            where: { examId: exam.id },
            orderBy: { auditTimestamp: 'desc' },
        });
        res.json({
            exam,
            audit,
        });
    }
    catch (error) {
        console.error('Error fetching exam profile:', error);
        res.status(500).json({ error: 'Failed to fetch exam profile' });
    }
});
// Get syllabus tree with verification stats for an exam
router.get('/:slug/syllabus-tree', async (req, res) => {
    try {
        const { slug } = req.params;
        const exam = await prisma_1.prisma.exam.findUnique({
            where: { slug },
            include: {
                syllabusNodes: {
                    include: {
                        questions: {
                            select: {
                                id: true,
                                isPYQ: true,
                                verificationStatus: true,
                                difficulty: true,
                            },
                        },
                    },
                },
            },
        });
        if (!exam) {
            res.status(404).json({ error: 'Exam not found' });
            return;
        }
        // Build hierarchy: root nodes (SUBJECT) with children
        const allNodes = exam.syllabusNodes;
        const rootNodes = allNodes.filter((n) => n.level === 'SUBJECT');
        const tree = rootNodes.map((subject) => {
            const units = allNodes.filter((n) => n.parentId === subject.id);
            return {
                ...subject,
                children: units.map((unit) => {
                    const topics = allNodes.filter((n) => n.parentId === unit.id);
                    return {
                        ...unit,
                        children: topics,
                    };
                }),
            };
        });
        res.json({
            examTitle: exam.title,
            coveragePct: exam.verifiedSyllabusCoveragePct,
            totalPYQs: exam.totalVerifiedPYQs,
            tree,
        });
    }
    catch (error) {
        console.error('Error fetching syllabus tree:', error);
        res.status(500).json({ error: 'Failed to fetch syllabus tree' });
    }
});
exports.default = router;
