import React, { useState, useEffect } from 'react';
import {
  Search,
  CheckCircle2,
  Clock,
  FileCheck2,
  X,
  Play,
  LayoutGrid,
  List,
  Lock,
} from 'lucide-react';
import { User } from '../types';
import { api } from '../api';

interface MockTestLibraryProps {
  onStartExam: (testId: string) => void;
  language: 'en' | 'hi';
  onOpenPricingModal?: (lockedTest?: any) => void;
  currentUser?: User | null;
  examSlug?: string;
}

export const MockTestLibrary: React.FC<MockTestLibraryProps> = ({
  onStartExam,
  language,
  onOpenPricingModal,
  currentUser,
  examSlug = 'jee-main',
}) => {
  const [tests, setTests] = useState<any[]>([]);
  const [examInfo, setExamInfo] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [shiftFilter, setShiftFilter] = useState<string>('ALL');
  const [accessFilter, setAccessFilter] = useState<'ALL' | 'FREE' | 'PREMIUM'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'rows' | 'grid'>('rows');
  const [visibleCount, setVisibleCount] = useState<number>(30);
  const [checkingEntitlementId, setCheckingEntitlementId] = useState<string | null>(null);
  const [entitlementByTest, setEntitlementByTest] = useState<Record<string, any>>({});
  const [subscriptionInfo, setSubscriptionInfo] = useState<any>(null);

  const getAccessType = (test: any): 'free' | 'premium' => (
    test.accessType === 'premium' || test.accessLevel === 'PREMIUM' || test.accessMode === 'PREMIUM' || test.accessMode === 'PAID'
      ? 'premium'
      : 'free'
  );

  useEffect(() => {
    loadTests();
  }, [examSlug]);

  const loadTests = async () => {
    setLoading(true);
    try {
      const [res, subscription] = await Promise.all([
        api.getExamProfile(examSlug || 'jee-main'),
        api.getMySubscription().catch(() => null),
      ]);
      if (res?.exam) {
        setExamInfo(res.exam);
        if (res.exam.tests) {
          setTests(res.exam.tests);
          const entitlementResult = await api.getTestEntitlements(res.exam.tests.map((test: any) => test.id), examSlug).catch(() => null);
          setEntitlementByTest(entitlementResult?.entitlements || {});
        }
      }
      setSubscriptionInfo(subscription);
    } catch (err) {
      console.error('Failed to load mock tests:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleTestClick = async (test: any) => {
    const isFreeTest = getAccessType(test) === 'free';

    if (test.accessMode === 'COMING_SOON') {
      alert('This mock test is scheduled to be released soon! Please check back shortly.');
      return;
    }

    if (isFreeTest) {
      onStartExam(test.id);
      return;
    }

    // Backend entitlement check or Pricing modal open
    setCheckingEntitlementId(test.id);
    try {
      const ent = await api.checkTestEntitlement(test.id);
      if (ent.entitled) {
        onStartExam(test.id);
      } else {
        onOpenPricingModal?.({ id: test.id, title: test.title, priceINR: test.priceINR });
      }
    } catch (err) {
      console.warn('Entitlement check failed, presenting pricing options:', err);
      onOpenPricingModal?.({ id: test.id, title: test.title, priceINR: test.priceINR });
    } finally {
      setCheckingEntitlementId(null);
    }
  };

  const filteredTests = tests.filter((t) => {
    if (t.accessMode === 'DISABLED') return false;
    const isFreeTest = getAccessType(t) === 'free';

    // Shift filter
    if (shiftFilter !== 'ALL') {
      if (!t.title?.toLowerCase().includes(shiftFilter.toLowerCase())) {
        return false;
      }
    }

    // Access level is managed per test by administrators.
    if (accessFilter !== 'ALL') {
      if (accessFilter === 'FREE' && !isFreeTest) return false;
      if (accessFilter === 'PREMIUM' && isFreeTest) return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = t.title?.toLowerCase().includes(q);
      const matchRef = t.pyqReference?.toLowerCase().includes(q);
      if (!matchTitle && !matchRef) return false;
    }

    return true;
  });

  const displayedTests = filteredTests.slice(0, visibleCount);

  const freeCount = tests.filter((test) => getAccessType(test) === 'free').length;
  const premiumCount = tests.length - freeCount;
  const availablePremiumCount = tests.filter((test) => getAccessType(test) === 'premium' && entitlementByTest[test.id]?.entitled).length;
  const currentPortalPlan = subscriptionInfo?.activePlans?.find((item: any) => item.plan?.examSlug === examSlug)
    || subscriptionInfo?.activePlans?.find((item: any) => !item.plan?.examSlug)
    || subscriptionInfo?.subscription;
  const planName = currentPortalPlan?.plan?.name || 'Free Starter Plan';
  const planRemaining = currentPortalPlan?.testsRemaining;

  return (
    <div className="space-y-6 pb-16">
      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-tn-border pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200 mb-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Syllabus & Pattern Aligned CBT Station</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-tn-navy tracking-tight">
            Mock Tests & Practice Library
          </h1>
          <p className="text-xs text-tn-muted mt-0.5">
            Attempt official-pattern mock tests with strict exam timers, palette controls, and instant evaluations.
          </p>
        </div>

        {/* Metric Badges */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="px-3 py-1.5 rounded-lg bg-white border border-tn-border text-xs text-slate-700 font-medium shadow-xs">
            <strong className="text-tn-navy font-bold">{tests.length}</strong> Total Mock Tests
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium">
            <strong className="text-emerald-900 font-bold">{freeCount} Free</strong> Tests Available
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-800 font-medium">
            <strong className="text-blue-900 font-bold">{availablePremiumCount}</strong> Premium Included
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-xs text-blue-900">
        <span className="font-semibold">Active plan: {planName}</span>
        {typeof planRemaining === 'number' && <span>• {planRemaining} open pack test{planRemaining === 1 ? '' : 's'} remaining</span>}
        <span>• {availablePremiumCount} premium paper{availablePremiumCount === 1 ? '' : 's'} available in this portal</span>
      </div>

      {/* 2. Filter Bar */}
      <div className="p-4 sm:p-5 rounded-xl bg-white border border-tn-border shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Access Filter Pills */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Filter:
            </span>
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setAccessFilter('ALL')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  accessFilter === 'ALL'
                    ? 'bg-[#2563EB] text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({tests.length})
              </button>
              <button
                onClick={() => setAccessFilter('FREE')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  accessFilter === 'FREE'
                    ? 'bg-[#2563EB] text-white font-semibold shadow-xs'
                    : 'text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                <span>Free ({freeCount})</span>
              </button>
              <button
                onClick={() => setAccessFilter('PREMIUM')}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  accessFilter === 'PREMIUM'
                    ? 'bg-[#2563EB] text-white font-semibold shadow-xs'
                    : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                <Lock className="w-3 h-3" />
                <span>Premium ({premiumCount})</span>
              </button>
            </div>
          </div>

          {/* Row/Grid Toggle */}
          <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('rows')}
              className={`p-1.5 rounded-md cursor-pointer ${
                viewMode === 'rows' ? 'bg-[#2563EB] text-white shadow-xs' : 'text-slate-400 hover:text-slate-700'
              }`}
              title="Compact rows view"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#2563EB] text-white shadow-xs' : 'text-slate-400 hover:text-slate-700'
              }`}
              title="Card grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search & Shift Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-slate-100">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mock tests by title..."
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <select
            value={shiftFilter}
            onChange={(e) => setShiftFilter(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer"
          >
            <option value="ALL">All Shifts</option>
            <option value="Shift 1">Shift 1 (Morning)</option>
            <option value="Shift 2">Shift 2 (Evening)</option>
          </select>
        </div>
      </div>

      {/* 3. Paper Count Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
        <span>
          Showing <strong className="text-slate-900">{displayedTests.length}</strong> of{' '}
          <strong className="text-slate-900">{filteredTests.length}</strong> mock tests
        </span>
        <span className="text-[11px] text-slate-400 font-mono">
          Duration: 3 Hours • Complete CBT Terminal
        </span>
      </div>

      {/* 4. Tests List / Grid */}
      {loading ? (
        <div className="p-12 text-center bg-white rounded-xl border border-slate-200 space-y-3">
          <Clock className="w-6 h-6 text-slate-400 mx-auto animate-spin" />
          <p className="text-xs text-slate-500">Loading mock test library...</p>
        </div>
      ) : tests.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-dashed border-slate-300 space-y-3">
          <FileCheck2 className="w-8 h-8 text-slate-300 mx-auto" />
          <h4 className="text-sm font-bold text-slate-800">No Active Mock Tests Live</h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            There are currently no active mock tests live for {examInfo?.shortName || 'this exam'}. Administrators activate mock tests according to the official schedule. Please check back soon.
          </p>
        </div>
      ) : displayedTests.length === 0 ? (
        <div className="p-10 text-center bg-white rounded-xl border border-dashed border-slate-300 space-y-3">
          <p className="text-xs font-medium text-slate-600">No mock tests match your filter.</p>
          <button
            onClick={() => {
              setShiftFilter('ALL');
              setAccessFilter('ALL');
              setSearchQuery('');
            }}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'rows' ? (
        <div className="border border-tn-border rounded-xl bg-white overflow-hidden shadow-xs divide-y divide-slate-100">
          {displayedTests.map((test, index) => {
            const isFree = getAccessType(test) === 'free';
            const isComingSoon = test.accessMode === 'COMING_SOON';
            const isChecking = checkingEntitlementId === test.id;
            const entitlement = entitlementByTest[test.id];
            const isIncluded = !isFree && entitlement?.entitled;
            const isLocked = !isFree && !isIncluded;

            return (
              <div
                key={test.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      Mock #{index + 1}
                    </span>

                    {isFree ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        FREE
                      </span>
                    ) : isComingSoon ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                        COMING SOON
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" />
                        {isIncluded ? 'INCLUDED IN YOUR PLAN' : 'PREMIUM'}
                      </span>
                    )}

                    <span className="text-[11px] font-mono text-slate-400">
                      {test.totalQuestions || 75} Qs • {test.durationMinutes || 180}m • 300 Marks
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                    {test.title}
                  </h3>

                  <p className="text-[11px] text-slate-500">
                    Standard CBT mock test with negative marking (+4 correct, -1 incorrect).
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <button
                    disabled={isChecking || isComingSoon}
                    onClick={() => handleTestClick(test)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50 ${
                      isFree
                        ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                        : isComingSoon
                        ? 'bg-slate-300 text-slate-600 cursor-not-allowed'
                        : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                    }`}
                  >
                    {isChecking ? (
                      <>
                        <Clock className="w-3.5 h-3.5 animate-spin" />
                        <span>Checking...</span>
                      </>
                    ) : (
                      <>
                        {isLocked ? <Lock className="w-3.5 h-3.5 text-amber-200" /> : <Play className="w-3.5 h-3.5" />}
                        <span>
                          {isFree ? 'Start Test' : isComingSoon ? 'Coming Soon' : isIncluded ? 'Start Test' : 'Unlock with Plan'}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedTests.map((test, index) => {
            const isFree = getAccessType(test) === 'free';
            const isComingSoon = test.accessMode === 'COMING_SOON';
            const isChecking = checkingEntitlementId === test.id;
            const entitlement = entitlementByTest[test.id];
            const isIncluded = !isFree && entitlement?.entitled;
            const isLocked = !isFree && !isIncluded;

            return (
              <div
                key={test.id}
                className="p-5 rounded-xl border border-tn-border bg-white shadow-xs hover:border-blue-200 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        Mock #{index + 1}
                      </span>
                      {isFree ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          FREE
                        </span>
                      ) : isComingSoon ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                          COMING SOON
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          {isIncluded ? 'INCLUDED IN YOUR PLAN' : 'PREMIUM'}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">
                      {test.totalQuestions || 75} Qs • 180m
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                    {test.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Timed computer-based test environment with instant scorecard.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Timed CBT Mode</span>
                  </span>
                  <button
                    disabled={isChecking || isComingSoon}
                    onClick={() => handleTestClick(test)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50 ${
                      isFree
                        ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                        : isComingSoon
                        ? 'bg-slate-300 text-slate-600 cursor-not-allowed'
                        : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                    }`}
                  >
                    {isChecking ? (
                      <>
                        <Clock className="w-3.5 h-3.5 animate-spin" />
                        <span>Checking...</span>
                      </>
                    ) : (
                      <>
                        {isLocked ? <Lock className="w-3.5 h-3.5 text-amber-200" /> : <Play className="w-3.5 h-3.5" />}
                        <span>
                          {isFree ? 'Start Test' : isComingSoon ? 'Coming Soon' : isIncluded ? 'Start Test' : 'Unlock with Plan'}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Load More Button */}
      {displayedTests.length < filteredTests.length && (
        <div className="pt-2 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 30)}
            className="px-5 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors cursor-pointer shadow-xs"
          >
            Load More Mock Tests ({filteredTests.length - displayedTests.length} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default MockTestLibrary;
