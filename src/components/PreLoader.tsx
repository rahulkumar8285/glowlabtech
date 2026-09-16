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
        {/* Clean Logo */}
        <img
          src="/favicon.png"
          alt="GrowthTechSys"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
        />
      </div>
    </div>
  );
}
