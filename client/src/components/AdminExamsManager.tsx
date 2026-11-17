import React, { useState, useEffect } from 'react';
import {
  Plus,
  Layers,
  FileCheck2,
  CheckCircle2,
  AlertCircle,
  Save,
  Eye,
  EyeOff,
  Trash2,
  ArrowUp,
  ArrowDown,
  Clock,
  BookOpen,
  Bell,
  X,
  IndianRupee,
  Tag,
  Sparkles,
  Edit3,
  Check,
  RefreshCw,
} from 'lucide-react';
import { api } from '../api';
import { SubscriptionPlan } from '../types';

export interface AdminExamsManagerProps {
  selectedExamId?: string;
  onExamSelected?: (exam: any) => void;
}

export const AdminExamsManager: React.FC<AdminExamsManagerProps> = ({
  selectedExamId,
  onExamSelected,
}) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [exams, setExams] = useState<any[]>([]);
  const [selectedExam, setSelectedExam] = useState<any | null>(null);
  const [examTests, setExamTests] = useState<any[]>([]);
  const [selectedTest, setSelectedTest] = useState<any | null>(null);
  const [testQuestions, setTestQuestions] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Exam Edit State
  const [editHeadline, setEditHeadline] = useState('');
  const [editNotice, setEditNotice] = useState('');
  const [editNoticeDate, setEditNoticeDate] = useState('');
  const [editNoticeUrl, setEditNoticeUrl] = useState('');
  const [editStatus, setEditStatus] = useState('ACTIVE');
  const [editComingSoon, setEditComingSoon] = useState(false);

  // Create Exam Modal State
  const [showNewExamModal, setShowNewExamModal] = useState(false);
  const [newExam, setNewExam] = useState({
    slug: '',
    title: '',
    shortName: '',
    conductingBody: '',
    categoryId: '',
    durationMinutes: 120,
    totalMarks: 100,
    totalQuestions: 100,
    isComingSoon: false,
    portalHeadline: '',
    latestNotification: '',
  });

  // Create Test Modal State
  const [showNewTestModal, setShowNewTestModal] = useState(false);
  const [newTest, setNewTest] = useState({
    title: '',
    type: 'FULL_MOCK',
    durationMinutes: 180,
    totalMarks: 300,
    accessLevel: 'FREE',
  });

  // Add Question State
  const [showAddQModal, setShowAddQModal] = useState(false);
  const [newQ, setNewQ] = useState({
    sectionName: 'General',
    subject: 'General',
    topic: 'General',
    contentEn: '',
    optA: '',
    optB: '',
    optC: '',
    optD: '',
    correctAnswer: 'A',
    explanationEn: '',
    marks: 1,
    negativeMarks: 0,
    isPYQ: false,
  });

  // Pricing & Plans CMS State for Selected Exam
  const [examPlans, setExamPlans] = useState<SubscriptionPlan[]>([]);
  const [loadingPlans, setLoadingPlans] = useState(false);
  const [savingPlanId, setSavingPlanId] = useState<string | null>(null);
  const [showAddPlanModal, setShowAddPlanModal] = useState(false);
  const [newPlanForm, setNewPlanForm] = useState({
    name: '',
    badge: 'Popular',
    priceINR: 49,
    originalPriceINR: 149,
    durationDays: 90,
    description: '',
    featuresText: 'Full CBT Simulator Interface\nOfficial Verified Shift Papers\nDetailed Derivations & Solutions\nAIR Rank & Accuracy Audit',
    isPublished: true,
  });

  useEffect(() => {
    loadExams();
  }, []);

  const loadExams = async () => {
    setLoading(true);
    try {
      const res = await api.getAdminExams();
      setCategories(res.categories || []);
      setExams(res.exams || []);
      if (res.categories?.length && !newExam.categoryId) {
        setNewExam((prev) => ({ ...prev, categoryId: res.categories[0].id }));
      }
      if (res.exams?.length) {
        const target = selectedExamId
          ? res.exams.find((e: any) => e.id === selectedExamId || e.slug === selectedExamId) || res.exams[0]
          : selectedExam
          ? res.exams.find((e: any) => e.id === selectedExam.id) || res.exams[0]
          : res.exams[0];
        selectExamRow(target);
      }
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to load exams' });
    } finally {
      setLoading(false);
    }
  };

  // Sync external selection changes
  useEffect(() => {
    if (selectedExamId && exams.length > 0) {
      if (selectedExam?.id !== selectedExamId && selectedExam?.slug !== selectedExamId) {
        const target = exams.find((e: any) => e.id === selectedExamId || e.slug === selectedExamId);
        if (target) {
          selectExamRow(target);
        }
      }
    }
  }, [selectedExamId, exams]);

  const selectExamRow = async (exam: any) => {
    setSelectedExam(exam);
    if (onExamSelected) {
      onExamSelected(exam);
    }
    setSelectedTest(null);
    setTestQuestions([]);
    setEditHeadline(exam.portalHeadline || '');
    setEditNotice(exam.latestNotification || '');
    setEditNoticeDate(exam.notificationDate || '');
    setEditNoticeUrl(exam.officialNoticeUrl || '');
    setEditStatus(exam.status || 'ACTIVE');
    setEditComingSoon(Boolean(exam.isComingSoon));

    try {
      const res = await api.getAdminExamTests(exam.id);
      setExamTests(res.tests || []);
    } catch (err) {
      console.error('Error loading tests for exam:', err);
    }

    if (exam.slug) {
      loadExamPlans(exam.slug);
    }
  };

  const loadExamPlans = async (slug: string) => {
    setLoadingPlans(true);
    try {
      const res = await api.getAdminExamPlans(slug);
      setExamPlans(res.plans || []);
    } catch (err) {
      console.error('Error loading plans for exam:', err);
    } finally {
      setLoadingPlans(false);
    }
  };

  const handleSavePlan = async (planId: string, updatedData: any) => {
    setSavingPlanId(planId);
    setMsg(null);
    try {
      const featuresArray = typeof updatedData.features === 'string'
        ? updatedData.features.split('\n').map((f: string) => f.trim()).filter(Boolean)
        : Array.isArray(updatedData.features)
        ? updatedData.features
        : [];

      await api.updateAdminPlan(planId, {
        name: updatedData.name,
        badge: updatedData.badge || null,
        price: Number(updatedData.priceINR ?? updatedData.price),
        originalPrice: Number(updatedData.originalPriceINR ?? updatedData.originalPrice),
        discountPct: updatedData.discountPct ? Number(updatedData.discountPct) : undefined,
        durationDays: Number(updatedData.durationDays),
        description: updatedData.description,
        features: featuresArray,
        isPublished: updatedData.isPublished !== undefined ? Boolean(updatedData.isPublished) : true,
        examSlug: selectedExam?.slug,
      });

      setMsg({ type: 'success', text: `Plan "${updatedData.name}" updated successfully for ${selectedExam?.shortName}!` });
      if (selectedExam?.slug) {
        loadExamPlans(selectedExam.slug);
      }
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to update plan' });
    } finally {
      setSavingPlanId(null);
    }
  };

  const handleCreateExamPlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExam) return;
    setMsg(null);
    try {
      const featuresArray = newPlanForm.featuresText
        .split('\n')
        .map((f) => f.trim())
        .filter(Boolean);

      const prefix = selectedExam.slug.toUpperCase().replace(/[^A-Z0-9]/g, '_');
      const uniqueCode = `PLAN_${prefix}_${Date.now().toString().slice(-4)}`;

      await api.createAdminPlan({
        name: newPlanForm.name,
        code: uniqueCode,
        badge: newPlanForm.badge || null,
        price: Number(newPlanForm.priceINR),
        originalPrice: Number(newPlanForm.originalPriceINR),
        durationDays: Number(newPlanForm.durationDays),
        description: newPlanForm.description,
        features: featuresArray,
        isPublished: newPlanForm.isPublished,
        examSlug: selectedExam.slug,
      });

      setMsg({ type: 'success', text: `Created plan "${newPlanForm.name}" for ${selectedExam.shortName}!` });
      setShowAddPlanModal(false);
      setNewPlanForm({
        name: '',
        badge: 'Popular',
        priceINR: 49,
        originalPriceINR: 149,
        durationDays: 90,
        description: '',
        featuresText: 'Full CBT Simulator Interface\nOfficial Verified Shift Papers\nDetailed Derivations & Solutions\nAIR Rank & Accuracy Audit',
        isPublished: true,
      });
      loadExamPlans(selectedExam.slug);
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to create plan' });
    }
  };

  const handleSaveExamSettings = async () => {
    if (!selectedExam) return;
    setMsg(null);
    try {
      await api.updateAdminExam(selectedExam.id, {
        portalHeadline: editHeadline,
        latestNotification: editNotice,
        notificationDate: editNoticeDate,
        officialNoticeUrl: editNoticeUrl,
        status: editStatus,
        isComingSoon: editComingSoon,
      });
      setMsg({ type: 'success', text: `Saved settings for ${selectedExam.shortName}.` });
      loadExams();
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to update exam' });
    }
  };

  const handleCreateExam = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    try {
      const res = await api.createAdminExam(newExam);
      setMsg({ type: 'success', text: res.message || 'Exam created successfully!' });
      setShowNewExamModal(false);
      setNewExam({
        slug: '',
        title: '',
        shortName: '',
        conductingBody: '',
        categoryId: categories[0]?.id || '',
        durationMinutes: 120,
        totalMarks: 100,
        totalQuestions: 100,
        isComingSoon: false,
        portalHeadline: '',
        latestNotification: '',
      });
      loadExams();
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to create exam portal' });
    }
  };

  const handleCreateTest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExam) return;
    setMsg(null);
    try {
      await api.createAdminTest({
        examId: selectedExam.id,
        ...newTest,
      });
      setMsg({ type: 'success', text: `Test "${newTest.title}" created in ${selectedExam.shortName}. Add questions before publishing.` });
      setShowNewTestModal(false);
      setNewTest({ title: '', type: 'FULL_MOCK', durationMinutes: 180, totalMarks: 300, accessLevel: 'FREE' });
      selectExamRow(selectedExam);
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to create test' });
    }
  };

  const handleTogglePublishTest = async (test: any) => {
    setMsg(null);
    try {
      await api.publishAdminTest(test.id, !test.isPublished);
      setMsg({ type: 'success', text: `Test "${test.title}" is now ${!test.isPublished ? 'Published' : 'Unpublished'}.` });
      selectExamRow(selectedExam);
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to update publish status' });
    }
  };

  const loadQuestionsForTest = async (test: any) => {
    setSelectedTest(test);
    try {
      const res = await api.getAdminTestQuestions(test.id);
      setTestQuestions(res.questions || []);
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to load test questions' });
    }
  };

  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExam || !selectedTest) return;
    setMsg(null);
    try {
      await api.createAdminQuestion({
        examId: selectedExam.id,
        testId: selectedTest.id,
        sectionName: newQ.sectionName,
        subject: newQ.subject,
        topic: newQ.topic,
        contentEn: newQ.contentEn,
        options: [
          { id: 'A', textEn: newQ.optA },
          { id: 'B', textEn: newQ.optB },
          { id: 'C', textEn: newQ.optC },
          { id: 'D', textEn: newQ.optD },
        ],
        correctAnswer: newQ.correctAnswer,
        explanationEn: newQ.explanationEn,
        marks: Number(newQ.marks),
        negativeMarks: Number(newQ.negativeMarks),
        isPYQ: newQ.isPYQ,
      });
      setMsg({ type: 'success', text: 'Question added to test.' });
      setShowAddQModal(false);
      setNewQ({
        sectionName: newQ.sectionName,
        subject: newQ.subject,
        topic: 'General',
        contentEn: '',
        optA: '',
        optB: '',
        optC: '',
        optD: '',
        correctAnswer: 'A',
        explanationEn: '',
        marks: newQ.marks,
        negativeMarks: newQ.negativeMarks,
        isPYQ: false,
      });
      await loadQuestionsForTest(selectedTest);
      const tRes = await api.getAdminExamTests(selectedExam.id);
      setExamTests(tRes.tests || []);
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Failed to create question' });
    }
  };

  const handleReorderQuestion = async (indexA: number, indexB: number) => {
    if (!selectedTest || indexB < 0 || indexB >= testQuestions.length) return;
    try {
      await api.reorderAdminTestQuestions(
        selectedTest.id,
        testQuestions[indexA].id,
        testQuestions[indexB].id
      );
      await loadQuestionsForTest(selectedTest);
      setMsg({ type: 'success', text: 'Question order updated.' });
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Reorder failed' });
    }
  };

  const handleDeleteQuestion = async (questionId: string) => {
    if (!selectedTest) return;
    try {
      await api.deleteAdminQuestion(questionId);
      setMsg({ type: 'success', text: 'Question deleted.' });
      await loadQuestionsForTest(selectedTest);
      const tRes = await api.getAdminExamTests(selectedExam.id);
      setExamTests(tRes.tests || []);
    } catch (err: any) {
      setMsg({ type: 'error', text: err.message || 'Delete failed' });
    }
  };

  if (loading && exams.length === 0) {
    return (
      <div className="py-12 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
        <Clock className="w-4 h-4 animate-spin text-tn-blue" />
        <span>Loading multi-exam control panel...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {msg && (
        <div
          className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-between ${
            msg.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          <span className="flex items-center gap-2">
            {msg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            {msg.text}
          </span>
          <button onClick={() => setMsg(null)} className="cursor-pointer"><X className="w-4 h-4" /></button>
        </div>
      )}

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
        <div>
          <h2 className="text-sm font-bold text-tn-navy flex items-center gap-2">
            <Layers className="w-4 h-4 text-tn-blue" />
            <span>Multi-Exam Portals, Mock Tests & Question Bank</span>
          </h2>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Manage all {exams.length} examination portals, notices, "Coming Soon" flags, tests, and questions from one console.
          </p>
        </div>
        <button
          onClick={() => setShowNewExamModal(true)}
          className="px-3.5 py-2 rounded-lg bg-tn-navy hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer self-start"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add New Exam Portal</span>
        </button>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Exam Selector List (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-1">
            Examination Portals ({exams.length})
          </p>
          <div className="space-y-2">
            {exams.map((exam) => {
              const active = selectedExam?.id === exam.id;
              return (
                <button
                  key={exam.id}
                  onClick={() => selectExamRow(exam)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    active
                      ? 'bg-tn-navy text-white border-tn-navy shadow-sm'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold">{exam.shortName}</span>
                    <div className="flex items-center gap-1">
                      {exam.isComingSoon && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-400 text-slate-900">
                          Coming Soon
                        </span>
                      )}
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                          active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {exam._count?.tests || 0} Tests
                      </span>
                    </div>
                  </div>
                  <p className={`text-[11px] mt-1 truncate ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                    {exam.title}
                  </p>
                  <p className={`text-[10px] font-mono mt-1 ${active ? 'text-emerald-300' : 'text-slate-400'}`}>
                    /exams/{exam.slug} • {exam._count?.questions || 0} Qs
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Exam Configuration, Tests & Questions (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          {selectedExam && (
            <>
              {/* Exam Notice & Coming-Soon Settings */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-tn-navy flex items-center gap-2">
                      <Bell className="w-4 h-4 text-amber-600" />
                      <span>{selectedExam.shortName} Portal Settings & Official Notice</span>
                    </h3>
                    <p className="text-[11px] text-slate-500">Conducting Body: {selectedExam.conductingBody}</p>
                  </div>
                  <button
                    onClick={handleSaveExamSettings}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 mb-1">Portal Headline</label>
                    <input
                      type="text"
                      value={editHeadline}
                      onChange={(e) => setEditHeadline(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 mb-1">Latest Notification / Update Banner</label>
                    <textarea
                      rows={2}
                      value={editNotice}
                      onChange={(e) => setEditNotice(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Notice Date / Cycle</label>
                    <input
                      type="text"
                      value={editNoticeDate}
                      onChange={(e) => setEditNoticeDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Official Notice URL</label>
                    <input
                      type="text"
                      value={editNoticeUrl}
                      onChange={(e) => setEditNoticeUrl(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <label className="flex items-center gap-2 font-semibold text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={editComingSoon}
                        onChange={(e) => setEditComingSoon(e.target.checked)}
                        className="rounded border-slate-300"
                      />
                      <span>Mark as "Coming Soon"</span>
                    </label>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Visibility Status</label>
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                    >
                      <option value="ACTIVE">ACTIVE (Visible)</option>
                      <option value="DRAFT">DRAFT (Hidden)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dynamic Pricing & Plan Manager for Selected Exam (Student Modal CMS) */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-emerald-600" />
                      <span>{selectedExam.shortName} Pricing & Plans Manager (Dynamic Student Modal)</span>
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Directly edit and vary plan titles, badges, prices (INR / USD), validity, and features shown in the student pricing modal for {selectedExam.title}.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => loadExamPlans(selectedExam.slug)}
                      disabled={loadingPlans}
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
                      title="Reload Plans"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${loadingPlans ? 'animate-spin' : ''}`} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddPlanModal(true)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Custom Plan</span>
                    </button>
                  </div>
                </div>

                {loadingPlans && examPlans.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
                    <span>Loading pricing plans for {selectedExam.shortName}...</span>
                  </div>
                ) : examPlans.length === 0 ? (
                  <div className="py-6 text-center text-xs text-slate-500 border border-dashed border-slate-200 rounded-xl">
                    No custom plans found. Default starter plans will automatically populate.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {examPlans.map((plan) => (
                      <ExamPlanEditorCard
                        key={plan.id}
                        plan={plan}
                        selectedExam={selectedExam}
                        saving={savingPlanId === plan.id}
                        onSave={(updatedData) => handleSavePlan(plan.id, updatedData)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Tests List for Selected Exam */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-bold text-tn-navy flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-tn-blue" />
                    <span>Tests in {selectedExam.shortName} ({examTests.length})</span>
                  </h3>
                  <button
                    onClick={() => setShowNewTestModal(true)}
                    className="px-3 py-1.5 rounded-lg bg-tn-blue hover:bg-tn-blue-hover text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Test</span>
                  </button>
                </div>

                {examTests.length === 0 ? (
                  <p className="text-xs text-slate-500 py-4 text-center">No tests found for this examination.</p>
                ) : (
                  <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {examTests.map((t) => (
                      <div
                        key={t.id}
                        className={`p-3 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                          selectedTest?.id === t.id ? 'border-tn-blue bg-blue-50/40' : 'border-slate-200 bg-slate-50/50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-tn-navy">{t.title}</span>
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                t.isPublished
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {t.isPublished ? 'Published' : 'Draft'}
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-white border border-slate-200 text-slate-600">
                              {t._count?.testQuestions ?? t.totalQuestions} Qs • {t.durationMinutes}m • {t.accessLevel}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => loadQuestionsForTest(t)}
                            className="px-2.5 py-1 rounded bg-white border border-slate-300 hover:border-tn-blue text-slate-700 text-[11px] font-semibold flex items-center gap-1 cursor-pointer"
                          >
                            <BookOpen className="w-3 h-3" />
                            <span>Questions</span>
                          </button>
                          <button
                            onClick={() => handleTogglePublishTest(t)}
                            className={`px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1 cursor-pointer ${
                              t.isPublished
                                ? 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                                : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                            }`}
                          >
                            {t.isPublished ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                            <span>{t.isPublished ? 'Unpublish' : 'Publish'}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Questions Inspector & Reorder for Selected Test */}
              {selectedTest && (
                <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h3 className="text-sm font-bold text-tn-navy">
                        Questions in "{selectedTest.title}" ({testQuestions.length})
                      </h3>
                      <p className="text-[11px] text-slate-500">Add, reorder, or remove questions inside this test.</p>
                    </div>
                    <button
                      onClick={() => setShowAddQModal(true)}
                      className="px-3 py-1.5 rounded-lg bg-tn-navy hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Question</span>
                    </button>
                  </div>

                  {testQuestions.length === 0 ? (
                    <p className="text-xs text-slate-500 text-center py-6">
                      No questions in this test yet. Add at least 1 question before publishing.
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                      {testQuestions.map((tq, idx) => (
                        <div key={tq.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-3">
                          <div className="space-y-1 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-tn-navy">Q{tq.questionNumber}</span>
                              <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-semibold">
                                {tq.sectionName}
                              </span>
                              <span className="text-[10px] text-emerald-700 font-semibold">
                                +{tq.marks} / -{tq.negativeMarks}
                              </span>
                            </div>
                            <p className="text-slate-800 line-clamp-2">{tq.question?.contentEn}</p>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => handleReorderQuestion(idx, idx - 1)}
                              disabled={idx === 0}
                              className="p-1.5 rounded bg-white border border-slate-200 disabled:opacity-30 cursor-pointer"
                              title="Move Up"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleReorderQuestion(idx, idx + 1)}
                              disabled={idx === testQuestions.length - 1}
                              className="p-1.5 rounded bg-white border border-slate-200 disabled:opacity-30 cursor-pointer"
                              title="Move Down"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteQuestion(tq.questionId)}
                              className="p-1.5 rounded bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 cursor-pointer"
                              title="Delete Question"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal: Create New Exam Portal */}
      {showNewExamModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
          <form onSubmit={handleCreateExam} className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-tn-navy">Create New Examination Portal</h3>
              <button type="button" onClick={() => setShowNewExamModal(false)} className="cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Slug (URL)</label>
                <input required placeholder="e.g. ctet-paper1" value={newExam.slug} onChange={(e) => setNewExam({ ...newExam, slug: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Short Name</label>
                <input required placeholder="e.g. CTET Paper 1" value={newExam.shortName} onChange={(e) => setNewExam({ ...newExam, shortName: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div className="col-span-2">
                <label className="block font-semibold mb-1">Full Examination Title</label>
                <input required placeholder="Central Teacher Eligibility Test Paper 1" value={newExam.title} onChange={(e) => setNewExam({ ...newExam, title: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Category</label>
                <select value={newExam.categoryId} onChange={(e) => setNewExam({ ...newExam, categoryId: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white">
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Conducting Body</label>
                <input placeholder="e.g. CBSE / NTA" value={newExam.conductingBody} onChange={(e) => setNewExam({ ...newExam, conductingBody: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Duration (Mins)</label>
                <input type="number" value={newExam.durationMinutes} onChange={(e) => setNewExam({ ...newExam, durationMinutes: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Total Marks</label>
                <input type="number" value={newExam.totalMarks} onChange={(e) => setNewExam({ ...newExam, totalMarks: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div className="col-span-2">
                <label className="flex items-center gap-2 font-semibold cursor-pointer">
                  <input type="checkbox" checked={newExam.isComingSoon} onChange={(e) => setNewExam({ ...newExam, isComingSoon: e.target.checked })} />
                  <span>Mark as Coming Soon initially</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setShowNewExamModal(false)} className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold cursor-pointer">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-tn-navy text-white text-xs font-bold cursor-pointer">Create Portal</button>
            </div>
          </form>
        </div>
      )}

      {/* Modal: Create Test */}
      {showNewTestModal && selectedExam && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4">
          <form onSubmit={handleCreateTest} className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-tn-navy">Create Test in {selectedExam.shortName}</h3>
              <button type="button" onClick={() => setShowNewTestModal(false)} className="cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Test Title</label>
                <input required placeholder="e.g. Mock Test #2 (Latest Pattern)" value={newTest.title} onChange={(e) => setNewTest({ ...newTest, title: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Type</label>
                  <select value={newTest.type} onChange={(e) => setNewTest({ ...newTest, type: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white">
                    <option value="FULL_MOCK">Full Mock</option>
                    <option value="PREVIOUS_YEAR_PAPER">Previous Year Paper</option>
                    <option value="SUBJECT_TEST">Subject Test</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Access</label>
                  <select value={newTest.accessLevel} onChange={(e) => setNewTest({ ...newTest, accessLevel: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white">
                    <option value="FREE">FREE</option>
                    <option value="PREMIUM">PREMIUM</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Duration (Mins)</label>
                  <input type="number" value={newTest.durationMinutes} onChange={(e) => setNewTest({ ...newTest, durationMinutes: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Total Marks</label>
                  <input type="number" value={newTest.totalMarks} onChange={(e) => setNewTest({ ...newTest, totalMarks: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setShowNewTestModal(false)} className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold cursor-pointer">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-tn-blue text-white text-xs font-bold cursor-pointer">Create Test</button>
            </div>
          </form>
        </div>
      )}

      {/* Modal: Add Question */}
      {showAddQModal && selectedTest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4 overflow-y-auto">
          <form onSubmit={handleCreateQuestion} className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-3 shadow-xl border border-slate-200 my-6 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-tn-navy">Add Question to {selectedTest.title}</h3>
              <button type="button" onClick={() => setShowAddQModal(false)} className="cursor-pointer"><X className="w-4 h-4" /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold mb-1">Section Name</label>
                <input required value={newQ.sectionName} onChange={(e) => setNewQ({ ...newQ, sectionName: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Subject</label>
                <input required value={newQ.subject} onChange={(e) => setNewQ({ ...newQ, subject: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Question Stem</label>
              <textarea required rows={3} value={newQ.contentEn} onChange={(e) => setNewQ({ ...newQ, contentEn: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input required placeholder="Option A" value={newQ.optA} onChange={(e) => setNewQ({ ...newQ, optA: e.target.value })} className="px-3 py-2 border border-slate-300 rounded-lg" />
              <input required placeholder="Option B" value={newQ.optB} onChange={(e) => setNewQ({ ...newQ, optB: e.target.value })} className="px-3 py-2 border border-slate-300 rounded-lg" />
              <input required placeholder="Option C" value={newQ.optC} onChange={(e) => setNewQ({ ...newQ, optC: e.target.value })} className="px-3 py-2 border border-slate-300 rounded-lg" />
              <input required placeholder="Option D" value={newQ.optD} onChange={(e) => setNewQ({ ...newQ, optD: e.target.value })} className="px-3 py-2 border border-slate-300 rounded-lg" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block font-semibold mb-1">Correct Option</label>
                <select value={newQ.correctAnswer} onChange={(e) => setNewQ({ ...newQ, correctAnswer: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">+ Marks</label>
                <input type="number" step="0.5" value={newQ.marks} onChange={(e) => setNewQ({ ...newQ, marks: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">- Negative</label>
                <input type="number" step="0.25" value={newQ.negativeMarks} onChange={(e) => setNewQ({ ...newQ, negativeMarks: Number(e.target.value) })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">Solution Explanation</label>
              <textarea rows={2} value={newQ.explanationEn} onChange={(e) => setNewQ({ ...newQ, explanationEn: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setShowAddQModal(false)} className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold cursor-pointer">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-bold cursor-pointer">Save Question</button>
            </div>
          </form>
        </div>
      )}

      {/* Create Custom Plan for Selected Exam Modal */}
      {showAddPlanModal && selectedExam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Tag className="w-4 h-4 text-emerald-600" />
                <span>Add Custom Plan for {selectedExam.shortName}</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowAddPlanModal(false)}
                className="cursor-pointer text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateExamPlan} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Plan Title *</label>
                <input
                  type="text"
                  required
                  value={newPlanForm.name}
                  onChange={(e) => setNewPlanForm({ ...newPlanForm, name: e.target.value })}
                  placeholder="e.g. 15-Test Mega Booster"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 font-semibold text-slate-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={newPlanForm.badge}
                    onChange={(e) => setNewPlanForm({ ...newPlanForm, badge: e.target.value })}
                    placeholder="e.g. Popular, Top Choice, Best Value"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Validity (Days)</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={newPlanForm.durationDays}
                    onChange={(e) => setNewPlanForm({ ...newPlanForm, durationDays: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-semibold text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Price (₹ INR) *</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={newPlanForm.priceINR}
                    onChange={(e) => setNewPlanForm({ ...newPlanForm, priceINR: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-bold text-slate-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Original Price (₹)</label>
                  <input
                    type="number"
                    min="0"
                    value={newPlanForm.originalPriceINR}
                    onChange={(e) => setNewPlanForm({ ...newPlanForm, originalPriceINR: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description Tagline</label>
                <textarea
                  rows={2}
                  value={newPlanForm.description}
                  onChange={(e) => setNewPlanForm({ ...newPlanForm, description: e.target.value })}
                  placeholder={`Short description shown in ${selectedExam.shortName} pricing modal...`}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Features List (One bullet point per line)
                </label>
                <textarea
                  rows={3}
                  value={newPlanForm.featuresText}
                  onChange={(e) => setNewPlanForm({ ...newPlanForm, featuresText: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono text-slate-800 bg-white"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="newPlanPublished"
                  checked={newPlanForm.isPublished}
                  onChange={(e) => setNewPlanForm({ ...newPlanForm, isPublished: e.target.checked })}
                  className="rounded text-blue-600 border-slate-300"
                />
                <label htmlFor="newPlanPublished" className="font-semibold text-slate-700 cursor-pointer">
                  Publish immediately in student modal for {selectedExam.shortName}
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddPlanModal(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold cursor-pointer"
                >
                  Create Plan for {selectedExam.shortName}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

interface ExamPlanEditorCardProps {
  plan: SubscriptionPlan;
  selectedExam: any;
  saving: boolean;
  onSave: (data: any) => Promise<void>;
}

const ExamPlanEditorCard: React.FC<ExamPlanEditorCardProps> = ({
  plan,
  selectedExam,
  saving,
  onSave,
}) => {
  const [name, setName] = useState(plan.name || '');
  const [badge, setBadge] = useState(plan.badge || '');
  const [priceINR, setPriceINR] = useState<number>(Number(plan.priceINR ?? plan.price ?? 0));
  const [originalPriceINR, setOriginalPriceINR] = useState<number>(Number(plan.originalPriceINR ?? plan.originalPrice ?? 0));
  const [durationDays, setDurationDays] = useState<number>(Number(plan.durationDays ?? 0));
  const [description, setDescription] = useState(plan.description || '');
  const [featuresText, setFeaturesText] = useState(
    Array.isArray(plan.features) ? plan.features.join('\n') : ''
  );
  const [isPublished, setIsPublished] = useState<boolean>(
    plan.isPublished !== undefined ? plan.isPublished : true
  );
  const [hasChanges, setHasChanges] = useState<boolean>(false);

  useEffect(() => {
    setName(plan.name || '');
    setBadge(plan.badge || '');
    setPriceINR(Number(plan.priceINR ?? plan.price ?? 0));
    setOriginalPriceINR(Number(plan.originalPriceINR ?? plan.originalPrice ?? 0));
    setDurationDays(Number(plan.durationDays ?? 0));
    setDescription(plan.description || '');
    setFeaturesText(Array.isArray(plan.features) ? plan.features.join('\n') : '');
    setIsPublished(plan.isPublished !== undefined ? plan.isPublished : true);
    setHasChanges(false);
  }, [plan]);

  const handleSave = () => {
    onSave({
      name,
      badge,
      priceINR: Number(priceINR),
      price: Number(priceINR),
      originalPriceINR: Number(originalPriceINR),
      durationDays: Number(durationDays),
      description,
      features: featuresText.split('\n').map((f) => f.trim()).filter(Boolean),
      isPublished,
    });
    setHasChanges(false);
  };

  const isFree = priceINR === 0;

  return (
    <div
      className={`p-4 rounded-xl border transition-all space-y-3.5 ${
        isPublished
          ? 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
          : 'bg-slate-50 border-slate-200/80 opacity-75'
      }`}
    >
      {/* Plan Header Info & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
            {plan.code}
          </span>
          {badge && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              {badge}
            </span>
          )}
          <span className="text-xs font-bold text-slate-900">
            Current: {isFree ? '₹0 (Free Forever)' : `₹${priceINR}`}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={isPublished}
              onChange={(e) => {
                setIsPublished(e.target.checked);
                setHasChanges(true);
              }}
              className="rounded text-blue-600 border-slate-300"
            />
            <span className="text-[11px]">{isPublished ? 'Published in Student Modal' : 'Hidden'}</span>
          </label>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              hasChanges
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs animate-pulse'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            {saving ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editable Fields Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
        {/* Title */}
        <div className="sm:col-span-5">
          <label className="block font-bold text-slate-700 mb-1">Plan Title *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setHasChanges(true);
            }}
            placeholder="e.g. 5-Test Booster Pack"
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-900 bg-white"
          />
        </div>

        {/* Badge */}
        <div className="sm:col-span-4">
          <label className="block font-bold text-slate-700 mb-1">Badge Tag</label>
          <input
            type="text"
            value={badge}
            onChange={(e) => {
              setBadge(e.target.value);
              setHasChanges(true);
            }}
            placeholder="e.g. Top Choice, Best Value"
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
          />
          <div className="flex gap-1 mt-1">
            {['Free Forever', 'Top Choice', 'Best Value', 'Super Value'].map((bText) => (
              <button
                key={bText}
                type="button"
                onClick={() => {
                  setBadge(bText);
                  setHasChanges(true);
                }}
                className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                {bText}
              </button>
            ))}
          </div>
        </div>

        {/* Validity */}
        <div className="sm:col-span-3">
          <label className="block font-bold text-slate-700 mb-1">Validity (Days)</label>
          <input
            type="number"
            min="0"
            value={durationDays}
            onChange={(e) => {
              setDurationDays(Number(e.target.value));
              setHasChanges(true);
            }}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-900 bg-white"
          />
          <span className="text-[10px] text-slate-400 block mt-0.5">
            {durationDays === 0 ? 'Lifetime Access' : `${durationDays} Days`}
          </span>
        </div>

        {/* Price & Presets */}
        <div className="sm:col-span-6">
          <label className="block font-bold text-slate-700 mb-1 flex items-center justify-between">
            <span>Price (₹ INR) *</span>
            <span className="text-[10px] text-slate-400 font-normal">Approx USD: ${(priceINR / 75).toFixed(2)}</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              value={priceINR}
              onChange={(e) => {
                setPriceINR(Number(e.target.value));
                setHasChanges(true);
              }}
              className="w-24 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-900 bg-white"
            />
            <div className="flex flex-wrap gap-1">
              {[0, 29, 49, 99, 149, 199, 299].map((pVal) => (
                <button
                  key={pVal}
                  type="button"
                  onClick={() => {
                    setPriceINR(pVal);
                    if (originalPriceINR <= pVal && pVal > 0) {
                      setOriginalPriceINR(Math.round(pVal * 2.5));
                    }
                    setHasChanges(true);
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold border transition cursor-pointer ${
                    priceINR === pVal
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {pVal === 0 ? 'FREE' : `₹${pVal}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Original Price */}
        <div className="sm:col-span-6">
          <label className="block font-bold text-slate-700 mb-1">
            Original Strikethrough Price (₹)
          </label>
          <input
            type="number"
            min="0"
            value={originalPriceINR}
            onChange={(e) => {
              setOriginalPriceINR(Number(e.target.value));
              setHasChanges(true);
            }}
            placeholder="e.g. 149 or 299 (optional)"
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
          />
        </div>

        {/* Description */}
        <div className="sm:col-span-12">
          <label className="block font-bold text-slate-700 mb-1">Description Tagline</label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setHasChanges(true);
            }}
            placeholder={`Short description shown under plan name in ${selectedExam?.shortName || ''} modal...`}
            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-800 bg-white"
          />
        </div>

        {/* Features list */}
        <div className="sm:col-span-12">
          <label className="block font-bold text-slate-700 mb-1 flex items-center justify-between">
            <span>Features List (One feature per line, rendered with checkmark)</span>
            <span className="text-[10px] text-slate-400 font-normal">
              {featuresText.split('\n').filter((f) => f.trim()).length} bullet points
            </span>
          </label>
          <textarea
            rows={3}
            value={featuresText}
            onChange={(e) => {
              setFeaturesText(e.target.value);
              setHasChanges(true);
            }}
            placeholder="5 Verified Mock Tests&#10;Detailed Step-by-Step Solutions&#10;Subject-wise Accuracy Audit"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-800 font-mono bg-white leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};

