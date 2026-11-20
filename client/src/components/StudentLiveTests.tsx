import React, { useState, useEffect, useRef } from 'react';
import {
  Zap,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Trophy,
  Users,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  X,
  Award,
  Radio,
  Timer,
  AlertTriangle,
  Check,
} from 'lucide-react';
import { api } from '../api';
import { User } from '../types';

interface StudentLiveTestsProps {
  currentUser: User | null;
  portalSlug: string;
  onOpenAuthModal: (mode: 'login' | 'register') => void;
  onStartLiveExam: (scheduleId: string, testId: string, isUptetOrSuperTet: boolean) => void;
}

export const StudentLiveTests: React.FC<StudentLiveTestsProps> = ({
  currentUser,
  portalSlug,
  onOpenAuthModal,
  onStartLiveExam,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'LIVE' | 'OPEN' | 'REGISTERED' | 'UPCOMING' | 'COMPLETED'>('OPEN');
  const [loading, setLoading] = useState<boolean>(true);
  const [schedulesData, setSchedulesData] = useState<{
    liveNow: any[];
    registrationOpen: any[];
    myRegistered: any[];
    upcoming: any[];
    completed: any[];
  }>({
    liveNow: [],
    registrationOpen: [],
    myRegistered: [],
    upcoming: [],
    completed: [],
  });

  // Server Time & IST Clock
  const [serverTimeOffsetMs, setServerTimeOffsetMs] = useState<number>(0);
  const [currentIstTime, setCurrentIstTime] = useState<string>('');

  // Modals
  const [registeringSchedule, setRegisteringSchedule] = useState<any | null>(null);
  const [registerSubmitting, setRegisterSubmitting] = useState<boolean>(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Leaderboard / Results Modal
  const [resultsModalSchedule, setResultsModalSchedule] = useState<any | null>(null);
  const [resultsData, setResultsData] = useState<any | null>(null);
  const [resultsLoading, setResultsLoading] = useState<boolean>(false);

  // Auto-refresh timer
  const refreshTimerRef = useRef<any>(null);
  const requestVersionRef = useRef(0);

  useEffect(() => {
    requestVersionRef.current += 1;
    setSchedulesData({ liveNow: [], registrationOpen: [], myRegistered: [], upcoming: [], completed: [] });
    setActiveSubTab('OPEN');
    setResultsModalSchedule(null);
    setResultsData(null);
    syncServerTime();
    loadSchedules();

    // Poll live data every 20 seconds
    refreshTimerRef.current = setInterval(() => {
      loadSchedules(true);
    }, 20000);

    return () => {
      if (refreshTimerRef.current) clearInterval(refreshTimerRef.current);
    };
  }, [portalSlug]);

  const syncServerTime = async () => {
    try {
      const res = await api.getSystemTime();
      const serverMs = res.timestamp || Date.now();
      const localMs = Date.now();
      setServerTimeOffsetMs(serverMs - localMs);
      setCurrentIstTime(res.istFormatted || '');
    } catch {
      setServerTimeOffsetMs(0);
    }
  };

  const loadSchedules = async (silent = false) => {
    const requestVersion = requestVersionRef.current;
    if (!silent) setLoading(true);
    try {
      const data = await api.getStudentLiveSchedules(portalSlug);
      if (requestVersion !== requestVersionRef.current) return;
      const categories = data.categories || {
        liveNow: [],
        registrationOpen: [],
        myRegistered: [],
        upcoming: [],
        completed: [],
      };
      setSchedulesData(categories);
      if (!silent) {
        if (categories.liveNow && categories.liveNow.length > 0) {
          setActiveSubTab('LIVE');
        } else if (categories.registrationOpen && categories.registrationOpen.length > 0) {
          setActiveSubTab('OPEN');
        }
      }
    } catch (err: any) {
      if (requestVersion !== requestVersionRef.current) return;
      console.error('Failed to load live mock test schedules:', err);
    } finally {
      if (!silent && requestVersion === requestVersionRef.current) setLoading(false);
    }
  };

  const handleRegisterClick = (sched: any) => {
    if (!currentUser) {
      onOpenAuthModal('login');
      return;
    }
    setRegisteringSchedule(sched);
  };

  const handleConfirmRegistration = async () => {
    if (!registeringSchedule) return;
    setRegisterSubmitting(true);
    setFeedbackMsg(null);
    try {
      const res = await api.registerForLiveTest(registeringSchedule.id, portalSlug);
      setFeedbackMsg({
        text: res.message || 'Registration confirmed! Seat reserved successfully.',
        type: 'success',
      });
      setRegisteringSchedule(null);
      loadSchedules(true);
    } catch (err: any) {
      setFeedbackMsg({
        text: err?.message || 'Failed to complete registration. Please try again.',
        type: 'error',
      });
    } finally {
      setRegisterSubmitting(false);
    }
  };

  const handleOpenResults = async (sched: any) => {
    setResultsModalSchedule(sched);
    setResultsLoading(true);
    try {
      const data = await api.getLiveTestResults(sched.id, portalSlug);
      setResultsData(data);
    } catch (err: any) {
      console.error('Failed to load live test results:', err);
    } finally {
      setResultsLoading(false);
    }
  };

  const formatIST = (isoString: string) => {
    if (!isoString) return '—';
    try {
      const d = new Date(isoString);
      if (isNaN(d.getTime())) return '—';
      return new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(d);
    } catch {
      return String(isoString);
    }
  };

  // Helper to calculate countdown against synchronized server time
  const getCountdown = (targetIso: string) => {
    if (!targetIso) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }
    const targetMs = new Date(targetIso).getTime();
    if (isNaN(targetMs)) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }
    const nowMs = Date.now() + serverTimeOffsetMs;
    const diff = targetMs - nowMs;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds, isPast: false };
  };

  // Live countdown component - Clean handmade style
  const CountdownDisplay: React.FC<{ targetIso: string; label: string; urgent?: boolean }> = ({
    targetIso,
    label,
    urgent,
  }) => {
    const [, setTick] = useState<number>(0);
    useEffect(() => {
      const interval = setInterval(() => setTick((t) => t + 1), 1000);
      return () => clearInterval(interval);
    }, []);

    const cd = getCountdown(targetIso);

    if (cd.isPast) {
      return (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 py-1">
          <Clock className="w-3.5 h-3.5" />
          <span>Window Passed</span>
        </div>
      );
    }

    return (
      <div className={`p-2.5 rounded-xl border text-center ${urgent ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-200'}`}>
        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
          <Clock className="w-3 h-3 text-slate-400" />
          <span>{label}</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 font-mono font-bold text-xs sm:text-sm text-slate-900">
          {cd.days > 0 && (
            <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200">
              {String(cd.days).padStart(2, '0')}<span className="text-[10px] text-slate-400 font-sans ml-0.5">d</span>
            </span>
          )}
          <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200">
            {String(cd.hours).padStart(2, '0')}<span className="text-[10px] text-slate-400 font-sans ml-0.5">h</span>
          </span>
          <span className="text-slate-400">:</span>
          <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200">
            {String(cd.minutes).padStart(2, '0')}<span className="text-[10px] text-slate-400 font-sans ml-0.5">m</span>
          </span>
          <span className="text-slate-400">:</span>
          <span className={`px-1.5 py-0.5 rounded bg-white border border-slate-200 ${urgent ? 'text-amber-700 font-extrabold' : 'text-slate-900'}`}>
            {String(cd.seconds).padStart(2, '0')}<span className="text-[10px] text-slate-400 font-sans ml-0.5">s</span>
          </span>
        </div>
      </div>
    );
  };

  const getSubTabList = () => {
    switch (activeSubTab) {
      case 'LIVE':
        return schedulesData.liveNow;
      case 'OPEN':
        return schedulesData.registrationOpen;
      case 'REGISTERED':
        return schedulesData.myRegistered;
      case 'UPCOMING':
        return schedulesData.upcoming;
      case 'COMPLETED':
        return schedulesData.completed;
      default:
        return [];
    }
  };

  const currentList = getSubTabList();

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Page Header Banner - Clean Handmade Examination Style */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>Official Scheduled Examination Arena</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Weekly Live Mock Tests
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Attempt scheduled live mock examinations under official exam hall conditions. Features synchronized server timers, strict start and late-entry windows, and authentic All-India merit rank calculation.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Timezone: <strong className="text-slate-800 font-medium">Asia/Kolkata (IST, UTC+05:30)</strong></span>
              </div>
              {currentIstTime && (
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg text-slate-700">
                  <Timer className="w-3.5 h-3.5 text-slate-500" />
                  <span className="font-mono text-[11px]">Server IST: {currentIstTime}</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-3 gap-2.5 shrink-0">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-0.5 min-w-[80px]">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">Live Now</span>
              <p className="text-xl font-bold text-red-600">
                {schedulesData.liveNow.length}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-0.5 min-w-[80px]">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">Open Reg.</span>
              <p className="text-xl font-bold text-emerald-700">
                {schedulesData.registrationOpen.length}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-0.5 min-w-[80px]">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">Registered</span>
              <p className="text-xl font-bold text-blue-700">
                {schedulesData.myRegistered.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {feedbackMsg && (
        <div
          className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-between gap-3 ${
            feedbackMsg.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedbackMsg.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{feedbackMsg.text}</span>
          </div>
          <button
            onClick={() => setFeedbackMsg(null)}
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 2. Navigation Filter Tabs - Clean Pill Buttons */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3 overflow-x-auto">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('LIVE')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'LIVE'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Live Now ({schedulesData.liveNow.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('OPEN')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'OPEN'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Registration Open ({schedulesData.registrationOpen.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('REGISTERED')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'REGISTERED'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>My Registered ({schedulesData.myRegistered.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('UPCOMING')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'UPCOMING'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Upcoming Schedules ({schedulesData.upcoming.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('COMPLETED')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'COMPLETED'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Completed & Results ({schedulesData.completed.length})</span>
          </button>
        </div>

        <button
          onClick={() => loadSchedules(false)}
          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer transition-colors shrink-0 shadow-xs"
          title="Refresh Live Schedules"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* 3. Schedules Grid - Clean White Exam Cards */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-2">
          <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" />
          <p className="text-xs text-slate-500 font-medium">Loading live mock examinations...</p>
        </div>
      ) : currentList.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 space-y-2">
          <Calendar className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No Examinations in this category</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {activeSubTab === 'LIVE'
              ? 'No live mock tests are actively conducting right now. You can register for upcoming live tests below.'
              : activeSubTab === 'REGISTERED'
              ? 'You have not registered for any upcoming live examinations yet.'
              : 'There are no tests scheduled under this filter at the moment.'}
          </p>
          {activeSubTab !== 'OPEN' && schedulesData.registrationOpen.length > 0 && (
            <button
              onClick={() => setActiveSubTab('OPEN')}
              className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 cursor-pointer"
            >
              <span>Explore {schedulesData.registrationOpen.length} Open Registrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentList.map((sched) => {
            const status = sched.dynamicStatus || sched.status || 'UPCOMING';
            const isLiveNow = status === 'LIVE_NOW';
            const isRegistered = Boolean(sched.isRegistered);
            const canStart = Boolean(sched.canStartExam || (isLiveNow && isRegistered));
            const isUptetOrSuperTet = Boolean(
              sched.exam?.slug === 'uptet' ||
              sched.exam?.slug === 'super-tet' ||
              sched.title?.toLowerCase().includes('uptet') ||
              sched.title?.toLowerCase().includes('super tet')
            );

            return (
              <div
                key={sched.id}
                className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-sm ${
                  isLiveNow
                    ? 'border-red-400 border-t-4 border-t-red-600'
                    : status === 'REGISTRATION_OPEN'
                    ? 'border-slate-200 border-t-4 border-t-blue-600'
                    : 'border-slate-200'
                }`}
              >
                {/* Header Tag Bar */}
                <div
                  className={`px-4 py-2.5 text-xs font-medium flex items-center justify-between border-b ${
                    isLiveNow
                      ? 'bg-red-50 text-red-800 border-red-100'
                      : status === 'REGISTRATION_OPEN'
                      ? 'bg-blue-50 text-blue-800 border-blue-100'
                      : status === 'COMPLETED' || status === 'CONCLUDED'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-100'
                      : 'bg-slate-50 text-slate-700 border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {isLiveNow ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        <span className="font-bold uppercase tracking-wider text-red-700">LIVE NOW</span>
                      </>
                    ) : (
                      <span>{status.replace(/_/g, ' ')}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {sched.pricingType === 'PAID' || sched.isPaid ? (
                      <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px] font-bold">
                        ₹{sched.priceInr || sched.price || 0}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                        FREE ENTRY
                      </span>
                    )}
                    {isRegistered && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-semibold">
                        Registered ✓
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3.5 flex-1">
                  <div className="space-y-1">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      {sched.exam?.shortName || sched.exam?.name || 'Examination'}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
                      {sched.title}
                    </h3>
                    {sched.description && (
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {sched.description}
                      </p>
                    )}
                  </div>

                  {/* Schedule Details Table */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        Date & Start Time:
                      </span>
                      <strong className="text-slate-900 font-semibold">{sched.startAtIST || formatIST(sched.startAt)}</strong>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        Duration:
                      </span>
                      <strong className="text-slate-900 font-semibold">{sched.durationMinutes} Minutes</strong>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                        Total Questions:
                      </span>
                      <strong className="text-slate-900 font-semibold">
                        {sched.totalQuestions || sched.test?.totalQuestions || 0} MCQs ({sched.totalMarks || sched.test?.totalMarks || 0} Marks)
                      </strong>
                    </div>

                    {sched.lateEntryAllowed && (
                      <div className="flex items-center justify-between text-[11px] text-amber-800 pt-0.5">
                        <span>Late Entry Permitted:</span>
                        <span>Up to {sched.lateEntryMinutes} mins</span>
                      </div>
                    )}
                  </div>

                  {/* Countdown Timer Display */}
                  {isLiveNow ? (
                    <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-center space-y-0.5">
                      <span className="text-[10px] font-bold uppercase text-red-700 tracking-wider block">
                        Examination in Progress
                      </span>
                      <p className="text-xs text-slate-700">
                        Closes at: <strong className="text-slate-900 font-semibold">{sched.endAtIST || formatIST(sched.endAt)}</strong>
                      </p>
                    </div>
                  ) : status === 'REGISTRATION_OPEN' ? (
                    <CountdownDisplay
                      targetIso={sched.registrationCloseAt}
                      label="Registration Closes In:"
                      urgent={false}
                    />
                  ) : status === 'UPCOMING' || status === 'STARTING_SOON' ? (
                    <CountdownDisplay
                      targetIso={sched.startAt}
                      label="Exam Starts In:"
                      urgent={status === 'STARTING_SOON'}
                    />
                  ) : null}

                  {/* Enrolled Count */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{sched.registeredCount || 0} enrolled</span>
                    </span>
                    {sched.maxCapacity && (
                      <span>Cap: {sched.maxCapacity}</span>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  {isLiveNow ? (
                    canStart ? (
                      <button
                        onClick={() => onStartLiveExam(sched.id, sched.mockTestId || sched.test?.id || sched.testId, isUptetOrSuperTet)}
                        className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                      >
                        <Zap className="w-4 h-4 fill-current" />
                        <span>Enter Live Exam Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : isRegistered ? (
                      <div className="text-center p-2 rounded-lg bg-slate-100 text-xs text-slate-600">
                        {sched.attemptStatus === 'SUBMITTED' || sched.userAttemptStatus === 'SUBMITTED' ? (
                          <div className="space-y-1">
                            <span className="text-emerald-700 font-bold">Paper Submitted ✓</span>
                            <button
                              onClick={() => handleOpenResults(sched)}
                              className="block mx-auto text-blue-600 underline text-[11px] cursor-pointer mt-0.5"
                            >
                              Check Results & Leaderboard
                            </button>
                          </div>
                        ) : (
                          'Late entry window has closed for this live session.'
                        )}
                      </div>
                    ) : (
                      <div className="text-center p-2 rounded-lg bg-slate-100 text-xs text-slate-500">
                        Registration Closed for this live session.
                      </div>
                    )
                  ) : status === 'REGISTRATION_OPEN' && !isRegistered ? (
                    <button
                      onClick={() => handleRegisterClick(sched)}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Register for Live Test ({sched.pricingType === 'PAID' || sched.isPaid ? `₹${sched.priceInr || sched.price}` : 'Free'})</span>
                    </button>
                  ) : isRegistered ? (
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-center space-y-0.5">
                      <div className="text-xs font-semibold text-blue-900 flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                        <span>Seat Reserved</span>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Starts at {sched.startAtIST || formatIST(sched.startAt)}
                      </p>
                    </div>
                  ) : status === 'COMPLETED' || status === 'CONCLUDED' ? (
                    <button
                      onClick={() => handleOpenResults(sched)}
                      className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      <span>View Results & Leaderboard</span>
                    </button>
                  ) : (
                    <div className="text-center p-2 rounded-lg bg-slate-50 text-xs text-slate-500">
                      Registration opens: {sched.registrationOpenAtIST || formatIST(sched.registrationOpenAt)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. Registration Confirmation Modal - Clean Handmade Style */}
      {registeringSchedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-slate-200 text-slate-900 p-6 sm:p-7 space-y-5 shadow-xl relative">
            <button
              onClick={() => setRegisteringSchedule(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>Live Test Seat Reservation</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900">{registeringSchedule.title}</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Review the scheduled examination timings and instructions before confirming.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Candidate:</span>
                <strong className="text-slate-900 font-semibold">{currentUser?.name} ({currentUser?.email})</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Date & Time:</span>
                <strong className="text-blue-700 font-semibold">{formatIST(registeringSchedule.startAt)}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Duration:</span>
                <strong className="text-slate-900 font-semibold">{registeringSchedule.durationMinutes} Minutes</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Timezone:</span>
                <strong className="text-slate-900 font-semibold">Asia/Kolkata (IST)</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Fee:</span>
                <strong className={registeringSchedule.pricingType === 'PAID' ? 'text-amber-800 font-bold' : 'text-emerald-700 font-bold'}>
                  {registeringSchedule.pricingType === 'PAID' ? `₹${registeringSchedule.priceInr}` : 'Free of Cost'}
                </strong>
              </div>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-600 bg-amber-50 border border-amber-200 p-3 rounded-xl">
              <div className="flex items-center gap-1 font-bold text-amber-900">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                <span>Important Exam Rules:</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                <li>Exam door opens at exact scheduled IST start time.</li>
                <li>Your responses are auto-saved continuously on the server.</li>
                <li>Exam automatically submits at the end of duration.</li>
              </ul>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setRegisteringSchedule(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmRegistration}
                disabled={registerSubmitting}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-50"
              >
                {registerSubmitting ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Check className="w-3.5 h-3.5" />
                )}
                <span>Confirm & Reserve Seat</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Results & Leaderboard Modal - Clean Handmade Style */}
      {resultsModalSchedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-3xl max-h-[90vh] rounded-2xl bg-white border border-slate-200 text-slate-900 p-6 sm:p-7 space-y-5 shadow-2xl flex flex-col relative overflow-hidden">
            <button
              onClick={() => {
                setResultsModalSchedule(null);
                setResultsData(null);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1 shrink-0 pr-8">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                <span>Live Test Results & All-India Leaderboard</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">{resultsModalSchedule.title}</h2>
              <p className="text-xs text-slate-500">
                Conducted: {formatIST(resultsModalSchedule.startAt)} • Total Candidates: {resultsData?.totalParticipants || 0}
              </p>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto space-y-5 pr-1">
              {resultsLoading ? (
                <div className="py-16 flex flex-col items-center justify-center space-y-2">
                  <RefreshCw className="w-7 h-7 text-blue-600 animate-spin" />
                  <p className="text-xs text-slate-500">Compiling leaderboard and results...</p>
                </div>
              ) : resultsData ? (
                <>
                  {/* Candidate Scorecard */}
                  {resultsData.studentScorecard ? (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Your Performance Summary
                        </span>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Evaluated
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                        <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 uppercase font-semibold">Rank</span>
                          <p className="text-lg font-bold text-amber-600">
                            #{resultsData.studentScorecard.rank || '—'}
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 uppercase font-semibold">Percentile</span>
                          <p className="text-lg font-bold text-emerald-700">
                            {resultsData.studentScorecard.percentile !== null
                              ? `${resultsData.studentScorecard.percentile}%`
                              : '—'}
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 uppercase font-semibold">Total Score</span>
                          <p className="text-lg font-bold text-slate-900">
                            {resultsData.studentScorecard.score}
                            <span className="text-xs font-normal text-slate-500">
                              /{resultsData.studentScorecard.maxMarks || resultsModalSchedule.totalMarks}
                            </span>
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                          <span className="text-[10px] text-slate-500 uppercase font-semibold">Accuracy</span>
                          <p className="text-lg font-bold text-blue-700">
                            {resultsData.studentScorecard.accuracy
                              ? `${Math.round(resultsData.studentScorecard.accuracy)}%`
                              : '—'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-center">
                      You did not submit an attempt for this scheduled live examination session.
                    </div>
                  )}

                  {/* Leaderboard Table */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-600" />
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">All-India Live Leaderboard</h4>
                      </div>
                      <span className="text-xs text-slate-500">
                        {resultsData.leaderboard?.length || 0} Evaluated Candidates
                      </span>
                    </div>

                    {resultsData.leaderboard && resultsData.leaderboard.length > 0 ? (
                      <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                            <tr>
                              <th className="py-2.5 px-3">Rank</th>
                              <th className="py-2.5 px-3">Candidate</th>
                              <th className="py-2.5 px-3">Score</th>
                              <th className="py-2.5 px-3">Percentile</th>
                              <th className="py-2.5 px-3">Accuracy</th>
                              <th className="py-2.5 px-3">Time Spent</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {resultsData.leaderboard.map((row: any) => {
                              const isTop1 = row.rank === 1;
                              const isTop3 = row.rank <= 3;
                              const isCurrentUser = row.studentId === currentUser?.id;

                              return (
                                <tr
                                  key={row.rank}
                                  className={
                                    isCurrentUser
                                      ? 'bg-blue-50/70 font-semibold text-blue-900'
                                      : 'hover:bg-slate-50 text-slate-700'
                                  }
                                >
                                  <td className="py-2.5 px-3">
                                    <span
                                      className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                                        isTop1
                                          ? 'bg-amber-100 text-amber-900'
                                          : isTop3
                                          ? 'bg-slate-100 text-slate-800'
                                          : 'text-slate-600'
                                      }`}
                                    >
                                      #{row.rank}
                                    </span>
                                  </td>
                                  <td className="py-2.5 px-3 font-medium text-slate-900">
                                    {row.studentName || 'Candidate'}
                                    {isCurrentUser && (
                                      <span className="ml-1 text-[10px] text-blue-600 font-bold">(You)</span>
                                    )}
                                  </td>
                                  <td className="py-2.5 px-3 font-mono font-bold text-slate-900">
                                    {row.score}
                                  </td>
                                  <td className="py-2.5 px-3 font-mono text-emerald-700 font-semibold">
                                    {row.percentile !== null ? `${row.percentile}%` : '—'}
                                  </td>
                                  <td className="py-2.5 px-3 font-mono text-blue-700">
                                    {row.accuracy ? `${Math.round(row.accuracy)}%` : '—'}
                                  </td>
                                  <td className="py-2.5 px-3 text-slate-500">
                                    {row.timeSpentSeconds
                                      ? `${Math.floor(row.timeSpentSeconds / 60)}m ${row.timeSpentSeconds % 60}s`
                                      : '—'}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl">
                        Leaderboard is being compiled or results will be published at the scheduled result time.
                      </div>
                    )}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
