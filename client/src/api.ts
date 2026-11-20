import {
  User,
  ExamCategory,
  Exam,
  MistakeEntry,
  ReadinessData,
  TestAttemptReview,
  SubscriptionPlan,
  Subscription,
  Payment,
  Entitlement,
  ReferralStats,
  MonetizationOverview,
  UptetArchiveResponse,
  UptetTestSummary,
  UptetAuditReport,
  UptetWeaknessAnalysis,
  UptetWrongQuestionsResponse,
  SuperTetExam,
  SuperTetQuestion,
  SuperTetImportReport,
  AdminStudentActivityResponse,
  AdminStudentDetailResponse,
  AdminAttemptDetailResponse,
} from './types';

const getApiBase = (): string => {
  const envUrl = (import.meta as any).env?.VITE_API_BASE_URL || (import.meta as any).env?.VITE_API_URL;
  if (envUrl) {
    const clean = String(envUrl).replace(/\/+$/, '');
    return clean.endsWith('/api') ? clean : `${clean}/api`;
  }
  if (typeof window !== 'undefined') {
    // If running in production (e.g. Vercel deployment), point directly to live Render backend
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return 'https://all-in-one-japb.onrender.com/api';
    }
  }
  return '/api';
};

export const API_BASE = getApiBase();

export function getStoredToken(): string | null {
  return localStorage.getItem('examverse_token');
}

export function setStoredToken(token: string): void {
  localStorage.setItem('examverse_token', token);
}

export function removeStoredToken(): void {
  localStorage.removeItem('examverse_token');
}

async function request<T>(endpoint: string, options: RequestInit = {}, retryCount = 0): Promise<T> {
  const token = getStoredToken();
  const isAuthEndpoint =
    endpoint.startsWith('/auth/login') ||
    endpoint.startsWith('/auth/register') ||
    endpoint.startsWith('/auth/google') ||
    endpoint.startsWith('/auth/admin-login');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  // If 401 Unauthorized occurs, clear stored token
  if (response.status === 401 && !isAuthEndpoint) {
    removeStoredToken();
    localStorage.removeItem('examverse_user');
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || data.error || 'Network request failed');
  }

  return data as T;
}

