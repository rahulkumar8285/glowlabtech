import { useEffect, type MouseEvent } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/offeringsData';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate?: (path: string) => void;
}

export default function ServiceDetailPage({
  slug,
  onNavigate,
}: ServiceDetailPageProps) {
  const currentIndex = SERVICES_DATA.findIndex((s) => s.slug === slug);
  const service: ServiceItem =
    currentIndex !== -1 ? SERVICES_DATA[currentIndex] : SERVICES_DATA[0];

  useEffect(() => {
    if (!service) return;
    const serviceKeywords = [
      service.name,
      service.shortTitle,
      'GrowthTechSys',
      'AI engineering',
      'custom software development',
      ...service.deliverables.slice(0, 3),
    ].join(', ');

    const cleanup = updatePageSEO({
      title: `${service.name} | GrowthTechSys`,
      description: service.summary || service.tagline,
      keywords: serviceKeywords,
      canonicalUrl: `https://growthtechsys.com/services/${service.slug}`,
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'GrowthTechSys',
          url: 'https://growthtechsys.com',
        },
        serviceType: service.shortTitle,
      },
    });
    return cleanup;
  }, [service]);

  const prevService =
    currentIndex > 0
      ? SERVICES_DATA[currentIndex - 1]
      : SERVICES_DATA[SERVICES_DATA.length - 1];

  const nextService =
    currentIndex < SERVICES_DATA.length - 1
      ? SERVICES_DATA[currentIndex + 1]
      : SERVICES_DATA[0];

  const handleLinkClick = (path: string, e: MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div id={`service-page-${service.slug}`} className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="service-detail-header"
        title={service.name.includes('&') ? service.name.replace('&', '/ &') : service.name}
        subtitle={service.tagline}
      />

      {/* SUB-NAVIGATION / SERVICES BREADCRUMB */}
      <div className="w-full border-b border-black/[0.08] bg-[#FAF9F6]/80 backdrop-blur-sm sticky top-18 sm:top-20 z-30">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm font-body text-neutral-500">
          <div className="flex items-center gap-2 truncate pr-2">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="hover:text-[#1A1A1A] transition-colors shrink-0"
            >
              Services
            </a>
            <span className="text-neutral-300 shrink-0">/</span>
            <span className="text-[#C84826] font-medium truncate">{service.shortTitle}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`/services/${prevService.slug}`}
              onClick={(e) => handleLinkClick(`/services/${prevService.slug}`, e)}
              className="hover:text-[#C84826] transition-colors cursor-pointer text-xs sm:text-sm"
            >
              ← Prev
            </a>
            <span className="text-neutral-300">|</span>
            <a
              href={`/services/${nextService.slug}`}
              onClick={(e) => handleLinkClick(`/services/${nextService.slug}`, e)}
              className="hover:text-[#C84826] transition-colors cursor-pointer text-xs sm:text-sm"
            >
              Next →
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: DEEP DIVE & SUMMARY */}
      <section className="w-full py-10 sm:py-18 md:py-20 border-b border-black/10">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="grid grid-cols-12 gap-6 lg:gap-16 items-start">
            {/* Left column: Summary statement and detailed narrative */}
            <div className="col-span-12 lg:col-span-7 space-y-4 sm:space-y-5">
              <h2 className="font-headline font-medium text-xl sm:text-3xl lg:text-[34px] leading-tight text-[#1A1A1A]">
                {service.summary}
              </h2>
              <p className="font-body text-sm sm:text-[17px] text-neutral-600 leading-relaxed pt-1 sm:pt-2">
                {service.description}
              </p>
            </div>

            {/* Right column: Key performance metrics */}
            <div className="col-span-12 lg:col-span-5 border border-black/10 p-6 sm:p-8 bg-[#FAF9F6] rounded-[4px]">
              <div className="space-y-6">
                {service.metrics.map((metric, idx) => (
                  <div key={idx} className="border-b border-black/[0.06] pb-4 last:border-b-0 last:pb-0">
                    <p className="font-headline font-medium text-3xl sm:text-4xl text-[#C84826] leading-none">
                      {metric.value}
                    </p>
                    <p className="font-body text-xs sm:text-sm text-neutral-500 mt-1.5">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEMS WE SOLVE */}
      <section className="w-full py-14 sm:py-18 md:py-20 border-b border-black/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 text-left">
          <h2 className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl leading-tight text-[#1A1A1A] mb-10 sm:mb-12">
            Why existing approaches fail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {service.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="border-t border-black/10 pt-5 flex items-start gap-4"
              >
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEM ARCHITECTURE & ENGINEERING */}
      <section className="w-full py-14 sm:py-18 md:py-20 border-b border-black/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 text-left">
          <h2 className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl leading-tight text-[#1A1A1A] mb-10 sm:mb-12">
            How we engineer this system
          </h2>

          <div className="divide-y divide-black/10 border-t border-black/10">
            {service.architecture.map((arch, idx) => (
              <div
                key={idx}
                className="py-6 sm:py-8 grid grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="col-span-12 sm:col-span-4">
                  <h3 className="font-headline font-medium text-xl sm:text-2xl text-[#1A1A1A] leading-snug">
                    {arch.title}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <p className="font-body text-base text-neutral-600 leading-relaxed">
                    {arch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DELIVERABLES & OUTCOME */}
      <section className="w-full py-14 sm:py-18 md:py-20 border-b border-black/10">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-headline font-medium text-2xl sm:text-3xl text-[#1A1A1A] leading-tight mb-4">
                What is included in the build
              </h2>
              <div className="border-t border-black/[0.06] pt-4 mt-4">
                <span className="font-body text-xs uppercase tracking-wider text-neutral-400 block mb-1 font-medium">
                  Guaranteed Target Outcome
                </span>
                <p className="font-body text-sm sm:text-base text-[#C84826] font-medium leading-relaxed">
                  {service.outcome}
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ul className="divide-y divide-black/10 border-t border-b border-black/10 font-body text-sm sm:text-base text-[#1A1A1A]">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="py-3.5 flex items-start gap-4">
                    <span className="text-[#C84826] text-sm mt-0.5 select-none font-semibold">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PAGINATION FOOTER BETWEEN SERVICES */}
      <section className="w-full py-10 border-b border-black/10 bg-[#FAF9F6]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href={`/services/${prevService.slug}`}
            onClick={(e) => handleLinkClick(`/services/${prevService.slug}`, e)}
            className="group flex flex-col items-start cursor-pointer"
          >
            <span className="font-body text-xs text-neutral-400 select-none">← Previous Service</span>
            <span className="font-headline font-medium text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#C84826] transition-colors mt-0.5">
              {prevService.name}
            </span>
          </a>

          <a
            href={`/services/${nextService.slug}`}
            onClick={(e) => handleLinkClick(`/services/${nextService.slug}`, e)}
            className="group flex flex-col sm:items-end cursor-pointer"
          >
            <span className="font-body text-xs text-neutral-400 select-none">Next Service →</span>
            <span className="font-headline font-medium text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#C84826] transition-colors mt-0.5">
              {nextService.name}
            </span>
          </a>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
