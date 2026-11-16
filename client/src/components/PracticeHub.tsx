import React, { useState } from 'react';
import { BookMarked, Layers } from 'lucide-react';
import { MistakeJournal } from './MistakeJournal';
import { ExamDirectory } from './ExamDirectory';

interface PracticeHubProps {
  onStartExam: (testId: string) => void;
  language: 'en' | 'hi';
  examId?: string;
  examSlug?: string;
  examName?: string;
}

export const PracticeHub: React.FC<PracticeHubProps> = ({
  onStartExam,
  language,
  examId,
  examSlug,
  examName,
}) => {
  const [subTab, setSubTab] = useState<'mistakes' | 'syllabus'>('mistakes');

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Clean Header with Subtabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {examName ? `${examName} Practice & Error Elimination` : 'Academic Practice & Error Elimination'}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Diagnose conceptual traps from your {examName || 'examination'} attempts, tag mistakes, and review official chapter weightages.
          </p>
        </div>

        {/* Subtabs Pill */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
          <button
            onClick={() => setSubTab('mistakes')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              subTab === 'mistakes'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5 text-rose-600" />
            <span>Mistake Journal</span>
          </button>
          <button
            onClick={() => setSubTab('syllabus')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              subTab === 'syllabus'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Syllabus Maps</span>
          </button>
        </div>
      </div>

      {/* 2. Active Workspace */}
      {subTab === 'mistakes' ? (
        <MistakeJournal language={language} examSlug={examSlug} examName={examName} />
      ) : (
        <ExamDirectory onStartExam={onStartExam} language={language} examSlug={examSlug} />
      )}
    </div>
  );
};

export default PracticeHub;