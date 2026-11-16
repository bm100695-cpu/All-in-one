import React from 'react';
import { X, ShieldCheck, FileText, RotateCcw, Mail, HelpCircle } from 'lucide-react';

export type LegalDocType = 'terms' | 'privacy' | 'refund' | 'contact' | 'support' | null;

interface LegalModalProps {
  type: LegalDocType;
  isOpen?: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, isOpen = true, onClose }) => {
  if (!isOpen || !type) return null;

  const isContactOrSupport = type === 'contact' || type === 'support';

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-modal border border-tn-border overflow-hidden my-6">
        {/* Header */}
        <div className="px-6 py-4 bg-tn-navy text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            {type === 'terms' && <FileText className="w-5 h-5 text-tn-blue" />}
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
            {type === 'refund' && <RotateCcw className="w-5 h-5 text-amber-400" />}
            {isContactOrSupport && <Mail className="w-5 h-5 text-indigo-400" />}
            <div>
              <h2 className="text-base font-bold capitalize">
                {type === 'terms' && 'Terms and Conditions'}
                {type === 'privacy' && 'Privacy Policy'}
                {type === 'refund' && 'Refund & Cancellation Policy'}
                {isContactOrSupport && 'Contact Academic Support'}
              </h2>
              <p className="text-[11px] text-slate-300">All in One EdTech Platform • Legal & Regulatory Compliance</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed">
          {type === 'terms' && (
            <>
              <p className="font-semibold text-tn-navy">Effective Date: November 2026</p>
              <h3 className="font-bold text-slate-900">1. Acceptance of Terms</h3>
              <p>
                By accessing All in One or creating an aspirant account, you agree to comply with and be bound by these Terms and Conditions. All in One provides Computer-Based Test (CBT) mock exam simulation software for academic preparation.
              </p>
              <h3 className="font-bold text-slate-900">2. Intellectual Property & Exam Questions</h3>
              <p>
                Previous Year Question (PYQ) papers compiled on All in One originate from official public domain records of public examinations (including NTA JEE Main). All in One does not claim official affiliation with, sponsorship by, or endorsement from the National Testing Agency (NTA).
              </p>
              <h3 className="font-bold text-slate-900">3. User Conduct</h3>
              <p>
                Candidates agree to use the platform solely for lawful academic self-assessment. Sharing credentials, reverse-engineering test engines, or scraping questions is strictly prohibited.
              </p>
              <h3 className="font-bold text-slate-900">4. Disclaimer of Exam Outcome Guarantees</h3>
              <p>
                All in One provides rigorous practice tools. While our scoring mirrors official patterns, All in One does not guarantee admission to any university, percentile score, or examination rank.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p className="font-semibold text-tn-navy">Last Updated: November 2026</p>
              <h3 className="font-bold text-slate-900">1. Information We Collect</h3>
              <p>
                We collect your name, email address, password hash, target examination preferences, and test attempt records (responses, time spent, scores, and mistake journal entries) to provide detailed analytics.
              </p>
              <h3 className="font-bold text-slate-900">2. Payment Information Security</h3>
              <p>
                All in One processes subscription payments securely via Razorpay. All in One never stores complete credit/debit card numbers, CVVs, or netbanking passwords on our servers. All transactions are protected by bank-grade 256-bit encryption.
              </p>
              <h3 className="font-bold text-slate-900">3. Data Sharing & Third Parties</h3>
              <p>
                We strictly do not sell, rent, or trade your personal academic information or email to third-party telemarketers or advertisers.
              </p>
              <h3 className="font-bold text-slate-900">4. Account Deletion</h3>
              <p>
                You may request complete deletion of your account and test history at any time by contacting our support team at support@allinone.edu.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p className="font-semibold text-tn-navy">Standard 7-Day Money-Back Guarantee</p>
              <h3 className="font-bold text-slate-900">1. Refund Eligibility</h3>
              <p>
                We want you to be completely satisfied with your exam preparation. If you purchased the ₹99 Test Pack or ₹149 Premium Monthly subscription and are not satisfied with the simulator, you can request a 100% full refund within <strong>7 days</strong> of your transaction date.
              </p>
              <h3 className="font-bold text-slate-900">2. Refund Process</h3>
              <p>
                To request a refund, simply send an email to <strong className="text-tn-blue font-mono">refunds@allinone.edu</strong> or contact your student advisor with your Razorpay payment ID (e.g. <code>pay_...</code>) or order ID.
              </p>
              <h3 className="font-bold text-slate-900">3. Credit Timeline</h3>
              <p>
                Upon review, verified refunds are initiated immediately and credited back to the original payment source (UPI, Credit/Debit card, or Netbanking) within 5 to 7 business days, in accordance with standard RBI and Razorpay processing guidelines.
              </p>
              <h3 className="font-bold text-slate-900">4. Access Revocation</h3>
              <p>
                Upon processing a refund, the associated premium entitlements and test pack access are safely revoked, returning your account to the Free Starter Plan.
              </p>
            </>
          )}

          {isContactOrSupport && (
            <>
              <p className="font-semibold text-tn-navy">All in One Academic Support Desk</p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-tn-blue" />
                  <div>
                    <p className="font-bold text-slate-900">Email Support</p>
                    <p className="text-slate-600 font-mono text-[11px]">support@allinone.edu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-bold text-slate-900">Billing & Refunds Desk</p>
                    <p className="text-slate-600 font-mono text-[11px]">refunds@allinone.edu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">Academic Review Board</p>
                    <p className="text-slate-600 font-mono text-[11px]">academic-review@allinone.edu</p>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                Operating Hours: Monday – Saturday, 9:00 AM to 8:00 PM IST. Typical email turnaround is within 4 to 6 hours.
              </p>
            </>
          )}
        </div>

        {/* Action Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-tn-navy hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
