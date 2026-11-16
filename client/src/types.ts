export type UserRole = 'STUDENT' | 'ADMIN' | 'CONTENT_REVIEWER' | 'INSTITUTION_ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  studentId?: string;
  targetExamId?: string;
  examSelectedAt?: string;
  authProvider?: string;
  referralCode?: string;
  referralCredits?: number;
}

export interface ExamCategory {
  id: string;
  name: string;
  code: string;
  description: string;
  icon: string;
  displayOrder: number;
  exams?: {
    id: string;
    slug: string;
    title: string;
    shortName: string;
    verifiedSyllabusCoveragePct: number;
    totalVerifiedPYQs: number;
  }[];
}

export interface ExamSection {
  id: string;
  patternVersionId: string;
  name: string;
  order: number;
  durationMinutes?: number;
  totalQuestions: number;
  maxToAttempt: number;
  questionType: string;
  marksPerCorrect: number;
  negativeMarks: number;
  unattemptedPenalty: number;
}

export interface ExamPatternVersion {
  id: string;
  examId: string;
  versionName: string;
  effectiveFrom: string;
  durationMinutes: number;
  totalMarks: number;
  totalQuestions: number;
  questionsToAttempt: number;
  sectionalTimers: boolean;
  questionShuffling: boolean;
  languagesAllowed: string;
  isDefault: boolean;
  sections: ExamSection[];
}

export interface SyllabusNode {
  id: string;
  examId: string;
  parentId?: string;
  level: 'SUBJECT' | 'UNIT' | 'CHAPTER' | 'TOPIC';
  title: string;
  code: string;
  weightagePct: number;
  officialNotificationRef?: string;
  children?: SyllabusNode[];
}

export interface Exam {
  id: string;
  slug: string;
  title: string;
  shortName: string;
  conductingBody: string;
  officialWebsite: string;
  description: string;
  eligibilitySummary: string;
  verifiedSyllabusCoveragePct: number;
  totalVerifiedPYQs: number;
  categoryId: string;
  status: string;
  isComingSoon?: boolean;
  portalHeadline?: string;
  latestNotification?: string;
  notificationDate?: string;
  officialNoticeUrl?: string;
  accentColor?: string;
  importantDates?: Record<string, string>;
  actualTestsCount?: number;
  actualQuestionsCount?: number;
  actualVerifiedPYQCount?: number;
  actualPracticeTestsCount?: number;
  plans?: SubscriptionPlan[];
  category?: ExamCategory;
  patternVersions?: ExamPatternVersion[];
  syllabusNodes?: SyllabusNode[];
  tests?: {
    id: string;
    title: string;
    type: string;
    durationMinutes: number;
    totalMarks: number;
    totalQuestions: number;
    pyqReference?: string;
  }[];
}

export interface QuestionOption {
  id: string;
  textEn: string;
  textHi?: string;
}

export interface TestQuestion {
  testQuestionId: string;
  questionId: string;
  questionNumber: number;
  sectionName: string;
  marks: number;
  negativeMarks: number;
  questionType: 'SINGLE_CHOICE' | 'MULTI_CHOICE' | 'NUMERICAL' | 'DESCRIPTIVE';
  subject?: string;
  contentEn: string;
  contentHi?: string;
  diagramUrl?: string | null;
  numericalTolerance?: number | null;
  options: QuestionOption[];
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  isPYQ: boolean;
  pyqYear?: string;
  pyqShift?: string;
  sourceProvenance: string;
  isAIGenerated: boolean;
  correctAnswers?: string[];
  numericalAnswer?: number;
  explanationEn?: string;
  explanationHi?: string;
  verificationStatus?: string;
  reviewerName?: string;
  syllabusNode?: {
    title: string;
    code: string;
  };
  studentResponse?: {
    selectedOptionIds: string[];
    numericalValue: number | null;
    isCorrect: boolean;
    marksAwarded: number;
    status: string;
  };
}

export type PaletteStatus =
  | 'NOT_VISITED'
  | 'NOT_ANSWERED'
  | 'ANSWERED'
  | 'MARKED_FOR_REVIEW'
  | 'ANSWERED_AND_MARKED';

export interface UserResponse {
  questionId: string;
  selectedOptionIds: string[];
  numericalValue?: number;
  timeSpentSec: number;
  status: PaletteStatus;
}

