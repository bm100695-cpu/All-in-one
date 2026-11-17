import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Plus,
  RefreshCw,
  Users,
  Award,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Copy,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Shield,
  Activity,
  Send,
  Eye,
  FileCheck,
  Lock,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { api } from '../api';

export const AdminLiveTestManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'CALENDAR' | 'SCHEDULES' | 'MONITOR' | 'RECURRING'>('CALENDAR');
  const [schedules, setSchedules] = useState<any[]>([]);
  const [calendarData, setCalendarData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [exams, setExams] = useState<any[]>([]);
  const [availableTests, setAvailableTests] = useState<any[]>([]);

  // Monitoring State
  const [selectedMonitorId, setSelectedMonitorId] = useState<string | null>(null);
  const [monitorData, setMonitorData] = useState<any>(null);
  const [monitorLoading, setMonitorLoading] = useState<boolean>(false);

  // Modals & Action States
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showCancelModal, setShowCancelModal] = useState<boolean>(false);
  const [cancelTargetId, setCancelTargetId] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState<string>('Administrative rescheduling required');

  const [showRescheduleModal, setShowRescheduleModal] = useState<boolean>(false);
  const [rescheduleTarget, setRescheduleTarget] = useState<any | null>(null);
  const [newRescheduleStart, setNewRescheduleStart] = useState<string>('');
  const [rescheduleReason, setRescheduleReason] = useState<string>('Revised timing slot');

  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);
  const [conflictWarning, setConflictWarning] = useState<any | null>(null);

  // Form State for New Live Schedule
  const [formData, setFormData] = useState<any>({
    examId: '',
    testId: '',
    title: '',
    description: '',
    instructions: '',
    date: new Date().toISOString().split('T')[0],
    startAtTime: '10:00', // HH:MM in IST
    durationMinutes: 180,
    regOpenDaysBefore: 3,
    maxCapacity: '',
    isPaid: false,
    price: 0,
    lateEntryAllowed: true,
    lateEntryMinutes: 15,
    allowEarlySubmission: true,
    allowDisconnectionResume: true,
    resultPublishType: 'IMMEDIATE',
    isLeaderboardEnabled: true,
  });

  // Recurring Series Form State
  const [recurringData, setRecurringData] = useState<any>({
    examId: '',
    testId: '',
    titleBase: 'All-India Weekly Live Mock',
    firstDate: new Date().toISOString().split('T')[0],
    firstTime: '10:00',
    durationMinutes: 180,
    weeksCount: 4,
    isPaid: false,
    price: 0,
    lateEntryMinutes: 15,
  });

  useEffect(() => {
    loadData();
    loadExamsAndTests();
  }, []);

  const showToast = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(null), 4000);
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [schedRes, calRes] = await Promise.all([
        api.getAdminLiveSchedules(),
        api.getAdminLiveCalendar(),
      ]);
      setSchedules(schedRes.schedules || []);
      setCalendarData(calRes);
    } catch (e: any) {
      console.error('Error loading live test data:', e);
      showToast('Failed to load live test data: ' + (e?.message || 'Network error'));
    } finally {
      setLoading(false);
    }
  };

  const loadExamsAndTests = async () => {
    try {
      const examRes = await api.getExamDirectory();
      setExams(examRes.exams || []);
      if (examRes.exams && examRes.exams.length > 0) {
        setFormData((prev: any) => ({ ...prev, examId: examRes.exams[0].id }));
        setRecurringData((prev: any) => ({ ...prev, examId: examRes.exams[0].id }));
        loadTestsForExam(examRes.exams[0].id);
      }
    } catch (e) {
      console.warn('Exams directory load error');
    }
  };

  const loadTestsForExam = async (examId: string) => {
    try {
      const res = await api.getExamTests(examId);
      const tests = res.tests || [];
      setAvailableTests(tests);
      if (tests && tests.length > 0) {
        setFormData((prev: any) => ({ ...prev, testId: tests[0].id, title: `${tests[0].title} — Live Mock` }));
        setRecurringData((prev: any) => ({ ...prev, testId: tests[0].id }));
      }
    } catch (e) {
      console.warn('Tests load error');
    }
  };

  const handleExamChange = (newExamId: string) => {
    setFormData((prev: any) => ({ ...prev, examId: newExamId }));
    loadTestsForExam(newExamId);
  };

  const openMonitor = async (scheduleId: string) => {
    setSelectedMonitorId(scheduleId);
    setActiveTab('MONITOR');
    setMonitorLoading(true);
    try {
      const data = await api.getLiveTestMonitor(scheduleId);
      setMonitorData(data);
    } catch (e: any) {
      showToast('Error loading live monitor telemetry');
    } finally {
      setMonitorLoading(false);
    }
  };

  const refreshMonitor = async () => {
    if (!selectedMonitorId) return;
    setMonitorLoading(true);
    try {
      const data = await api.getLiveTestMonitor(selectedMonitorId);
      setMonitorData(data);
      showToast('Telemetry refreshed from server.');
    } catch {
      showToast('Refresh failed');
    } finally {
      setMonitorLoading(false);
    }
  };

  const handleCreateSchedule = async (e: React.FormEvent, force: boolean = false) => {
    e.preventDefault();
    setConflictWarning(null);

    // Compute UTC timestamps from IST Date & Time
    const [hrs, mins] = formData.startAtTime.split(':').map(Number);
    const startIST = new Date(`${formData.date}T${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:00+05:30`);
    const duration = Number(formData.durationMinutes);
    const endIST = new Date(startIST.getTime() + duration * 60 * 1000);

    const regOpen = new Date(startIST.getTime() - Number(formData.regOpenDaysBefore || 3) * 24 * 3600 * 1000);
    const regClose = startIST;

    const payload = {
      examId: formData.examId,
      testId: formData.testId,
      title: formData.title,
      description: formData.description,
      instructions: formData.instructions,
      date: formData.date,
      startAt: startIST.toISOString(),
      endAt: endIST.toISOString(),
      durationMinutes: duration,
      registrationOpenAt: regOpen.toISOString(),
      registrationCloseAt: regClose.toISOString(),
      maxCapacity: formData.maxCapacity ? Number(formData.maxCapacity) : null,
      isPaid: formData.isPaid,
      price: Number(formData.price) || 0,
      lateEntryAllowed: formData.lateEntryAllowed,
      lateEntryMinutes: Number(formData.lateEntryMinutes) || 15,
      allowEarlySubmission: formData.allowEarlySubmission,
      allowDisconnectionResume: formData.allowDisconnectionResume,
      resultPublishType: formData.resultPublishType,
      isLeaderboardEnabled: formData.isLeaderboardEnabled,
      forceSchedule: force,
    };

    try {
      const res = await api.createLiveSchedule(payload);
      showToast(res.message || 'Weekly Live Mock Test scheduled successfully!');
      setShowCreateModal(false);
      loadData();
    } catch (err: any) {
      if (err?.message?.includes('conflict') || err?.warning === 'SCHEDULING_CONFLICT') {
        setConflictWarning(err);
      } else {
        alert('Failed to schedule live test: ' + (err?.message || 'Server error'));
      }
    }
  };

  const handleCancelLiveTest = async () => {
    if (!cancelTargetId) return;
    try {
      const res = await api.cancelLiveSchedule(cancelTargetId, cancelReason);
      showToast(res.message);
      setShowCancelModal(false);
      loadData();
      if (selectedMonitorId === cancelTargetId) {
        openMonitor(cancelTargetId);
      }
    } catch (err: any) {
      alert('Failed to cancel live test: ' + err.message);
    }
  };

  const handleRescheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rescheduleTarget || !newRescheduleStart) return;
    try {
      const start = new Date(newRescheduleStart);
      const res = await api.rescheduleLiveSchedule(rescheduleTarget.id, {
        newStartAt: start.toISOString(),
        reason: rescheduleReason,
      });
      showToast(res.message);
      setShowRescheduleModal(false);
      loadData();
    } catch (err: any) {
      alert('Failed to reschedule: ' + err.message);
    }
  };

  const handleDuplicate = async (scheduleId: string) => {
    try {
      const res = await api.duplicateLiveSchedule(scheduleId);
      showToast(res.message);
      loadData();
    } catch (err: any) {
      alert('Duplicate failed: ' + err.message);
    }
  };

  const handlePublishResults = async (scheduleId: string) => {
    if (!confirm('Are you sure you want to officially publish results and All-India Leaderboard for this examination?')) return;
    try {
      const res = await api.publishLiveTestResults(scheduleId);
      showToast(res.message);
      loadData();
      if (selectedMonitorId === scheduleId) {
        openMonitor(scheduleId);
      }
    } catch (err: any) {
      alert('Failed to publish results: ' + err.message);
    }
  };

  const handleCreateRecurring = async (e: React.FormEvent) => {
    e.preventDefault();
    const [hrs, mins] = recurringData.firstTime.split(':').map(Number);
    const startIST = new Date(`${recurringData.firstDate}T${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:00+05:30`);

    const payload = {
      examId: recurringData.examId,
      testId: recurringData.testId,
      titleBase: recurringData.titleBase,
      firstStartAt: startIST.toISOString(),
      durationMinutes: Number(recurringData.durationMinutes),
      weeksCount: Number(recurringData.weeksCount),
      isPaid: recurringData.isPaid,
      price: Number(recurringData.price) || 0,
      lateEntryMinutes: Number(recurringData.lateEntryMinutes) || 15,
    };

    try {
      const res = await api.createRecurringLiveSeries(payload);
      showToast(res.message);
      setActiveTab('CALENDAR');
      loadData();
    } catch (err: any) {
      alert('Failed to create recurring series: ' + err.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {notificationMsg && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 text-xs font-semibold flex items-center gap-2 animate-fade-in">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* Top Banner & Control Bar (Clean SaaS Surface) */}
      <div className="bg-white rounded-xl border border-zinc-200/80 p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold shadow-xs shrink-0">
              <Zap className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-zinc-950 tracking-[-0.02em] flex items-center gap-2">
                <span>Weekly Live Mock Test Management</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/90 tabular-nums">
                  IST (UTC+5:30)
                </span>
              </h2>
              <p className="text-xs text-zinc-500 mt-0.5">
                Schedule, monitor, reschedule, and publish weekly online live mock examinations across all portal exams.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => loadData()}
            className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200/70 text-zinc-700 border border-zinc-200/60 transition cursor-pointer"
            title="Refresh Schedules"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Schedule New Live Mock Test</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs (Clean Segmented Track) */}
      <div className="flex items-center gap-1.5 bg-zinc-100/90 p-1 rounded-xl border border-zinc-200/80 text-xs font-semibold shadow-2xs">
        <button
          onClick={() => setActiveTab('CALENDAR')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeTab === 'CALENDAR'
              ? 'bg-white text-zinc-950 shadow-xs font-bold border border-zinc-200/80'
              : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
          <span>Weekly Calendar (Mon – Sun)</span>
        </button>

        <button
          onClick={() => setActiveTab('SCHEDULES')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeTab === 'SCHEDULES'
              ? 'bg-white text-zinc-950 shadow-xs font-bold border border-zinc-200/80'
              : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
          }`}
        >
          <CalendarCheck className="w-3.5 h-3.5 text-emerald-700" />
          <span>All Scheduled Tests ({schedules.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('RECURRING')}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
            activeTab === 'RECURRING'
              ? 'bg-white text-zinc-950 shadow-xs font-bold border border-zinc-200/80'
              : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-zinc-500" />
          <span>Recurring Weekly Rules</span>
        </button>

        {selectedMonitorId && (
          <button
            onClick={() => setActiveTab('MONITOR')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'MONITOR'
                ? 'bg-white text-emerald-800 shadow-xs font-bold border border-emerald-300'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>Live Monitor Terminal</span>
          </button>
        )}
      </div>

      {/* VIEW 1: WEEKLY CALENDAR MATRIX (MONDAY TO SUNDAY) */}
      {activeTab === 'CALENDAR' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Weekly Live Exam Calendar (Asia/Kolkata IST)
              </h3>
              <p className="text-[11px] text-slate-500">
                Visual view of scheduled live mock examinations across the current week.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-200">
              Week of {calendarData?.weekStart ? new Date(calendarData.weekStart).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }) : 'Current'} – {calendarData?.weekEnd ? new Date(calendarData.weekEnd).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-slate-200 min-h-[420px]">
            {calendarData?.calendarDays?.map((day: any) => (
              <div key={day.dayName} className={`p-3 space-y-3 ${day.isToday ? 'bg-blue-50/40' : 'bg-white'}`}>
                <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
                  <span className={`text-xs font-extrabold ${day.isToday ? 'text-blue-700' : 'text-slate-800'}`}>
                    {day.dayName}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {new Date(day.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </span>
                </div>

                <div className="space-y-2">
                  {day.schedules?.length === 0 ? (
                    <div className="text-center py-8 text-[11px] text-slate-400">
                      No live test
                    </div>
                  ) : (
                    day.schedules.map((sch: any) => (
                      <div
                        key={sch.id}
                        className={`p-2.5 rounded-lg border text-xs space-y-1.5 transition-shadow hover:shadow-xs ${
                          sch.computedStatus === 'LIVE_NOW'
                            ? 'bg-emerald-50 border-emerald-300 ring-1 ring-emerald-400'
                            : sch.computedStatus === 'CANCELLED'
                            ? 'bg-rose-50 border-rose-200 opacity-60'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-indigo-100 text-indigo-800">
                            {sch.exam?.shortName || 'EXAM'}
                          </span>
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                            sch.computedStatus === 'LIVE_NOW'
                              ? 'bg-emerald-600 text-white animate-pulse'
                              : sch.computedStatus === 'REGISTRATION_OPEN'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-200 text-slate-700'
                          }`}>
                            {sch.computedStatus.replace('_', ' ')}
                          </span>
                        </div>

                        <p className="font-bold text-slate-900 text-[11px] line-clamp-2 leading-tight">
                          {sch.title}
                        </p>

                        <div className="text-[10px] text-slate-600 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{sch.startAtIST?.split(',')[2] || '10:00 AM'}</span>
                          <span>({sch.durationMinutes}m)</span>
                        </div>

                        <div className="pt-1 border-t border-slate-200/60 flex items-center justify-between">
                          <button
                            onClick={() => openMonitor(sch.id)}
                            className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                          >
                            <Activity className="w-3 h-3" />
                            <span>Monitor</span>
                          </button>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleDuplicate(sch.id)}
                              className="p-1 rounded text-slate-500 hover:bg-slate-200"
                              title="Duplicate to next week"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                            {sch.computedStatus !== 'CANCELLED' && sch.computedStatus !== 'CONCLUDED' && (
                              <button
                                onClick={() => {
                                  setCancelTargetId(sch.id);
                                  setShowCancelModal(true);
                                }}
                                className="p-1 rounded text-rose-500 hover:bg-rose-100"
                                title="Emergency cancel"
                              >
                                <XCircle className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: ALL SCHEDULES LIST */}
      {activeTab === 'SCHEDULES' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Live Mock Test Schedules Master Table
            </h3>
            <span className="text-xs text-slate-500 font-medium">Total: {schedules.length} tests</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Examination & Title</th>
                  <th className="p-3">Scheduled Date & Time (IST)</th>
                  <th className="p-3">Duration & Questions</th>
                  <th className="p-3">Registration Status</th>
                  <th className="p-3">Live Status</th>
                  <th className="p-3">Pricing</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {schedules.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="p-3 max-w-xs">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800">
                          {s.exam?.shortName}
                        </span>
                        <span className="font-extrabold text-slate-900 text-xs line-clamp-1">{s.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        Base Mock: {s.test?.title}
                      </p>
                    </td>

                    <td className="p-3 font-mono text-[11px] text-slate-700">
                      <div>{s.startAtIST}</div>
                      <div className="text-[10px] text-slate-400">Ends: {s.endAtIST}</div>
                    </td>

                    <td className="p-3 text-[11px]">
                      <div>{s.durationMinutes} Minutes</div>
                      <div className="text-slate-500">{s.test?.totalQuestions || 0} Questions • {s.test?.totalMarks || 0} Marks</div>
                    </td>

                    <td className="p-3">
                      <div className="font-bold text-slate-800">
                        {s.registeredStudentsCount} Registered
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        Closes: {s.registrationCloseAtIST?.split(',')[2] || 'Start time'}
                      </div>
                    </td>

                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                        s.computedStatus === 'LIVE_NOW'
                          ? 'bg-emerald-600 text-white animate-pulse'
                          : s.computedStatus === 'REGISTRATION_OPEN'
                          ? 'bg-amber-100 text-amber-900'
                          : s.computedStatus === 'CONCLUDED'
                          ? 'bg-slate-100 text-slate-700'
                          : s.computedStatus === 'CANCELLED'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {s.computedStatus.replace('_', ' ')}
                      </span>
                    </td>

                    <td className="p-3 text-[11px]">
                      {s.isPaid ? (
                        <span className="font-bold text-indigo-700">₹{s.price} Paid</span>
                      ) : (
                        <span className="font-semibold text-emerald-700">Free Participation</span>
                      )}
                    </td>

                    <td className="p-3 text-right space-x-1">
                      <button
                        onClick={() => openMonitor(s.id)}
                        className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold text-[11px] cursor-pointer"
                      >
                        Monitor
                      </button>

                      <button
                        onClick={() => {
                          setRescheduleTarget(s);
                          setNewRescheduleStart(s.startAt ? new Date(s.startAt).toISOString().slice(0, 16) : '');
                          setShowRescheduleModal(true);
                        }}
                        className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium text-[11px] cursor-pointer"
                      >
                        Reschedule
                      </button>

                      {s.computedStatus !== 'CONCLUDED' && (
                        <button
                          onClick={() => handlePublishResults(s.id)}
                          className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold text-[11px] cursor-pointer"
                          title="Publish official results & all-India ranks"
                        >
                          Publish Results
                        </button>
                      )}

                      <button
                        onClick={() => handleDuplicate(s.id)}
                        className="p-1 rounded text-slate-500 hover:bg-slate-100"
                        title="Duplicate"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 3: LIVE MONITORING & PROCTORING TERMINAL (Refined Structured SaaS Card) */}
      {activeTab === 'MONITOR' && monitorData && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-zinc-200/90 shadow-xs border-l-4 border-l-emerald-700 overflow-hidden">
            <div className="bg-slate-50/80 border-b border-zinc-200/80 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {monitorData.exam} Live Terminal
                  </span>
                  <span className="text-xs text-zinc-500 font-mono tabular-nums">
                    Server Clock: <span className="font-semibold text-zinc-800">{monitorData.serverTimeIST}</span>
                  </span>
                </div>
                <h2 className="text-base font-extrabold text-zinc-950 tracking-[-0.02em]">{monitorData.title}</h2>
                <p className="text-xs text-zinc-500 font-mono tabular-nums">
                  Start: <span className="text-zinc-700 font-medium">{monitorData.startAtIST}</span> • Scheduled End: <span className="text-zinc-700 font-medium">{monitorData.endAtIST}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={refreshMonitor}
                  disabled={monitorLoading}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200/90 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-2xs"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${monitorLoading ? 'animate-spin' : ''}`} />
                  <span>Refresh Telemetry</span>
                </button>

                <button
                  onClick={() => handlePublishResults(monitorData.scheduleId)}
                  className="px-4 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition cursor-pointer"
                >
                  Publish Results & Leaderboard
                </button>

                <button
                  onClick={() => {
                    setCancelTargetId(monitorData.scheduleId);
                    setShowCancelModal(true);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold border border-rose-200 transition cursor-pointer"
                >
                  Emergency Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Telemetry Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="bg-white rounded-xl border border-zinc-200/90 p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">Registered</span>
              <span className="text-2xl font-black text-zinc-900 tabular-nums">{monitorData.metrics.registeredCount}</span>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200/90 p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">Joined Exam</span>
              <span className="text-2xl font-black text-blue-600 tabular-nums">{monitorData.metrics.joinedCount}</span>
              <span className="text-[10px] text-zinc-400 block mt-0.5 tabular-nums">{monitorData.metrics.participationRatePct}% turnout</span>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200/90 p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">Attempting Now</span>
              <span className="text-2xl font-black text-emerald-600 animate-pulse tabular-nums">{monitorData.metrics.inProgressCount}</span>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200/90 p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">Submitted</span>
              <span className="text-2xl font-black text-indigo-700 tabular-nums">{monitorData.metrics.submittedCount}</span>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200/90 p-4 shadow-xs">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block">Not Joined Yet</span>
              <span className="text-2xl font-black text-amber-700 tabular-nums">{monitorData.metrics.notStartedCount}</span>
            </div>
          </div>

          {/* Participants Proctoring Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                Registered Student Real-Time Telemetry
              </h3>
              <span className="text-xs text-slate-500 font-medium">{monitorData.participants.length} students</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Email & Roll</th>
                    <th className="p-3">Registered At</th>
                    <th className="p-3">Attempt Status</th>
                    <th className="p-3">Started At</th>
                    <th className="p-3">Submitted At</th>
                    <th className="p-3">Current Score</th>
                    <th className="p-3">Time Spent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {monitorData.participants.map((p: any) => (
                    <tr key={p.studentId} className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">{p.name}</td>
                      <td className="p-3 text-slate-500 font-mono text-[11px]">
                        <div>{p.email}</div>
                        <div className="text-[10px] text-indigo-700 font-semibold">{p.rollNo}</div>
                      </td>
                      <td className="p-3 text-[11px] text-slate-600 font-mono">
                        {new Date(p.registeredAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.attemptStatus === 'SUBMITTED'
                            ? 'bg-indigo-100 text-indigo-800'
                            : p.attemptStatus === 'IN_PROGRESS'
                            ? 'bg-emerald-100 text-emerald-800 animate-pulse'
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          {p.attemptStatus}
                        </span>
                      </td>
                      <td className="p-3 text-[11px] font-mono text-slate-600">
                        {p.startedAt ? new Date(p.startedAt).toLocaleTimeString('en-IN') : '—'}
                      </td>
                      <td className="p-3 text-[11px] font-mono text-slate-600">
                        {p.submittedAt ? new Date(p.submittedAt).toLocaleTimeString('en-IN') : '—'}
                      </td>
                      <td className="p-3 font-bold text-slate-900">
                        {p.score !== null ? `${p.score} Marks` : 'Evaluating...'}
                      </td>
                      <td className="p-3 font-mono text-[11px] text-slate-600">
                        {Math.floor(p.timeSpentSec / 60)}m {p.timeSpentSec % 60}s
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: RECURRING SERIES GENERATOR */}
      {activeTab === 'RECURRING' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs max-w-2xl mx-auto space-y-5">
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-600" />
              Create Automated Recurring Weekly Live Mock Series
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Generate a multi-week series of live mock tests (e.g. Every Sunday for 4 or 8 weeks) with uniform time slots.
            </p>
          </div>

          <form onSubmit={handleCreateRecurring} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Target Examination</label>
                <select
                  value={recurringData.examId}
                  onChange={(e) => {
                    setRecurringData((prev: any) => ({ ...prev, examId: e.target.value }));
                    loadTestsForExam(e.target.value);
                  }}
                  className="w-full p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs font-medium"
                >
                  {exams.map((ex) => (
                    <option key={ex.id} value={ex.id}>{ex.title} ({ex.shortName})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Base Question Paper</label>
                <select
                  value={recurringData.testId}
                  onChange={(e) => setRecurringData((prev: any) => ({ ...prev, testId: e.target.value }))}
                  className="w-full p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs font-medium"
                >
                  {availableTests.map((t) => (
                    <option key={t.id} value={t.id}>{t.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Series Base Title</label>
              <input
                type="text"
                required
                value={recurringData.titleBase}
                onChange={(e) => setRecurringData((prev: any) => ({ ...prev, titleBase: e.target.value }))}
                placeholder="e.g. JEE Main 2026 — Weekly All-India Sunday Live Mock"
                className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1">First Session Date</label>
                <input
                  type="date"
                  required
                  value={recurringData.firstDate}
                  onChange={(e) => setRecurringData((prev: any) => ({ ...prev, firstDate: e.target.value }))}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Start Time (IST)</label>
                <input
                  type="time"
                  required
                  value={recurringData.firstTime}
                  onChange={(e) => setRecurringData((prev: any) => ({ ...prev, firstTime: e.target.value }))}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Number of Weeks</label>
                <select
                  value={recurringData.weeksCount}
                  onChange={(e) => setRecurringData((prev: any) => ({ ...prev, weeksCount: Number(e.target.value) }))}
                  className="w-full p-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs font-medium"
                >
                  <option value={2}>2 Weeks</option>
                  <option value={4}>4 Weeks (1 Month)</option>
                  <option value={8}>8 Weeks (2 Months)</option>
                  <option value={12}>12 Weeks (Quarterly)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer"
              >
                Generate & Schedule Recurring Series
              </button>
            </div>
          </form>
        </div>
      )}

      {/* CREATE LIVE SCHEDULE MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 my-8 space-y-4">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                Schedule New Weekly Live Mock Test
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-base cursor-pointer"
              >
                ✕
              </button>
            </div>

            {conflictWarning && (
              <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl space-y-2 text-xs text-amber-900">
                <div className="flex items-center gap-2 font-bold text-amber-800">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Scheduling Conflict Warning</span>
                </div>
                <p className="text-[11px] leading-relaxed">{conflictWarning.message}</p>
                <button
                  type="button"
                  onClick={(e) => handleCreateSchedule(e, true)}
                  className="px-3 py-1.5 bg-amber-600 text-white rounded font-bold text-[11px] hover:bg-amber-700 cursor-pointer"
                >
                  Confirm & Force Schedule Anyway
                </button>
              </div>
            )}

            <form onSubmit={(e) => handleCreateSchedule(e, false)} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Select Examination</label>
                  <select
                    value={formData.examId}
                    onChange={(e) => handleExamChange(e.target.value)}
                    className="w-full p-2 rounded-lg border border-slate-300 bg-white text-slate-900"
                  >
                    {exams.map((ex) => (
                      <option key={ex.id} value={ex.id}>{ex.title} ({ex.shortName})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Select Base Mock Test</label>
                  <select
                    value={formData.testId}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, testId: e.target.value }))}
                    className="w-full p-2 rounded-lg border border-slate-300 bg-white text-slate-900"
                  >
                    {availableTests.map((t) => (
                      <option key={t.id} value={t.id}>{t.title} ({t.totalQuestions} Qs)</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Live Test Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g. SUPER TET 2026 — Weekly Live Sunday Ranker Mock"
                  className="w-full p-2 rounded-lg border border-slate-300 text-slate-900 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Test Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, date: e.target.value }))}
                    className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Start Time (IST)</label>
                  <input
                    type="time"
                    required
                    value={formData.startAtTime}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, startAtTime: e.target.value }))}
                    className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Duration (Mins)</label>
                  <input
                    type="number"
                    required
                    value={formData.durationMinutes}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, durationMinutes: Number(e.target.value) }))}
                    className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Reg. Open Days Before</label>
                  <input
                    type="number"
                    value={formData.regOpenDaysBefore}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, regOpenDaysBefore: Number(e.target.value) }))}
                    className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Allowed Late Entry</label>
                  <select
                    value={formData.lateEntryMinutes}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, lateEntryMinutes: Number(e.target.value) }))}
                    className="w-full p-2 rounded-lg border border-slate-300 bg-white text-slate-900"
                  >
                    <option value={0}>Strict (0 Mins)</option>
                    <option value={15}>15 Minutes</option>
                    <option value={30}>30 Minutes</option>
                    <option value={60}>60 Minutes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Result Publication</label>
                  <select
                    value={formData.resultPublishType}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, resultPublishType: e.target.value }))}
                    className="w-full p-2 rounded-lg border border-slate-300 bg-white text-slate-900"
                  >
                    <option value="IMMEDIATE">Immediate on Submission</option>
                    <option value="SCHEDULED">At Exam Conclude Time</option>
                    <option value="MANUAL">Manual Admin Trigger</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-6 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isLeaderboardEnabled}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, isLeaderboardEnabled: e.target.checked }))}
                    className="rounded text-emerald-600"
                  />
                  <span className="font-semibold text-slate-800">Enable All-India Leaderboard Ranks</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.allowDisconnectionResume}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, allowDisconnectionResume: e.target.checked }))}
                    className="rounded text-emerald-600"
                  />
                  <span className="font-semibold text-slate-800">Allow Disconnection Recovery</span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-xs cursor-pointer"
                >
                  Publish Live Mock Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* RESCHEDULE MODAL */}
      {showRescheduleModal && rescheduleTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Reschedule Live Mock Test</h3>
            <p className="text-xs text-slate-500">{rescheduleTarget.title}</p>

            <form onSubmit={handleRescheduleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">New Start Date & Time (IST)</label>
                <input
                  type="datetime-local"
                  required
                  value={newRescheduleStart}
                  onChange={(e) => setNewRescheduleStart(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Reschedule Reason (Sent to Students)</label>
                <input
                  type="text"
                  required
                  value={rescheduleReason}
                  onChange={(e) => setRescheduleReason(e.target.value)}
                  placeholder="e.g. Revised time slot requested by student poll"
                  className="w-full p-2 rounded-lg border border-slate-300 text-slate-900"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowRescheduleModal(false)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  Confirm & Notify Students
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EMERGENCY CANCEL MODAL */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-rose-200 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Emergency Cancel Live Mock Test?</h3>
              <p className="text-xs text-slate-600 mt-1">
                This will immediately cancel the live test and dispatch notifications to all registered students.
              </p>
            </div>

            <div className="text-left text-xs">
              <label className="block font-bold text-slate-700 mb-1">Cancellation Reason</label>
              <textarea
                rows={2}
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-300 text-slate-900 text-xs"
              />
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
              >
                No, Keep Scheduled
              </button>
              <button
                onClick={handleCancelLiveTest}
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-xs cursor-pointer"
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
