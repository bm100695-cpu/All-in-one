import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  AlertCircle,
  FileText,
  HelpCircle,
  Check,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Flag,
  Globe2,
  CheckCircle,
  User,
  Shield,
  Layers,
  Maximize2,
  Minimize2,
  Wifi,
  CloudCheck,
  Send,
  X,
  AlertTriangle,
  GraduationCap,
  Sparkles,
  BookOpen,
  ArrowRight,
  Menu,
} from 'lucide-react';
import { TestQuestion, UserResponse } from '../types';
import { api } from '../api';

interface UptetCbtSimulatorProps {
  testId: string;
  onFinishTest: (attemptId: string) => void;
  onExit: () => void;
  globalLanguage: 'en' | 'hi';
  candidateNameProp?: string;
  candidateRollProp?: string;
}

export const UptetCbtSimulator: React.FC<UptetCbtSimulatorProps> = ({
  testId,
  onFinishTest,
  onExit,
  globalLanguage,
  candidateNameProp,
  candidateRollProp,
}) => {
  // Screen views: INSTRUCTIONS -> EXAM
  const [viewState, setViewState] = useState<'INSTRUCTIONS' | 'EXAM'>('INSTRUCTIONS');
  const [loading, setLoading] = useState<boolean>(true);
  const [initError, setInitError] = useState<string | null>(null);
  const [attemptId, setAttemptId] = useState<string>('');
  const [testData, setTestData] = useState<any>(null);
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentSubject, setCurrentSubject] = useState<string>('');
  const [responses, setResponses] = useState<Record<string, UserResponse>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Set<string>>(new Set());
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(150 * 60);
  const [questionLang, setQuestionLang] = useState<'en' | 'hi' | 'both'>('both');
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [showConfirmStartModal, setShowConfirmStartModal] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [savingHeartbeat, setSavingHeartbeat] = useState<boolean>(false);
  const [instructionsRead, setInstructionsRead] = useState<boolean>(false);
  const [timeWarning, setTimeWarning] = useState<string | null>(null);
  const [mobilePaletteOpen, setMobilePaletteOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const timerRef = useRef<any>(null);

  // Candidate Details & Dynamic Exam Detection
  const isSuperTet = Boolean(
    testData?.title?.toUpperCase().includes('SUPER TET') ||
    (testData?.exam as any)?.slug === 'super-tet' ||
    (testData?.exam as any)?.shortName === 'SUPER TET'
  );
  const examShortLabel = isSuperTet ? 'SUPER TET' : 'UPTET';
  const examFullLabel = isSuperTet
    ? 'Uttar Pradesh Super Teacher Eligibility / Assistant Teacher Recruitment (SUPER TET)'
    : 'Uttar Pradesh Teacher Eligibility Test (UPTET)';
  const candidateName = candidateNameProp || localStorage.getItem('tutornove_candidate_name') || 'Registered Candidate';
  const candidateRoll = candidateRollProp || (isSuperTet ? 'STET-2025-CBT-01' : 'UPTET-2026-ROLL-89421');
  const systemNo = 'CBT-LAB-TERMINAL-04';
  const durationMins = testData?.durationMinutes || 150;

  useEffect(() => {
    loadTestPreData();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testId]);

  // Prevent accidental navigation
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (viewState === 'EXAM') {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [viewState]);

  const loadTestPreData = async () => {
    setLoading(true);
    setInitError(null);
    try {
      const data = await api.startTest(testId);
      setAttemptId(data.attemptId);
      setTestData(data.test);
      setQuestions(data.questions);

      const durationSecs = (data.test.durationMinutes || 150) * 60;
      const initialTime = durationSecs - (data.timeSpentSeconds || 0);
      setTimeLeftSeconds(Math.max(5, initialTime));

      const resMap: Record<string, UserResponse> = {};
      const visited = new Set<string>();

      data.savedResponses?.forEach((r: any) => {
        resMap[r.questionId] = {
          questionId: r.questionId,
          selectedOptionIds: r.selectedOptionIds || [],
          numericalValue: r.numericalValue,
          timeSpentSec: r.timeSpentSec || 0,
          status: r.status || 'NOT_ANSWERED',
        };
        visited.add(r.questionId);
      });

      // Resume directly if user already spent time
      if (data.timeSpentSeconds && data.timeSpentSeconds > 5) {
        setViewState('EXAM');
        startTimer();
      }

      setResponses(resMap);
      setVisitedQuestions(visited);

      if (data.questions.length > 0) {
        const firstQ = data.questions[0];
        setCurrentSubject(firstQ.sectionName || 'Child Development & Pedagogy');
      }
    } catch (err: any) {
      console.error('Error initializing UPTET test:', err);
      setInitError(err?.message || 'Failed to initialize UPTET examination session. Ensure server is reachable.');
    } finally {
      setLoading(false);
    }
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        // Warning triggers
        if (prev === 30 * 60) showTimeAlert('30 Minutes Remaining in Examination');
        if (prev === 15 * 60) showTimeAlert('15 Minutes Remaining — Please review your answers');
        if (prev === 5 * 60) showTimeAlert('CRITICAL: 5 Minutes Remaining');
        if (prev === 60) showTimeAlert('URGENT: Final 1 Minute Remaining. Test will auto-submit at 00:00');

        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleAutoSubmitOnTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const showTimeAlert = (msg: string) => {
    setTimeWarning(msg);
    setTimeout(() => {
      setTimeWarning(null);
    }, 6000);
  };

  // Heartbeat autosave every 20 seconds
  useEffect(() => {
    const autosaveInterval = setInterval(async () => {
      if (attemptId && viewState === 'EXAM' && Object.keys(responses).length > 0) {
        setSavingHeartbeat(true);
        try {
          const respArray = Object.values(responses);
          const totalSpent = (testData?.durationMinutes || 150) * 60 - timeLeftSeconds;
          await api.autosaveTest(attemptId, respArray, Math.max(0, totalSpent));
        } catch (e) {
          console.warn('Autosave skipped');
        } finally {
          setTimeout(() => setSavingHeartbeat(false), 1000);
        }
      }
    }, 20000);

    return () => clearInterval(autosaveInterval);
  }, [attemptId, responses, timeLeftSeconds, testData, viewState]);

  const confirmStartExam = () => {
    setShowConfirmStartModal(false);
    setViewState('EXAM');
    startTimer();

    // Mark first question visited
    if (questions.length > 0) {
      const firstQ = questions[0];
      const newVisited = new Set(visitedQuestions);
      newVisited.add(firstQ.questionId);
      setVisitedQuestions(newVisited);

      if (!responses[firstQ.questionId]) {
        setResponses((prev) => ({
          ...prev,
          [firstQ.questionId]: {
            questionId: firstQ.questionId,
            selectedOptionIds: [],
            timeSpentSec: 0,
            status: 'NOT_ANSWERED',
          },
        }));
      }
    }
  };

  const currentQ = questions[currentQuestionIndex];
  const currentResp = currentQ ? responses[currentQ.questionId] : undefined;

  // Extract all distinct subject sections
  const subjectList: string[] = [];
  questions.forEach((q) => {
    const s = q.sectionName || 'General Section';
    if (!subjectList.includes(s)) {
      subjectList.push(s);
    }
  });

  const selectQuestion = (index: number) => {
    if (index < 0 || index >= questions.length) return;
    const targetQ = questions[index];
    setCurrentQuestionIndex(index);
    if (targetQ.sectionName) {
      setCurrentSubject(targetQ.sectionName);
    }

    // Mark visited
    const newVisited = new Set(visitedQuestions);
    newVisited.add(targetQ.questionId);
    setVisitedQuestions(newVisited);

    if (!responses[targetQ.questionId]) {
      setResponses((prev) => ({
        ...prev,
        [targetQ.questionId]: {
          questionId: targetQ.questionId,
          selectedOptionIds: [],
          timeSpentSec: 0,
          status: 'NOT_ANSWERED',
        },
      }));
    }
  };

  const handleSelectOption = (optionId: string) => {
    if (!currentQ) return;
    const qId = currentQ.questionId;
    const existing = responses[qId]?.selectedOptionIds || [];
    const isAlreadySelected = existing.includes(optionId);

    // Single choice for UPTET: selecting sets it, clicking same keeps it
    const newSelected = isAlreadySelected ? [] : [optionId];
    const prevStatus = responses[qId]?.status;
    let nextStatus: 'ANSWERED' | 'NOT_ANSWERED' | 'MARKED_FOR_REVIEW' | 'ANSWERED_AND_MARKED' = 'ANSWERED';

    if (prevStatus === 'MARKED_FOR_REVIEW' || prevStatus === 'ANSWERED_AND_MARKED') {
      nextStatus = newSelected.length > 0 ? 'ANSWERED_AND_MARKED' : 'MARKED_FOR_REVIEW';
    } else {
      nextStatus = newSelected.length > 0 ? 'ANSWERED' : 'NOT_ANSWERED';
    }

    setResponses((prev) => ({
      ...prev,
      [qId]: {
        questionId: qId,
        selectedOptionIds: newSelected,
        timeSpentSec: (prev[qId]?.timeSpentSec || 0) + 1,
        status: nextStatus,
      },
    }));
  };

  const handleClearResponse = () => {
    if (!currentQ) return;
    const qId = currentQ.questionId;
    setResponses((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        selectedOptionIds: [],
        status: prev[qId]?.status === 'ANSWERED_AND_MARKED' ? 'MARKED_FOR_REVIEW' : 'NOT_ANSWERED',
      },
    }));
  };

  const handleSaveAndNext = () => {
    if (!currentQ) return;
    const qId = currentQ.questionId;
    const curr = responses[qId];
    const hasSelection = (curr?.selectedOptionIds?.length || 0) > 0;

    let newStatus: 'ANSWERED' | 'NOT_ANSWERED' | 'MARKED_FOR_REVIEW' | 'ANSWERED_AND_MARKED' = 'NOT_ANSWERED';
    if (curr?.status === 'MARKED_FOR_REVIEW' || curr?.status === 'ANSWERED_AND_MARKED') {
      newStatus = hasSelection ? 'ANSWERED_AND_MARKED' : 'MARKED_FOR_REVIEW';
    } else {
      newStatus = hasSelection ? 'ANSWERED' : 'NOT_ANSWERED';
    }

    setResponses((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        questionId: qId,
        selectedOptionIds: curr?.selectedOptionIds || [],
        status: newStatus,
      },
    }));

    if (currentQuestionIndex < questions.length - 1) {
      selectQuestion(currentQuestionIndex + 1);
    }
  };

  const handleMarkForReviewAndNext = () => {
    if (!currentQ) return;
    const qId = currentQ.questionId;
    const curr = responses[qId];
    const hasSelection = (curr?.selectedOptionIds?.length || 0) > 0;

    const nextStatus = hasSelection ? 'ANSWERED_AND_MARKED' : 'MARKED_FOR_REVIEW';

    setResponses((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        questionId: qId,
        selectedOptionIds: curr?.selectedOptionIds || [],
        status: nextStatus,
      },
    }));

    if (currentQuestionIndex < questions.length - 1) {
      selectQuestion(currentQuestionIndex + 1);
    }
  };

  const handleFinalSubmit = async () => {
    if (submitting) return;
    if (!attemptId) {
      alert('Examination attempt session is invalid or not found. Please exit and restart the test.');
      return;
    }
    setSubmitting(true);
    try {
      if (timerRef.current) clearInterval(timerRef.current);
      const respArray = Object.values(responses);
      const totalSpent = (testData?.durationMinutes || 150) * 60 - timeLeftSeconds;
      const res = await api.submitTest(attemptId, respArray, Math.max(1, totalSpent));
      onFinishTest(res.attemptId);
    } catch (err: any) {
      console.error('Submit error:', err);
      alert('Failed to submit exam: ' + (err?.message || 'Network error'));
      setSubmitting(false);
    }
  };

  const handleAutoSubmitOnTimeout = async () => {
    setSubmitting(true);
    try {
      const respArray = Object.values(responses);
      const totalSpent = (testData?.durationMinutes || 150) * 60;
      const res = await api.submitTest(attemptId, respArray, totalSpent);
      onFinishTest(res.attemptId);
    } catch (e) {
      console.error('Auto-submit failed:', e);
      onFinishTest(attemptId);
    }
  };

  // Palette Status calculation
  const getQuestionPaletteStatus = (qId: string) => {
    const isVisited = visitedQuestions.has(qId);
    const resp = responses[qId];

    if (!isVisited) return 'NOT_VISITED';
    if (!resp) return 'NOT_ANSWERED';

    const hasAnswer = (resp.selectedOptionIds?.length || 0) > 0;
    if (resp.status === 'ANSWERED_AND_MARKED') return 'ANSWERED_AND_MARKED';
    if (resp.status === 'MARKED_FOR_REVIEW') return hasAnswer ? 'ANSWERED_AND_MARKED' : 'MARKED_FOR_REVIEW';
    if (hasAnswer || resp.status === 'ANSWERED') return 'ANSWERED';
    return 'NOT_ANSWERED';
  };

  // Summary Metrics
  let answeredCount = 0;
  let notAnsweredCount = 0;
  let markedCount = 0;
  let markedAndAnsweredCount = 0;
  let notVisitedCount = 0;

  questions.forEach((q) => {
    const st = getQuestionPaletteStatus(q.questionId);
    if (st === 'ANSWERED') answeredCount++;
    else if (st === 'NOT_ANSWERED') notAnsweredCount++;
    else if (st === 'MARKED_FOR_REVIEW') markedCount++;
    else if (st === 'ANSWERED_AND_MARKED') markedAndAnsweredCount++;
    else notVisitedCount++;
  });

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // =========================================================================
  // VIEW 0: LOADING & ERROR SAFEGUARDS
  // =========================================================================
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center font-sans -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-4" />
        <h2 className="text-base font-bold text-slate-800">Initializing CBT Terminal...</h2>
        <p className="text-xs text-slate-500 mt-1">
          Loading {examShortLabel} examination paper and verified question bank from secure server.
        </p>
      </div>
    );
  }

  if (initError || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center font-sans -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-md w-full bg-white border border-rose-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Examination Session Error</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            {initError || 'This examination paper currently has zero questions loaded and cannot be launched.'}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={onExit}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
            >
              Back to Archive
            </button>
            <button
              onClick={loadTestPreData}
              className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-xs cursor-pointer"
            >
              Retry Loading Paper
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: EXAM NOTIFICATION / OFFICIAL CANDIDATE INSTRUCTIONS SCREEN
  // =========================================================================
  if (viewState === 'INSTRUCTIONS') {
    return (
      <div className="bg-slate-100 min-h-screen flex flex-col font-sans -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Top Header */}
        <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shadow-md">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="All in One"
              className="h-10 w-auto rounded-lg object-contain bg-white p-0.5 shadow"
            />
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {examFullLabel}
              </h1>
              <p className="text-xs text-emerald-400 font-mono">
                Computer Based Test (CBT) Examination Portal • ERA PNP Prayagraj / UPESSC
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="hidden sm:inline-block px-3 py-1 bg-slate-800 rounded border border-slate-700 text-slate-300 font-mono">
              Terminal: <strong className="text-emerald-400">{systemNo}</strong>
            </span>
            <button
              onClick={onExit}
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
            >
              Exit to Archive
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex-1 space-y-6">
          {/* Candidate Information Card */}
          <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="flex items-center gap-3 md:col-span-2 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0 md:pr-4">
              <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0">
                <User className="w-8 h-8 text-slate-500" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">{candidateName}</h3>
                <div className="text-xs text-slate-600 font-mono space-y-0.5">
                  <p>Roll No: <span className="font-bold text-indigo-900">{candidateRoll}</span></p>
                  <p>Mock ID: <span className="font-semibold text-slate-800">{testData?.id?.substring(0, 14) || 'UPTET-MOCK-2021'}</span></p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Examination:</span>
                <span className="font-bold text-slate-900 line-clamp-1">{testData?.title || `${examShortLabel} Official Mock Test`}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Duration:</span>
                <span className="font-bold text-indigo-950">{durationMins} Minutes ({(durationMins / 60).toFixed(2)} Hours)</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Total Questions:</span>
                <span className="font-bold text-slate-900">{questions.length} Questions</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Maximum Marks:</span>
                <span className="font-bold text-emerald-800">{testData?.totalMarks || questions.length} Marks (No Negative Marking)</span>
              </div>
            </div>
          </div>

          {/* Section Distribution Table */}
          <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-700" />
                {examShortLabel} Official Structure & Marking Scheme
              </h2>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                +1 Correct • Strictly 0 Negative Marking
              </span>
            </div>

            {isSuperTet ? (
              <div className="space-y-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse border border-slate-200">
                    <thead className="bg-slate-100 font-bold text-slate-700">
                      <tr>
                        <th className="p-2 border border-slate-200">Subject / Area</th>
                        <th className="p-2 border border-slate-200">Official 150-Mark Weightage</th>
                        <th className="p-2 border border-slate-200">Loaded in Current Session</th>
                        <th className="p-2 border border-slate-200">Marking Rule</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {subjectList.map((subj) => {
                        const subjCount = questions.filter((q) => q.sectionName === subj).length;
                        return (
                          <tr key={subj} className="hover:bg-slate-50">
                            <td className="p-2 font-semibold border border-slate-200 text-slate-900">{subj}</td>
                            <td className="p-2 border border-slate-200 text-slate-600">Standard Official Allocation</td>
                            <td className="p-2 border border-slate-200 font-bold text-indigo-800">{subjCount} Questions</td>
                            <td className="p-2 border border-slate-200 text-emerald-700">+1 per correct, 0 negative</td>
                          </tr>
                        );
                      })}
                      <tr className="bg-emerald-50 font-extrabold text-emerald-950">
                        <td className="p-2 border border-slate-200" colSpan={2}>Active Test Session Total</td>
                        <td className="p-2 border border-slate-200">{questions.length} Questions</td>
                        <td className="p-2 border border-slate-200 text-emerald-800">{questions.length} Marks (No Negative Penalty)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-200">
                <thead className="bg-slate-100 font-bold text-slate-700">
                  <tr>
                    <th className="p-2.5 border border-slate-200">Part</th>
                    <th className="p-2.5 border border-slate-200">Subject / Area</th>
                    <th className="p-2.5 border border-slate-200">Questions</th>
                    <th className="p-2.5 border border-slate-200">Marking Rule</th>
                    <th className="p-2.5 border border-slate-200">Total Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold border border-slate-200">Part I</td>
                    <td className="p-2.5 border border-slate-200">Child Development & Pedagogy (बाल विकास एवं शिक्षण विधि)</td>
                    <td className="p-2.5 border border-slate-200 font-semibold">30 MCQs</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-medium">+1 per correct, 0 negative</td>
                    <td className="p-2.5 border border-slate-200 font-bold">30</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold border border-slate-200">Part II</td>
                    <td className="p-2.5 border border-slate-200">Language I: Hindi (भाषा I: हिन्दी)</td>
                    <td className="p-2.5 border border-slate-200 font-semibold">30 MCQs</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-medium">+1 per correct, 0 negative</td>
                    <td className="p-2.5 border border-slate-200 font-bold">30</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold border border-slate-200">Part III</td>
                    <td className="p-2.5 border border-slate-200">Language II: English / Urdu / Sanskrit (भाषा II)</td>
                    <td className="p-2.5 border border-slate-200 font-semibold">30 MCQs</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-medium">+1 per correct, 0 negative</td>
                    <td className="p-2.5 border border-slate-200 font-bold">30</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold border border-slate-200">Part IV</td>
                    <td className="p-2.5 border border-slate-200">Mathematics (गणित)</td>
                    <td className="p-2.5 border border-slate-200 font-semibold">30 MCQs</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-medium">+1 per correct, 0 negative</td>
                    <td className="p-2.5 border border-slate-200 font-bold">30</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold border border-slate-200">Part V</td>
                    <td className="p-2.5 border border-slate-200">Environmental Studies (पर्यावरणीय अध्ययन - EVS)</td>
                    <td className="p-2.5 border border-slate-200 font-semibold">30 MCQs</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-700 font-medium">+1 per correct, 0 negative</td>
                    <td className="p-2.5 border border-slate-200 font-bold">30</td>
                  </tr>
                  <tr className="bg-emerald-50 font-extrabold text-emerald-950">
                    <td className="p-2.5 border border-slate-200" colSpan={2}>Grand Total</td>
                    <td className="p-2.5 border border-slate-200">150 Questions</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-800">No Negative Penalty</td>
                    <td className="p-2.5 border border-slate-200 text-emerald-800">150 Marks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            )}
          </div>

          {/* Color Palette Legend */}
          <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
              Official Navigational Question Palette Symbols
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                <span className="w-7 h-7 bg-slate-200 text-slate-700 font-bold rounded flex items-center justify-center shrink-0">
                  01
                </span>
                <span className="text-slate-700 font-medium leading-tight">You have not visited the question yet.</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                <span className="w-7 h-7 bg-rose-600 text-white font-bold rounded-t-lg rounded-b-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <span className="text-slate-700 font-medium leading-tight">You have visited but not answered.</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                <span className="w-7 h-7 bg-emerald-600 text-white font-bold rounded-t-sm rounded-b-lg flex items-center justify-center shrink-0">
                  03
                </span>
                <span className="text-slate-700 font-medium leading-tight">You have answered the question.</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                <span className="w-7 h-7 bg-purple-600 text-white font-bold rounded-full flex items-center justify-center shrink-0">
                  04
                </span>
                <span className="text-slate-700 font-medium leading-tight">Marked for review (unanswered).</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                <span className="w-7 h-7 bg-purple-600 text-white font-bold rounded-full flex items-center justify-center shrink-0 relative">
                  05
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white absolute -top-0.5 -right-0.5" />
                </span>
                <span className="text-slate-700 font-medium leading-tight">Answered & marked for review (evaluated).</span>
              </div>
            </div>
          </div>

          {/* Candidate Instructions */}
          <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
              Important Candidate Instructions & Technical Guidelines
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
              <li>The total duration of the examination is <strong>{durationMins} minutes ({(durationMins / 60).toFixed(2)} Hours)</strong>.</li>
              <li>The server clock controls the countdown timer at the top right of your examination screen.</li>
              <li>The paper consists of <strong>{questions.length} objective multiple-choice questions (MCQs)</strong>, each carrying 1 mark.</li>
              <li><strong>NO NEGATIVE MARKING:</strong> 1 mark is awarded for each correct answer; no marks are deducted for incorrect responses or unanswered questions.</li>
              <li>All questions are presented bilingually in Hindi and English.</li>
              <li>Use <strong>"Save & Next"</strong> to save your answer and navigate to the next question.</li>
              <li>Use <strong>"Mark for Review & Next"</strong> to flag questions you wish to review later.</li>
              <li>Use <strong>"Clear Response"</strong> if you wish to deselect an answered radio option.</li>
              <li>The exam will automatically submit when the countdown timer reaches zero (00:00:00).</li>
            </ol>
          </div>

          {/* Declaration & Start Button Bar */}
          <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-4">
            <label className="flex items-start gap-3 p-3 bg-amber-50/70 border border-amber-200 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                checked={instructionsRead}
                onChange={(e) => setInstructionsRead(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
              />
              <span className="text-xs text-slate-800 leading-normal">
                <strong>Declaration:</strong> I have read and understood all the examination instructions above. All computer hardware allotted to me is in proper working condition. I agree to abide by all the rules and regulations of the {examShortLabel} examination.
              </span>
            </label>

            <div className="text-center pt-2">
              <button
                type="button"
                disabled={!instructionsRead}
                onClick={() => setShowConfirmStartModal(true)}
                className={`px-10 py-3.5 rounded-lg font-extrabold text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mx-auto ${
                  instructionsRead
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer active:scale-98'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }`}
              >
                <span>I am ready to begin — Start Examination</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              {!instructionsRead && (
                <p className="text-[11px] text-amber-700 mt-2">
                  * Please check the declaration box above to enable the Start Examination button.
                </p>
              )}
            </div>
          </div>
        </main>

        {/* Pre-start Confirmation Dialog Modal */}
        {showConfirmStartModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Start {examShortLabel} Examination?</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Are you sure you want to start the examination? The {durationMins}-minute server countdown timer will begin immediately.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-left text-[11px] text-slate-700 space-y-1">
                <p>• Candidate: <strong>{candidateName}</strong></p>
                <p>• Exam: <strong>{testData?.title || `${examShortLabel} Official Paper`}</strong></p>
                <p>• Total Questions: <strong>{questions.length} MCQs</strong></p>
                <p>• Marking: <strong>+1 Correct, 0 Negative Marks</strong></p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setShowConfirmStartModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmStartExam}
                  className="px-6 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition cursor-pointer"
                >
                  Confirm & Start Examination
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: REAL CBT EXAMINATION WORKSPACE
  // =========================================================================
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col font-sans -mx-4 sm:-mx-6 lg:-mx-8 select-none">
      {/* 1. Real Exam Fixed Top Header */}
      <header className="bg-slate-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-800 shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center font-bold text-white shadow-xs">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">{examShortLabel}</span>
              <span className="hidden sm:inline-block px-2 py-0.2 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Official CBT Terminal
              </span>
            </div>
            <p className="text-[11px] text-slate-400 line-clamp-1 max-w-xs sm:max-w-md">
              {testData?.title || `${examShortLabel} Previous Year Question Paper Mock Test`}
            </p>
          </div>
        </div>

        {/* Center / Right: Candidate Pill, Countdown Timer, Submit Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Candidate Info Pill */}
          <div className="hidden lg:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold text-[10px]">
              AS
            </div>
            <div className="text-left text-[11px] leading-tight">
              <span className="font-bold text-slate-200 block">{candidateName}</span>
              <span className="text-slate-400 font-mono text-[10px]">{candidateRoll}</span>
            </div>
          </div>

          {/* Real-time Countdown Timer */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono font-extrabold text-sm sm:text-base tracking-wider ${
              timeLeftSeconds < 5 * 60
                ? 'bg-rose-950/80 text-rose-300 border-rose-500 animate-pulse'
                : timeLeftSeconds < 15 * 60
                ? 'bg-amber-950/80 text-amber-300 border-amber-500'
                : 'bg-slate-800 text-emerald-400 border-slate-700'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTimer(timeLeftSeconds)}</span>
          </div>

          {/* Submit Examination Button */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Exam</span>
          </button>

          {/* Mobile Palette Toggle Button */}
          <button
            onClick={() => setMobilePaletteOpen(!mobilePaletteOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
            aria-label="Toggle Question Palette"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Time Warning Floating Banner */}
      {timeWarning && (
        <div className="bg-rose-600 text-white text-xs font-bold py-2 px-4 text-center flex items-center justify-center gap-2 animate-bounce shadow">
          <AlertTriangle className="w-4 h-4 text-yellow-300" />
          <span>{timeWarning}</span>
        </div>
      )}

      {/* 2. Subject Tabs Bar */}
      <div className="bg-white border-b border-slate-300 px-4 sm:px-6 py-2 flex items-center justify-between overflow-x-auto gap-2 text-xs shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="font-bold text-slate-500 uppercase text-[10px] tracking-wider pr-2 hidden sm:inline">
            Sections:
          </span>
          {subjectList.map((subj) => {
            const isSubjActive = currentSubject === subj;
            const subjQuestions = questions.filter((q) => (q.sectionName || 'General Section') === subj);
            const answeredInSubj = subjQuestions.filter((q) => getQuestionPaletteStatus(q.questionId) === 'ANSWERED').length;

            return (
              <button
                key={subj}
                onClick={() => {
                  setCurrentSubject(subj);
                  const firstIdx = questions.findIndex((q) => (q.sectionName || 'General Section') === subj);
                  if (firstIdx !== -1) selectQuestion(firstIdx);
                }}
                className={`px-3 py-1.5 rounded-lg font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isSubjActive
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{subj}</span>
                <span className={`text-[10px] px-1 py-0.2 rounded font-mono ${isSubjActive ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {answeredInSubj}/{subjQuestions.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Language View Selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded border border-slate-300 text-[11px] shrink-0 font-medium">
          <span className="text-slate-500 px-1 hidden md:inline">View:</span>
          <button
            onClick={() => setQuestionLang('both')}
            className={`px-2 py-0.5 rounded transition ${questionLang === 'both' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'}`}
          >
            Both (द्विभाषी)
          </button>
          <button
            onClick={() => setQuestionLang('hi')}
            className={`px-2 py-0.5 rounded transition ${questionLang === 'hi' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'}`}
          >
            हिंदी
          </button>
          <button
            onClick={() => setQuestionLang('en')}
            className={`px-2 py-0.5 rounded transition ${questionLang === 'en' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'}`}
          >
            English
          </button>
        </div>
      </div>

      {/* 3. Main Examination Body */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left: Question Area */}
        <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 overflow-y-auto">
          {currentQ ? (
            <div className="space-y-6 max-w-4xl w-full mx-auto">
              {/* Question Header Meta */}
              <div className="flex items-center justify-between border-b pb-3 border-slate-300">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-slate-900 text-white font-black text-xs rounded-md shadow-xs">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {currentQ.sectionName || currentSubject}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-emerald-700 font-bold">+1.00 Marks</span>
                  <span className="text-slate-400 font-bold">0.00 Negative</span>
                  {savingHeartbeat && (
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <CloudCheck className="w-3.5 h-3.5 text-emerald-500 animate-spin" />
                      Saved
                    </span>
                  )}
                </div>
              </div>

              {/* Dual Bilingual Question Statement */}
              <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs space-y-4">
                {(questionLang === 'both' || questionLang === 'hi') && currentQ.contentHi && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                      हिंदी प्रश्न (Hindi):
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed font-sans">
                      {currentQ.contentHi}
                    </p>
                  </div>
                )}

                {(questionLang === 'both' || questionLang === 'en') && currentQ.contentEn && (
                  <div className={`space-y-1 ${questionLang === 'both' ? 'pt-3 border-t border-slate-200' : ''}`}>
                    <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider block">
                      English Translation:
                    </span>
                    <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed font-sans">
                      {currentQ.contentEn}
                    </p>
                  </div>
                )}
              </div>

              {/* 4 Radio Options */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Select One Option:
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {currentQ.options?.map((opt: any) => {
                    const isSelected = currentResp?.selectedOptionIds?.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        onClick={() => handleSelectOption(opt.id)}
                        className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50/80 border-emerald-600 ring-2 ring-emerald-500/20 shadow-xs'
                            : 'bg-white border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                        }`}
                      >
                        <div className="mt-0.5">
                          <input
                            type="radio"
                            name={`q_${currentQ.questionId}`}
                            checked={isSelected}
                            onChange={() => {}}
                            className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
                          />
                        </div>
                        <div className="flex-1 space-y-0.5 text-xs sm:text-sm">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-extrabold text-[11px] flex items-center justify-center shrink-0">
                              {opt.id}
                            </span>
                            {opt.textHi && (
                              <span className="font-semibold text-slate-900">{opt.textHi}</span>
                            )}
                          </div>
                          {opt.textEn && opt.textEn !== opt.textHi && (
                            <span className="text-slate-600 text-xs block pl-7">
                              {opt.textEn}
                            </span>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500 text-xs">
              Select a question to display
            </div>
          )}

          {/* Action Navigation Toolbar */}
          <div className="mt-8 pt-4 border-t border-slate-300 bg-white rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentQuestionIndex === 0}
                onClick={() => selectQuestion(currentQuestionIndex - 1)}
                className="px-3.5 py-2 rounded-lg text-xs font-bold border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={handleClearResponse}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold border border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100 transition cursor-pointer"
              >
                Clear Response
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleMarkForReviewAndNext}
                className="px-4 py-2 rounded-lg text-xs font-bold border border-purple-300 bg-purple-50 text-purple-700 hover:bg-purple-100 transition cursor-pointer flex items-center gap-1"
              >
                <Flag className="w-3.5 h-3.5" />
                <span>Mark for Review & Next</span>
              </button>

              <button
                type="button"
                onClick={handleSaveAndNext}
                className="px-6 py-2 rounded-lg text-xs font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition cursor-pointer flex items-center gap-1"
              >
                <span>Save & Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Question Palette Drawer */}
        <div
          className={`w-full md:w-80 bg-white border-l border-slate-300 flex flex-col justify-between shrink-0 ${
            mobilePaletteOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <div className="p-4 space-y-4 overflow-y-auto flex-1">
            <div className="flex items-center justify-between border-b pb-2 border-slate-200">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-700" />
                Question Palette
              </h3>
              <span className="text-[11px] text-slate-500 font-mono">
                {answeredCount + markedAndAnsweredCount}/{questions.length} Attempted
              </span>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="flex items-center justify-between p-2 rounded bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold">
                <span>Answered:</span>
                <strong className="text-emerald-700 font-bold">{answeredCount}</strong>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-rose-50 text-rose-900 border border-rose-200 font-semibold">
                <span>Not Answered:</span>
                <strong className="text-rose-700 font-bold">{notAnsweredCount}</strong>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-purple-50 text-purple-900 border border-purple-200 font-semibold">
                <span>Marked:</span>
                <strong className="text-purple-700 font-bold">{markedCount + markedAndAnsweredCount}</strong>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-100 text-slate-800 border border-slate-200 font-semibold">
                <span>Not Visited:</span>
                <strong className="text-slate-600 font-bold">{notVisitedCount}</strong>
              </div>
            </div>

            {/* 150 Question Buttons Grid */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Click Question Number:
              </span>
              <div className="grid grid-cols-5 gap-1.5 max-h-[48vh] overflow-y-auto p-1 border border-slate-200 rounded-lg">
                {questions.map((q, idx) => {
                  const st = getQuestionPaletteStatus(q.questionId);
                  const isCurrent = idx === currentQuestionIndex;

                  let styleClass = 'bg-slate-200 text-slate-700 hover:bg-slate-300';
                  if (st === 'ANSWERED') styleClass = 'bg-emerald-600 text-white font-bold';
                  else if (st === 'NOT_ANSWERED') styleClass = 'bg-rose-600 text-white font-bold';
                  else if (st === 'MARKED_FOR_REVIEW') styleClass = 'bg-purple-600 text-white font-bold rounded-full';
                  else if (st === 'ANSWERED_AND_MARKED') styleClass = 'bg-purple-600 text-white font-bold rounded-full relative';

                  return (
                    <button
                      key={q.questionId}
                      onClick={() => {
                        selectQuestion(idx);
                        setMobilePaletteOpen(false);
                      }}
                      className={`h-8 rounded text-xs font-mono font-bold transition-all flex items-center justify-center cursor-pointer ${styleClass} ${
                        isCurrent ? 'ring-2 ring-slate-900 ring-offset-1 scale-105 shadow' : ''
                      }`}
                    >
                      <span>{idx + 1}</span>
                      {st === 'ANSWERED_AND_MARKED' && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 border border-white absolute top-0.5 right-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Legend */}
            <div className="space-y-1 pt-2 border-t border-slate-200 text-[10px] text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-emerald-600 shrink-0" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-rose-600 shrink-0" />
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-purple-600 shrink-0" />
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-purple-600 relative shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute top-0 right-0" />
                </span>
                <span>Answered & Marked (Evaluated)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-slate-200 shrink-0" />
                <span>Not Visited</span>
              </div>
            </div>
          </div>

          {/* Palette Footer: Submit Examination Button */}
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Examination</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Final Submission Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-base text-slate-900">Examination Summary & Final Submission</h3>
              </div>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Are you sure you want to submit your examination? Once submitted, your answers will be permanently locked and graded according to official UPTET rules.
            </p>

            {/* Summary Statistics Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100 font-bold text-slate-700">
                  <tr>
                    <th className="p-2.5">Status Category</th>
                    <th className="p-2.5 text-right">No. of Questions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2.5 font-medium text-slate-700">Total Questions</td>
                    <td className="p-2.5 text-right font-bold text-slate-900">{questions.length}</td>
                  </tr>
                  <tr className="bg-emerald-50/50">
                    <td className="p-2.5 font-medium text-emerald-900">Answered</td>
                    <td className="p-2.5 text-right font-bold text-emerald-700">{answeredCount}</td>
                  </tr>
                  <tr className="bg-rose-50/50">
                    <td className="p-2.5 font-medium text-rose-900">Visited but Unanswered</td>
                    <td className="p-2.5 text-right font-bold text-rose-700">{notAnsweredCount}</td>
                  </tr>
                  <tr className="bg-purple-50/50">
                    <td className="p-2.5 font-medium text-purple-900">Marked for Review</td>
                    <td className="p-2.5 text-right font-bold text-purple-700">{markedCount + markedAndAnsweredCount}</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-medium text-slate-500">Not Visited</td>
                    <td className="p-2.5 text-right font-bold text-slate-600">{notVisitedCount}</td>
                  </tr>
                  <tr className="bg-slate-50 font-bold">
                    <td className="p-2.5 text-slate-800">Remaining Time</td>
                    <td className="p-2.5 text-right text-emerald-800 font-mono">{formatTimer(timeLeftSeconds)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
              >
                Go Back to Exam
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={handleFinalSubmit}
                className="px-6 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow transition active:scale-98 cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                {submitting ? (
                  <span>Evaluating Paper...</span>
                ) : (
                  <>
                    <span>Final Submit</span>
                    <CheckCircle className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

