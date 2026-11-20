import React, { useState, useRef, useEffect } from 'react';
import {
  LayoutDashboard,
  FileCheck2,
  BookOpen,
  BarChart2,
  ChevronDown,
  Menu,
  X,
  User as UserIcon,
  Settings,
  LogOut,
  LogIn,
  UserPlus,
  Sparkles,
  Gift,
  Shield,
  Zap,
} from 'lucide-react';
import { User, UserRole } from '../types';

export type NavTab =
  | 'landing'
  | 'exam-portal'
  | 'dashboard'
  | 'mock-tests'
  | 'live-tests'
  | 'practice'
  | 'pyq-papers'
  | 'uptet'
  | 'super-tet'
  | 'performance'
  | 'admin'
  | 'control-center'
  | 'select-exam'
  | 'test';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  currentUser: User | null;
  onRoleSwitch: (role: UserRole) => void;
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  activeTestTitle?: string;
  activeExamSlug?: string;
  onOpenExamPortal?: (slug: string) => void;
  onOpenAuthModal?: (mode: 'login' | 'register') => void;
  onOpenProfileSettings?: (tab: 'profile' | 'settings') => void;
  onOpenPricingModal?: () => void;
  onOpenReferralModal?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onRoleSwitch,
  language,
  setLanguage,
  activeTestTitle,
  activeExamSlug,
  onOpenExamPortal,
  onOpenAuthModal,
  onOpenProfileSettings,
  onOpenPricingModal,
  onOpenReferralModal,
  onLogout,
}) => {
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setRoleMenuOpen(false);
      }
    };
    if (roleMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [roleMenuOpen]);

  // Yeh pata lagane ke liye ki abhi admin page par hain ya nahi
  const isAdminPage = activeTab === 'admin' || activeTab === 'control-center';
  const showStudentSidebar = currentUser?.role === 'STUDENT' && !isAdminPage;

  const targetExam = (
    activeExamSlug ||
    currentUser?.targetExamId ||
    localStorage.getItem('selected_exam_slug') ||
    localStorage.getItem('admin_selected_exam_slug') ||
    'jee-main'
  ).toLowerCase();
  const isSuperTet = targetExam.includes('super-tet');
  const isUptet = !isSuperTet && targetExam.includes('uptet');

  const examLabels: Record<string, string> = {
    'jee-main': 'JEE Main',
    'uptet': 'UPTET',
    'super-tet': 'SUPER TET',
    'neet-ug': 'NEET UG',
    'upsc-prelims': 'UPSC Prelims',
    'ssc-cgl-tier1': 'SSC CGL',
    'ssc-cgl': 'SSC CGL',
    'ctet': 'CTET',
    'rrb-ntpc': 'RRB NTPC',
    'gate-cs': 'GATE CS',
  };
  const examBadge = examLabels[targetExam] || targetExam.toUpperCase();

  // Navigation items: include Live Tests with pulsing live indicator
  const navItems = currentUser && !isAdminPage
    ? [
        { id: 'dashboard' as NavTab, label: `${examBadge} Dashboard`, icon: LayoutDashboard },
        {
          id: (isSuperTet ? 'super-tet' : isUptet ? 'uptet' : 'mock-tests') as NavTab,
          label: 'Mock Tests',
          icon: FileCheck2,
        },
        { id: 'live-tests' as NavTab, label: 'Live Tests', icon: Zap, isLive: true },
        { id: 'practice' as NavTab, label: 'Practice', icon: BookOpen },
        { id: 'performance' as NavTab, label: 'Performance', icon: BarChart2 },
      ]
    : !isAdminPage
    ? [
        { id: 'live-tests' as NavTab, label: 'Live Tests', icon: Zap, isLive: true },
      ]
    : [];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (tab === 'live-tests') {
      window.location.hash = '/live-tests';
    } else if (tab === 'control-center') {
      window.location.hash = '/control-center';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-tn-border shadow-xs">
      {showStudentSidebar && (
        <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:w-64 lg:flex-col bg-[#111827] px-4 py-5 text-slate-200 shadow-2xl">
          <button
            onClick={() => handleNavClick('dashboard')}
            className="flex items-center gap-3 px-2 text-left cursor-pointer"
          >
            <img src="/logo.jpg" alt="All in One Logo" className="h-10 w-10 rounded-xl bg-white p-0.5" />
            <div>
              <p className="text-sm font-extrabold tracking-tight text-white">All in <span className="text-violet-300">One</span></p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">CBT Station</p>
            </div>
          </button>

          <div className="mt-9 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Learning space</div>
          <nav className="mt-3 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 rounded-xl px-3 py-3 text-left text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-950/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${(item as any).isLive && !isActive ? 'text-rose-400' : ''}`} />
                  <span className="flex-1">{item.label.replace(`${examBadge} `, '')}</span>
                  {(item as any).isLive && <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto space-y-3 rounded-2xl border border-slate-700 bg-slate-800/80 p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Your preparation</p>
            <button onClick={onOpenPricingModal} className="flex w-full items-center gap-2 rounded-xl bg-violet-500/15 px-2.5 py-2 text-left text-xs font-semibold text-violet-200 hover:bg-violet-500/25 cursor-pointer">
              <Sparkles className="h-4 w-4 text-violet-300" /> Plans & access
            </button>
            <button onClick={onOpenReferralModal} className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-slate-300 hover:bg-slate-700 cursor-pointer">
              <Gift className="h-4 w-4 text-amber-300" /> Refer & earn
            </button>
          </div>
        </aside>
      )}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${showStudentSidebar ? 'lg:ml-[272px] lg:max-w-none' : ''}`}>
        <div className="flex items-center justify-between h-[68px] gap-3">
          
          {/* Left: Brand Logo */}
          <div className="flex min-w-0 items-center gap-4 lg:gap-7">
            <button
              onClick={() => handleNavClick(currentUser ? 'dashboard' : 'landing')}
              className="flex shrink-0 items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <img
                src="/logo.jpg"
                alt="All in One Logo"
                className="h-9 w-9 rounded-lg object-contain bg-white border border-slate-200 p-0.5 shadow-2xs transition-transform group-hover:scale-105"
              />
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-slate-900 tracking-tight">
                  All in <span className="text-emerald-700">One</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-600 rounded border border-slate-200">
                  CBT Station
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            {!isAdminPage ? (
              <nav className={`${showStudentSidebar ? 'hidden' : 'hidden md:flex'} min-w-0 items-center gap-1.5`}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'text-blue-600 bg-blue-50 font-semibold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${(item as any).isLive ? 'text-red-600' : ''}`} />
                      <span className="whitespace-nowrap">{item.label}</span>
                      {(item as any).isLive && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[9px] uppercase tracking-wider border border-red-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          LIVE
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            ) : (
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 text-xs font-bold bg-slate-900 text-emerald-400 rounded-md flex items-center gap-1.5 shadow-xs">
                  <Shield className="w-3.5 h-3.5" />
                  Control Center
                </span>
                <button
                  onClick={() => {
                    window.location.hash = '';
                    handleNavClick(currentUser ? 'dashboard' : 'landing');
                  }}
                  className="px-3 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
                >
                  ← Exit to Student Portal
                </button>
              </div>
            )}
          </div>

          {/* Right Controls */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            {/* Plans and Registration buttons */}
            {!isAdminPage && (
              <>
                <button
                  onClick={onOpenPricingModal}
                  className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Plans</span>
                </button>
              </>
            )}

            {/* Language Selector */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px] font-medium">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  language === 'en' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  language === 'hi' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                HI
              </button>
            </div>

            {/* Agar admin page hai toh Sign In / Register buttons hide rahenge */}
            {!isAdminPage && (
              currentUser ? (
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                    className="flex items-center gap-2 pl-2 pr-2.5 py-1.5 rounded-lg border border-tn-border bg-white hover:bg-slate-50 transition-colors text-left cursor-pointer shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-md bg-tn-blue text-white flex items-center justify-center font-bold text-[11px]">
                      {currentUser?.name?.charAt(0) || 'U'}
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs font-semibold text-zinc-900 leading-none">
                        {currentUser?.name || 'Candidate'}
                      </div>
                      <div className="text-[10px] text-emerald-700 font-semibold leading-tight mt-0.5">
                        {examBadge} Portal
                      </div>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-150 ${roleMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {roleMenuOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg shadow-zinc-200/50 border border-zinc-200/80 p-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      {/* User Header */}
                      <div className="px-3 py-2.5 mb-1 bg-zinc-50/80 rounded-lg border border-zinc-100">
                        <p className="text-xs font-bold text-zinc-900 truncate">{currentUser.name}</p>
                        <p className="text-[11px] text-zinc-500 truncate mt-0.5">{currentUser.email}</p>
                        <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          <span>{examBadge} Candidate</span>
                        </span>
                      </div>

                      {/* Menu Items */}
                      <div className="space-y-0.5">
                        <button
                          onClick={() => { setRoleMenuOpen(false); onOpenProfileSettings?.('profile'); }}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-800 hover:bg-zinc-100/80 transition-colors flex items-center gap-3 cursor-pointer"
                        >
                          <UserIcon className="w-4 h-4 text-zinc-600 shrink-0" />
                          <span>Candidate Profile</span>
                        </button>

                        <button
                          onClick={() => { setRoleMenuOpen(false); onOpenPricingModal?.(); }}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-800 hover:bg-zinc-100/80 transition-colors flex items-center gap-3 cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Plans & Subscriptions</span>
                        </button>

                        <button
                          onClick={() => { setRoleMenuOpen(false); onOpenReferralModal?.(); }}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-800 hover:bg-zinc-100/80 transition-colors flex items-center gap-3 cursor-pointer"
                        >
                          <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Refer & Earn Free Tests</span>
                        </button>

                        <button
                          onClick={() => { setRoleMenuOpen(false); onOpenProfileSettings?.('settings'); }}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-zinc-800 hover:bg-zinc-100/80 transition-colors flex items-center gap-3 cursor-pointer"
                        >
                          <Settings className="w-4 h-4 text-zinc-600 shrink-0" />
                          <span>CBT Simulator Settings</span>
                        </button>
                      </div>

                      {/* Divider & Sign Out */}
                      <div className="my-1 border-t border-zinc-100" />

                      <button
                        onClick={() => { setRoleMenuOpen(false); onLogout?.(); }}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-3 cursor-pointer"
                      >
                        <LogOut className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenAuthModal?.('login')}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 cursor-pointer flex items-center gap-1.5"
                  >
                    <LogIn className="w-3.5 h-3.5 text-slate-500" />
                    <span>Sign In</span>
                  </button>
                  <button
                    onClick={() => onOpenAuthModal?.('register')}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Register</span>
                  </button>
                </div>
              )
            )}

            {/* Mobile Hamburger Menu Button */}
            {!isAdminPage && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && !isAdminPage && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium cursor-pointer ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${(item as any).isLive ? 'text-red-600' : ''}`} />
                  <span>{item.label}</span>
                </div>
                {(item as any).isLive && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[9px] uppercase tracking-wider border border-red-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    LIVE
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-200 mt-2 space-y-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPricingModal?.();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-amber-800 bg-amber-50 rounded-lg border border-amber-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Plans & Pricing</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReferralModal?.();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200 cursor-pointer"
            >
              <Gift className="w-4 h-4 text-emerald-600" />
              <span>Refer Friends & Earn Free Tests</span>
            </button>

            {currentUser ? (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfileSettings?.('profile');
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium text-zinc-800 hover:bg-zinc-100/80 rounded-lg transition-colors cursor-pointer"
                >
                  <UserIcon className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span>Candidate Profile</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfileSettings?.('settings');
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium text-zinc-800 hover:bg-zinc-100/80 rounded-lg transition-colors cursor-pointer"
                >
                  <Settings className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span>CBT Simulator Settings</span>
                </button>

                <div className="my-1 border-t border-zinc-100" />

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout?.();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <div className="space-y-2 pt-1">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuthModal?.('login');
                    }}
                    className="py-2 text-center text-xs font-semibold border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuthModal?.('register');
                    }}
                    className="py-2 text-center text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
