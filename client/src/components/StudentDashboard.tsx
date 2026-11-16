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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-tn-border pb-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-tn-navy tracking-tight">
            Welcome back, {currentUser?.name?.split(' ')[0] || 'Candidate'}
          </h1>
          <p className="text-xs text-tn-muted mt-0.5">
            Target Exam:{' '}
            <strong className="text-tn-navy font-bold">
              {examInfo?.name || examSlug.toUpperCase()}
            </strong>
            {examInfo?.conductingBody ? ` • ${examInfo.conductingBody}` : ''}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {flagshipTest?.id && (
            <button
              onClick={() => onStartExam(flagshipTest.id)}
              className="px-3.5 py-2 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
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
            className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-tn-border text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <FileCheck2 className="w-3.5 h-3.5 text-tn-blue" />
            <span>Open {examInfo?.shortName || 'Exam'} Portal ({totalExamTests} Tests)</span>
          </button>
        </div>
      </div>

      {/* 2. Subscription Status & Referral Balance Banner */}
      <div className="p-4 rounded-xl bg-white border border-tn-border shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-tn-navy text-white flex items-center justify-center font-bold">
            <Zap className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-tn-navy">{planName}</span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${isPremium
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-blue-50 text-tn-blue border border-blue-200'
                  }`}
              >
                {isPremium ? 'All-Access Active' : 'Active Tier'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {subInfo?.subscription?.testsRemaining != null
                ? `${subInfo.subscription.testsRemaining} test unlock${subInfo.subscription.testsRemaining !== 1 ? 's' : ''} remaining in pack`
                : isPremium
                  ? `Unlimited access to all available ${examInfo?.shortName || examSlug} tests & verified solutions`
                  : `${freeExamTests} free paper${freeExamTests !== 1 ? 's' : ''} available in ${examInfo?.shortName || examSlug}. Upgrade for full exam series.`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-end md:self-center">
          {/* Referral Button */}
          <button
            onClick={onOpenReferralModal}
            className="px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <span>Refer & Earn ({referralCredits} Credit{referralCredits !== 1 ? 's' : ''})</span>
          </button>

          {/* Upgrade Button */}
          {!isPremium && (
            <button
              onClick={() => onOpenPricingModal?.()}
              className="px-3.5 py-1.5 rounded-lg bg-tn-navy hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Upgrade Plan</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. Resume In-Progress Attempt Banner (if any) */}
      {activeAttempt && (
        <div className="p-4 rounded-lg bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Clock className="w-4 h-4 animate-spin" />
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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="p-4 rounded-lg border border-tn-border bg-white shadow-subtle space-y-1">
          <p className="text-[11px] font-medium text-tn-muted">Tests Completed</p>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">{completedAttempts.length}</p>
          <p className="text-[10px] text-slate-500">Official timed attempts</p>
        </div>

        <div className="p-4 rounded-lg border border-tn-border bg-white shadow-subtle space-y-1">
          <p className="text-[11px] font-medium text-tn-muted">Average Score</p>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">
            {avgScore} <span className="text-xs font-normal text-slate-400">/ {maxExamScore}</span>
          </p>
          <p className="text-[10px] text-slate-500">Across verified attempts</p>
        </div>

        <div className="p-4 rounded-lg border border-tn-border bg-white shadow-subtle space-y-1">
          <p className="text-[11px] font-medium text-tn-muted">Accuracy Rate</p>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">
            {avgAccuracy}%
          </p>
          <p className="text-[10px] text-slate-500">Correct to attempted ratio</p>
        </div>

        <div className="p-4 rounded-lg border border-tn-border bg-white shadow-subtle space-y-1">
          <p className="text-[11px] font-medium text-tn-muted">Time In Tests</p>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">
            {totalHours} <span className="text-xs font-normal text-slate-400">hrs</span>
          </p>
          <p className="text-[10px] text-slate-500">Simulated test time</p>
        </div>

        <div className="p-4 rounded-lg border border-tn-border bg-white shadow-subtle space-y-1">
          <p className="text-[11px] font-medium text-tn-muted">Free vs Premium</p>
          <p className="text-2xl font-bold text-tn-navy tabular-nums">
            {freeExamTests} <span className="text-xs font-normal text-slate-400">/ {paidExamTests}</span>
          </p>
          <p className="text-[10px] text-emerald-700 font-medium">Free / Premium tests</p>
        </div>
      </div>

      {/* 5. Main Dashboard Grid (2 Columns: Recent Attempts & Study Navigation) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Recent Attempts (7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-tn-navy uppercase tracking-wider">
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

          <div className="border border-tn-border rounded-lg bg-white overflow-hidden shadow-subtle">
            {attempts.length === 0 ? (
              <div className="p-8 text-center space-y-3">
                <FileCheck2 className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="text-xs font-medium text-slate-600">No tests attempted yet.</p>
                <button
                  onClick={onNavigateToMockTests}
                  className="px-4 py-2 rounded bg-tn-blue text-white text-xs font-semibold hover:bg-tn-blue-hover transition-colors cursor-pointer"
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
          <h2 className="text-sm font-semibold text-tn-navy uppercase tracking-wider">
            Flagship Examination
          </h2>

          {/* Flagship Examination Card */}
          <div className="p-5 rounded-lg border border-tn-blue/40 bg-white shadow-subtle space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-tn-navy text-white">
                {examInfo?.shortName || examSlug.toUpperCase()} • {flagshipTest?.accessLevel === 'FREE' ? 'Free Starter Test' : 'Mock Simulation'}
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                {flagshipTest?.durationMinutes || examInfo?.patterns?.[0]?.durationMinutes || 180} Mins • {maxExamScore} Marks
              </span>
            </div>

            <h3 className="text-sm font-bold text-tn-navy leading-snug">
              {flagshipTest?.title || `${examInfo?.name || examSlug} Flagship Examination`}
            </h3>

            <p className="text-xs text-tn-muted leading-relaxed">
              {examInfo?.portalHeadline || examInfo?.description || `Practice authentic pattern-aligned CBT examinations for ${examInfo?.name || examSlug}.`}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Pattern Scoring</span>
              </span>
              {flagshipTest?.id ? (
                <button
                  onClick={() => onStartExam(flagshipTest.id)}
                  className="px-3.5 py-1.5 rounded bg-tn-navy hover:bg-slate-800 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  <span>Start Exam</span>
                </button>
              ) : (
                <button
                  onClick={() => (onOpenExamPortal ? onOpenExamPortal(examSlug) : onNavigateToMockTests())}
                  className="px-3.5 py-1.5 rounded bg-tn-navy hover:bg-slate-800 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FileCheck2 className="w-3 h-3" />
                  <span>Open Portal</span>
                </button>
              )}
            </div>
          </div>

          {/* Exam-Wise Upgrade Banner */}
          {!isPremium && (
            <div className="p-4 rounded-xl border border-amber-300 bg-amber-50/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">
                  {examInfo?.shortName || 'Exam'} Series Plans
                </span>
                <span className="text-xs font-extrabold text-amber-900">Use Coupon WELCOME20</span>
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
                className="w-full py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>View {examInfo?.shortName || 'Exam'} Plans</span>
              </button>
            </div>
          )}

          {/* Quick Shortcuts Card */}
          <div className="p-4 rounded-lg border border-tn-border bg-white shadow-subtle space-y-2.5">
            <p className="text-xs font-semibold text-tn-navy uppercase tracking-wider">
              Study Workspaces
            </p>
            <div className="space-y-1.5 text-xs">
              {isSuperTet ? (
                <button
                  onClick={onNavigateToSuperTet || onNavigateToMockTests}
                  className="w-full p-2.5 rounded border border-indigo-100 bg-indigo-50/40 hover:bg-indigo-50 transition-colors flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-indigo-600" />
                    <span className="font-semibold text-indigo-950">SUPER TET (2012–2025) Archive</span>
                  </div>
                  <span className="text-[11px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">14 Years</span>
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