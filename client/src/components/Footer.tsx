import React from 'react';
import { ShieldCheck, Shield, Lock, FileText, HelpCircle } from 'lucide-react';
import { NavTab } from './Header';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenExamPortal?: (slug: string) => void;
  onOpenLegal?: (type: 'terms' | 'privacy' | 'refund' | 'support') => void;
  onOpenPricing?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenExamPortal,
  onOpenLegal,
  onOpenPricing,
}) => {
  const portalLinks = [
    { slug: 'jee-main', label: 'JEE Main Portal' },
    { slug: 'uptet', label: 'UPTET (2016–2025)' },
    { slug: 'super-tet', label: 'SUPER TET (2012–2025)' },
    { slug: 'neet-ug', label: 'NEET UG Portal' },
    { slug: 'upsc-prelims', label: 'UPSC CSE Prelims' },
    { slug: 'ssc-cgl-tier1', label: 'SSC CGL Tier 1' },
    { slug: 'gate-cs', label: 'GATE CS' },
  ];

  return (
    <footer className="bg-white border-t border-tn-border mt-16 text-xs text-tn-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-100">
          {/* Col 1: Brand Info */}
          <div className="space-y-3 md:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center p-1 overflow-hidden shrink-0">
                <img
                  src="/logo.jpg"
                  alt="All in One"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-extrabold text-tn-navy block leading-tight">
                  All in <span className="text-emerald-700">One</span>
                </span>
                <span className="text-[10px] font-medium text-slate-500">CBT Station</span>
              </div>
            </div>
            <p className="text-xs text-tn-muted leading-relaxed">
              Multi-examination Computer-Based Test (CBT) simulator, verified Previous Year Question archive, and readiness analytics platform.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>256-bit SSL Secure Checkout</span>
            </div>
          </div>

          {/* Col 2: Examination Portals */}
          <div className="space-y-2 md:col-span-3">
            <p className="text-xs font-semibold text-tn-text uppercase tracking-wider">
              Examination Portals
            </p>
            <ul className="grid grid-cols-1 gap-1.5">
              {portalLinks.map((p) => (
                <li key={p.slug}>
                  <button
                    onClick={() => (onOpenExamPortal ? onOpenExamPortal(p.slug) : onNavigate('landing'))}
                    className="hover:text-tn-blue transition-colors cursor-pointer text-left"
                  >
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Plans & Legal */}
          <div className="space-y-2 md:col-span-2">
            <p className="text-xs font-semibold text-tn-text uppercase tracking-wider">
              Plans & Legal
            </p>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={onOpenPricing}
                  className="hover:text-tn-blue text-amber-700 font-semibold transition-colors cursor-pointer text-left"
                >
                  Exam Pricing Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal?.('terms')}
                  className="hover:text-tn-blue transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal?.('privacy')}
                  className="hover:text-tn-blue transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal?.('refund')}
                  className="hover:text-tn-blue transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>7-Day Refund Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal?.('support')}
                  className="hover:text-tn-blue transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>Help & Support</span>
                </button>
              </li>
              <li className="pt-1.5 border-t border-slate-100">
                <button
                  onClick={() => {
                    window.location.hash = '/control-center';
                    onNavigate('control-center');
                  }}
                  className="hover:text-indigo-600 text-slate-700 font-semibold transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Control Center (Admin)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Independence Disclaimer */}
          <div className="space-y-2 md:col-span-3">
            <p className="text-xs font-semibold text-tn-text uppercase tracking-wider">
              Disclaimer
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              All in One – CBT Station is an independent EdTech platform. Archived previous year questions are compiled strictly from publicly available records and marked with verification status. Not affiliated with NTA, UPSC, SSC, UPBEB/UPESSC, or IITs.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>© 2026 All in One – CBT Station. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-slate-600 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-slate-600 transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal?.('refund')}
              className="hover:text-slate-600 transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            <span>•</span>
            <button
              onClick={() => {
                window.location.hash = '/control-center';
                onNavigate('control-center');
              }}
              className="hover:text-indigo-600 text-slate-500 font-medium transition-colors cursor-pointer flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-slate-400" />
              <span>Control Center</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