export interface TestAttemptReview {
  attempt: {
    id: string;
    startedAt: string;
    submittedAt: string;
    totalScore: number;
    totalMarks: number;
    accuracyPct: number;
    percentile: number | null;
    totalAttempted: number;
    totalCorrect: number;
    totalIncorrect: number;
    totalUnattempted: number;
    timeSpentSeconds: number;
    sectionScores: Record<
      string,
      {
        score: number;
        maxMarks: number;
        correct: number;
        wrong: number;
        unattempted: number;
      }
    >;
    subjectBreakdown?: Record<
      string,
      {
        score: number;
        maxMarks: number;
        mcqAttempted: number;
        numericalAttempted: number;
        correct: number;
        incorrect: number;
        unattempted: number;
        accuracyPct: number;
      }
    >;
  };
  test: {
    id: string;
    title: string;
    exam: {
      id: string;
      title: string;
      shortName: string;
    };
    pyqReference?: string;
  };
  questions: TestQuestion[];
}

export interface MistakeEntry {
  id: string;
  mistakeTag:
    | 'CONCEPTUAL_GAP'
    | 'CALCULATION_ERROR'
    | 'SILLY_MISTAKE'
    | 'MISREAD_QUESTION'
    | 'RAN_OUT_OF_TIME'
    | 'BLIND_GUESS';
  userNotes?: string;
  revisionStatus: 'NEEDS_ATTENTION' | 'REVISING' | 'MASTERED';
  reviewCount: number;
  lastReviewedAt?: string;
  nextReviewDue?: string;
  createdAt: string;
  question: {
    id: string;
    contentEn: string;
    contentHi?: string;
    options: QuestionOption[];
    correctAnswers: string[];
    numericalAnswer?: number;
    explanationEn: string;
    explanationHi?: string;
    difficulty: string;
    isPYQ: boolean;
    pyqYear?: string;
    pyqShift?: string;
    sourceProvenance: string;
    exam: {
      shortName: string;
      title: string;
      slug: string;
    };
    syllabusNode?: {
      title: string;
      code: string;
    };
  };
  attempt?: {
    id: string;
    submittedAt: string;
    totalScore: number;
  };
}

export interface ReadinessData {
  exam: {
    id: string;
    title: string;
    shortName: string;
    verifiedSyllabusCoveragePct: number;
    totalVerifiedPYQs: number;
  };
  readinessIndex: number;
  confidenceGrade: string;
  metrics: {
    completedAttemptsCount: number;
    avgAccuracy: number;
    avgScorePct: number;
    totalMistakesLogged: number;
    masteredMistakesCount: number;
    remediationRatePct: number;
  };
  projectedScore: {
    min: number;
    central: number;
    max: number;
    totalPossible: number;
  };
  topicBreakdown: {
    topic: string;
    masteryPct: number;
    status: 'STRONG' | 'MODERATE' | 'ATTENTION_NEEDED';
    subject: string;
  }[];
}

export interface SubscriptionPlan {
  id: string;
  code: string;
  examSlug?: string | null;
  name: string;
  description: string;
  priceINR: number;
  priceUSD?: number;
  price: number;
  currency: string;
  billingInterval?: 'ONCE' | 'MONTHLY' | 'YEARLY' | 'ONE_TIME';
  interval?: string;
  durationDays: number;
  testAccessLimit?: number;
  testLimit?: number | null;
  features: string[];
  badge?: string;
  isActive?: boolean;
  isPublished?: boolean;
  displayOrder?: number;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'ACTIVE' | 'EXPIRED' | 'CANCELLED';
  startDate: string;
  endDate?: string;
  paymentId?: string;
  testsRemaining?: number;
  autoRenew: boolean;
  plan: SubscriptionPlan;
}

