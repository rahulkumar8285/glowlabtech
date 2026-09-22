import { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  isPayoff?: boolean;
  icon: string;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business, goals, and where AI can create leverage',
    icon: '01-discover',
  },
  {
    number: '02',
    title: 'Define',
    description: "Map the exact systems, workflows, and outcomes we're building toward",
    icon: '02-define',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Architect the automation, content, or outreach system end to end',
    icon: '03-design',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build, integrate, and test everything against real scenarios',
    icon: '04-develop',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Launch, monitor, and refine based on real performance data',
    isPayoff: true,
    icon: '05-deliver',
  },
];

export default function ProcessSection({
  onNavigate: _onNavigate,
}: {
  onNavigate?: (path: string) => void;
} = {}) {
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
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-14 sm:py-18 md:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Section Title: Left-aligned, matching other section titles */}
        <h2
          id="process-heading"
          className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A] mb-8 sm:mb-10 md:mb-12 text-left"
        >
          How we work
        </h2>

        {/* Visual 5-Step Process Flow Diagram */}
        <div
          id="process-flow-diagram-wrapper"
          className="w-full max-w-5xl mb-8 sm:mb-10 md:mb-14 select-none"
        >
          <img
            src="/images/process-flow-diagram.webp"
            alt="5-step connected process diagram: Discover, Define, Design, Develop, Deliver"
            width={924}
            height={144}
            loading="lazy"
            className="w-full h-auto object-contain block"
          />
        </div>

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

          {/* Connecting line on mobile (vertical, runs behind the node column at left-[15px]) */}
          <div
            aria-hidden="true"
            className="md:hidden absolute top-[14px] bottom-[24px] left-[15px] w-[2px] bg-black/10 z-0"
          >
            <div
              className="w-full bg-[#C84826] transition-all duration-150 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* 5 Steps: horizontal sequence on desktop, stacked vertically on mobile */}
          <div className="flex flex-col md:grid md:grid-cols-5 gap-7 sm:gap-8 md:gap-5 lg:gap-6 xl:gap-8 relative z-10">
            {STEPS.map((step, index) => {
              // Calculate if this step is active/passed based on progress
              const stepThreshold = index / (STEPS.length - 1);
              const isStepActive = progress >= stepThreshold;

              return (
                <div
                  key={step.number}
                  id={`process-step-${step.number}`}
                  className="flex flex-row md:flex-col items-start gap-4 sm:gap-5 md:gap-0"
                >
                  {/* Two-digit indicator: circular icon badge on mobile, text on desktop line */}
                  <div className="shrink-0 flex items-center justify-center mb-0 md:mb-4">
                    {/* Mobile circular illustrated icon */}
                    <div
                      className={`md:hidden w-8 h-8 rounded-full flex items-center justify-center select-none bg-[#FAF9F6] transition-all duration-300 ${
                        isStepActive
                          ? 'ring-2 ring-[#C84826]/40 scale-105'
                          : 'opacity-85'
                      }`}
                    >
                      <img
                        src={`/images/process-icons/${step.icon}.webp`}
                        alt=""
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Desktop numeral */}
                    <span
                      className={`hidden md:inline-block font-body text-xs sm:text-sm font-medium tabular-nums select-none bg-[#FAF9F6] px-2 -ml-2 transition-colors duration-300 ${
                        isStepActive ? 'text-[#C84826]' : 'text-neutral-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title & Description */}
                  <div className="flex-1 pt-0.5 md:pt-0 text-left">
                    <h3
                      className={`font-headline leading-tight tracking-[-0.02em] mb-1.5 sm:mb-2 transition-colors duration-200 ${
                        step.isPayoff
                          ? 'text-lg sm:text-2xl md:text-[25px] font-medium text-[#1A1A1A]'
                          : 'text-lg sm:text-2xl md:text-[23px] font-medium text-[#1A1A1A]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`font-body text-xs sm:text-sm leading-relaxed ${
                        step.isPayoff ? 'text-neutral-600 font-medium sm:font-normal' : 'text-neutral-500'
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

