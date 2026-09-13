import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';

interface ServiceDetail {
  number: string;
  name: string;
  summary: string;
  description: string;
  deliverables: string[];
  outcome: string;
}

const DETAILED_SERVICES: ServiceDetail[] = [
  {
    number: '01',
    name: 'AI Automation & Internal Workflows',
    summary: 'Eliminate manual bottlenecks across operations, client onboarding, and reporting.',
    description:
      'We design and deploy custom event-driven automation systems tailored strictly to your operations. No generic Zapier templates with fragile connections. We build resilient webhook engines with self-healing retries that sync data across your ERP, CRM, Slack, and accounting stacks automatically.',
    deliverables: [
      'Multi-app workflow architecture & webhook pipeline',
      'Intelligent document ingestion and automated data extraction',
      'Automated customer onboarding & contract dispatch',
      'Real-time Slack/Teams anomaly & milestone alerting',
    ],
    outcome: 'Eliminates 30–50 hours of repetitive data entry per week with 99.9% pipeline uptime.',
  },
  {
    number: '02',
    name: 'AI Video Creation & Creative Systems',
    summary: 'High-velocity short-form creative, programmatic UGC, and localized video at scale.',
    description:
      'Turn text prompts and customer testimonials into high-converting video assets ready for Meta, TikTok, and YouTube Shorts. We establish dynamic scripting, synthetic voice cloning, auto-captions, and automated B-roll insertion engines that allow you to test 30 variations in the time it usually takes to shoot one.',
    deliverables: [
      'Automated video rendering pipelines with dynamic aspect ratios',
      'AI voice model training & studio-grade synthesis',
      'Automated kinetic typography & subtitle synchronization',
      'Batch generation for paid social split-testing',
    ],
    outcome: '10x increase in weekly creative testing volume at a fraction of traditional production costs.',
  },
  {
    number: '03',
    name: 'Lead Generation Systems',
    summary: 'End-to-end inbound and outbound infrastructure that routes vetted buyers to sales.',
    description:
      'Stop relying on unverified lists and broken forms. We build proprietary scraping and lead enrichment engines that monitor buying signals, identify company hiring spikes or tech stack changes, score prospects mathematically, and inject warm qualified leads straight into your sales pipeline.',
    deliverables: [
      'Intent-based data scrapers & waterfall enrichment (Apollo, Clay, Clearbit)',
      'Algorithmic qualification scoring & deduplication logic',
      'Instant routing to calendar booking engines with qualification filters',
      'Two-way CRM sync (HubSpot, Salesforce, Pipedrive)',
    ],
    outcome: 'Consistent influx of verified ICP contacts with complete company context on day one.',
  },
  {
    number: '04',
    name: 'Cold Email & Outreach Infrastructure',
    summary: 'Deliverability-hardened outbound engines that generate qualified pipeline on autopilot.',
    description:
      'Outreach fails when domains burn and copy looks like spam. We set up isolated secondary domains, custom DNS records (SPF, DKIM, DMARC), progressive warm-up schedules, and hyper-relevant dynamic personalization algorithms that maintain 65%+ open rates and keep your primary domain safe.',
    deliverables: [
      'Secondary domain procurement & DNS security hardening',
      'Inbox warm-up monitoring & deliverability rotation',
      'AI-enriched copy personalization based on prospect website & news',
      'Automated inbox triage & booking notification webhooks',
    ],
    outcome: 'Predictable qualified meeting volume without manual follow-up or reputation risk.',
  },
  {
    number: '05',
    name: 'Website Design & High-Conversion Systems',
    summary: 'Clean editorial web applications engineered for speed, authority, and conversion.',
    description:
      'We reject slow, bloated page builders and template themes. We build bespoke digital front doors using modern performant stacks that load instantly, articulate your value proposition with editorial clarity, and guide visitors toward high-intent booking conversions.',
    deliverables: [
      'Custom typographic and layout systems tailored to your brand identity',
      'Sub-second load times with clean semantic markup',
      'Native calendar booking and interactive qualification funnels',
      'Continuous maintenance, uptime monitoring, and speed optimization',
    ],
    outcome: 'Elevated brand credibility and a measurable lift in visitor-to-call conversion rates.',
  },
  {
    number: '06',
    name: 'Content Strategy & Editorial Engines',
    summary: 'Compounding organic authority systems rather than sporadic, disjointed posts.',
    description:
      'Transform one long-form conversation, podcast, or client case study into a multi-channel editorial engine. We build structured workflows that distill core insights into LinkedIn thought-leadership essays, newsletters, X threads, and search-indexed technical breakdowns systematically.',
    deliverables: [
      'Source-to-channel repurposing workflows & prompt frameworks',
      'Editorial calendar synchronization with automated staging',
      'Brand tone guidelines embedded directly into generation models',
      'Analytics aggregation tracking engagement signals and attribution',
    ],
    outcome: 'Sustained top-of-mind brand presence without draining internal founder or executive time.',
  },
  {
    number: '07',
    name: 'Software Development & Custom AI Solutions',
    summary: 'Tailored web apps, internal dashboards, and fine-tuned proprietary AI models.',
    description:
      'When off-the-shelf software falls short, we build custom micro-SaaS applications, private internal portals, and bespoke AI applications. We handle everything from database architecture to secure API routing and frontend interaction design.',
    deliverables: [
      'Custom full-stack web applications (TypeScript, Node, React, PostgreSQL/Cloud DB)',
      'Proprietary API gateway integrations & authenticated client portals',
      'Private Retrieval-Augmented Generation (RAG) on internal company docs',
      'End-to-end cloud deployment, CI/CD, and server-side observability',
    ],
    outcome: 'Proprietary IP and custom tools that create defensible operational moats for your business.',
  },
];

