import crypto from 'crypto';
import {
  SUPERTET_SUBJECTS,
  SUPERTET_SUBJECT_QUOTAS,
  SUPERTET_TOTAL_QUESTIONS,
  SuperTetDifficultyTier,
  SuperTetSourceType,
} from './constants';

export interface SuperTetQuestionOptionInput {
  id: 'A' | 'B' | 'C' | 'D';
  textHi: string;
  textEn?: string;
}

export interface SuperTetQuestionInput {
  questionNumber: number;
  subject: string;
  topic: string;
  chapter?: string;
  contentHi: string;
  contentEn?: string;
  options: SuperTetQuestionOptionInput[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanationHi: string;
  explanationEn?: string;
  formulaHi?: string;
  formulaEn?: string;
  grammarRuleHi?: string;
  diagramUrl?: string;
  referenceDate?: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  sourceType: SuperTetSourceType;
  isPYQ?: boolean;
  pyqYear?: string;
  sourceProvenance: string;
  sourceLicense?: string;
  verificationStatus?: string;
}

export interface SuperTetPaperInput {
  mockNumber: number;
  sourcePaperKey: string;
  title: string;
  description: string;
  difficultyTier: SuperTetDifficultyTier;
  sourceType: SuperTetSourceType;
  accessType: 'free' | 'premium';
  premiumLabel?: string;
  durationMinutes?: number;
  totalMarks?: number;
  cycleYear?: number;
  sourceReference: string;
  verificationStatus: string;
  instructionsHi?: string;
  instructionsEn?: string;
  questions: SuperTetQuestionInput[];
}

export interface SuperTetValidationResult {
  valid: boolean;
  errors: string[];
  subjectCounts: Record<string, number>;
  duplicateCountInPaper: number;
}

const PLACEHOLDER_REGEX =
  /\b(placeholder|lorem ipsum|tbd|todo|sample question|coming soon|test option|option [a-d] text)\b|उत्तर [अआइई] यहाँ/i;

export function normalizeSuperTetStem(text: string): string {
  return String(text || '')
    .toLowerCase()
    .replace(/[\s\u00A0]+/g, ' ')
    .replace(/[।.,!?;:"'()\[\]{}\-–—]/g, '')
    .trim();
}

export function hashSuperTetQuestion(subject: string, contentHi: string, contentEn?: string): string {
  const canonical = `${subject}::${normalizeSuperTetStem(contentHi)}::${normalizeSuperTetStem(contentEn || '')}`;
  return crypto.createHash('sha256').update(canonical).digest('hex');
}

export function validateSuperTetPaper(paper: SuperTetPaperInput): SuperTetValidationResult {
  const errors: string[] = [];
  const subjectCounts: Record<string, number> = Object.fromEntries(
    SUPERTET_SUBJECTS.map((s) => [s.key, 0])
  );

  if (!paper || typeof paper !== 'object') {
    return {
      valid: false,
      errors: ['Paper payload is missing.'],
      subjectCounts,
      duplicateCountInPaper: 0,
    };
  }

  if (!Array.isArray(paper.questions)) {
    return {
      valid: false,
      errors: ['Paper questions must be an array.'],
      subjectCounts,
      duplicateCountInPaper: 0,
    };
  }

  if (paper.questions.length !== SUPERTET_TOTAL_QUESTIONS) {
    errors.push(
      `Paper "${paper.title}" has ${paper.questions.length} questions; exact required count is ${SUPERTET_TOTAL_QUESTIONS}.`
    );
  }

  const seenNumbers = new Set<number>();
  const seenStems = new Set<string>();
  let duplicateCountInPaper = 0;

  for (let i = 0; i < paper.questions.length; i++) {
    const q = paper.questions[i];
    const qLabel = `Q#${q?.questionNumber ?? i + 1}`;

    if (
      !Number.isInteger(q.questionNumber) ||
      q.questionNumber < 1 ||
      q.questionNumber > SUPERTET_TOTAL_QUESTIONS
    ) {
      errors.push(`${qLabel}: questionNumber must be between 1 and ${SUPERTET_TOTAL_QUESTIONS}.`);
    } else if (seenNumbers.has(q.questionNumber)) {
      errors.push(`${qLabel}: duplicate questionNumber ${q.questionNumber}.`);
    } else {
      seenNumbers.add(q.questionNumber);
    }

    if (!q.subject || !(q.subject in SUPERTET_SUBJECT_QUOTAS)) {
      errors.push(`${qLabel}: invalid Super TET subject "${q.subject}".`);
    } else {
      subjectCounts[q.subject] = (subjectCounts[q.subject] || 0) + 1;
    }

    if (!q.topic || !q.topic.trim()) {
      errors.push(`${qLabel}: topic is required.`);
    }

    const stemHi = (q.contentHi || '').trim();
    const stemEn = (q.contentEn || '').trim();
    if (stemHi.length < 6 && stemEn.length < 6) {
      errors.push(`${qLabel}: question text is empty or too short.`);
    }
    if (PLACEHOLDER_REGEX.test(stemHi) || PLACEHOLDER_REGEX.test(stemEn)) {
      errors.push(`${qLabel}: question text contains placeholder content.`);
    }

    const stemHash = hashSuperTetQuestion(q.subject || '', stemHi, stemEn);
    if (seenStems.has(stemHash)) {
      duplicateCountInPaper++;
      errors.push(`${qLabel}: duplicate question stem inside same paper.`);
    } else {
      seenStems.add(stemHash);
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`${qLabel}: must contain exactly 4 options (A, B, C, D).`);
    } else {
      const optionIds = q.options.map((o) => o.id);
      if (['A', 'B', 'C', 'D'].some((id) => !optionIds.includes(id as 'A' | 'B' | 'C' | 'D'))) {
        errors.push(`${qLabel}: options must include IDs A, B, C, and D.`);
      }
      const normalizedTexts = new Set<string>();
      for (const opt of q.options) {
        const t = (opt.textHi || opt.textEn || '').trim();
        if (!t) {
          errors.push(`${qLabel}: option ${opt.id} is empty.`);
        } else if (PLACEHOLDER_REGEX.test(t)) {
          errors.push(`${qLabel}: option ${opt.id} contains placeholder text.`);
        }
        const normOpt = normalizeSuperTetStem(t);
        if (normOpt && normalizedTexts.has(normOpt)) {
          errors.push(`${qLabel}: duplicate option text detected ("${t}").`);
        }
        normalizedTexts.add(normOpt);
      }
    }

    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
      errors.push(`${qLabel}: invalid correctAnswer "${q.correctAnswer}".`);
    }

    const exp = (q.explanationHi || '').trim();
    if (exp.length < 8) {
      errors.push(`${qLabel}: explanationHi is missing or too short.`);
    }
    if (PLACEHOLDER_REGEX.test(exp)) {
      errors.push(`${qLabel}: explanationHi contains placeholder text.`);
    }

    if (q.subject === 'General Knowledge & Current Affairs' && /202[4-6]|समसामयिक|वर्तमान|हाल ही|करेंट/i.test(stemHi) && !q.referenceDate) {
      errors.push(`${qLabel}: current affairs item must include referenceDate.`);
    }

    if (q.sourceType !== 'VERIFIED_PYQ' && q.isPYQ && paper.sourceType === 'ORIGINAL_FULL_MOCK') {
      errors.push(`${qLabel}: original mock question must not be falsely flagged as verified PYQ.`);
    }
  }

  for (const spec of SUPERTET_SUBJECTS) {
    const actual = subjectCounts[spec.key] || 0;
    if (actual !== spec.questionCount) {
      errors.push(
        `Subject "${spec.key}" has ${actual} questions; required exact quota is ${spec.questionCount}.`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    subjectCounts,
    duplicateCountInPaper,
  };
}
