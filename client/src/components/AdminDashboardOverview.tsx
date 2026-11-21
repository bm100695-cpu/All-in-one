import React, { useEffect, useState } from 'react';
import {
  Activity,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileText,
  GraduationCap,
  Layers,
  Plus,
  Users,
} from 'lucide-react';
import { api } from '../api';
import { User } from '../types';

export type AdminSection = 'OVERVIEW' | 'EXAM_PORTALS' | 'MOCK_TESTS' | 'LIVE_TESTS' | 'STUDENTS_ACTIVITY' | 'MONETIZATION' | 'TRANSACTIONS' | 'QUEUE' | 'AI_GENERATOR' | 'AUDIT' | 'JEE_PYQ' | 'SUPER_TET_PYQ' | 'SETTINGS';

interface AdminDashboardOverviewProps {
  currentUser?: User | null;
  onNavigate: (section: AdminSection) => void;
}

interface DashboardData {
  portals: number;
  tests: number;
  published: number;
  drafts: number;
  liveSchedules: number;
  students: number;
  attempts: number;
  subscriptions: number;
  transactions: number;
  reviewCount: number;
  activities: Array<{ id: string; title: string; detail: string; createdAt?: string }>;
}

const initialData: DashboardData = {
  portals: 0, tests: 0, published: 0, drafts: 0, liveSchedules: 0,
  students: 0, attempts: 0, subscriptions: 0, transactions: 0, reviewCount: 0, activities: [],
};

