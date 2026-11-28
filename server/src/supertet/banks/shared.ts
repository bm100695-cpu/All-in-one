export interface RawBankQuestion {
  subject: string;
  topic: string;
  chapter?: string;
  contentHi: string;
  contentEn: string;
  correct: [string, string];
  distractors: [[string, string], [string, string], [string, string]];
  explanationHi: string;
  explanationEn: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  formulaHi?: string;
  formulaEn?: string;
  grammarRuleHi?: string;
  diagramUrl?: string;
  referenceDate?: string;
  isPYQ?: boolean;
  pyqYear?: string;
  sourceProvenance?: string;
}

export type BankQExtra = Partial<
  Omit<
    RawBankQuestion,
    | 'subject'
    | 'topic'
    | 'chapter'
    | 'contentHi'
    | 'contentEn'
    | 'correct'
    | 'distractors'
    | 'explanationHi'
    | 'explanationEn'
    | 'difficulty'
  >
>;

export function makeQ(subject: string) {
  return (
    topic: string,
    chapter: string,
    contentHi: string,
    contentEn: string,
    correct: [string, string],
    distractors: [[string, string], [string, string], [string, string]],
    explanationHi: string,
    explanationEn: string,
    difficulty: 'EASY' | 'MEDIUM' | 'HARD' = 'MEDIUM',
    extra?: BankQExtra
  ): RawBankQuestion => ({
    subject,
    topic,
    chapter,
    contentHi,
    contentEn,
    correct,
    distractors,
    explanationHi,
    explanationEn,
    difficulty,
    ...extra,
  });
}

export function svgDataUri(svgBody: string): string {
  const clean = svgBody.replace(/\s+/g, ' ').trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(clean)}`;
}
