import { prisma } from '../prisma';

export const SSC_CGL_SLUG = 'ssc-cgl-tier1';

export type PaperValidationReport = {
  valid: boolean;
  errors: string[];
  warnings: string[];
  questionCount: number;
};

/**
 * A paper is publishable only when it is a complete, source-verifiable SSC
 * CGL PYQ. This is deliberately stricter than the generic mock-test checks:
 * incomplete scans and recreated memory papers remain drafts.
 */
export async function validateSscCglPaper(testId: string): Promise<PaperValidationReport> {
  const test = await prisma.test.findUnique({
    where: { id: testId },
    include: {
      exam: { select: { slug: true } },
      patternVersion: { include: { sections: true } },
      testQuestions: { include: { question: true }, orderBy: { questionNumber: 'asc' } },
    },
  });

  if (!test || test.exam.slug !== SSC_CGL_SLUG) {
    return { valid: false, errors: ['This is not an SSC CGL paper.'], warnings: [], questionCount: 0 };
  }

  const errors: string[] = [];
  const warnings: string[] = [];
  const questions = test.testQuestions;

  if (!test.sourcePaperKey?.trim()) errors.push('Missing immutable source paper key.');
  if (!test.sourceReference?.trim()) errors.push('Missing source reference.');
  if (!test.isSourceVerified || !test.sourceVerifiedAt) errors.push('Paper source has not been verified by an administrator.');
  if (test.verificationStatus !== 'VERIFIED_OFFICIAL') errors.push('Paper verification status must be VERIFIED_OFFICIAL.');
  if (test.answerKeyStatus !== 'OFFICIAL_KEY_VERIFIED') errors.push('Official answer key verification is required.');
  if (!test.cycleYear || test.cycleYear < 2000 || test.cycleYear > 2025) errors.push('Examination year must be between 2000 and 2025.');
  if (!test.paperType?.trim()) errors.push('Tier and paper type are required.');
  if (!test.instructionsEn?.trim()) errors.push('Paper-specific instructions are required.');
  if (questions.length !== test.totalQuestions) errors.push(`Question count mismatch: paper declares ${test.totalQuestions}, but contains ${questions.length}.`);
  if (questions.length !== test.patternVersion.totalQuestions) {
    errors.push(`Pattern mismatch: selected pattern requires ${test.patternVersion.totalQuestions} questions, but paper contains ${questions.length}.`);
  }

  const sectionCounts = new Map<string, number>();
  for (const linked of questions) {
    const question = linked.question;
    sectionCounts.set(linked.sectionName, (sectionCounts.get(linked.sectionName) || 0) + 1);
    if (!question.contentEn.trim()) errors.push(`Q${linked.questionNumber}: question text is missing.`);
    if (!question.explanationEn.trim()) errors.push(`Q${linked.questionNumber}: detailed solution is missing.`);
    if (!question.sourceReference?.trim() && !question.sourceProvenance?.trim()) errors.push(`Q${linked.questionNumber}: source reference is missing.`);
    if (question.verificationStatus !== 'VERIFIED' || !question.isPublished) errors.push(`Q${linked.questionNumber}: question is not verified and published.`);

    let options: Array<{ id?: string; textEn?: string }> = [];
    let answers: string[] = [];
    try { options = JSON.parse(question.optionsJson); } catch { errors.push(`Q${linked.questionNumber}: options are not valid JSON.`); }
    try { answers = JSON.parse(question.correctAnswerJson); } catch { errors.push(`Q${linked.questionNumber}: answer key is not valid JSON.`); }
    if (!Array.isArray(options) || options.length < 4 || options.some((option) => !option?.id || !option?.textEn?.trim())) {
      errors.push(`Q${linked.questionNumber}: four complete answer options are required.`);
    }
    if (!Array.isArray(answers) || answers.length === 0) errors.push(`Q${linked.questionNumber}: correct answer is missing.`);
    if (Array.isArray(options) && Array.isArray(answers) && !answers.includes('BONUS')) {
      const optionIds = new Set(options.map((option) => String(option.id).toUpperCase()));
      if (answers.some((answer) => !optionIds.has(String(answer).toUpperCase()))) {
        errors.push(`Q${linked.questionNumber}: answer key does not match an option.`);
      }
    }
  }

  for (const section of test.patternVersion.sections) {
    const count = sectionCounts.get(section.name) || 0;
    if (count !== section.totalQuestions) {
      errors.push(`${section.name}: expected ${section.totalQuestions} questions, found ${count}.`);
    }
  }

  if (!test.instructionsHi) warnings.push('Hindi instructions are not available for this paper.');
  if (!test.isBilingual) warnings.push('This paper is English-only; bilingual source content was not verified.');

  return { valid: errors.length === 0, errors: [...new Set(errors)], warnings: [...new Set(warnings)], questionCount: questions.length };
}
