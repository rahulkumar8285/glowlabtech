export default function FinalCTASection({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
} = {}) {

  return (
    <section
      id="final-cta-section"
      className="relative w-full bg-[#111110] text-[#FAF9F6] py-14 sm:py-18 md:py-20 lg:py-24 overflow-hidden scroll-mt-20"
    >
      {/* Subtle monochrome grain texture overlay for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
        <div className="max-w-4xl text-left">
          {/* Large headline */}
          <h2
            id="final-cta-headline"
            className="font-headline font-normal sm:font-medium text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.08] sm:leading-[1.06] tracking-[-0.03em] text-[#FAF9F6]"
          >
            Have a project in mind?
          </h2>

          {/* One-line subheadline in Inter, muted light gray */}
          <p
            id="final-cta-subheadline"
            className="font-body font-normal text-sm sm:text-lg md:text-[20px] text-neutral-400 leading-relaxed max-w-2xl mt-3 sm:mt-5 mb-6 sm:mb-8"
          >
            Tell us what you're trying to build — we'll tell you exactly how AI fits in.
          </p>

          {/* Single solid pill CTA button - full width on mobile for effortless thumb tap */}
          <div>
            <a
              href="/contact"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/contact');
                }
              }}
              id="final-cta-button"
              className="w-full sm:w-auto inline-flex items-center justify-center font-body font-medium text-sm sm:text-base text-white bg-[#C84826] hover:bg-[#B33E1D] active:bg-[#9E3416] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-200 cursor-pointer select-none shadow-md active:scale-[0.98]"
            >
              Book a strategy call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
