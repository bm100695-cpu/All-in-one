import React, { useState } from 'react';
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

  // Yeh pata lagane ke liye ki abhi admin page par hain ya nahi
  const isAdminPage = activeTab === 'admin' || activeTab === 'control-center';

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
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => handleNavClick(currentUser ? 'dashboard' : 'landing')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
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
              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer ${
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
          <div className="flex items-center gap-2.5 sm:gap-3">
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
                <div className="relative">
                  <button
                    onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                    className="flex items-center gap-2 pl-2 pr-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <div className="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-[11px]">
                      {currentUser?.name?.charAt(0) || 'U'}
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-xs font-semibold text-slate-800 leading-none">
                        {currentUser?.name || 'Student'}
                      </div>
                      <div className="text-[10px] text-emerald-700 font-semibold leading-tight mt-0.5">
                        {examBadge} Portal
                      </div>
                    </div>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </button>

                  {roleMenuOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50">
                      <div className="px-3 py-2 border-b border-slate-100">
                        <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                        <p className="text-[10px] text-slate-500 truncate">{currentUser.email}</p>
                      </div>
                      <div className="p-1 border-b border-slate-100 space-y-0.5">
                        <button
                          onClick={() => { setRoleMenuOpen(false); onOpenPricingModal?.(); }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer font-medium"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          <span>Plans & Subscriptions</span>
                        </button>
                        <button
                          onClick={() => { setRoleMenuOpen(false); onOpenReferralModal?.(); }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer font-medium"
                        >
                          <Gift className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Refer & Earn Free Tests</span>
                        </button>
                        <button
                          onClick={() => { setRoleMenuOpen(false); onOpenProfileSettings?.('profile'); }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                        >
                          <UserIcon className="w-3.5 h-3.5 text-slate-400" />
                          <span>Candidate Profile</span>
                        </button>
                      </div>
                      <div className="p-1 pt-1 border-t border-slate-100">
                        <button
                          onClick={() => { setRoleMenuOpen(false); onLogout?.(); }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer font-semibold"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
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
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  <UserIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>Candidate Profile</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfileSettings?.('settings');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  <Settings className="w-3.5 h-3.5 text-slate-500" />
                  <span>CBT Simulator Settings</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout?.();
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <LogOut className="w-3.5 h-3.5" />
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