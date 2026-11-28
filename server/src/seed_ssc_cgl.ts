import { prisma } from './prisma';
import { SSC_CGL_SLUG } from './ssc-cgl/validation';

/**
 * Idempotently configures only the SSC CGL portal. It intentionally imports no
 * reconstructed questions: the official SSC notices link to candidate-login
 * downloads, and this repository contains none of those source documents.
 */
async function main() {
  const category = await prisma.examCategory.upsert({
    where: { code: 'SSC' },
    update: {},
    create: { name: 'SSC & Government Recruitment', code: 'SSC', description: 'Staff Selection Commission examinations.', icon: 'Award', displayOrder: 5 },
  });
  const exam = await prisma.exam.upsert({
    where: { slug: SSC_CGL_SLUG },
    update: {
      title: 'SSC Combined Graduate Level (Tier-I)',
      shortName: 'SSC CGL',
      conductingBody: 'Staff Selection Commission (SSC)',
      officialWebsite: 'https://ssc.gov.in',
      description: 'Verified SSC CGL previous-year papers are published only after source and answer-key validation.',
      eligibilitySummary: 'Bachelor’s degree from a recognised university or equivalent; refer to the applicable SSC notice.',
      portalHeadline: 'SSC CGL Previous-Year Papers & CBT Practice',
      accentColor: '#1E3A8A',
      categoryId: category.id,
      status: 'ACTIVE',
    },
    create: {
      slug: SSC_CGL_SLUG,
      title: 'SSC Combined Graduate Level (Tier-I)',
      shortName: 'SSC CGL',
      conductingBody: 'Staff Selection Commission (SSC)',
      officialWebsite: 'https://ssc.gov.in',
      description: 'Verified SSC CGL previous-year papers are published only after source and answer-key validation.',
      eligibilitySummary: 'Bachelor’s degree from a recognised university or equivalent; refer to the applicable SSC notice.',
      portalHeadline: 'SSC CGL Previous-Year Papers & CBT Practice',
      accentColor: '#1E3A8A',
      categoryId: category.id,
      status: 'ACTIVE',
    },
  });

  const verifiedQuestionCount = await prisma.question.count({
    where: { examId: exam.id, isPYQ: true, isPublished: true, verificationStatus: 'VERIFIED' },
  });
  await prisma.exam.update({ where: { id: exam.id }, data: { totalVerifiedPYQs: verifiedQuestionCount } });

  const pattern = await prisma.examPatternVersion.findFirst({
    where: { examId: exam.id, versionName: 'SSC CGL Tier-I (2022 onwards)' },
    include: { sections: true },
  });
  if (!pattern) {
    await prisma.examPatternVersion.create({
      data: {
        examId: exam.id,
        versionName: 'SSC CGL Tier-I (2022 onwards)',
        effectiveFrom: new Date('2022-01-01T00:00:00.000Z'),
        durationMinutes: 60,
        totalMarks: 200,
        totalQuestions: 100,
        questionsToAttempt: 100,
        sectionalTimers: false,
        questionShuffling: false,
        languagesAllowed: JSON.stringify(['en', 'hi']),
        submissionRules: JSON.stringify({ allowSectionSwitching: true, autoSubmit: true, serverTimed: true, marksPerCorrect: 2, negativeMarks: 0.5, unattemptedMarks: 0 }),
        isDefault: true,
        sections: {
          create: [
            { name: 'General Intelligence and Reasoning', order: 1, totalQuestions: 25, maxToAttempt: 25, questionType: 'MCQ_SINGLE', marksPerCorrect: 2, negativeMarks: 0.5, unattemptedPenalty: 0 },
            { name: 'General Awareness', order: 2, totalQuestions: 25, maxToAttempt: 25, questionType: 'MCQ_SINGLE', marksPerCorrect: 2, negativeMarks: 0.5, unattemptedPenalty: 0 },
            { name: 'Quantitative Aptitude', order: 3, totalQuestions: 25, maxToAttempt: 25, questionType: 'MCQ_SINGLE', marksPerCorrect: 2, negativeMarks: 0.5, unattemptedPenalty: 0 },
            { name: 'English Comprehension', order: 4, totalQuestions: 25, maxToAttempt: 25, questionType: 'MCQ_SINGLE', marksPerCorrect: 2, negativeMarks: 0.5, unattemptedPenalty: 0 },
          ],
        },
      },
    });
  }

  const verifiedPapers = await prisma.test.count({
    where: { examId: exam.id, type: 'PREVIOUS_YEAR_PAPER', isSourceVerified: true, verificationStatus: 'VERIFIED_OFFICIAL', answerKeyStatus: 'OFFICIAL_KEY_VERIFIED' },
  });
  console.log(JSON.stringify({ exam: SSC_CGL_SLUG, verifiedPapers, targetPapers: 100, shortfall: Math.max(0, 100 - verifiedPapers), verifiedQuestionCount }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}).finally(() => prisma.$disconnect());
