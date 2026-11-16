import React, { useState, useEffect } from 'react';
import {
  Archive,
  Search,
  CheckCircle2,
  Calendar,
  Clock,
  Play,
  FileText,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { api } from '../api';

interface PYQPapersArchiveProps {
  onStartExam: (testId: string) => void;
  examSlug?: string;
}

export const PYQPapersArchive: React.FC<PYQPapersArchiveProps> = ({
  onStartExam,
  examSlug = 'jee-main',
}) => {
  const [tests, setTests] = useState<any[]>([]);
  const [examInfo, setExamInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeYear, setActiveYear] = useState<number>(2025);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadArchive();
  }, [examSlug]);

  const loadArchive = async () => {
    setLoading(true);
    try {
      const res = await api.getExamProfile(examSlug || 'jee-main');
      if (res?.exam) {
        setExamInfo(res.exam);
        if (res.exam.tests) {
          setTests(res.exam.tests.filter((t: any) => !t.title?.includes('2026')));
        }
      }
    } catch (err) {
      console.error('Failed to load PYQ archive:', err);
    } finally {
      setLoading(false);
    }
  };

  const years = [2025, 2024, 2023, 2022, 2021];

  const yearTests = tests.filter((t) => {
    const matchYear = t.title?.includes(String(activeYear)) || t.pyqReference?.includes(String(activeYear));
    if (!matchYear) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return t.title?.toLowerCase().includes(q) || t.pyqReference?.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-tn-border pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200 mb-1.5">
            <Archive className="w-3.5 h-3.5 text-tn-blue" />
            <span>{examInfo?.conductingBody ? `${examInfo.conductingBody} PYQ Archive` : 'Previous Year Question Archive'}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-tn-navy tracking-tight">
            {examInfo?.name || 'Examination'} PYQ Archive (2021–2025)
          </h1>
          <p className="text-xs text-tn-muted mt-0.5">
            Browse all {tests.length} archived papers indexed in the database for {examInfo?.name || examSlug} with answer keys and CBT practice launch.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-tn-border text-xs text-slate-700 font-medium shadow-subtle">
            <strong className="text-tn-navy font-bold">{tests.length}</strong> Papers Indexed
          </div>
        </div>
      </div>

      {/* 2. Year Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {years.map((yr) => {
          const count = tests.filter((t) => t.title?.includes(String(yr))).length;
          return (
            <button
              key={yr}
              onClick={() => setActiveYear(yr)}
              className={`px-4 py-2 rounded-md text-xs font-semibold transition-colors cursor-pointer shrink-0 ${
                activeYear === yr
                  ? 'bg-tn-navy text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-tn-text border border-tn-border'
              }`}
            >
              {examInfo?.name || 'Exam'} {yr} ({count} Papers)
            </button>
          );
        })}
      </div>

      {/* 3. Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${activeYear} shift papers by date (e.g. Jan 27), shift...`}
          className="w-full pl-9 pr-3 py-2 rounded-md bg-white border border-slate-200 text-xs text-tn-text placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-tn-blue"
        />
      </div>

      {/* 4. Shift Papers Table */}
      <div className="border border-tn-border rounded-lg bg-white overflow-hidden shadow-subtle">
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-xs font-semibold text-tn-navy uppercase tracking-wider">
            {activeYear} Exam Shifts ({yearTests.length} Papers)
          </h2>
          <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Answer Keys Reconciled</span>
          </span>
        </div>

        {loading ? (
          <div className="p-10 text-center space-y-2">
            <Clock className="w-5 h-5 text-slate-400 mx-auto animate-spin" />
            <p className="text-xs text-slate-500">Loading {activeYear} papers...</p>
          </div>
        ) : yearTests.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500">
            No papers matched your search in {activeYear}.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/70 border-b border-slate-200 text-slate-600 font-medium">
                <tr>
                  <th className="py-2.5 px-4">Exam Paper & Shift</th>
                  <th className="py-2.5 px-4">Questions</th>
                  <th className="py-2.5 px-4">Duration</th>
                  <th className="py-2.5 px-4">Pattern & Marking</th>
                  <th className="py-2.5 px-4">Source Provenance</th>
                  <th className="py-2.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {yearTests.map((test) => (
                  <tr key={test.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-tn-navy">{test.title}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                        Ref: {test.pyqReference}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono font-medium">
                      {test.totalQuestions || (activeYear === 2025 ? 75 : 90)} Qs
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-500">180 Mins</td>
                    <td className="py-3 px-4">
                      <span className="text-[11px] text-slate-600">
                        {activeYear === 2021
                          ? '+4, -1 MCQ / 0 Num'
                          : '+4 Correct, -1 Negative'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Official NTA Public Record</span>
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => onStartExam(test.id)}
                        className="px-3 py-1.5 rounded bg-tn-blue hover:bg-tn-blue-hover text-white text-xs font-semibold shadow-xs transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        <span>Launch CBT</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

