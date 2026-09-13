import { useEffect } from 'react';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

export default function AboutPage({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) {
  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'About GlowLab Tech — Software & AI Product Agency',
      description:
        'A specialized team of operators, engineers, and strategists building custom software, applied AI systems, and digital products for real businesses.',
      canonicalUrl: 'https://glowlabtech.com/about',
      ogType: 'website',
    });
    return cleanup;
  }, []);
  return (
    <div id="about-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="about-header"
        title="We build AI systems / that actually work."
        subtitle="A small team of operators, engineers, and strategists — obsessed with making AI useful for real businesses."
      />

      {/* SECTION 1 — MANIFESTO / WHO WE ARE */}
      <section
        id="about-manifesto-section"
        className="w-full py-10 sm:py-18 md:py-20 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left column (~60% width): 3-4 short editorial paragraphs in plain, confident first-person */}
            <div className="col-span-12 lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <p className="font-body text-base sm:text-xl md:text-[22px] text-[#1A1A1A] leading-[1.6] font-normal">
                Most agencies talk about AI. We actually build it — for
                businesses that don't have time to figure out which tools are
                worth using and which are just noise.
              </p>
              <p className="font-body text-sm sm:text-[17px] text-neutral-600 leading-relaxed">
                We started this because we kept seeing the same problem:
                businesses spending money on ads, outreach, and content that
                wasn't working — not because the strategy was wrong, but because
                the systems behind it were too slow, too manual, and too
                expensive to iterate on.
              </p>
              <p className="font-body text-sm sm:text-[17px] text-neutral-600 leading-relaxed">
                AI fixes that. But only if someone builds it properly, for your
                specific business — not a templated workflow copied from a
                YouTube tutorial.
              </p>
              <p className="font-headline font-medium text-lg sm:text-2xl text-[#1A1A1A] pt-2">
                That's what we do.
              </p>
            </div>

            {/* Right column (~40% width): GlowLab Tech Studio & Workstation */}
            <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[9/15] sm:aspect-[9/14] lg:aspect-[9/14] overflow-hidden bg-neutral-200 rounded-2xl border border-black/10 shadow-xl group">
                <img
                  src="/about-office.jpg"
                  alt="GlowLab Tech Headquarters & Studio Workstation"
                  className="w-full h-full object-cover object-center contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-repeat"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — HOW WE'RE DIFFERENT */}
      <section
        id="about-different-section"
        className="w-full py-10 sm:py-18 md:py-20 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="mb-6 sm:mb-12">
            <h2
              id="about-different-heading"
              className="font-headline font-normal sm:font-medium text-2xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A]"
            >
              How we're different
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-t border-black/10">
            <div className="py-6 sm:py-8 grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] leading-tight text-[#1A1A1A]">
                  We operate, we don't just consult
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed">
                  We don't hand you a strategy doc and disappear. We build the
                  actual system, run it, and refine it based on real results.
                </p>
              </div>
            </div>

            <div className="py-6 sm:py-8 grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] leading-tight text-[#1A1A1A]">
                  AI without the fluff
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed">
                  No unnecessary complexity, no tools added just because they
                  exist. Every system we build has a clear purpose: save time,
                  generate leads, or produce better output faster.
                </p>
              </div>
            </div>

            <div className="py-6 sm:py-8 grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] leading-tight text-[#1A1A1A]">
                  Small team, direct access
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed">
                  You work with the person who actually builds your system — not
                  an account manager relaying messages to a developer you'll
                  never speak to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE BELIEVE (Organized 2x2 grid) */}
      <section
        id="about-values-section"
        className="w-full py-10 sm:py-18 md:py-20 border-b border-black/10 bg-[#FAF9F6]"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="mb-8 sm:mb-12">
            <h2
              id="about-values-heading"
              className="font-headline font-normal sm:font-medium text-2xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A]"
            >
              What we believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="p-5 sm:p-7 md:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200">
              <div>
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] text-[#1A1A1A] leading-tight mb-3">
                  Clarity over complexity
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  If we can't explain what a system does in one sentence, it's not
                  ready. We strip away jargon, unnecessary layers, and decorative tech.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200">
              <div>
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] text-[#1A1A1A] leading-tight mb-3">
                  Outcomes over outputs
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  Deliverables don't matter unless they move the needle. We judge our systems by closed deals, lower customer acquisition costs, and saved human hours.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200">
              <div>
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] text-[#1A1A1A] leading-tight mb-3">
                  Speed with intention
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  Moving fast is only useful if you're pointed in the right direction. We test hypotheses rapidly while ensuring the underlying foundation is bulletproof.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200">
              <div>
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] text-[#1A1A1A] leading-tight mb-3">
                  Honest over impressive
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  We'd rather tell you upfront if an idea won't deliver ROI than build it anyway and invoice you. We treat our clients as long-term engineering partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