export const AdminDashboardOverview: React.FC<AdminDashboardOverviewProps> = ({ currentUser, onNavigate }) => {
  const [data, setData] = useState<DashboardData>(initialData);
  const [loading, setLoading] = useState(true);
  const isAdmin = currentUser?.role === 'ADMIN';

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const [studentResult, queueResult, auditResult, examsResult, pricingResult, liveResult] = await Promise.all([
          api.getAdminStudentActivity({ limit: 1 }).catch(() => null),
          api.getReviewQueue().catch(() => ({ questions: [] })),
          api.getCoverageAudit().catch(() => null),
          isAdmin ? api.getAdminExams().catch(() => ({ exams: [] })) : Promise.resolve({ exams: [] }),
          isAdmin ? api.getAdminMonetizationOverview().catch(() => null) : Promise.resolve(null),
          isAdmin ? api.getAdminLiveSchedules({ status: 'LIVE' }).catch(() => ({ schedules: [] })) : Promise.resolve({ schedules: [] }),
        ]);

        const exams = examsResult.exams || [];
        const testCounts = await Promise.all(
          isAdmin ? exams.map((exam: any) => api.getAdminExamTests(exam.id).catch(() => ({ tests: [], stats: null }))) : []
        );
        const tests = testCounts.flatMap((result: any) => result.tests || []);
        const auditRows = Array.isArray(pricingResult?.auditLogs) ? pricingResult.auditLogs : [];
        const activities = auditRows.slice(0, 5).map((row: any, index: number) => ({
          id: row.id || String(index),
          title: row.targetTitle || row.targetType || 'Administrative update',
          detail: row.action || row.notes || 'Configuration updated',
          createdAt: row.createdAt,
        }));
        if (activities.length === 0 && auditResult?.audits?.length) {
          activities.push(...auditResult.audits.slice(0, 5).map((row: any, index: number) => ({
            id: row.id || String(index),
            title: row.examTitle || 'Coverage audit completed',
            detail: row.notes || 'Content governance record',
            createdAt: row.auditTimestamp,
          })));
        }

        if (mounted) {
          setData({
            portals: exams.length,
            tests: tests.length,
            published: tests.filter((test: any) => test.isPublished || test.status === 'PUBLISHED' || test.status === 'ACTIVE').length,
            drafts: tests.filter((test: any) => !test.isPublished || test.status === 'DRAFT').length,
            liveSchedules: liveResult?.schedules?.length || 0,
            students: studentResult?.summary?.totalStudents || 0,
            attempts: studentResult?.summary?.completedAttempts || 0,
            subscriptions: pricingResult?.stats?.totalSubscribers || pricingResult?.activePaidSubscriptionsCount || 0,
            transactions: pricingResult?.stats?.successfulTransactions || 0,
            reviewCount: queueResult.questions?.length || auditResult?.metrics?.pendingQuestions || 0,
            activities,
          });
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };
    void load();
    return () => { mounted = false; };
  }, [isAdmin]);

  const cards = isAdmin
    ? [
        ['Exam portals', data.portals, Layers, 'text-blue-700 bg-blue-50'],
        ['Mock tests', data.tests, FileText, 'text-slate-700 bg-slate-100'],
        ['Published tests', data.published, CheckCircle2, 'text-emerald-700 bg-emerald-50'],
        ['Draft tests', data.drafts, ClipboardCheck, 'text-amber-700 bg-amber-50'],
        ['Active live exams', data.liveSchedules, CalendarDays, 'text-violet-700 bg-violet-50'],
        ['Registered students', data.students, Users, 'text-sky-700 bg-sky-50'],
        ['Completed attempts', data.attempts, Activity, 'text-indigo-700 bg-indigo-50'],
        ['Active subscriptions', data.subscriptions, CreditCard, 'text-emerald-700 bg-emerald-50'],
        ['Payment transactions', data.transactions, CreditCard, 'text-blue-700 bg-blue-50'],
      ]
    : [
        ['Questions awaiting review', data.reviewCount, ClipboardCheck, 'text-amber-700 bg-amber-50'],
        ['Registered students', data.students, Users, 'text-sky-700 bg-sky-50'],
        ['Completed attempts', data.attempts, Activity, 'text-indigo-700 bg-indigo-50'],
      ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold text-[#2563EB]">Control center</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#0F172A]">Dashboard overview</h1>
          <p className="mt-1 text-sm text-[#64748B]">A live view of the LMS operations and content governance.</p>
        </div>
        <button onClick={() => onNavigate('MOCK_TESTS')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-3.5 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          <Plus className="h-4 w-4" /> Create mock test
        </button>
      </div>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label, value, Icon, color]: any) => (
          <div key={label} className="rounded-xl border border-[#E2E8F0] bg-white p-4">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}><Icon className="h-4 w-4" /></div>
            <p className="mt-4 text-2xl font-bold tabular-nums text-[#0F172A]">{loading ? '—' : value}</p>
            <p className="mt-1 text-sm text-[#64748B]">{label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-xl border border-[#E2E8F0] bg-white">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4">
            <div><h2 className="font-semibold text-[#0F172A]">Recent activity</h2><p className="mt-0.5 text-sm text-[#64748B]">Latest auditable administrative changes.</p></div>
            <button onClick={() => onNavigate('AUDIT')} className="text-sm font-semibold text-[#2563EB] hover:underline">View audit</button>
          </div>
          <div className="divide-y divide-[#E2E8F0]">
            {data.activities.length ? data.activities.map((activity) => <div key={activity.id} className="flex gap-3 px-5 py-4"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#059669]" /><div><p className="text-sm font-medium text-[#0F172A]">{activity.title}</p><p className="mt-0.5 text-sm text-[#64748B]">{activity.detail}</p></div></div>) : <p className="px-5 py-8 text-sm text-[#64748B]">No recent activity is available yet.</p>}
          </div>
        </div>
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
          <h2 className="font-semibold text-[#0F172A]">Quick actions</h2>
          <p className="mt-1 text-sm text-[#64748B]">Jump directly into a common workflow.</p>
          <div className="mt-4 space-y-2">
            {[
              ['Create mock test', 'MOCK_TESTS', FileText], ['Schedule live exam', 'LIVE_TESTS', CalendarDays],
              ['Add exam portal', 'EXAM_PORTALS', GraduationCap], ['Manage plans', 'MONETIZATION', CreditCard], ['Review questions', 'QUEUE', BookOpen],
            ].filter(([, target]) => isAdmin || ['QUEUE'].includes(target as string)).map(([label, target, Icon]: any) => (
              <button key={target} onClick={() => onNavigate(target)} className="flex w-full items-center gap-3 rounded-lg border border-[#E2E8F0] px-3 py-2.5 text-left text-sm font-medium text-[#0F172A] hover:border-blue-200 hover:bg-blue-50"><Icon className="h-4 w-4 text-[#2563EB]" />{label}</button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
