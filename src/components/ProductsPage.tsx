import { useState, useEffect, useRef, type MouseEvent } from 'react';
import {
  MapPin,
  Navigation as NavIcon,
  CheckCircle2,
  ShieldCheck,
  WifiOff,
  Database,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Briefcase,
  Layers,
  PhoneCall,
} from 'lucide-react';
import { PRODUCTS_DATA, type ProductItem } from '../data/offeringsData';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

export default function ProductsPage({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
} = {}) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'modules' | 'why' | 'industries' | 'guides' | 'faq'>('modules');
  const isClickScrollingRef = useRef(false);

  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'Field Tracking App — GPS Field Force Tracking & Work Validation | GlowLab Tech',
      description:
        'End-to-end GPS location tracking, geo-fenced selfie attendance, tamper-proof proof of execution, and automated reporting for mobile teams across India.',
      canonicalUrl: 'https://glowlabtech.com/products',
      ogType: 'website',
    });
    return cleanup;
  }, []);

  // Scroll spy to highlight the corresponding tab as user scrolls through sections
  useEffect(() => {
    const sections = [
      { id: 'modules', tab: 'modules' as const },
      { id: 'why-needed', tab: 'why' as const },
      { id: 'industries', tab: 'industries' as const },
      { id: 'guides', tab: 'guides' as const },
      { id: 'faq', tab: 'faq' as const },
    ];

    const handleScroll = () => {
      if (isClickScrollingRef.current) return;
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveTab(sections[i].tab);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, tab: 'modules' | 'why' | 'industries' | 'guides' | 'faq') => {
    setActiveTab(tab);
    isClickScrollingRef.current = true;
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 135;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
      setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 800);
    } else {
      isClickScrollingRef.current = false;
    }
  };

  // Primary flagship product (Field Tracking App)
  const primaryProduct: ProductItem = PRODUCTS_DATA[0];

  const handleLinkClick = (path: string, e: MouseEvent) => {
    if (path.startsWith('http')) {
      return; // allow normal external link
    }
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'module-tracking':
        return <NavIcon className="w-5 h-5 text-[#C84826]" />;
      case 'module-sales':
        return <Briefcase className="w-5 h-5 text-[#C84826]" />;
      case 'module-attendance':
        return <ShieldCheck className="w-5 h-5 text-[#C84826]" />;
      case 'module-poe':
        return <CheckCircle2 className="w-5 h-5 text-[#C84826]" />;
      case 'module-offline':
        return <WifiOff className="w-5 h-5 text-[#C84826]" />;
      case 'module-integration':
        return <Database className="w-5 h-5 text-[#C84826]" />;
      default:
        return <MapPin className="w-5 h-5 text-[#C84826]" />;
    }
  };

  return (
    <div id="products-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* UNIFIED HERO SECTION */}
      <section
        id="products-hero"
        className="w-full bg-[#FAF9F6] text-[#1A1A1A] pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          {/* Main Title & Subtitle */}
          <div className="mb-10 sm:mb-14">
            <h1 className="font-headline font-normal sm:font-medium text-[28px] min-[380px]:text-[34px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[1.1] sm:leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] max-w-5xl">
              Field Force Platforms &amp;
              <span className="block text-[#1A1A1A]">Proprietary Software Engines.</span>
            </h1>
            <p className="font-body font-normal text-sm sm:text-lg md:text-xl text-[#6B6862] leading-relaxed max-w-3xl mt-4 sm:mt-5">
              Turnkey software platforms and telematics systems engineered to eliminate operational bottlenecks, verify ground activity, and scale remote teams across India.
            </p>
          </div>

          {/* Product Details Card */}
          <div className="border border-black/10 bg-white rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-96 h-96 bg-[#C84826]/5 rounded-full blur-3xl pointer-events-none"
            />

            <div className="mb-6 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h2 className="font-headline font-semibold text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight">
                  {primaryProduct.shortName}
                </h2>
                <span className="text-sm sm:text-base md:text-lg font-body font-medium text-[#C84826]">
                  GPS Field Force Tracking &amp; Work Validation Services
                </span>
              </div>

              <p className="font-body text-sm sm:text-lg text-neutral-700 leading-relaxed max-w-4xl mt-3">
                {primaryProduct.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 mb-8 relative z-10">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick('/contact', e)}
                className="inline-flex items-center justify-center gap-2 font-body font-medium text-sm text-white bg-[#C84826] hover:bg-[#B33E1D] active:bg-[#9E3416] px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm select-none"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                onClick={(e) => handleLinkClick('/contact', e)}
                className="inline-flex items-center justify-center gap-2 font-body font-medium text-sm text-[#1A1A1A] hover:text-[#C84826] bg-[#FAF9F6] hover:bg-neutral-100 border border-black/10 px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer select-none"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Systems Engineer</span>
              </a>
            </div>

            {primaryProduct.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-black/10 relative z-10">
                {primaryProduct.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 sm:p-4 rounded-xl bg-[#FAF9F6] border border-black/5">
                    <div className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] mb-0.5">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-neutral-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION TABS */}
      <nav aria-label="Product Sections" className="sticky top-18 sm:top-20 z-30 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-black/10 py-3">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs sm:text-sm font-body">
          <button
            type="button"
            onClick={() => scrollToSection('modules', 'modules')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'modules'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            Modules
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('why-needed', 'why')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'why'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            Why Field Support
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('industries', 'industries')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'industries'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            Industries
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('guides', 'guides')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'guides'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            Buyer Guides
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('faq', 'faq')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'faq'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            FAQ
          </button>
        </div>
      </nav>

      {/* SECTION 1: SAAS MODULES */}
      <section
        id="modules"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 scroll-mt-36"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="font-headline font-semibold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
              Everything operations managers, HRs, and agency directors need to verify, monitor, and report.
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
              Eliminate hearsay and manual paperwork. Our field tracking platform gives your leadership direct visibility into active routes, verified client meetings, and tamper-proof work execution across all Indian territories.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {primaryProduct.modules?.map((module) => (
              <div
                key={module.id}
                className="bg-white border border-black/10 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-black/25 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-black/10 flex items-center justify-center mb-4">
                    {getModuleIcon(module.id)}
                  </div>

                  <h3 className="font-headline font-medium text-lg sm:text-xl text-[#1A1A1A] mb-2.5">
                    {module.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                    {module.description}
                  </p>

                  {module.bullets && (
                    <ul className="space-y-2 mb-6 border-t border-black/5 pt-4">
                      {module.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs font-body text-neutral-700">
                          <span className="text-[#C84826] font-bold select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {module.link && module.linkText ? (
                  <div className="pt-4 border-t border-black/10">
                    <a
                      href={module.link}
                      onClick={(e) => handleLinkClick(module.link!, e)}
                      className="inline-flex items-center gap-1.5 font-body text-xs sm:text-sm font-semibold text-[#C84826] hover:text-[#9E3416] transition-colors cursor-pointer"
                    >
                      <span>{module.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-body text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Native engine included in all tiers</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY YOU NEED FIELD SUPPORT & GROUND AUTOMATION */}
      {primaryProduct.whyNeeded && (
        <section
          id="why-needed"
          className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-[#FAF9F6] scroll-mt-36"
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <h2 className="font-headline font-semibold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                {primaryProduct.whyNeeded.headline}
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                {primaryProduct.whyNeeded.subheadline} When teams operate away from desktop monitors, conventional management breaks down into friction, disputed reimbursements, and unverified customer feedback.
              </p>
            </div>

            {/* Contrast Grid: Pain Points vs. GlowLab Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Without Field Tracking Automation (Pain Points) */}
              <div className="bg-white border border-red-200/70 rounded-2xl p-6 sm:p-8 relative">
                <div className="flex items-center gap-2 text-red-700 font-headline font-medium text-base sm:text-lg mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span>The Cost of Unmonitored Field Operations</span>
                </div>
                <p className="font-body text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                  Companies lose thousands of rupees per representative every month to unverified hours and false expense receipts:
                </p>
                <ul className="space-y-4 font-body text-xs sm:text-sm text-neutral-700">
                  {primaryProduct.whyNeeded.painPoints.map((pain, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✕
                      </span>
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Field Tracking (Transformative Outcomes) */}
              <div className="bg-[#141413] text-[#FAF9F6] rounded-2xl p-6 sm:p-8 relative border border-white/10 shadow-lg">
                <div className="flex items-center gap-2 text-[#FAF9F6] font-headline font-medium text-base sm:text-lg mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#C84826]" />
                  <span>The GlowLab Field Accountability System</span>
                </div>
                <p className="font-body text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                  Replace uncertainty with cryptographic accuracy, automated attendance audits, and transparent travel billing:
                </p>
                <ul className="space-y-4 font-body text-xs sm:text-sm text-neutral-200">
                  {primaryProduct.whyNeeded.outcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C84826]/20 text-[#C84826] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: TARGET FIELD INDUSTRIES */}
      {primaryProduct.industries && (
        <section
          id="industries"
          className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-white scroll-mt-36"
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <h2 className="font-headline font-semibold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                Designed for businesses with personnel on the move across India.
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                Whether you oversee pharmaceutical territory managers, solar technicians, or outdoor media audit teams, our platform adapts directly to your operational SOPs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {primaryProduct.industries.map((ind, iIdx) => (
                <div
                  key={iIdx}
                  className="bg-[#FAF9F6] border border-black/10 rounded-xl p-6 flex flex-col justify-between hover:border-black/25 transition-colors"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#C84826]/10 text-[#C84826] flex items-center justify-center mb-3">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="font-headline font-medium text-base sm:text-lg text-[#1A1A1A] mb-3">
                      {ind.title}
                    </h3>
                    <div className="space-y-3 font-body text-xs sm:text-sm">
                      <div className="text-neutral-500">
                        <span className="font-medium text-neutral-700 block mb-0.5">Common Bottleneck:</span>
                        {ind.problem}
                      </div>
                      <div className="text-neutral-800">
                        <span className="font-medium text-[#C84826] block mb-0.5">GlowLab Solution:</span>
                        {ind.solution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: BUYER GUIDES FOR FIELD FORCE MANAGEMENT */}
      {primaryProduct.buyerGuides && (
        <section
          id="guides"
          className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-[#FAF9F6] scroll-mt-36"
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <h2 className="font-headline font-semibold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                Evaluate our field tracking tools for your specific team workflow and operational needs.
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                Dive into in-depth playbooks detailing how to audit routes, prevent GPS spoofing, and validate client visits.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {primaryProduct.buyerGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="bg-white border border-black/10 rounded-xl p-6 flex flex-col justify-between hover:border-black/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-black/10 flex items-center justify-center text-[#C84826] mb-4 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h3 className="font-headline font-medium text-base sm:text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C84826] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
                      {guide.summary}
                    </p>
                  </div>

                  <a
                    href={guide.link}
                    onClick={(e) => handleLinkClick(guide.link, e)}
                    className="inline-flex items-center gap-1 font-body text-xs font-semibold text-[#C84826] hover:text-[#9E3416] transition-colors pt-3 border-t border-black/5 cursor-pointer"
                  >
                    <span>View guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: FIELD FORCE TRACKING — INTERACTIVE FAQ */}
      {primaryProduct.faqs && (
        <section
          id="faq"
          className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-white scroll-mt-36"
        >
          <div className="w-full max-w-4xl mx-auto px-5 sm:px-12 md:px-16">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <h2 className="font-headline font-semibold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                Field Force Tracking FAQ
              </h2>
              <p className="font-body text-xs sm:text-sm text-neutral-500 mt-2.5">
                Common questions about location tracking, mock GPS prevention, offline support, and DPDP compliance.
              </p>
            </div>

            <div className="space-y-4">
              {primaryProduct.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border border-black/10 rounded-xl overflow-hidden bg-[#FAF9F6] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-headline font-medium text-base sm:text-lg text-[#1A1A1A] hover:text-[#C84826] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#C84826] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 font-body text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-black/5 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FINAL GLOBAL CTA SECTION */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
