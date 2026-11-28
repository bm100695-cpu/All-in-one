import { Router, Request, Response } from 'express';
import { prisma } from '../prisma';
import { authenticate, requireRole } from '../middleware/auth';
import { canAccessMockTest, getMockAccessType, isStaffRole } from '../test-access';
import { SSC_CGL_SLUG, validateSscCglPaper } from '../ssc-cgl/validation';

const router = Router();

function hasSscPortalAccess(req: Request, res: Response): boolean {
  const portal = String(req.header('x-portal-slug') || '').trim().toLowerCase();
  if (portal !== SSC_CGL_SLUG) {
    res.status(403).json({ error: 'SSC CGL records are available only inside the SSC CGL portal.' });
    return false;
  }
  const targetExam = String(req.user?.targetExamId || '').trim().toLowerCase();
  if (req.user?.role === 'STUDENT' && targetExam && targetExam !== SSC_CGL_SLUG) {
    res.status(403).json({ error: 'Your account is not authorized for the SSC CGL portal.' });
    return false;
  }
  return true;
}

router.get('/catalog', authenticate, async (req: Request, res: Response) => {
  try {
    if (!hasSscPortalAccess(req, res)) return;
    const exam = await prisma.exam.findUnique({ where: { slug: SSC_CGL_SLUG }, select: { id: true } });
    if (!exam) return void res.status(404).json({ error: 'SSC CGL portal is not configured.' });

    const year = Number(req.query.year);
    const tier = String(req.query.tier || '').trim();
    const shift = String(req.query.shift || '').trim();
    const language = String(req.query.language || '').trim().toLowerCase();
    const query = String(req.query.q || '').trim();
    const page = Math.max(1, Number(req.query.page) || 1);
    const pageSize = Math.min(50, Math.max(1, Number(req.query.pageSize) || 12));
    const isStaff = isStaffRole(req.user?.role);
    const where: any = {
      examId: exam.id,
      type: 'PREVIOUS_YEAR_PAPER',
      ...(isStaff ? {} : { isPublished: true, isActive: true, status: 'ACTIVE' }),
      ...(Number.isInteger(year) && year >= 2000 && year <= 2025 ? { cycleYear: year } : {}),
      ...(tier ? { paperType: { contains: tier } } : {}),
      ...(shift ? { examShift: { contains: shift } } : {}),
      ...(language === 'hi' ? { isBilingual: true } : {}),
      ...(query ? { OR: [{ title: { contains: query } }, { actualExamDate: { contains: query } }, { examShift: { contains: query } }] } : {}),
    };
    const papers = await prisma.test.findMany({
      where,
      select: { id: true, title: true, cycleYear: true, actualExamDate: true, examShift: true, paperType: true, totalQuestions: true, totalMarks: true, durationMinutes: true, accessType: true, isBilingual: true, pyqReference: true, sourceReference: true, verificationStatus: true, answerKeyStatus: true, isSourceVerified: true, _count: { select: { attempts: true } } },
      orderBy: [{ cycleYear: 'desc' }, { actualExamDate: 'desc' }, { examShift: 'asc' }],
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    const total = await prisma.test.count({ where });
    const visible = isStaff ? papers : (await Promise.all(papers.map(async (paper) => ({ ...paper, isEntitled: await canAccessMockTest(req.user!.id, req.user!.role, paper) })))).filter((paper: any) => getMockAccessType(paper) === 'free' || paper.isEntitled);
    res.set('Cache-Control', 'no-store, private');
    res.json({ papers: visible, page, pageSize, total, totalPages: Math.ceil(total / pageSize) });
  } catch (error) {
    console.error('SSC CGL catalog error:', error);
    res.status(500).json({ error: 'Unable to load SSC CGL papers.' });
  }
});

router.get('/availability-report', authenticate, async (req: Request, res: Response) => {
  try {
    if (!hasSscPortalAccess(req, res)) return;
    const exam = await prisma.exam.findUnique({ where: { slug: SSC_CGL_SLUG }, select: { id: true } });
    if (!exam) return void res.status(404).json({ error: 'SSC CGL portal is not configured.' });
    const papers = await prisma.test.findMany({ where: { examId: exam.id, type: 'PREVIOUS_YEAR_PAPER' }, select: { cycleYear: true, paperType: true, totalQuestions: true, accessType: true, isSourceVerified: true, verificationStatus: true, answerKeyStatus: true } });
    const verified = papers.filter((paper) => paper.isSourceVerified && paper.verificationStatus === 'VERIFIED_OFFICIAL' && paper.answerKeyStatus === 'OFFICIAL_KEY_VERIFIED');
    const byYear = Array.from({ length: 26 }, (_, index) => {
      const year = 2000 + index;
      const count = verified.filter((paper) => paper.cycleYear === year).length;
      return { year, verifiedPapers: count, status: count ? 'AVAILABLE' : 'NOT_YET_VERIFIED' };
    });
    const tierCounts = verified.reduce<Record<string, number>>((out, paper) => { const key = paper.paperType || 'Unspecified'; out[key] = (out[key] || 0) + 1; return out; }, {});
    res.json({
      targetPapers: 100,
      verifiedPapers: verified.length,
      shortfall: Math.max(0, 100 - verified.length),
      totalVerifiedQuestions: verified.reduce((sum, paper) => sum + paper.totalQuestions, 0),
      freePapers: verified.filter((paper) => String(paper.accessType || '').toLowerCase() !== 'premium').length,
      premiumPapers: verified.filter((paper) => String(paper.accessType || '').toLowerCase() === 'premium').length,
      byYear,
      tierCounts,
      sources: [
        { title: 'SSC answer-key archive', url: 'https://ssc.gov.in/home/answer-key', type: 'official-index' },
        { title: 'SSC CGL 2024 Tier-I final-answer-key notice', url: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Writeup_Final_Anwerkey_CGLE_2024_T1_191224.pdf', type: 'official-notice' },
        { title: 'SSC CGL 2023 Tier-I final-answer-key notice', url: 'https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/Write_up_Answer%20Keys_CGLE_2023_T1_-29092023.pdf', type: 'official-notice' },
        { title: 'SSC CGL 2022 Tier-I final-answer-key notice', url: 'https://www.ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/FinalAnswerkey_CGLE2022_tier1_27022023.pdf', type: 'official-notice' },
      ],
      note: 'SSC notices confirm that final answer keys and candidate-specific question papers were released through login windows. No candidate-authenticated paper content is bundled in this repository, so no unverified paper is published.',
    });
  } catch (error) {
    console.error('SSC CGL availability report error:', error);
    res.status(500).json({ error: 'Unable to prepare SSC CGL availability report.' });
  }
});

router.get('/admin/papers/:testId/validate', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req, res) => {
  const report = await validateSscCglPaper(String(req.params.testId));
  res.json(report);
});

export default router;
