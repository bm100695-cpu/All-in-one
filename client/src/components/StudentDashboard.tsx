import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  BookOpen,
  AlertCircle,
  BarChart2,
  ChevronRight,
  Target,
  Sparkles,
  Gift,
  Lock,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { User } from '../types';
import { api } from '../api';

interface StudentDashboardProps {
  currentUser: User | null;
  onStartExam: (testId: string) => void;
  onOpenAttemptReview: (attemptId: string) => void;
  onNavigateToMockTests: () => void;
  onNavigateToPractice: () => void;
  onNavigateToPerformance: () => void;
  onNavigateToUptet?: () => void;
  onNavigateToSuperTet?: () => void;
  onOpenExamPortal?: (slug: string) => void;
  onOpenPricingModal?: (lockedTest?: any) => void;
  onOpenReferralModal?: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  currentUser,
  onStartExam,
  onOpenAttemptReview,
  onNavigateToMockTests,
  onNavigateToPractice,
  onNavigateToPerformance,
  onNavigateToUptet,
  onNavigateToSuperTet,
  onOpenExamPortal,
  onOpenPricingModal,
  onOpenReferralModal,
}) => {
  const [attempts, setAttempts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [flagshipTest, setFlagshipTest] = useState<any>(null);
  const [activeAttempt, setActiveAttempt] = useState<any>(null);
  const [subInfo, setSubInfo] = useState<any>(null);
  const [examInfo, setExamInfo] = useState<any>(null);
  const [availableTests, setAvailableTests] = useState<any[]>([]);
  const [checkingDashboardTestId, setCheckingDashboardTestId] = useState<string | null>(null);

  const examSlug = (currentUser?.targetExamId || 'jee-main').toLowerCase();
  const isSuperTet = examSlug === 'super-tet';
  const isUptet = examSlug === 'uptet';

  useEffect(() => {
    loadDashboardData();
  }, [examSlug]);

  const loadDashboardData = async () => {
    setLoading(true);
    setAvailableTests([]);
    try {
      const [attemptsRes, profileRes, subRes] = await Promise.all([
        api.getMyAttempts().catch(() => ({ attempts: [] })),
        api.getExamProfile(examSlug).catch(() => null),
        api.getMySubscription().catch(() => null),
      ]);

      let visiblePortalTests: any[] = profileRes?.exam?.tests || [];
      if (profileRes?.exam) {
        setExamInfo(profileRes.exam);
        try {
          const visibleTests = await api.getExamTests(profileRes.exam.id);
          visiblePortalTests = visibleTests?.tests || [];
          setAvailableTests(visiblePortalTests);
        } catch {
          // The profile endpoint remains a safe display-only fallback.
          setAvailableTests(visiblePortalTests);
        }
      }

      const myAttempts = attemptsRes?.attempts || [];
      const filteredAttempts = myAttempts.filter((a: any) => {
        if (a.test?.exam?.slug) return a.test.exam.slug === examSlug;
        if (a.test?.examId && profileRes?.exam?.id) return a.test.examId === profileRes.exam.id;
        return true;
      });

      setAttempts(filteredAttempts);
      setSubInfo(subRes);

      const inProgress = filteredAttempts.find((a: any) => a.status === 'IN_PROGRESS');
      setActiveAttempt(inProgress || null);

      if (isSuperTet) {
        try {
          const stRes = await api.getSuperTetExams();
          const flag = stRes.exams.find((e) => e.examYear === 2019 && !e.isPracticePaper && e.linkedTestId);
          if (flag?.linkedTestId) {
            setFlagshipTest({ id: flag.linkedTestId, title: flag.examName });
          }
        } catch {
          // ignore
        }
      } else if (isUptet) {
        try {
          const uptetRes = await api.getUptetTests();
          const flag = uptetRes.tests.find((t: any) => t.title?.includes('2025 Benchmark')) || uptetRes.tests[0];
          setFlagshipTest(flag);
          setAvailableTests(uptetRes.tests || []);
        } catch {
          // ignore
        }
      } else if (visiblePortalTests.length) {
        const flag = visiblePortalTests.find((t: any) => t.accessLevel === 'FREE') || visiblePortalTests[0];
        setFlagshipTest(flag);
      } else {
        setFlagshipTest(null);
      }
    } catch (err) {
      console.error('Error loading dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const completedAttempts = attempts.filter((a) => a.status === 'COMPLETED');
  const totalScore = completedAttempts.reduce((sum, a) => sum + (a.totalScore || 0), 0);
  const avgScore = completedAttempts.length > 0 ? Math.round(totalScore / completedAttempts.length) : 0;
  const avgAccuracy = completedAttempts.length > 0
    ? Math.round(completedAttempts.reduce((sum, a) => sum + (a.accuracyPct || 0), 0) / completedAttempts.length)
    : 0;
  const totalTimeSpentSec = completedAttempts.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0);
  const totalHours = (totalTimeSpentSec / 3600).toFixed(1);

  const defaultMaxMap: Record<string, number> = {
    'uptet': 150,
    'super-tet': 150,
    'neet-ug': 720,
    'upsc-prelims': 200,
    'ssc-cgl-tier1': 200,
    'gate-cs': 100,
    'jee-main': 300,
  };
  const maxExamScore = examInfo?.patterns?.[0]?.totalMarks || defaultMaxMap[examSlug] || 100;
  const isFreeTest = (test: any) => test.accessType !== 'premium' && test.accessLevel !== 'PREMIUM' && test.accessMode !== 'PREMIUM' && test.accessMode !== 'PAID';
  const displayTests = availableTests.filter((test) => test.accessMode !== 'DISABLED');
  const totalExamTests = displayTests.length;
  const freeExamTests = displayTests.filter(isFreeTest).length;
  const paidExamTests = Math.max(0, totalExamTests - freeExamTests);
  const isPremium = subInfo?.isPremium || false;
  const planName = subInfo?.subscription?.plan?.name || subInfo?.effectivePlan?.name || 'Free Starter Plan';
  const referralCredits = subInfo?.referralCredits ?? currentUser?.referralCredits ?? 0;
  const subscriptionEndDate = subInfo?.subscription?.endDate
    ? new Date(subInfo.subscription.endDate)
    : null;
  const subscriptionDetail = subscriptionEndDate && !Number.isNaN(subscriptionEndDate.getTime())
    ? `Valid through ${subscriptionEndDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}`
    : isPremium
      ? 'Premium access is active'
      : 'Free access is active';
  const attemptsByTestId = new Map(attempts.map((attempt) => [attempt.testId, attempt]));

  const handleDashboardTestAction = async (test: any) => {
    const existingAttempt = attemptsByTestId.get(test.id);
    if (existingAttempt?.status === 'IN_PROGRESS') return onStartExam(test.id);
    if (existingAttempt?.status === 'COMPLETED') return onOpenAttemptReview(existingAttempt.id);
    if (isFreeTest(test)) return onStartExam(test.id);

    setCheckingDashboardTestId(test.id);
    try {
      const entitlement = await api.checkTestEntitlement(test.id);
      if (entitlement.entitled) onStartExam(test.id);
      else onOpenPricingModal?.({ id: test.id, title: test.title, priceINR: test.priceINR ?? test.price });
    } catch {
      // A failed entitlement check must never unlock a premium paper.
      onOpenPricingModal?.({ id: test.id, title: test.title, priceINR: test.priceINR ?? test.price });
    } finally {
      setCheckingDashboardTestId(null);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1440px] space-y-6 pb-8">
      {/* 1. Welcome & Summary Bar */}
      <section className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white px-5 py-6 shadow-card sm:px-7 sm:py-7">
        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-50" aria-hidden="true" />
        <div className="relative flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-tn-blue">Student dashboard</p>
            <h1 className="text-2xl font-bold tracking-tight text-tn-navy sm:text-[28px]">
            Welcome back, {currentUser?.name?.split(' ')[0] || 'Candidate'}
            </h1>
            <p className="mt-1 text-sm text-tn-muted">Continue your preparation and track your exam progress.</p>
            <div className="mt-3 inline-flex max-w-full items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-600">
              <Target className="h-3.5 w-3.5 shrink-0 text-tn-blue" />
              <span className="truncate">Preparing for <strong className="font-semibold text-tn-navy">{examInfo?.name || examSlug.toUpperCase()}</strong>{examInfo?.conductingBody ? ` · ${examInfo.conductingBody}` : ''}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap xl:justify-end">
            <button
              onClick={() => activeAttempt?.testId ? onStartExam(activeAttempt.testId) : flagshipTest?.id ? handleDashboardTestAction(flagshipTest) : onNavigateToMockTests()}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-tn-blue px-3.5 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-tn-blue-hover"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Continue Preparation</span>
            </button>
            <button
              onClick={() => onOpenExamPortal ? onOpenExamPortal(examSlug) : isSuperTet ? onNavigateToSuperTet?.() : isUptet ? onNavigateToUptet?.() : onNavigateToMockTests()}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-tn-border bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-tn-blue" />
              <span>Explore Mock Tests</span>
            </button>
            <button
              onClick={onNavigateToPerformance}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              <BarChart2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>View Results</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Subscription Status & Referral Balance Banner */}
      <section className="p-4 sm:p-5 rounded-2xl border border-slate-700 border-l-4 border-l-blue-400 bg-tn-navy shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-200 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">{planName}</span>
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${isPremium
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-blue-500/20 text-blue-100 border border-blue-400/30'
                  }`}
              >
                {isPremium ? 'All-Access Active' : 'Active Tier'}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              {subInfo?.subscription?.testsRemaining != null
                ? `${subInfo.subscription.testsRemaining} test unlock${subInfo.subscription.testsRemaining !== 1 ? 's' : ''} remaining in pack`
                : isPremium
                  ? `Unlimited access to all available ${examInfo?.shortName || examSlug} tests & verified solutions`
                  : `${freeExamTests} free paper${freeExamTests !== 1 ? 's' : ''} available in ${examInfo?.shortName || examSlug}. Upgrade for full exam series.`}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-end md:self-center">
          {/* Referral Button */}
          <button
            onClick={onOpenReferralModal}
            className="px-3 py-1.5 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <span>Refer & Earn ({referralCredits} Credit{referralCredits !== 1 ? 's' : ''})</span>
          </button>

          {/* Upgrade Button */}
          {!isPremium && (
            <button
              onClick={() => onOpenPricingModal?.()}
              className="px-3.5 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Upgrade Plan</span>
            </button>
          )}
        </div>
      </section>

      {/* 3. Resume In-Progress Attempt Banner (if any) */}
      {activeAttempt && (
        <div className="p-4 rounded-lg bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-amber-900">
                You have an incomplete test session in progress
              </p>
              <p className="text-[11px] text-amber-800/80">
                Test: {activeAttempt.test?.title || 'JEE Main Mock Test'} • Started {new Date(activeAttempt.startedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <button
            onClick={() => onStartExam(activeAttempt.testId)}
            className="px-4 py-1.5 rounded bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Resume Test
          </button>
        </div>
      )}

      {/* 4. Student Overview — values are derived from the existing portal, attempt and subscription APIs. */}
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="min-h-[142px] rounded-xl border border-blue-100 bg-white p-4 shadow-subtle transition-shadow hover:shadow-card">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-tn-muted">Available Mock Tests</p><FileCheck2 className="h-4 w-4 text-tn-blue" /></div>
          <p className="mt-5 text-2xl font-bold tabular-nums text-tn-navy">{totalExamTests}</p>
          <p className="mt-1 text-[10px] text-tn-muted">For {examInfo?.shortName || examSlug.toUpperCase()}</p>
        </div>

        <div className="min-h-[142px] rounded-xl border border-blue-100 bg-white p-4 shadow-subtle transition-shadow hover:shadow-card">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-tn-muted">Tests Attempted</p><RotateCcw className="h-4 w-4 text-tn-blue" /></div>
          <p className="mt-5 text-2xl font-bold tabular-nums text-tn-navy">{attempts.length}</p>
          <p className="mt-1 text-[10px] text-tn-muted">{completedAttempts.length} completed submission{completedAttempts.length === 1 ? '' : 's'}</p>
        </div>

        <div className="min-h-[142px] rounded-xl border border-emerald-100 bg-white p-4 shadow-subtle transition-shadow hover:shadow-card">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-tn-muted">Average Score / Accuracy</p><TrendingUp className="h-4 w-4 text-emerald-600" /></div>
          <p className="mt-5 text-2xl font-bold tabular-nums text-tn-navy">{avgAccuracy}%</p>
          <p className="mt-1 text-[10px] text-tn-muted">{avgScore} / {maxExamScore} average score</p>
        </div>

        <div className="min-h-[142px] rounded-xl border border-violet-100 bg-white p-4 shadow-subtle transition-shadow hover:shadow-card">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-tn-muted">Current Subscription</p><ShieldCheck className="h-4 w-4 text-violet-600" /></div>
          <p className="mt-5 truncate text-lg font-bold text-tn-navy" title={planName}>{planName}</p>
          <p className="mt-1 text-[10px] text-tn-muted">{subscriptionDetail}</p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs sm:grid-cols-3">
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4"><span className="text-tn-muted">Time in tests</span><span className="font-semibold tabular-nums text-tn-navy">{totalHours} hrs</span></div>
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2 sm:border-b-0 sm:border-r sm:pb-0 sm:px-4"><span className="text-tn-muted">Free tests</span><span className="font-semibold tabular-nums text-emerald-700">{freeExamTests}</span></div>
        <div className="flex items-center justify-between gap-3 sm:pl-4"><span className="text-tn-muted">Premium tests</span><span className="font-semibold tabular-nums text-violet-700">{paidExamTests}</span></div>
      </div>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-4 px-1">
          <div>
            <h2 className="text-sm font-bold text-tn-navy">Available Mock Tests</h2>
            <p className="mt-0.5 text-xs text-tn-muted">Live papers available for your selected exam portal.</p>
          </div>
          <button onClick={onNavigateToMockTests} className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-tn-blue hover:underline">
            View all <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[0, 1, 2].map((item) => <div key={item} className="h-44 animate-pulse rounded-xl border border-slate-200 bg-white" />)}
          </div>
        ) : displayTests.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-8 text-center shadow-subtle">
            <FileCheck2 className="mx-auto h-5 w-5 text-tn-blue" />
            <p className="mt-2 text-sm font-semibold text-tn-navy">No live mock tests are available for this portal.</p>
            <p className="mt-1 text-xs text-tn-muted">A paper appears here after it is published and activated by the administrator.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {displayTests.slice(0, 6).map((test) => {
              const attempt = attemptsByTestId.get(test.id);
              const isPremiumTest = !isFreeTest(test);
              const isComingSoon = test.accessMode === 'COMING_SOON';
              const isChecking = checkingDashboardTestId === test.id;
              const actionLabel = attempt?.status === 'IN_PROGRESS' ? 'Resume' : attempt?.status === 'COMPLETED' ? 'View Result' : isPremiumTest ? 'Unlock & Start' : 'Start Test';
              return (
                <article key={test.id} className="flex min-h-44 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-subtle transition-shadow hover:shadow-card">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-md border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-tn-blue">{examInfo?.shortName || examSlug.toUpperCase()}</span>
                    <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold ${isPremiumTest ? 'border-violet-200 bg-violet-50 text-violet-700' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}>
                      {isPremiumTest ? <Lock className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}{isPremiumTest ? 'Premium' : 'Free'}
                    </span>
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-sm font-bold leading-snug text-tn-navy">{test.title}</h3>
                  <p className="mt-1 text-[11px] text-tn-muted">{test._count?.testQuestions ?? test.totalQuestions ?? 0} questions <span aria-hidden="true">·</span> {test.durationMinutes || 0} min <span aria-hidden="true">·</span> {test.totalMarks || 0} marks</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <span className="text-[11px] font-medium text-slate-500">{isComingSoon ? 'Releases soon' : attempt?.status === 'COMPLETED' ? 'Completed' : attempt?.status === 'IN_PROGRESS' ? 'In progress' : 'Ready to attempt'}</span>
                    <button type="button" disabled={isChecking || isComingSoon} onClick={() => handleDashboardTestAction(test)} className="inline-flex min-h-8 shrink-0 items-center gap-1 rounded-lg bg-tn-blue px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-tn-blue-hover disabled:cursor-not-allowed disabled:opacity-60">
                      {isChecking ? 'Checking…' : <><Play className="h-3 w-3" />{isComingSoon ? 'Coming Soon' : actionLabel}</>}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. Main Dashboard Grid (2 Columns: Recent Attempts & Study Navigation) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Recent Attempts (7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-bold text-tn-navy">
              Recent Test Attempts
            </h2>
            <button
              onClick={onNavigateToPerformance}
              className="text-xs font-semibold text-tn-blue hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Detailed Analytics</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-card">
            {attempts.length === 0 ? (
              <div className="p-8 sm:p-10 text-center space-y-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto">
                  <FileCheck2 className="w-5 h-5 text-tn-blue" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-tn-navy">Your attempt history will appear here</p>
                  <p className="text-xs text-tn-muted">Take your first timed mock to begin building a performance record.</p>
                </div>
                <button
                  onClick={onNavigateToMockTests}
                  className="px-4 py-2 rounded-lg bg-tn-blue text-white text-xs font-semibold hover:bg-tn-blue-hover transition-colors cursor-pointer"
                >
                  Attempt First Mock Paper
                </button>
              </div>
            ) : (
              <>
              <div className="hidden overflow-x-auto sm:block">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-medium">
                    <tr>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Test Title</th>
                      <th className="py-2.5 px-3">Score</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {attempts.slice(0, 5).map((att) => (
                      <tr key={att.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-2.5 px-3 whitespace-nowrap text-slate-500 font-mono text-[11px]">
                          {new Date(att.startedAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                          })}
                        </td>
                        <td className="py-2.5 px-3 font-medium text-tn-text max-w-xs truncate">
                          {att.test?.title || 'JEE Main Mock Test'}
                        </td>
                        <td className="py-2.5 px-3 font-mono font-semibold tabular-nums">
                          {att.totalScore != null ? (
                            <span className={att.totalScore > 0 ? 'text-emerald-700' : 'text-slate-600'}>
                              {att.totalScore} / {maxExamScore}
                            </span>
                          ) : (
                            '—'
                          )}
                        </td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${att.status === 'COMPLETED'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : 'bg-amber-50 text-amber-800 border-amber-200'
                              }`}
                          >
                            {att.status === 'COMPLETED' ? 'Submitted' : 'In Progress'}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          {att.status === 'COMPLETED' ? (
                            <button
                              onClick={() => onOpenAttemptReview(att.id)}
                              className="text-xs font-semibold text-tn-blue hover:underline cursor-pointer"
                            >
                              Scorecard
                            </button>
                          ) : (
                            <button
                              onClick={() => onStartExam(att.testId)}
                              className="text-xs font-semibold text-amber-700 hover:underline cursor-pointer"
                            >
                              Resume
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="divide-y divide-slate-100 sm:hidden">
                {attempts.slice(0, 5).map((att) => (
                  <div key={att.id} className="space-y-2 p-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-tn-text">{att.test?.title || 'Mock Test'}</p>
                        <p className="mt-0.5 text-[11px] text-tn-muted">{new Date(att.startedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                      </div>
                      <span className={`shrink-0 rounded border px-2 py-0.5 text-[10px] font-semibold ${att.status === 'COMPLETED' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-amber-200 bg-amber-50 text-amber-800'}`}>
                        {att.status === 'COMPLETED' ? 'Submitted' : 'In Progress'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs font-semibold text-tn-navy">{att.totalScore != null ? `${att.totalScore} / ${maxExamScore}` : 'Score pending'}</span>
                      {att.status === 'COMPLETED' ? <button onClick={() => onOpenAttemptReview(att.id)} className="text-xs font-semibold text-tn-blue hover:underline">Scorecard</button> : <button onClick={() => onStartExam(att.testId)} className="text-xs font-semibold text-amber-700 hover:underline">Resume</button>}
                    </div>
                  </div>
                ))}
              </div>
              </>
            )}
          </div>
        </div>

        {/* Right Column: Quick Practice & Upgrade Banner (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="px-1 text-sm font-bold text-tn-navy">
            Flagship Examination
          </h2>

          {/* Flagship Examination Card */}
          <div className="p-5 sm:p-6 rounded-2xl border border-tn-border bg-white shadow-card space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="relative px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-tn-blue border border-blue-100">
                {examInfo?.shortName || examSlug.toUpperCase()} • {flagshipTest?.accessLevel === 'FREE' ? 'Free Starter Test' : 'Mock Simulation'}
              </span>
              <span className="relative text-[11px] font-mono text-slate-500">
                {flagshipTest?.durationMinutes || examInfo?.patterns?.[0]?.durationMinutes || 180} Mins • {maxExamScore} Marks
              </span>
            </div>

            <h3 className="relative text-base font-bold text-tn-navy leading-snug">
              {flagshipTest?.title || `${examInfo?.name || examSlug} Flagship Examination`}
            </h3>

            <p className="relative text-xs text-tn-muted leading-relaxed">
              {examInfo?.portalHeadline || examInfo?.description || `Practice authentic pattern-aligned CBT examinations for ${examInfo?.name || examSlug}.`}
            </p>

            <div className="relative pt-3 flex items-center justify-between gap-3 border-t border-slate-100">
              <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Pattern Scoring</span>
              </span>
              {flagshipTest?.id ? (
                <button
                  onClick={() => handleDashboardTestAction(flagshipTest)}
                  disabled={checkingDashboardTestId === flagshipTest.id}
                  className="shrink-0 px-3.5 py-2 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Play className="w-3 h-3" />
                  <span>{checkingDashboardTestId === flagshipTest.id ? 'Checking…' : 'Start Exam'}</span>
                </button>
              ) : (
                <button
                  onClick={() => (onOpenExamPortal ? onOpenExamPortal(examSlug) : onNavigateToMockTests())}
                  className="shrink-0 px-3.5 py-2 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileCheck2 className="w-3 h-3" />
                  <span>Open Portal</span>
                </button>
              )}
            </div>
          </div>

          {/* Exam-Wise Upgrade Banner */}
          {!isPremium && (
            <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/70 space-y-3 shadow-subtle">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">
                  {examInfo?.shortName || 'Exam'} Series Plans
                </span>
                <span className="text-xs font-extrabold text-amber-800">Use Coupon WELCOME20</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-amber-950">
                  Unlock Full {examInfo?.name || examSlug} Test Series
                </h4>
                <p className="text-[11px] text-amber-800/90 mt-0.5">
                  Get verified solutions, deep error diagnostics, and full mock test access tailored to {examInfo?.name || examSlug}.
                </p>
              </div>
              <button
                onClick={() => onOpenPricingModal?.()}
                className="w-full py-2 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>View {examInfo?.shortName || 'Exam'} Plans</span>
              </button>
            </div>
          )}

          {/* Quick Shortcuts Card */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-card space-y-2.5">
            <p className="text-xs font-semibold text-tn-navy uppercase tracking-wider">
              Study Workspaces
            </p>
            <div className="space-y-1.5 text-xs">
              {isSuperTet ? (
                <button
                  onClick={onNavigateToSuperTet || onNavigateToMockTests}
                  className="w-full p-2.5 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-blue-50 transition-colors flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-tn-blue" />
                    <span className="font-semibold text-tn-navy">SUPER TET (2012–2025) Archive</span>
                  </div>
                  <span className="text-[11px] font-bold text-tn-blue bg-white px-2 py-0.5 rounded border border-blue-200">14 Years</span>
                </button>
              ) : isUptet ? (
                <button
                  onClick={onNavigateToUptet || onNavigateToMockTests}
                  className="w-full p-2.5 rounded border border-emerald-100 bg-emerald-50/40 hover:bg-emerald-50 transition-colors flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-emerald-950">UPTET 2016–2025 CBT Archive</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200">{totalExamTests} Tests</span>
                </button>
              ) : (
                <button
                  onClick={() => (onOpenExamPortal ? onOpenExamPortal(examSlug) : onNavigateToMockTests())}
                  className="w-full p-2.5 rounded border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-tn-blue" />
                    <span className="font-medium text-tn-text">{examInfo?.name || examSlug} Test Library</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{totalExamTests} Tests</span>
                </button>
              )}

              <button
                onClick={onNavigateToPractice}
                className="w-full p-2.5 rounded border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium text-tn-text">Mistake Journal & Error Review</span>
                </div>
                <span className="text-[11px] text-slate-400">Practice</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