export default function ServicesPage() {
  return (
    <div id="services-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="services-header"
        eyebrow="Services"
        title="What we do / and how we do it."
        subtitle="End-to-end AI automation, lead engines, creative pipelines, and custom software — engineered for immediate pipeline impact."
      />

      {/* DETAILED SERVICES BREAKDOWN */}
      <section
        id="services-breakdown-section"
        className="w-full py-14 sm:py-18 md:py-20 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="divide-y divide-black/10">
            {DETAILED_SERVICES.map((service) => (
              <div
                key={service.number}
                id={`service-item-${service.number}`}
                className="py-8 sm:py-10 lg:py-12 grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start"
              >
                {/* Index Number */}
                <div className="col-span-12 sm:col-span-2 lg:col-span-1">
                  <span className="font-body text-sm sm:text-base font-medium tabular-nums text-neutral-400 block pt-1">
                    {service.number}
                  </span>
                </div>

                {/* Title & Short Summary */}
                <div className="col-span-12 sm:col-span-10 lg:col-span-5">
                  <h3 className="font-headline font-medium text-2xl sm:text-3xl lg:text-[32px] leading-tight text-[#1A1A1A]">
                    {service.name}
                  </h3>
                  <p className="font-body text-base sm:text-lg text-neutral-500 mt-2.5 sm:mt-3 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Detailed Description, Deliverables & Measurable Outcome */}
                <div className="col-span-12 lg:col-span-6 space-y-4">
                  <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Scope / Deliverables list — clean plain text rows, no icon cards, no bullet dots */}
                  <div className="pt-2 border-t border-black/[0.06]">
                    <span className="font-body text-xs uppercase tracking-wider text-neutral-400 block mb-2 font-medium">
                      Core Architecture
                    </span>
                    <ul className="space-y-1.5 font-body text-sm sm:text-[15px] text-[#1A1A1A]">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-neutral-400 text-xs mt-0.5 select-none">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metric Outcome statement */}
                  <div className="pt-2 border-t border-black/[0.06]">
                    <p className="font-body text-xs sm:text-sm text-[#C84826] font-medium leading-relaxed">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE ENGAGE / ENGAGEMENT MODELS */}
      <section
        id="engagement-models-section"
        className="w-full py-14 sm:py-18 md:py-20 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 text-left">
          <p className="font-body text-[13px] uppercase tracking-[0.1em] text-neutral-500 mb-3 select-none">
            Engagement models
          </p>
          <h2
            id="engagement-models-heading"
            className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A] mb-8 sm:mb-10"
          >
            How we partner with your team
          </h2>

          <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            {/* Model 01: Sprint Build */}
            <div
              id="model-sprint"
              className="col-span-12 md:col-span-6 border-t border-black/10 pt-5 sm:pt-6"
            >
              <span className="font-body text-xs sm:text-sm font-medium tabular-nums text-neutral-400 block mb-2">
                01
              </span>
              <h3 className="font-headline font-medium text-2xl sm:text-3xl text-[#1A1A1A] mb-3">
                Sprint Build (Fixed Scope)
              </h3>
              <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed mb-4">
                Best for businesses that need a specific system built, tested, and handed over fast. We map the requirements, engineer the pipeline, integrate your tools, train your team, and guarantee performance.
              </p>
              <div className="font-body text-sm text-neutral-500 space-y-1.5">
                <p>— 2 to 3 weeks delivery cycle</p>
                <p>— Direct builder access with daily updates</p>
                <p>— 30-day post-launch warranty & tuning</p>
              </div>
            </div>

            {/* Model 02: Systems Retainer */}
            <div
              id="model-retainer"
              className="col-span-12 md:col-span-6 border-t border-black/10 pt-5 sm:pt-6"
            >
              <span className="font-body text-xs sm:text-sm font-medium tabular-nums text-neutral-400 block mb-2">
                02
              </span>
              <h3 className="font-headline font-medium text-2xl sm:text-3xl text-[#1A1A1A] mb-3">
                Dedicated Systems Partner
              </h3>
              <p className="font-body text-base sm:text-[17px] text-neutral-600 leading-relaxed mb-4">
                For companies scaling rapidly that require continuous automation engineering, outbound optimization, video creative testing, and technical growth infrastructure as an embedded operational arm.
              </p>
              <div className="font-body text-sm text-neutral-500 space-y-1.5">
                <p>— Continuous iteration and new workflow builds</p>
                <p>— Ongoing deliverability & API monitoring</p>
                <p>— Dedicated Slack channel with same-day turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (Site-wide identical) */}
      <FinalCTASection />
    </div>
  );
}
