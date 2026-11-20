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

  const examSlug = (currentUser?.targetExamId || 'jee-main').toLowerCase();
  const isSuperTet = examSlug === 'super-tet';
  const isUptet = examSlug === 'uptet';

  useEffect(() => {
    loadDashboardData();
  }, [examSlug]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [attemptsRes, profileRes, subRes] = await Promise.all([
        api.getMyAttempts().catch(() => ({ attempts: [] })),
        api.getExamProfile(examSlug).catch(() => null),
        api.getMySubscription().catch(() => null),
      ]);

      if (profileRes?.exam) {
        setExamInfo(profileRes.exam);
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
        } catch {
          // ignore
        }
      } else if (profileRes?.exam?.tests?.length) {
        const flag = profileRes.exam.tests.find((t: any) => t.accessLevel === 'FREE') || profileRes.exam.tests[0];
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
  const totalExamTests = examInfo?.tests?.length || 0;
  const freeExamTests = examInfo?.tests?.filter((t: any) => t.accessLevel === 'FREE').length || 0;
  const paidExamTests = Math.max(0, totalExamTests - freeExamTests);
  const isPremium = subInfo?.isPremium || false;
  const planName = subInfo?.subscription?.plan?.name || subInfo?.effectivePlan?.name || 'Free Starter Plan';
  const referralCredits = subInfo?.referralCredits ?? currentUser?.referralCredits ?? 0;

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Welcome & Summary Bar */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white px-5 py-5 sm:px-6 shadow-card">
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-violet-600">Candidate dashboard</p>
          <h1 className="text-2xl sm:text-[28px] font-bold text-tn-navy tracking-tight">
            Welcome back, {currentUser?.name?.split(' ')[0] || 'Candidate'}
          </h1>
          <p className="text-xs text-tn-muted mt-1">
            Target Exam:{' '}
            <strong className="text-tn-navy font-bold">
              {examInfo?.name || examSlug.toUpperCase()}
            </strong>
            {examInfo?.conductingBody ? ` • ${examInfo.conductingBody}` : ''}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {flagshipTest?.id && (
            <button
              onClick={() => onStartExam(flagshipTest.id)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-semibold shadow-card transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Start {examInfo?.shortName || examInfo?.name || 'Exam'} Test</span>
            </button>
          )}
          <button
            onClick={() =>
              onOpenExamPortal
                ? onOpenExamPortal(examSlug)
                : isSuperTet
                ? onNavigateToSuperTet?.()
                : isUptet
                ? onNavigateToUptet?.()
                : onNavigateToMockTests()
            }
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-tn-border text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <FileCheck2 className="w-3.5 h-3.5 text-tn-blue" />
            <span>Open {examInfo?.shortName || 'Exam'} Portal ({totalExamTests} Tests)</span>
          </button>
        </div>
      </section>

      {/* 2. Subscription Status & Referral Balance Banner */}
      <section className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 border border-violet-500 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-white/15 border border-white/25 text-white flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">{planName}</span>
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${isPremium
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-white/15 text-white border border-white/25'
                  }`}
              >
                {isPremium ? 'All-Access Active' : 'Active Tier'}
              </span>
            </div>
            <p className="text-xs text-violet-100 mt-0.5">
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
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-violet-50 text-violet-700 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
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

      {/* 4. Performance Metrics Row (5 Columns) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
        <div className="min-h-[132px] p-4 rounded-2xl border border-violet-100 bg-violet-50 shadow-subtle space-y-2">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-violet-700">Tests Completed</p><FileCheck2 className="w-4 h-4 text-violet-600" /></div>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">{completedAttempts.length}</p>
          <p className="text-[10px] text-violet-700/70">Official timed attempts</p>
        </div>

        <div className="min-h-[132px] p-4 rounded-2xl border border-blue-100 bg-blue-50 shadow-subtle space-y-2">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-blue-700">Average Score</p><Target className="w-4 h-4 text-blue-600" /></div>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">
            {avgScore} <span className="text-xs font-normal text-slate-400">/ {maxExamScore}</span>
          </p>
          <p className="text-[10px] text-blue-700/70">Across verified attempts</p>
        </div>

        <div className="min-h-[132px] p-4 rounded-2xl border border-emerald-100 bg-emerald-50 shadow-subtle space-y-2">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-tn-muted">Accuracy Rate</p><TrendingUp className="w-4 h-4 text-emerald-600" /></div>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">
            {avgAccuracy}%
          </p>
          <p className="text-[10px] text-emerald-700/70">Correct to attempted ratio</p>
        </div>

        <div className="min-h-[132px] p-4 rounded-2xl border border-amber-100 bg-amber-50 shadow-subtle space-y-2">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-amber-700">Time In Tests</p><Clock className="w-4 h-4 text-amber-600" /></div>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">
            {totalHours} <span className="text-xs font-normal text-slate-400">hrs</span>
          </p>
          <p className="text-[10px] text-amber-700/70">Simulated test time</p>
        </div>

        <div className="min-h-[132px] p-4 rounded-2xl border border-rose-100 bg-rose-50 shadow-subtle space-y-2">
          <div className="flex items-center justify-between"><p className="text-[11px] font-medium text-rose-700">Free vs Premium</p><Lock className="w-4 h-4 text-rose-600" /></div>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">
            {freeExamTests} <span className="text-xs font-normal text-slate-400">/ {paidExamTests}</span>
          </p>
          <p className="text-[10px] text-rose-700/70 font-medium">Free / Premium tests</p>
        </div>
      </div>

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
              <div className="overflow-x-auto">
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
                              {att.totalScore} / 300
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
            )}
          </div>
        </div>

        {/* Right Column: Quick Practice & Upgrade Banner (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="px-1 text-sm font-bold text-tn-navy">
            Flagship Examination
          </h2>

          {/* Flagship Examination Card */}
          <div className="p-5 sm:p-6 rounded-2xl border border-violet-100 bg-white shadow-card space-y-4 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-violet-50" />
            <div className="flex items-center justify-between">
              <span className="relative px-2 py-0.5 rounded-md text-[10px] font-bold bg-violet-50 text-violet-700 border border-violet-100">
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
                  onClick={() => onStartExam(flagshipTest.id)}
                  className="shrink-0 px-3.5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  <span>Start Exam</span>
                </button>
              ) : (
                <button
                  onClick={() => (onOpenExamPortal ? onOpenExamPortal(examSlug) : onNavigateToMockTests())}
                  className="shrink-0 px-3.5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileCheck2 className="w-3 h-3" />
                  <span>Open Portal</span>
                </button>
              )}
            </div>
          </div>

          {/* Exam-Wise Upgrade Banner */}
          {!isPremium && (
            <div className="p-4 rounded-2xl border border-violet-100 bg-violet-50/80 space-y-3 shadow-subtle">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-violet-600 text-white">
                  {examInfo?.shortName || 'Exam'} Series Plans
                </span>
                <span className="text-xs font-extrabold text-violet-800">Use Coupon WELCOME20</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-violet-950">
                  Unlock Full {examInfo?.name || examSlug} Test Series
                </h4>
                <p className="text-[11px] text-violet-800/90 mt-0.5">
                  Get verified solutions, deep error diagnostics, and full mock test access tailored to {examInfo?.name || examSlug}.
                </p>
              </div>
              <button
                onClick={() => onOpenPricingModal?.()}
                className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
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
