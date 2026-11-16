import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  Sparkles,
  Bookmark,
  Play,
  Award,
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

export const SuperTetArchiveModule: React.FC<SuperTetArchiveModuleProps> = ({
  currentUser,
  onStartExam,
  onOpenAttemptReview,
  onNavigateToPractice,
}) => {
  const [activeView, setActiveView] = useState<'ARCHIVE' | 'PRACTICE_MOCKS' | 'RESULTS' | 'BOOKMARKS'>('ARCHIVE');
  const [loading, setLoading] = useState<boolean>(true);
  const [yearsList, setYearsList] = useState<SuperTetExam[]>([]);
  const [practiceTests, setPracticeTests] = useState<SuperTetExam[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2019);

  // Bookmarks & Past Attempts
  const [bookmarks, setBookmarks] = useState<Array<{ id: string; questionId: string; question: SuperTetQuestion }>>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [pastAttempts, setPastAttempts] = useState<any[]>([]);

  useEffect(() => {
    loadInitialData();
  }, []);

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

  const handleToggleBookmark = async (questionId: string) => {
    if (!currentUser) {
      alert('Please sign in to manage bookmarks.');
      return;
    }
    try {
      if (bookmarkedIds.has(questionId)) {
        await api.removeSuperTetBookmark(questionId);
        const next = new Set(bookmarkedIds);
        next.delete(questionId);
        setBookmarkedIds(next);
        setBookmarks((prev) => prev.filter((b) => b.questionId !== questionId));
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
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-3">
        <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-teal-600 animate-spin mx-auto" />
        <p className="text-xs font-medium text-slate-500">Loading SUPER TET Mock Tests...</p>
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
              SUPER TET Mock Tests & Previous Papers
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Attempt full-length CBT mock tests for the <strong className="text-slate-900 font-semibold">2018 (68,500 posts)</strong> and <strong className="text-slate-900 font-semibold">2019 (69,000 posts)</strong> official papers and new pattern practice series.
            </p>
          </div>

          {/* Clean Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-slate-500 block text-[11px] font-medium">Official Papers</span>
              <span className="text-base font-bold text-slate-950 mt-0.5 block">2018 & 2019</span>
              <span className="text-[10px] text-slate-500 block">CBT Mode Available</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-slate-500 block text-[11px] font-medium">Practice Mocks</span>
              <span className="text-base font-bold text-teal-700 mt-0.5 block">{practiceTests.length} Test Series</span>
              <span className="text-[10px] text-slate-500 block">Latest Exam Pattern</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-slate-500 block text-[11px] font-medium">Exam Duration</span>
              <span className="text-base font-bold text-slate-950 mt-0.5 block">150 Minutes</span>
              <span className="text-[10px] text-slate-500 block">Standard CBT Timer</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <span className="text-slate-500 block text-[11px] font-medium">Marking Scheme</span>
              <span className="text-base font-bold text-slate-950 mt-0.5 block">150 Marks</span>
              <span className="text-[10px] text-teal-700 font-medium block">+1 Mark • 0 Negative</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Portal View Switcher (Subject-Wise Question Viewer Removed) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200">
        {[
          { id: 'ARCHIVE', label: 'Previous Year Papers (CBT)', icon: Calendar },
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

      {/* ==================== VIEW A: YEAR-WISE CBT LAUNCHER ONLY (NO OPEN QUESTIONS) ==================== */}
      {activeView === 'ARCHIVE' && (
        <div className="space-y-6">
          {/* Year Selector */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-teal-700" />
                Select Examination Year
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Select a year to launch the CBT test
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

          {/* Official Examination CBT Card (Questions & Reference Box Hidden) */}
          {selectedExam && (
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="space-y-1">
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
                    className="px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs flex items-center gap-2 cursor-pointer shrink-0 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Start CBT Mock Test ({selectedExam.totalQuestions} Qs)</span>
                  </button>
                )}
              </div>

              {/* Exam Summary Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Exam Date</span>
                  <span className="font-semibold text-slate-950">{selectedExam.examDate}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Duration</span>
                  <span className="font-semibold text-slate-900">{selectedExam.duration} Minutes</span>
                </div>
                <div className="p-3 rounded-lg bg-teal-50/60 border border-teal-200">
                  <span className="text-[10px] text-teal-700 block">Total Questions</span>
                  <span className="font-semibold text-teal-900">{selectedExam.totalQuestions} MCQs</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Negative Marking</span>
                  <span className="font-semibold text-emerald-700">No Penalty (0)</span>
                </div>
              </div>
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
                Designed according to the latest UPESSC 150-question pattern covering all 14 subjects.
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
              You haven't attempted any SUPER TET tests yet. Start a mock test to track your score.
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
              No saved questions yet.
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