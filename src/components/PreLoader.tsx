import { useState, useEffect } from 'react';

interface PreLoaderProps {
  onComplete?: () => void;
  minDisplayTimeMs?: number;
}

export default function PreLoader({
  onComplete,
  minDisplayTimeMs = 700,
}: PreLoaderProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout | number;
    let unmountTimeout: NodeJS.Timeout | number;

    fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
      unmountTimeout = setTimeout(() => {
        setIsMounted(false);
        if (onComplete) onComplete();
      }, 400);
    }, minDisplayTimeMs);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(unmountTimeout);
    };
  }, [minDisplayTimeMs, onComplete]);

  if (!isMounted) return null;

  return (
    <div
      id="brand-preloader"
      aria-label="Loading"
      role="status"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#FAF9F6] transition-all duration-400 ease-out select-none ${
        isFadingOut ? 'opacity-0 scale-[1.03] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Animated Brand Glow */}
        <div
          className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#C84826]/18 blur-2xl animate-pulse"
          aria-hidden="true"
        />

        {/* Standalone Brand Icon */}
        <img
          src="/favicon.png"
          alt="GrowthTechSys"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain relative z-10 transition-transform duration-300 drop-shadow-[0_10px_25px_rgba(200,72,38,0.32)] animate-pulse"
        />
      </div>
    </div>
  );
}
