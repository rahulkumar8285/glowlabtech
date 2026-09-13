interface TrustStatement {
  headline: string;
  supporting: string;
}

const STATEMENTS: TrustStatement[] = [
  {
    headline: 'Built and run by hands-on operators, not account managers.',
    supporting:
      'You work directly with the systems engineer doing the actual build, not an account manager relaying briefs.',
  },
  {
    headline: 'Every system is custom engineered.',
    supporting:
      'No fragile copy-paste templates. Every workflow is tailored directly around your actual tech stack and business objectives.',
  },
  {
    headline: 'Direct access to the person doing the work.',
    supporting:
      'No handoffs between sales and delivery teams; the engineer who scopes your system also deploys and tests it.',
  },
  {
    headline: 'Transparent reporting from day one.',
    supporting:
      "You see exactly what's been built, what's live, and what it's doing — with real telemetry and zero black-box promises.",
  },
];

export default function TrustSection({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) {
  return (
    <section
      id="trust-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-14 sm:py-18 md:py-20 lg:py-24 border-t border-black/[0.06] scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
          <h2
            id="trust-heading"
            className="font-headline font-normal sm:font-medium text-2xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A]"
          >
            Why work with us
          </h2>

          <a
            href="/about"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/about');
              }
            }}
            className="group relative inline-flex items-center font-body text-sm sm:text-[15px] font-medium text-[#1A1A1A] cursor-pointer self-start sm:self-auto"
          >
            <span className="relative py-1">
              Read our story →
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#1A1A1A] transition-all duration-300 ease-out group-hover:w-full" />
            </span>
          </a>
        </div>

        {/* Organized 2x2 Grid with hairline borders and smooth hover */}
        <div
          id="trust-statements"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
        >
          {STATEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 md:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] hover:border-black/30 transition-colors duration-200"
            >
              <h3 className="font-headline font-medium text-lg sm:text-2xl text-[#1A1A1A] leading-tight mb-2 sm:mb-3">
                {item.headline}
              </h3>
              <p className="font-body text-xs sm:text-base text-neutral-600 leading-relaxed">
                {item.supporting}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
