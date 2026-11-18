import React, { useState, useEffect } from 'react';
import { Header, NavTab } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { StudentDashboard } from './components/StudentDashboard';
import { MockTestLibrary } from './components/MockTestLibrary';
import { PracticeHub } from './components/PracticeHub';
import { PYQPapersArchive } from './components/PYQPapersArchive';
import { UptetArchiveModule } from './components/UptetArchiveModule';
import { SuperTetArchiveModule } from './components/SuperTetArchiveModule';
import { ReadinessAnalytics } from './components/ReadinessAnalytics';
import { AdminPortal } from './components/AdminPortal';
import { TestRunner } from './components/TestRunner';
import { TestScorecard } from './components/TestScorecard';
import { UptetCbtSimulator } from './components/UptetCbtSimulator';
import { UptetResultDashboard } from './components/UptetResultDashboard';
import { AuthModal } from './components/AuthModal';
import { ProfileSettingsModal } from './components/ProfileSettingsModal';
import { PricingModal } from './components/PricingModal';
import { ReferralModal } from './components/ReferralModal';
import { LegalModal } from './components/LegalModals';
import { AdminRoute } from './components/AdminRoute';
import { SelectExamPage } from './components/SelectExamPage';
import { ExamPortalView } from './components/ExamPortalView';
import { StudentLiveTests } from './components/StudentLiveTests';
import { User, UserRole } from './types';
import { api, getStoredToken } from './api';

const getInitialTab = (): NavTab => {
  try {
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    if (hash.includes('control-center') || hash.includes('admin') || path.includes('control-center') || path.includes('admin')) {
      return 'control-center';
    }
    if (hash.includes('live-tests') || path.includes('live-tests')) {
      return 'live-tests';
    }
    if (hash.includes('select-exam') || path.includes('select-exam')) {
      return 'select-exam';
    }
  } catch {}
  return 'landing';
};

