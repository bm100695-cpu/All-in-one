import { RawBankQuestion } from './shared';

// Import all static bank parts
import { CDP_BANK_PART1 } from './cdp_part1';
import { CDP_BANK_PART2 } from './cdp_part2';
import { CDP_BANK_PART3 } from './cdp_part3';

import { ENGLISH_BANK_PART1 } from './english_part1';
import { ENGLISH_BANK_PART2 } from './english_part2';

import { EVS_BANK_PART1 } from './evs_part1';
import { EVS_BANK_PART2 } from './evs_part2';

import { GK_BANK_PART1 } from './gk_part1';
import { GK_BANK_PART2 } from './gk_part2';
import { GK_BANK_PART3 } from './gk_part3';
import { GK_BANK_PART4 } from './gk_part4';
import { GK_BANK_PART5 } from './gk_part5';
import { GK_BANK_PART6 } from './gk_part6';

import { HINDI_GRAMMAR_PART1 } from './hindi_grammar_part1';
import { HINDI_GRAMMAR_PART2 } from './hindi_grammar_part2';
import { HINDI_PASSAGES_PART1 } from './hindi_passages_part1';

import { LIFESKILLS_BANK_PART1 } from './lifeskills_part1';
import { LIFESKILLS_BANK_PART2 } from './lifeskills_part2';

import { SCIENCE_BANK_PART1 } from './science_part1';
import { SCIENCE_BANK_PART2 } from './science_part2';

import { TEACHING_BANK_PART1 } from './teaching_part1';
import { TEACHING_BANK_PART2 } from './teaching_part2';

// Import all structured generators
import { generateHindiStructuredBank } from '../generators/hindi_structured_bank';
import { generateItBank } from '../generators/it_bank';
import { generateMathBank } from '../generators/math_bank';
import { generateReasoningBank } from '../generators/reasoning_bank';
import { generateSanskritBank } from '../generators/sanskrit_bank';

export {
  CDP_BANK_PART1,
  CDP_BANK_PART2,
  CDP_BANK_PART3,
  ENGLISH_BANK_PART1,
  ENGLISH_BANK_PART2,
  EVS_BANK_PART1,
  EVS_BANK_PART2,
  GK_BANK_PART1,
  GK_BANK_PART2,
  GK_BANK_PART3,
  GK_BANK_PART4,
  GK_BANK_PART5,
  GK_BANK_PART6,
  HINDI_GRAMMAR_PART1,
  HINDI_GRAMMAR_PART2,
  HINDI_PASSAGES_PART1,
  LIFESKILLS_BANK_PART1,
  LIFESKILLS_BANK_PART2,
  SCIENCE_BANK_PART1,
  SCIENCE_BANK_PART2,
  TEACHING_BANK_PART1,
  TEACHING_BANK_PART2,
};

export function getAllBankQuestionsBySubject(): Record<string, RawBankQuestion[]> {
  const hindiStructured = generateHindiStructuredBank();
  const sanskritBank = generateSanskritBank();
  const itBank = generateItBank();
  const mathBank = generateMathBank();
  const reasoningBank = generateReasoningBank();

  return {
    'Hindi': [
      ...HINDI_GRAMMAR_PART1,
      ...HINDI_GRAMMAR_PART2,
      ...HINDI_PASSAGES_PART1,
      ...hindiStructured,
    ],
    'Sanskrit': [...sanskritBank],
    'English': [
      ...ENGLISH_BANK_PART1,
      ...ENGLISH_BANK_PART2,
    ],
    'Science': [
      ...SCIENCE_BANK_PART1,
      ...SCIENCE_BANK_PART2,
    ],
    'Mathematics': [...mathBank],
    'Environmental & Social Studies': [
      ...EVS_BANK_PART1,
      ...EVS_BANK_PART2,
    ],
    'Teaching Skills': [
      ...TEACHING_BANK_PART1,
      ...TEACHING_BANK_PART2,
    ],
    'Child Psychology': [
      ...CDP_BANK_PART1,
      ...CDP_BANK_PART2,
      ...CDP_BANK_PART3,
    ],
    'General Knowledge & Current Affairs': [
      ...GK_BANK_PART1,
      ...GK_BANK_PART2,
      ...GK_BANK_PART3,
      ...GK_BANK_PART4,
      ...GK_BANK_PART5,
      ...GK_BANK_PART6,
    ],
    'Reasoning': [...reasoningBank],
    'Information Technology': [...itBank],
    'Life Skills / Management & Aptitude': [
      ...LIFESKILLS_BANK_PART1,
      ...LIFESKILLS_BANK_PART2,
    ],
  };
}
