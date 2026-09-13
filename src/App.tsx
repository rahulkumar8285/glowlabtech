/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import AboutPage from './components/AboutPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import ProductsPage from './components/ProductsPage';
import ServicesOverview from './components/ServicesOverview';
import ProcessSection from './components/ProcessSection';
import TestimonialsPage from './components/TestimonialsPage';
import TestimonialsSection from './components/TestimonialsSection';
import TrustSection from './components/TrustSection';
import BlogSection from './components/BlogSection';
import BlogListingPage from './components/BlogListingPage';
import BlogDetailPage from './components/BlogDetailPage';
import ContactPage from './components/ContactPage';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { updatePageSEO } from './utils/seo';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path && path !== '') {
        return path;
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
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

    setCurrentPath(path);
    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServiceDetail = currentPath.startsWith('/services/');
  const serviceSlug = isServiceDetail
    ? currentPath.replace('/services/', '').split('/')[0].split('?')[0].split('#')[0]
    : '';

  const isBlogDetail = currentPath.startsWith('/blog/');
  const blogSlug = isBlogDetail
    ? currentPath.replace('/blog/', '').split('/')[0].split('?')[0].split('#')[0]
    : '';

  // Reset Home Page SEO when on '/'
  useEffect(() => {
    if (currentPath === '/') {
      updatePageSEO({
        title: 'GlowLab Tech — AI Software & Digital Product Agency',
        description:
          'We design and build AI automation, custom software, and digital products that turn attention into pipeline.',
        canonicalUrl: 'https://glowlabtech.com/',
        ogType: 'website',
      });
    }
  }, [currentPath]);

  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] text-[#1A1A1A]">
      {/* GLOBAL NAVIGATION */}
      <Navigation currentPath={currentPath} onNavigate={navigateTo} />

      <main id="main-content" className="w-full">
        {currentPath === '/about' ? (
          /* ABOUT PAGE */
          <AboutPage onNavigate={navigateTo} />
        ) : currentPath === '/testimonials' ? (
          /* TESTIMONIALS PAGE */
          <TestimonialsPage onNavigate={navigateTo} />
        ) : currentPath === '/products' ? (
          /* PRODUCTS PAGE */
          <ProductsPage onNavigate={navigateTo} />
        ) : currentPath === '/contact' ? (
          /* CONTACT PAGE */
          <ContactPage onNavigate={navigateTo} />
        ) : currentPath === '/blog' ? (
          /* BLOG LISTING PAGE */
          <BlogListingPage onNavigate={navigateTo} />
        ) : isBlogDetail ? (
          /* DEDICATED BLOG POST DETAIL PAGE */
          <BlogDetailPage slug={blogSlug} onNavigate={navigateTo} />
        ) : isServiceDetail ? (
          /* DEDICATED INDIVIDUAL SERVICE PAGE */
          <ServiceDetailPage slug={serviceSlug} onNavigate={navigateTo} />
        ) : currentPath === '/services' || currentPath === '/service' ? (
          /* FALLBACK ROOT SERVICES -> ROUTES TO FIRST SERVICE */
          <ServiceDetailPage slug="ai-automation" onNavigate={navigateTo} />
        ) : (
          /* HOMEPAGE */
          <>
            {/* HERO SECTION */}
            <section
              id="hero-section"
              className="relative min-h-[calc(100vh-5rem)] md:min-h-screen w-full bg-[#FAF9F6] text-[#1A1A1A] flex flex-col justify-center overflow-hidden"
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
                className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 flex flex-col justify-center text-left"
              >
                {/* Giant headline with fluid scaling on mobile devices */}
                <h1
                  id="hero-headline"
                  className="font-headline font-normal sm:font-medium text-[32px] min-[380px]:text-[38px] sm:text-[68px] md:text-[84px] lg:text-[96px] leading-[1.08] sm:leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] max-w-5xl"
                >
                  <span className="block">AI systems that bring</span>
                  <span className="block">
                    your business <span className="text-[#C84826]">new customers.</span>
                  </span>
                </h1>

                {/* Subheadline directly below, fluid for mobile */}
                <p
                  id="hero-subheadline"
                  className="font-body font-normal text-[15px] sm:text-lg md:text-[20px] text-neutral-600 leading-relaxed max-w-3xl mt-4 sm:mt-6 mb-7 sm:mb-8"
                >
                  We design and build AI automation, video content, and outreach systems that turn attention into pipeline.
                </p>

                {/* Two CTAs - full width on mobile phones for effortless thumb reach */}
                <div
                  id="hero-cta-group"
                  className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-6 w-full sm:w-auto"
                >
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('/contact');
                    }}
                    id="hero-cta-primary"
                    className="w-full sm:w-auto inline-flex items-center justify-center font-body font-medium text-[15px] text-white bg-[#C84826] hover:bg-[#B33E1D] active:bg-[#9E3416] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 cursor-pointer shadow-md sm:shadow-none active:scale-[0.98]"
                  >
                    Book a strategy call
                  </a>

                  <a
                    href="#services-overview-section"
                    id="hero-cta-secondary"
                    className="group relative inline-flex items-center justify-center sm:justify-start font-body font-medium text-[15px] text-[#1A1A1A] cursor-pointer py-1.5 sm:py-1"
                  >
                    <span className="relative">
                      See what we do →
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#1A1A1A] transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* SERVICES OVERVIEW SECTION */}
            <ServicesOverview onNavigate={navigateTo} />

            {/* PROCESS SECTION */}
            <ProcessSection onNavigate={navigateTo} />

            {/* TESTIMONIALS SECTION */}
            <TestimonialsSection onNavigate={navigateTo} />

            {/* TRUST SECTION */}
            <TrustSection onNavigate={navigateTo} />

            {/* LATEST BLOGS SECTION */}
            <BlogSection onNavigate={navigateTo} />

            {/* FINAL CTA SECTION */}
            <FinalCTASection onNavigate={navigateTo} />
          </>
        )}
      </main>

      {/* GLOBAL FOOTER */}
      <Footer onNavigate={navigateTo} />

      {/* COOKIE CONSENT BANNER */}
      <CookieBanner />
    </div>
  );
}
