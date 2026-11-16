import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  Search,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Bookmark,
  BookmarkCheck,
  Play,
  Award,
  Eye,
  EyeOff,
  History,
  Layers,
} from 'lucide-react';
import { api } from '../api';
import { SuperTetExam, SuperTetQuestion, User } from '../types';

interface SuperTetArchiveModuleProps {
  currentUser: User | null;
  onStartExam: (testId: string) => void;
  onOpenAttemptReview?: (attemptId: string) => void;
  onNavigateToPractice?: () => void;
  language: 'en' | 'hi';
}

const ALL_YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

const SUBJECT_CATEGORIES = [
  'ALL',
  'Hindi',
  'Sanskrit',
  'English',
  'Mathematics',
  'Science',
  'Environmental Studies & Social Science',
  'Child Psychology',
  'Teaching Methodology',
  'Life Skills / Management & Aptitude',
  'General Knowledge & Current Affairs',
  'Logical Reasoning',
  'Information Technology',
  'Uttar Pradesh General Knowledge',
];

export const SuperTetArchiveModule: React.FC<SuperTetArchiveModuleProps> = ({
  currentUser,
  onStartExam,
  onOpenAttemptReview,
  onNavigateToPractice,
  language,
}) => {
  const [activeView, setActiveView] = useState<'ARCHIVE' | 'SUBJECT_PRACTICE' | 'PRACTICE_MOCKS' | 'RESULTS' | 'BOOKMARKS'>('ARCHIVE');
  const [loading, setLoading] = useState<boolean>(true);
  const [yearsList, setYearsList] = useState<SuperTetExam[]>([]);
  const [practiceTests, setPracticeTests] = useState<SuperTetExam[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2019);

  // Questions & Filters State
  const [questions, setQuestions] = useState<SuperTetQuestion[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedVerification, setSelectedVerification] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayLang, setDisplayLang] = useState<'both' | 'hi' | 'en'>('both');

  // Interactive Question Answer State
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Bookmarks & Past Attempts
  const [bookmarks, setBookmarks] = useState<Array<{ id: string; questionId: string; question: SuperTetQuestion }>>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [pastAttempts, setPastAttempts] = useState<any[]>([]);

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (activeView === 'ARCHIVE' || activeView === 'SUBJECT_PRACTICE') {
      loadQuestionsForYear(selectedYear, false);
    }
  }, [selectedYear, selectedSubject, selectedVerification, activeView]);

  const loadInitialData = async () => {
    setLoading(true);
    try {
      const [yearsRes, practiceRes] = await Promise.all([
        api.getSuperTetYears(),
        api.getSuperTetPracticeTests(),
      ]);
      const loadedYears = yearsRes.years || [];
      setYearsList(loadedYears);
      setPracticeTests(practiceRes.practiceTests || []);

      const validYears = loadedYears.filter(
        (y) => y.verificationStatus !== 'NO_CONFIRMED_EXAM_RECORD' && (y.totalQuestions || 0) > 0
      );
      if (validYears.length > 0 && !validYears.some((y) => y.examYear === selectedYear)) {
        setSelectedYear(validYears[0].examYear);
      }

      if (currentUser) {
        const [bmRes, attRes] = await Promise.all([
          api.getSuperTetBookmarks().catch(() => ({ bookmarks: [] })),
          api.getMyAttempts().catch(() => ({ attempts: [] })),
        ]);
        const bms = bmRes.bookmarks || [];
        setBookmarks(bms);
        setBookmarkedIds(new Set(bms.map((b) => b.questionId)));

        const stetAttempts = (attRes.attempts || []).filter((a: any) =>
          (a.test?.title || '').toUpperCase().includes('SUPER TET')
        );
        setPastAttempts(stetAttempts);
      }
    } catch (err) {
      console.error('Error loading SUPER TET data:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadQuestionsForYear = async (year: number, isPractice = false) => {
    const yrMeta = yearsList.find((y) => y.examYear === year);
    if (!isPractice && yrMeta && yrMeta.verificationStatus === 'NO_CONFIRMED_EXAM_RECORD') {
      setQuestions([]);
      return;
    }

    setQuestionsLoading(true);
    try {
      const res = await api.getSuperTetQuestions(year, {
        subject: selectedSubject,
        verificationStatus: selectedVerification,
        search: searchQuery,
        isPractice,
        limit: 'all',
      });
      setQuestions(res.questions || []);
    } catch {
      setQuestions([]);
    } finally {
      setQuestionsLoading(false);
    }
  };

  const handleToggleBookmark = async (questionId: string) => {
    if (!currentUser) {
      alert('Please sign in to bookmark questions.');
      return;
    }
    try {
      if (bookmarkedIds.has(questionId)) {
        await api.removeSuperTetBookmark(questionId);
        const next = new Set(bookmarkedIds);
        next.delete(questionId);
        setBookmarkedIds(next);
        setBookmarks((prev) => prev.filter((b) => b.questionId !== questionId));
      } else {
        await api.addSuperTetBookmark(questionId);
        const next = new Set(bookmarkedIds);
        next.add(questionId);
        setBookmarkedIds(next);
        const bmRes = await api.getSuperTetBookmarks();
        setBookmarks(bmRes.bookmarks || []);
      }
    } catch (err) {
      console.error('Bookmark error:', err);
    }
  };

  const selectedExam = yearsList.find((y) => y.examYear === selectedYear);

  const availableExamYears = ALL_YEARS.filter((yr) => {
    const yrMeta = yearsList.find((y) => y.examYear === yr);
    return yrMeta && yrMeta.verificationStatus !== 'NO_CONFIRMED_EXAM_RECORD' && (yrMeta.totalQuestions || 0) > 0;
  });

  const getStatusBadge = (status: string, isPractice = false) => {
    if (isPractice || status === 'PRACTICE_QUESTIONS_ONLY' || status === 'TUTORNOVE_PRACTICE') {
      return (
        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-200">
          Practice Set
        </span>
      );
    }
    switch (status) {
      case 'VERIFIED_OFFICIAL_PYQ':
      case 'VERIFIED_OFFICIAL':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1 w-fit">
            <CheckCircle2 className="w-3 h-3" /> Official Paper
          </span>
        );
      case 'VERIFIED_PAPER_KEY_PENDING':
      case 'ANSWER_KEY_PENDING':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            Key Pending
          </span>
        );
      case 'AUTHENTIC_SOURCE_VERIFICATION_PENDING':
      case 'VERIFICATION_PENDING':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            Under Review
          </span>
        );
      default:
        return null;
    }
  };

  const filteredQuestions = questions.filter((q) => {
    if (searchQuery.trim()) {
      const s = searchQuery.toLowerCase();
      return (
        q.questionHindi.toLowerCase().includes(s) ||
        q.questionEnglish.toLowerCase().includes(s) ||
        q.topic.toLowerCase().includes(s) ||
        q.subject.toLowerCase().includes(s)
      );
    }
    return true;
  });

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-3">
        <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-teal-600 animate-spin mx-auto" />
        <p className="text-xs font-medium text-slate-500">Loading SUPER TET question bank...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* 1. Clean Light-Mode Header Card */}
      <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-xs">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 bg-teal-50 text-teal-800 font-semibold rounded-md border border-teal-200 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
              UP Assistant Teacher Recruitment (ATRE)
            </span>
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-medium rounded-md border border-slate-200 text-[11px]">
              150 Marks • 150 Minutes • No Negative Marking
            </span>
          </div>

          <div className="max-w-3xl space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
              SUPER TET Question Bank & Mock Tests
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Previous year papers from the <strong className="text-slate-900 font-semibold">2018 (68,500 posts)</strong> and <strong className="text-slate-900 font-semibold">2019 (69,000 posts)</strong> recruitments, along with full-length practice sets based on the UPESSC syllabus.
            </p>
          </div>

          {/* Clean Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-slate-500 block text-[11px] font-medium">Previous Papers</span>
              <span className="text-base font-bold text-slate-950 mt-0.5 block">2018 & 2019</span>
              <span className="text-[10px] text-slate-500 block">Official ATRE Shifts</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-slate-500 block text-[11px] font-medium">Question Bank</span>
              <span className="text-base font-bold text-teal-700 mt-0.5 block">
                {yearsList.reduce((acc, y) => acc + (y.actualImportedQuestions || y.totalQuestions || 0), 0)} Questions
              </span>
              <span className="text-[10px] text-slate-500 block">With Official Answer Keys</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-slate-500 block text-[11px] font-medium">Practice Mocks</span>
              <span className="text-base font-bold text-slate-950 mt-0.5 block">{practiceTests.length} Test Series</span>
              <span className="text-[10px] text-slate-500 block">Latest Exam Pattern</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-slate-500 block text-[11px] font-medium">Exam Format</span>
              <span className="text-base font-bold text-slate-950 mt-0.5 block">150 MCQs</span>
              <span className="text-[10px] text-teal-700 font-medium block">+1 Mark • 0 Negative</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Portal View Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200">
        {[
          { id: 'ARCHIVE', label: 'Previous Year Papers', icon: Calendar },
          { id: 'SUBJECT_PRACTICE', label: 'Subject-Wise Questions', icon: Layers },
          { id: 'PRACTICE_MOCKS', label: `Mock Tests (${practiceTests.length})`, icon: Sparkles },
          { id: 'RESULTS', label: `My Attempts (${pastAttempts.length})`, icon: Award },
          { id: 'BOOKMARKS', label: `Saved Questions (${bookmarks.length})`, icon: Bookmark },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id as any)}
              className={`px-3.5 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                active
                  ? 'border-teal-700 text-teal-800 bg-teal-50/50 rounded-t-lg'
                  : 'border-transparent text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ==================== VIEW A & B: YEAR-WISE ARCHIVE & SUBJECT EXPLORER ==================== */}
      {(activeView === 'ARCHIVE' || activeView === 'SUBJECT_PRACTICE') && (
        <div className="space-y-6">
          {/* Year Selector */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-teal-700" />
                Select Examination Year
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Available Official Question Papers
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {availableExamYears.map((yr) => {
                const yrMeta = yearsList.find((y) => y.examYear === yr);
                const isSelected = selectedYear === yr;

                return (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`min-w-[130px] px-4 py-2.5 rounded-lg text-xs font-bold border transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                      isSelected
                        ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-sm">{yr}</span>
                    <span className={`text-[10px] font-medium ${isSelected ? 'text-teal-100' : 'text-slate-500'}`}>
                      {yrMeta?.totalQuestions || 0} Questions
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Official Examination Notice & Metadata Panel */}
          {selectedExam && (
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-base sm:text-lg font-bold text-slate-950">
                      {selectedExam.examName}
                    </h2>
                    {getStatusBadge(selectedExam.verificationStatus, selectedExam.isPracticePaper)}
                  </div>
                  <p className="text-xs text-slate-600">
                    Conducting Body: <strong className="text-slate-800">{selectedExam.conductingAuthority}</strong>
                  </p>
                </div>

                {selectedExam.linkedTestId && (
                  <button
                    onClick={() => onStartExam(selectedExam.linkedTestId!)}
                    className="px-4 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs flex items-center gap-2 cursor-pointer shrink-0 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Attempt Full Paper ({selectedExam.totalQuestions} Qs)</span>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {/* Exam Notice Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Notification</span>
                    <span className="font-semibold text-slate-900">{selectedExam.notificationDate || 'N/A'}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Exam Date</span>
                    <span className="font-semibold text-slate-950">{selectedExam.examDate}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Duration</span>
                    <span className="font-semibold text-slate-900">{selectedExam.duration} Mins</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Paper Pattern</span>
                    <span className="font-semibold text-slate-900">{selectedExam.expectedQuestions} Qs / {selectedExam.totalMarks} Marks</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-teal-50/60 border border-teal-200">
                    <span className="text-[10px] text-teal-700 block">Available Questions</span>
                    <span className="font-semibold text-teal-900">{selectedExam.totalQuestions} Questions</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Negative Marking</span>
                    <span className="font-semibold text-emerald-700">No Penalty (0)</span>
                  </div>
                </div>

                {/* Format & Provenance Notes */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                      Paper Reference Details:
                    </span>
                    {selectedExam.notificationSource && selectedExam.notificationSource.startsWith('http') && (
                      <a
                        href={selectedExam.notificationSource}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-semibold text-teal-700 hover:underline flex items-center gap-1"
                      >
                        Official Reference <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-slate-600">
                    <strong>Source:</strong> {selectedExam.paperSource || 'Official examination paper'} •{' '}
                    <strong>Answer Key:</strong> {selectedExam.answerKeySource || 'Official PNP answer key'}
                  </p>
                  {selectedExam.markingScheme?.note && (
                    <p className="text-amber-800 font-medium bg-amber-50 p-2 rounded border border-amber-200 mt-1">
                      {selectedExam.markingScheme.note}
                    </p>
                  )}
                  {selectedExam.notes && <p className="text-slate-600 text-[11px]">{selectedExam.notes}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Questions Filter Toolbar & List */}
          {selectedExam && selectedExam.verificationStatus !== 'NO_CONFIRMED_EXAM_RECORD' && (
            <div className="space-y-4">
              {/* Filter Bar */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                  {/* Search */}
                  <div className="relative flex-1 min-w-[200px] max-w-xs">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search question or topic..."
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* Subject Filter */}
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
                  >
                    {SUBJECT_CATEGORIES.map((s) => (
                      <option key={s} value={s}>
                        {s === 'ALL' ? 'All Subjects' : s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Language Display Toggle */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-[11px] font-semibold shrink-0">
                  {[
                    { id: 'both', label: 'Bilingual' },
                    { id: 'hi', label: 'हिन्दी' },
                    { id: 'en', label: 'English' },
                  ].map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setDisplayLang(l.id as any)}
                      className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                        displayLang === l.id ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Count Info */}
              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span>
                  Showing <strong className="text-slate-800">{filteredQuestions.length}</strong> questions from{' '}
                  <strong>SUPER TET {selectedYear}</strong>
                </span>
                <span className="text-[11px]">Select an option to check your answer</span>
              </div>

              {questionsLoading ? (
                <div className="p-10 text-center text-xs text-slate-500 bg-white rounded-xl border border-slate-200">
                  Loading {selectedYear} questions...
                </div>
              ) : filteredQuestions.length === 0 ? (
                <div className="p-10 text-center text-xs text-slate-500 bg-white rounded-xl border border-slate-200">
                  No questions match your current filter for {selectedYear}.
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((q) => {
                    const chosen = selectedOptions[q.id];
                    const isRevealed = revealedAnswers[q.id];
                    const isBookmarked = bookmarkedIds.has(q.id);

                    return (
                      <div key={q.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
                        {/* Question Meta Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded bg-slate-900 text-white font-bold text-xs">
                              Q.{q.questionNumber}
                            </span>
                            <span className="px-2.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 font-semibold text-[11px]">
                              {q.subject}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium">{q.topic}</span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            {getStatusBadge(q.verificationStatus, !q.isPYQ)}
                            {q.answerKeyStatus === 'REVISED_KEY' && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                                Revised Key
                              </span>
                            )}
                            <button
                              onClick={() => handleToggleBookmark(q.id)}
                              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                isBookmarked
                                  ? 'bg-amber-50 border-amber-300 text-amber-600'
                                  : 'bg-white border-slate-200 text-slate-400 hover:text-amber-600'
                              }`}
                              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                            >
                              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Bilingual Question Stem */}
                        <div className="space-y-1.5">
                          {(displayLang === 'both' || displayLang === 'hi') && (
                            <p className="text-sm font-bold text-slate-950 leading-relaxed">{q.questionHindi}</p>
                          )}
                          {(displayLang === 'both' || displayLang === 'en') && (
                            <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">{q.questionEnglish}</p>
                          )}
                        </div>

                        {/* 4 Options Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                          {q.options.map((opt) => {
                            const isSelected = chosen === opt.id;
                            const isCorrect = q.correctAnswer === opt.id;
                            let btnStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';

                            if (isRevealed) {
                              if (isCorrect) {
                                btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                              } else if (isSelected && !isCorrect) {
                                btnStyle = 'border-red-400 bg-red-50 text-red-900';
                              }
                            } else if (isSelected) {
                              btnStyle = 'border-teal-600 bg-teal-50 text-teal-950 font-semibold';
                            }

                            return (
                              <button
                                key={opt.id}
                                onClick={() => {
                                  setSelectedOptions((prev) => ({ ...prev, [q.id]: opt.id }));
                                  setRevealedAnswers((prev) => ({ ...prev, [q.id]: true }));
                                }}
                                className={`p-3 rounded-lg border text-left flex items-start gap-2.5 transition-all cursor-pointer ${btnStyle}`}
                              >
                                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                  {opt.id}
                                </span>
                                <div className="space-y-0.5">
                                  {(displayLang === 'both' || displayLang === 'hi') && (
                                    <span className="block font-medium">{opt.textHi}</span>
                                  )}
                                  {(displayLang === 'both' || displayLang === 'en') && opt.textEn !== opt.textHi && (
                                    <span className="block text-[11px] opacity-80">{opt.textEn}</span>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Action Row & Explanation Box */}
                        <div className="flex items-center justify-between pt-1">
                          <button
                            onClick={() => setRevealedAnswers((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
                            className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1.5 cursor-pointer"
                          >
                            {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            <span>{isRevealed ? 'Hide Solution' : 'View Answer & Solution'}</span>
                          </button>

                          <span className="text-[10px] text-slate-400">
                            Source: {q.answerKeySource || 'Official Key'}
                          </span>
                        </div>

                        {isRevealed && (
                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-teal-900">
                                Correct Answer: Option ({q.correctAnswer})
                              </span>
                            </div>
                            {(displayLang === 'both' || displayLang === 'hi') && (
                              <p className="text-slate-800 leading-relaxed">
                                <strong>व्याख्या:</strong> {q.explanationHindi}
                              </p>
                            )}
                            {(displayLang === 'both' || displayLang === 'en') && (
                              <p className="text-slate-700 leading-relaxed">
                                <strong>Explanation:</strong> {q.explanationEnglish}
                              </p>
                            )}
                            {q.revisionHistory && q.revisionHistory.length > 0 && (
                              <div className="mt-2 p-2.5 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
                                <strong className="flex items-center gap-1">
                                  <History className="w-3 h-3" /> Key Revision Note:
                                </strong>
                                {q.revisionHistory.map((rev, idx) => (
                                  <p key={idx} className="mt-0.5">
                                    [{rev.date}] Answer {rev.updatedAnswer}: {rev.reason}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ==================== VIEW C: PRACTICE MOCKS ==================== */}
      {activeView === 'PRACTICE_MOCKS' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-teal-950 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Full-Length SUPER TET Practice Mocks</p>
              <p className="text-teal-800 mt-0.5">
                Designed according to the latest UPESSC 150-question pattern covering all 14 subjects, including Child Psychology, Teaching Skills, and UP General Knowledge.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practiceTests.map((pt) => (
              <div key={pt.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-200">
                      Full-Length Mock
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 mt-2">{pt.examName}</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.notes}</p>
                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div className="p-2 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Questions</span>
                    <span className="font-bold text-slate-900">{pt.totalQuestions} MCQs</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Duration</span>
                    <span className="font-bold text-slate-900">{pt.duration} Mins</span>
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Negative</span>
                    <span className="font-bold text-emerald-700">0 Marks</span>
                  </div>
                </div>
                {pt.linkedTestId && (
                  <button
                    onClick={() => onStartExam(pt.linkedTestId!)}
                    className="w-full py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Start Mock Test</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================== VIEW D: PREVIOUS TEST RESULTS ==================== */}
      {activeView === 'RESULTS' && (
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-950">My Past Attempts</h3>
            {onNavigateToPractice && (
              <button
                onClick={onNavigateToPractice}
                className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
              >
                Practice Incorrect Questions →
              </button>
            )}
          </div>

          {pastAttempts.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 border border-dashed border-slate-200 rounded-lg">
              You haven't attempted any SUPER TET tests yet. Start with the 2019 paper or a mock test to track your score.
            </div>
          ) : (
            <div className="space-y-2.5">
              {pastAttempts.map((att) => (
                <div key={att.id} className="p-3.5 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900">{att.test?.title || 'SUPER TET Attempt'}</p>
                    <p className="text-[11px] text-slate-500">
                      Status: {att.status} • Score: {att.totalScore}/{att.totalMarks} • Accuracy: {Math.round(att.accuracyPct || 0)}%
                    </p>
                  </div>
                  {onOpenAttemptReview && att.status === 'COMPLETED' && (
                    <button
                      onClick={() => onOpenAttemptReview(att.id)}
                      className="px-3 py-1.5 rounded bg-teal-50 text-teal-800 border border-teal-200 font-semibold hover:bg-teal-100 cursor-pointer"
                    >
                      Review Solutions
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ==================== VIEW E: BOOKMARKED QUESTIONS ==================== */}
      {activeView === 'BOOKMARKS' && (
        <div className="space-y-4">
          {bookmarks.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-10 text-center text-xs text-slate-500">
              No saved questions yet. Click the bookmark icon on any question to save it here for revision.
            </div>
          ) : (
            bookmarks.map((bm) => (
              <div key={bm.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-bold">
                      {bm.question.examYear} • Q.{bm.question.questionNumber}
                    </span>
                    <span className="font-semibold text-teal-700">{bm.question.subject}</span>
                  </div>
                  <button
                    onClick={() => handleToggleBookmark(bm.questionId)}
                    className="text-xs text-red-600 hover:underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-sm font-bold text-slate-900">{bm.question.questionHindi}</p>
                <p className="text-xs text-slate-600">{bm.question.questionEnglish}</p>
                <p className="text-xs font-semibold text-teal-800 pt-1">
                  Answer: Option ({bm.question.correctAnswer}) — {bm.question.explanationHindi}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};