export interface Payment {
  id: string;
  userId: string;
  planId?: string;
  amount: number;
  currency: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';
  orderId: string;
  paymentId?: string;
  signature?: string;
  method?: string;
  receipt: string;
  notesJson: string;
  errorMessage?: string;
  refundId?: string;
  refundAmount?: number;
  refundReason?: string;
  refundStatus?: string;
  refundedAt?: string;
  createdAt: string;
  plan?: SubscriptionPlan;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface Entitlement {
  id: string;
  userId: string;
  testId?: string;
  planCode: string;
  source: string;
  expiresAt?: string;
  isActive: boolean;
  createdAt: string;
  test?: {
    id: string;
    title: string;
    accessLevel: string;
  };
}

export interface ReferralStats {
  referralCode: string;
  referralCredits: number;
  referralLink: string;
  successfulReferralsCount: number;
  referrals: {
    id: string;
    referredUser: {
      id: string;
      name: string;
      createdAt: string;
    };
    status: string;
    rewardCredits: number;
    createdAt: string;
  }[];
  creditRules: {
    rewardPerReferral: string;
    redemptionRate: string;
  };
}

export interface MonetizationOverview {
  totalStudents: number;
  freeStudentsCount: number;
  premiumStudentsCount: number;
  activePaidSubscriptionsCount: number;
  totalVerifiedRevenue: number;
  successfulTransactionsCount: number;
  failedTransactionsCount: number;
  plans: SubscriptionPlan[];
  recentTransactions: Payment[];
  topTests: {
    id: string;
    title: string;
    accessLevel: string;
    attemptsCount: number;
  }[];
}

export interface UptetExamYear {
  id: string;
  examId: string;
  cycleYear: number;
  actualExamDate: string | null;
  examinationConducted: boolean;
  verificationStatus: 'VERIFIED_OFFICIAL_PYQ' | 'NOT_CONDUCTED' | 'PATTERN_PRACTICE';
  officialSource?: string | null;
  paper1Available: boolean;
  paper2MathAvailable: boolean;
  paper2SocialAvailable: boolean;
  notes?: string | null;
  tests?: UptetTestSummary[];
}

export interface UptetTestSummary {
  id: string;
  title: string;
  examYearId?: string | null;
  cycleYear?: number | null;
  actualExamDate?: string | null;
  paperType?: string | null;
  optionalSubject?: string | null;
  sourceType?: string | null;
  verificationStatus?: string | null;
  originalPdfUrl?: string | null;
  answerKeyUrl?: string | null;
  answerKeyStatus?: string | null;
  isBilingual?: boolean;
  totalAvailableQuestions?: number;
  durationMinutes: number;
  totalMarks: number;
  totalQuestions: number;
  isPremiumOnly: boolean;
  attemptCount: number;
}

export interface UptetArchiveResponse {
  exam: {
    id: string;
    title: string;
    slug: string;
    organizingBody: string;
    officialWebsite: string;
  };
  metrics: {
    totalYearsTracked: number;
    conductedYearsCount: number;
    nonConductedYearsCount: number;
    totalTestsAvailable: number;
    verifiedPyqCount: number;
    patternPracticeCount: number;
  };
  years: UptetExamYear[];
}

export interface UptetAuditReport {
  timestamp: string;
  exam: string;
  yearsAudited: Array<{
    cycleYear: number;
    actualExamDate: string | null;
    conducted: boolean;
    verificationStatus: string;
    officialSource: string | null;
    notes: string | null;
    availablePapers: {
      paper1: boolean;
      paper2MathScience: boolean;
      paper2SocialScience: boolean;
    };
    testsCount: number;
  }>;
  totalTestsTracked: number;
  summary: {
    conductedCycles: number;
    nonConductedCycles: number;
    verifiedPyqPapers: number;
    patternPracticePapers: number;
  };
}

export interface UptetTopicWeakness {
  topic: string;
  subject: string;
  accuracy: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
}

export interface UptetWeaknessAnalysis {
  attemptId: string;
  score: number;
  totalMarks: number;
  accuracyPct: number;
  timeSpentSeconds: number;
  subjectBreakdown: Record<string, { total: number; correct: number; incorrect: number; unattempted: number; timeSpent: number }>;
  weakTopics: UptetTopicWeakness[];
  strongTopics: UptetTopicWeakness[];
  recommendations: string[];
}

export interface UptetWrongQuestion {
  questionId: string;
  questionNumber: number;
  sectionName: string;
  subject?: string;
  topic?: string;
  contentEn: string;
  contentHi?: string;
  options: Array<{ id: string; textEn: string; textHi?: string }>;
  correctAnswers: string[];
  officialAnswer?: string;
  explanationEn: string;
  explanationHi?: string;
  sourceReference?: string;
  previousAttempt: {
    selectedOptionIds: string[];
    isAttempted: boolean;
    isCorrect: boolean;
    status: 'UNATTEMPTED' | 'INCORRECT';
  };
}

export interface UptetWrongQuestionsResponse {
  attemptId: string;
  testTitle: string;
  totalQuestions: number;
  questions: UptetWrongQuestion[];
}

// ============================================================================
// SUPER TET (2012–2025) ARCHIVE & PYQ TYPES
// ============================================================================

export type SuperTetVerificationStatus =
  | 'VERIFIED_OFFICIAL_PYQ'
  | 'VERIFIED_PAPER_KEY_PENDING'
  | 'AUTHENTIC_SOURCE_VERIFICATION_PENDING'
  | 'PRACTICE_QUESTIONS_ONLY'
  | 'NO_CONFIRMED_EXAM_RECORD';

export interface SuperTetExam {
  id: string;
  examName: string;
  examYear: number;
  examDate: string;
  notificationDate?: string | null;
  applicationDates?: string | null;
  conductingAuthority: string;
  notificationSource?: string | null;
  paperSource?: string | null;
  answerKeySource?: string | null;
  expectedQuestions: number;
  totalQuestions: number;
  actualImportedQuestions?: number;
  totalMarks: number;
  duration: number;
  markingScheme: {
    marksPerCorrect?: number;
    negativeMarks?: number;
    questionFormat?: string;
    cutoffGeneral?: string;
    cutoffReserved?: string;
    note?: string;
    isPracticeOnly?: boolean;
  };
  subjectDistribution: Record<string, number>;
  verificationStatus: SuperTetVerificationStatus;
  isPracticePaper: boolean;
  isPublished: boolean;
  linkedTestId?: string | null;
  instructionsEn?: string | null;
  instructionsHi?: string | null;
  notes?: string | null;
}

export interface SuperTetOption {
  id: string;
  textHi: string;
  textEn: string;
}

export interface SuperTetQuestion {
  id: string;
  superTetExamId: string;
  examYear: number;
  questionNumber: number;
  subject: string;
  topic: string;
  questionHindi: string;
  questionEnglish: string;
  options: SuperTetOption[];
  correctAnswer: string;
  answerKeyStatus: 'VERIFIED' | 'REVISED_KEY' | 'DISPUTED' | 'PENDING';
  answerKeySource?: string | null;
  answerKeyVerifiedAt?: string | null;
  explanationHindi: string;
  explanationEnglish: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  sourceUrl?: string | null;
  sourceType: 'OFFICIAL_PYQ' | 'TUTORNOVE_PRACTICE';
  verificationStatus: string;
  languageType: string;
  isPYQ: boolean;
  isActive: boolean;
  revisionHistory?: Array<{
    previousAnswer: string;
    updatedAnswer: string;
    reason: string;
    date: string;
  }>;
}

export interface SuperTetImportReport {
  examYear: number;
  source: string;
  expectedQuestions: number;
  importedQuestions: number;
  newlyInserted: number;
  updatedExisting: number;
  missingQuestionsCount: number;
  missingQuestions: number[];
  duplicateQuestionsCount: number;
  duplicateQuestions: Array<{ questionNumber: number; reason: string }>;
  validationErrorsCount: number;
  validationErrors: Array<{ index: number; questionNumber?: number; error: string }>;
  verifiedAnswers: number;
  pendingAnswers: number;
  finalPublicationStatus: string;
}

export interface AdminStudentSummary {
  totalStudents: number;
  activeInTest: number;
  completedAttempts: number;
  targetExamDistribution: Array<{
    targetExamId: string;
    examName: string;
    shortName: string;
    accentColor: string;
    count: number;
  }>;
  liveExamsDistribution: Array<{
    examName: string;
    shortName: string;
    count: number;
    accentColor: string;
  }>;
}

export interface AdminLiveAttempt {
  id: string;
  startedAt: string;
  elapsedMinutes: number;
  status: string;
  user: {
    id: string;
    name: string;
    email: string;
    studentId?: string;
    targetExamId?: string;
    avatar?: string;
  };
  test: {
    id: string;
    title: string;
    durationMinutes: number;
    totalMarks: number;
    totalQuestions: number;
    type: string;
  };
  exam: {
    id: string;
    title: string;
    shortName: string;
    slug: string;
    accentColor: string;
  };
}

export interface AdminHistoricalAttempt {
  id: string;
  startedAt: string;
  submittedAt?: string | null;
  status: string;
  totalScore: number;
  totalMarks: number;
  accuracyPct: number;
  percentile?: number | null;
  totalAttempted: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalUnattempted: number;
  timeSpentSeconds: number;
  sectionScores?: Record<string, any>;
  user: {
    id: string;
    name: string;
    email: string;
    studentId?: string;
    targetExamId?: string;
    avatar?: string;
  };
  test: {
    id: string;
    title: string;
    durationMinutes: number;
    totalMarks: number;
    totalQuestions: number;
    type: string;
  };
  exam: {
    id: string;
    title: string;
    shortName: string;
    slug: string;
    accentColor: string;
  };
}

export interface AdminStudentActivityResponse {
  summary: AdminStudentSummary;
  liveAttempts: AdminLiveAttempt[];
  history: {
    total: number;
    page: number;
    totalPages: number;
    limit: number;
    attempts: AdminHistoricalAttempt[];
  };
  availableExams: Array<{
    id: string;
    slug: string;
    title: string;
    shortName: string;
    accentColor: string;
  }>;
}

export interface AdminStudentDetailResponse {
  student: {
    id: string;
    name: string;
    email: string;
    studentId?: string;
    role: string;
    targetExamId?: string;
    examSelectedAt?: string;
    avatar?: string;
    referralCredits?: number;
    createdAt: string;
  };
  stats: {
    totalAttempts: number;
    totalCompleted: number;
    avgScore: number;
    avgAccuracy: number;
    bestScore: number;
    lastActiveAt: string;
  };
  attempts: AdminHistoricalAttempt[];
}

export interface AdminAttemptDetailResponse {
  attempt: AdminHistoricalAttempt & {
    responses?: Array<{
      questionId: string;
      selectedOptionIds?: string[];
      numericalAnswer?: number | string;
      status?: string;
      timeSpentSeconds?: number;
    }>;
  };
}
