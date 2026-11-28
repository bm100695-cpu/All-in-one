import React, { useCallback, useEffect, useState } from 'react';
import { Activity, CalendarDays, CheckCircle2, CreditCard, FileText, Layers, RefreshCw, TriangleAlert, Users } from 'lucide-react';
import { api } from '../api';
import { User } from '../types';

export type AdminSection = 'OVERVIEW' | 'EXAM_PORTALS' | 'MOCK_TESTS' | 'LIVE_TESTS' | 'STUDENTS_ACTIVITY' | 'MONETIZATION' | 'TRANSACTIONS' | 'QUEUE' | 'AI_GENERATOR' | 'AUDIT' | 'JEE_PYQ' | 'SUPER_TET_PYQ' | 'SETTINGS';

interface Props { currentUser?: User | null; onNavigate: (section: AdminSection) => void; }

const INR = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const dateTime = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

export const AdminDashboardOverview: React.FC<Props> = ({ currentUser, onNavigate }) => {
  const isAdmin = currentUser?.role === 'ADMIN';
  const [range, setRange] = useState('LAST_7_DAYS');
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(isAdmin);
  const [error, setError] = useState<string | null>(null);
  const load = useCallback(async () => {
    if (!isAdmin) return;
    setLoading(true); setError(null);
    try { setSummary(await api.getAdminDashboardSummary({ range })); }
    catch (err: any) { setSummary(null); setError(err?.message || 'The dashboard summary could not be loaded.'); }
    finally { setLoading(false); }
  }, [isAdmin, range]);
  useEffect(() => { void load(); }, [load]);

  if (!isAdmin) return <div className="rounded-xl border border-[#E2E8F0] bg-white p-6"><h1 className="text-xl font-bold text-slate-900">Content review workspace</h1><p className="mt-2 text-sm text-slate-600">Operational and revenue data are restricted to administrators. Use the review queue to work on assigned content.</p><button onClick={() => onNavigate('QUEUE')} className="mt-5 rounded-md bg-[#2563EB] px-3 py-2 text-sm font-semibold text-white">Open review queue</button></div>;

  const metrics = summary?.metrics;
  const cards: Array<[string, number | null | undefined, any, string, AdminSection]> = [
    ['Registered students', metrics?.totalStudents, Users, 'bg-sky-50 text-sky-700', 'STUDENTS_ACTIVITY'], ['New in selected period', metrics?.periodRegistrations, Users, 'bg-blue-50 text-blue-700', 'STUDENTS_ACTIVITY'], ['Active students', metrics?.activeStudents, Activity, 'bg-indigo-50 text-indigo-700', 'STUDENTS_ACTIVITY'], ['Unique paying students', metrics?.uniquePayingStudents, CreditCard, 'bg-emerald-50 text-emerald-700', 'TRANSACTIONS'],
    ['Active paid subscriptions', metrics?.activePaidSubscriptions, CreditCard, 'bg-green-50 text-green-700', 'MONETIZATION'], ['Exam portals', metrics?.totalExamPortals, Layers, 'bg-violet-50 text-violet-700', 'EXAM_PORTALS'], ['Published mock tests', metrics?.publishedMockTests, CheckCircle2, 'bg-emerald-50 text-emerald-700', 'MOCK_TESTS'], ['Draft mock tests', metrics?.draftMockTests, FileText, 'bg-amber-50 text-amber-700', 'MOCK_TESTS'],
    ['Premium mock tests', metrics?.premiumMockTests, FileText, 'bg-slate-100 text-slate-700', 'MOCK_TESTS'], ['Completed attempts', metrics?.completedAttempts, CheckCircle2, 'bg-blue-50 text-blue-700', 'STUDENTS_ACTIVITY'], ['Ongoing attempts', metrics?.ongoingAttempts, Activity, 'bg-orange-50 text-orange-700', 'STUDENTS_ACTIVITY'], ['Active live examinations', metrics?.activeLiveExams, CalendarDays, 'bg-purple-50 text-purple-700', 'LIVE_TESTS'],
    ['Successful payments', metrics?.successfulPayments, CreditCard, 'bg-emerald-50 text-emerald-700', 'TRANSACTIONS'], ['Pending payments', metrics?.pendingPayments, CreditCard, 'bg-amber-50 text-amber-700', 'TRANSACTIONS'], ['Failed payments', metrics?.failedPayments, TriangleAlert, 'bg-rose-50 text-rose-700', 'TRANSACTIONS'], ['Questions awaiting review', metrics?.pendingQuestions, FileText, 'bg-amber-50 text-amber-700', 'QUEUE'],
  ];
  const peak = Math.max(1, ...(summary?.revenue?.byDay || []).map((entry: any) => entry.paise));
  return <div className="space-y-6">
    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end"><div><p className="text-sm font-semibold text-[#2563EB]">Control center</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-[#0F172A]">Dashboard overview</h1><p className="mt-1 text-sm text-[#64748B]">Read-only operational metrics from the production database.</p></div><div className="flex flex-wrap items-center gap-2"><select value={range} onChange={(event) => setRange(event.target.value)} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"><option value="TODAY">Today</option><option value="YESTERDAY">Yesterday</option><option value="LAST_7_DAYS">Last 7 days</option><option value="LAST_30_DAYS">Last 30 days</option><option value="THIS_MONTH">This month</option></select><button onClick={() => void load()} disabled={loading} className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"><RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />Refresh</button></div></div>
    {error && <div className="flex items-start justify-between gap-4 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"><span>{error} Existing values are intentionally hidden so an outage cannot appear as zero activity.</span><button onClick={() => void load()} className="shrink-0 font-semibold underline">Retry</button></div>}
    {summary && <p className="text-xs text-slate-500">Last updated {dateTime.format(new Date(summary.generatedAt))} · {summary.filters.range.replaceAll('_', ' ').toLowerCase()}</p>}
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{cards.map(([label, value, Icon, color, target]) => <button key={label} onClick={() => onNavigate(target)} disabled={!summary} className="rounded-xl border border-[#E2E8F0] bg-white p-4 text-left transition hover:border-blue-200 hover:shadow-sm disabled:cursor-default"><div className={`flex h-9 w-9 items-center justify-center rounded-md ${color}`}><Icon className="h-4 w-4" /></div><p className="mt-4 text-2xl font-bold tabular-nums text-[#0F172A]">{loading ? '—' : (value ?? 'Unavailable')}</p><p className="mt-1 text-sm text-[#64748B]">{label}</p></button>)}</section>
    <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]"><div className="rounded-xl border border-[#E2E8F0] bg-white p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-semibold text-slate-900">Verified revenue</h2><p className="mt-1 text-sm text-slate-500">Successful payment records only; pending and failed payments are excluded.</p></div><p className="text-2xl font-bold text-slate-900">{loading ? '—' : INR.format((metrics?.verifiedRevenuePaise || 0) / 100)}</p></div><div className="mt-6 flex h-36 items-end gap-1.5" aria-label="Revenue by day chart">{(summary?.revenue?.byDay || []).map((entry: any) => <div key={entry.date} title={`${entry.date}: ${INR.format(entry.paise / 100)}`} className="flex min-w-0 flex-1 flex-col justify-end"><div className="min-h-1 rounded-t bg-[#2563EB]" style={{ height: `${Math.max(3, Math.round((entry.paise / peak) * 100))}%` }} /><span className="mt-1 truncate text-center text-[10px] text-slate-400">{entry.date.slice(5)}</span></div>)}</div><p className="mt-5 text-xs text-amber-700">Confirmed refunds: unavailable — Cashfree refund verification is not configured, so no refund amount is reported as confirmed.</p></div><div className="rounded-xl border border-[#E2E8F0] bg-white"><div className="border-b border-slate-200 px-5 py-4"><h2 className="font-semibold text-slate-900">Recent administrative activity</h2><p className="mt-0.5 text-sm text-slate-500">Persisted pricing and access changes.</p></div><div className="divide-y divide-slate-100">{summary?.activities?.length ? summary.activities.map((activity: any) => <div key={activity.id} className="px-5 py-3"><p className="text-sm font-medium text-slate-900">{activity.title}</p><p className="mt-0.5 text-xs text-slate-500">{activity.detail}</p></div>) : <p className="px-5 py-8 text-sm text-slate-500">No recorded activity is available.</p>}</div></div></section>
  </div>;
};
