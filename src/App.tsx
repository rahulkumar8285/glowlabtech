/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ServicesOverview from './components/ServicesOverview';
import ProcessSection from './components/ProcessSection';
import FeaturedWork from './components/FeaturedWork';
import TestimonialsSection from './components/TestimonialsSection';
import TrustSection from './components/TrustSection';
import FinalCTASection from './components/FinalCTASection';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/about' || window.location.hash === '#about') {
        return '/about';
      }
      if (path === '/services' || path === '/service' || window.location.hash === '#services' || window.location.hash === '#service') {
        return '/services';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/about' || window.location.hash === '#about') {
        setCurrentPath('/about');
      } else if (path === '/services' || path === '/service' || window.location.hash === '#services' || window.location.hash === '#service') {
        setCurrentPath('/services');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path.startsWith('/#')) {
      const hash = path.substring(1);
      setCurrentPath('/');
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    if (path === '/about') {
      setCurrentPath('/about');
      window.history.pushState(null, '', '/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === '/services' || path === '/service') {
      setCurrentPath('/services');
      window.history.pushState(null, '', '/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPath('/');
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] text-[#1A1A1A]">
      {/* GLOBAL NAVIGATION */}
      <Navigation currentPath={currentPath} onNavigate={navigateTo} />

      {currentPath === '/about' ? (
        /* ABOUT PAGE */
        <AboutPage onNavigate={navigateTo} />
      ) : currentPath === '/services' || currentPath === '/service' ? (
        /* SERVICES PAGE */
        <ServicesPage />
      ) : (
        /* HOMEPAGE */
        <>
          {/* HERO SECTION */}
          <section
            id="hero-section"
            className="relative min-h-screen w-full bg-[#FAF9F6] text-[#1A1A1A] flex flex-col justify-center overflow-hidden"
          >
            {/* Subtle, slow-moving abstract soft gradient wash behind text — barely visible, no glowing orbs, no neon */}
            <div
              id="hero-background-wash"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute -top-[25%] -left-[10%] h-[75vw] w-[75vw] max-h-[900px] max-w-[900px] rounded-full bg-gradient-to-br from-[#F4EEE7]/60 to-[#ECE3D8]/20 blur-3xl transition-opacity duration-1000" />
              <div className="absolute -bottom-[20%] right-[5%] h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full bg-gradient-to-tl from-[#F5ECE5]/40 to-[#EBE2D7]/20 blur-3xl transition-opacity duration-1000" />
            </div>

            <div
              id="hero-container"
              className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-28 sm:py-32 md:py-36 flex flex-col justify-center text-left"
            >
              {/* Small eyebrow label: plain uppercase text with wide letter-spacing, no dot/icon/badge */}
              <p
                id="hero-eyebrow"
                className="font-body font-medium text-[13px] uppercase tracking-[0.1em] text-neutral-500 mb-6 sm:mb-8 select-none"
              >
                AI AUTOMATION & LEAD GENERATION STUDIO
              </p>

              {/* Giant 2-line headline */}
              <h1
                id="hero-headline"
                className="font-headline font-normal sm:font-medium text-[40px] sm:text-[72px] md:text-[84px] lg:text-[96px] leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] max-w-5xl"
              >
                <span className="block">AI systems that bring</span>
                <span className="block">
                  your business <span className="text-[#C84826]">new customers.</span>
                </span>
              </h1>

              {/* One-line subheadline directly below, in muted gray body font */}
              <p
                id="hero-subheadline"
                className="font-body font-normal text-base sm:text-lg md:text-[20px] text-neutral-600 leading-relaxed max-w-3xl mt-6 sm:mt-8 mb-8 sm:mb-10"
              >
                We design and build AI automation, video content, and outreach systems that turn attention into pipeline.
              </p>

              {/* Two CTAs side by side */}
              <div
                id="hero-cta-group"
                className="flex flex-wrap items-center gap-6 sm:gap-8"
              >
                <a
                  href="#final-cta-section"
                  id="hero-cta-primary"
                  className="inline-flex items-center justify-center font-body font-medium text-[15px] text-white bg-[#C84826] hover:bg-[#B33E1D] px-8 py-4 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  Book a strategy call
                </a>

                <a
                  href="#featured-work-section"
                  id="hero-cta-secondary"
                  className="group relative inline-flex items-center font-body font-medium text-[15px] text-[#1A1A1A] cursor-pointer"
                >
                  <span className="relative py-1">
                    View our work →
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#1A1A1A] transition-all duration-300 ease-out group-hover:w-full" />
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* SERVICES OVERVIEW SECTION */}
          <ServicesOverview />

          {/* PROCESS SECTION */}
          <ProcessSection />

          {/* FEATURED WORK SECTION */}
          <FeaturedWork />

          {/* TESTIMONIALS SECTION */}
          <TestimonialsSection />

          {/* TRUST SECTION */}
          <TrustSection />

          {/* FINAL CTA SECTION */}
          <FinalCTASection />
        </>
      )}
    </div>
  );
}

