import { Router, Request, Response } from 'express';
import { prisma } from '../prisma';

const router = Router();

// Get all exam categories with stats
router.get('/categories', async (_req: Request, res: Response) => {
  try {
    const categories = await prisma.examCategory.findMany({
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
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Search & list exams
router.get('/directory', async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;

    const whereClause: any = {
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

    const exams = await prisma.exam.findMany({
      where: whereClause,
      include: {
        category: true,
        patternVersions: {
          where: { isDefault: true },
          include: {
            sections: { orderBy: { order: 'asc' } },
          },
        },
        _count: {
          select: {
            tests: { where: { isPublished: true } },
            questions: { where: { isPublished: true } },
          },
        },
      },
      orderBy: [{ isComingSoon: 'asc' }, { totalVerifiedPYQs: 'desc' }],
    });

    const enriched = await Promise.all(
      exams.map(async (e) => {
        let actualTestsCount = e._count.tests;
        let actualQuestionsCount = e._count.questions;
        if (e.slug === 'super-tet') {
          const stCount = await prisma.superTetQuestion.count({ where: { isActive: true } });
          actualQuestionsCount = Math.max(actualQuestionsCount, stCount);
        }
        let importantDates: Record<string, string> = {};
        try {
          importantDates = JSON.parse(e.importantDatesJson || '{}');
        } catch {
          importantDates = {};
        }
        return {
          ...e,
          actualTestsCount,
          actualQuestionsCount,
          importantDates,
        };
      })
    );

    res.json({ exams: enriched });
  } catch (error) {
    console.error('Error fetching exams:', error);
    res.status(500).json({ error: 'Failed to fetch exams' });
  }
});

// Get detailed exam profile by slug
router.get('/:slug', async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const now = new Date();
    const exam = await prisma.exam.findUnique({
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
          where: {
            isPublished: true,
            status: 'ACTIVE',
            isActive: true,
            OR: [
              { availableFrom: null, availableTo: null },
              { availableFrom: { lte: now }, availableTo: null },
              { availableFrom: null, availableTo: { gte: now } },
              { availableFrom: { lte: now }, availableTo: { gte: now } },
            ],
          },
          select: {
            id: true,
            title: true,
            type: true,
            durationMinutes: true,
            totalMarks: true,
            totalQuestions: true,
            pyqReference: true,
            accessLevel: true,
            isFeatured: true,
            status: true,
            isActive: true,
            availableFrom: true,
            availableTo: true,
          },
        },
      },
    });

    if (!exam) {
      res.status(404).json({ error: 'Exam not found' });
      return;
    }

    // Compute exact verified vs practice test counts + exam-specific pricing
    const [actualVerifiedPYQCount, actualPracticeCount, plans] = await Promise.all([
      exam.slug === 'super-tet'
        ? prisma.superTetQuestion.count({ where: { isPYQ: true, isActive: true } })
        : prisma.question.count({ where: { examId: exam.id, isPYQ: true, isPublished: true } }),
      prisma.test.count({ where: { examId: exam.id, isPublished: true, status: 'ACTIVE', isActive: true } }),
      prisma.subscriptionPlan.findMany({
        where: {
          isPublished: true,
          OR: [{ examSlug: exam.slug }, { examSlug: null }],
        },
        orderBy: { displayOrder: 'asc' },
      }),
    ]);

    let importantDates: Record<string, string> = {};
    try {
      importantDates = JSON.parse(exam.importantDatesJson || '{}');
    } catch {
      importantDates = {};
    }

    // Fetch verified provenance coverage audit
    const audit = await prisma.contentCoverageAudit.findFirst({
      where: { examId: exam.id },
      orderBy: { auditTimestamp: 'desc' },
    });

    res.json({
      exam: {
        ...exam,
        patterns: exam.patternVersions,
        importantDates,
        actualVerifiedPYQCount,
        actualTestsCount: exam.tests.length,
        actualPracticeTestsCount: actualPracticeCount,
        plans: plans.map((p) => ({
          ...p,
          features: JSON.parse(p.featuresJson || '[]'),
        })),
      },
      audit,
    });
  } catch (error) {
    console.error('Error fetching exam profile:', error);
    res.status(500).json({ error: 'Failed to fetch exam profile' });
  }
});

// Get syllabus tree with verification stats for an exam
router.get('/:slug/syllabus-tree', async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const exam = await prisma.exam.findUnique({
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
  } catch (error) {
    console.error('Error fetching syllabus tree:', error);
    res.status(500).json({ error: 'Failed to fetch syllabus tree' });
  }
});

export default router;
