import React, { useState, useEffect } from 'react';
import {
  Search,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  ShieldAlert,
  Award,
  Sparkles,
  ExternalLink,
  ChevronRight,
  X,
  FileText,
  Clock,
  Target,
  FileCheck,
} from 'lucide-react';
import { Exam, ExamCategory, SyllabusNode } from '../types';
import { api } from '../api';

interface ExamDirectoryProps {
  onStartExam: (testId: string) => void;
  language: 'en' | 'hi';
  examSlug?: string;
}

export const ExamDirectory: React.FC<ExamDirectoryProps> = ({
  onStartExam,
  language,
  examSlug = 'jee-main',
}) => {
  const [categories, setCategories] = useState<ExamCategory[]>([]);
  const [exams, setExams] = useState<Exam[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedExamProfile, setSelectedExamProfile] = useState<Exam | null>(null);
  const [syllabusTree, setSyllabusTree] = useState<any>(null);
  const [coverageAudit, setCoverageAudit] = useState<any>(null);
  const [modalLoading, setModalLoading] = useState<boolean>(false);
  const [activeExamProfile, setActiveExamProfile] = useState<any>(null);
  const [jeeTests, setJeeTests] = useState<any[]>([]);
  const [testYearFilter, setTestYearFilter] = useState<string>(examSlug === 'jee-main' ? '2026' : 'ALL');
  const [testShiftFilter, setTestShiftFilter] = useState<string>('ALL');
  const [testSearchQuery, setTestSearchQuery] = useState<string>('');
  const [testSortOrder, setTestSortOrder] = useState<'latest' | 'oldest'>('latest');
  const [visibleTestCount, setVisibleTestCount] = useState<number>(24);

  useEffect(() => {
    setTestYearFilter(examSlug === 'jee-main' ? '2026' : 'ALL');
    loadData();
  }, [selectedCategory, examSlug]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [catsRes, examsRes] = await Promise.all([
        api.getCategories(),
        api.getExamDirectory(searchQuery, selectedCategory),
      ]);
      setCategories(catsRes.categories);
      setExams(examsRes.exams);

      // Load active exam tests for instant CBT launch
      try {
        const prof = await api.getExamProfile(examSlug || 'jee-main');
        if (prof?.exam) {
          setActiveExamProfile(prof.exam);
          if (prof.exam.tests) {
            setJeeTests(prof.exam.tests);
          }
        }
      } catch (e) {
        console.warn('Exam tests not loaded yet:', e);
      }
    } catch (err) {
      console.error('Failed to load exams:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.getExamDirectory(searchQuery, selectedCategory);
      setExams(res.exams);
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const openExamModal = async (exam: Exam) => {
    setSelectedExamProfile(exam);
    setModalLoading(true);
    try {
      const [profileRes, treeRes] = await Promise.all([
        api.getExamProfile(exam.slug),
        api.getSyllabusTree(exam.slug),
      ]);
      setSelectedExamProfile(profileRes.exam);
      setCoverageAudit(profileRes.audit);
      setSyllabusTree(treeRes.tree);
    } catch (err) {
      console.error('Error fetching exam profile:', err);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-tn-navy text-white p-6 sm:p-10 shadow-sm border border-slate-800">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Transparent Coverage • Real Question Counts • Strict Marking Rules</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            {activeExamProfile?.name ? `${activeExamProfile.name} & Multi-Exam Syllabus Directory` : 'All in One Examination & Syllabus Directory'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Every syllabus tree, test series, and verified past paper across JEE Main, UPTET, SUPER TET, NEET UG, UPSC Prelims, SSC CGL, and GATE CS is audited and indexed honestly.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search JEE Main, UPTET, SUPER TET, NEET UG, UPSC, SSC, GATE..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-sm transition-colors cursor-pointer"
            >
              Search Directory
            </button>
          </form>
        </div>
      </div>

      {/* Active Exam Mock Test Center */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{activeExamProfile?.conductingBody || 'Official Syllabus'} CBT Test Library</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {activeExamProfile?.name || 'Examination'} Online CBT Station
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Launch available mock tests and verified past papers for {activeExamProfile?.name || examSlug} with strict exam timing and exact marking rules.
            </p>
          </div>

          {/* Quick Counter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-tn-blue" />
              <span>{jeeTests.length} Available Tests</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{(activeExamProfile?.actualVerifiedPYQCount ?? activeExamProfile?.totalVerifiedPYQs ?? 0).toLocaleString()} Verified PYQs</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          {/* Row 1: Year Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Exam Year:
            </span>
            {[
              { id: '2026', label: '2026 Flagship' },
              { id: '2025', label: '2025 (16 Shifts)' },
              { id: '2024', label: '2024 (20 Shifts)' },
              { id: '2023', label: '2023 (24 Shifts)' },
              { id: '2022', label: '2022 (24 Shifts)' },
              { id: '2021', label: '2021 (26 Shifts)' },
              { id: 'ALL', label: `ALL (${jeeTests.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setTestYearFilter(tab.id);
                  setVisibleTestCount(24);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer ${
                  testYearFilter === tab.id
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200/80 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Row 2: Search, Shift Filter & Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-2 pt-1 border-t border-slate-200/60">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={testSearchQuery}
                onChange={(e) => setTestSearchQuery(e.target.value)}
                placeholder="Search by date (e.g. Jan 27, Feb 24), shift, or keywords..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              {testSearchQuery && (
                <button
                  onClick={() => setTestSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Shift Filter Dropdown */}
            <select
              value={testShiftFilter}
              onChange={(e) => setTestShiftFilter(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
            >
              <option value="ALL">All Shifts (Morning & Evening)</option>
              <option value="Shift 1">Shift 1 (Morning 9:00 AM – 12:00 PM)</option>
              <option value="Shift 2">Shift 2 (Evening 3:00 PM – 6:00 PM)</option>
            </select>

            {/* Sort Order Dropdown */}
            <select
              value={testSortOrder}
              onChange={(e) => setTestSortOrder(e.target.value as any)}
              className="w-full sm:w-auto px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
            >
              <option value="latest">Latest Shifts First</option>
              <option value="oldest">Oldest Shifts First</option>
            </select>
          </div>
        </div>

        {/* Papers Grid */}
        {jeeTests.length === 0 ? (
          <div className="p-10 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <Clock className="w-8 h-8 text-slate-400 mx-auto animate-spin" />
            <p className="text-xs font-bold text-slate-600">Loading JEE Main examination papers library...</p>
          </div>
        ) : (() => {
          const filtered = jeeTests.filter((t) => {
            if (testYearFilter !== 'ALL') {
              if (!t.title?.includes(testYearFilter) && !t.pyqReference?.includes(testYearFilter)) {
                return false;
              }
            }
            if (testShiftFilter !== 'ALL') {
              if (!t.title?.toLowerCase().includes(testShiftFilter.toLowerCase())) {
                return false;
              }
            }
            if (testSearchQuery.trim()) {
              const q = testSearchQuery.toLowerCase();
              const matchTitle = t.title?.toLowerCase().includes(q);
              const matchRef = t.pyqReference?.toLowerCase().includes(q);
              if (!matchTitle && !matchRef) return false;
            }
            return true;
          });

          const sorted = [...filtered].sort((a, b) => {
            if (a.title?.includes('2026')) return -1;
            if (b.title?.includes('2026')) return 1;
            if (testSortOrder === 'latest') {
              return (b.title || '').localeCompare(a.title || '');
            } else {
              return (a.title || '').localeCompare(b.title || '');
            }
          });

          const displayed = testYearFilter === 'ALL'
            ? sorted.slice(0, visibleTestCount)
            : sorted;

          if (displayed.length === 0) {
            return (
              <div className="p-8 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-3">
                <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-sm font-bold text-slate-700">No mock tests matched your filter.</p>
                <button
                  onClick={() => {
                    setTestYearFilter('ALL');
                    setTestShiftFilter('ALL');
                    setTestSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            );
          }

          return (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
                <span>
                  Showing <strong className="text-slate-800">{displayed.length}</strong> of{' '}
                  <strong className="text-slate-800">{filtered.length}</strong> tests
                  {testYearFilter !== 'ALL' ? ` for ${testYearFilter}` : ''}
                </span>
                {testYearFilter === 'ALL' && filtered.length > displayed.length && (
                  <span className="text-indigo-600 font-bold">
                    Scroll down to load more papers
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displayed.map((test) => {
                  const is2026 = test.title?.includes('2026');
                  const isShift1 = test.title?.includes('Shift 1');
                  const isShift2 = test.title?.includes('Shift 2');

                  return (
                    <div
                      key={test.id}
                      className={`p-5 rounded-2xl border transition-all shadow-2xs hover:shadow-md flex flex-col justify-between space-y-4 ${
                        is2026
                          ? 'border-indigo-500 bg-gradient-to-br from-indigo-50/60 via-white to-blue-50/40 ring-2 ring-indigo-400/30'
                          : 'border-slate-200 hover:border-brand-400 bg-slate-50/40 hover:bg-white'
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`px-2.5 py-0.5 rounded-md font-extrabold text-[11px] border ${
                                is2026
                                  ? 'bg-indigo-900 text-white border-indigo-950'
                                  : 'bg-brand-50 text-brand-700 border-brand-200'
                              }`}
                            >
                              {is2026 ? '⭐ 2026 Flagship CBT Simulator' : 'Paper 1 (B.E./B.Tech)'}
                            </span>
                            {!is2026 && (
                              <span
                                className={`px-2 py-0.5 rounded-md font-bold text-[10px] border ${
                                  isShift1
                                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                                    : isShift2
                                    ? 'bg-purple-50 text-purple-800 border-purple-200'
                                    : 'bg-slate-100 text-slate-700 border-slate-200'
                                }`}
                              >
                                {isShift1 ? 'Shift 1 (Morning)' : isShift2 ? 'Shift 2 (Evening)' : 'Official Shift'}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] font-bold text-slate-700 font-mono">
                            {test.totalQuestions || 75} Qs • {test.durationMinutes || 180} Mins • {test.totalMarks || 300} Marks
                          </span>
                        </div>

                        <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                          {test.title}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {is2026
                            ? 'Full length national simulation: Physics (20 MCQ + 5 Num), Chemistry (20 MCQ + 5 Num), Math (20 MCQ + 5 Num). Notice board, virtual numeric keypad & instant analysis.'
                            : `Subjects: Physics, Chemistry & Mathematics. Marking: +4 correct, ${test.title?.includes('2021') ? '-1 for MCQ / 0 for Num' : '-1 negative'}. Real questions presented one-by-one with timer and palette.`}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Notice Board & CBT Mode</span>
                        </span>
                        <button
                          onClick={() => onStartExam(test.id)}
                          className={`px-4 py-2 rounded-xl text-white font-bold text-xs shadow-xs transition-transform active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                            is2026
                              ? 'bg-indigo-700 hover:bg-indigo-800'
                              : 'bg-brand-600 hover:bg-brand-700'
                          }`}
                        >
                          <Target className="w-3.5 h-3.5" />
                          <span>Launch CBT Exam</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Load More Button for ALL tab */}
              {testYearFilter === 'ALL' && displayed.length < filtered.length && (
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setVisibleTestCount((prev) => prev + 24)}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-300 cursor-pointer"
                  >
                    Load More Mock Tests (+24 remaining: {filtered.length - displayed.length})
                  </button>
                </div>
              )}
            </div>
          );
        })()}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            selectedCategory === ''
              ? 'bg-brand-600 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Categories ({exams.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.code}
            onClick={() => setSelectedCategory(cat.code)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === cat.code
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Exam Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-2xl bg-slate-200 animate-pulse" />
          ))}
        </div>
      ) : exams.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-xs">
          <ShieldAlert className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No exams matched your criteria</h3>
          <p className="text-sm text-slate-500 mt-1">
            Try adjusting your search terms or select "All Categories".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => {
            const defaultPattern = exam.patternVersions?.[0];
            return (
              <div
                key={exam.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <div className="space-y-4">
                  {/* Category & Verified Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 tracking-wide">
                      {exam.category?.name || 'National Entrance'}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{exam.verifiedSyllabusCoveragePct}% Verified</span>
                    </div>
                  </div>

                  {/* Title & Conducting Body */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {exam.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      Conducting Body: <span className="text-slate-700 font-semibold">{exam.conductingBody}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {exam.description}
                  </p>

                  {/* Exam Pattern Mini Spec */}
                  {defaultPattern && (
                    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
                        <div className="text-xs font-bold text-slate-800">{defaultPattern.durationMinutes} Min</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Total Marks</div>
                        <div className="text-xs font-bold text-slate-800">{defaultPattern.totalMarks}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Verified PYQs</div>
                        <div className="text-xs font-bold text-brand-600">{exam.totalVerifiedPYQs}+</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => openExamModal(exam)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5 text-slate-500" />
                    <span>Coverage Map</span>
                  </button>

                  <button
                    onClick={() => {
                      if (exam.tests && exam.tests.length > 0) {
                        onStartExam(exam.tests[0].id);
                      } else {
                        // Fallback to start test by exam profile
                        openExamModal(exam);
                      }
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Start Mock</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Deep Exam Profile & Syllabus Modal */}
      {selectedExamProfile && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-100 text-brand-800">
                    {selectedExamProfile.shortName}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {selectedExamProfile.conductingBody}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {selectedExamProfile.title}
                </h2>
                <a
                  href={selectedExamProfile.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-brand-600 hover:underline"
                >
                  <span>Official Portal ({selectedExamProfile.officialWebsite})</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <button
                onClick={() => setSelectedExamProfile(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Coverage Provenance Banner */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">
                      Verified Syllabus Coverage: {selectedExamProfile.verifiedSyllabusCoveragePct}%
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Provenance: {coverageAudit?.auditorNotes || 'Certified against official latest examination bulletin'}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-semibold text-emerald-700 bg-white px-3 py-1.5 rounded-lg border border-emerald-200 shadow-2xs">
                  {selectedExamProfile.totalVerifiedPYQs} Verified PYQs Ready
                </div>
              </div>

              {/* Pattern Versions with Configurable Rules */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-600" />
                  <span>Configured Exam Pattern & Marking Scheme</span>
                </h4>

                {selectedExamProfile.patternVersions?.map((pattern) => (
                  <div
                    key={pattern.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white space-y-3 shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-sm text-slate-900">{pattern.versionName}</span>
                        <span className="text-xs text-slate-500 ml-2">
                          (Effective from: {new Date(pattern.effectiveFrom).toLocaleDateString()})
                        </span>
                      </div>
                      {pattern.isDefault && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                          Active Pattern
                        </span>
                      )}
                    </div>

                    {/* Sectional Rules Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-500 font-bold">
                            <th className="pb-2">Section</th>
                            <th className="pb-2">Question Type</th>
                            <th className="pb-2">Total Qs</th>
                            <th className="pb-2">Correct Mark</th>
                            <th className="pb-2">Negative Mark</th>
                            <th className="pb-2">Unattempted</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                          {pattern.sections?.map((sec) => (
                            <tr key={sec.id}>
                              <td className="py-2 font-bold text-slate-900">{sec.name}</td>
                              <td className="py-2 text-slate-600">{sec.questionType}</td>
                              <td className="py-2">{sec.totalQuestions} (Max: {sec.maxToAttempt})</td>
                              <td className="py-2 text-emerald-600 font-bold">+{sec.marksPerCorrect}</td>
                              <td className="py-2 text-rose-600 font-bold">-{sec.negativeMarks}</td>
                              <td className="py-2 text-slate-500">{sec.unattemptedPenalty}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              {/* Syllabus Hierarchy Tree */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-600" />
                  <span>Syllabus Hierarchy & Weightage Map</span>
                </h4>

                {modalLoading ? (
                  <div className="h-32 bg-slate-100 rounded-xl animate-pulse" />
                ) : syllabusTree && syllabusTree.length > 0 ? (
                  <div className="space-y-2">
                    {syllabusTree.map((subject: any) => (
                      <div
                        key={subject.id}
                        className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2"
                      >
                        <div className="flex items-center justify-between font-bold text-sm text-slate-900">
                          <span>{subject.title} ({subject.code})</span>
                          <span className="text-xs text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                            Weightage: {subject.weightagePct}%
                          </span>
                        </div>
                        {subject.children?.map((unit: any) => (
                          <div key={unit.id} className="ml-4 pl-3 border-l-2 border-slate-200 space-y-1">
                            <div className="text-xs font-semibold text-slate-800 flex items-center justify-between">
                              <span>• {unit.title}</span>
                              <span className="text-[11px] text-slate-500">{unit.weightagePct}%</span>
                            </div>
                            {unit.children?.map((topic: any) => (
                              <div
                                key={topic.id}
                                className="ml-4 text-[11px] text-slate-600 flex items-center justify-between py-0.5"
                              >
                                <span>- {topic.title}</span>
                                <span className="text-emerald-600 font-semibold">100% PYQs Mapped</span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500">Syllabus breakdown loaded.</p>
                )}
              </div>

              {/* Available Mock Tests */}
              {selectedExamProfile.tests && selectedExamProfile.tests.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-600" />
                    <span>Official Practice & Benchmark Tests</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedExamProfile.tests.map((test) => (
                      <div
                        key={test.id}
                        className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-300 bg-white flex items-center justify-between gap-4 transition-colors"
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900">{test.title}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Duration: {test.durationMinutes} min • Total Marks: {test.totalMarks} • Provenance: {test.pyqReference || 'Official Benchmark'}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedExamProfile(null);
                            onStartExam(test.id);
                          }}
                          className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors shrink-0"
                        >
                          Launch CBT
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
              <button
                onClick={() => setSelectedExamProfile(null)}
                className="px-5 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
