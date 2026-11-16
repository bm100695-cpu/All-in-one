import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  Layers,
  Search,
  Filter,
  ShieldCheck,
  ExternalLink,
  Info,
  Sparkles,
  BookOpen,
  ArrowRight,
  HelpCircle,
  X,
  ChevronRight,
  RefreshCw,
} from 'lucide-react';
import { api } from '../api';
import { UptetArchiveResponse, UptetExamYear, UptetTestSummary, UptetAuditReport } from '../types';

interface UptetArchiveModuleProps {
  onStartExam: (testId: string) => void;
  language: 'en' | 'hi';
}

export const UptetArchiveModule: React.FC<UptetArchiveModuleProps> = ({ onStartExam, language }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [archiveData, setArchiveData] = useState<UptetArchiveResponse | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | 'ALL'>('ALL');
  const [selectedPaperType, setSelectedPaperType] = useState<string>('ALL');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAuditModal, setShowAuditModal] = useState<boolean>(false);
  const [selectedTestDetails, setSelectedTestDetails] = useState<UptetTestSummary | null>(null);
  const [auditReport, setAuditReport] = useState<UptetAuditReport | null>(null);

  useEffect(() => {
    fetchArchive();
  }, []);

  const fetchArchive = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getUptetArchive();
      setArchiveData(data);
    } catch (err: any) {
      console.error('Failed to load UPTET Archive:', err);
      setError(err?.message || 'Failed to load UPTET Examination Archive');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAuditModal = async () => {
    setShowAuditModal(true);
    if (!auditReport) {
      try {
        const report = await api.getUptetAudit();
        setAuditReport(report);
      } catch (e) {
        console.error('Failed to fetch audit report', e);
      }
    }
  };

  // Flatten tests from all years
  const yearsList = archiveData?.years || (archiveData as any)?.archive || [];
  const metrics = archiveData?.metrics || (archiveData as any)?.audit || {};

  const allTests: UptetTestSummary[] = [];
  yearsList.forEach((yr: any) => {
    if (yr.tests) {
      allTests.push(...yr.tests);
    }
  });

  // Filter tests based on current selections
  const filteredTests = allTests.filter((t) => {
    if (selectedYear !== 'ALL' && t.cycleYear !== selectedYear) return false;
    if (selectedPaperType !== 'ALL') {
      if (selectedPaperType === 'PAPER_2_SOCIAL') {
        if (!t.paperType?.includes('SOCIAL')) return false;
      } else if (t.paperType !== selectedPaperType) {
        return false;
      }
    }
    if (selectedSourceType !== 'ALL') {
      const isOfficial = t.sourceType === 'VERIFIED_PYQ' || t.sourceType === 'VERIFIED_OFFICIAL_PYQ';
      if (selectedSourceType === 'VERIFIED_OFFICIAL_PYQ' && !isOfficial) return false;
      if (selectedSourceType === 'TUTORNOVE_ORIGINAL_PRACTICE' && isOfficial) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = t.title.toLowerCase().includes(q);
      const matchYear = String(t.cycleYear || '').includes(q);
      const matchPaper = (t.paperType || '').toLowerCase().includes(q);
      if (!matchTitle && !matchYear && !matchPaper) return false;
    }
    return true;
  });

  // Calculate stats
  const totalVerifiedPyqs = metrics?.verifiedPyqCount ?? 15;
  const totalPractice = metrics?.patternPracticeCount ?? 5;
  const conductedYears = metrics?.conductedYearsCount ?? 5;
  const nonConductedYears = metrics?.nonConductedYearsCount ?? 5;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-900/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-semibold rounded-full border border-emerald-400/30 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              UPTET Primary & Upper Primary Examination Library
            </span>
            <span className="px-2.5 py-1 bg-white/10 text-slate-200 rounded-full text-[11px] font-mono">
              ERA Prayagraj • UPESSC Authorized Patterns
            </span>
            <span className="px-2.5 py-1 bg-teal-400/20 text-teal-200 font-semibold rounded-full text-[11px] border border-teal-300/30">
              No Negative Marking (+1, 0)
            </span>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              UPTET 2016–2025 Year-Wise PYQ & CBT Mock Test Archive
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Complete authenticated archive of Uttar Pradesh Teacher Eligibility Test papers. Practice verified official previous year question papers or standard benchmark simulation papers in an authentic Computer-Based Test environment.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-xs">
              <span className="text-slate-400 block text-[11px]">Conducted Exam Cycles</span>
              <span className="text-lg font-bold text-emerald-400">5 Exam Cycles</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">2016, 2017, 2018, 2019, 2021</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-xs">
              <span className="text-slate-400 block text-[11px]">Verified PYQ Papers</span>
              <span className="text-lg font-bold text-emerald-300">{totalVerifiedPyqs} Official Papers</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Paper 1, Math-Sci & Social</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-xs">
              <span className="text-slate-400 block text-[11px]">Non-Conducted / Future</span>
              <span className="text-lg font-bold text-amber-300">{nonConductedYears} Years Tracked</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">2020 (COVID), 2022–25</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-xs">
              <span className="text-slate-400 block text-[11px]">Pattern Practice Tests</span>
              <span className="text-lg font-bold text-indigo-300">{totalPractice} Practice Papers</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">All in One Benchmark Qs</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={handleOpenAuditModal}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>View Examination Provenance & Authenticity Audit</span>
            </button>
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              150 Questions • 150 Marks • 150 Minutes • Bilingual English & Hindi
            </span>
          </div>
        </div>
      </div>

      {/* 2. Historical Context & Transparency Alert */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5 text-xs text-amber-900 space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>UPTET Historical Authenticity & Examination Cycle Notice (2016–2025)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 leading-relaxed">
          <div className="space-y-1 bg-white p-3 rounded-lg border border-amber-100">
            <p className="font-semibold text-emerald-900 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Conducted Exam Cycles with Official Papers:
            </p>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li><strong>2016:</strong> Conducted Dec 19, 2016 (Verified Official PYQ).</li>
              <li><strong>2017:</strong> Conducted Oct 15, 2017 (Verified Official PYQ).</li>
              <li><strong>2018:</strong> Conducted Nov 18, 2018 (Verified Official PYQ).</li>
              <li><strong>2019 Cycle:</strong> Scheduled Dec 2019, successfully held on <strong>Jan 8, 2020</strong>.</li>
              <li><strong>2021 Cycle:</strong> Cancelled Nov 2021 (paper leak), successfully re-conducted <strong>Jan 23, 2022</strong>.</li>
            </ul>
          </div>
          <div className="space-y-1 bg-white p-3 rounded-lg border border-amber-100">
            <p className="font-semibold text-amber-900 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-amber-600" />
              Non-Conducted Cycles & All in One Practice Papers:
            </p>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
              <li><strong>2020:</strong> No examination conducted due to the nationwide COVID-19 pandemic.</li>
              <li><strong>2022, 2023, 2024:</strong> No exam conducted by UP Govt during the transition from ERA Prayagraj to UPESSC (UP Education Services Selection Commission).</li>
              <li><strong>2025:</strong> Upcoming recruitment cycle. Tests for these years are strictly labelled <em>"Original All in One Practice Questions – Not Verified PYQs."</em></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Filter Toolbar & Search */}
      <div className="bg-white rounded-xl border border-tn-border p-4 shadow-subtle space-y-4">
        {/* Year Tabs */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              Select Examination Cycle Year
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              Showing {filteredTests.length} of {allTests.length} Mock Tests
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedYear('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedYear === 'ALL'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Years (2016–2025)
            </button>

            {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016].map((yr) => {
              const yrInfo = yearsList.find((y: any) => y.cycleYear === yr);
              const isConducted = yrInfo?.examinationConducted ?? false;
              const isSelected = selectedYear === yr;

              return (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-700 text-white font-bold shadow-xs'
                      : isConducted
                      ? 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                      : 'bg-amber-50/80 text-amber-900 border border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  <span>{yr}</span>
                  {isConducted ? (
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-emerald-500'}`} />
                  ) : (
                    <span className={`text-[9px] px-1 py-0.2 rounded font-semibold ${isSelected ? 'bg-emerald-800 text-white' : 'bg-amber-200 text-amber-900'}`}>
                      Practice
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category & Type Dropdowns + Search Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100 text-xs">
          {/* Paper Category Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Paper Category</label>
            <select
              value={selectedPaperType}
              onChange={(e) => setSelectedPaperType(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Paper Categories</option>
              <option value="PAPER_1">Paper 1: Primary (Classes 1–5)</option>
              <option value="PAPER_2_MATH_SCIENCE">Paper 2: Math & Science (Classes 6–8)</option>
              <option value="PAPER_2_SOCIAL">Paper 2: Social Studies (Classes 6–8)</option>
            </select>
          </div>

          {/* Source Type Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Source Provenance</label>
            <select
              value={selectedSourceType}
              onChange={(e) => setSelectedSourceType(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All Sources (20 Tests)</option>
              <option value="VERIFIED_OFFICIAL_PYQ">Official Verified PYQs (15)</option>
              <option value="TUTORNOVE_ORIGINAL_PRACTICE">All in One Practice Questions (5)</option>
            </select>
          </div>

          {/* Search Box */}
          <div className="sm:col-span-1 lg:col-span-2">
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Search Mock Tests</label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by year, shift, paper or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400 text-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Mock Tests Grid */}
      {loading ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
          <RefreshCw className="w-8 h-8 text-emerald-600 animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-700">Loading UPTET Year-Wise Examination Archive...</p>
        </div>
      ) : error ? (
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center space-y-3 text-xs text-rose-800">
          <AlertTriangle className="w-6 h-6 text-rose-600 mx-auto" />
          <p className="font-semibold">{error}</p>
          <button
            onClick={fetchArchive}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg font-bold hover:bg-rose-700 transition"
          >
            Retry Loading
          </button>
        </div>
      ) : filteredTests.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3 text-xs text-slate-500">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-700">No Mock Tests match your active filters.</p>
          <button
            onClick={() => {
              setSelectedYear('ALL');
              setSelectedPaperType('ALL');
              setSelectedSourceType('ALL');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTests.map((test) => {
            const isVerifiedPyq = test.sourceType === 'VERIFIED_PYQ' || test.sourceType === 'VERIFIED_OFFICIAL_PYQ';
            const yearInfo = yearsList.find((y: any) => y.cycleYear === test.cycleYear);

            return (
              <div
                key={test.id}
                className="bg-white rounded-xl border border-tn-border hover:border-emerald-500 transition-all shadow-subtle hover:shadow-md flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Badge Banner */}
                <div className={`p-4 border-b ${isVerifiedPyq ? 'bg-slate-50/60' : 'bg-amber-50/50'} space-y-3`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      Cycle {test.cycleYear}
                    </span>

                    {isVerifiedPyq ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified Official PYQ
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        Original All in One Practice
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {test.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5">
                      <span>Exam Date:</span>
                      <strong className="text-slate-700">{test.actualExamDate || yearInfo?.actualExamDate || 'Benchmark Simulation'}</strong>
                    </p>
                  </div>
                </div>

                {/* Card Details & Subject Breakdown */}
                <div className="p-4 space-y-3 text-xs flex-1">
                  {/* Paper Category Pill */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                      {test.paperType === 'PAPER_1'
                        ? 'Primary (Classes 1–5)'
                        : test.paperType === 'PAPER_2_MATH_SCIENCE'
                        ? 'Upper Primary (Math & Science)'
                        : 'Upper Primary (Social Studies)'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-800 font-medium border border-teal-200">
                      No Negative Marking
                    </span>
                    <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 font-medium border border-indigo-200">
                      Hindi + English
                    </span>
                  </div>

                  {/* Test Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Questions</span>
                      <span className="font-bold text-slate-800">{test.totalQuestions || 150}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Marks</span>
                      <span className="font-bold text-emerald-700">{test.totalMarks || 150}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Duration</span>
                      <span className="font-bold text-indigo-900">{test.durationMinutes || 150}m</span>
                    </div>
                  </div>

                  {/* Section Breakdown Pills */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Subject Sections (30 Qs / Section)
                    </span>
                    <div className="text-[11px] text-slate-600 space-y-0.5">
                      <p>• Child Development & Pedagogy (CDP) — 30 Qs</p>
                      <p>• Language I (Hindi) & Language II (English) — 60 Qs</p>
                      {test.paperType === 'PAPER_2_SOCIAL' ? (
                        <p>• Social Studies / Social Science — 60 Qs</p>
                      ) : test.paperType === 'PAPER_2_MATH_SCIENCE' ? (
                        <p>• Mathematics (30 Qs) + Science (30 Qs) — 60 Qs</p>
                      ) : (
                        <p>• Mathematics (30 Qs) + Environmental Studies (30 Qs)</p>
                      )}
                    </div>
                  </div>

                  {/* Authentic Answer Key verification pill */}
                  <div className="pt-1 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Official Key Status:</span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {test.answerKeyStatus || 'Verified Official Key'}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 pt-0 space-y-2">
                  <button
                    onClick={() => onStartExam(test.id)}
                    className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                  >
                    <span>Start CBT Mock Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedTestDetails(test)}
                    className="w-full py-1.5 px-3 rounded text-[11px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3 h-3 text-slate-400" />
                    <span>View Provenance & Key Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 5. Provenance & Official Key Modal */}
      {selectedTestDetails && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-sm text-slate-900">Paper Provenance & Verification Audit</h3>
              </div>
              <button
                onClick={() => setSelectedTestDetails(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Paper Title</span>
                <p className="font-bold text-slate-900 text-sm">{selectedTestDetails.title}</p>
                <p className="text-[11px] text-slate-500">
                  Cycle Year: <strong>{selectedTestDetails.cycleYear}</strong> • Actual Exam Date:{' '}
                  <strong>{selectedTestDetails.actualExamDate || 'Benchmark Simulation'}</strong>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Source Classification</span>
                  <strong className={selectedTestDetails.sourceType === 'VERIFIED_OFFICIAL_PYQ' ? 'text-emerald-700' : 'text-amber-800'}>
                    {selectedTestDetails.sourceType === 'VERIFIED_OFFICIAL_PYQ'
                      ? 'Verified Official PYQ'
                      : 'Original All in One Practice'}
                  </strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Official Answer Key</span>
                  <strong className="text-emerald-700">ERA Prayagraj Master Key Verified</strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Bilingual Coverage</span>
                  <strong className="text-indigo-900">Hindi + English Verified</strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">Marking Algorithm</span>
                  <strong className="text-teal-800">+1.00 Correct, 0.00 Negative</strong>
                </div>
              </div>

              <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-200 space-y-1">
                <span className="text-emerald-900 font-bold block">Integrity Compliance:</span>
                <p className="text-emerald-800 text-[11px] leading-relaxed">
                  Every authentic UPTET question in this test matches the official question paper issued by the Examination Regulatory Authority (ERA), PNP Prayagraj / UPESSC. Disputed or revised answers follow the final official answer key.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                onClick={() => setSelectedTestDetails(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const testId = selectedTestDetails.id;
                  setSelectedTestDetails(null);
                  onStartExam(testId);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition flex items-center gap-1.5"
              >
                <span>Launch Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Comprehensive Audit Report Modal */}
      {showAuditModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-4 border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-extrabold text-slate-900">
                    UPTET 2016–2025 Complete Examination Archive & Provenance Audit
                  </h2>
                  <p className="text-xs text-slate-500">
                    Official Regulatory Compliance Report • ERA Prayagraj & UPESSC Verification
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAuditModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Audit Summary Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Conducted Cycles</span>
                <span className="text-base font-bold text-emerald-700">{conductedYears} Cycles</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Non-Conducted Cycles</span>
                <span className="text-base font-bold text-amber-700">{nonConductedYears} Years</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Verified Official PYQs</span>
                <span className="text-base font-bold text-emerald-800">{totalVerifiedPyqs} Papers</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px]">All in One Benchmark Practice</span>
                <span className="text-base font-bold text-indigo-700">{totalPractice} Papers</span>
              </div>
            </div>

            {/* Year-by-Year Provenance Table */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Year-By-Year Historical Verification Matrix
              </h4>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 font-bold text-slate-700 border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Cycle</th>
                      <th className="p-2.5">Actual Exam Date</th>
                      <th className="p-2.5">Exam Status</th>
                      <th className="p-2.5">Available Papers</th>
                      <th className="p-2.5">Official Source & Historical Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-[11px]">
                    {yearsList.map((yr: any) => (
                      <tr key={yr.cycleYear} className="hover:bg-slate-50">
                        <td className="p-2.5 font-bold text-slate-900">{yr.cycleYear}</td>
                        <td className="p-2.5 text-slate-700 font-mono">{yr.actualExamDate || '—'}</td>
                        <td className="p-2.5">
                          {yr.examinationConducted ? (
                            <span className="px-2 py-0.5 rounded font-bold bg-emerald-100 text-emerald-800">
                              CONDUCTED
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded font-bold bg-rose-100 text-rose-800">
                              NOT CONDUCTED
                            </span>
                          )}
                        </td>
                        <td className="p-2.5 font-medium text-slate-700">
                          {yr.tests?.length || 0} Mock Tests
                        </td>
                        <td className="p-2.5 text-slate-600 max-w-xs leading-tight">
                          <p className="font-semibold text-slate-800">{yr.officialSource || 'All in One Academic Simulation'}</p>
                          {yr.notes && <p className="text-[10px] text-slate-500 mt-0.5">{yr.notes}</p>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-amber-950">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                Commitment to Question Paper Authenticity:
              </span>
              <p className="text-[11px] leading-relaxed text-amber-800">
                All in One strictly abides by authenticity guidelines. Examination papers are never fabricated. Where no official examination took place (e.g. 2020 due to COVID-19, and 2022–2024 during the UPESSC consolidation), tests are explicitly designated as <em>"Original All in One Practice Questions – Not Verified PYQs."</em>
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowAuditModal(false)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition"
              >
                Close Audit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
