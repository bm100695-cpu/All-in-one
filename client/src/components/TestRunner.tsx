import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  Calculator,
  Delete,
  Info,
} from 'lucide-react';
import { TestQuestion, UserResponse, PaletteStatus } from '../types';
import { api } from '../api';

interface TestRunnerProps {
  testId: string;
  onFinishTest: (attemptId: string) => void;
  onExit: () => void;
  globalLanguage: 'en' | 'hi';
}

export const TestRunner: React.FC<TestRunnerProps> = ({
  testId,
  onFinishTest,
  onExit,
  globalLanguage,
}) => {
  // Screen views: INSTRUCTIONS -> EXAM -> SUBMITTED
  const [viewState, setViewState] = useState<'INSTRUCTIONS' | 'EXAM'>('INSTRUCTIONS');
  const [loading, setLoading] = useState<boolean>(true);
  const [initError, setInitError] = useState<string | null>(null);
  const [attemptId, setAttemptId] = useState<string>('');
  const [testData, setTestData] = useState<any>(null);
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentSubject, setCurrentSubject] = useState<string>('Physics');
  const [currentSectionType, setCurrentSectionType] = useState<'SECTION_A' | 'SECTION_B'>('SECTION_A');
  const [responses, setResponses] = useState<Record<string, UserResponse>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Set<string>>(new Set());
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(180 * 60);
  const [questionLang, setQuestionLang] = useState<'en' | 'hi'>(globalLanguage);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [savingHeartbeat, setSavingHeartbeat] = useState<boolean>(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState<boolean>(false);
  const [showQuestionPaperModal, setShowQuestionPaperModal] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  // Keep existing portals unchanged; SSC CGL explicitly requires this
  // declaration before its server-timed session can begin.
  const [instructionsRead, setInstructionsRead] = useState<boolean>(true);
  const [numericInputValue, setNumericInputValue] = useState<string>('');
  const [numericalWarning, setNumericalWarning] = useState<string | null>(null);

  const timerRef = useRef<any>(null);
  // The exam clock updates once per second. Keep the latest values in refs so
  // the 25-second autosave timer stays stable instead of being torn down and
  // recreated on every clock tick.
  const responsesRef = useRef(responses);
  const testDataRef = useRef(testData);
  const timeLeftRef = useRef(timeLeftSeconds);
  const autosaveInFlightRef = useRef(false);

  useEffect(() => {
    responsesRef.current = responses;
  }, [responses]);

  useEffect(() => {
    testDataRef.current = testData;
  }, [testData]);

  useEffect(() => {
    timeLeftRef.current = timeLeftSeconds;
  }, [timeLeftSeconds]);

  // Candidate Details (never hardcoded)
  const storedUser = (() => {
    try {
      return JSON.parse(localStorage.getItem('examverse_user') || 'null');
    } catch {
      return null;
    }
  })();
  const candidateName = storedUser?.name || localStorage.getItem('tutornove_candidate_name') || 'Registered Candidate';
  const examPrefix = (testData?.exam?.shortName || testData?.exam?.slug || 'CBT').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  const candidateRoll = storedUser?.studentId || `AIO-${examPrefix}-${(storedUser?.id || 'SESSION').slice(-6).toUpperCase()}`;
  const systemNo = 'ALLINONE-CBT-01';

  // 1. Initial Load: Load Test Meta and Question Bank
  useEffect(() => {
    loadTestPreData();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testId]);

  // Window beforeunload confirmation
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
      // Fetch test info & session
      const data = await api.startTest(testId);
      setAttemptId(data.attemptId);
      setTestData(data.test);
      setQuestions(data.questions);

      const durationSecs = (data.test.durationMinutes || 180) * 60;
      const isSscCglSession = data.test?.exam?.slug === 'ssc-cgl-tier1';
      setInstructionsRead(!isSscCglSession);
      const serverRemaining = data.expiresAt ? Math.max(0, Math.ceil((new Date(data.expiresAt).getTime() - Date.now()) / 1000)) : null;
      const initialTime = isSscCglSession && serverRemaining !== null
        ? serverRemaining
        : Math.max(10, durationSecs - (data.timeSpentSeconds || 0));
      timeLeftRef.current = initialTime;
      setTimeLeftSeconds(initialTime);

      // Build saved responses map
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

      // If user had already started this attempt before reload, resume directly to EXAM
      if ((isSscCglSession && data.confirmedAt) || (!isSscCglSession && data.timeSpentSeconds && data.timeSpentSeconds > 5)) {
        setViewState('EXAM');
        startTimer();
      }

      setResponses(resMap);
      setVisitedQuestions(visited);

      if (data.questions.length > 0) {
        const firstQ = data.questions[0];
        setCurrentSubject(normalizeSubject(firstQ?.sectionName));
      }
    } catch (err: any) {
      console.error('Error initializing test:', err);
      setInitError(err?.message || 'Failed to initialize examination session. Please ensure the backend server is reachable.');
    } finally {
      setLoading(false);
    }
  };

  const startTestFromInstructions = async () => {
    if (testData?.exam?.slug === 'ssc-cgl-tier1' && !instructionsRead) return;
    if (testData?.exam?.slug === 'ssc-cgl-tier1') {
      try {
        const serverSession = await api.beginSscCglAttempt(attemptId);
        timeLeftRef.current = serverSession.remainingSeconds;
        setTimeLeftSeconds(serverSession.remainingSeconds);
      } catch (error: any) {
        setInitError(error?.message || 'The SSC CGL examination session could not be started.');
        return;
      }
    }
    setInstructionsRead(true);
    setViewState('EXAM');

    // Mark first question as visited
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

    startTimer();
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          timeLeftRef.current = 0;
          handleAutoSubmitOnTimeout();
          return 0;
        }
        const next = prev - 1;
        timeLeftRef.current = next;
        return next;
      });
    }, 1000);
  };

  // Heartbeat autosave every 25 seconds
  useEffect(() => {
    const autosaveInterval = setInterval(async () => {
      const latestResponses = responsesRef.current;
      const latestTestData = testDataRef.current;
      if (
        attemptId
        && viewState === 'EXAM'
        && Object.keys(latestResponses).length > 0
        && !autosaveInFlightRef.current
      ) {
        autosaveInFlightRef.current = true;
        setSavingHeartbeat(true);
        try {
          const respArray = Object.values(latestResponses);
          const totalSpent = (latestTestData?.durationMinutes || 180) * 60 - timeLeftRef.current;
          await api.autosaveTest(attemptId, respArray, Math.max(0, totalSpent));
        } catch (e) {
          console.warn('Autosave heartbeat skipped');
        } finally {
          autosaveInFlightRef.current = false;
          setTimeout(() => setSavingHeartbeat(false), 1200);
        }
      }
    }, 25000);

    return () => clearInterval(autosaveInterval);
  }, [attemptId, viewState]);

  // Sync numerical input value when current question changes
  const currentQ = questions[currentQuestionIndex];
  const currentResp = currentQ ? responses[currentQ.questionId] : undefined;

  useEffect(() => {
    if (currentQ && currentQ.questionType === 'NUMERICAL') {
      const existingVal = currentResp?.numericalValue;
      setNumericInputValue(existingVal !== undefined && existingVal !== null ? String(existingVal) : '');
    } else {
      setNumericInputValue('');
    }
  }, [currentQuestionIndex, currentQ]);

  const isJeeMain = !testData?.title?.includes('UPTET') && (testData?.exam?.slug === 'jee-main' || testData?.title?.toLowerCase().includes('jee'));
  const isUptet = testData?.title?.includes('UPTET') || testData?.exam?.slug === 'uptet';
  const isSscCgl = testData?.exam?.slug === 'ssc-cgl-tier1';

  const normalizeSubject = (secName?: string): string => {
    if (!secName) return isJeeMain ? 'Physics' : 'General';
    if (isJeeMain) {
      const lower = secName.toLowerCase();
      if (lower.includes('phys')) return 'Physics';
      if (lower.includes('chem')) return 'Chemistry';
      return 'Mathematics';
    }
    return secName;
  };

  const selectQuestion = (index: number) => {
    if (index < 0 || index >= questions.length) return;
    const targetQ = questions[index];
    setCurrentQuestionIndex(index);
    setNumericalWarning(null);

    const normSubj = normalizeSubject(targetQ.sectionName);
    setCurrentSubject(normSubj);

    // Section A vs Section B
    if (targetQ.questionType === 'NUMERICAL') {
      setCurrentSectionType('SECTION_B');
    } else {
      setCurrentSectionType('SECTION_A');
    }

    // Mark as visited
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

  // Option selection for MCQ
  const handleOptionSelect = (optionId: string) => {
    if (!currentQ) return;
    const prevSelected = currentResp?.selectedOptionIds || [];
    let newSelected: string[] = [];

    if (currentQ.questionType === 'SINGLE_CHOICE') {
      newSelected = [optionId];
    } else {
      newSelected = prevSelected.includes(optionId)
        ? prevSelected.filter((id) => id !== optionId)
        : [...prevSelected, optionId];
    }

    setResponses((prev) => ({
      ...prev,
      [currentQ.questionId]: {
        questionId: currentQ.questionId,
        selectedOptionIds: newSelected,
        numericalValue: undefined,
        timeSpentSec: (prev[currentQ.questionId]?.timeSpentSec || 0) + 3,
        status: newSelected.length > 0 ? 'ANSWERED' : 'NOT_ANSWERED',
      },
    }));
  };

  // Check if a numerical question has a selected response counting toward the 5-question limit
  const isNumericalSelected = (qId: string): boolean => {
    const r = responses[qId];
    return Boolean(
      r &&
      r.numericalValue !== undefined &&
      r.numericalValue !== null &&
      (r.status === 'ANSWERED' || r.status === 'ANSWERED_AND_MARKED')
    );
  };

  const getSubjectNumericalCap = (subj: string): number => {
    const secs: any[] = testData?.patternVersion?.sections || [];
    const secB = secs.find((s) => {
      const n = (s.name || '').toLowerCase();
      return n.includes(subj.toLowerCase().slice(0, 4)) && (n.includes('section b') || n.includes('numerical'));
    });
    if (secB?.maxToAttempt) return secB.maxToAttempt;
    const combined = secs.find((s) => (s.name || '').toLowerCase().includes(subj.toLowerCase().slice(0, 4)));
    if (combined && combined.totalQuestions === 30 && combined.maxToAttempt === 25) return 5;
    return 5;
  };

  const canEnterNumericalForCurrent = (): boolean => {
    if (!currentQ || currentQ.questionType !== 'NUMERICAL') return true;
    const subj = normalizeSubject(currentQ.sectionName);
    const cap = getSubjectNumericalCap(subj);
    const otherSelectedCount = questions.filter(
      (q) =>
        q.questionType === 'NUMERICAL' &&
        normalizeSubject(q.sectionName) === subj &&
        q.questionId !== currentQ.questionId &&
        isNumericalSelected(q.questionId)
    ).length;

    if (otherSelectedCount >= cap) {
      setNumericalWarning(
        `You can attempt only ${cap} numerical questions in this subject. Clear one of your existing numerical responses to answer another question.`
      );
      return false;
    }
    return true;
  };

  // Virtual Keypad Action for Numerical Questions
  const handleKeypadPress = (val: string) => {
    if (!currentQ || currentQ.questionType !== 'NUMERICAL') return;

    if (val !== 'CLEAR' && val !== 'BACKSPACE' && !canEnterNumericalForCurrent()) {
      return;
    }

    let updated = numericInputValue;
    if (val === 'CLEAR') {
      updated = '';
      setNumericalWarning(null);
    } else if (val === 'BACKSPACE') {
      updated = updated.slice(0, -1);
      if (updated === '') setNumericalWarning(null);
    } else if (val === '-') {
      if (updated.startsWith('-')) {
        updated = updated.slice(1);
      } else {
        updated = '-' + updated;
      }
    } else if (val === '.') {
      if (!updated.includes('.')) {
        updated = updated + '.';
      }
    } else {
      // Digits 0-9
      if (updated.length < 10) {
        updated = updated + val;
      }
    }

    const parsed = updated !== '' && !isNaN(Number(updated)) ? Number(updated) : undefined;
    if (parsed !== undefined && !canEnterNumericalForCurrent()) {
      return;
    }

    setNumericInputValue(updated);
    setResponses((prev) => ({
      ...prev,
      [currentQ.questionId]: {
        questionId: currentQ.questionId,
        selectedOptionIds: [],
        numericalValue: parsed,
        timeSpentSec: (prev[currentQ.questionId]?.timeSpentSec || 0) + 2,
        status: parsed !== undefined ? 'ANSWERED' : 'NOT_ANSWERED',
      },
    }));
  };

  const handleSaveAndNext = () => {
    if (!currentQ) return;
    const isNum = currentQ.questionType === 'NUMERICAL';
    const hasNumAnswer = isNum && numericInputValue.trim() !== '' && !isNaN(Number(numericInputValue));
    if (isNum && hasNumAnswer && !canEnterNumericalForCurrent()) {
      return;
    }
    const hasMcqAnswer = !isNum && (currentResp?.selectedOptionIds?.length || 0) > 0;
    const isAnswered = hasNumAnswer || hasMcqAnswer;

    setResponses((prev) => ({
      ...prev,
      [currentQ.questionId]: {
        questionId: currentQ.questionId,
        selectedOptionIds: isNum ? [] : (currentResp?.selectedOptionIds || []),
        numericalValue: isNum && hasNumAnswer ? Number(numericInputValue) : undefined,
        timeSpentSec: (prev[currentQ.questionId]?.timeSpentSec || 0) + 5,
        status: isAnswered ? 'ANSWERED' : 'NOT_ANSWERED',
      },
    }));

    // Advance to next question in active section or subject
    if (currentQuestionIndex < questions.length - 1) {
      selectQuestion(currentQuestionIndex + 1);
    }
  };

  const handleClearResponse = () => {
    if (!currentQ) return;
    setNumericInputValue('');
    setNumericalWarning(null);
    setResponses((prev) => ({
      ...prev,
      [currentQ.questionId]: {
        questionId: currentQ.questionId,
        selectedOptionIds: [],
        numericalValue: undefined,
        timeSpentSec: prev[currentQ.questionId]?.timeSpentSec || 0,
        status: 'NOT_ANSWERED',
      },
    }));
  };

  const handleMarkForReviewAndNext = () => {
    if (!currentQ) return;
    const isNum = currentQ.questionType === 'NUMERICAL';
    const hasNumAnswer = isNum && numericInputValue.trim() !== '' && !isNaN(Number(numericInputValue));
    if (isNum && hasNumAnswer && !canEnterNumericalForCurrent()) {
      return;
    }
    const hasMcqAnswer = !isNum && (currentResp?.selectedOptionIds?.length || 0) > 0;
    const isAnswered = hasNumAnswer || hasMcqAnswer;

    const nextStatus: PaletteStatus = isAnswered ? 'ANSWERED_AND_MARKED' : 'MARKED_FOR_REVIEW';

    setResponses((prev) => ({
      ...prev,
      [currentQ.questionId]: {
        questionId: currentQ.questionId,
        selectedOptionIds: isNum ? [] : (currentResp?.selectedOptionIds || []),
        numericalValue: isNum && hasNumAnswer ? Number(numericInputValue) : undefined,
        timeSpentSec: (prev[currentQ.questionId]?.timeSpentSec || 0) + 5,
        status: nextStatus,
      },
    }));

    if (currentQuestionIndex < questions.length - 1) {
      selectQuestion(currentQuestionIndex + 1);
    }
  };

  const handleAutoSubmitOnTimeout = async () => {
    alert('Time has expired! Your examination is being submitted automatically.');
    await performSubmission();
  };

  const performSubmission = async () => {
    setSubmitting(true);
    try {
      const respArray = Object.values(responses);
      const totalSpent = (testData?.durationMinutes || 180) * 60 - timeLeftRef.current;
      await api.submitTest(attemptId, respArray, Math.max(0, totalSpent));
      onFinishTest(attemptId);
    } catch (err) {
      console.error('Submission error:', err);
      alert('Error submitting test. Please try again.');
    } finally {
      setSubmitting(false);
      setShowSubmitModal(false);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Helper for Palette Status
  const getQuestionPaletteStatus = (qId: string): PaletteStatus => {
    const isVisited = visitedQuestions.has(qId);
    const resp = responses[qId];

    if (!isVisited && !resp) return 'NOT_VISITED';
    if (!resp) return 'NOT_ANSWERED';
    return resp.status || 'NOT_ANSWERED';
  };

  // Index and group question data once per content/answer change. These values
  // are also used by the palette, which avoids repeated O(n) scans during each
  // one-second clock repaint and keeps click/input interactions responsive.
  const questionIndexById = useMemo(
    () => new Map(questions.map((question, index) => [question.questionId, index])),
    [questions],
  );
  const questionsBySubject = useMemo(() => {
    const grouped = new Map<string, TestQuestion[]>();
    questions.forEach((question) => {
      const subject = normalizeSubject(question.sectionName);
      const existing = grouped.get(subject);
      if (existing) existing.push(question);
      else grouped.set(subject, [question]);
    });
    return grouped;
  }, [questions, isJeeMain]);
  const distinctSections = useMemo(
    () => Array.from(new Set(questions.map((question) => question.sectionName).filter(Boolean))) as string[],
    [questions],
  );
  const subjectList: string[] = useMemo(
    () => isJeeMain
      ? ['Physics', 'Chemistry', 'Mathematics']
      : distinctSections.length > 0
        ? distinctSections
        : ['General Section'],
    [distinctSections, isJeeMain],
  );
  const subjectQuestions = questionsBySubject.get(currentSubject) || [];
  const hasNumerical = useMemo(
    () => questions.some((question) => question.questionType === 'NUMERICAL'),
    [questions],
  );
  const sectionAQuestions = useMemo(
    () => subjectQuestions.filter((question) => question.questionType !== 'NUMERICAL'),
    [subjectQuestions],
  );
  const sectionBQuestions = useMemo(
    () => subjectQuestions.filter((question) => question.questionType === 'NUMERICAL'),
    [subjectQuestions],
  );
  const displayedQuestions = hasNumerical
    ? (currentSectionType === 'SECTION_A' ? sectionAQuestions : sectionBQuestions)
    : subjectQuestions;
  const paletteCounts = useMemo(() => {
    let answered = 0;
    let answeredAndMarked = 0;
    let marked = 0;
    let notAnswered = 0;
    Object.values(responses).forEach((response) => {
      if (response.status === 'ANSWERED') answered += 1;
      else if (response.status === 'ANSWERED_AND_MARKED') answeredAndMarked += 1;
      else if (response.status === 'MARKED_FOR_REVIEW') marked += 1;
      else if (response.status === 'NOT_ANSWERED' && visitedQuestions.has(response.questionId)) notAnswered += 1;
    });
    return {
      answered,
      answeredAndMarked,
      marked,
      notAnswered,
      notVisited: Math.max(0, questions.length - visitedQuestions.size),
    };
  }, [questions.length, responses, visitedQuestions]);
  const allAnswered = paletteCounts.answered;
  const allAnsweredAndMarked = paletteCounts.answeredAndMarked;
  const allMarked = paletteCounts.marked;
  const allNotAnswered = paletteCounts.notAnswered;
  const allNotVisited = paletteCounts.notVisited;

  // Time calculations
  const hours = Math.floor(timeLeftSeconds / 3600);
  const minutes = Math.floor((timeLeftSeconds % 3600) / 60);
  const seconds = timeLeftSeconds % 60;
  const isWarning15 = timeLeftSeconds <= 15 * 60 && timeLeftSeconds > 5 * 60;
  const isWarning5 = timeLeftSeconds <= 5 * 60;

  // Color mapper for question buttons
  const getPaletteBadgeStyle = (status: PaletteStatus, isCurrent: boolean) => {
    let base = 'font-bold text-xs flex items-center justify-center transition-all cursor-pointer relative ';
    const border = isCurrent ? ' ring-2 ring-indigo-900 ring-offset-2 scale-105 z-10' : '';

    switch (status) {
      case 'ANSWERED':
        return base + 'bg-emerald-600 text-white rounded-t-sm rounded-b-lg' + border;
      case 'NOT_ANSWERED':
        return base + 'bg-rose-600 text-white rounded-t-lg rounded-b-sm' + border;
      case 'MARKED_FOR_REVIEW':
        return base + 'bg-purple-600 text-white rounded-full' + border;
      case 'ANSWERED_AND_MARKED':
        return base + 'bg-purple-600 text-white rounded-full' + border;
      case 'NOT_VISITED':
      default:
        return base + 'bg-slate-200 text-slate-800 rounded' + border;
    }
  };

  if (loading) {
    return (
      <div className="h-[75vh] flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 rounded-full border-4 border-indigo-200 border-t-indigo-700 animate-spin" />
        <p className="text-sm font-semibold text-slate-700">Connecting to All in One CBT Examination Server...</p>
      </div>
    );
  }

  if (initError) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl border border-red-200 p-6 shadow-sm text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-tn-navy">Examination Session Error</h3>
            <p className="text-xs text-slate-600 mt-1">{initError}</p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={onExit}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Return to Library
            </button>
            <button
              onClick={loadTestPreData}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-tn-blue hover:bg-tn-blue-hover transition-colors cursor-pointer"
            >
              Retry Connection
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: EXAM INSTRUCTIONS / NOTICE BOARD SCREEN
  // =========================================================================
  if (viewState === 'INSTRUCTIONS') {
    return (
      <div className="bg-slate-100 min-h-[calc(100vh-4rem)] flex flex-col -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Notice Board Top Bar */}
        <div className="bg-tn-navy text-white px-6 py-4 flex items-center justify-between shadow-md border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-tn-blue flex items-center justify-center font-black text-sm tracking-wider shadow">
              TN
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight">
                All in One Examination System — Computer Based Test (CBT)
              </h1>
              <p className="text-xs text-slate-400 font-mono">Exam Notice Board & Official Candidate Instructions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-800 rounded text-emerald-400 border border-slate-700 hidden sm:inline-block">
              Terminal: {systemNo}
            </span>
            <button
              type="button"
              onClick={startTestFromInstructions}
              disabled={isSscCgl && !instructionsRead}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-500 disabled:cursor-not-allowed text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <span>Start Exam Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Notice Board Content */}
        <div className="max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex-1 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Candidate & Exam Metadata Banner */}
            <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="flex items-center gap-3 md:col-span-2 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0 md:pr-4">
                <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">{candidateName}</h3>
                  <div className="text-xs text-slate-600 font-mono space-y-0.5">
                    <p>Roll No: <span className="font-bold text-indigo-900">{candidateRoll}</span></p>
                    <p>Terminal: <span className="font-semibold text-slate-800">{systemNo}</span></p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Examination:</span>
                  <span className="font-bold text-slate-900">{testData?.title || 'JEE Main Paper 1 (B.E./B.Tech)'}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Exam Duration:</span>
                  <span className="font-bold text-indigo-950">180 Minutes (3.00 Hours)</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Total Questions:</span>
                  <span className="font-bold text-slate-900">{questions.length} Questions</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[11px]">Maximum Marks:</span>
                  <span className="font-bold text-emerald-800">300 Marks</span>
                </div>
              </div>
            </div>

            {/* Pattern & Section-wise Distribution Table */}
            <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs space-y-3">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-700" />
                Section-wise Question Distribution & Marking Scheme (Paper 1 Pattern)
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse border border-slate-200">
                  <thead className="bg-slate-100 font-bold text-slate-700">
                    <tr>
                      <th className="p-2.5 border border-slate-200">Subject</th>
                      <th className="p-2.5 border border-slate-200">Section A (MCQs)</th>
                      <th className="p-2.5 border border-slate-200">Section B (Numerical Value)</th>
                      <th className="p-2.5 border border-slate-200">Questions (To Attempt)</th>
                      <th className="p-2.5 border border-slate-200">Maximum Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {(['Physics', 'Chemistry', 'Mathematics'] as const).map((subjName) => {
                      const sSecA = questions.filter((q) => normalizeSubject(q.sectionName) === subjName && q.questionType !== 'NUMERICAL');
                      const sSecB = questions.filter((q) => normalizeSubject(q.sectionName) === subjName && q.questionType === 'NUMERICAL');
                      const capB = getSubjectNumericalCap(subjName);
                      const negA = sSecA[0]?.negativeMarks ?? 1;
                      const negB = sSecB[0]?.negativeMarks ?? 1;
                      return (
                        <tr key={subjName} className="hover:bg-slate-50">
                          <td className="p-2.5 font-bold border border-slate-200">{subjName}</td>
                          <td className="p-2.5 border border-slate-200">{sSecA.length} MCQs (+4, {negA > 0 ? `-${negA}` : '0'})</td>
                          <td className="p-2.5 border border-slate-200">
                            {sSecB.length} Numericals ({sSecB.length > capB ? `Attempt ANY ${capB}` : 'All compulsory'}; +4, {negB > 0 ? `-${negB}` : '0'})
                          </td>
                          <td className="p-2.5 font-semibold border border-slate-200">
                            {sSecA.length + sSecB.length} ({sSecA.length + Math.min(capB, sSecB.length)} to attempt)
                          </td>
                          <td className="p-2.5 font-semibold border border-slate-200">100</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-indigo-50/60 font-extrabold text-indigo-950">
                      <td className="p-2.5 border border-slate-200">Total</td>
                      <td className="p-2.5 border border-slate-200">{questions.filter((q) => q.questionType !== 'NUMERICAL').length} MCQs</td>
                      <td className="p-2.5 border border-slate-200">
                        {questions.filter((q) => q.questionType === 'NUMERICAL').length} Numerical ({isJeeMain ? '15 to attempt' : 'All'})
                      </td>
                      <td className="p-2.5 border border-slate-200">{questions.length} ({testData?.patternVersion?.questionsToAttempt || 75} to attempt)</td>
                      <td className="p-2.5 border border-slate-200 text-emerald-800">{testData?.totalMarks || 300} Marks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Standard Question Palette Legend */}
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
                  <span className="text-slate-700 font-medium leading-tight">You have not answered the question.</span>
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
                  <span className="text-slate-700 font-medium leading-tight">You have marked the question for review.</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-200">
                  <span className="w-7 h-7 bg-purple-600 text-white font-bold rounded-full flex items-center justify-center shrink-0 relative">
                    05
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white absolute -top-0.5 -right-0.5" />
                  </span>
                  <span className="text-slate-700 font-medium leading-tight">The question is answered & marked for review (will be evaluated).</span>
                </div>
              </div>
            </div>

            {/* General Instructions Text */}
            <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-xs space-y-3">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">
                Important Candidate Examination Guidelines
              </h2>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                <li>The total test duration is <strong>180 minutes (3 Hours)</strong>.</li>
                <li>The server clock will control the countdown timer at the top right of your exam screen.</li>
                <li>The timer starts strictly when you click the <strong>"I am ready to begin / Start Test"</strong> button below.</li>
                <li>Every question has a question number. You can move between questions using navigation buttons or direct palette clicks.</li>
                <li>You can mark questions for review using <strong>"Mark for Review & Next"</strong>.</li>
                <li>You can modify answers at any time prior to clicking final <strong>Submit Test</strong>.</li>
                <li>The test will automatically submit when the timer reaches zero (00:00:00).</li>
                <li>Correct answers and detailed pedagogical explanations will strictly not be visible during the exam.</li>
                <li>For Numerical Value questions (Section B), enter your answer using either the physical keyboard or the on-screen virtual keypad.</li>
              </ol>
            </div>
          </div>

          {/* Bottom Confirmation Bar */}
          <div className="mt-6 pt-4 border-t border-slate-300 bg-white rounded-xl p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-700">Choose Default Language:</span>
                <select
                  value={questionLang}
                  onChange={(e) => setQuestionLang(e.target.value as 'en' | 'hi')}
                  className="px-2.5 py-1 text-xs font-bold bg-slate-50 border border-slate-300 rounded shadow-xs"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी (Hindi)</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onExit}
                  className="px-4 py-2 rounded text-xs font-bold border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                >
                  Cancel / Return to Dashboard
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 p-3 bg-amber-50/70 border border-amber-200 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                checked={instructionsRead}
                onChange={(e) => setInstructionsRead(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-indigo-700 focus:ring-indigo-500 border-slate-300"
              />
              <span className="text-xs text-slate-800 leading-normal">
                <strong>Declaration:</strong> I have read and understood all the examination instructions above. All computer hardware allotted to me is in proper working condition. I agree to abide by all the rules and regulations of the examination.
              </span>
            </label>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={startTestFromInstructions}
                disabled={isSscCgl && !instructionsRead}
                className="px-10 py-3.5 rounded-lg font-extrabold text-sm uppercase tracking-wider transition-all shadow-md bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-500 disabled:cursor-not-allowed text-white cursor-pointer active:scale-98 flex items-center justify-center gap-2 mx-auto"
              >
                <span>I am ready to begin — Start Test</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: REAL CBT EXAMINATION WORKSPACE
  // =========================================================================
  return (
    <div className="w-full min-w-0 bg-slate-100 min-h-[100dvh] flex flex-col select-none">
      {/* 1. TOP HEADER (Dark-Navy National CBT Standard) */}
      <div className="bg-tn-navy border-b border-slate-800 text-white px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2.5 shadow-md">
        {/* Left: Branding & Paper Info */}
        <div className="min-w-0 flex flex-1 items-center gap-3 sm:flex-none">
          <div className="w-8 h-8 rounded bg-tn-blue text-white flex items-center justify-center font-bold text-xs shadow">
            TN
          </div>
          <div>
            <h1 className="truncate text-sm sm:text-sm font-bold tracking-tight leading-tight">
              {testData?.title || 'JEE Main Examination'}
            </h1>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="text-emerald-400 flex items-center gap-1 font-mono">
                <Wifi className="w-3 h-3 text-emerald-400 animate-pulse" />
                Live Exam Server
              </span>
              <span>•</span>
              <span className="hidden sm:inline">Session: 2026 Shift 1</span>
              {savingHeartbeat && (
                <span className="text-cyan-400 flex items-center gap-1 font-mono text-[10px]">
                  <CloudCheck className="w-3 h-3" />
                  Synced
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Center: Language & Fullscreen Toggle */}
        <div className="order-3 hidden w-full items-center justify-between gap-2 sm:order-none sm:flex sm:w-auto sm:justify-start">
          {/* Question Language Switch */}
          <div className="flex items-center bg-slate-800 p-0.5 rounded border border-slate-700 text-[11px]">
            <span className="text-slate-400 px-1.5 flex items-center gap-1">
              <Globe2 className="w-3 h-3 text-slate-400" />
            </span>
            <button
              onClick={() => setQuestionLang('en')}
              className={`px-2 py-0.5 rounded font-bold transition ${
                questionLang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setQuestionLang('hi')}
              className={`px-2 py-0.5 rounded font-bold transition ${
                questionLang === 'hi' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              HI
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
            className="inline-flex min-h-10 min-w-10 items-center justify-center bg-slate-800 hover:bg-slate-700 rounded text-slate-300 hover:text-white border border-slate-700 transition"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Right: Candidate Card & Digital Countdown Timer */}
        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
          {/* Candidate Badge */}
          <div className="hidden md:flex items-center gap-2 text-right border-r border-slate-700 pr-3">
            <div>
              <p className="text-xs font-bold leading-none">{candidateName}</p>
              <p className="text-[10px] text-slate-400 font-mono leading-none mt-1">{candidateRoll}</p>
            </div>
            <div className="w-7 h-7 rounded bg-slate-700 flex items-center justify-center font-bold text-xs">
              <User className="w-4 h-4 text-slate-300" />
            </div>
          </div>

          {/* Digital Timer */}
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border font-mono font-black text-sm sm:text-base shadow ${
              isWarning5
                ? 'bg-rose-950 text-rose-200 border-rose-500 animate-pulse'
                : isWarning15
                ? 'bg-amber-950 text-amber-200 border-amber-500'
                : 'bg-slate-950 text-emerald-400 border-slate-700'
            }`}
          >
            <Clock className={`w-4 h-4 ${isWarning5 ? 'text-rose-400' : isWarning15 ? 'text-amber-400' : 'text-emerald-400'}`} />
            <span>
              {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:
              {String(seconds).padStart(2, '0')}
            </span>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="min-h-10 px-3.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow transition active:scale-95 cursor-pointer sm:min-h-11 sm:px-4"
          >
            <span className="sm:hidden">Submit</span>
            <span className="hidden sm:inline">Submit Test</span>
          </button>
        </div>
      </div>

      {/* 2. SUBJECT & SECTION NAVIGATION TABS */}
      <div className="bg-slate-200 border-b border-slate-300 px-3 sm:px-4 py-2 flex flex-col items-stretch gap-2 shadow-2xs sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        {/* Subject Tabs */}
        <div className="grid w-full grid-cols-3 gap-2 sm:flex sm:w-auto sm:items-center sm:gap-1.5 sm:overflow-x-auto sm:pb-1 scrollbar-none">
          <span className="text-xs font-extrabold text-slate-600 uppercase tracking-wider mr-1 hidden sm:inline">
            Subjects:
          </span>
          {subjectList.map((subj) => {
            const isSubjActive = currentSubject === subj;
            const subjQs = questionsBySubject.get(subj) || [];
            const answeredInSubj = subjQs.filter((q) => responses[q.questionId]?.status === 'ANSWERED').length;

            return (
              <button
                key={subj}
                type="button"
                onClick={() => {
                  setCurrentSubject(subj);
                  // Find first question in this subject
                  const firstQuestion = subjQs[0];
                  const firstIdx = firstQuestion ? questionIndexById.get(firstQuestion.questionId) : undefined;
                  if (firstIdx !== undefined) selectQuestion(firstIdx);
                }}
                className={`min-h-10 min-w-0 justify-center whitespace-nowrap px-2 py-1 rounded text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 sm:px-3 ${
                  isSubjActive
                    ? 'bg-indigo-900 text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                }`}
              >
                <span>{subj}</span>
                <span
                  className={`hidden text-[10px] px-1.5 py-0.2 rounded-full font-bold sm:inline ${
                    isSubjActive ? 'bg-indigo-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {answeredInSubj}/{subjQs.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Section A vs Section B Sub-tabs (Only for exams with Numerical sections like JEE Main) */}
        {hasNumerical && (
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs scrollbar-none">
            <span className="text-[11px] font-bold text-slate-500 mr-1 hidden md:inline">Sections:</span>
            <button
              type="button"
              onClick={() => {
                setCurrentSectionType('SECTION_A');
                const firstSecA = subjectQuestions.find((q) => q.questionType !== 'NUMERICAL');
                if (firstSecA) {
                  const idx = questionIndexById.get(firstSecA.questionId);
                  if (idx !== undefined) selectQuestion(idx);
                }
              }}
              className={`px-2.5 py-1 rounded font-bold transition cursor-pointer ${
                currentSectionType === 'SECTION_A'
                  ? 'bg-indigo-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              Section A – MCQ ({sectionAQuestions.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrentSectionType('SECTION_B');
                const firstSecB = subjectQuestions.find((q) => q.questionType === 'NUMERICAL');
                if (firstSecB) {
                  const idx = questionIndexById.get(firstSecB.questionId);
                  if (idx !== undefined) selectQuestion(idx);
                }
              }}
              className={`px-2.5 py-1 rounded font-bold transition cursor-pointer ${
                currentSectionType === 'SECTION_B'
                  ? 'bg-indigo-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              Section B – Numerical ({sectionBQuestions.length}; Attempt {sectionBQuestions.length > getSubjectNumericalCap(currentSubject) ? `any ${getSubjectNumericalCap(currentSubject)}` : getSubjectNumericalCap(currentSubject)})
            </button>
          </div>
        )}
      </div>

      {/* 3. MAIN WORKSPACE: LEFT QUESTION AREA, RIGHT QUESTION PALETTE */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Column: Active Question Workspace */}
        <div className="min-w-0 flex-1 flex flex-col justify-between p-3 sm:p-6 overflow-y-auto bg-slate-50">
          {currentQ ? (
            <div className="max-w-4xl w-full mx-auto space-y-5">
              {/* Question Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-300 pb-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base sm:text-lg font-black text-slate-900">
                    Question {currentQuestionIndex + 1}
                  </span>
                  {subjectQuestions.length > 0 && currentQ && (
                  <span className="hidden text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 sm:inline">
                      {currentSubject} Q{subjectQuestions.findIndex((q) => q.questionId === currentQ.questionId) + 1}
                    </span>
                  )}
                  <span className="hidden text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 border border-indigo-200 sm:inline">
                    {currentSubject} — {currentQ.questionType === 'NUMERICAL' ? 'Section B' : 'Section A'}
                  </span>
                  <span className="hidden text-xs font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 sm:inline">
                    Type: {currentQ.questionType === 'NUMERICAL' ? 'Numerical Value' : 'MCQ'}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    <span className="hidden sm:inline">Marks: </span>+{currentQ.marks}.00
                  </span>
                  <span className="text-rose-700 bg-rose-50 px-2 py-1 rounded border border-rose-200">
                    <span className="hidden sm:inline">Negative: </span>{currentQ.negativeMarks > 0 ? `-${currentQ.negativeMarks}.00` : '0.00'}
                  </span>
                </div>
              </div>

              {/* 5-Question Numerical Limit Warning Banner */}
              {numericalWarning && (
                <div className="p-3.5 rounded-xl bg-rose-50 border-2 border-rose-300 text-rose-900 text-xs space-y-2 shadow-xs">
                  <div className="flex items-start gap-2 font-bold">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{numericalWarning}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pl-6">
                    <span className="text-[11px] font-semibold text-rose-800">Selected in {currentSubject}:</span>
                    {sectionBQuestions
                      .filter((q) => isNumericalSelected(q.questionId))
                      .map((sq) => {
                        const gIdx = questionIndexById.get(sq.questionId);
                        if (gIdx === undefined) return null;
                        return (
                          <button
                            key={sq.questionId}
                            type="button"
                            onClick={() => selectQuestion(gIdx)}
                            className="px-2 py-0.5 rounded bg-white border border-rose-300 hover:bg-rose-100 text-rose-900 font-mono font-bold text-[11px] cursor-pointer"
                          >
                            Q.{sq.questionNumber} (= {responses[sq.questionId]?.numericalValue})
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Question Content Box */}
              <div className="p-4 sm:p-6 rounded-xl bg-white border border-slate-300 shadow-sm space-y-5">
                {currentQ.diagramUrl && (
                  <div className="rounded-lg border border-slate-200 bg-white p-2 overflow-x-auto">
                    <img
                      src={currentQ.diagramUrl}
                      alt={`Question ${currentQ.questionNumber} Official Figure & Equations`}
                      className="max-w-full h-auto mx-auto block"
                    />
                  </div>
                )}

                <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed whitespace-pre-line font-sans select-text">
                  {questionLang === 'hi' && currentQ.contentHi ? currentQ.contentHi : currentQ.contentEn}
                </div>

                {/* MCQ Options (Section A) */}
                {currentQ.questionType !== 'NUMERICAL' && (
                  <div className="space-y-3 pt-3">
                    {currentQ.options.map((opt, optIdx) => {
                      const isSelected = currentResp?.selectedOptionIds?.includes(opt.id);
                      const optLabel = String.fromCharCode(65 + optIdx); // A, B, C, D
                      const optText = questionLang === 'hi' && opt.textHi ? opt.textHi : opt.textEn;

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleOptionSelect(opt.id)}
                          className={`w-full min-h-12 text-left p-3.5 rounded-lg border transition-all flex items-start gap-3 cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-50/90 border-indigo-600 shadow-xs ring-1 ring-indigo-600'
                              : 'bg-white border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 transition ${
                              isSelected
                                ? 'bg-indigo-700 border-indigo-700 text-white'
                                : 'border-slate-400 text-slate-600'
                            }`}
                          >
                            {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : optLabel}
                          </div>
                          <div className="text-sm font-medium text-slate-800 leading-relaxed pt-0.5">
                            {optText}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Numerical Input & Virtual Keypad (Section B) */}
                {currentQ.questionType === 'NUMERICAL' && (
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="bg-indigo-50/60 p-3.5 rounded-lg border border-indigo-200 text-xs text-indigo-950 font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="font-bold">Numerical Answer Instructions ({currentSubject} Section B):</p>
                        <p>
                          {sectionBQuestions.length > getSubjectNumericalCap(currentSubject)
                            ? `Attempt ANY ${getSubjectNumericalCap(currentSubject)} out of ${sectionBQuestions.length} numerical questions. Clear an earlier answer to switch.`
                            : 'Enter your numerical value using your keyboard or the on-screen keypad.'}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-white border border-indigo-200 font-mono font-bold text-indigo-900 shrink-0">
                        Selected: {sectionBQuestions.filter((q) => isNumericalSelected(q.questionId)).length} / {getSubjectNumericalCap(currentSubject)}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                      {/* Input Field Display */}
                      <div className="space-y-2 flex-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                          Your Numerical Answer:
                        </label>
                        <input
                          type="text"
                          value={numericInputValue}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9.-]/g, '');
                            const parsed = val !== '' && !isNaN(Number(val)) ? Number(val) : undefined;
                            if (parsed !== undefined && !canEnterNumericalForCurrent()) {
                              return;
                            }
                            if (val === '') setNumericalWarning(null);
                            setNumericInputValue(val);
                            setResponses((prev) => ({
                              ...prev,
                              [currentQ.questionId]: {
                                questionId: currentQ.questionId,
                                selectedOptionIds: [],
                                numericalValue: parsed,
                                timeSpentSec: (prev[currentQ.questionId]?.timeSpentSec || 0) + 1,
                                status: parsed !== undefined ? 'ANSWERED' : 'NOT_ANSWERED',
                              },
                            }));
                          }}
                          placeholder="Type or click keypad..."
                          className="w-full text-xl font-mono font-bold px-4 py-2.5 rounded-lg border-2 border-indigo-600 bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-400 shadow-inner"
                        />
                      </div>

                      {/* On-Screen Virtual Numeric Keypad */}
                      <div className="bg-slate-200 p-3 rounded-xl border border-slate-300 shadow-xs w-full sm:w-64 shrink-0">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-300">
                          <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                            <Calculator className="w-3.5 h-3.5 text-indigo-700" />
                            Virtual Keypad
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', '.'].map((keyVal) => (
                            <button
                              key={keyVal}
                              type="button"
                              onClick={() => handleKeypadPress(keyVal)}
                              className="py-2.5 rounded font-mono font-black text-sm bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 shadow-2xs active:bg-slate-200 cursor-pointer transition"
                            >
                              {keyVal}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => handleKeypadPress('BACKSPACE')}
                            className="col-span-1 py-2 rounded font-bold text-xs bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 shadow-2xs active:bg-amber-300 cursor-pointer"
                          >
                            ⌫ Back
                          </button>
                          <button
                            type="button"
                            onClick={() => handleKeypadPress('CLEAR')}
                            className="col-span-2 py-2 rounded font-bold text-xs bg-rose-100 hover:bg-rose-200 text-rose-900 border border-rose-300 shadow-2xs active:bg-rose-300 cursor-pointer"
                          >
                            Clear All
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center p-12 text-slate-500 font-bold">No question available</div>
          )}

          {/* Bottom Action Toolbar */}
            <div className="max-w-4xl w-full mx-auto pt-4 border-t border-slate-300 flex flex-col items-stretch justify-between gap-2.5 bg-slate-50 sm:flex-row sm:items-center">
            {/* Left Actions */}
            <div className="grid grid-cols-1 gap-2 sm:flex sm:items-center">
              <button
                type="button"
                onClick={handleMarkForReviewAndNext}
                className="min-h-11 px-3.5 py-2 rounded border border-purple-400 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Flag className="w-3.5 h-3.5 text-purple-700" />
                <span>Mark for Review & Next</span>
              </button>

              <button
                type="button"
                onClick={handleClearResponse}
                className="min-h-11 px-3.5 py-2 rounded border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>Clear Response</span>
              </button>
            </div>

            {/* Right Actions */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
              <button
                type="button"
                disabled={currentQuestionIndex === 0}
                onClick={() => selectQuestion(currentQuestionIndex - 1)}
                className={`min-h-11 px-4 py-2 rounded border border-slate-300 text-xs font-bold transition flex items-center justify-center gap-1 ${
                  currentQuestionIndex === 0
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-white hover:bg-slate-100 text-slate-800 cursor-pointer shadow-2xs'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={handleSaveAndNext}
                className="min-h-11 px-5 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition cursor-pointer flex items-center justify-center gap-1 shadow-sm active:scale-98"
              >
                <span>Save & Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Question Palette */}
        <div className="w-full max-h-[70dvh] overflow-y-auto lg:max-h-none lg:w-80 bg-white border-l border-slate-300 flex flex-col justify-between shrink-0 shadow-sm">
          {/* Palette Top: Candidate Info Card */}
          <div>
            <div className="p-3.5 bg-slate-100 border-b border-slate-300 flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-indigo-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                <User className="w-5 h-5 text-indigo-200" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-extrabold text-slate-900 truncate">{candidateName}</p>
                <p className="text-[11px] text-slate-500 font-mono truncate">{candidateRoll}</p>
              </div>
            </div>

            {/* Live Status Legend Box */}
            <div className="p-3 bg-slate-50 border-b border-slate-200 space-y-1.5 text-[11px]">
              <div className="grid grid-cols-2 gap-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 bg-emerald-600 text-white font-bold rounded-t-sm rounded-b-md flex items-center justify-center text-[10px]">
                    {allAnswered}
                  </span>
                  <span className="text-slate-700 font-medium">Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 bg-rose-600 text-white font-bold rounded-t-md rounded-b-sm flex items-center justify-center text-[10px]">
                    {allNotAnswered}
                  </span>
                  <span className="text-slate-700 font-medium">Not Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 bg-slate-200 text-slate-700 font-bold rounded flex items-center justify-center text-[10px]">
                    {allNotVisited}
                  </span>
                  <span className="text-slate-700 font-medium">Not Visited</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 bg-purple-600 text-white font-bold rounded-full flex items-center justify-center text-[10px]">
                    {allMarked}
                  </span>
                  <span className="text-slate-700 font-medium">Marked for Review</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="w-5 h-5 bg-purple-600 text-white font-bold rounded-full flex items-center justify-center text-[10px] relative">
                  {allAnsweredAndMarked}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5" />
                </span>
                <span className="text-slate-700 font-medium">Ans & Marked for Review</span>
              </div>
            </div>

            {/* Section Palette Header */}
            <div className="p-3 bg-slate-200 text-slate-800 font-bold text-xs border-b border-slate-300 flex items-center justify-between gap-2">
              <span>{currentSubject}</span>
              <span className="text-[11px] font-mono text-slate-700">
                {currentSectionType === 'SECTION_A'
                  ? `Sec A (${sectionAQuestions.length} MCQ)`
                  : `Sec B (${sectionBQuestions.filter((q) => isNumericalSelected(q.questionId)).length}/${getSubjectNumericalCap(currentSubject)} Selected)`}
              </span>
            </div>

            {/* Clickable Question Number Grid */}
            <div className="p-4 max-h-[360px] overflow-y-auto">
              <div className="grid grid-cols-5 gap-2">
                {displayedQuestions.map((q) => {
                  const globalIdx = questionIndexById.get(q.questionId);
                  if (globalIdx === undefined) return null;
                  const isCurrent = globalIdx === currentQuestionIndex;
                  const status = getQuestionPaletteStatus(q.questionId);
                  const isNumSelected = q.questionType === 'NUMERICAL' && isNumericalSelected(q.questionId);

                  return (
                    <button
                      key={q.questionId}
                      type="button"
                      onClick={() => selectQuestion(globalIdx)}
                      className={`h-9 ${getPaletteBadgeStyle(status, isCurrent)}`}
                      title={isNumSelected ? 'Selected toward 5 numerical attempts' : undefined}
                    >
                      <span>{q.questionNumber}</span>
                      {status === 'ANSWERED_AND_MARKED' && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 border border-white absolute -top-0.5 -right-0.5" />
                      )}
                      {isNumSelected && (
                        <span className="w-2 h-2 rounded-full bg-amber-300 border border-slate-900 absolute -bottom-0.5 -right-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Palette Bottom Action Buttons */}
          <div className="p-3 bg-slate-100 border-t border-slate-300 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setShowQuestionPaperModal(true)}
                className="py-1.5 px-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded border border-slate-300 transition text-center shadow-2xs"
              >
                Question Paper
              </button>
              <button
                type="button"
                onClick={() => setShowInstructionsModal(true)}
                className="py-1.5 px-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded border border-slate-300 transition text-center shadow-2xs"
              >
                Instructions
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow transition cursor-pointer"
            >
              Submit Examination
            </button>
          </div>
        </div>
      </div>

      {/* 4. SUBMISSION CONFIRMATION MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-300 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-indigo-700" />
                <h3 className="text-lg font-black text-slate-900">Confirm Examination Submission</h3>
              </div>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Subject Summary Table */}
            <div className="space-y-3">
              <p className="text-xs text-slate-600 font-medium">
                Please review your answer summary before making your final submission:
              </p>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 font-bold text-slate-700">
                    <tr>
                      <th className="p-2 border border-slate-200">Subject</th>
                      <th className="p-2 border border-slate-200 text-center">Total</th>
                      <th className="p-2 border border-slate-200 text-center text-emerald-700">Answered</th>
                      <th className="p-2 border border-slate-200 text-center text-rose-700">Not Answered</th>
                      <th className="p-2 border border-slate-200 text-center text-purple-700">Marked for Review</th>
                      <th className="p-2 border border-slate-200 text-center text-slate-500">Not Visited</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {subjectList.map((subj) => {
                      const subjQs = questions.filter((q) => normalizeSubject(q.sectionName) === subj);
                      const ans = subjQs.filter((q) => responses[q.questionId]?.status === 'ANSWERED').length;
                      const marked = subjQs.filter(
                        (q) => responses[q.questionId]?.status === 'MARKED_FOR_REVIEW' || responses[q.questionId]?.status === 'ANSWERED_AND_MARKED'
                      ).length;
                      const notAns = subjQs.filter(
                        (q) => responses[q.questionId]?.status === 'NOT_ANSWERED' && visitedQuestions.has(q.questionId)
                      ).length;
                      const notVis = subjQs.length - subjQs.filter((q) => visitedQuestions.has(q.questionId)).length;

                      return (
                        <tr key={subj} className="hover:bg-slate-50">
                          <td className="p-2 font-bold border border-slate-200">{subj}</td>
                          <td className="p-2 text-center border border-slate-200">{subjQs.length}</td>
                          <td className="p-2 text-center font-bold text-emerald-700 border border-slate-200">{ans}</td>
                          <td className="p-2 text-center font-bold text-rose-700 border border-slate-200">{notAns}</td>
                          <td className="p-2 text-center font-bold text-purple-700 border border-slate-200">{marked}</td>
                          <td className="p-2 text-center text-slate-500 border border-slate-200">{notVis}</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-indigo-50/70 font-black text-indigo-950">
                      <td className="p-2 border border-slate-200">Total Overall</td>
                      <td className="p-2 text-center border border-slate-200">{questions.length}</td>
                      <td className="p-2 text-center text-emerald-700 border border-slate-200">{allAnswered}</td>
                      <td className="p-2 text-center text-rose-700 border border-slate-200">{allNotAnswered}</td>
                      <td className="p-2 text-center text-purple-700 border border-slate-200">{allMarked + allAnsweredAndMarked}</td>
                      <td className="p-2 text-center text-slate-500 border border-slate-200">{allNotVisited}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 leading-relaxed">
              <strong>Warning:</strong> Are you sure you want to submit your examination? Once submitted, you cannot change your answers. Time remaining: <strong>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</strong>.
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs"
              >
                ← Return to Exam
              </button>

              <button
                type="button"
                onClick={performSubmission}
                disabled={submitting}
                className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider shadow transition disabled:opacity-50"
              >
                {submitting ? 'Grading & Submitting...' : 'Submit Final Test'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. INSTRUCTIONS RE-VIEW MODAL */}
      {showInstructionsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-300 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase">Exam Instructions</h3>
              <button onClick={() => setShowInstructionsModal(false)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-700 leading-relaxed">
              <li>Test duration: 180 Minutes (3.00 Hours).</li>
              <li>MCQ questions carry +4 marks for correct and -1 for wrong.</li>
              <li>Numerical value questions carry +4 marks for correct and -1 for wrong.</li>
              <li>Questions marked for review with an answer will be evaluated.</li>
              <li>Timer auto-submits when zero is reached.</li>
            </ol>
            <div className="text-right pt-2">
              <button
                onClick={() => setShowInstructionsModal(false)}
                className="px-4 py-1.5 rounded bg-indigo-900 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. FULL QUESTION PAPER MODAL */}
      {showQuestionPaperModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl border border-slate-300 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Question Paper View</h3>
                <p className="text-xs text-slate-500 font-mono">Total Questions: {questions.length}</p>
              </div>
              <button onClick={() => setShowQuestionPaperModal(false)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 divide-y divide-slate-200">
              {questions.map((q, idx) => (
                <div key={q.questionId} className="pt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                    <span>Q{idx + 1}. [{q.sectionName}]</span>
                    <span className="font-mono">+{q.marks}, -{q.negativeMarks}</span>
                  </div>
                  <div className="text-xs text-slate-900 leading-relaxed font-medium">
                    {q.contentEn}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right pt-4 border-t">
              <button
                onClick={() => setShowQuestionPaperModal(false)}
                className="px-5 py-2 rounded bg-indigo-900 text-white font-bold text-xs"
              >
                Back to Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
