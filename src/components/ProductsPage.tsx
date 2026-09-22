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
  Calendar,
  Clock,
  FileText,
  DollarSign,
  Mail,
  MessageSquare,
  Users,
  BarChart3,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { PRODUCTS_DATA, type ProductItem } from '../data/offeringsData';
import PageHeader from './PageHeader';
import ImagePlaceholder from './ImagePlaceholder';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';
import { PRODUCT_MEDIA_CONFIGS } from '../data/serviceMediaData';

interface ProductsPageProps {
  slug?: string;
  onNavigate?: (path: string) => void;
}

export default function ProductsPage({
  slug,
  onNavigate,
}: ProductsPageProps = {}) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'modules' | 'workflow' | 'why' | 'industries' | 'guides' | 'faq'>('modules');
  const isClickScrollingRef = useRef(false);

  const currentIndex = slug ? PRODUCTS_DATA.findIndex((p) => p.slug === slug) : 0;
  const primaryProduct: ProductItem = currentIndex !== -1 ? PRODUCTS_DATA[currentIndex] : PRODUCTS_DATA[0];
  const mediaConfig = PRODUCT_MEDIA_CONFIGS[primaryProduct.slug];
  const isCrm = primaryProduct.slug === 'growthflow-crm' || primaryProduct.slug === 'omniflow-crm';

  useEffect(() => {
    const faqSchema = primaryProduct?.faqs
      ? {
          '@type': 'FAQPage',
          mainEntity: primaryProduct.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }
      : null;

    const softwareSchema = {
      '@type': 'SoftwareApplication',
      name: `${primaryProduct.name} | GrowthTechSys`,
      operatingSystem: 'Android, iOS, Cloud Web',
      applicationCategory: 'BusinessApplication',
      url: `https://growthtechsys.com/product/${primaryProduct.slug}`,
      description: primaryProduct.description,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '148',
        bestRating: '5',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        description: '14-Day Free Pilot & Team Onboarding',
      },
      creator: {
        '@type': 'Organization',
        name: 'GrowthTechSys',
        url: 'https://growthtechsys.com',
      },
    };

    const isCrm =
      primaryProduct.slug === 'growthflow-crm' || primaryProduct.slug === 'omniflow-crm';

    const productOgImage = isCrm
      ? '/images/products/growthflow-crm-hero.webp'
      : '/images/products/field-sales-tracking-share.webp';

    const breadcrumbSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://growthtechsys.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Products',
          item: 'https://growthtechsys.com/products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: primaryProduct.name,
          item: `https://growthtechsys.com/product/${primaryProduct.slug}`,
        },
      ],
    };

    const productKeywords = isCrm
      ? 'GrowthFlow CRM, unified lead management, customer CRM, email marketing automation, whatsapp marketing platform, activity-based email personalization, 97 open rate email, universal mail provider, AWS SES email marketing, WhatsApp Business API CRM, GrowthTechSys GrowthFlow'
      : 'field sales automation software, gps employee tracking app, field force tracking, beat planning software, geo-fenced attendance app, mock gps detection, travel reimbursement automation, sales rep tracking India';

    const cleanup = updatePageSEO({
      title: `${primaryProduct.name} | GrowthTechSys`,
      description: primaryProduct.tagline,
      keywords: productKeywords,
      canonicalUrl: `https://growthtechsys.com/product/${primaryProduct.slug}`,
      ogType: 'website',
      ogImage: productOgImage,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': faqSchema ? [softwareSchema, breadcrumbSchema, faqSchema] : [softwareSchema, breadcrumbSchema],
      },
    });
    return cleanup;
  }, [primaryProduct]);

  // Scroll spy to highlight the corresponding tab as user scrolls through sections
  useEffect(() => {
    const sections = [
      { id: 'modules', tab: 'modules' as const },
      { id: 'workflow', tab: 'workflow' as const },
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

  const scrollToSection = (sectionId: string, tab: 'modules' | 'workflow' | 'why' | 'industries' | 'guides' | 'faq') => {
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
      case 'module-beat-planning':
        return <Calendar className="w-5 h-5 text-[#C84826]" />;
      case 'module-tracking':
        return <NavIcon className="w-5 h-5 text-[#C84826]" />;
      case 'module-attendance':
        return <ShieldCheck className="w-5 h-5 text-[#C84826]" />;
      case 'module-visits':
        return <Clock className="w-5 h-5 text-[#C84826]" />;
      case 'module-poe':
        return <CheckCircle2 className="w-5 h-5 text-[#C84826]" />;
      case 'module-leads':
      case 'module-crm-leads':
        return <Briefcase className="w-5 h-5 text-[#C84826]" />;
      case 'module-personalized-email':
        return <Mail className="w-5 h-5 text-[#C84826]" />;
      case 'module-mail-provider':
        return <Sliders className="w-5 h-5 text-[#C84826]" />;
      case 'module-whatsapp-marketing':
        return <MessageSquare className="w-5 h-5 text-[#C84826]" />;
      case 'module-omnichannel-orchestration':
        return <Layers className="w-5 h-5 text-[#C84826]" />;
      case 'module-telemetry-tracking':
        return <BarChart3 className="w-5 h-5 text-[#C84826]" />;
      case 'module-unified-inbox':
        return <Users className="w-5 h-5 text-[#C84826]" />;
      case 'module-dsr':
        return <FileText className="w-5 h-5 text-[#C84826]" />;
      case 'module-expenses':
        return <DollarSign className="w-5 h-5 text-[#C84826]" />;
      case 'module-offline':
        return <WifiOff className="w-5 h-5 text-[#C84826]" />;
      case 'module-integration':
      case 'module-api-webhooks':
        return <Database className="w-5 h-5 text-[#C84826]" />;
      default:
        return <MapPin className="w-5 h-5 text-[#C84826]" />;
    }
  };

  return (
    <div id="products-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="product-header"
        title={primaryProduct.name.includes('&') ? primaryProduct.name.replace('&', '/ &') : primaryProduct.name}
        subtitle={primaryProduct.tagline}
        rightContent={
          mediaConfig?.headerHero ? (
            <div className="w-full max-w-lg lg:max-w-none">
              <ImagePlaceholder {...mediaConfig.headerHero} />
            </div>
          ) : undefined
        }
      />

      {/* SUB-NAVIGATION & SECTION TABS (STICKY) */}
      <div className="w-full border-b border-black/[0.08] bg-[#FAF9F6]/95 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm font-body">
          <div className="hidden md:flex items-center gap-2 truncate pr-2 shrink-0">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="hover:text-[#1A1A1A] transition-colors shrink-0 text-neutral-500"
            >
              Home
            </a>
            <span className="text-neutral-300 shrink-0">/</span>
            <span className="text-neutral-400 shrink-0">Product</span>
            <span className="text-neutral-300 shrink-0">/</span>
            <span className="text-[#C84826] font-medium truncate">{primaryProduct.shortName}</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 w-full md:w-auto justify-start md:justify-end">
            <button
              type="button"
              onClick={() => scrollToSection('modules', 'modules')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
                activeTab === 'modules'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              Modules
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('workflow', 'workflow')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
                activeTab === 'workflow'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              Workflow
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('why-needed', 'why')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
                activeTab === 'why'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              Impact
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('industries', 'industries')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
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
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
                activeTab === 'guides'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              Guides
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('faq', 'faq')}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'text-neutral-600 hover:text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              FAQ
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCT OVERVIEW & IMPACT CARD */}
      <section
        id="overview"
        className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-10 sm:py-14 md:py-16 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="border border-black/10 bg-white rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-96 h-96 bg-[#C84826]/5 rounded-full blur-3xl pointer-events-none"
            />

            <div className="mb-6 relative z-10">
              <p className="font-body text-base sm:text-lg text-neutral-700 leading-relaxed max-w-4xl">
                {primaryProduct.description}
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

      {/* SECTION 1: SAAS MODULES */}
      <section
        id="modules"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 scroll-mt-36"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          {/* Section 1 Header: 2-Column (Left: Image | Right: Headline & Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            {/* Left Side: Modules Composite Image */}
            <div className="lg:col-span-6 w-full order-2 lg:order-1">
              {mediaConfig?.modulesComposite ? (
                <ImagePlaceholder {...mediaConfig.modulesComposite} />
              ) : null}
            </div>

            {/* Right Side: Headline & Description */}
            <div className="lg:col-span-6 w-full text-left order-1 lg:order-2">
              <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                {isCrm
                  ? 'Modular revenue engines built for high-conversion omnichannel growth.'
                  : 'Enterprise modules engineered for end-to-end field sales accountability.'}
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed">
                {isCrm
                  ? 'Unify lead pipelines, behavior-triggered personalized email sequences, official WhatsApp marketing, and real-time telemetry—all connected to any mail provider.'
                  : 'Empower your field reps with mobile-first automation for beat plans, geo-checkins, instant order booking, and verified travel reimbursements—while leadership retains complete real-time visibility.'}
              </p>
            </div>
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

      {/* SECTION 2: HOW IT WORKS / DAILY WORKFLOW */}
      {primaryProduct.workflow && (
        <section
          id="workflow"
          className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-[#FAF9F6] scroll-mt-36"
        >
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
              <h2 className="font-headline font-semibold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                {isCrm ? 'How GrowthFlow CRM Works' : 'How Field Sales Automation Works'}
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                {isCrm
                  ? 'A seamless 4-step revenue cycle from lead ingestion and behavioral email personalization to automated WhatsApp outreach and real-time attribution.'
                  : 'A seamless, automated 4-step daily cycle from morning shift kickoff to evening expense settlement—keeping reps focused on selling and leadership fully informed.'}
              </p>
            </div>

            {/* 4-Step Daily Workflow Flowchart Diagram (Constrained size matching service pages) */}
            {mediaConfig?.dayCycleWorkflow && (
              <div className="mb-10 sm:mb-12 flex items-center justify-center">
                <div className="w-full max-w-3xl">
                  <ImagePlaceholder {...mediaConfig.dayCycleWorkflow} />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
              {primaryProduct.workflow.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-black/25 hover:shadow-sm transition-all relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-headline font-semibold text-2xl sm:text-3xl text-[#C84826]/30 group-hover:text-[#C84826] transition-colors">
                        {item.step}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#C84826]" />
                    </div>

                    <h3 className="font-headline font-medium text-lg sm:text-xl text-[#1A1A1A] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 font-body text-xs text-neutral-500 italic">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: WHY YOU NEED FIELD AUTOMATION */}
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
                {primaryProduct.whyNeeded.subheadline}
              </p>
            </div>

            {/* Contrast Grid: Pain Points vs. GrowthTechSys Solution */}
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
                  <span>The GrowthTechSys Field Accountability System</span>
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
                {isCrm
                  ? 'Tailored revenue architectures for high-velocity growth sectors.'
                  : 'Designed for businesses with personnel on the move across India.'}
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                {isCrm
                  ? 'Whether you run B2B SaaS onboarding, D2C cart abandonment recovery, real estate site visit scheduling, or agency outreach, GrowthFlow adapts directly to your customer journey.'
                  : 'Whether you oversee pharmaceutical territory managers, solar technicians, or outdoor media audit teams, our platform adapts directly to your operational SOPs.'}
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
                        <span className="font-medium text-[#C84826] block mb-0.5">GrowthTechSys Solution:</span>
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
                {isCrm
                  ? 'Deep-dive engineering playbooks & revenue architecture guides.'
                  : 'Evaluate our field tracking tools for your specific team workflow and operational needs.'}
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                {isCrm
                  ? 'Explore in-depth blueprints on email deliverability, universal mail provider configuration, Meta WhatsApp Business compliance, and total cost of ownership.'
                  : 'Dive into in-depth playbooks detailing how to audit routes, prevent GPS spoofing, and validate client visits.'}
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

      {/* SECTION 4.5: UNIFIED PLATFORM TELEMETRY & APP PREVIEW */}
      {mediaConfig?.socialShare && (
        <section className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-white">
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Device Ecosystem Image */}
              <div className="lg:col-span-6 w-full order-2 lg:order-1">
                <ImagePlaceholder {...mediaConfig.socialShare} />
              </div>

              {/* Right Side: Headline & Description */}
              <div className="lg:col-span-6 w-full text-left order-1 lg:order-2">
                <h2 className="font-headline font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                  {isCrm
                    ? 'Complete Omnichannel Command Center Across Web & Mobile'
                    : 'Unified Field Force Management On Any Device'}
                </h2>
                <p className="font-body text-sm sm:text-base text-neutral-600 mt-4 leading-relaxed">
                  {isCrm
                    ? 'Orchestrate personalized email campaigns, automated WhatsApp broadcasts, and live lead pipeline stages from one collaborative interface.'
                    : 'Real-time synchronization between the web dispatch console for managers and the lightweight mobile application for field representatives.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: FIELD SALES AUTOMATION & TRACKING — INTERACTIVE FAQ */}
      {primaryProduct.faqs && (
        <section
          id="faq"
          className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10 bg-white scroll-mt-36"
        >
          <div className="w-full max-w-4xl mx-auto px-5 sm:px-12 md:px-16">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <h2 className="font-headline font-semibold text-2xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
                {isCrm
                  ? 'GrowthFlow CRM & Omnichannel Marketing FAQ'
                  : 'Field Sales Automation & Workforce Tracking FAQ'}
              </h2>
              <p className="font-body text-xs sm:text-sm text-neutral-500 mt-2.5">
                {isCrm
                  ? 'Common questions about 97% open rates, universal mail providers, WhatsApp Business API compliance, data privacy, and CRM migrations.'
                  : 'Common questions about beat planning, mock GPS detection, privacy laws (DPDP Act), offline sync, and ERP integrations.'}
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
