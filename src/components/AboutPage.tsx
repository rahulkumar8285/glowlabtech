import { useEffect } from 'react';
import {
  ShoppingCart,
  Laptop,
  Stethoscope,
  Home,
  Truck,
  TrendingUp,
  Bot,
  Workflow,
  Code2,
  Database,
} from 'lucide-react';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

export default function AboutPage({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) {
  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'About GlowLab Tech — Software, AI & Automation Agency',
      description:
        'We run an engineering agency with deep knowledge and hands-on experience, delivering high-quality software across multiple industries using a versatile multi-tool ecosystem.',
      canonicalUrl: 'https://glowlabtech.com/about',
      ogType: 'website',
    });
    return cleanup;
  }, []);

  return (
    <div id="about-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="about-header"
        title="Deep Engineering Experience / Across Diverse Industries & Modern Tools"
        subtitle="We run an agile engineering and AI agency built on technical rigor, battle-tested knowledge, and proven delivery across multiple industries and modern tool ecosystems."
      />

      {/* SECTION 1 — MANIFESTO / WHO WE ARE */}
      <section
        id="about-manifesto-section"
        className="w-full py-10 sm:py-16 md:py-20 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Left column (~60% width): High-value editorial manifesto */}
            <div className="col-span-12 lg:col-span-7 space-y-6 text-left">
              <div>
                <h2 className="font-headline font-medium text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#1A1A1A] leading-[1.2] tracking-[-0.02em]">
                  Deep technical knowledge, proven execution, and multi-industry versatility.
                </h2>
              </div>

              <div className="space-y-4 font-body text-[#1A1A1A]">
                <p className="text-base sm:text-lg md:text-[19px] leading-[1.65] font-normal text-neutral-800">
                  We run GlowLab Tech with extensive hands-on experience and deep architectural knowledge. Having engineered mission-critical software, custom digital products, and automated AI pipelines over years of real-world operation, we understand what it takes to build resilient systems that perform under load.
                </p>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We hold our work to the highest standards of craftsmanship. We don't deploy brittle no-code shortcuts or superficial templates; we build clean, maintainable, and battle-tested software. Every pipeline, database connection, and API integration is engineered with automated error recovery, enterprise-grade security, and measurable ROI that compounds your bottom line.
                </p>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Our experience is broad and battle-tested across multiple industries—from high-growth E-Commerce and fast-scaling B2B SaaS to Healthcare, Real Estate, and Logistics. By operating fluidly across a multi-tool ecosystem—spanning state-of-the-art AI models, event-driven automation engines, and modern full-stack web frameworks—we choose and engineer the exact right stack for your business.
                </p>
              </div>
            </div>

            {/* Right column (~40% width): GlowLab Tech Studio & Workstation */}
            <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[9/15] sm:aspect-[9/14] lg:aspect-[9/14] overflow-hidden bg-neutral-200 rounded-2xl border border-black/10 shadow-xl group">
                <img
                  src="/about-office.jpg"
                  alt="GlowLab Tech Headquarters & Studio Workstation"
                  className="w-full h-full object-cover object-center contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-repeat"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — MULTI-INDUSTRY EXPERIENCE */}
      <section
        id="about-industries-section"
        className="w-full py-12 sm:py-18 md:py-20 border-b border-black/10 bg-[#F5F4EF]"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="font-headline font-medium text-2xl sm:text-4xl md:text-[42px] leading-tight tracking-[-0.02em] text-[#1A1A1A]">
              Specialized experience across diverse industries.
            </h2>
            <p className="font-body text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
              We don't force generic templates. Having worked across multiple sectors, we tailor our architectures to the unique regulatory, operational, and speed requirements of each business vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1: E-Commerce */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#FAF9F6] border border-black/10 hover:border-black/30 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826] mb-4">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="font-headline font-medium text-xl text-[#1A1A1A] mb-2">
                E-Commerce &amp; Retail
              </h3>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                Omni-channel inventory sync across storefronts, intelligent AI product catalog enrichment, automated fulfillment dispatch, and smart VIP churn prevention.
              </p>
            </div>

            {/* Card 2: B2B SaaS */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#FAF9F6] border border-black/10 hover:border-black/30 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826] mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-headline font-medium text-xl text-[#1A1A1A] mb-2">
                B2B SaaS &amp; Tech
              </h3>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                Product-led user onboarding automations, usage-based alert pipelines, webhook data synchronization, and automated churn prevention sequences.
              </p>
            </div>

            {/* Card 3: Healthcare */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#FAF9F6] border border-black/10 hover:border-black/30 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826] mb-4">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="font-headline font-medium text-xl text-[#1A1A1A] mb-2">
                Healthcare &amp; Wellness
              </h3>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                Secure patient intake flows, automated appointment reminders, confidential lead triaging, and clinical document classification with audit logging.
              </p>
            </div>

            {/* Card 4: Real Estate */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#FAF9F6] border border-black/10 hover:border-black/30 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826] mb-4">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="font-headline font-medium text-xl text-[#1A1A1A] mb-2">
                Real Estate &amp; PropTech
              </h3>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                Instant 24/7 buyer and tenant lead qualification, automated multi-touch follow-ups, dynamic listing syndication, and digital contract execution.
              </p>
            </div>

            {/* Card 5: Logistics */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#FAF9F6] border border-black/10 hover:border-black/30 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826] mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-headline font-medium text-xl text-[#1A1A1A] mb-2">
                Logistics &amp; Supply Chain
              </h3>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                Real-time dispatch tracking, automated carrier status alerts, vendor invoice OCR data extraction, and route anomaly detection triggers.
              </p>
            </div>

            {/* Card 6: FinTech */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#FAF9F6] border border-black/10 hover:border-black/30 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-headline font-medium text-xl text-[#1A1A1A] mb-2">
                FinTech &amp; Professional Services
              </h3>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                Automated bank and ledger reconciliation, KYC identity verification pipelines, dynamic invoice generation, and high-frequency audit reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MULTI-TOOL MASTERY & TECH ECOSYSTEM */}
      <section
        id="about-tools-section"
        className="w-full py-12 sm:py-18 md:py-20 border-b border-black/10 bg-[#FAF9F6]"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="font-headline font-medium text-2xl sm:text-4xl md:text-[42px] leading-tight tracking-[-0.02em] text-[#1A1A1A]">
              Mastering the full modern software &amp; AI stack.
            </h2>
            <p className="font-body text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
              We never lock you into a single proprietary ecosystem. We select, combine, and master the best-in-class tools, foundation models, automation platforms, and cloud technologies for each exact challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Tool Category 1: AI Models */}
            <div className="p-7 sm:p-8 rounded-xl border border-black/10 bg-[#FAF9F6] hover:border-black/30 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline font-medium text-xl text-[#1A1A1A]">
                    AI &amp; Foundation Models
                  </h3>
                  <p className="font-body text-xs text-neutral-500">Autonomous Agents &amp; Reasoning</p>
                </div>
              </div>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                We design and fine-tune reasoning pipelines, RAG semantic knowledge retrieval, multimodal vision parsing, and structured data synthesis across leading foundation models including GPT-4o, Claude 3.5 Sonnet, Gemini 2.0, DeepSeek, and local Ollama deployments.
              </p>
            </div>

            {/* Tool Category 2: Automation Engines */}
            <div className="p-7 sm:p-8 rounded-xl border border-black/10 bg-[#FAF9F6] hover:border-black/30 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826]">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline font-medium text-xl text-[#1A1A1A]">
                    Automation &amp; Orchestration
                  </h3>
                  <p className="font-body text-xs text-neutral-500">Event-Driven Scalable Workflows</p>
                </div>
              </div>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                We engineer bulletproof webhook listeners, automated failovers, asynchronous worker queues, and scheduled tasks using n8n, Make, Python event workers, Temporal, and Redis to handle high volume without data loss.
              </p>
            </div>

            {/* Tool Category 3: Full-Stack Web */}
            <div className="p-7 sm:p-8 rounded-xl border border-black/10 bg-[#FAF9F6] hover:border-black/30 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline font-medium text-xl text-[#1A1A1A]">
                    Full-Stack Software Engineering
                  </h3>
                  <p className="font-body text-xs text-neutral-500">Fast, High-Performance Applications</p>
                </div>
              </div>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                We build interactive client portals, custom operational dashboards, headless commerce engines, and scalable microservices crafted for speed and security with TypeScript, React, Next.js, Astro, Node.js, and FastAPI.
              </p>
            </div>

            {/* Tool Category 4: Cloud & Integrations */}
            <div className="p-7 sm:p-8 rounded-xl border border-black/10 bg-[#FAF9F6] hover:border-black/30 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#C84826]/10 flex items-center justify-center text-[#C84826]">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline font-medium text-xl text-[#1A1A1A]">
                    Cloud Infrastructure &amp; APIs
                  </h3>
                  <p className="font-body text-xs text-neutral-500">Enterprise Integrations &amp; Storage</p>
                </div>
              </div>
              <p className="font-body text-sm text-neutral-600 leading-relaxed">
                We connect and deploy your mission-critical applications across reliable cloud backbones like AWS and Google Cloud, with PostgreSQL, Supabase, and bi-directional CRM syncing for HubSpot, Salesforce, and Stripe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW WE'RE DIFFERENT */}
      <section
        id="about-different-section"
        className="w-full py-10 sm:py-18 md:py-20 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="mb-6 sm:mb-12">
            <h2
              id="about-different-heading"
              className="font-headline font-normal sm:font-medium text-2xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A]"
            >
              How we're different
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-t border-black/10">
            <div className="py-6 sm:py-8 grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] leading-tight text-[#1A1A1A]">
                  We operate, we don't just consult
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed">
                  We don't hand you a slide deck and disappear. We engineer the actual systems, run them in production, monitor them, and iterate continuously based on tangible performance data.
                </p>
              </div>
            </div>

            <div className="py-6 sm:py-8 grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] leading-tight text-[#1A1A1A]">
                  High standards of workmanship
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed">
                  No fragile no-code bandages or temporary hacks. Every architecture we deliver is crafted to enterprise standards—built with resilient error handling, secure data encryption, and clear documentation.
                </p>
              </div>
            </div>

            <div className="py-6 sm:py-8 grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] leading-tight text-[#1A1A1A]">
                  Small team, direct senior engineer access
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed">
                  You work directly with the experienced architects who design and code your systems—not an account executive relaying notes to junior offshore contractors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE BELIEVE (Organized 2x2 grid) */}
      <section
        id="about-values-section"
        className="w-full py-10 sm:py-18 md:py-20 border-b border-black/10 bg-[#FAF9F6]"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="mb-8 sm:mb-12">
            <h2
              id="about-values-heading"
              className="font-headline font-normal sm:font-medium text-2xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A]"
            >
              What we believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="p-5 sm:p-7 md:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200">
              <div>
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] text-[#1A1A1A] leading-tight mb-3">
                  Clarity over complexity
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  If we can't explain what a system does in one sentence, it's not
                  ready. We strip away jargon, unnecessary layers, and decorative tech.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200">
              <div>
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] text-[#1A1A1A] leading-tight mb-3">
                  Outcomes over outputs
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  Deliverables don't matter unless they move the needle. We judge our systems by closed deals, lower customer acquisition costs, and saved human hours.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200">
              <div>
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] text-[#1A1A1A] leading-tight mb-3">
                  Speed with intention
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  Moving fast is only useful if you're pointed in the right direction. We test hypotheses rapidly while ensuring the underlying foundation is bulletproof.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-9 border border-black/10 rounded-[6px] bg-[#FAF9F6] flex flex-col justify-between hover:border-black/30 transition-colors duration-200">
              <div>
                <h3 className="font-headline font-medium text-2xl sm:text-[26px] text-[#1A1A1A] leading-tight mb-3">
                  Honest over impressive
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  We'd rather tell you upfront if an idea won't deliver ROI than build it anyway and invoice you. We treat our clients as long-term engineering partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
