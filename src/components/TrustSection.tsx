interface TrustStatement {
  number: string;
  headline: string;
  supporting: string;
}

const STATEMENTS: TrustStatement[] = [
  {
    number: '01',
    headline: 'Built and run by hands-on operators, not account managers.',
    supporting:
      'You work directly with the person doing the work, not a layer of account management.',
  },
  {
    number: '02',
    headline: 'Every system is custom.',
    supporting:
      'No templated automations or copy-paste playbooks — every build starts from your actual business, not a template.',
  },
  {
    number: '03',
    headline: 'Direct access to the person doing the work.',
    supporting:
      'No handoffs between sales and delivery teams; the person who scopes it also builds it.',
  },
  {
    number: '04',
    headline: 'Transparent reporting from day one.',
    supporting:
      "You see exactly what's been built, what's live, and what it's doing — no black-box dashboards.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-28 sm:py-32 md:py-36 lg:py-40 border-t border-black/[0.06]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Section Title: Left-aligned, matching other section titles */}
        <h2
          id="trust-heading"
          className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A] mb-16 sm:mb-24 md:mb-28 text-left"
        >
          Why work with us
        </h2>

        {/* Staggered / Offset Arrangement (deliberately not a uniform 4-column grid) */}
        <div id="trust-statements" className="space-y-16 sm:space-y-24 md:space-y-28">
          {/* Pair 1: Statement 01 (wide left) & Statement 02 (offset right, vertically shifted) */}
          <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* 01 Statement */}
            <div
              id="trust-statement-01"
              className="col-span-12 lg:col-span-7 max-w-2xl"
            >
              <span className="font-body text-xs sm:text-sm font-medium tabular-nums text-neutral-400 block mb-3 sm:mb-4">
                {STATEMENTS[0].number}
              </span>
              <h3 className="font-headline font-medium text-2xl sm:text-3xl lg:text-[32px] leading-tight tracking-[-0.02em] text-[#1A1A1A]">
                {STATEMENTS[0].headline}
              </h3>
              <p className="font-body text-base sm:text-[17px] text-neutral-500 leading-relaxed mt-4 sm:mt-5 max-w-xl">
                {STATEMENTS[0].supporting}
              </p>
            </div>

            {/* 02 Statement (Staggered offset column on desktop) */}
            <div
              id="trust-statement-02"
              className="col-span-12 lg:col-span-5 lg:pt-16 max-w-lg lg:ml-auto"
            >
              <span className="font-body text-xs sm:text-sm font-medium tabular-nums text-neutral-400 block mb-3 sm:mb-4">
                {STATEMENTS[1].number}
              </span>
              <h3 className="font-headline font-medium text-2xl sm:text-3xl lg:text-[32px] leading-tight tracking-[-0.02em] text-[#1A1A1A]">
                {STATEMENTS[1].headline}
              </h3>
              <p className="font-body text-base sm:text-[17px] text-neutral-500 leading-relaxed mt-4 sm:mt-5">
                {STATEMENTS[1].supporting}
              </p>
            </div>
          </div>

          {/* Pair 2: Statement 03 (compact left) & Statement 04 (wide right, offset vertically) */}
          <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* 03 Statement */}
            <div
              id="trust-statement-03"
              className="col-span-12 lg:col-span-5 max-w-lg"
            >
              <span className="font-body text-xs sm:text-sm font-medium tabular-nums text-neutral-400 block mb-3 sm:mb-4">
                {STATEMENTS[2].number}
              </span>
              <h3 className="font-headline font-medium text-2xl sm:text-3xl lg:text-[32px] leading-tight tracking-[-0.02em] text-[#1A1A1A]">
                {STATEMENTS[2].headline}
              </h3>
              <p className="font-body text-base sm:text-[17px] text-neutral-500 leading-relaxed mt-4 sm:mt-5">
                {STATEMENTS[2].supporting}
              </p>
            </div>

            {/* 04 Statement (Staggered offset column on desktop) */}
            <div
              id="trust-statement-04"
              className="col-span-12 lg:col-span-7 lg:pt-12 max-w-2xl lg:pl-4"
            >
              <span className="font-body text-xs sm:text-sm font-medium tabular-nums text-neutral-400 block mb-3 sm:mb-4">
                {STATEMENTS[3].number}
              </span>
              <h3 className="font-headline font-medium text-2xl sm:text-3xl lg:text-[32px] leading-tight tracking-[-0.02em] text-[#1A1A1A]">
                {STATEMENTS[3].headline}
              </h3>
              <p className="font-body text-base sm:text-[17px] text-neutral-500 leading-relaxed mt-4 sm:mt-5 max-w-xl">
                {STATEMENTS[3].supporting}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
