import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  Info,
  Layers,
  Lock,
  Play,
  ShieldCheck,
  Sparkles,
  AlertTriangle,
  ArrowLeft,
} from 'lucide-react';
import { Exam, SubscriptionPlan, User } from '../types';
import { api } from '../api';
import { UptetArchiveModule } from './UptetArchiveModule';
import { SuperTetArchiveModule } from './SuperTetArchiveModule';
import { MockTestLibrary } from './MockTestLibrary';
import { PYQPapersArchive } from './PYQPapersArchive';
import { PracticeHub } from './PracticeHub';
import { ReadinessAnalytics } from './ReadinessAnalytics';

interface ExamPortalViewProps {
  examSlug: string;
  currentUser: User | null;
  language: 'en' | 'hi';
  onStartExam: (testId: string, forceTeachingCbt?: boolean) => void;
  onOpenAttemptReview: (attemptId: string) => void;
  onOpenPricingModal: (lockedTest?: { id: string; title: string } | null, examSlug?: string) => void;
  onBackToAllExams: () => void;
}

export const ExamPortalView: React.FC<ExamPortalViewProps> = ({
  examSlug,
  currentUser,
  language,
  onStartExam,
  onOpenAttemptReview,
  onOpenPricingModal,
  onBackToAllExams,
}) => {
  const [exam, setExam] = useState<Exam | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [subTab, setSubTab] = useState<'OVERVIEW' | 'ARCHIVE' | 'MOCKS' | 'SYLLABUS' | 'PRACTICE' | 'PLANS' | 'PERFORMANCE' | 'NOTICE'>('OVERVIEW');
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [checkingTestId, setCheckingTestId] = useState<string | null>(null);

  useEffect(() => {
    loadExamPortal();
    setSubTab('OVERVIEW');
  }, [examSlug]);

  const loadExamPortal = async () => {
    setLoading(true);
    setError(null);
    try {
      const [profileRes, plansRes] = await Promise.all([
        api.getExamProfile(examSlug),
        api.getSubscriptionPlans(examSlug).catch(() => ({ plans: [] })),
      ]);
      setExam(profileRes.exam);
      setPlans(plansRes.plans || profileRes.exam?.plans || []);
    } catch (err: any) {
      setError(err.message || `Could not load portal for "${examSlug}"`);
    } finally {
      setLoading(false);
    }
  };

  const handleLaunchTest = async (test: any) => {
    const isTeachingCbt = examSlug === 'uptet' || examSlug === 'super-tet';
    if (test.accessLevel === 'FREE') {
      onStartExam(test.id, isTeachingCbt);
      return;
    }

    setCheckingTestId(test.id);
    try {
      const ent = await api.checkTestEntitlement(test.id);
      if (ent.entitled) {
        onStartExam(test.id, isTeachingCbt);
      } else {
        onOpenPricingModal({ id: test.id, title: test.title }, examSlug);
      }
    } catch {
      onOpenPricingModal({ id: test.id, title: test.title }, examSlug);
    } finally {
      setCheckingTestId(null);
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-16 text-center space-y-3">
        <div className="w-9 h-9 rounded-full border-3 border-slate-200 border-t-tn-blue animate-spin mx-auto" />
        <p className="text-xs font-medium text-slate-500">Loading examination portal...</p>
      </div>
    );
  }

  if (error || !exam) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl border border-tn-border p-8 text-center space-y-4">
          <AlertTriangle className="w-10 h-10 text-amber-600 mx-auto" />
          <h2 className="text-lg font-bold text-tn-navy">Examination Portal Unavailable</h2>
          <p className="text-xs text-slate-600">{error || 'The requested examination could not be found.'}</p>
          <button
            onClick={onBackToAllExams}
            className="px-4 py-2 rounded-lg bg-tn-navy text-white text-xs font-semibold cursor-pointer"
          >
            Return to All Examinations
          </button>
        </div>
      </div>
    );
  }

  const defaultPattern = exam.patternVersions?.[0];
  const sections = defaultPattern?.sections || [];
  const examTests = (exam as any).tests || [];
  const pyqCount = exam.actualVerifiedPYQCount ?? exam.totalVerifiedPYQs ?? 0;
  const accentStyle = exam.accentColor || '#1D4ED8';

  const portalTabs = [
    { id: 'OVERVIEW', label: 'Exam Overview', icon: GraduationCap },
    { id: 'MOCKS', label: `Mock Tests (${examTests.length})`, icon: FileCheck2 },
    ...(examSlug === 'uptet' || examSlug === 'super-tet' || examSlug === 'jee-main'
      ? [{ id: 'ARCHIVE', label: examSlug === 'jee-main' ? 'PYQ Shift Archive' : 'Year-Wise PYQ Archive', icon: Calendar }]
      : []),
    { id: 'SYLLABUS', label: 'Syllabus & Pattern', icon: Layers },
    { id: 'PRACTICE', label: 'Mistake Journal', icon: BookOpen },
    { id: 'NOTICE', label: 'Official Notice & Dates', icon: Info },
    { id: 'PLANS', label: 'Exam Plans', icon: Sparkles },
    { id: 'PERFORMANCE', label: 'Performance', icon: ShieldCheck },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-16">
      {/* Top Breadcrumb + Back */}
      <div className="flex items-center justify-between text-xs">
        <button
          onClick={onBackToAllExams}
          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-tn-navy font-medium cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Examinations</span>
        </button>
        <span className="text-slate-400">
          All in One • <strong className="text-slate-700">{exam.shortName} Portal</strong>
        </span>
      </div>

      {/* Consistent Brand Header with Subtle Exam-Identifying Left Accent */}
      <div
        className="bg-white rounded-xl border border-tn-border p-6 shadow-subtle"
        style={{ borderLeftWidth: '5px', borderLeftColor: accentStyle }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                {exam.category?.name || 'Examination'}
              </span>
              <span className="text-slate-500 font-medium">{exam.conductingBody}</span>
              {exam.isComingSoon && (
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                  Coming Soon
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-extrabold text-tn-navy tracking-tight">
              {exam.portalHeadline || `Prepare for ${exam.shortName} with structured practice and mock tests.`}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {exam.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 shrink-0 text-center text-xs">
            <div className="px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 block">Duration</span>
              <span className="font-bold text-tn-navy">{defaultPattern?.durationMinutes || '—'} Mins</span>
            </div>
            <div className="px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 block">Total Marks</span>
              <span className="font-bold text-tn-navy">{defaultPattern?.totalMarks || '—'}</span>
            </div>
            <div className="px-3 py-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] text-emerald-700 block">Verified PYQs</span>
              <span className="font-bold text-emerald-900">{pyqCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Sub-Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-tn-border pb-1">
        {portalTabs.map((t) => {
          const Icon = t.icon;
          const active = subTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setSubTab(t.id as any)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                active
                  ? 'border-tn-blue text-tn-blue bg-white'
                  : 'border-transparent text-slate-600 hover:text-tn-navy hover:bg-slate-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* ==================== TAB: OVERVIEW ==================== */}
      {subTab === 'OVERVIEW' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            {/* Available Mock Tests & Diagnostics */}
            <div className="bg-white rounded-xl border border-tn-border p-5 shadow-subtle space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-sm font-bold text-tn-navy">
                  Available {exam.shortName} Tests & Practice Papers
                </h2>
                <button
                  onClick={() => setSubTab('MOCKS')}
                  className="text-xs font-semibold text-tn-blue hover:underline cursor-pointer"
                >
                  View All ({examTests.length}) →
                </button>
              </div>

              {examTests.length === 0 ? (
                <div className="p-6 text-center rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  {exam.isComingSoon
                    ? `${exam.shortName} mock test papers are marked Coming Soon by the Administrator.`
                    : `No published mock tests found for ${exam.shortName} yet.`}
                </div>
              ) : (
                <div className="space-y-2.5">
                  {examTests.slice(0, 5).map((t: any) => (
                    <div
                      key={t.id}
                      className="p-3.5 rounded-lg border border-slate-200 hover:border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-tn-navy">{t.title}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              t.accessLevel === 'FREE'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-amber-50 text-amber-800 border border-amber-200'
                            }`}
                          >
                            {t.accessLevel}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          {t.totalQuestions} Questions • {t.totalMarks} Marks • {t.durationMinutes} Mins
                          {t.pyqReference ? ` • ${t.pyqReference}` : ''}
                        </p>
                      </div>

                      <button
                        onClick={() => handleLaunchTest(t)}
                        disabled={checkingTestId === t.id}
                        className="px-4 py-2 rounded-lg bg-tn-navy hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shrink-0 disabled:opacity-50"
                      >
                        {t.accessLevel === 'PREMIUM' ? <Lock className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        <span>{checkingTestId === t.id ? 'Checking...' : 'Start CBT'}</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Section Structure Table */}
            {sections.length > 0 && (
              <div className="bg-white rounded-xl border border-tn-border p-5 shadow-subtle space-y-3">
                <h2 className="text-sm font-bold text-tn-navy">
                  {exam.shortName} Official Examination Structure & Marking Rules
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse border border-slate-200">
                    <thead className="bg-slate-50 font-semibold text-slate-700">
                      <tr>
                        <th className="p-2.5 border border-slate-200">Subject / Section</th>
                        <th className="p-2.5 border border-slate-200">Questions</th>
                        <th className="p-2.5 border border-slate-200">Correct Marks</th>
                        <th className="p-2.5 border border-slate-200">Negative Marking</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {sections.map((s) => (
                        <tr key={s.id} className="hover:bg-slate-50/70">
                          <td className="p-2.5 font-medium border border-slate-200 text-slate-800">{s.name}</td>
                          <td className="p-2.5 border border-slate-200 font-mono">{s.totalQuestions}</td>
                          <td className="p-2.5 border border-slate-200 text-emerald-700 font-semibold">+{s.marksPerCorrect}</td>
                          <td className="p-2.5 border border-slate-200 text-slate-700">
                            {s.negativeMarks > 0 ? `-${s.negativeMarks}` : '0 (No Penalty)'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Official Notice Summary & Exam Plans */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-xl border border-tn-border p-5 shadow-subtle space-y-3 text-xs">
              <h3 className="text-xs font-bold text-tn-navy uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-4 h-4 text-tn-blue" />
                <span>Official Exam Notice</span>
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {exam.latestNotification || 'Official notification details are pending verification.'}
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                <p><strong>Authority:</strong> {exam.conductingBody}</p>
                <p><strong>Eligibility:</strong> {exam.eligibilitySummary}</p>
                <p><strong>Notice Status:</strong> {exam.notificationDate || 'Pending Verification'}</p>
              </div>
              {exam.officialNoticeUrl && (
                <a
                  href={exam.officialNoticeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-tn-blue hover:underline pt-1"
                >
                  <span>Official Authority Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Exam-Specific Pricing Summary */}
            <div className="bg-white rounded-xl border border-tn-border p-5 shadow-subtle space-y-3 text-xs">
              <h3 className="text-xs font-bold text-tn-navy uppercase tracking-wider">
                {exam.shortName} Access Plans
              </h3>
              {plans.filter((p) => p.price > 0).length === 0 ? (
                <p className="text-slate-600">All currently published {exam.shortName} papers are available free of cost.</p>
              ) : (
                <div className="space-y-2.5">
                  {plans.filter((p) => p.price > 0).slice(0, 2).map((pl) => (
                    <div key={pl.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-tn-navy">{pl.name}</span>
                        <span className="font-extrabold text-emerald-700">₹{pl.price}</span>
                      </div>
                      <p className="text-[11px] text-slate-600">{pl.description}</p>
                    </div>
                  ))}
                  <button
                    onClick={() => onOpenPricingModal(null, examSlug)}
                    className="w-full py-2 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white font-semibold cursor-pointer"
                  >
                    Compare & Subscribe
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB: ARCHIVE (UPTET / SUPER TET / JEE PYQ) ==================== */}
      {subTab === 'ARCHIVE' && (
        <div>
          {examSlug === 'uptet' ? (
            <UptetArchiveModule onStartExam={(id) => onStartExam(id, true)} language={language} />
          ) : examSlug === 'super-tet' ? (
            <SuperTetArchiveModule
              currentUser={currentUser}
              onStartExam={(id) => onStartExam(id, true)}
              onOpenAttemptReview={onOpenAttemptReview}
              onNavigateToPractice={() => setSubTab('PRACTICE')}
              language={language}
            />
          ) : (
            <PYQPapersArchive onStartExam={(id) => onStartExam(id, false)} examSlug={examSlug} />
          )}
        </div>
      )}

      {/* ==================== TAB: MOCK TESTS ==================== */}
      {subTab === 'MOCKS' && (
        examSlug === 'uptet' ? (
          <UptetArchiveModule onStartExam={(id) => onStartExam(id, true)} language={language} />
        ) : examSlug === 'super-tet' ? (
          <SuperTetArchiveModule
            currentUser={currentUser}
            onStartExam={(id) => onStartExam(id, true)}
            onOpenAttemptReview={onOpenAttemptReview}
            onNavigateToPractice={() => setSubTab('PRACTICE')}
            language={language}
          />
        ) : (
          <MockTestLibrary
            examSlug={examSlug}
            onStartExam={(id) => onStartExam(id, false)}
            language={language}
            onOpenPricingModal={(locked) => onOpenPricingModal(locked, examSlug)}
            currentUser={currentUser}
          />
        )
      )}

      {/* ==================== TAB: SYLLABUS & PATTERN ==================== */}
      {subTab === 'SYLLABUS' && (
        <div className="bg-white rounded-xl border border-tn-border p-6 shadow-subtle space-y-5">
          <div>
            <h2 className="text-base font-bold text-tn-navy">{exam.shortName} Syllabus & Weightage Breakdown</h2>
            <p className="text-xs text-slate-500 mt-0.5">Official subject allocations configured for {exam.title}.</p>
          </div>
          {(exam.syllabusNodes || []).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {(exam.syllabusNodes || []).map((node) => (
                <div key={node.id} className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500">{node.code}</span>
                    <p className="font-bold text-tn-navy mt-0.5">{node.title}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-white border border-slate-200 font-bold text-tn-blue shrink-0">
                    {node.weightagePct}%
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {sections.map((s) => (
                <div key={s.id} className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 flex items-center justify-between">
                  <span className="font-bold text-tn-navy">{s.name}</span>
                  <span className="text-slate-600 font-mono">{s.totalQuestions} Questions</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ==================== TAB: PRACTICE & MISTAKE JOURNAL ==================== */}
      {subTab === 'PRACTICE' && (
        <PracticeHub
          onStartExam={(id) => onStartExam(id, examSlug === 'uptet' || examSlug === 'super-tet')}
          language={language}
          examId={exam.id}
          examName={exam.shortName}
        />
      )}

      {/* ==================== TAB: OFFICIAL NOTICE ==================== */}
      {subTab === 'NOTICE' && (
        <div className="bg-white rounded-xl border border-tn-border p-6 shadow-subtle space-y-4 text-xs">
          <h2 className="text-base font-bold text-tn-navy">{exam.title} — Official Examination Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <p className="font-bold text-tn-navy">Conducting Authority & Verification</p>
              <p className="text-slate-700"><strong>Body:</strong> {exam.conductingBody}</p>
              <p className="text-slate-700"><strong>Notification Date:</strong> {exam.notificationDate || 'Official notice unavailable'}</p>
              <p className="text-slate-700"><strong>Eligibility:</strong> {exam.eligibilitySummary}</p>
              {exam.officialNoticeUrl && (
                <a href={exam.officialNoticeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-tn-blue font-semibold hover:underline">
                  Verify on Official Portal <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <p className="font-bold text-tn-navy">All in One Platform Notice & Transparency</p>
              <p className="text-slate-700 leading-relaxed">{exam.latestNotification}</p>
              <p className="text-slate-600">
                <strong>Verified Historical PYQs in DB:</strong> {pyqCount.toLocaleString()}
              </p>
              <p className="text-slate-600">
                <strong>All in One Pattern Practice Tests:</strong> {exam.actualPracticeTestsCount ?? 0}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB: EXAM PRICING PLANS ==================== */}
      {subTab === 'PLANS' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-tn-border p-5 shadow-subtle">
            <h2 className="text-base font-bold text-tn-navy">{exam.shortName} Examination Pricing Plans</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Pricing is strictly scoped to {exam.shortName} and managed independently in Admin Control Center. Coupon codes supported at checkout.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((pl) => (
              <div key={pl.id} className="bg-white rounded-xl border border-tn-border p-5 shadow-subtle flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-tn-navy">{pl.name}</span>
                    {pl.badge && (
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                        {pl.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-2xl font-extrabold text-tn-navy">
                    {pl.price === 0 ? 'Free' : `₹${pl.price}`}
                  </p>
                  <p className="text-xs text-slate-600">{pl.description}</p>
                  <ul className="space-y-1.5 pt-2 text-[11px] text-slate-700">
                    {(pl.features || []).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onOpenPricingModal(null, examSlug)}
                  className="w-full py-2 rounded-lg bg-tn-navy hover:bg-slate-800 text-white text-xs font-semibold cursor-pointer"
                >
                  {pl.price === 0 ? 'Included in Account' : `Select ${pl.name}`}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================== TAB: PERFORMANCE ==================== */}
      {subTab === 'PERFORMANCE' && <ReadinessAnalytics examId={exam.id} examName={exam.shortName} />}
    </div>
  );
};

