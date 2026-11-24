import React, { useState, useEffect } from 'react';
import {
  Users,
  Activity,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  RefreshCw,
  ExternalLink,
  BookOpen,
  Award,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  Target,
  Sparkles,
  AlertCircle,
  TrendingUp,
  User as UserIcon,
  Timer,
  Check,
} from 'lucide-react';
import { api } from '../api';
import {
  AdminStudentActivityResponse,
  AdminLiveAttempt,
  AdminHistoricalAttempt,
  AdminStudentDetailResponse,
  AdminAttemptDetailResponse,
  AdminStudentDirectoryEntry,
} from '../types';

export const AdminStudentActivity: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<AdminStudentActivityResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Filters & Pagination
  const [search, setSearch] = useState<string>('');
  const [selectedExamSlug, setSelectedExamSlug] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [page, setPage] = useState<number>(1);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const [lastRefreshedAt, setLastRefreshedAt] = useState<Date>(new Date());

  // Modals
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [studentDetail, setStudentDetail] = useState<AdminStudentDetailResponse | null>(null);
  const [loadingStudent, setLoadingStudent] = useState<boolean>(false);

  const [selectedAttemptId, setSelectedAttemptId] = useState<string | null>(null);
  const [attemptDetail, setAttemptDetail] = useState<AdminAttemptDetailResponse | null>(null);
  const [loadingAttempt, setLoadingAttempt] = useState<boolean>(false);
  const [isStudentDirectoryOpen, setIsStudentDirectoryOpen] = useState(false);

  // Initial load & when filters change
  useEffect(() => {
    loadActivityData();
  }, [page, selectedExamSlug, selectedStatus]);

  // Search debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      loadActivityData();
    }, 350);
    return () => clearTimeout(timer);
  }, [search]);

  // Auto-refresh interval (every 15 seconds)
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      loadActivityData(true);
    }, 15000);
    return () => clearInterval(interval);
  }, [autoRefresh, page, selectedExamSlug, selectedStatus, search]);

  const loadActivityData = async (isBackground = false) => {
    if (!isBackground) setLoading(true);
    try {
      setError(null);
      const res = await api.getAdminStudentActivity({
        search: search.trim() || undefined,
        examSlug: selectedExamSlug,
        status: selectedStatus,
        page,
        limit: 20,
      });
      setData(res);
      setLastRefreshedAt(new Date());
    } catch (err: any) {
      console.error('Failed to load student activity:', err);
      setError(err.message || 'Failed to fetch student activity data');
    } finally {
      if (!isBackground) setLoading(false);
    }
  };

  const openStudentHistory = async (userId: string) => {
    setSelectedStudentId(userId);
    setLoadingStudent(true);
    try {
      const res = await api.getAdminStudentHistory(userId);
      setStudentDetail(res);
    } catch (err: any) {
      alert('Failed to load student history: ' + (err.message || 'Error'));
      setSelectedStudentId(null);
    } finally {
      setLoadingStudent(false);
    }
  };

  const openAttemptBreakdown = async (attemptId: string) => {
    setSelectedAttemptId(attemptId);
    setLoadingAttempt(true);
    try {
      const res = await api.getAdminAttemptDetail(attemptId);
      setAttemptDetail(res);
    } catch (err: any) {
      alert('Failed to load attempt scorecard: ' + (err.message || 'Error'));
      setSelectedAttemptId(null);
    } finally {
      setLoadingAttempt(false);
    }
  };

  const formatIST = (dateStr?: string | null) => {
    if (!dateStr) return '—';
    try {
      const d = new Date(dateStr);
      return d.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    } catch {
      return dateStr;
    }
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds && seconds !== 0) return '—';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins >= 60) {
      const hrs = Math.floor(mins / 60);
      const remMins = mins % 60;
      return `${hrs}h ${remMins}m`;
    }
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Control Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Student Live Activity & Examination History</h2>
              <p className="text-xs text-slate-500">
                Monitor active students in real time, view currently running CBT tests, and audit full candidate attempt records.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
            />
            <span>Auto-refresh (15s)</span>
          </label>

          <button
            onClick={() => loadActivityData()}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <span className="text-[11px] text-slate-400">
            Updated: {lastRefreshedAt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Currently Active In Test */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Currently in Exam</span>
            <span className="flex h-3 w-3 relative">
              {(data?.summary.activeInTest || 0) > 0 && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${
                  (data?.summary.activeInTest || 0) > 0 ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              ></span>
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">{data?.summary.activeInTest ?? 0}</span>
            <span className="text-xs font-medium text-slate-500">students writing test now</span>
          </div>
          <div className="mt-2 text-xs text-slate-600 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {data?.summary.liveExamsDistribution && data.summary.liveExamsDistribution.length > 0
                ? data.summary.liveExamsDistribution.map((e) => `${e.shortName}: ${e.count}`).join(' | ')
                : 'No exam active right now'}
            </span>
          </div>
        </div>

        {/* Card 2: Total Registered Students */}
        <button
          type="button"
          onClick={() => setIsStudentDirectoryOpen(true)}
          className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-xs transition-colors hover:border-blue-300 hover:bg-blue-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Open registered student list"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Students</span>
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">{data?.summary.totalStudents ?? 0}</span>
            <span className="text-xs font-medium text-slate-500">registered candidates</span>
          </div>
          <div className="mt-2 text-xs text-slate-500">
            {data?.summary.loggedInStudents ?? 0} signed in at least once
          </div>
          <div className="mt-2 text-xs font-semibold text-blue-700">View student names →</div>
        </button>

        {/* Card 3: Total Completed Attempts */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Completed Tests</span>
            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">{data?.summary.completedAttempts ?? 0}</span>
            <span className="text-xs font-medium text-slate-500">submitted papers</span>
          </div>
          <div className="mt-2 text-xs text-slate-500">PYQ shift papers, full mocks & sectional tests</div>
        </div>

        {/* Card 4: Target Exam Distribution */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Target Exam Distribution</span>
            <div className="p-1.5 bg-amber-50 text-amber-600 rounded-lg">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {data?.summary.targetExamDistribution && data.summary.targetExamDistribution.length > 0 ? (
              data.summary.targetExamDistribution.slice(0, 5).map((te, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: te.accentColor }}></span>
                  <span>{te.shortName}:</span>
                  <span className="font-extrabold text-slate-900">{te.count}</span>
                </span>
              ))
            ) : (
              <span className="text-xs text-slate-400">No student target distribution recorded yet</span>
            )}
          </div>
        </div>
      </div>

      {/* Registered students are visible even before they begin their first test. */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
        <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Registered Students & Recent Visits</h3>
            <p className="mt-0.5 text-xs text-slate-500">Shows student name, email, sign-in time, and latest authenticated website visit.</p>
          </div>
          <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700">
            {data?.students?.total ?? 0} student{(data?.students?.total ?? 0) === 1 ? '' : 's'}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-xs">
            <thead className="border-b border-slate-200 bg-white text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3">Candidate</th>
                <th className="px-4 py-3">Student ID</th>
                <th className="px-4 py-3">Target Exam</th>
                <th className="px-4 py-3">Last Sign-in</th>
                <th className="px-4 py-3">Last Visit</th>
                <th className="px-4 py-3">Registered</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-slate-400">Loading registered students…</td></tr>
              ) : data?.students?.entries?.length ? (
                data.students.entries.map((student: AdminStudentDirectoryEntry) => {
                  const exam = data.availableExams.find((item) => item.slug === student.targetExamId || item.id === student.targetExamId);
                  return (
                    <tr key={student.id} className="hover:bg-slate-50/70">
                      <td className="px-4 py-3">
                        <div className="font-semibold text-slate-900">{student.name}</div>
                        <div className="mt-0.5 text-[11px] text-slate-500">{student.email}</div>
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-700">{student.studentId || '—'}</td>
                      <td className="px-4 py-3 text-slate-700">{exam?.shortName || (student.targetExamId ? student.targetExamId.toUpperCase() : 'Not selected')}</td>
                      <td className="px-4 py-3 text-slate-600">{formatIST(student.lastLoginAt)}</td>
                      <td className="px-4 py-3 text-slate-600">{student.lastSeenAt ? formatIST(student.lastSeenAt) : 'Not signed in yet'}</td>
                      <td className="px-4 py-3 text-slate-600">{formatIST(student.createdAt)}</td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={() => openStudentHistory(student.id)} className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200">Profile</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-slate-400">No registered students match the current search.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 1: LIVE EXAM HALL (Currently Active Students) */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <h3 className="text-sm font-bold text-slate-900">Live Exam Hall – Students Currently Writing Tests</h3>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
              {data?.liveAttempts?.length ?? 0} Active Now
            </span>
          </div>
          <span className="text-xs text-slate-500">Real-time CBT active sessions with live elapsed timers</span>
        </div>

        {data?.liveAttempts && data.liveAttempts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/40 text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4">Candidate</th>
                  <th className="py-3 px-4">Student ID / Roll</th>
                  <th className="py-3 px-4">Target Exam</th>
                  <th className="py-3 px-4">Currently Taking Test</th>
                  <th className="py-3 px-4">Time Started</th>
                  <th className="py-3 px-4">Elapsed</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.liveAttempts.map((att: AdminLiveAttempt) => (
                  <tr key={att.id} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {att.user.name ? att.user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{att.user.name}</div>
                          <div className="text-[11px] text-slate-400">{att.user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono font-medium text-slate-700">
                      {att.user.studentId || '—'}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                        {att.user.targetExamId ? att.user.targetExamId.toUpperCase() : 'Not Set'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-800">{att.test.title}</div>
                      <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: att.exam.accentColor }}
                        ></span>
                        <span>{att.exam.title}</span>
                        <span>•</span>
                        <span>{att.test.durationMinutes} mins</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                      {formatIST(att.startedAt)}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                        <Timer className="w-3 h-3" />
                        <span>{att.elapsedMinutes} mins</span>
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>In Progress</span>
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => openStudentHistory(att.user.id)}
                        className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                      >
                        Student History
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50/40">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-700">No Student Active In An Exam Right Now</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
              All students are currently outside examination sessions. When any candidate starts a CBT test, their live progress, elapsed timer, and current paper will appear here instantly.
            </p>
          </div>
        )}
      </div>

      {/* SECTION 2: STUDENT EXAM HISTORY & ATTEMPTS ARCHIVE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Student Exam Attempt History</h3>
              <p className="text-xs text-slate-500">
                Complete audit trail of all student test attempts across JEE Main, NEET UG, UPTET, SUPER TET, UPSC, SSC, and GATE.
              </p>
            </div>
            <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              Total Records: {data?.history.total ?? 0}
            </div>
          </div>

          {/* Filter Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search candidate name, student ID, email, or test title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            {/* Target / Paper Exam Filter */}
            <div className="relative">
              <select
                value={selectedExamSlug}
                onChange={(e) => {
                  setSelectedExamSlug(e.target.value);
                  setPage(1);
                }}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-slate-700"
              >
                <option value="ALL">All Examinations (Filter by Exam)</option>
                {data?.availableExams?.map((ex) => (
                  <option key={ex.id} value={ex.slug}>
                    {ex.shortName} – {ex.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  setPage(1);
                }}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-slate-700"
              >
                <option value="ALL">All Attempt Statuses</option>
                <option value="COMPLETED">Completed / Submitted</option>
                <option value="IN_PROGRESS">In Progress (Live)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Attempts Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/60 text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
                <th className="py-3 px-4">Candidate</th>
                <th className="py-3 px-4">Student ID</th>
                <th className="py-3 px-4">Target Exam</th>
                <th className="py-3 px-4">Test Title & Exam</th>
                <th className="py-3 px-4">Score / Max Marks</th>
                <th className="py-3 px-4">Accuracy</th>
                <th className="py-3 px-4">Time Spent</th>
                <th className="py-3 px-4">Date Started</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={10} className="py-12 text-center text-slate-400">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
                    <span>Loading student history records...</span>
                  </td>
                </tr>
              ) : data?.history?.attempts && data.history.attempts.length > 0 ? (
                data.history.attempts.map((att: AdminHistoricalAttempt) => {
                  const isCompleted = att.status === 'COMPLETED';
                  const scorePct = att.totalMarks > 0 ? Math.round((att.totalScore / att.totalMarks) * 100) : 0;
                  return (
                    <tr key={att.id} className="hover:bg-slate-50/70 transition-colors">
                      {/* Candidate */}
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{att.user.name}</div>
                        <div className="text-[11px] text-slate-400">{att.user.email}</div>
                      </td>

                      {/* Student ID */}
                      <td className="py-3 px-4 font-mono font-medium text-slate-700">
                        {att.user.studentId || '—'}
                      </td>

                      {/* Target Exam */}
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                          {att.user.targetExamId ? att.user.targetExamId.toUpperCase() : 'Not Set'}
                        </span>
                      </td>

                      {/* Test Title & Exam */}
                      <td className="py-3 px-4 max-w-xs">
                        <div className="font-semibold text-slate-800 truncate" title={att.test.title}>
                          {att.test.title}
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: att.exam.accentColor }}
                          ></span>
                          <span>{att.exam.shortName}</span>
                          <span>•</span>
                          <span>{att.test.type.replace('_', ' ')}</span>
                        </div>
                      </td>

                      {/* Score */}
                      <td className="py-3 px-4">
                        {isCompleted ? (
                          <div className="font-mono font-extrabold text-slate-900">
                            {att.totalScore}
                            <span className="text-slate-400 font-normal"> / {att.totalMarks}</span>
                            <span className="ml-1 text-[10px] font-semibold text-slate-500">({scorePct}%)</span>
                          </div>
                        ) : (
                          <span className="text-slate-400 font-medium">—</span>
                        )}
                      </td>

                      {/* Accuracy */}
                      <td className="py-3 px-4">
                        {isCompleted ? (
                          <span
                            className={`font-semibold ${
                              att.accuracyPct >= 70
                                ? 'text-emerald-700'
                                : att.accuracyPct >= 40
                                ? 'text-amber-700'
                                : 'text-rose-700'
                            }`}
                          >
                            {Math.round(att.accuracyPct)}%
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      {/* Time Spent */}
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        {formatDuration(att.timeSpentSeconds)}
                      </td>

                      {/* Date Started */}
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        {formatIST(att.startedAt)}
                      </td>

                      {/* Status */}
                      <td className="py-3 px-4">
                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>Completed</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            <span>In Progress</span>
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => openAttemptBreakdown(att.id)}
                            className="px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                            title="Inspect Attempt Breakdown"
                          >
                            Breakdown
                          </button>
                          <button
                            onClick={() => openStudentHistory(att.user.id)}
                            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                            title="View Student Full History"
                          >
                            Profile
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={10} className="py-10 text-center text-slate-400">
                    No attempts found matching the current search & filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {data?.history && data.history.totalPages > 1 && (
          <div className="p-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <div>
              Showing page <span className="font-bold text-slate-900">{data.history.page}</span> of{' '}
              <span className="font-bold text-slate-900">{data.history.totalPages}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1 || loading}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 cursor-pointer font-semibold"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>
              <button
                onClick={() => setPage((p) => Math.min(data.history.totalPages, p + 1))}
                disabled={page >= data.history.totalPages || loading}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 cursor-pointer font-semibold"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL: REGISTERED STUDENT DIRECTORY */}
      {isStudentDirectoryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs">
          <div className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Registered Students & Recent Visits</h3>
                <p className="mt-0.5 text-xs text-slate-500">Name, email, sign-in and latest authenticated visit are visible only to authorised admins.</p>
              </div>
              <button onClick={() => setIsStudentDirectoryOpen(false)} className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600" aria-label="Close student list">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-auto">
              <table className="w-full min-w-[800px] text-left text-xs">
                <thead className="sticky top-0 border-b border-slate-200 bg-white text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Candidate</th><th className="px-4 py-3">Student ID</th><th className="px-4 py-3">Target Exam</th><th className="px-4 py-3">Last Sign-in</th><th className="px-4 py-3">Last Visit</th><th className="px-4 py-3 text-right">Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data?.students?.entries?.length ? data.students.entries.map((student: AdminStudentDirectoryEntry) => {
                    const exam = data.availableExams.find((item) => item.slug === student.targetExamId || item.id === student.targetExamId);
                    return (
                      <tr key={student.id} className="hover:bg-slate-50">
                        <td className="px-4 py-3"><div className="font-semibold text-slate-900">{student.name}</div><div className="mt-0.5 text-[11px] text-slate-500">{student.email}</div></td>
                        <td className="px-4 py-3 font-mono text-slate-700">{student.studentId || '—'}</td>
                        <td className="px-4 py-3 text-slate-700">{exam?.shortName || (student.targetExamId ? student.targetExamId.toUpperCase() : 'Not selected')}</td>
                        <td className="px-4 py-3 text-slate-600">{formatIST(student.lastLoginAt)}</td>
                        <td className="px-4 py-3 text-slate-600">{student.lastSeenAt ? formatIST(student.lastSeenAt) : 'Not signed in yet'}</td>
                        <td className="px-4 py-3 text-right"><button onClick={() => { setIsStudentDirectoryOpen(false); openStudentHistory(student.id); }} className="rounded-lg bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-100">Open</button></td>
                      </tr>
                    );
                  }) : <tr><td colSpan={6} className="px-4 py-10 text-center text-slate-400">No registered students are available yet.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 1: STUDENT PROFILE & COMPLETE HISTORY MODAL */}
      {selectedStudentId && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-base flex items-center justify-center">
                  {studentDetail?.student.name ? studentDetail.student.name.charAt(0).toUpperCase() : 'S'}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{studentDetail?.student.name || 'Loading Student...'}</h3>
                  <p className="text-xs text-slate-500">
                    {studentDetail?.student.email} • Roll: {studentDetail?.student.studentId || 'N/A'} • Target:{' '}
                    <span className="font-bold text-blue-700">
                      {studentDetail?.student.targetExamId?.toUpperCase() || 'Not Set'}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedStudentId(null);
                  setStudentDetail(null);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {loadingStudent ? (
                <div className="py-12 text-center text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
                  <span>Loading full student performance history...</span>
                </div>
              ) : studentDetail ? (
                <>
                  {/* Aggregated Student Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Attempts</div>
                      <div className="text-xl font-extrabold text-slate-900 mt-1">
                        {studentDetail.stats.totalAttempts}
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Completed</div>
                      <div className="text-xl font-extrabold text-emerald-700 mt-1">
                        {studentDetail.stats.totalCompleted}
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Best Score</div>
                      <div className="text-xl font-extrabold text-blue-700 mt-1">
                        {studentDetail.stats.bestScore}
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Avg Accuracy</div>
                      <div className="text-xl font-extrabold text-indigo-700 mt-1">
                        {studentDetail.stats.avgAccuracy}%
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Joined Platform</div>
                      <div className="text-xs font-semibold text-slate-800 mt-2">
                        {formatIST(studentDetail.student.createdAt)}
                      </div>
                    </div>
                  </div>

                  {/* Student Tests Table */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Complete Test Attempt History ({studentDetail.attempts.length})
                    </h4>
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-200">
                            <th className="py-2.5 px-3">Test Title</th>
                            <th className="py-2.5 px-3">Exam</th>
                            <th className="py-2.5 px-3">Score</th>
                            <th className="py-2.5 px-3">Accuracy</th>
                            <th className="py-2.5 px-3">Time</th>
                            <th className="py-2.5 px-3">Date</th>
                            <th className="py-2.5 px-3">Status</th>
                            <th className="py-2.5 px-3 text-right">Detail</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {studentDetail.attempts.map((att) => (
                            <tr key={att.id} className="hover:bg-slate-50/70">
                              <td className="py-2.5 px-3 font-semibold text-slate-900">{att.test.title}</td>
                              <td className="py-2.5 px-3">
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                                  {att.exam.shortName}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 font-mono font-bold text-slate-800">
                                {att.status === 'COMPLETED' ? `${att.totalScore} / ${att.totalMarks}` : '—'}
                              </td>
                              <td className="py-2.5 px-3 font-semibold text-slate-700">
                                {att.status === 'COMPLETED' ? `${Math.round(att.accuracyPct)}%` : '—'}
                              </td>
                              <td className="py-2.5 px-3 text-slate-500">{formatDuration(att.timeSpentSeconds)}</td>
                              <td className="py-2.5 px-3 text-slate-500 whitespace-nowrap">{formatIST(att.startedAt)}</td>
                              <td className="py-2.5 px-3">
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                    att.status === 'COMPLETED'
                                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                                  }`}
                                >
                                  {att.status}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-right">
                                <button
                                  onClick={() => openAttemptBreakdown(att.id)}
                                  className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md text-xs font-semibold cursor-pointer"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ATTEMPT SCORECARD & SECTION BREAKDOWN */}
      {selectedAttemptId && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-base font-bold text-slate-900">Attempt Detailed Scorecard</h3>
                <p className="text-xs text-slate-500">
                  {attemptDetail?.attempt.test.title} • {attemptDetail?.attempt.user.name} ({attemptDetail?.attempt.user.studentId || 'N/A'})
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedAttemptId(null);
                  setAttemptDetail(null);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              {loadingAttempt ? (
                <div className="py-12 text-center text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
                  <span>Loading attempt scorecard...</span>
                </div>
              ) : attemptDetail ? (
                <>
                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-200 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Total Score</div>
                      <div className="text-2xl font-extrabold text-blue-900 mt-1">
                        {attemptDetail.attempt.totalScore}
                        <span className="text-xs font-normal text-blue-600"> / {attemptDetail.attempt.totalMarks}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Accuracy</div>
                      <div className="text-2xl font-extrabold text-emerald-900 mt-1">
                        {Math.round(attemptDetail.attempt.accuracyPct)}%
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Time Taken</div>
                      <div className="text-base font-bold text-slate-800 mt-2">
                        {formatDuration(attemptDetail.attempt.timeSpentSeconds)}
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Total Attempted</div>
                      <div className="text-base font-bold text-slate-800 mt-2">
                        {attemptDetail.attempt.totalAttempted} / {attemptDetail.attempt.test.totalQuestions}
                      </div>
                    </div>
                  </div>

                  {/* Section-Wise Breakdown */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Subject / Section-Wise Score Breakdown
                    </h4>
                    {attemptDetail.attempt.sectionScores && Object.keys(attemptDetail.attempt.sectionScores).length > 0 ? (
                      <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-200">
                              <th className="py-2 px-3">Subject / Section</th>
                              <th className="py-2 px-3 text-center">Attempted</th>
                              <th className="py-2 px-3 text-center">Correct</th>
                              <th className="py-2 px-3 text-center">Incorrect</th>
                              <th className="py-2 px-3 text-right">Score</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {Object.entries(attemptDetail.attempt.sectionScores).map(([secName, sc]: [string, any]) => (
                              <tr key={secName} className="hover:bg-slate-50">
                                <td className="py-2 px-3 font-semibold text-slate-900">{secName}</td>
                                <td className="py-2 px-3 text-center">{sc.attempted ?? '—'}</td>
                                <td className="py-2 px-3 text-center text-emerald-700 font-bold">{sc.correct ?? '—'}</td>
                                <td className="py-2 px-3 text-center text-rose-700 font-bold">{sc.incorrect ?? '—'}</td>
                                <td className="py-2 px-3 text-right font-mono font-bold text-slate-900">
                                  {sc.score ?? 0}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-xs text-slate-400 italic">No section breakdown JSON stored for this attempt.</p>
                    )}
                  </div>

                  {/* Session Metadata */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Attempt ID:</span>
                      <span className="font-mono text-slate-800">{attemptDetail.attempt.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Started At:</span>
                      <span className="text-slate-800">{formatIST(attemptDetail.attempt.startedAt)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Submitted At:</span>
                      <span className="text-slate-800">{formatIST(attemptDetail.attempt.submittedAt)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Status:</span>
                      <span className="font-bold text-slate-800">{attemptDetail.attempt.status}</span>
                    </div>
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

