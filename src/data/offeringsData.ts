export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string;
  challenges: string[];
  deliverables: string[];
  architecture: {
    title: string;
    description: string;
  }[];
  outcome: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  features: string[];
  specs: string[];
  outcome: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-automation',
    slug: 'ai-automation',
    number: '01',
    name: 'AI Automation & Internal Workflows',
    shortTitle: 'AI Automation',
    tagline: 'Scale operations without expanding headcount through resilient autonomous workflows.',
    summary: 'Eliminate manual bottlenecks across operations, client onboarding, and reporting.',
    description:
      'We design and deploy custom event-driven automation systems tailored strictly to your operations. No generic Zapier templates with fragile connections. We build resilient webhook engines with self-healing retries that sync data across your ERP, CRM, Slack, and accounting stacks automatically.',
    challenges: [
      'Manual, repetitive data entry eating up hours across team members every day',
      'Fragmented software stacks where data fails to synchronize in real time',
      'Delays in customer onboarding and contract dispatch resulting in drop-offs',
      'Silent workflow failures with zero logging or alert notifications',
    ],
    architecture: [
      {
        title: 'Event-Driven Trigger Architecture',
        description: 'Instant event webhooks processing transactions and state changes in sub-seconds.',
      },
      {
        title: 'Intelligent Ingestion Pipeline',
        description: 'LLM-powered document extraction reading PDFs, contracts, invoices, and structured forms accurately.',
      },
      {
        title: 'Self-Healing Retry Logic',
        description: 'Exponential backoff and automated failover recovery ensuring zero message drops during API outages.',
      },
      {
        title: 'Unified State Management',
        description: 'Bi-directional synchronization between legacy database tables and modern cloud tools.',
      },
    ],
    deliverables: [
      'Multi-app workflow architecture & webhook pipeline',
      'Intelligent document ingestion and automated data extraction',
      'Automated customer onboarding & contract dispatch',
      'Real-time Slack/Teams anomaly & milestone alerting',
      'Comprehensive runbook & API maintenance dashboard',
    ],
    outcome: 'Eliminates 30–50 hours of repetitive data entry per week with 99.9% pipeline uptime.',
    metrics: [
      { value: '30–50 hrs', label: 'Saved per week' },
      { value: '99.9%', label: 'Pipeline uptime' },
      { value: '< 2 sec', label: 'Trigger response latency' },
    ],
  },
  {
    id: 'service-video',
    slug: 'ai-video-creation',
    number: '02',
    name: 'AI Video Creation & Creative Systems',
    shortTitle: 'AI Video Creation',
    tagline: 'Produce and split-test dozens of high-converting video variations every week on autopilot.',
    summary: 'High-velocity short-form creative, programmatic UGC, and localized video at scale.',
    description:
      'Turn text prompts and customer testimonials into high-converting video assets ready for Meta, TikTok, and YouTube Shorts. We establish dynamic scripting, synthetic voice cloning, auto-captions, and automated B-roll insertion engines that allow you to test 30 variations in the time it usually takes to shoot one.',
    challenges: [
      'High creative production costs running into thousands per single ad',
      'Ad creative fatigue hitting paid campaigns within 7 to 10 days',
      'Slow production cycles causing missed trend opportunities',
      'Inability to localize audio and captions across global target markets',
    ],
    architecture: [
      {
        title: 'Programmatic Rendering Pipeline',
        description: 'Serverless FFmpeg video assembly rendering vertical (9:16) and landscape (16:9) formats simultaneously.',
      },
      {
        title: 'Dynamic Synthetic Voice Modeling',
        description: 'Studio-quality voice generation with precise pacing, emotional inflection, and custom accent training.',
      },
      {
        title: 'Kinetic Subtitle Synchronization',
        description: 'Word-by-word highlighted captions timed mathematically to audio frequencies for maximum retention.',
      },
      {
        title: 'Batch Matrix Permutations',
        description: 'Automated permutation engine generating 20+ hooks and CTA variations from a single core brief.',
      },
    ],
    deliverables: [
      'Automated video rendering pipelines with dynamic aspect ratios',
      'AI voice model training & studio-grade synthesis',
      'Automated kinetic typography & subtitle synchronization',
      'Batch generation for paid social split-testing',
      'Cloud storage bucket with organized asset tagging',
    ],
    outcome: '10x increase in weekly creative testing volume at a fraction of traditional production costs.',
    metrics: [
      { value: '10x', label: 'Testing velocity' },
      { value: '75%', label: 'Cost reduction vs shoots' },
      { value: '30+', label: 'Variations generated per run' },
    ],
  },
  {
    id: 'service-leadgen',
    slug: 'lead-generation',
    number: '03',
    name: 'Lead Generation Systems',
    shortTitle: 'Lead Generation',
    tagline: 'Predictable qualified meeting pipelines fueled by programmatic buying signals.',
    summary: 'End-to-end inbound and outbound infrastructure that routes vetted buyers to sales.',
    description:
      'Stop relying on unverified lists and broken forms. We build proprietary scraping and lead enrichment engines that monitor buying signals, identify company hiring spikes or tech stack changes, score prospects mathematically, and inject warm qualified leads straight into your sales pipeline.',
    challenges: [
      'High bounce rates and burned SDR time from stale or unverified contact data',
      'Generic outreach with zero context about prospective company needs',
      'Manual qualification consuming senior sales reps valuable call time',
      'Lost inbound leads due to slow response times or form drop-offs',
    ],
    architecture: [
      {
        title: 'Waterfall Enrichment Engines',
        description: 'Multi-provider query cascades (Apollo, Clay, Hunter, Clearbit) achieving 85%+ verified email/phone coverage.',
      },
      {
        title: 'Signal Detection Scrapers',
        description: 'Automated scrapers monitoring job boards, funding news, leadership transitions, and tech installs.',
      },
      {
        title: 'Algorithmic Lead Scoring',
        description: 'Proprietary qualification formula ranking prospects by ICP fit, revenue band, and intent score.',
      },
      {
        title: 'Direct CRM Pipeline Injection',
        description: 'Immediate sync with HubSpot, Salesforce, or Pipedrive complete with enriched company dossiers.',
      },
    ],
    deliverables: [
      'Intent-based data scrapers & waterfall enrichment (Apollo, Clay, Clearbit)',
      'Algorithmic qualification scoring & deduplication logic',
      'Instant routing to calendar booking engines with qualification filters',
      'Two-way CRM sync (HubSpot, Salesforce, Pipedrive)',
      'Automated prospect research cards generated for sales calls',
    ],
    outcome: 'Consistent influx of verified ICP contacts with complete company context on day one.',
    metrics: [
      { value: '85%+', label: 'Verified contact accuracy' },
      { value: '3x', label: 'Sales qualified lead velocity' },
      { value: '0 mins', label: 'Manual research needed per lead' },
    ],
  },
  {
    id: 'service-outreach',
    slug: 'cold-email-outreach',
    number: '04',
    name: 'Cold Email & Outreach Infrastructure',
    shortTitle: 'Cold Email & Outreach',
    tagline: 'Deliverability-hardened outbound engines that book meetings without domain risk.',
    summary: 'Deliverability-safe outbound systems that book meetings on autopilot.',
    description:
      'Outreach fails when domains burn and copy looks like spam. We set up isolated secondary domains, custom DNS records (SPF, DKIM, DMARC), progressive warm-up schedules, and hyper-relevant dynamic personalization algorithms that maintain 65%+ open rates and keep your primary domain safe.',
    challenges: [
      'Emails landing directly in spam folders due to poor sender reputation',
      'Primary business domain blacklisted or penalized by Google/Microsoft',
      'Low response rates from robotic, copy-paste templates that look mass-produced',
      'Manual inbox management and missed replies from interested buyers',
    ],
    architecture: [
      {
        title: 'Secondary Domain Isolation',
        description: 'Multi-domain cluster infrastructure completely separating outbound campaigns from company root domains.',
      },
      {
        title: 'Strict Security DNS Hardening',
        description: 'Granular SPF, DKIM 2048-bit keys, DMARC alignment, MX rotation, and custom tracking domains.',
      },
      {
        title: 'Automated Warm-Up & Rotation',
        description: 'Algorithmic peer-to-peer warming schedules keeping sender deliverability above 95% reputation thresholds.',
      },
      {
        title: 'AI Personalization Engine',
        description: 'Dynamic snippet injection referencing prospect website copy, recent achievements, and relevant case studies.',
      },
    ],
    deliverables: [
      'Secondary domain procurement & DNS security hardening',
      'Inbox warm-up monitoring & deliverability rotation',
      'AI-enriched copy personalization based on prospect website & news',
      'Automated inbox triage & booking notification webhooks',
      'Dedicated deliverability monitoring dashboard',
    ],
    outcome: 'Predictable qualified meeting volume without manual follow-up or reputation risk.',
    metrics: [
      { value: '65%+', label: 'Average open rate' },
      { value: '99%+', label: 'Inbox placement rate' },
      { value: '15–30', label: 'Booked calls per month average' },
    ],
  },
  {
    id: 'service-web',
    slug: 'website-design',
    number: '05',
    name: 'Website Design & High-Conversion Systems',
    shortTitle: 'Website Design',
    tagline: 'Editorial web platforms engineered for speed, authority, and conversions.',
    summary: 'Premium websites and ongoing management, built to convert.',
    description:
      'We reject slow, bloated page builders and template themes. We build bespoke digital front doors using modern performant stacks that load instantly, articulate your value proposition with editorial clarity, and guide visitors toward high-intent booking conversions.',
    challenges: [
      'Slow, bloated websites losing 40%+ of traffic before the page even loads',
      'Generic WordPress/Webflow templates that fail to convey authority or craftsmanship',
      'Complicated checkout or booking flows driving high bounce rates',
      'Lack of ongoing maintenance, leaving pages outdated and vulnerable',
    ],
    architecture: [
      {
        title: 'Editorial Design System',
        description: 'Bespoke typographic rhythm, deliberate whitespace, and custom components built specifically for your brand.',
      },
      {
        title: 'Modern Performant Frontend',
        description: 'Clean modern codebases with sub-second time-to-interactive and 95+ Google Lighthouse scores.',
      },
      {
        title: 'Conversion-Engineered Funnels',
        description: 'Frictionless calendar embedding, interactive qualification steps, and smart social proof placement.',
      },
      {
        title: 'Active Retainer Management',
        description: 'Continuous speed audits, copy iterations, new page deployments, and 99.9% uptime monitoring.',
      },
    ],
    deliverables: [
      'Custom typographic and layout systems tailored to your brand identity',
      'Sub-second load times with clean semantic markup',
      'Native calendar booking and interactive qualification funnels',
      'Continuous maintenance, uptime monitoring, and speed optimization',
      'Full source code ownership with no vendor lock-in',
    ],
    outcome: 'Elevated brand credibility and a measurable lift in visitor-to-call conversion rates.',
    metrics: [
      { value: '< 0.8s', label: 'Page load time' },
      { value: '98+', label: 'Lighthouse performance' },
      { value: '35%+', label: 'Lift in conversion rate' },
    ],
  },
  {
    id: 'service-content',
    slug: 'content-strategy',
    number: '06',
    name: 'Content Strategy & Editorial Engines',
    shortTitle: 'Content Strategy',
    tagline: 'A compounding authority system that builds pipeline instead of one-off posts.',
    summary: 'A content system that compounds, not one-off posts.',
    description:
      'Transform one long-form conversation, podcast, or client case study into a multi-channel editorial engine. We build structured workflows that distill core insights into LinkedIn thought-leadership essays, newsletters, X threads, and search-indexed technical breakdowns systematically.',
    challenges: [
      'Founder burnout from trying to create social posts from scratch every day',
      'Inconsistent publishing cadence causing audience drop-off',
      'Superficial AI copy that sounds generic, robotic, and damages executive credibility',
      'Zero attribution connecting content views to inbound business leads',
    ],
    architecture: [
      {
        title: 'Voice Blueprint Modeling',
        description: 'Custom prompting models trained on your past writing, interviews, and specific technical viewpoints.',
      },
      {
        title: 'Source-to-Channel Transmutation',
        description: 'One 30-minute audio conversation yields 5 LinkedIn essays, 3 X threads, and 1 detailed client newsletter.',
      },
      {
        title: 'Automated Staging & Review',
        description: 'Drafts pre-populated into your approval workspace with one-click scheduling and revisions.',
      },
      {
        title: 'Attribution Tracking',
        description: 'UTM tracking and inbound discovery fields pinpointing which posts originated sales meetings.',
      },
    ],
    deliverables: [
      'Source-to-channel repurposing workflows & prompt frameworks',
      'Editorial calendar synchronization with automated staging',
      'Brand tone guidelines embedded directly into generation models',
      'Analytics aggregation tracking engagement signals and attribution',
      'Bi-weekly performance review and hook iteration matrix',
    ],
    outcome: 'Sustained top-of-mind brand presence without draining internal founder or executive time.',
    metrics: [
      { value: '1 to 10', label: 'Repurposing ratio per asset' },
      { value: '2 hrs/mo', label: 'Founder time required' },
      { value: '4x', label: 'Growth in organic profile impressions' },
    ],
  },
  {
    id: 'service-software',
    slug: 'software-development',
    number: '07',
    name: 'Software Development & Custom AI Solutions',
    shortTitle: 'Custom Software & AI',
    tagline: 'Bespoke micro-SaaS, authenticated portals, and private fine-tuned AI models.',
    summary: 'Tailored web apps, internal dashboards, and fine-tuned proprietary AI models.',
    description:
      'When off-the-shelf software falls short, we build custom micro-SaaS applications, private internal portals, and bespoke AI applications. We handle everything from database architecture to secure API routing and frontend interaction design.',
    challenges: [
      'Subscription fatigue paying for multiple SaaS tools that each solve only 60% of your problem',
      'Data security risks sending sensitive company data through public third-party AI APIs',
      'Clunky internal workflows relying on fragile spreadsheets and disconnected sheets',
      'Missing features in existing software blocking critical business expansion',
    ],
    architecture: [
      {
        title: 'Modern Full-Stack Architecture',
        description: 'High-performance TypeScript, React, Node.js, and PostgreSQL built with scalable cloud primitives.',
      },
      {
        title: 'Private Retrieval-Augmented Generation (RAG)',
        description: 'Secure vector databases querying internal documents with encrypted enterprise permission controls.',
      },
      {
        title: 'Role-Based Client Portals',
        description: 'Clean authenticated dashboards for your clients and team with granular access control.',
      },
      {
        title: 'CI/CD & Server Observability',
        description: 'Automated deployment pipelines, zero-downtime rollouts, and proactive error logging.',
      },
    ],
    deliverables: [
      'Custom full-stack web applications (TypeScript, Node, React, PostgreSQL/Cloud DB)',
      'Proprietary API gateway integrations & authenticated client portals',
      'Private Retrieval-Augmented Generation (RAG) on internal company docs',
      'End-to-end cloud deployment, CI/CD, and server-side observability',
      'Complete intellectual property transfer and source code documentation',
    ],
    outcome: 'Proprietary IP and custom tools that create defensible operational moats for your business.',
    metrics: [
      { value: '100%', label: 'Proprietary IP ownership' },
      { value: 'Zero', label: 'Vendor license lock-in' },
      { value: '< 4 wks', label: 'Sprint delivery to production' },
    ],
  },
];

export const PRODUCTS_DATA: ProductItem[] = [];

