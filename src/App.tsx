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
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import SecurityPage from './components/SecurityPage';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PreLoader from './components/PreLoader';
import { updatePageSEO } from './utils/seo';

export default function App() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [navProgress, setNavProgress] = useState(0);
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
    let resolvedPath = path;
    if (
      resolvedPath === '/products' ||
      resolvedPath === '/product' ||
      resolvedPath === '/projects' ||
      resolvedPath === '/project'
    ) {
      resolvedPath = '/product/field-sales-tracking';
    }

    if (resolvedPath.startsWith('/#')) {
      const hash = resolvedPath.substring(1);
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

    // Trigger top brand progress indicator on route transitions
    setIsNavigating(true);
    setNavProgress(35);
    setTimeout(() => setNavProgress(75), 60);
    setTimeout(() => {
      setNavProgress(100);
      setTimeout(() => {
        setIsNavigating(false);
        setNavProgress(0);
      }, 180);
    }, 180);

    setCurrentPath(resolvedPath);
    window.history.pushState(null, '', resolvedPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isProductDetail =
    currentPath.startsWith('/product/') || currentPath.startsWith('/products/');
  const productSlug = isProductDetail
    ? currentPath
        .replace(/^\/(product|products)\//, '')
        .split('/')[0]
        .split('?')[0]
        .split('#')[0]
    : '';

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
        title: 'GrowthTechSys — AI Systems, Workforce Telematics & Digital Engineering',
        description:
          'GrowthTechSys engineers custom AI software, automated workflow pipelines, and enterprise field workforce tracking telematics that scale revenue.',
        keywords:
          'GrowthTechSys, AI software agency, digital product development, field sales automation, GPS employee tracking app, custom software engineering, B2B workflow automation',
        canonicalUrl: 'https://growthtechsys.com/',
        ogType: 'website',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://growthtechsys.com/#website',
              url: 'https://growthtechsys.com/',
              name: 'GrowthTechSys',
              description:
                'AI systems, custom digital products, and field workforce tracking telematics.',
              inLanguage: 'en-US',
            },
            {
              '@type': 'Organization',
              '@id': 'https://growthtechsys.com/#organization',
              name: 'GrowthTechSys',
              url: 'https://growthtechsys.com/',
              logo: 'https://growthtechsys.com/logo.png',
              description:
                'Engineering agency designing and building AI automation, custom software, and field sales tracking systems.',
              sameAs: [
                'https://linkedin.com/company/growthtechsys',
                'https://github.com/growthtechsys',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                telephone: '+91 89297 21558',
                email: 'contact@growthtechsys.com',
                availableLanguage: ['English', 'Hindi'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'B-13 World Tech Park Block-B, World Tech Park, 30, Jaipur - Delhi Expy, Silokhera, Block A, Sector 30',
                addressLocality: 'Gurugram',
                addressRegion: 'Haryana',
                postalCode: '122001',
                addressCountry: 'IN',
              },
            },
          ],
        },
      });
    }
  }, [currentPath]);

  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] text-[#1A1A1A]">
      {/* Brand Color Preloader on initial page load */}
      <PreLoader />

      {/* Top Edge Route Transition Progress Bar */}
      {isNavigating && (
        <div
          className="fixed top-0 left-0 right-0 z-[100000] h-[3px] bg-transparent pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="h-full bg-[#C84826] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(200,72,38,0.85)]"
            style={{ width: `${navProgress}%` }}
          />
        </div>
      )}

      {/* GLOBAL NAVIGATION */}
      <Navigation currentPath={currentPath} onNavigate={navigateTo} />

      <main id="main-content" className="w-full">
        {currentPath === '/about' ? (
          /* ABOUT PAGE */
          <AboutPage onNavigate={navigateTo} />
        ) : currentPath === '/testimonials' ? (
          /* TESTIMONIALS PAGE */
          <TestimonialsPage onNavigate={navigateTo} />
        ) : isProductDetail ? (
          /* DEDICATED INDIVIDUAL PRODUCT PAGE: /product/:slug */
          <ProductsPage slug={productSlug} onNavigate={navigateTo} />
        ) : currentPath === '/products' || currentPath === '/product' || currentPath === '/projects' || currentPath === '/project' ? (
          /* FALLBACK ROOT PRODUCT -> ROUTES TO FIRST PRODUCT */
          <ProductsPage slug="field-sales-tracking" onNavigate={navigateTo} />
        ) : currentPath === '/contact' ? (
          /* CONTACT PAGE */
          <ContactPage onNavigate={navigateTo} />
        ) : currentPath === '/privacy' ? (
          /* PRIVACY POLICY PAGE */
          <PrivacyPage onNavigate={navigateTo} />
        ) : currentPath === '/terms' ? (
          /* TERMS OF SERVICE PAGE */
          <TermsPage onNavigate={navigateTo} />
        ) : currentPath === '/security' ? (
          /* SECURITY OVERVIEW PAGE */
          <SecurityPage onNavigate={navigateTo} />
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
