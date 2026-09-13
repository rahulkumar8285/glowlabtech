import { useState, useEffect, type MouseEvent } from 'react';
import {
  MapPin,
  Navigation as NavIcon,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  WifiOff,
  Database,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Users,
  Briefcase,
  Layers,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { PRODUCTS_DATA, type ProductItem } from '../data/offeringsData';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

export default function ProductsPage({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
} = {}) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'modules' | 'why' | 'industries' | 'guides' | 'faq'>('modules');

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

  // Primary flagship product (Field Tracking App)
  const primaryProduct: ProductItem = PRODUCTS_DATA[0];
  const otherProducts = PRODUCTS_DATA.slice(1);

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
      {/* PAGE HEADER */}
      <PageHeader
        id="products-header"
        title="Field Force Platforms & / Proprietary Software Engines."
        subtitle="Turnkey software platforms and telematics systems engineered to eliminate operational bottlenecks, verify ground activity, and scale remote teams across India."
      />

      {/* FLAGSHIP PRODUCT SPOTLIGHT */}
      <section
        id="field-tracking-spotlight"
        className="w-full py-12 sm:py-16 md:py-20 border-b border-black/10 bg-[#FAF9F6]"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          {/* Main Hero Card for Field Tracking App */}
          <div className="border border-black/10 bg-white rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
            {/* Ambient Terracotta Accent Blur */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-96 h-96 bg-[#C84826]/5 rounded-full blur-3xl pointer-events-none"
            />

            {/* Top Eyebrow & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wider uppercase bg-[#C84826]/10 text-[#C84826] border border-[#C84826]/20">
                  <Sparkles className="w-3 h-3" />
                  {primaryProduct.badge}
                </span>
                <span className="hidden sm:inline-flex text-xs font-body text-neutral-500">
                  • 500+ Indian Cities Supported
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-body font-medium text-neutral-600 bg-[#FAF9F6] px-3 py-1 rounded-full border border-black/5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Hardware Required</span>
              </div>
            </div>

            {/* Product Title & Positioning */}
            <div className="mb-6 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h2 className="font-headline font-semibold text-3xl sm:text-5xl md:text-6xl text-[#1A1A1A] tracking-tight">
                  {primaryProduct.shortName}
                </h2>
                <span className="text-sm sm:text-lg font-body font-medium text-[#C84826]">
                  GPS Field Force Tracking &amp; Work Validation Services
                </span>
              </div>

              <p className="font-body text-base sm:text-xl text-neutral-700 leading-relaxed max-w-4xl mt-3">
                {primaryProduct.tagline}
              </p>

              {primaryProduct.targetAudience && (
                <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-lg bg-[#FAF9F6] border border-black/10 text-xs sm:text-sm font-body text-neutral-700">
                  <Users className="w-4 h-4 text-[#C84826] shrink-0" />
                  <span>{primaryProduct.targetAudience}</span>
                </div>
              )}
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 mb-8 relative z-10">
              <a
                href={primaryProduct.trialCta?.ctaUrl || '/contact?trial=field-tracking'}
                onClick={(e) => handleLinkClick(primaryProduct.trialCta?.ctaUrl || '/contact?trial=field-tracking', e)}
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

              <span className="text-xs font-body text-neutral-400 text-center sm:text-left self-center sm:ml-2">
                No credit card required • 24h team onboarding
              </span>
            </div>

            {/* Operational Stats Strip */}
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
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'modules'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            SaaS Modules (6)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('why')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'why'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            Why You Need Field Support
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('industries')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'industries'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            Target Field Industries
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('guides')}
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
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
              activeTab === 'faq'
                ? 'bg-[#1A1A1A] text-white'
                : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
            }`}
          >
            FAQ &amp; DPDP
          </button>
        </div>
      </nav>

      {/* SECTION 1: SAAS MODULES BUILT FOR FIELD ACCOUNTABILITY */}
      <section
        id="modules"
        className={`w-full py-16 sm:py-20 md:py-24 border-b border-black/10 ${
          activeTab === 'modules' ? 'block' : 'hidden md:block'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="font-body text-xs uppercase tracking-wider text-[#C84826] font-semibold block mb-2">
              SaaS Modules Built for Field Accountability
            </span>
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-black/10 flex items-center justify-center">
                      {getModuleIcon(module.id)}
                    </div>
                    {module.badge && (
                      <span className="text-[11px] font-body font-medium uppercase tracking-wider text-neutral-500 bg-[#FAF9F6] px-2.5 py-1 rounded-md border border-black/5">
                        {module.badge}
                      </span>
                    )}
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
          className={`w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-[#FAF9F6] ${
            activeTab === 'why' ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="font-body text-xs uppercase tracking-wider text-[#C84826] font-semibold block mb-2">
                Ground Reality &amp; Operational Gaps
              </span>
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

      {/* SECTION 3: TARGET FIELD INDUSTRIES (WHEN YOU NEED THIS SERVICE) */}
      {primaryProduct.industries && (
        <section
          id="industries"
          className={`w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-white ${
            activeTab === 'industries' ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="font-body text-xs uppercase tracking-wider text-[#C84826] font-semibold block mb-2">
                Field Support Use Cases
              </span>
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
          className={`w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-[#FAF9F6] ${
            activeTab === 'guides' ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="font-body text-xs uppercase tracking-wider text-[#C84826] font-semibold block mb-2">
                Field Force Buyer Guides &amp; Blueprints
              </span>
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
          className={`w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-white ${
            activeTab === 'faq' ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="w-full max-w-4xl mx-auto px-5 sm:px-12 md:px-16">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="font-body text-xs uppercase tracking-wider text-[#C84826] font-semibold block mb-2">
                Frequently Asked Questions
              </span>
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

      {/* SECTION 6: OTHER GLOWLAB SOFTWARE ENGINES */}
      {otherProducts.length > 0 && (
        <section
          id="other-products"
          className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-[#FAF9F6]"
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-3xl mb-12">
              <span className="font-body text-xs uppercase tracking-wider text-[#C84826] font-semibold block mb-2">
                More Software Platforms
              </span>
              <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
                Explore additional GlowLab software engines.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {otherProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-black/10 p-6 sm:p-8 bg-white rounded-xl flex flex-col justify-between hover:border-black/25 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-body text-[11px] uppercase tracking-wider text-[#C84826] font-semibold">
                        {product.badge}
                      </span>
                    </div>
                    <h3 className="font-headline font-medium text-xl sm:text-2xl text-[#1A1A1A] mb-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                      {product.description}
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {product.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs font-body text-neutral-700">
                          <span className="text-[#C84826] font-bold">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                    <span className="text-xs font-body text-neutral-500">
                      {product.outcome}
                    </span>
                    <a
                      href="/contact"
                      onClick={(e) => handleLinkClick('/contact', e)}
                      className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-[#C84826] hover:text-[#9E3416] transition-colors cursor-pointer shrink-0 ml-4"
                    >
                      <span>Inquire Beta Access</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: HIGH-CONVERTING 14-DAY FREE TRIAL CTA */}
      {primaryProduct.trialCta && (
        <section
          id="trial-cta"
          className="w-full py-16 sm:py-20 md:py-24 bg-[#141413] text-[#FAF9F6] relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C84826]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 md:px-16 text-center relative z-10">
            <span className="font-body text-xs uppercase tracking-widest text-[#C84826] font-semibold block mb-3">
              Zero-Risk Operational Trial
            </span>

            <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#FAF9F6] tracking-tight leading-tight mb-4">
              {primaryProduct.trialCta.headline}
            </h2>

            <p className="font-body text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8">
              {primaryProduct.trialCta.subheadline}
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm font-body text-neutral-300">
              {primaryProduct.trialCta.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C84826]" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={primaryProduct.trialCta.ctaUrl}
                onClick={(e) => handleLinkClick(primaryProduct.trialCta!.ctaUrl, e)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body font-medium text-sm text-white bg-[#C84826] hover:bg-[#B33E1D] px-8 py-4 rounded-full transition-all duration-200 cursor-pointer shadow-lg select-none"
              >
                <span>{primaryProduct.trialCta.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                onClick={(e) => handleLinkClick('/contact', e)}
                className="w-full sm:w-auto inline-flex items-center justify-center font-body font-medium text-sm text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 px-8 py-4 rounded-full transition-colors cursor-pointer select-none"
              >
                Request Enterprise Deployment
              </a>
            </div>
          </div>
        </section>
      )}

      {/* FINAL GLOBAL CTA SECTION */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
