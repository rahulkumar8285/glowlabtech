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

export interface ProductWorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
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
  workflow?: ProductWorkflowStep[];
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
    slug: 'field-sales-tracking',
    shortName: 'Field Sales & Tracking App',
    name: 'Field Sales Automation & GPS Workforce Tracking Software',
    tagline:
      'Streamline daily beat plans, verify customer meetings, automate geo-fenced selfie attendance, and eliminate travel reimbursement disputes across 500+ Indian cities.',
    badge: '',
    description:
      'All-in-one field sales automation and workforce telemetry platform built for operations heads, sales directors, and agency leaders whose teams execute on the ground.',
    features: [
      'Automated beat planning & dynamic sales route optimization',
      'Anti-spoofing geo-fenced selfie attendance with mock-GPS detection',
      'Real-time GPS location tracking & step-by-step route playback',
      'One-click customer visit check-in/out with on-site meeting timer',
      'Custom mobile forms, retail order booking & digital client signatures',
      'Field lead capture, instant visit notes & real-time deal pipeline',
      'Automated Daily Sales Reports (DSR) eliminating end-of-day paperwork',
      'Distance-verified travel allowance (TA/DA) & expense management',
      'Zero-signal offline mobile app with secure local data caching',
      'Enterprise REST API & webhooks for SAP, Zoho, Salesforce & Darwinbox',
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
      'Reduces field operating costs by up to 40%, increases daily customer visits by 65%, and eliminates 100% of disputed travel allowance claims.',
    stats: [
      { value: '−40%', label: 'Field Operating Costs' },
      { value: '+65%', label: 'Sales Rep Productivity' },
      { value: '99.8%', label: 'Mock GPS & Fake Visit Block' },
      { value: '< 24 Hrs', label: 'Zero-Hardware Deployment' },
    ],
    workflow: [
      {
        step: '01',
        title: 'Geo-Fenced Selfie Attendance',
        description:
          'Reps start their day by marking attendance on the mobile app within authorized geofences, validated by live selfie and anti-mock GPS detection.',
        detail: 'Instant biometric & GPS timestamping; blocks spoofing and developer tools.',
      },
      {
        step: '02',
        title: 'Smart Beat Navigation',
        description:
          'The app loads the assigned daily beat plan with turn-by-turn route suggestions, cutting transit time and ensuring all target outlets are visited.',
        detail: 'Dynamic multi-stop scheduling with zero backtracking and fuel economy.',
      },
      {
        step: '03',
        title: 'Verified Visit & Order Booking',
        description:
          'Upon arriving at the client store, reps check in with one tap, record meeting notes, book sales orders, and upload geotagged photos.',
        detail: 'EXIF coordinate validation, customer e-signatures, and on-site duration logging.',
      },
      {
        step: '04',
        title: 'Automated DSR & Expense Settlement',
        description:
          'At shift end, the Daily Sales Report (DSR) is auto-generated alongside verified road kilometer travel allowance (TA/DA) claims for 1-click approval.',
        detail: 'Zero manual spreadsheets, instant manager audit, and transparent reimbursement.',
      },
    ],
    modules: [
      {
        id: 'module-beat-planning',
        title: 'Beat Planning & Smart Route Optimization',
        description:
          'Pre-assign daily outlet beats and optimal travel routes for your sales team. Cut travel time by up to 35%, eliminate zigzag backtracking, and ensure complete market coverage across retail networks and distributor territories.',
        bullets: [
          'Pre-scheduled daily and weekly beat plans for retail coverage',
          'Turn-by-turn route navigation minimizing travel time & fuel burn',
          'Real-time alerts for missed beats and off-route deviations',
        ],
        link: '/contact?product=field-tracking&module=beat-planning',
        linkText: 'Explore Beat Planning →',
      },
      {
        id: 'module-tracking',
        title: 'Live GPS Tracking & Route Playback',
        description:
          'Real-time location monitoring for field sales executives, service technicians, and collection agents. Replay full historic breadcrumb paths, inspect stoppage durations, and calculate true road distance traveled across 500+ Indian cities.',
        bullets: [
          'Live breadcrumb trail with battery-optimized background pings',
          'Historical route playback with idle-time and stoppage analysis',
          'True odometer road distance calculation eliminating inflated claims',
        ],
        link: '/contact?product=field-tracking&module=gps-tracking',
        linkText: 'Explore Live GPS Tracking →',
      },
      {
        id: 'module-attendance',
        title: 'Geo-Fenced Selfie Attendance',
        description:
          'Replace manual registers and stationary biometrics. Field staff punch in and out using geofence-locked selfie captures. Our proprietary anti-spoofing engine detects and blocks Android mock GPS, developer settings, and static photo uploads.',
        bullets: [
          'Facial selfie validation with live anti-spoofing camera lock',
          'Strict geofence radius enforcement around designated stores or territories',
          'Automatic detection of mock-location tools and device clock tampering',
        ],
        link: '/contact?product=field-tracking&module=geo-attendance',
        linkText: 'Explore Geo-Attendance →',
      },
      {
        id: 'module-visits',
        title: 'Customer Visit Check-In / Check-Out',
        description:
          'Verify every client meeting with coordinate-locked check-in upon arrival. Automatically measure on-site meeting duration, log discussion minutes, and compare daily target vs. actual visits to keep sales teams accountable.',
        bullets: [
          'One-click geo-verified arrival and departure timestamps',
          'Automated on-site meeting duration timer and client visit verification',
          'Target vs. actual customer visit analytics on manager dashboard',
        ],
        link: '/contact?product=field-tracking&module=customer-visits',
        linkText: 'Explore Customer Visits →',
      },
      {
        id: 'module-poe',
        title: 'Custom Mobile Forms & Proof of Execution (PoE)',
        description:
          'Equip reps to book catalog orders, capture competitor pricing, conduct store audits, and log client feedback. Enforces timestamp-stamped photo proof with locked EXIF coordinates and on-glass digital customer signatures.',
        bullets: [
          'Drag-and-drop form builder for sales orders, audits, and surveys',
          'Tamper-proof photo uploads with locked EXIF GPS coordinates',
          'On-glass digital customer sign-offs with instant PDF export',
        ],
        link: '/contact?product=field-tracking&module=custom-forms-poe',
        linkText: 'Explore Forms & PoE →',
      },
      {
        id: 'module-leads',
        title: 'Field Lead & Opportunity Pipeline CRM',
        description:
          'Capture new leads on the road, scan visiting cards, and record immediate prospect requirements. Automatically distribute incoming inquiries to the nearest rep based on live GPS proximity and update opportunity stages in real time.',
        bullets: [
          'Instant mobile lead creation and business card photo capture',
          'Proximity-based lead routing to the nearest active sales executive',
          'Full visual deal pipeline with follow-up task reminders',
        ],
        link: '/contact?product=field-tracking&module=field-sales-crm',
        linkText: 'Explore Field Sales CRM →',
      },
      {
        id: 'module-dsr',
        title: 'Automated Daily Sales Reports (DSR)',
        description:
          'Free your field force from evening Excel paperwork. Our engine compiles completed visits, distance covered, orders booked, and client notes into instant daily summary reports available to management in real time.',
        bullets: [
          'Zero manual evening spreadsheet reporting for sales reps',
          'Automated executive performance scorecards and conversion ratios',
          'Instant daily summary export to WhatsApp, email, or Slack',
        ],
        link: '/contact?product=field-tracking&module=automated-dsr',
        linkText: 'Explore Automated DSR →',
      },
      {
        id: 'module-expenses',
        title: 'Travel Mileage & Expense Management',
        description:
          'Automate travel allowance (TA/DA) calculations directly from verified road distance traveled. Field reps capture fuel slips, hotel bills, and toll receipts for seamless digital submission and fast manager approvals.',
        bullets: [
          'Automated kilometer-based travel reimbursement based on actual routes',
          'Mobile receipt capture with category tagging (Fuel, Meals, Lodging)',
          'Multi-tier manager approval workflow with policy cap enforcement',
        ],
        link: '/contact?product=field-tracking&module=expense-management',
        linkText: 'Explore Expense Management →',
      },
      {
        id: 'module-offline',
        title: 'Zero-Signal Offline Engine & Enterprise Sync',
        description:
          'Ensure uninterrupted operation in remote rural villages, basement warehouses, and poor reception zones. Data is encrypted in a local sandbox and automatically syncs with your ERP or CRM once connection is restored.',
        bullets: [
          'Encrypted local SQLite database ensuring zero data loss offline',
          'Seamless background synchronization upon network recovery',
          'Direct REST API and webhook connectors for SAP, Zoho, Salesforce & Darwinbox',
        ],
        link: '/contact?product=field-tracking&module=offline-sync',
        linkText: 'Explore Offline Engine →',
      },
    ],
    whyNeeded: {
      headline: 'Why Growing Businesses Automate Field Sales Operations',
      subheadline:
        'When sales and service teams operate outside headquarters, manual tracking leads to blind spots, fake claims, and lost revenue.',
      painPoints: [
        'Phantom client visits: Sales reps logging meetings that never happened or checking in from distant locations.',
        'Attendance fraud: Employees marking attendance via mock-GPS spoofing apps, WhatsApp locations, or proxy punch-ins.',
        'Inflated travel allowance bills: Manual kilometer estimations driving up monthly travel reimbursement overhead by 30–40%.',
        'Unorganized lead follow-ups: New inquiries lost on paper diaries without visibility into visit stages or conversion rates.',
      ],
      outcomes: [
        '100% verified ground reality backed by GPS breadcrumbs, store-geofenced check-ins, and on-site duration timers.',
        'Zero-trust selfie attendance that automatically detects and blocks mock-GPS tools, emulators, and static photo uploads.',
        'Transparent mileage billing calculated strictly from verified Google Maps turn-by-turn road distance.',
        'Centralized sales pipeline giving leadership real-time visibility into visits, beat adherence, and order revenue.',
      ],
    },
    industries: [
      {
        title: 'FMCG & Consumer Packaged Goods',
        problem: 'Incomplete retail store coverage, skipped beats, and slow end-of-day order processing.',
        solution: 'Automated beat plans, geofenced outlet check-in, on-site retail order booking, and merchandising photo audits.',
      },
      {
        title: 'Pharmaceuticals & Healthcare (MRs)',
        problem: 'Unverified doctor visits, missed chemist calls, and delayed sample distribution records.',
        solution: 'Medical rep location tracking, scheduled clinic beat routes, digital call reporting, and sample inventory tracking.',
      },
      {
        title: 'Banking, NBFCs & Microfinance',
        problem: 'Disputed borrower verification visits, untracked EMI collection agents, and compliance audit risks.',
        solution: 'Geo-verified customer KYC visits, cash collection logs with digital receipts, and audit-ready reporting.',
      },
      {
        title: 'Construction & Real Estate',
        problem: 'Managing distributed site engineers, unmonitored contractor activity, and untracked client property tours.',
        solution: 'Multi-site geofenced attendance, coordinate-stamped progress photos, and broker visit logs across projects.',
      },
      {
        title: 'Agriculture & Rural Operations',
        problem: 'Sales teams operating in wide, low-connectivity rural territories with zero cellular network.',
        solution: 'Full offline mobile functionality, dealer visit logging, farm inspection checklists, and automatic sync upon connectivity.',
      },
      {
        title: 'Retail Store Audits & Merchandising',
        problem: 'No photographic proof of promotional standees, shelf share compliance, or planogram execution.',
        solution: 'Tamper-proof photo uploads with locked EXIF metadata, store audit checklists, and instant compliance scorecards.',
      },
      {
        title: 'Telecom, HVAC & Field Maintenance',
        problem: 'Customer disputes regarding whether technicians arrived on time and executed all mandatory service steps.',
        solution: 'Proof of Execution (PoE) with coordinate-verified before/after photos, task checklists, and digital customer sign-offs.',
      },
      {
        title: 'Automobile Dealerships & Test Drives',
        problem: 'Untracked off-site test drives, unmonitored dealership audits, and delayed customer feedback collection.',
        solution: 'Test-drive route recording, channel partner visit logs, customer feedback forms, and territory performance analytics.',
      },
    ],
    buyerGuides: [
      {
        id: 'guide-sales-automation',
        title: 'Field Sales Automation Buyer Guide',
        summary:
          'How to transition your sales reps from manual spreadsheets to automated beats, live GPS visit verification, and instant order booking.',
        link: '/contact?inquiry=field-sales-automation-guide',
      },
      {
        id: 'guide-beat-planning',
        title: 'Beat Planning & Route Optimization Blueprint',
        summary:
          'Best practices for designing high-density distributor beat plans that reduce travel time by 35% and maximize outlet coverage.',
        link: '/contact?inquiry=beat-planning-guide',
      },
      {
        id: 'guide-mock-gps',
        title: 'Detecting Mock GPS & Fake Attendance in Field Teams',
        summary:
          'A technical breakdown of how field reps use GPS spoofing apps and how our multi-layered telemetry engine eliminates fraudulent check-ins.',
        link: '/contact?inquiry=anti-mock-gps-guide',
      },
      {
        id: 'guide-mileage-reimbursement',
        title: 'Automated Travel Allowance (TA/DA) Audit Guide',
        summary:
          'How automated road-distance calculations eliminate inflated kilometer claims and cut company travel reimbursement expenses by up to 40%.',
        link: '/contact?inquiry=mileage-reimbursement-guide',
      },
    ],
    faqs: [
      {
        question: 'What is field sales automation software and how does it benefit our business?',
        answer:
          'Field sales automation software is a mobile and cloud platform that equips on-ground sales teams to manage daily beat plans, verify client visits, book orders, and log attendance from their smartphones. Management gains a centralized dashboard with live GPS tracking, visit duration analytics, automated Daily Sales Reports (DSR), and verified travel allowance calculations—reducing field overhead by up to 40% while boosting rep productivity by over 65%.',
      },
      {
        question: 'How does the platform detect and prevent mock GPS apps and fake check-ins?',
        answer:
          'Our platform employs a multi-tiered anti-fraud security engine. It directly inspects OS-level provider flags to detect Android mock location settings, third-party GPS spoofing apps, emulator environments, and device clock modifications. Furthermore, selfie attendance requires live camera captures with facial liveness detection, completely rejecting pre-saved gallery images.',
      },
      {
        question: 'Is it legal to track field employees in India, and how does the software protect privacy?',
        answer:
          'Yes, employee location tracking for business operations during designated working hours is completely legal under Indian employment frameworks. Our software is designed in strict compliance with the Digital Personal Data Protection (DPDP) Act and ISO 27001 standards. Telemetry is active strictly between verified shift check-in and check-out; the moment a rep punches out, all GPS tracking immediately ceases.',
      },
      {
        question: 'How does the app operate in rural areas with poor or zero cellular network?',
        answer:
          'Our mobile app features a zero-signal offline architecture. Reps can mark attendance, check into meetings, fill order forms, and take coordinate-stamped photos even in basements or remote rural villages with zero connectivity. All data is securely encrypted in a local SQLite sandbox and automatically synchronizes to the cloud the moment cellular or Wi-Fi connectivity is detected.',
      },
      {
        question: 'How does automated travel expense reimbursement save company costs?',
        answer:
          'Traditional manual travel allowance (TA/DA) claims rely on self-reported kilometers, which frequently suffer from 30–40% inflation. GlowLab tracks actual turn-by-turn road distance traveled via verified GPS breadcrumbs, automatically calculating the exact reimbursable amount according to your company per-kilometer rate and eliminating manual disputes.',
      },
      {
        question: 'Can GlowLab integrate with our existing ERP, CRM, and HRMS platforms?',
        answer:
          'Yes. GlowLab provides plug-and-play REST APIs and webhook connectors for leading enterprise platforms including SAP, Zoho, Salesforce, Darwinbox, Keka, GreytHR, and Microsoft Dynamics. Attendance logs, visit minutes, and sales orders can sync bidirectionally in real time.',
      },
      {
        question: 'How fast can our field team be deployed and onboarded?',
        answer:
          'You can onboard your entire field force in under 24 hours. Because GlowLab requires zero hardware or dedicated vehicle trackers, reps simply download the lightweight app onto their existing Android or iOS smartphones, authenticate via OTP or single sign-on, and start operating immediately.',
      },
    ],
  },
];