export const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<NavTab>(getInitialTab());
  const [selectedExamSlug, setSelectedExamSlug] = useState<string>(() => {
    return localStorage.getItem('selected_exam_slug') || 'jee-main';
  });

  useEffect(() => {
    if (selectedExamSlug) {
      localStorage.setItem('selected_exam_slug', selectedExamSlug);
    }
  }, [selectedExamSlug]);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [submittedAttemptId, setSubmittedAttemptId] = useState<string | null>(null);
  const [isUptetTest, setIsUptetTest] = useState<boolean>(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [notification, setNotification] = useState<string | null>(null);
  const [initializing, setInitializing] = useState<boolean>(true);

  // Modals state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [profileModalTab, setProfileModalTab] = useState<'profile' | 'settings'>('profile');
  const [isPricingModalOpen, setIsPricingModalOpen] = useState<boolean>(false);
  const [pricingLockedTest, setPricingLockedTest] = useState<{ id: string; title: string } | null>(null);
  const [pricingExamSlug, setPricingExamSlug] = useState<string | undefined>(undefined);
  const [isReferralModalOpen, setIsReferralModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'refund' | 'support' | null>(null);

  useEffect(() => {
    initAuth();

    const checkAppRoutes = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      const isControlRoute =
        hash.includes('admin-secure-dashboard') ||
        hash.includes('control-center') ||
        hash.includes('admin') ||
        path.includes('admin-secure-dashboard') ||
        path.includes('control-center') ||
        path.includes('admin');

      if (hash === '#/login' || hash === '#login' || path === '/login') {
        setAuthModalMode('login');
        setIsAuthModalOpen(true);
      } else if (isControlRoute) {
        setActiveTab('control-center');
      } else if (hash === '#/dashboard' || hash === '#dashboard' || path === '/dashboard') {
        setActiveTab('dashboard');
      } else if (hash === '#/live-tests' || hash === '#live-tests' || path === '/live-tests') {
        setActiveTab('live-tests');
      } else if (hash === '#/select-exam' || hash === '#select-exam' || path === '/select-exam') {
        setActiveTab('select-exam');
      } else if (hash.startsWith('#/exams/') || path.startsWith('/exams/')) {
        const raw = hash.startsWith('#/exams/') ? hash.replace('#/exams/', '') : path.replace('/exams/', '');
        const slug = raw.split(/[?#]/)[0].trim().toLowerCase();
        if (slug) {
          setSelectedExamSlug(slug);
          setActiveTab('exam-portal');
        }
      } else if (hash.startsWith('#/student/')) {
        const parts = hash.replace('#/student/', '').split('/');
        const routeExam = parts[0]?.toLowerCase();
        const storedUser = (() => {
          try {
            return JSON.parse(localStorage.getItem('examverse_user') || 'null');
          } catch {
            return null;
          }
        })();
        if (storedUser?.role === 'STUDENT' && storedUser?.targetExamId && routeExam && routeExam !== storedUser.targetExamId.toLowerCase()) {
          const own = storedUser.targetExamId.toLowerCase();
          window.location.hash = `/student/${own}/dashboard`;
          setSelectedExamSlug(own);
          setActiveTab(own === 'super-tet' ? 'super-tet' : own === 'uptet' ? 'uptet' : 'dashboard');
          showToast('Redirected to your registered examination portal.');
          return;
        }
        if (routeExam === 'super-tet') {
          setSelectedExamSlug('super-tet');
          setActiveTab('super-tet');
        } else if (routeExam === 'uptet') {
          setSelectedExamSlug('uptet');
          setActiveTab('uptet');
        } else if (routeExam) {
          setSelectedExamSlug(routeExam);
          setActiveTab('dashboard');
        }
      }
    };
    checkAppRoutes();
    window.addEventListener('hashchange', checkAppRoutes);
    window.addEventListener('popstate', checkAppRoutes);
    return () => {
      window.removeEventListener('hashchange', checkAppRoutes);
      window.removeEventListener('popstate', checkAppRoutes);
    };
  }, []);

  const initAuth = async () => {
    try {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      const isControlRoute =
        hash.includes('control-center') ||
        hash.includes('admin') ||
        path.includes('control-center') ||
        path.includes('admin');

      const token = getStoredToken();
      if (token) {
        try {
          const res = await api.getCurrentUser();
          setCurrentUser(res.user);
          if (res.user?.targetExamId) {
            setSelectedExamSlug(res.user.targetExamId.toLowerCase());
          }

          if (isControlRoute) {
            setActiveTab('control-center');
            return;
          }

          if (hash === '#/live-tests' || hash === '#live-tests' || path === '/live-tests') {
            setActiveTab('live-tests');
            return;
          }

          // Check for Cashfree Return URL query params
          const searchParams = new URLSearchParams(window.location.search);
          const returnOrderId = searchParams.get('cf_order_id') || searchParams.get('order_id');
          if (returnOrderId) {
            const cleanUrl = window.location.origin + window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, cleanUrl);

            api.verifyCashfreePayment(returnOrderId)
              .then((vRes) => {
                if (vRes.success) {
                  import('canvas-confetti').then((m) => m.default({ particleCount: 120, spread: 70, origin: { y: 0.6 } }));
                  showToast(vRes.message || 'Payment confirmed! Your plan is now active.');
                  const pSlug = (vRes.payment as any)?.examSlug;
                  if (pSlug) {
                    setSelectedExamSlug(pSlug);
                  }
                }
              })
              .catch((vErr) => {
                console.warn('Cashfree return verification notice:', vErr);
              });
          }

          if (hash.startsWith('#/exams/') || path.startsWith('/exams/')) {
            return;
          }

          if (res.user.role === 'STUDENT' && !res.user.targetExamId) {
            setActiveTab('select-exam');
            window.location.hash = '/select-exam';
          } else if (res.user?.targetExamId?.toLowerCase().includes('super-tet')) {
            setActiveTab('super-tet');
          } else if (res.user?.targetExamId?.toLowerCase().includes('uptet')) {
            setActiveTab('uptet');
          } else {
            setActiveTab('dashboard');
          }
        } catch {
          api.logout();
          setCurrentUser(null);
          if (isControlRoute) {
            setActiveTab('control-center');
          } else if (hash === '#/live-tests' || hash === '#live-tests' || path === '/live-tests') {
            setActiveTab('live-tests');
          } else {
            setActiveTab('landing');
          }
        }
      } else {
        setCurrentUser(null);
        if (isControlRoute) {
          setActiveTab('control-center');
        } else if (hash === '#/live-tests' || hash === '#live-tests' || path === '/live-tests') {
          setActiveTab('live-tests');
        } else if (!hash.startsWith('#/exams/') && !path.startsWith('/exams/')) {
          setActiveTab('landing');
        }
      }
    } catch (err) {
      console.error('Auth initialization error:', err);
      setCurrentUser(null);
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (
        hash.includes('control-center') ||
        hash.includes('admin') ||
        path.includes('control-center') ||
        path.includes('admin')
      ) {
        setActiveTab('control-center');
      } else if (hash === '#/live-tests' || hash === '#live-tests' || path === '/live-tests') {
        setActiveTab('live-tests');
      } else {
        setActiveTab('landing');
      }
    } finally {
      setInitializing(false);
    }
  };

  const handleRoleSwitch = async (role: UserRole) => {
    showToast('Role switching is restricted. Please sign in via official credentials.');
  };

  const handleLogout = () => {
    api.logout();
    setCurrentUser(null);
    setActiveTab('landing');
    window.location.hash = '';
    showToast('Signed out successfully.');
  };

  const handleAuthSuccess = (user: User, requiresExamSelection?: boolean) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);

    // Persist session & user details in localStorage for client RBAC
    try {
      localStorage.setItem('examverse_user', JSON.stringify(user));
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.error('Failed to cache user session:', e);
    }

    // Dynamic Redirection based on role
    if (user.role === 'ADMIN') {
      setActiveTab('control-center');
      window.location.hash = '/admin-secure-dashboard';
      showToast(`Welcome Admin, ${user.name}!`);
      return;
    }

    // Role === 'STUDENT'
    if (requiresExamSelection || (!user.targetExamId && user.role === 'STUDENT')) {
      setActiveTab('select-exam');
      window.location.hash = '/select-exam';
      showToast(`Welcome to All in One, ${user.name}! Please choose your target examination.`);
    } else {
      showToast(`Welcome back, ${user.name}!`);
      setActiveTab(user.targetExamId?.toLowerCase().includes('super-tet') ? 'super-tet' : user.targetExamId?.toLowerCase().includes('uptet') ? 'uptet' : 'dashboard');
      window.location.hash = '/dashboard';
    }
  };

  const handleExamSelected = (user: User) => {
    setCurrentUser(user);
    showToast(`Target examination set to ${user.targetExamId?.toUpperCase()}! Portal configured.`);
    if (user.targetExamId?.toLowerCase().includes('super-tet')) {
      setActiveTab('super-tet');
      window.location.hash = '/student/super-tet/dashboard';
    } else if (user.targetExamId?.toLowerCase().includes('uptet')) {
      setActiveTab('uptet');
      window.location.hash = '/student/uptet/dashboard';
    } else {
      setActiveTab('dashboard');
      window.location.hash = `/student/${user.targetExamId}/dashboard`;
    }
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 3200);
  };

  const handleStartExam = async (testId: string, forceUptet?: boolean) => {
    setActiveTestId(testId);
    setSubmittedAttemptId(null);
    if (forceUptet !== undefined) {
      setIsUptetTest(forceUptet);
    } else {
      try {
        const info = await api.getTestInfo(testId);
        const titleUp = info?.test?.title?.toUpperCase() || '';
        const slug = (info?.test?.exam as any)?.slug;
        const isUp = Boolean(
          titleUp.includes('UPTET') ||
          titleUp.includes('SUPER TET') ||
          slug === 'uptet' ||
          slug === 'super-tet' ||
          (info?.test as any)?.paperType
        );
        setIsUptetTest(isUp);
      } catch {
        setIsUptetTest(false);
      }
    }
    setActiveTab('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartLiveExam = async (scheduleId: string, testId: string, isUptetOrSuperTet: boolean) => {
    try {
      const session = await api.startLiveTestSession(scheduleId);
      showToast(`Live examination session active: ${session.test.title}`);
      setActiveTestId(testId);
      setSubmittedAttemptId(null);
      setIsUptetTest(isUptetOrSuperTet);
      setActiveTab('test');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      showToast(err?.message || 'Failed to enter live examination session.');
    }
  };

  const handleFinishTest = (attemptId: string) => {
    setSubmittedAttemptId(attemptId);
    setActiveTestId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAttemptReview = async (id: string) => {
    setSubmittedAttemptId(id);
    setActiveTestId(null);
    try {
      const review = await api.getTestReview(id);
      const revTitleUp = review?.test?.title?.toUpperCase() || '';
      const revSlug = (review?.test?.exam as any)?.slug;
      const isUp = Boolean(
        revTitleUp.includes('UPTET') ||
        revTitleUp.includes('SUPER TET') ||
        revSlug === 'uptet' ||
        revSlug === 'super-tet'
      );
      setIsUptetTest(isUp);
    } catch {
      setIsUptetTest(false);
    }
    setActiveTab('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExitTest = () => {
    setActiveTestId(null);
    setActiveTab(isUptetTest ? 'uptet' : 'dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openExamPortal = (slug: string) => {
    const cleanSlug = slug.trim().toLowerCase();
    setSelectedExamSlug(cleanSlug);
    setActiveTestId(null);
    setSubmittedAttemptId(null);
    setActiveTab('exam-portal');
    window.location.hash = `/exams/${cleanSlug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Strictly bind pricing plans to the user's logged-in/target exam or active exam portal
  const handleOpenPricing = (lockedTest?: { id: string; title: string } | null, examSlug?: string) => {
    if (!currentUser) {
      showToast('Please sign in or register to view exam-specific subscription plans.');
      setAuthModalMode('login');
      setIsAuthModalOpen(true);
      return;
    }
    setPricingLockedTest(lockedTest || null);
    setPricingExamSlug(examSlug || (activeTab === 'exam-portal' ? selectedExamSlug : currentUser?.targetExamId));
    setIsPricingModalOpen(true);
  };

  const handleOpenReferral = () => {
    setIsReferralModalOpen(true);
  };

  const handleOpenLegal = (type: 'terms' | 'privacy' | 'refund' | 'support') => {
    setLegalModalType(type);
  };

  const handlePaymentSuccess = async (payment: any) => {
    showToast(`Payment verified! Subscription activated for ${currentUser?.targetExamId?.toUpperCase() || 'your exam'}.`);
    try {
      const res = await api.getCurrentUser();
      setCurrentUser(res.user);
    } catch {
      // ignore
    }
  };

  const isExamRunning = activeTab === 'test' && activeTestId;

  return (
    <div className="min-h-screen bg-tn-bg flex flex-col text-tn-text font-sans">
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 bg-tn-navy text-white px-4 py-2.5 rounded-lg shadow-modal text-xs font-semibold flex items-center gap-2 border border-slate-700 animate-in slide-in-from-bottom-5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{notification}</span>
        </div>
      )}

      {!isExamRunning && (
        <Header
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            if (tab !== 'test') {
              setSubmittedAttemptId(null);
            }
          }}
          currentUser={currentUser}
          onRoleSwitch={handleRoleSwitch}
          language={language}
          setLanguage={setLanguage}
          activeTestTitle={activeTestId ? 'CBT Test in Progress' : undefined}
          activeExamSlug={currentUser?.targetExamId || selectedExamSlug || 'jee-main'}
          onOpenExamPortal={openExamPortal}
          onOpenAuthModal={(mode) => {
            setAuthModalMode(mode);
            setIsAuthModalOpen(true);
          }}
          onOpenProfileSettings={(tab) => {
            setProfileModalTab(tab);
            setIsProfileModalOpen(true);
          }}
          onOpenPricingModal={() => handleOpenPricing()}
          onOpenReferralModal={handleOpenReferral}
          onLogout={handleLogout}
        />
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        initialMode={authModalMode}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      <ProfileSettingsModal
        isOpen={isProfileModalOpen}
        defaultTab={profileModalTab}
        currentUser={currentUser}
        onClose={() => setIsProfileModalOpen(false)}
        onUserUpdated={(u) => {
          setCurrentUser(u);
          if (u.targetExamId) {
            setSelectedExamSlug(u.targetExamId.toLowerCase());
          }
          if (u.targetExamId?.toLowerCase().includes('super-tet')) {
            setActiveTab('super-tet');
          } else if (u.targetExamId?.toLowerCase().includes('uptet')) {
            setActiveTab('uptet');
          } else {
            setActiveTab('dashboard');
          }
        }}
        onLogout={handleLogout}
      />

      {/* Exam-Specific Subscription & Pricing Modal */}
      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => {
          setIsPricingModalOpen(false);
          setPricingLockedTest(null);
          setPricingExamSlug(undefined);
        }}
        currentUser={currentUser}
        lockedTest={pricingLockedTest}
        examSlug={pricingExamSlug || currentUser?.targetExamId || selectedExamSlug}
        onPaymentSuccess={handlePaymentSuccess}
        onOpenReferral={handleOpenReferral}
      />

      <ReferralModal
        isOpen={isReferralModalOpen}
        onClose={() => setIsReferralModalOpen(false)}
        currentUser={currentUser}
        onRedeemSuccess={() => {
          initAuth();
          showToast('Referral credit successfully redeemed! 1 premium paper unlocked.');
        }}
      />

      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType || 'terms'}
        onClose={() => setLegalModalType(null)}
      />

      <main className={`flex-1 w-full ${isExamRunning ? 'p-0 max-w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'}`}>
        {initializing ? (
          <div className="h-[60vh] flex flex-col items-center justify-center space-y-3">
            <div className="w-10 h-10 rounded-full border-3 border-tn-border border-t-tn-blue animate-spin" />
            <p className="text-xs font-semibold text-slate-500">Connecting to All in One CBT Engine...</p>
          </div>
        ) : (
          <>
            {(activeTab === 'select-exam' || (currentUser && currentUser.role === 'STUDENT' && !currentUser.targetExamId && activeTab !== 'control-center')) && (
              <SelectExamPage
                currentUser={currentUser}
                onExamSelected={handleExamSelected}
                onLogout={handleLogout}
              />
            )}

            {activeTab === 'test' && activeTestId && (
              isUptetTest ? (
                <UptetCbtSimulator
                  testId={activeTestId}
                  onFinishTest={handleFinishTest}
                  onExit={() => {
                    setActiveTestId(null);
                    setActiveTab(currentUser?.targetExamId?.includes('super-tet') ? 'super-tet' : 'uptet');
                  }}
                  globalLanguage={language}
                  candidateNameProp={currentUser?.name}
                  candidateRollProp={currentUser?.studentId}
                />
              ) : (
                <TestRunner
                  testId={activeTestId}
                  onFinishTest={handleFinishTest}
                  onExit={handleExitTest}
                  globalLanguage={language}
                />
              )
            )}

            {activeTab === 'test' && submittedAttemptId && (
              isUptetTest ? (
                <UptetResultDashboard
                  attemptId={submittedAttemptId}
                  onRetake={() => {
                    if (activeTestId) {
                      handleStartExam(activeTestId, true);
                    } else {
                      setSubmittedAttemptId(null);
                      setActiveTab('uptet');
                    }
                  }}
                  onReturnToLibrary={() => {
                    setSubmittedAttemptId(null);
                    setActiveTab(currentUser?.targetExamId?.includes('super-tet') ? 'super-tet' : 'uptet');
                  }}
                  globalLanguage={language}
                />
              ) : (
                <TestScorecard
                  attemptId={submittedAttemptId}
                  onOpenMistakeJournal={() => setActiveTab('practice')}
                  onRetake={() => {
                    setSubmittedAttemptId(null);
                    setActiveTab('mock-tests');
                  }}
                  globalLanguage={language}
                />
              )
            )}

            {activeTab === 'dashboard' && (
              <StudentDashboard
                currentUser={currentUser}
                onStartExam={handleStartExam}
                onOpenAttemptReview={handleOpenAttemptReview}
                onNavigateToMockTests={() => setActiveTab('mock-tests')}
                onNavigateToPractice={() => setActiveTab('practice')}
                onNavigateToPerformance={() => setActiveTab('performance')}
                onNavigateToUptet={() => setActiveTab('uptet')}
                onNavigateToSuperTet={() => setActiveTab('super-tet')}
                onOpenExamPortal={openExamPortal}
                onOpenPricingModal={() => handleOpenPricing()}
                onOpenReferralModal={handleOpenReferral}
              />
            )}

            {activeTab === 'exam-portal' && (
              <ExamPortalView
                examSlug={selectedExamSlug}
                currentUser={currentUser}
                language={language}
                onStartExam={handleStartExam}
                onOpenAttemptReview={handleOpenAttemptReview}
                onOpenPricingModal={(lockedTest, slug) => handleOpenPricing(lockedTest, slug)}
                onBackToAllExams={() => {
                  setActiveTab('landing');
                  window.location.hash = '';
                }}
              />
            )}

            {activeTab === 'mock-tests' && (
              <MockTestLibrary
                onStartExam={handleStartExam}
                language={language}
                onOpenPricingModal={(lockedTest) => handleOpenPricing(lockedTest, currentUser?.targetExamId || selectedExamSlug)}
                currentUser={currentUser}
                examSlug={currentUser?.targetExamId || selectedExamSlug || 'jee-main'}
              />
            )}

            {activeTab === 'practice' && (
              <PracticeHub
                onStartExam={handleStartExam}
                language={language}
                examSlug={currentUser?.targetExamId || selectedExamSlug}
              />
            )}

            {activeTab === 'pyq-papers' && (
              <PYQPapersArchive
                onStartExam={handleStartExam}
                examSlug={currentUser?.targetExamId || selectedExamSlug || 'jee-main'}
              />
            )}

            {activeTab === 'uptet' && (
              <UptetArchiveModule onStartExam={(id) => handleStartExam(id, true)} language={language} />
            )}

            {activeTab === 'super-tet' && (
              <SuperTetArchiveModule
                currentUser={currentUser}
                onStartExam={(id) => handleStartExam(id, true)}
                onOpenAttemptReview={handleOpenAttemptReview}
                onNavigateToPractice={() => setActiveTab('practice')}
                language={language}
              />
            )}

            {activeTab === 'performance' && (
              <ReadinessAnalytics />
            )}

            {activeTab === 'live-tests' && (
              <StudentLiveTests
                currentUser={currentUser}
                onOpenAuthModal={(mode) => {
                  setAuthModalMode(mode);
                  setIsAuthModalOpen(true);
                }}
                onStartLiveExam={handleStartLiveExam}
              />
            )}

            {(activeTab === 'admin' || activeTab === 'control-center') && (
              <AdminRoute
                currentUser={currentUser}
                onRedirectToLogin={() => {
                  setAuthModalMode('login');
                  setIsAuthModalOpen(true);
                }}
                onSwitchToAdmin={() => {
                  api.logout();
                  setCurrentUser(null);
                  setAuthModalMode('login');
                  setIsAuthModalOpen(true);
                }}
                onUserRefreshed={(refreshedUser) => {
                  setCurrentUser(refreshedUser);
                  showToast(`Admin access verified: ${refreshedUser.name}`);
                }}
                onRedirectToStudent={() => {
                  if (currentUser?.targetExamId?.toLowerCase().includes('uptet')) {
                    setActiveTab('uptet');
                  } else if (currentUser) {
                    setActiveTab('dashboard');
                  } else {
                    setActiveTab('landing');
                  }
                  window.location.hash = '/dashboard';
                }}
              >
                <AdminPortal />
              </AdminRoute>
            )}

            {activeTab === 'landing' && (
              <LandingPage
                onOpenExamPortal={openExamPortal}
                onStartPractising={() => setActiveTab('mock-tests')}
                onExplorePYQ={() => setActiveTab('pyq-papers')}
                onOpenPricing={() => {
                  if (!currentUser) {
                    showToast('Please sign in to explore exam-specific pricing plans.');
                    setAuthModalMode('login');
                    setIsAuthModalOpen(true);
                  } else {
                    handleOpenPricing();
                  }
                }}
                onOpenAuth={(mode) => {
                  setAuthModalMode(mode);
                  setIsAuthModalOpen(true);
                }}
              />
            )}
          </>
        )}
      </main>

      {!isExamRunning && (
        <Footer
          onNavigate={(tab) => setActiveTab(tab)}
          onOpenExamPortal={openExamPortal}
          onOpenLegal={handleOpenLegal}
          onOpenPricing={() => handleOpenPricing()}
        />
      )}
    </div>
  );
};

export default App;