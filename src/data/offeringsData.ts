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

export interface ProductModule {
  id: string;
  title: string;
  badge?: string;
  description: string;
  bullets?: string[];
  link?: string;
  linkText?: string;
}

export interface BuyerGuide {
  id: string;
  title: string;
  summary: string;
  link: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductIndustry {
  title: string;
  problem: string;
  solution: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  shortName: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  heroNotice?: string;
  features: string[];
  specs: string[];
  outcome: string;
  targetAudience?: string;
  stats?: {
    value: string;
    label: string;
  }[];
  modules?: ProductModule[];
  whyNeeded?: {
    headline: string;
    subheadline: string;
    painPoints: string[];
    outcomes: string[];
  };
  industries?: ProductIndustry[];
  buyerGuides?: BuyerGuide[];
  faqs?: ProductFAQ[];
  trialCta?: {
    headline: string;
    subheadline: string;
    bullets: string[];
    ctaText: string;
    ctaUrl: string;
  };
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

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'field-tracking-app',
    slug: 'field-tracking-app',
    shortName: 'Field Tracking App',
    name: 'Field Force Tracking & Work Validation App',
    tagline:
      'End-to-end GPS location tracking, geo-fenced selfie attendance, tamper-proof proof of execution, and automated reporting for mobile teams across India.',
    badge: '',
    description:
      'Everything operation managers, HRs, and agency directors need to verify, monitor, and report on field-based team activities with zero hardware investment.',
    features: [
      'Real-time GPS tracking & route playback across 500+ Indian cities',
      'Anti-spoofing geo-fenced selfie attendance with mock-GPS detection',
      'Tamper-proof Proof of Execution (PoE) with EXIF coordinate validation',
      'Zero-signal offline mobile app with automatic cloud synchronization',
      'Turn-by-turn road mileage calculation for transparent travel reimbursements',
      'Plug-and-play REST API & ERP connectors for Zoho, SAP & Darwinbox',
    ],
    specs: [
      'Android & iOS Mobile Apps',
      'Live Web Dispatch Console',
      'DPDP & ISO 27001 Ready',
      'Zero Hardware Needed',
      '500+ Indian Cities Supported',
      '14-Day Free Trial',
    ],
    outcome:
      'Eliminates 100% of phantom client visits and reduces disputed travel allowance claims by up to 40%.',
    stats: [
      { value: '500+', label: 'Cities Across India' },
      { value: '99.8%', label: 'Fake GPS & Mock Detection' },
      { value: '40%', label: 'Travel Claim Savings' },
      { value: '< 24 Hrs', label: 'Complete Team Onboarding' },
    ],
    modules: [
      {
        id: 'module-tracking',
        title: 'GPS Employee Tracking',
        description:
          'Real-time location monitoring for field sales, service, and media agents. Play back active route histories, check exact visit timestamps, and calculate true distance traveled for transparent mileage billing and travel reimbursements across 500+ cities in India.',
        bullets: [
          'Live breadcrumb trail with battery-optimized tracking pings',
          'Historic route playback with idle-time and stoppage analysis',
          'Actual road distance calculation eliminating inflated billing',
        ],
        link: '/contact?product=field-tracking&module=gps-tracking',
        linkText: 'Explore Employee Tracking →',
      },
      {
        id: 'module-sales',
        title: 'Sales Representative Tracking',
        description:
          'Ensure sales reps are visiting clients. Log check-in times, client feedback notes, and catalog orders directly from client sites. Calculate target vs. actual meetings and receive instant visit scorecards to optimize your sales force performance.',
        bullets: [
          'GPS-verified check-in at client retail stores and offices',
          'On-site order booking and digital client feedback forms',
          'Daily target vs. actual visit scorecards for sales leaders',
        ],
        link: '/contact?product=field-tracking&module=sales-tracking',
        linkText: 'Explore Sales Tracking →',
      },
      {
        id: 'module-attendance',
        title: 'Geo-Fenced Attendance',
        description:
          'Replace paper registers and fingerprint biometrics. Employees check-in and check-out via geo-fenced selfie uploads. Our anti-spoofing engine detects and blocks fake GPS, developer mock tools, and static photos to ensure attendance integrity.',
        bullets: [
          'Facial selfie validation with live anti-spoofing camera lock',
          'Strict geofence radius enforcement around job sites',
          'Blocks mock GPS, developer settings, and static gallery uploads',
        ],
        link: '/contact?product=field-tracking&module=geo-attendance',
        linkText: 'Explore Geo-Attendance →',
      },
      {
        id: 'module-poe',
        title: 'Proof of Execution (PoE)',
        description:
          'Verify HVAC repairs, telecom installations, or store audits. Field technicians complete custom step-by-step checklists, upload pre/post-service photos with strict EXIF coordinate validation, and collect client review signatures on-site.',
        bullets: [
          'Mandatory step-by-step digital service checklists',
          'Coordinate and timestamp-stamped pre/post service photos',
          'On-glass digital customer signatures and instant PDF reports',
        ],
        link: '/contact?product=field-tracking&module=work-validation',
        linkText: 'Explore Field Service Validation →',
      },
      {
        id: 'module-offline',
        title: 'Offline Field App',
        description:
          'Our mobile app operates with full capabilities offline in low-connectivity areas (e.g., remote sites, industrial basements, or highway corridors). GPS coordinates, timestamps, and photos are cached locally in a secure sandbox and synced to the cloud once network returns.',
        bullets: [
          'Encrypted local SQLite sandbox ensuring zero data loss',
          'Automatic background sync upon cellular or Wi-Fi reconnect',
          'Tamper-proof device clock check to prevent timestamp cheating',
        ],
        link: '/contact?product=field-tracking&module=offline-app',
        linkText: 'Request App Demo →',
      },
      {
        id: 'module-integration',
        title: 'ERP & API Integration',
        description:
          'Integrate our location tracking and attendance engine with your existing CRM, HR payroll system, or field service software. Our REST APIs allow automatic synchronization of task lists, check-in data, and employee attendance.',
        bullets: [
          'Seamless integration with Zoho, SAP, Salesforce, Darwinbox & HRMS',
          'Webhooks for instant milestone alerts (e.g., arrival, task completion)',
          'Automated daily payroll attendance export directly to accounting',
        ],
        link: '/contact?product=field-tracking&module=api-integration',
        linkText: 'View API Specifications →',
      },
    ],
    whyNeeded: {
      headline: 'Why Your Business Needs Field Force Automation',
      subheadline:
        'If your team operates outside four walls, unmonitored execution creates silent profit leaks.',
      painPoints: [
        'Phantom visits: Sales reps reporting client meetings that never occurred.',
        'Attendance fraud: Employees punching attendance using mock-GPS apps or paper registers.',
        'Inflated travel allowances: Manual kilometer claims inflating monthly reimbursement overhead.',
        'Customer disputes: Clients claiming technicians arrived late or skipped critical service steps.',
      ],
      outcomes: [
        '100% verified ground activity backed by hardware-locked GPS breadcrumbs.',
        'Zero-trust selfie check-ins that reject mock GPS apps and photo uploads automatically.',
        'Transparent distance calculation powered by real turn-by-turn road tracking.',
        'Audit-proof service reports with coordinate-stamped photos and customer e-signatures.',
      ],
    },
    industries: [
      {
        title: 'Field Sales & FMCG / Pharma',
        problem: 'Unverified retail store visits and missed daily distributor booking targets.',
        solution: 'Live client check-in verification, instant order booking, and daily beat route adherence.',
      },
      {
        title: 'HVAC, Telecom & Maintenance',
        problem: 'Client disputes over whether technicians arrived on time and performed all service steps.',
        solution: 'Proof of Execution with coordinate-verified before/after photos and digital customer sign-offs.',
      },
      {
        title: 'Retail Merchandising & Media Audits',
        problem: 'Lack of visual proof for store promotional displays, shelf compliance, and billboard installations.',
        solution: 'Tamper-proof photo uploads with locked EXIF metadata and automated audit scorecards.',
      },
      {
        title: 'Logistics & Fleet Dispatch',
        problem: 'Unauthorized detours, excessive idling, and disputed delivery timeline claims.',
        solution: 'Live corridor geo-fencing, speed tracking, and accurate turn-by-turn mileage audit.',
      },
      {
        title: 'Security & Facility Management',
        problem: 'Missed guard patrols and inconsistent janitorial execution across multi-acre sites.',
        solution: 'Checkpoint-based QR & GPS patrol validation with instant anomaly escalation to HQ.',
      },
    ],
    buyerGuides: [
      {
        id: 'guide-employee',
        title: 'Field Employee Tracking App Guide',
        summary:
          'Learn how to monitor active routes, calculate travel mileage, and track employee location history securely.',
        link: '/contact?inquiry=field-employee-tracking-guide',
      },
      {
        id: 'guide-sales',
        title: 'Sales Team Tracking Software Guide',
        summary:
          'Verify sales rep client meetings, track customer visits, and log orders with GPS-verified proof of check-in.',
        link: '/contact?inquiry=sales-team-tracking-guide',
      },
      {
        id: 'guide-attendance',
        title: 'Geo-Fenced Attendance System Guide',
        summary:
          'Replace hardware trackers. Learn how GPS selfie attendance stops check-in fraud and mock GPS apps.',
        link: '/contact?inquiry=geo-fenced-attendance-guide',
      },
      {
        id: 'guide-service',
        title: 'Field Service Validation Software Guide',
        summary:
          'Validate HVAC repairs, facility services, or retail merchandising with digital checklists and on-site proof.',
        link: '/contact?inquiry=field-service-validation-guide',
      },
    ],
    faqs: [
      {
        question: 'What is GPS field force tracking software?',
        answer:
          'GPS field force tracking software is an integrated mobile and cloud management platform that tracks the real-time physical locations of on-field personnel, validates customer visits, automates attendance via geo-fencing, and creates audit-proof operational reports without relying on manual paperwork.',
      },
      {
        question: 'How does the app prevent check-in fraud and fake GPS apps?',
        answer:
          'Our platform features a multi-layered anti-spoofing engine that inspects device-level telemetry. It actively detects and blocks Android developer mock locations, third-party GPS spoofing apps, emulator environments, and rooted or jailbroken devices. In addition, selfie attendance requires a live camera capture with facial liveness verification, completely rejecting static gallery uploads.',
      },
      {
        question: 'Does the system track employees when they are off duty?',
        answer:
          'No. Our software is strictly engineered with privacy-first principles and complies with the Digital Personal Data Protection (DPDP) Act. Location tracking is active strictly between verified shift check-in and check-out. The moment an employee ends their shift, all GPS telemetry immediately stops.',
      },
      {
        question: 'How quickly can I onboard my field team?',
        answer:
          'You can onboard your entire team in under 24 hours. There is zero hardware to purchase or install. Field staff simply install the lightweight mobile app on their existing Android or iOS smartphones, log in with their phone number or company credentials, and start operating immediately.',
      },
    ],
  },
];

