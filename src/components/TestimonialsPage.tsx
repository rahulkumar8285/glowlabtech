import { useState, useMemo, useEffect, type MouseEvent } from 'react';
import { TESTIMONIALS_DATA, TestimonialItem } from '../data/testimonialsData';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

interface TestimonialsPageProps {
  onNavigate?: (path: string) => void;
}

const CATEGORIES = [
  'All',
  'AI Video Creation',
  'AI Automation',
  'Lead Generation',
  'Cold Email Outreach',
  'Website Design',
  'Software Development',
];

export default function TestimonialsPage({ onNavigate }: TestimonialsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'Client Outcomes & Testimonials | GlowLab Tech',
      description:
        'Honest feedback, verified metrics, and operational results from founders, operators, and growth leaders who build AI systems with GlowLab Tech.',
      keywords:
        'GlowLab Tech reviews, client testimonials, AI automation case studies, software development reviews, operational results',
      canonicalUrl: 'https://glowlabtech.com/testimonials',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'GlowLab Tech Client Reviews & Outcomes',
        description:
          'Verified feedback and metrics from founders and leaders working with GlowLab Tech.',
        itemListElement: TESTIMONIALS_DATA.map((item, idx) => ({
          '@type': 'Review',
          position: idx + 1,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          author: {
            '@type': 'Person',
            name: item.clientName,
            jobTitle: `${item.role}, ${item.company}`,
          },
          reviewBody: item.quote,
          itemReviewed: {
            '@type': 'Organization',
            name: 'GlowLab Tech',
            url: 'https://glowlabtech.com',
          },
        })),
      },
    });
    return cleanup;
  }, []);

  const filteredTestimonials = useMemo(() => {
    if (selectedCategory === 'All') return TESTIMONIALS_DATA;
    return TESTIMONIALS_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleLinkClick = (path: string, e: MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div id="testimonials-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="testimonials-header"
        title="Client outcomes / and testimonials."
        subtitle="Honest feedback, verified metrics, and operational results from founders, operators, and growth leaders who build with us."
      />

      {/* BENCHMARK METRICS STRIP */}
      <section className="w-full border-b border-black/10 bg-[#FAF9F6] py-8 sm:py-12">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
            <div className="border-l-2 border-[#C84826] pl-3.5 sm:pl-5">
              <p className="font-headline font-medium text-2xl sm:text-4xl text-[#1A1A1A] leading-none">
                4.2x
              </p>
              <p className="font-body text-xs sm:text-sm text-neutral-500 mt-1.5 sm:mt-2">
                Average creative ROAS increase
              </p>
            </div>

            <div className="border-l-2 border-[#C84826] pl-3.5 sm:pl-5">
              <p className="font-headline font-medium text-2xl sm:text-4xl text-[#1A1A1A] leading-none">
                18 hrs
              </p>
              <p className="font-body text-xs sm:text-sm text-neutral-500 mt-1.5 sm:mt-2">
                Operational time saved per week
              </p>
            </div>

            <div className="border-l-2 border-[#C84826] pl-3.5 sm:pl-5">
              <p className="font-headline font-medium text-2xl sm:text-4xl text-[#1A1A1A] leading-none">
                +310%
              </p>
              <p className="font-body text-xs sm:text-sm text-neutral-500 mt-1.5 sm:mt-2">
                Qualified pipeline growth
              </p>
            </div>

            <div className="border-l-2 border-[#C84826] pl-3.5 sm:pl-5">
              <p className="font-headline font-medium text-2xl sm:text-4xl text-[#1A1A1A] leading-none">
                68%
              </p>
              <p className="font-body text-xs sm:text-sm text-neutral-500 mt-1.5 sm:mt-2">
                Sustained outbound open rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full py-10 sm:py-18 md:py-20 border-b border-black/10">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          {/* CATEGORY FILTERS - horizontal swipe on mobile */}
          <div className="flex items-center gap-2 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-body text-xs px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer select-none active:scale-95 ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white font-medium shadow-sm'
                      : 'border border-black/10 bg-black/[0.02] text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/[0.05]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* TESTIMONIALS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {filteredTestimonials.map((item: TestimonialItem) => (
              <div
                key={item.id}
                id={item.id}
                className="p-6 sm:p-10 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200"
              >
                <div>
                  {/* Metric Tag & Service Badge */}
                  <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-black/[0.06]">
                    <div>
                      <p className="font-headline font-medium text-3xl sm:text-4xl text-[#C84826] leading-none">
                        {item.metric.value}
                      </p>
                      <p className="font-body text-xs text-neutral-500 mt-1">
                        {item.metric.label}
                      </p>
                    </div>

                    <a
                      href={`/services/${item.serviceSlug}`}
                      onClick={(e) => handleLinkClick(`/services/${item.serviceSlug}`, e)}
                      className="font-body text-xs text-neutral-500 hover:text-[#C84826] bg-black/[0.03] px-3 py-1.5 rounded-[4px] transition-colors shrink-0 text-right cursor-pointer"
                    >
                      {item.serviceName} →
                    </a>
                  </div>

                  {/* Quote with accent serif quotation mark */}
                  <div className="relative mb-6">
                    <span
                      aria-hidden="true"
                      className="font-serif-accent text-4xl text-[#C84826] select-none leading-none block mb-1"
                    >
                      “
                    </span>
                    <blockquote className="font-serif-accent italic text-xl sm:text-2xl text-[#1A1A1A] leading-[1.4]">
                      {item.quote}
                    </blockquote>
                  </div>

                  {/* Context line */}
                  <p className="font-body text-xs text-neutral-500 leading-relaxed mb-6">
                    <span className="font-medium text-neutral-700">Project scope: </span>
                    {item.context}
                  </p>
                </div>

                {/* Client Attribution Footer */}
                <div className="border-t border-black/[0.06] pt-4 mt-2 flex items-center justify-between">
                  <div>
                    <p className="font-headline font-medium text-base sm:text-lg text-[#1A1A1A]">
                      {item.clientName}
                    </p>
                    <p className="font-body text-xs text-neutral-500 mt-0.5">
                      {item.role} <span className="mx-1.5 text-neutral-300">|</span> {item.company}
                    </p>
                  </div>

                  <a
                    href={`/services/${item.serviceSlug}`}
                    onClick={(e) => handleLinkClick(`/services/${item.serviceSlug}`, e)}
                    className="font-body text-xs font-medium text-[#C84826] hover:text-[#B33E1D] transition-colors inline-flex items-center gap-1 cursor-pointer select-none"
                  >
                    <span>View system</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
