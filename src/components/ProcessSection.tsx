import { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  isPayoff?: boolean;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business, goals, and where AI can create leverage',
  },
  {
    number: '02',
    title: 'Define',
    description: "Map the exact systems, workflows, and outcomes we're building toward",
  },
  {
    number: '03',
    title: 'Design',
    description: 'Architect the automation, content, or outreach system end to end',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build, integrate, and test everything against real scenarios',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Launch, monitor, and refine based on real performance data',
    isPayoff: true,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start highlighting when section comes into view and complete as it scrolls past center
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.25;
      const totalDistance = rect.height + (startTrigger - endTrigger);
      const scrolled = startTrigger - rect.top;
      const calculated = Math.min(Math.max(scrolled / totalDistance, 0), 1);
      setProgress(calculated);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-28 sm:py-32 md:py-36 lg:py-40"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Section Title: Left-aligned, matching other section titles */}
        <h2
          id="process-heading"
          className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A] mb-16 sm:mb-20 md:mb-24 text-left"
        >
          How we work
        </h2>

        {/* SEQUENCE CONTAINER */}
        <div id="process-sequence" className="relative w-full">
          {/* Connecting line on desktop (horizontal, runs behind the numbers) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[11px] left-0 right-0 h-[1px] bg-black/15 z-0"
          >
            <div
              className="h-full bg-[#C84826] transition-all duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          {/* Connecting line on mobile (vertical, runs behind the numbers) */}
          <div
            aria-hidden="true"
            className="md:hidden absolute top-[10px] bottom-[10px] left-[13px] w-[1px] bg-black/15 z-0"
          >
            <div
              className="w-full bg-[#C84826] transition-all duration-150 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* 5 Steps: horizontal sequence on desktop, stacked vertically on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 lg:gap-8 xl:gap-10 relative z-10">
            {STEPS.map((step, index) => {
              // Calculate if this step is active/passed based on progress
              const stepThreshold = index / (STEPS.length - 1);
              const isStepActive = progress >= stepThreshold;

              return (
                <div
                  key={step.number}
                  id={`process-step-${step.number}`}
                  className="flex flex-row md:flex-col items-start gap-5 md:gap-0"
                >
                  {/* Two-digit number (01-05): sits cleanly on the connecting line */}
                  <div className="shrink-0 flex items-center mb-0 md:mb-6 h-[22px]">
                    <span
                      className={`inline-block font-body text-xs sm:text-sm font-medium tabular-nums select-none bg-[#FAF9F6] pr-3 md:px-2 md:-ml-2 transition-colors duration-300 ${
                        isStepActive ? 'text-[#C84826]' : 'text-neutral-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title & Description: Plain text, no card containers, no icons */}
                  <div className="flex-1">
                    <h3
                      className={`font-headline leading-tight tracking-[-0.02em] mb-2 sm:mb-3 transition-colors duration-200 ${
                        step.isPayoff
                          ? 'text-xl sm:text-2xl md:text-[25px] font-medium text-[#1A1A1A]'
                          : 'text-xl sm:text-2xl md:text-[23px] font-normal sm:font-medium text-[#1A1A1A]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`font-body text-sm leading-relaxed ${
                        step.isPayoff ? 'text-neutral-600' : 'text-neutral-500'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