export const api = {
  // Auth
  login: async (email: string, password: string) => {
    const res = await request<{ user: User; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    setStoredToken(res.token);
    return res;
  },

  adminLogin: async (email: string, password: string) => {
    const res = await request<{ user: User; token: string }>('/auth/admin-login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    setStoredToken(res.token);
    return res;
  },

  register: async (params: { name: string; email: string; password: string; confirmPassword?: string; targetExamId: string }) => {
    const res = await request<{ user: User; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    setStoredToken(res.token);
    return res;
  },

  googleAuth: async (payload: { idToken?: string; accessToken?: string; email?: string; name?: string; avatar?: string; googleId?: string }) => {
    const res = await request<{ user: User; token: string; requiresExamSelection: boolean; isNewUser: boolean; message: string }>('/auth/google', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    if (res.token) setStoredToken(res.token);
    return res;
  },

  selectTargetExam: async (targetExamId: string) => {
    const res = await request<{ user: User; token: string; message: string; targetExam: string; examSelectedAt: string }>('/auth/select-target-exam', {
      method: 'POST',
      body: JSON.stringify({ targetExamId }),
    });
    if (res.token) setStoredToken(res.token);
    return res;
  },

  updateTargetExam: async (targetExamId: string) => {
    const res = await request<{ user: User; token: string; message: string }>('/auth/target-exam', {
      method: 'PUT',
      body: JSON.stringify({ targetExamId }),
    });
    if (res.token) setStoredToken(res.token);
    return res;
  },

  logout: () => {
    removeStoredToken();
    localStorage.removeItem('examverse_user');
  },

  demoSwitch: async (role: string) => {
    const res = await request<{ user: User; token: string; message: string }>('/auth/demo-switch', {
      method: 'POST',
      body: JSON.stringify({ role }),
    });
    setStoredToken(res.token);
    return res;
  },

  getCurrentUser: async () => {
    const res = await request<{ user: User; token?: string }>('/auth/me');
    if (res.token) {
      setStoredToken(res.token);
    }
    return res;
  },

  getAdminUsers: async (role?: string, search?: string) => {
    const params = new URLSearchParams();
    if (role) params.append('role', role);
    if (search) params.append('search', search);
    return request<{ users: any[]; total: number }>(`/admin/users?${params.toString()}`);
  },

  updateAdminUserRole: async (id: string, role: string) => {
    return request<{ success: boolean; user: any }>(`/admin/users/${id}/role`, {
      method: 'PUT',
      body: JSON.stringify({ role }),
    });
  },

  // Exams
  getCategories: async () => {
    return request<{ categories: ExamCategory[] }>('/exams/categories');
  },

  getExamDirectory: async (search?: string, category?: string) => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (category) params.append('category', category);
    return request<{ exams: Exam[] }>(`/exams/directory?${params.toString()}`);
  },

  getExamProfile: async (slug: string) => {
    return request<{ exam: Exam; audit?: any }>(`/exams/${slug}`);
  },

  getSyllabusTree: async (slug: string) => {
    return request<any>(`/exams/${slug}/syllabus-tree`);
  },

  // Tests
  getTestInfo: async (testId: string) => {
    return request<{ test: any; actualQuestionsCount: number }>(`/tests/${testId}/info`);
  },

  getExamTests: async (examId: string) => {
    return request<{ tests: any[] }>(`/tests/exam/${examId}`);
  },

  startTest: async (testId: string) => {
    return request<{
      attemptId: string;
      startedAt: string;
      timeSpentSeconds: number;
      test: any;
      questions: any[];
      savedResponses: any[];
    }>(`/tests/${testId}/start`, {
      method: 'POST',
    });
  },

  autosaveTest: async (attemptId: string, responses: any[], timeSpentSeconds: number) => {
    return request<{ success: boolean }>(`/tests/attempts/${attemptId}/autosave`, {
      method: 'POST',
      body: JSON.stringify({ responses, timeSpentSeconds }),
    });
  },

  submitTest: async (attemptId: string, responses: any[], timeSpentSeconds: number) => {
    return request<{
      success: boolean;
      attemptId: string;
      score: number;
      totalMarks: number;
      accuracyPct: number;
      percentile: number | null;
      totalCorrect: number;
      totalIncorrect: number;
      totalUnattempted: number;
      sectionBreakdown: any;
    }>(`/tests/attempts/${attemptId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ responses, timeSpentSeconds }),
    });
  },

  getTestReview: async (attemptId: string) => {
    return request<TestAttemptReview>(`/tests/attempts/${attemptId}/review`);
  },

  getMyAttempts: async () => {
    return request<{ attempts: any[] }>('/tests/history/my-attempts');
  },

  // Mistakes
  getMistakes: async (params?: { status?: string; tag?: string; examId?: string }) => {
    const query = new URLSearchParams();
    if (params?.status) query.append('status', params.status);
    if (params?.tag) query.append('tag', params.tag);
    if (params?.examId) query.append('examId', params.examId);
    return request<{
      mistakes: MistakeEntry[];
      summary: {
        totalMistakes: number;
        statusCounts: Record<string, number>;
        tagCounts: Record<string, number>;
      };
    }>(`/mistakes?${query.toString()}`);
  },

  updateMistake: async (id: string, data: { mistakeTag?: string; userNotes?: string; revisionStatus?: string }) => {
    return request<{ success: boolean; entry: any }>(`/mistakes/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  reAttemptMistake: async (id: string, data: { selectedOptionIds?: string[]; numericalValue?: number }) => {
    return request<{
      isCorrect: boolean;
      explanationEn: string;
      explanationHi?: string;
      entry: any;
    }>(`/mistakes/${id}/re-attempt`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Analytics
  getReadiness: async (examId?: string) => {
    const url = examId ? `/analytics/readiness?examId=${examId}` : '/analytics/readiness';
    return request<ReadinessData>(url);
  },

  // AI
  getDeepExplanation: async (questionId: string) => {
    return request<{ explanation: any }>('/ai/deep-explain', {
      method: 'POST',
      body: JSON.stringify({ questionId }),
    });
  },

  generateAIPracticeQuestion: async (params: { examId: string; topicId?: string; difficulty?: string }) => {
    return request<{
      question: any;
      duplicateDetected: boolean;
      validation: any;
    }>('/ai/generate-practice', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },

  // Admin
  getReviewQueue: async () => {
    return request<{ questions: any[] }>('/admin/review-queue');
  },

  reviewQuestion: async (id: string, action: 'APPROVED' | 'REJECTED' | 'CHANGES_REQUESTED', comments: string) => {
    return request<{ success: boolean; question: any }>(`/admin/review-question/${id}`, {
      method: 'POST',
      body: JSON.stringify({ action, comments }),
    });
  },

  getCoverageAudit: async () => {
    return request<any>('/admin/coverage-audit');
  },

  // JEE Main PYQ Management
  getPYQQuestions: async (params?: { year?: string; shift?: string; subject?: string; status?: string }) => {
    const q = new URLSearchParams();
    if (params?.year) q.append('year', params.year);
    if (params?.shift) q.append('shift', params.shift);
    if (params?.subject) q.append('subject', params.subject);
    if (params?.status) q.append('status', params.status);
    return request<{ count: number; questions: any[] }>(`/admin/pyq/questions?${q.toString()}`);
  },

  updatePYQQuestion: async (id: string, data: any) => {
    return request<{ success: boolean; question: any }>(`/admin/pyq/questions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  updatePYQStatus: async (id: string, verificationStatus: string, isPublished: boolean) => {
    return request<{ success: boolean; question: any }>(`/admin/pyq/questions/${id}/status`, {
      method: 'POST',
      body: JSON.stringify({ verificationStatus, isPublished }),
    });
  },

  exportPYQQuestions: async (year?: string) => {
    const url = year ? `/api/admin/pyq/export?year=${year}` : '/api/admin/pyq/export';
    window.open(url, '_blank');
  },

  // Monetization & Subscription
  getMonetizationConfig: async () => {
    return request<{
      keyId: string;
      currency: string;
      isGatewayConfigured: boolean;
      supportedCurrencies: string[];
      activeGateway: string;
    }>('/monetization/config');
  },

  getSubscriptionPlans: async (examSlug?: string) => {
    const q = examSlug ? `?examSlug=${encodeURIComponent(examSlug)}` : '';
    return request<{ plans: SubscriptionPlan[] }>(`/monetization/plans${q}`);
  },

  getAdminExamPlans: async (examSlug: string) => {
    return request<{ success: boolean; examSlug: string; plans: SubscriptionPlan[] }>(
      `/monetization/admin/exam-plans/${encodeURIComponent(examSlug)}`
    );
  },

  validateCoupon: async (code: string, planId?: string, examSlug?: string) => {
    return request<{
      valid: boolean;
      code: string;
      discountPct: number;
      examSlug?: string;
      originalPrice?: number;
      discountedPrice?: number;
    }>('/monetization/validate-coupon', {
      method: 'POST',
      body: JSON.stringify({ code, planId, examSlug }),
    });
  },

  getMySubscription: async () => {
    return request<{
      user: User;
      subscription: Subscription | null;
      effectivePlan: SubscriptionPlan;
      entitlements: Entitlement[];
      recentPayments: Payment[];
      isPremium: boolean;
      testsRemaining: number;
      referralCredits: number;
      referralCode: string;
    }>('/monetization/my-subscription');
  },

  checkTestEntitlement: async (testId: string) => {
    return request<{
      entitled: boolean;
      accessLevel: 'FREE' | 'PREMIUM';
      reason: string;
      canUnlockWithPack?: boolean;
      testsRemainingInPack?: number;
      canRedeemCredit?: boolean;
      referralCredits?: number;
    }>(`/monetization/test-entitlement/${testId}`);
  },

  createPaymentOrder: async (planId: string, couponCode?: string, examSlug?: string, planCode?: string) => {
    return request<{
      orderId?: string;
      order_id?: string;
      paymentSessionId?: string;
      payment_session_id?: string;
      cashfreeMode?: 'sandbox' | 'production';
      checkoutUrl?: string;
      gateway?: string;
      amount?: number;
      originalPrice?: number;
      discountAmount?: number;
      couponCode?: string;
      amountPaise?: number;
      currency?: string;
      keyId?: string;
      planName?: string;
      planCode?: string;
      description?: string;
      receipt?: string;
      paymentDbId?: string;
      isLiveGateway?: boolean;
      freePlanActivated?: boolean;
      message?: string;
    }>('/monetization/create-order', {
      method: 'POST',
      body: JSON.stringify({ planId, planCode, couponCode, examSlug }),
    });
  },

  verifyCashfreePayment: async (orderId: string) => {
    return request<{
      success: boolean;
      pending?: boolean;
      message: string;
      payment?: Payment;
      subscription?: Subscription;
    }>('/monetization/verify-cashfree', {
      method: 'POST',
      body: JSON.stringify({ orderId }),
    });
  },

  submitUpiPayment: async (data: {
    planId?: string;
    planCode?: string;
    testId?: string;
    utr: string;
    amount: number;
    examSlug?: string;
  }) => {
    return request<{
      success: boolean;
      message: string;
      payment?: Payment;
      subscription?: Subscription;
      purchasedTestId?: string;
    }>('/monetization/submit-upi-payment', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateMerchantUpi: async (upiId: string) => {
    return request<{ success: boolean; merchantUpiId: string; message: string }>('/monetization/admin/merchant-upi', {
      method: 'POST',
      body: JSON.stringify({ upiId }),
    });
  },

  updateCashfreeConfig: async (appId: string, secretKey: string, environment: string = 'PRODUCTION') => {
    return request<{ success: boolean; message: string; cashfreeAppId: string; cashfreeMode: string; isLive: boolean }>('/monetization/admin/cashfree-config', {
      method: 'POST',
      body: JSON.stringify({ appId, secretKey, environment }),
    });
  },

  verifyPayment: async (orderId: string, paymentId: string, signature?: string) => {
    return request<{
      success: boolean;
      message: string;
      payment: Payment;
      subscription: Subscription;
    }>('/monetization/verify-payment', {
      method: 'POST',
      body: JSON.stringify({ orderId, paymentId, signature }),
    });
  },

  getMyPayments: async () => {
    return request<{ payments: Payment[] }>('/monetization/my-payments');
  },

  getReferralStats: async () => {
    return request<ReferralStats>('/monetization/referral/me');
  },

  redeemReferralCredit: async (testId: string) => {
    return request<{
      success: boolean;
      message: string;
      remainingCredits: number;
    }>('/monetization/referral/redeem', {
      method: 'POST',
      body: JSON.stringify({ testId }),
    });
  },

  getAdminMonetizationOverview: async () => {
    return request<any>('/monetization/admin/overview');
  },

  getContentPricing: async (params?: { type?: string; search?: string; accessMode?: string }) => {
    const q = new URLSearchParams();
    if (params?.type) q.append('type', params.type);
    if (params?.search) q.append('search', params.search);
    if (params?.accessMode) q.append('accessMode', params.accessMode);
    const qs = q.toString() ? `?${q.toString()}` : '';
    return request<{ exams: any[]; tests: any[] }>(`/monetization/admin/content-pricing${qs}`);
  },

  updateContentPricing: async (data: {
    contentType: 'EXAM' | 'TEST';
    contentId: string;
    accessMode: string;
    priceINR?: number;
    originalPriceINR?: number;
    discountPercent?: number;
    isPublished?: boolean;
    notes?: string;
  }) => {
    return request<{ success: boolean; message: string; updated: any }>('/monetization/admin/content-pricing', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  createAdminPlan: async (data: any) => {
    return request<{ success: boolean; message: string; plan: any }>('/monetization/admin/plans', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateAdminPlan: async (id: string, data: any) => {
    return request<{ success: boolean; message: string; plan: SubscriptionPlan }>(`/monetization/admin/plans/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...data,
        price: data.priceINR !== undefined ? data.priceINR : data.price,
        originalPrice: data.originalPriceINR !== undefined ? data.originalPriceINR : data.originalPrice,
        discountPct: data.discountPercent !== undefined ? data.discountPercent : data.discountPct,
        isPublished: data.isActive !== undefined ? data.isActive : data.isPublished,
      }),
    });
  },

  deleteAdminPlan: async (id: string) => {
    return request<{ success: boolean; message: string }>(`/monetization/admin/plans/${id}`, {
      method: 'DELETE',
    });
  },

  getAdminAuditLogs: async (params?: { page?: number; limit?: number }) => {
    const q = new URLSearchParams();
    if (params?.page) q.append('page', params.page.toString());
    if (params?.limit) q.append('limit', params.limit.toString());
    const qs = q.toString() ? `?${q.toString()}` : '';
    return request<{ auditLogs: any[]; total: number }>(`/monetization/admin/audit-logs${qs}`);
  },

  processAdminRefund: async (paymentId: string, reason?: string) => {
    return request<{ success: boolean; message: string; refundId: string }>('/monetization/admin/refund', {
      method: 'POST',
      body: JSON.stringify({ paymentId, reason }),
    });
  },

  // UPTET 2016-2025 Archive APIs
  getUptetArchive: async () => {
    return request<UptetArchiveResponse>('/uptet/archive');
  },

  getUptetTests: async (params?: {
    year?: number | string;
    paperType?: string;
    optionalSubject?: string;
    sourceType?: string;
    search?: string;
  }) => {
    const query = new URLSearchParams();
    if (params?.year) query.append('year', String(params.year));
    if (params?.paperType) query.append('paperType', params.paperType);
    if (params?.optionalSubject) query.append('optionalSubject', params.optionalSubject);
    if (params?.sourceType) query.append('sourceType', params.sourceType);
    if (params?.search) query.append('search', params.search);
    return request<{ tests: UptetTestSummary[]; total: number }>(`/uptet/tests?${query.toString()}`);
  },

  getUptetAudit: async () => {
    return request<UptetAuditReport>('/uptet/audit');
  },

  getUptetWeaknessAnalysis: async (attemptId: string) => {
    return request<UptetWeaknessAnalysis>(`/uptet/attempts/${attemptId}/weakness-analysis`);
  },

  getUptetWrongQuestions: async (attemptId: string) => {
    return request<UptetWrongQuestionsResponse>(`/uptet/attempts/${attemptId}/wrong-questions`);
  },

  // SUPER TET 2012-2025 Archive & Question Bank APIs
  getSuperTetYears: async () => {
    return request<{ archivePeriod: string; totalYearsTracked: number; conductedYears: number[]; years: SuperTetExam[] }>('/super-tet/years');
  },

  getSuperTetExams: async (includeUnpublished = false) => {
    return request<{ exams: SuperTetExam[] }>(`/super-tet/exams?includeUnpublished=${includeUnpublished}`);
  },

  getSuperTetExamByYear: async (year: number) => {
    return request<{ exam: SuperTetExam & { actualSubjectBreakdown?: Record<string, number> } }>(`/super-tet/exams/${year}`);
  },

  getSuperTetQuestions: async (
    year: number,
    params?: {
      subject?: string;
      search?: string;
      language?: string;
      verificationStatus?: string;
      isPractice?: boolean;
      sort?: string;
      page?: number;
      limit?: number | 'all';
    }
  ) => {
    const query = new URLSearchParams();
    if (params?.subject) query.append('subject', params.subject);
    if (params?.search) query.append('search', params.search);
    if (params?.language) query.append('language', params.language);
    if (params?.verificationStatus) query.append('verificationStatus', params.verificationStatus);
    if (params?.isPractice !== undefined) query.append('isPractice', String(params.isPractice));
    if (params?.sort) query.append('sort', params.sort);
    if (params?.page) query.append('page', String(params.page));
    query.append('limit', String(params?.limit ?? 'all'));
    return request<{ examYear: number; examName: string; totalCount: number; questions: SuperTetQuestion[] }>(
      `/super-tet/questions/${year}?${query.toString()}`
    );
  },

  getSuperTetPracticeTests: async () => {
    return request<{ note: string; practiceTests: SuperTetExam[] }>('/super-tet/practice-tests');
  },

  getSuperTetPaperMetadata: async (year: number, isPractice = false) => {
    return request<{ metadata: any }>(`/super-tet/papers/${year}/metadata?isPractice=${isPractice}`);
  },

  getSuperTetBookmarks: async () => {
    return request<{ bookmarks: Array<{ id: string; questionId: string; notes?: string; question: SuperTetQuestion }> }>('/super-tet/bookmarks');
  },

  addSuperTetBookmark: async (questionId: string, notes?: string) => {
    return request<{ message: string; bookmark: any }>('/super-tet/bookmarks', {
      method: 'POST',
      body: JSON.stringify({ questionId, notes }),
    });
  },

  removeSuperTetBookmark: async (questionId: string) => {
    return request<{ message: string }>(`/super-tet/bookmarks/${questionId}`, {
      method: 'DELETE',
    });
  },

  // SUPER TET Admin APIs
  upsertSuperTetYear: async (data: any) => {
    return request<{ message: string; exam: SuperTetExam }>('/super-tet/admin/years', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  importSuperTetQuestions: async (data: { examYear: number; isPracticePaper?: boolean; source: string; questions: any[]; publishIfComplete?: boolean }) => {
    return request<{ importReport: SuperTetImportReport }>('/super-tet/admin/import', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateSuperTetQuestion: async (id: string, data: any) => {
    return request<{ message: string; question: SuperTetQuestion }>(`/super-tet/admin/questions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  publishSuperTetExam: async (year: number, isPublished: boolean, isPracticePaper = false, allowPartial = false) => {
    return request<{ message: string; exam: SuperTetExam }>(`/super-tet/admin/exams/${year}/publish`, {
      method: 'PATCH',
      body: JSON.stringify({ isPublished, isPracticePaper, allowPartial }),
    });
  },

  getSuperTetAdminAudit: async (year: number, isPractice = false) => {
    return request<{
      exam: SuperTetExam;
      actualQuestionsCount: number;
      expectedQuestions: number;
      missingNumbers: number[];
      textDuplicates: Array<{ snippet: string; questionNumbers: number[] }>;
      questions: SuperTetQuestion[];
    }>(`/super-tet/admin/audit/${year}?isPractice=${isPractice}`);
  },
  // Multi-Exam Super Admin APIs
  getAdminExams: async () => {
    return request<{ categories: ExamCategory[]; exams: Exam[] }>('/admin/exams');
  },

  createAdminExam: async (data: any) => {
    return request<{ success: boolean; message: string; exam: Exam }>('/admin/exams', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateAdminExam: async (id: string, data: any) => {
    return request<{ success: boolean; exam: Exam }>(`/admin/exams/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  publishAdminExam: async (id: string, data: { status?: string; isComingSoon?: boolean; accessMode?: string }) => {
    return request<{ success: boolean; message: string; exam: Exam }>(`/admin/exams/${id}/publish`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  getAdminExamTests: async (examId: string) => {
    return request<{ tests: any[] }>(`/admin/exams/${examId}/tests`);
  },

  createAdminTest: async (data: any) => {
    return request<{ success: boolean; test: any }>('/admin/tests', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  publishAdminTest: async (testId: string, isPublished: boolean) => {
    return request<{ success: boolean; test: any }>(`/admin/tests/${testId}/publish`, {
      method: 'PATCH',
      body: JSON.stringify({ isPublished }),
    });
  },

  getAdminTestQuestions: async (testId: string) => {
    return request<{ questions: any[] }>(`/admin/tests/${testId}/questions`);
  },

  createAdminQuestion: async (data: any) => {
    return request<{ success: boolean; question: any }>('/admin/questions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  deleteAdminQuestion: async (id: string) => {
    return request<{ success: boolean; message: string }>(`/admin/questions/${id}`, {
      method: 'DELETE',
    });
  },

  reorderAdminTestQuestions: async (testId: string, testQuestionIdA: string, testQuestionIdB: string) => {
    return request<{ success: boolean; message: string }>(`/admin/tests/${testId}/reorder`, {
      method: 'POST',
      body: JSON.stringify({ testQuestionIdA, testQuestionIdB }),
    });
  },

  // Student Live Activity & Exam Attempt History
  getAdminStudentActivity: async (params?: { search?: string; examSlug?: string; status?: string; page?: number; limit?: number }) => {
    const q = new URLSearchParams();
    if (params?.search) q.append('search', params.search);
    if (params?.examSlug) q.append('examSlug', params.examSlug);
    if (params?.status) q.append('status', params.status);
    if (params?.page) q.append('page', params.page.toString());
    if (params?.limit) q.append('limit', params.limit.toString());
    const queryStr = q.toString() ? `?${q.toString()}` : '';
    return request<AdminStudentActivityResponse>(`/admin/students/activity${queryStr}`);
  },

  getAdminStudentHistory: async (userId: string) => {
    return request<AdminStudentDetailResponse>(`/admin/students/${userId}/history`);
  },

  getAdminAttemptDetail: async (attemptId: string) => {
    return request<AdminAttemptDetailResponse>(`/admin/attempts/${attemptId}/detail`);
  },

  // =========================================================================
  // WEEKLY LIVE MOCK TEST MANAGEMENT & STUDENT API
  // =========================================================================
  getAdminLiveSchedules: async (params?: { examId?: string; status?: string; weekStart?: string; weekEnd?: string }) => {
    const q = new URLSearchParams();
    if (params?.examId) q.append('examId', params.examId);
    if (params?.status) q.append('status', params.status);
    if (params?.weekStart) q.append('weekStart', params.weekStart);
    if (params?.weekEnd) q.append('weekEnd', params.weekEnd);
    const qs = q.toString() ? `?${q.toString()}` : '';
    return request<{ schedules: any[]; serverTime: string; timezone: string }>(`/live-tests/admin/schedules${qs}`);
  },

  getAdminLiveCalendar: async (referenceDate?: string) => {
    const qs = referenceDate ? `?referenceDate=${encodeURIComponent(referenceDate)}` : '';
    return request<{ weekStart: string; weekEnd: string; timezone: string; calendarDays: any[] }>(`/live-tests/admin/calendar${qs}`);
  },

  createLiveSchedule: async (data: any) => {
    return request<{ success: boolean; message: string; schedule: any }>('/live-tests/admin/schedules', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateLiveSchedule: async (id: string, data: any) => {
    return request<{ success: boolean; message: string; schedule: any }>(`/live-tests/admin/schedules/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  cancelLiveSchedule: async (id: string, reason: string) => {
    return request<{ success: boolean; message: string; schedule: any }>(`/live-tests/admin/schedules/${id}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ reason }),
    });
  },

  rescheduleLiveSchedule: async (id: string, data: { newStartAt: string; newEndAt?: string; newDate?: string; reason?: string }) => {
    return request<{ success: boolean; message: string; schedule: any }>(`/live-tests/admin/schedules/${id}/reschedule`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  duplicateLiveSchedule: async (id: string, data?: { newStartAt?: string; newTitle?: string }) => {
    return request<{ success: boolean; message: string; schedule: any }>(`/live-tests/admin/schedules/${id}/duplicate`, {
      method: 'POST',
      body: JSON.stringify(data || {}),
    });
  },

  createRecurringLiveSeries: async (data: any) => {
    return request<{ success: boolean; message: string; seriesId: string; schedules: any[] }>('/live-tests/admin/schedules/recurring', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getLiveTestMonitor: async (id: string) => {
    return request<any>(`/live-tests/admin/schedules/${id}/monitor`);
  },

  publishLiveTestResults: async (id: string) => {
    return request<{ success: boolean; message: string; schedule: any }>(`/live-tests/admin/schedules/${id}/publish-results`, {
      method: 'POST',
    });
  },

  // Student API
  getStudentLiveSchedules: async () => {
    return request<{
      serverTime: string;
      timezone: string;
      categories: {
        liveNow: any[];
        registrationOpen: any[];
        myRegistered: any[];
        upcoming: any[];
        completed: any[];
      };
      allSchedules: any[];
    }>('/live-tests/student/schedules');
  },

  registerForLiveTest: async (id: string) => {
    return request<{ success: boolean; message: string; registration: any; startAtIST?: string }>(`/live-tests/student/schedules/${id}/register`, {
      method: 'POST',
    });
  },

  startLiveTestSession: async (id: string) => {
    return request<any>(`/live-tests/student/schedules/${id}/start`, {
      method: 'POST',
    });
  },

  getLiveTestResults: async (id: string) => {
    return request<any>(`/live-tests/student/schedules/${id}/results`);
  },

  getSystemTime: async () => {
    return request<{ serverTimeUTC: string; timestamp: number; timezone: string; istFormatted: string }>('/live-tests/time');
  },
};