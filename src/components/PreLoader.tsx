import { useState, useEffect } from 'react';

interface PreLoaderProps {
  onComplete?: () => void;
  minDisplayTimeMs?: number;
}

export default function PreLoader({
  onComplete,
  minDisplayTimeMs = 850,
}: PreLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout | number;
    let unmountTimeout: NodeJS.Timeout | number;
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / minDisplayTimeMs) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        fadeTimeout = setTimeout(() => {
          setIsFadingOut(true);
          unmountTimeout = setTimeout(() => {
            setIsMounted(false);
            if (onComplete) onComplete();
          }, 500);
        }, 120);
      }
    }, 18);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
      clearTimeout(unmountTimeout);
    };
  }, [minDisplayTimeMs, onComplete]);

  if (!isMounted) return null;

  return (
    <div
      id="brand-preloader"
      aria-label="Loading GrowthTechSys"
      role="status"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#FAF9F6] transition-all duration-500 ease-out select-none ${
        isFadingOut ? 'opacity-0 scale-[1.015] pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center px-6">
        {/* Animated Brand Emblem with Terracotta Glow */}
        <div className="relative flex items-center justify-center mb-5">
          <div
            className="absolute w-24 h-24 rounded-full bg-[#C84826]/12 blur-2xl animate-pulse"
            aria-hidden="true"
          />
          <img
            src="/favicon.png"
            alt="GrowthTechSys"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain relative z-10 transition-transform duration-300 drop-shadow-[0_8px_20px_rgba(200,72,38,0.28)]"
          />
        </div>

        {/* Brand Name */}
        <div className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-[-0.02em]">
          GrowthTechSys
        </div>

        {/* Sub-label */}
        <div className="font-body text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-neutral-400 mt-1.5 mb-7">
          AI Systems &amp; Field Telematics
        </div>

        {/* Brand-Colored Progress Bar Track */}
        <div className="w-48 sm:w-56 h-[3px] bg-black/[0.06] rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-[#C84826] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(200,72,38,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numerical Percentage */}
        <div className="font-body text-[11px] font-medium text-neutral-400 mt-3 tabular-nums">
          {progress}%
        </div>
      </div>
    </div>
  );
}
