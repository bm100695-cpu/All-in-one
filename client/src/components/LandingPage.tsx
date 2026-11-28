import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Laptop,
  ShieldCheck,
  Search,
} from 'lucide-react';
import { Exam, ExamCategory } from '../types';
import { api } from '../api';

interface LandingPageProps {
  onOpenExamPortal: (slug: string) => void;
  onStartPractising: () => void;
  onExplorePYQ: () => void;
  onOpenPricing?: () => void;
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onOpenExamPortal,
  onOpenPricing,
  onOpenAuth,
}) => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [categories, setCategories] = useState<ExamCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [directoryError, setDirectoryError] = useState<boolean>(false);

  useEffect(() => {
    loadDirectory();
  }, []);

  const loadDirectory = async () => {
    setLoading(true);
    setDirectoryError(false);
    try {
      const [dirRes, catRes] = await Promise.all([
        api.getExamDirectory(),
        api.getCategories(),
      ]);
      setExams(dirRes.exams || []);
      setCategories(catRes.categories || []);
    } catch (err) {
      console.error('Failed to load exam directory:', err);
      setDirectoryError(true);
    } finally {
      setLoading(false);
    }
  };

  const filteredExams = exams.filter((ex) => {
    if (selectedCategory !== 'ALL' && ex.category?.code !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        ex.title.toLowerCase().includes(q) ||
        ex.shortName.toLowerCase().includes(q) ||
        ex.conductingBody.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalTestsAvailable = exams.reduce((sum, e) => sum + (e.actualTestsCount || 0), 0);
  const totalVerifiedPyqs = exams.reduce((sum, e) => sum + (e.totalVerifiedPYQs || 0), 0);

  return (
    <div className="space-y-14 pb-16">
      {/* 1. Central Hero Section (Clean & Natural) */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="flex justify-center">
            <img
              src="/logo.jpg"
              alt="All in One Logo"
              className="h-20 sm:h-24 w-auto rounded-xl object-contain bg-white p-1.5 border border-slate-200 shadow-xs"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Smart CBT Simulator & Previous Year Question Library</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Practice for Your Target Exam in a Real CBT Environment.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose your examination to access official pattern tests, verified previous year question papers, and structured practice tools designed for serious aspirants.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href="#exam-selector"
              className="px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <span>Browse Examination Portals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            {onOpenAuth && (
              <button
                onClick={() => onOpenAuth('register')}
                className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Create Student Account
              </button>
            )}
            {onOpenPricing && (
              <button
                onClick={onOpenPricing}
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                View Exam Plans
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Live Database Summary Strip (Cleaned Up) */}
      <section className="border-y border-slate-200 bg-white py-5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-extrabold text-slate-900 tabular-nums">{loading || directoryError ? '—' : exams.length}</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Active Exam Portals</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-900 tabular-nums">{loading || directoryError ? '—' : totalTestsAvailable}</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Mock & PYQ Papers</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-emerald-700 tabular-nums">
              {loading || directoryError ? '—' : totalVerifiedPyqs.toLocaleString()}
            </p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Verified Questions</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-blue-600 tabular-nums">{loading || directoryError ? '—' : categories.length}</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Exam Categories</p>
          </div>
        </div>
      </section>

      {/* 3. Central Examination Selector */}
      <section id="exam-selector" className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Select Your Target Examination</h2>
            <p className="text-xs text-slate-600 mt-1">
              Access dedicated subject modules, official marking schemes, and complete test archives.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search JEE, UPTET, NEET..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>

        {directoryError && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900">
            Examination availability is temporarily unavailable. Please refresh the page and try again.
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap cursor-pointer ${
              selectedCategory === 'ALL'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            All Categories ({exams.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.code)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.code
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Examination Portal Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-48 rounded-xl bg-white border border-slate-200 animate-pulse" />
            ))}
          </div>
        ) : filteredExams.length === 0 ? (
          <div className="p-10 bg-white rounded-xl border border-slate-200 text-center text-xs text-slate-500">
            No examinations match your search query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredExams.map((ex) => {
              const pv = ex.patternVersions?.[0];
              const accent = ex.accentColor || '#1D4ED8';
              return (
                <div
                  key={ex.id}
                  onClick={() => onOpenExamPortal(ex.slug)}
                  className="bg-white rounded-xl border border-slate-200 hover:border-slate-400 p-5 shadow-sm flex flex-col justify-between space-y-4 transition-all cursor-pointer group"
                  style={{ borderTopWidth: '3px', borderTopColor: accent }}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {ex.category?.name || 'Examination'}
                      </span>
                      {ex.isComingSoon ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Portal Active
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {ex.shortName}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{ex.conductingBody}</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {ex.portalHeadline || ex.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-3 gap-1.5 text-center text-[11px]">
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200/80">
                        <span className="text-[10px] text-slate-500 block">Tests</span>
                        <strong className="text-slate-900">{ex.actualTestsCount ?? 0}</strong>
                      </div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200/80">
                        <span className="text-[10px] text-slate-500 block">Verified PYQs</span>
                        <strong className="text-emerald-700">{(ex.totalVerifiedPYQs || 0).toLocaleString()}</strong>
                      </div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200/80">
                        <span className="text-[10px] text-slate-500 block">Duration</span>
                        <strong className="text-slate-900">{pv?.durationMinutes ? `${pv.durationMinutes}m` : 'Var'}</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenExamPortal(ex.slug);
                      }}
                      className="w-full py-2 rounded-lg bg-slate-900 group-hover:bg-blue-600 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Open {ex.shortName} Portal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Platform Features (Clean & Natural) */}
      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">Designed for Real Exam Practice</h2>
          <p className="text-xs text-slate-500">Everything you need to practice efficiently with an authentic CBT interface.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
              <Laptop className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Real CBT Interface</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Experience the actual computer-based test environment with subject-wise rules, timers, and smooth navigation.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Authentic Question Banks</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Access previous year papers and verified official question sets clearly organized for focused preparation.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-900 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Smart Performance Tracking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Auto-save progress, instant answers review, and analytical tools to track and improve your mistakes effortlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
