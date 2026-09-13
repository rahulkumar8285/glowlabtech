import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
}

// DEMO CONTENT — replace before launch
const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'We went from one video ad running for weeks to ten variations tested in three days. The winner alone paid for the whole engagement.',
    clientName: 'Aarav Mehta',
    role: 'Founder',
    company: '[Placeholder DTC Brand]',
  },
  {
    id: 'testimonial-2',
    quote:
      'The automation they built handles lead follow-up we used to do manually every single day. It just runs now.',
    clientName: 'Sara Kapoor',
    role: 'Head of Growth',
    company: '[Placeholder SaaS Co.]',
  },
  {
    id: 'testimonial-3',
    quote:
      'Cold outreach used to be our weakest channel. Now it books more meetings than our paid ads do.',
    clientName: 'Daniel Osei',
    role: 'Co-Founder',
    company: '[Placeholder B2B Startup]',
  },
];

export default function TestimonialsSection({
  testimonials = DEMO_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const hasTestimonials = testimonials.length > 0;

  // Auto-advance every 7 seconds when testimonials are present
  useEffect(() => {
    if (!hasTestimonials || testimonials.length <= 1 || isPaused) {
      return;
    }

    timerRef.current = window.setInterval(() => {
      handleNext();
    }, 7000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, isPaused, hasTestimonials, testimonials.length]);

  const changeSlide = (nextIndex: number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsFading(false);
    }, 250); // Clean crossfade timing
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeSlide(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % testimonials.length;
    changeSlide(next);
  };

  return (
    <section
      id="testimonials-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-28 sm:py-32 md:py-36 lg:py-40"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
        {!hasTestimonials ? (
          /* HONEST PLACEHOLDER STATE:
             No fabricated names or quotes. Rendered in the exact large printed pull-quote typographic style. */
          <div
            id="testimonials-placeholder"
            className="flex flex-col items-start max-w-4xl py-6"
          >
            <div className="flex items-start">
              <span
                aria-hidden="true"
                className="font-serif-accent text-3xl sm:text-4xl text-[#C84826] mr-2 select-none leading-none -mt-1"
              >
                “
              </span>
              <p
                id="testimonials-placeholder-quote"
                className="font-serif-accent italic text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.28] tracking-[-0.01em] text-[#1A1A1A]"
              >
                Client testimonials coming soon
              </p>
            </div>

            {/* Honest contextual attribution line */}
            <div className="mt-8 sm:mt-10 pl-6 sm:pl-8">
              <p className="font-body text-sm sm:text-[15px] text-neutral-500 leading-relaxed">
                Verified client outcomes and case metrics are currently being documented
              </p>
            </div>
          </div>
        ) : (
          /* ACTIVE TESTIMONIALS CAROUSEL:
             One large testimonial at a time, crossfade transition, minimal chevrons, accent dash row. */
          <div id="testimonials-carousel" className="relative w-full">
            <div className="flex items-start justify-between gap-6 sm:gap-10">
              {/* Previous plain chevron navigation (no circular button background) */}
              {testimonials.length > 1 && (
                <button
                  type="button"
                  id="testimonial-prev-button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="shrink-0 mt-3 p-2 text-[#1A1A1A]/60 hover:text-[#C84826] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
                </button>
              )}

              {/* Main quote block with crossfade transition */}
              <div
                className={`flex-1 transition-opacity duration-300 ease-in-out ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {/* Pull-quote text */}
                <div className="flex items-start">
                  <span
                    aria-hidden="true"
                    className="font-serif-accent text-3xl sm:text-4xl text-[#C84826] mr-2 select-none leading-none -mt-1"
                  >
                    “
                  </span>
                  <blockquote
                    id="testimonial-active-quote"
                    className="font-serif-accent italic text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.28] tracking-[-0.01em] text-[#1A1A1A]"
                  >
                    {testimonials[currentIndex].quote}
                  </blockquote>
                </div>

                {/* Attribution row: client name on top, role and company below separated by "|" */}
                <div className="mt-8 sm:mt-10 pl-6 sm:pl-8">
                  <p
                    id="testimonial-client-name"
                    className="font-headline font-medium text-lg sm:text-xl text-[#1A1A1A] leading-snug"
                  >
                    {testimonials[currentIndex].clientName}
                  </p>
                  <p
                    id="testimonial-client-meta"
                    className="font-body text-sm sm:text-[15px] text-neutral-500 mt-1"
                  >
                    {testimonials[currentIndex].role}
                    <span className="mx-2 text-neutral-300">|</span>
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Next plain chevron navigation (no circular button background) */}
              {testimonials.length > 1 && (
                <button
                  type="button"
                  id="testimonial-next-button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="shrink-0 mt-3 p-2 text-[#1A1A1A]/60 hover:text-[#C84826] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 stroke-[1.5]" />
                </button>
              )}
            </div>

            {/* Accent-colored progress dash row (replaces background color shifting) */}
            {testimonials.length > 1 && (
              <div
                id="testimonial-progress-dashes"
                className="flex items-center gap-2.5 mt-12 pl-6 sm:pl-8"
              >
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => changeSlide(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-[2px] transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? 'w-10 bg-[#C84826]'
                        : 'w-6 bg-black/15 hover:bg-black/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
