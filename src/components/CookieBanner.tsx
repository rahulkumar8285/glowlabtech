import { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user already made a choice
    try {
      const savedConsent = localStorage.getItem('growthtechsys_cookie_consent') || localStorage.getItem('glowlab_cookie_consent');
      if (!savedConsent) {
        // Small delay for smooth entry after page loads
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access restricted (e.g. incognito or iframe)
      setIsVisible(true);
    }

    // Listen for footer "Cookies" click to re-open preferences
    const handleReopen = () => {
      setIsVisible(true);
      setShowDetails(true);
    };

    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => window.removeEventListener('open-cookie-preferences', handleReopen);
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('growthtechsys_cookie_consent', 'accepted');
      localStorage.setItem('growthtechsys_cookie_analytics', 'true');
      localStorage.setItem('growthtechsys_cookie_marketing', 'true');
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleDeclineNonEssential = () => {
    try {
      localStorage.setItem('growthtechsys_cookie_consent', 'essential_only');
      localStorage.setItem('growthtechsys_cookie_analytics', 'false');
      localStorage.setItem('growthtechsys_cookie_marketing', 'false');
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative w-full bg-[#141413]/95 backdrop-blur-md text-[#FAF9F6] border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-32 h-32 bg-[#C84826]/10 rounded-full blur-2xl pointer-events-none"
        />

        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#C84826]/15 flex items-center justify-center text-[#C84826] shrink-0 border border-[#C84826]/20">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-headline font-semibold text-sm sm:text-[15px] text-[#FAF9F6] leading-snug">
                We Store Cookies
              </h3>
              <p className="font-body text-[11px] text-neutral-400">
                GrowthTechSys Privacy &amp; Data
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close cookie banner"
            className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Body */}
        <p className="font-body text-xs sm:text-[13px] text-neutral-300 leading-relaxed mb-4 relative z-10">
          We store cookies on your device to enhance site navigation, analyze performance, and ensure our AI systems and client experiences run reliably.
        </p>

        {/* Optional Expandable Preferences Details */}
        {showDetails && (
          <div className="mb-4 pt-3 border-t border-white/10 space-y-2.5 text-xs font-body text-neutral-300 relative z-10">
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#C84826]" />
                <span className="font-medium text-neutral-200">Strictly Necessary</span>
              </div>
              <span className="text-[11px] text-neutral-400 font-medium">Always Active</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-medium text-neutral-200">Analytics &amp; Performance</span>
              </div>
              <span className="text-[11px] text-neutral-400">Optional</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 pt-1 relative z-10">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="w-full sm:flex-1 inline-flex items-center justify-center font-body font-medium text-xs sm:text-[13px] text-white bg-[#C84826] hover:bg-[#B33E1D] active:scale-[0.98] px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm select-none"
          >
            Accept All
          </button>

          <button
            type="button"
            onClick={handleDeclineNonEssential}
            className="w-full sm:flex-1 inline-flex items-center justify-center font-body font-medium text-xs sm:text-[13px] text-neutral-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 active:scale-[0.98] px-3.5 py-2.5 rounded-full transition-all duration-200 cursor-pointer select-none"
          >
            Essential Only
          </button>

          {!showDetails && (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="text-[11px] text-neutral-400 hover:text-neutral-200 underline underline-offset-2 py-1 transition-colors text-center cursor-pointer select-none sm:hidden"
            >
              Preferences
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
