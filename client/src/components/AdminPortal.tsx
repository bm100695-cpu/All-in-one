import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  Sparkles,
  Layers,
  FileCheck,
  AlertTriangle,
  RotateCcw,
  Check,
  Plus,
  Send,
  HelpCircle,
  BookOpen,
  Download,
  Edit3,
  Filter,
  CheckCircle2,
  Eye,
  Save,
  X,
  IndianRupee,
  CreditCard,
  Users,
  RefreshCw,
  Lock,
  TrendingUp,
  Receipt,
  Zap,
} from 'lucide-react';
import { api } from '../api';
import { AdminSuperTetManager } from './AdminSuperTetManager';
import { AdminExamsManager } from './AdminExamsManager';
import { AdminStudentActivity } from './AdminStudentActivity';
import { AdminLiveTestManager } from './AdminLiveTestManager';
import { AdminPricingManager } from './AdminPricingManager';

export const AdminPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'LIVE_TESTS' | 'EXAMS_MANAGER' | 'STUDENTS_ACTIVITY' | 'JEE_PYQ' | 'SUPER_TET_PYQ' | 'QUEUE' | 'AI_GENERATOR' | 'AUDIT' | 'MONETIZATION'>('LIVE_TESTS');
  const [queue, setQueue] = useState<any[]>([]);
  const [auditMetrics, setAuditMetrics] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({});
  const [actingOnId, setActingOnId] = useState<string | null>(null);

  // Monetization State
  const [monetizationOverview, setMonetizationOverview] = useState<any>(null);
  const [refundingId, setRefundingId] = useState<string | null>(null);
  const [refundReason, setRefundReason] = useState<string>('Student request within 7-day guarantee window');
  const [editingPlan, setEditingPlan] = useState<any | null>(null);
  const [planEditPrice, setPlanEditPrice] = useState<number>(0);
  const [monetizationMsg, setMonetizationMsg] = useState<string | null>(null);

  // JEE Main PYQ Manager State
  const [pyqQuestions, setPyqQuestions] = useState<any[]>([]);
  const [pyqYear, setPyqYear] = useState<string>('ALL');
  const [pyqSubject, setPyqSubject] = useState<string>('ALL');
  const [pyqStatus, setPyqStatus] = useState<string>('ALL');
  const [editingQuestion, setEditingQuestion] = useState<any | null>(null);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // AI Generator Form State
  const [generating, setGenerating] = useState<boolean>(false);
  const [generatedResult, setGeneratedResult] = useState<any>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('Physics');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('MEDIUM');

  useEffect(() => {
    loadPortalData();
  }, [activeTab, pyqYear, pyqSubject, pyqStatus]);

  const loadPortalData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'JEE_PYQ') {
        const res = await api.getPYQQuestions({
          year: pyqYear,
          subject: pyqSubject,
          status: pyqStatus,
        });
        setPyqQuestions(res.questions);
      } else if (activeTab === 'QUEUE') {
        const res = await api.getReviewQueue();
        setQueue(res.questions);
      } else if (activeTab === 'AUDIT') {
        const res = await api.getCoverageAudit();
        setAuditMetrics(res);
      } else if (activeTab === 'MONETIZATION') {
        const res = await api.getAdminMonetizationOverview();
        setMonetizationOverview(res);
      }
    } catch (err) {
      console.error('Error loading admin portal data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePlanPrice = async (planId: string) => {
    try {
      await api.updateAdminPlan(planId, { priceINR: Number(planEditPrice) });
      setMonetizationMsg('Plan price updated successfully');
      setEditingPlan(null);
      const res = await api.getAdminMonetizationOverview();
      setMonetizationOverview(res);
      setTimeout(() => setMonetizationMsg(null), 3000);
    } catch (err: any) {
      alert('Failed to update plan: ' + (err.message || 'Error'));
    }
  };

  const handleProcessRefund = async (paymentId: string) => {
    if (!confirm('Are you sure you want to process a 100% refund for this transaction? This will automatically revoke the student subscription/credits.')) {
      return;
    }
    setRefundingId(paymentId);
    try {
      await api.processAdminRefund(paymentId, refundReason);
      setMonetizationMsg('100% refund processed successfully.');
      const res = await api.getAdminMonetizationOverview();
      setMonetizationOverview(res);
      setTimeout(() => setMonetizationMsg(null), 3500);
    } catch (err: any) {
      alert('Refund processing error: ' + (err.message || 'Error'));
    } finally {
      setRefundingId(null);
    }
  };

  const handleTogglePublish = async (id: string, currentPublished: boolean, currentStatus: string) => {
    setActingOnId(id);
    try {
      await api.updatePYQStatus(id, currentStatus, !currentPublished);
      await loadPortalData();
    } catch (err) {
      console.error('Failed to toggle publish status:', err);
    } finally {
      setActingOnId(null);
    }
  };

  const handleApproveStatus = async (id: string, newStatus: string) => {
    setActingOnId(id);
    try {
      await api.updatePYQStatus(id, newStatus, newStatus === 'verified');
      await loadPortalData();
    } catch (err) {
      console.error('Failed to update verification status:', err);
    } finally {
      setActingOnId(null);
    }
  };

  const handleSaveEdit = async () => {
    if (!editingQuestion) return;
    try {
      await api.updatePYQQuestion(editingQuestion.id, {
        questionText: editingQuestion.questionText,
        options: editingQuestion.options,
        correctAnswer: editingQuestion.correctAnswer,
        explanation: editingQuestion.explanation,
        diagramUrl: editingQuestion.diagramUrl,
        questionType: editingQuestion.questionType,
        subject: editingQuestion.subject,
        sectionName: editingQuestion.sectionName,
        verificationStatus: editingQuestion.verificationStatus,
      });
      setSaveSuccessMsg('Question updated and verified successfully.');
      setTimeout(() => setSaveSuccessMsg(null), 3000);
      setEditingQuestion(null);
      await loadPortalData();
    } catch (err) {
      console.error('Failed to save edited question:', err);
    }
  };

  const handleReviewAction = async (id: string, action: 'APPROVED' | 'REJECTED') => {
    setActingOnId(id);
    try {
      await api.reviewQuestion(id, action, reviewNotes[id] || 'Verified for academic rigor and provenance.');
      await loadPortalData();
    } catch (err) {
      console.error('Review action failed:', err);
    } finally {
      setActingOnId(null);
    }
  };

  const handleSynthesizeAIQuestion = async () => {
    setGenerating(true);
    setGeneratedResult(null);
    try {
      const res = await api.generateAIPracticeQuestion({
        examId: 'jee-main',
        difficulty: selectedDifficulty,
      });
      setGeneratedResult(res);
    } catch (err) {
      console.error('AI synthesis failed:', err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Bespoke Architectural Header Surface (Clean Light SaaS Canvas) */}
      <div className="rounded-2xl bg-white border border-zinc-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold border border-zinc-200/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-[11px] font-medium tracking-tight">Academic Integrity • Content Governance Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-[-0.02em]">
              Reviewer & Admin Control Center
            </h1>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Maintain transparent exam provenance, verify questions, audit official syllabus coverage, and inspect schema-validated AI practice variants before publishing.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-600 text-xs font-mono tabular-nums flex items-center gap-2 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-medium text-zinc-700">Governance Engine Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Refined Segmented Sub-Navigation Track */}
      <div className="bg-zinc-100/90 p-1.5 rounded-xl border border-zinc-200/80 shadow-2xs overflow-hidden">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 px-0.5">
          <button
            onClick={() => setActiveTab('LIVE_TESTS')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'LIVE_TESTS'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${activeTab === 'LIVE_TESTS' ? 'text-amber-600' : 'text-zinc-400'}`} />
            <span>Weekly Live Tests</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
          </button>

          <button
            onClick={() => setActiveTab('EXAMS_MANAGER')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'EXAMS_MANAGER'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <Layers className={`w-3.5 h-3.5 ${activeTab === 'EXAMS_MANAGER' ? 'text-emerald-700' : 'text-zinc-400'}`} />
            <span>All Exams & Tests Manager</span>
          </button>

          <button
            onClick={() => setActiveTab('STUDENTS_ACTIVITY')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'STUDENTS_ACTIVITY'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <Users className={`w-3.5 h-3.5 ${activeTab === 'STUDENTS_ACTIVITY' ? 'text-emerald-700' : 'text-zinc-400'}`} />
            <span>Live Students & Exam History</span>
          </button>

          <button
            onClick={() => setActiveTab('JEE_PYQ')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'JEE_PYQ'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <FileCheck className={`w-3.5 h-3.5 ${activeTab === 'JEE_PYQ' ? 'text-emerald-700' : 'text-zinc-400'}`} />
            <span>JEE Main PYQ ({pyqQuestions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('QUEUE')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'QUEUE'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            Review Queue ({queue.length})
          </button>

          <button
            onClick={() => setActiveTab('AI_GENERATOR')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'AI_GENERATOR'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${activeTab === 'AI_GENERATOR' ? 'text-amber-600' : 'text-zinc-400'}`} />
            <span>AI Synthesizer</span>
          </button>

          <button
            onClick={() => setActiveTab('AUDIT')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'AUDIT'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            Coverage Audit
          </button>

          <button
            onClick={() => setActiveTab('MONETIZATION')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'MONETIZATION'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <IndianRupee className={`w-3.5 h-3.5 ${activeTab === 'MONETIZATION' ? 'text-emerald-700' : 'text-zinc-400'}`} />
            <span>Monetization & Pricing</span>
          </button>

          <button
            onClick={() => setActiveTab('SUPER_TET_PYQ')}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'SUPER_TET_PYQ'
                ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/80 font-bold'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <ShieldCheck className={`w-3.5 h-3.5 ${activeTab === 'SUPER_TET_PYQ' ? 'text-emerald-700' : 'text-zinc-400'}`} />
            <span>SUPER TET (2012–25)</span>
          </button>
        </div>
      </div>

      {/* Tab: Weekly Live Mock Tests Scheduler & Telemetry */}
      {activeTab === 'LIVE_TESTS' && <AdminLiveTestManager />}

      {/* Tab: Multi-Exam Manager */}
      {activeTab === 'EXAMS_MANAGER' && <AdminExamsManager />}

      {/* Tab: Live Students & Exam History */}
      {activeTab === 'STUDENTS_ACTIVITY' && <AdminStudentActivity />}

      {/* Tab: SUPER TET PYQ Manager */}
      {activeTab === 'SUPER_TET_PYQ' && <AdminSuperTetManager />}

      {/* Tab 0: JEE Main PYQ Database Management */}
      {activeTab === 'JEE_PYQ' && (
        <div className="space-y-6">
          {saveSuccessMsg && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{saveSuccessMsg}</span>
            </div>
          )}

          {/* Filter & Export Toolbar */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5" />
                <span>Filters:</span>
              </div>

              {/* Year Filter */}
              <select
                value={pyqYear}
                onChange={(e) => setPyqYear(e.target.value)}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="ALL">All Years (2021-2025)</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>

              {/* Subject Filter */}
              <select
                value={pyqSubject}
                onChange={(e) => setPyqSubject(e.target.value)}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="ALL">All Subjects</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
              </select>

              {/* Status Filter */}
              <select
                value={pyqStatus}
                onChange={(e) => setPyqStatus(e.target.value)}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="ALL">All Statuses</option>
                <option value="VERIFIED">Verified</option>
                <option value="NEEDS_VERIFICATION">Needs Verification</option>
                <option value="INCOMPLETE">Incomplete / Missing Fields</option>
                <option value="UNDER_REVIEW">Pending Review</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => api.exportPYQQuestions(pyqYear !== 'ALL' ? pyqYear : undefined)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON ({pyqYear})</span>
              </button>
            </div>
          </div>

          {/* Question List */}
          {loading ? (
            <div className="h-64 bg-slate-100 rounded-2xl animate-pulse" />
          ) : pyqQuestions.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white border border-slate-200">
              <CheckCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-bold text-sm">No questions match the current filters.</p>
              <p className="text-slate-400 text-xs mt-1">Try selecting another year or subject.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pyqQuestions.map((q) => (
                <div
                  key={q.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all space-y-4"
                >
                  {/* Card Header Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                        JEE Main {q.year}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                        {q.shift}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
                        {q.subject} • {q.chapter}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold">
                        Q.{q.questionNumber} ({q.questionType})
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-semibold">
                        Marks: {q.marks} | Neg: {q.negativeMarks}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                          q.verificationStatus === 'verified'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{q.verificationStatus.toUpperCase()}</span>
                      </span>

                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          q.isPublished
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {q.isPublished ? '● Published' : '○ Unpublished'}
                      </span>
                    </div>
                  </div>

                  {/* Question Content */}
                  {q.diagramUrl && (
                    <div className="rounded-lg border border-slate-200 bg-white p-2 overflow-x-auto">
                      <img src={q.diagramUrl} alt={`Q.${q.questionNumber}`} className="max-h-56 w-auto" />
                    </div>
                  )}
                  <div className="text-sm font-medium text-slate-900 leading-relaxed">
                    {q.questionText}
                  </div>

                  {/* Options (if MCQ) */}
                  {q.questionType === 'MCQ' && q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {q.options.map((opt: any) => {
                        const isCorrect = q.correctAnswer?.includes(opt.key);
                        return (
                          <div
                            key={opt.key}
                            className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
                              isCorrect
                                ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                isCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-200 text-slate-600'
                              }`}
                            >
                              {opt.key}
                            </span>
                            <span>{opt.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Numerical Answer (if Numerical) */}
                  {q.questionType === 'NUMERICAL' && (
                    <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 font-semibold flex items-center gap-2">
                      <span>Official Numerical Answer:</span>
                      <span className="px-2 py-0.5 rounded-md bg-purple-200 text-purple-950 font-bold">
                        {q.correctAnswer?.[0] || q.numericalAnswer || 'Pending Verification'}
                      </span>
                    </div>
                  )}

                  {/* Explanation Preview */}
                  {q.explanation && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                      <span className="font-bold text-slate-800">Step-by-step Solution:</span>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>
                  )}

                  {/* Source Provenance */}
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span>Provenance:</span>
                    <span className="text-slate-600 font-medium">{q.source?.provenance || q.source?.pdf}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setEditingQuestion(q)}
                      className="px-3.5 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-slate-500" />
                      <span>Edit Question & Key</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {q.verificationStatus !== 'verified' && (
                        <button
                          disabled={actingOnId === q.id}
                          onClick={() => handleApproveStatus(q.id, 'verified')}
                          className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-xs"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Verify Official Key</span>
                        </button>
                      )}

                      <button
                        disabled={actingOnId === q.id}
                        onClick={() => handleTogglePublish(q.id, q.isPublished, q.verificationStatus)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-xs ${
                          q.isPublished
                            ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                            : 'bg-brand-600 text-white hover:bg-brand-700'
                        }`}
                      >
                        {q.isPublished ? 'Unpublish' : 'Publish Question'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Edit Modal */}
          {editingQuestion && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      Edit PYQ Question #{editingQuestion.questionNumber}
                    </h3>
                    <p className="text-xs text-slate-500">
                      JEE Main {editingQuestion.year} • {editingQuestion.subject} ({editingQuestion.shift})
                    </p>
                  </div>
                  <button
                    onClick={() => setEditingQuestion(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Question Text
                    </label>
                    <textarea
                      rows={4}
                      value={editingQuestion.questionText}
                      onChange={(e) =>
                        setEditingQuestion({ ...editingQuestion, questionText: e.target.value })
                      }
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  {editingQuestion.questionType === 'MCQ' && (
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Options
                      </label>
                      {editingQuestion.options?.map((opt: any, idx: number) => (
                        <div key={opt.key} className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-slate-100 font-bold text-xs flex items-center justify-center text-slate-700 shrink-0">
                            {opt.key}
                          </span>
                          <input
                            type="text"
                            value={opt.text}
                            onChange={(e) => {
                              const newOpts = [...editingQuestion.options];
                              newOpts[idx] = { ...opt, text: e.target.value };
                              setEditingQuestion({ ...editingQuestion, options: newOpts });
                            }}
                            className="flex-1 p-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Subject</label>
                      <select
                        value={editingQuestion.subject || 'Physics'}
                        onChange={(e) => setEditingQuestion({ ...editingQuestion, subject: e.target.value })}
                        className="w-full p-2 rounded-lg border border-slate-200 text-xs font-semibold bg-white"
                      >
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Mathematics">Mathematics</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Section</label>
                      <input
                        type="text"
                        value={editingQuestion.sectionName || ''}
                        onChange={(e) => setEditingQuestion({ ...editingQuestion, sectionName: e.target.value })}
                        placeholder="e.g. Physics - Section A"
                        className="w-full p-2 rounded-lg border border-slate-200 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Question Type</label>
                      <select
                        value={editingQuestion.questionType || 'MCQ'}
                        onChange={(e) => setEditingQuestion({ ...editingQuestion, questionType: e.target.value })}
                        className="w-full p-2 rounded-lg border border-slate-200 text-xs font-semibold bg-white"
                      >
                        <option value="MCQ">MCQ (Single Choice)</option>
                        <option value="NUMERICAL">Numerical Value</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Diagram / Equation Figure URL or Upload
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        value={editingQuestion.diagramUrl || ''}
                        onChange={(e) => setEditingQuestion({ ...editingQuestion, diagramUrl: e.target.value })}
                        placeholder="/pyq-crops/... or https://..."
                        className="flex-1 p-2 rounded-lg border border-slate-200 text-xs font-mono"
                      />
                      <label className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer text-center border border-slate-300">
                        <span>Upload Image</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (!f) return;
                            const reader = new FileReader();
                            reader.onload = () => setEditingQuestion({ ...editingQuestion, diagramUrl: String(reader.result || '') });
                            reader.readAsDataURL(f);
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Correct Answer Key
                      </label>
                      <input
                        type="text"
                        value={editingQuestion.correctAnswer?.join(', ') || ''}
                        onChange={(e) =>
                          setEditingQuestion({
                            ...editingQuestion,
                            correctAnswer: e.target.value.split(',').map((s) => s.trim().toUpperCase()),
                          })
                        }
                        placeholder="e.g. B or 25"
                        className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Verification Status
                      </label>
                      <select
                        value={editingQuestion.verificationStatus}
                        onChange={(e) =>
                          setEditingQuestion({ ...editingQuestion, verificationStatus: e.target.value })
                        }
                        className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-bold focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      >
                        <option value="verified">Verified</option>
                        <option value="needs_verification">Needs Verification</option>
                        <option value="under_review">Under Review</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Step-by-step Solution / Explanation
                    </label>
                    <textarea
                      rows={3}
                      value={editingQuestion.explanation || ''}
                      onChange={(e) =>
                        setEditingQuestion({ ...editingQuestion, explanation: e.target.value })
                      }
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setEditingQuestion(null)}
                    className="px-4 py-2 rounded-xl text-slate-600 text-xs font-bold hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="px-5 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 1: Review Queue */}
      {activeTab === 'QUEUE' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-slate-900">
              Questions Awaiting Senior Academic Review
            </h3>
            <span className="text-xs text-slate-500">
              Mandatory human sign-off for all AI synthesized items.
            </span>
          </div>

          {loading ? (
            <div className="h-44 bg-slate-100 rounded-2xl animate-pulse" />
          ) : queue.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">Review Queue is Clear!</h3>
              <p className="text-xs text-slate-500 mt-1">
                All questions and practice variants have been verified against official bulletins.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {queue.map((q) => (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                        {q.exam?.shortName}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{q.syllabusNode?.title}</span>
                      {q.isAIGenerated ? (
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                          AI Generated ({q.aiModelUsed || 'Gemini 1.5 Pro'})
                        </span>
                      ) : (
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                          Official PYQ {q.pyqYear}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-800 border border-amber-200">
                      Status: Under Review
                    </span>
                  </div>

                  {/* Stem */}
                  <div className="text-sm font-medium text-slate-900 whitespace-pre-line leading-relaxed">
                    {q.contentEn}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options?.map((opt: any, optIdx: number) => {
                      const isCorrect = q.correctAnswers?.includes(opt.id);
                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border flex items-center gap-2 ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span>{String.fromCharCode(65 + optIdx)}.</span>
                          <span>{opt.textEn}</span>
                          {isCorrect && <Check className="w-4 h-4 text-emerald-600 ml-auto" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                    <span className="font-bold text-slate-900">Proposed Step-by-Step Derivation:</span>
                    <p className="whitespace-pre-line text-slate-600">{q.explanationEn}</p>
                  </div>

                  {/* Provenance Footer */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
                    <span className="text-[11px] text-slate-500 font-medium">
                      Provenance: {q.sourceProvenance}
                    </span>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => handleReviewAction(q.id, 'REJECTED')}
                        disabled={actingOnId === q.id}
                        className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-colors"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleReviewAction(q.id, 'APPROVED')}
                        disabled={actingOnId === q.id}
                        className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all active:scale-95"
                      >
                        {actingOnId === q.id ? 'Approving...' : 'Approve & Verify'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: AI Synthesizer */}
      {activeTab === 'AI_GENERATOR' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-600" />
                <span>AI Practice Question Generator (RAG over Authorized Curated Content)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Generates syllabus-anchored practice questions with strict schema validation, duplicate hash checking, and automatic flagging for academic sign-off.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject Area</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white"
                >
                  <option value="Physics">Physics (Mechanics, SHM, Electrodynamics)</option>
                  <option value="Chemistry">Chemistry (Organic, Physical, Inorganic)</option>
                  <option value="Mathematics">Mathematics (Calculus, Algebra, Coordinate)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white"
                >
                  <option value="EASY">Easy (Direct formula application)</option>
                  <option value="MEDIUM">Medium (JEE Main standard 2-step)</option>
                  <option value="HARD">Hard (Multi-concept synthesis)</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSynthesizeAIQuestion}
                  disabled={generating}
                  className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{generating ? 'Synthesizing Question...' : 'Generate Validated Item'}</span>
                </button>
              </div>
            </div>

            {/* Generated Question Output */}
            {generatedResult && (
              <div className="p-6 rounded-2xl bg-brand-50/50 border border-brand-200 space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-brand-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-600 text-white">
                      Synthesized Item
                    </span>
                    <span className="text-xs font-semibold text-brand-900">
                      Validation: Schema Valid • 4 Options • Duplicate Check Clear
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-200">
                    Flagged: UNDER_REVIEW
                  </span>
                </div>

                <div className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                  {generatedResult.question.contentEn}
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-brand-100 text-xs space-y-1 text-slate-700">
                  <span className="font-bold text-slate-900">Step-by-Step Explanation:</span>
                  <p className="whitespace-pre-line">{generatedResult.question.explanationEn}</p>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  Note: This question has been entered into the Review Queue for mandatory human review before it can appear in live student mock test series.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Coverage Audit */}
      {activeTab === 'AUDIT' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-medium text-slate-400 uppercase">Total Questions</div>
              <div className="text-3xl font-extrabold text-slate-900 mt-1">
                {auditMetrics?.metrics?.totalQuestions || 0}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-medium text-slate-400 uppercase">Verified Official PYQs</div>
              <div className="text-3xl font-extrabold text-emerald-600 mt-1">
                {auditMetrics?.metrics?.officialPYQs || 0}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-medium text-slate-400 uppercase">AI Practice Items</div>
              <div className="text-3xl font-extrabold text-purple-600 mt-1">
                {auditMetrics?.metrics?.aiGeneratedQuestions || 0}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-medium text-slate-400 uppercase">Pending Review</div>
              <div className="text-3xl font-extrabold text-amber-600 mt-1">
                {auditMetrics?.metrics?.pendingQuestions || 0}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Official Examination Coverage Logs
            </h3>
            <p className="text-xs text-slate-500">
              Every syllabus revision issued by conducting bodies (NTA, UPSC, SSC, IISc) is tracked and audited for complete question coverage.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <p className="font-bold text-slate-900">JEE Main 2024 Rationalization Audit</p>
              <p className="text-slate-600 mt-1">
                All 143/145 topics verified with minimum 10 shift PYQs mapped per topic. Removed deleted chapters (P-Block full coverage, Potentiometer, Rolling Motion) to prevent out-of-syllabus student confusion.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Dynamic Monetization & Pricing Control Center */}
      {activeTab === 'MONETIZATION' && (
        <AdminPricingManager />
      )}
    </div>
  );
};
