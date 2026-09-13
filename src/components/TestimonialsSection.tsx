import { useState, useEffect, useRef, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_DATA, TestimonialItem } from '../data/testimonialsData';

export default function TestimonialsSection({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) {
  const testimonials = TESTIMONIALS_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (testimonials.length <= 1 || isPaused) return;

    timerRef.current = window.setInterval(() => {
      handleNext();
    }, 7000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, isPaused, testimonials.length]);

  const changeSlide = (nextIndex: number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsFading(false);
    }, 250);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeSlide(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % testimonials.length;
    changeSlide(next);
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Touch gesture support for mobile swiping
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 45; // 45px swipe threshold
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-14 sm:py-18 md:py-20 lg:py-24 scroll-mt-20 border-b border-black/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 md:px-16 text-left">
        {/* CAROUSEL */}
        <div id="testimonials-carousel" className="relative w-full">
          <div className="flex items-start justify-between gap-0 md:gap-10">
            {/* Desktop Prev chevron */}
            <button
              type="button"
              id="testimonial-prev-button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="hidden md:inline-flex shrink-0 mt-3 p-2 text-[#1A1A1A]/60 hover:text-[#C84826] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
            </button>

            {/* Main quote block with crossfade - takes full width on mobile */}
            <div
              className={`w-full flex-1 transition-opacity duration-300 ease-in-out ${
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
                  className="font-serif-accent italic text-xl sm:text-3xl md:text-5xl lg:text-[46px] leading-[1.3] sm:leading-[1.28] tracking-[-0.01em] text-[#1A1A1A]"
                >
                  {current.quote}
                </blockquote>
              </div>

              {/* Attribution row */}
              <div className="mt-5 sm:mt-7 pl-5 sm:pl-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
                <div>
                  <p
                    id="testimonial-client-name"
                    className="font-headline font-medium text-base sm:text-xl text-[#1A1A1A] leading-snug"
                  >
                    {current.clientName}
                  </p>
                  <p
                    id="testimonial-client-meta"
                    className="font-body text-xs sm:text-sm text-neutral-500 mt-0.5"
                  >
                    {current.role}
                    <span className="mx-2 text-neutral-300">|</span>
                    {current.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Next chevron */}
            <button
              type="button"
              id="testimonial-next-button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="hidden md:inline-flex shrink-0 mt-3 p-2 text-[#1A1A1A]/60 hover:text-[#C84826] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Progress dashes and controls bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 sm:mt-10 pl-5 sm:pl-8 border-t border-black/[0.06] pt-5 sm:pt-6">
            <div className="flex items-center justify-between sm:justify-start gap-4">
              <div
                id="testimonial-progress-dashes"
                className="flex items-center gap-2"
              >
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => changeSlide(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-[3px] sm:h-[2px] transition-all duration-300 cursor-pointer rounded-full ${
                      idx === currentIndex
                        ? 'w-8 sm:w-10 bg-[#C84826]'
                        : 'w-5 sm:w-6 bg-black/15 hover:bg-black/30'
                    }`}
                  />
                ))}
              </div>

              {/* Mobile prev/next thumb buttons */}
              <div className="md:hidden flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/[0.04] text-[#1A1A1A] active:bg-[#C84826] active:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black/[0.04] text-[#1A1A1A] active:bg-[#C84826] active:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <a
              href="/testimonials"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/testimonials');
                }
              }}
              className="group relative inline-flex items-center font-body text-xs sm:text-sm font-medium text-[#1A1A1A] hover:text-[#C84826] transition-colors cursor-pointer"
            >
              <span className="relative py-1">
                View all client outcomes & testimonials →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
