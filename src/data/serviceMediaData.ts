export interface ServiceMediaSlot {
  width: number;
  height: number;
  aspectRatio?: string;
  slotId: string;
  title: string;
  suggestion: string;
  formats?: string;
  src?: string;
  alt?: string;
  objectFit?: 'cover' | 'contain';
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

export interface ServiceMediaConfig {
  headerHero?: ServiceMediaSlot;
  challengeIcons?: string[];
  heroShowcase?: ServiceMediaSlot;
  problemComparison?: {
    traditional: ServiceMediaSlot;
    aiPipeline: ServiceMediaSlot;
  };
  architectureDiagram?: ServiceMediaSlot;
  deliverablesGrid?: ServiceMediaSlot[];
  outcomeVisual?: ServiceMediaSlot;
  modulesComposite?: ServiceMediaSlot;
  dayCycleWorkflow?: ServiceMediaSlot;
  beforeAfterComparison?: ServiceMediaSlot;
  indiaCoverageMap?: ServiceMediaSlot;
  socialShare?: ServiceMediaSlot;
}

/**
 * Media slot configurations per service slug.
 * To replace a black placeholder with a real image:
 * Simply add the file path to `src: '/images/services/...'` in the respective slot below.
 */
export const SERVICE_MEDIA_CONFIGS: Record<string, ServiceMediaConfig> = {
  'ai-automation': {
    headerHero: {
      width: 1024,
      height: 768,
      aspectRatio: '4:3',
      slotId: 'HERO',
      title: 'Autonomous Workflow Architecture',
      suggestion:
        'Isometric diagram showing central automation engine orchestrating spreadsheets, CRM, messaging, and task workflows.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/ai-automation-hero.png',
      alt: 'AI Automation & Internal Workflows isometric diagram connecting spreadsheets, CRM, chat, and task lists',
      objectFit: 'contain',
    },
    challengeIcons: [
      '/images/services/ai-automation-fail-01.png',
      '/images/services/ai-automation-fail-02.png',
      '/images/services/ai-automation-fail-03.png',
      '/images/services/ai-automation-fail-04.png',
    ],
    architectureDiagram: {
      width: 1200,
      height: 450,
      aspectRatio: '2.7:1',
      slotId: 'SLOT 03',
      title: 'Event-Driven Workflow & Ingestion Pipeline',
      suggestion:
        'Technical flowchart: Event Trigger Webhooks → Document Extraction → Self-Healing Retry Logic → Unified State Sync.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/ai-automation-architecture.png',
      alt: 'AI Automation 4-step engineering architecture diagram: Triggers, Document Ingestion, Retries, and State Management',
      objectFit: 'contain',
    },
    outcomeVisual: {
      width: 612,
      height: 408,
      aspectRatio: '3:2',
      slotId: 'OUTCOME',
      title: 'Automation Dashboard & Real-Time Alerting System',
      suggestion:
        'Dashboard illustration showing automated pipeline metrics, document processing queue, and real-time alert notifications.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/ai-automation-outcome.png',
      alt: 'Automation dashboard and milestone alerting system preview',
      objectFit: 'contain',
    },
  },
  'ai-video-creation': {
    headerHero: {
      width: 1024,
      height: 768,
      aspectRatio: '4:3',
      slotId: 'HERO',
      title: 'AI Video Production Engine',
      suggestion:
        'Multi-phone UGC ad variations generated programmatically from a single core script.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/ai-video-hero.png',
      alt: 'AI Video Creation single script branching to 9 dynamic mobile video variations',
      objectFit: 'contain',
    },
    challengeIcons: [
      '/images/services/ai-video-fail-01.png',
      '/images/services/ai-video-fail-02.png',
      '/images/services/ai-video-fail-03.png',
      '/images/services/ai-video-fail-04.png',
    ],
    // SLOT 01: Hero Platform Preview (Widescreen 16:9)
    heroShowcase: {
      width: 1280,
      height: 720,
      aspectRatio: '16:9',
      slotId: 'SLOT 01',
      title: 'Hero Platform & Video Generation Pipeline',
      suggestion:
        'AI Video Engine Dashboard / Generation Pipeline: Widescreen platform UI showing prompt-to-video timeline, split-screen preview, and multi-format queue.',
      formats: 'WebP / PNG / MP4 (Max 800 KB)',
      src: '/images/services/ai-video-avatar-selector.jpg',
      alt: 'AI Video Creation & Creative Systems — Choose Avatar Platform with Realistic AI Creators',
      eyebrow: 'AI Creator & Persona Engine',
      heading: 'Make Your Avatar Exactly What You Want: N Number of Combinations for Any Audience',
      subheading:
        'Filter by age, ethnicity, location, industry, and conversational tone to build the exact creator persona your audience trusts—or generate custom brand avatars on demand.',
    },

    // SLOT 02: Problem vs Solution Comparison
    problemComparison: {
      traditional: {
        width: 640,
        height: 420,
        aspectRatio: '3:2',
        slotId: 'SLOT 02A',
        title: 'Traditional Production (Slow & Costly)',
        suggestion:
          'Traditional Studio Shoot: 3-week physical studio setup, camera crew, expensive invoice ($3,000+/ad), and only 1 final variation.',
        formats: 'WebP / PNG (Max 500 KB)',
        src: '', // <-- Replace with real image path when ready
      },
      aiPipeline: {
        width: 640,
        height: 420,
        aspectRatio: '3:2',
        slotId: 'SLOT 02B',
        title: 'AI Programmatic Pipeline (Rapid & Scalable)',
        suggestion:
          'Programmatic AI Engine: 48-hour automated turnaround, synthetic actors, batch rendering, and 30+ creative variations ready for Meta/TikTok.',
        formats: 'WebP / PNG (Max 500 KB)',
        src: '', // <-- Replace with real image path when ready
      },
    },

    // SLOT 03: Engineering Architecture Diagram
    architectureDiagram: {
      width: 1200,
      height: 450,
      aspectRatio: '2.7:1',
      slotId: 'SLOT 03',
      title: 'End-to-End System Architecture & Render Pipeline',
      suggestion:
        'Technical Architecture Flowchart: Programmatic Rendering → Voice Modeling → Kinetic Subtitles → Batch Permutations.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/ai-video-architecture.png',
      alt: 'AI Video Creation 4-step engineering architecture diagram: Rendering Pipeline, Voice Modeling, Kinetic Subtitles, Batch Permutations',
      objectFit: 'contain',
    },

    // SLOT 04: Multi-Format Deliverables Grid
    deliverablesGrid: [
      {
        width: 1080,
        height: 1920,
        aspectRatio: '9:16',
        slotId: 'SLOT 04A',
        title: 'Vertical Video (TikTok / Reels / Shorts)',
        suggestion:
          'Full-screen vertical mobile frame (9:16) with dynamic synthetic voiceover and animated kinetic subtitles.',
        formats: 'WebP / PNG / MP4 (Max 600 KB)',
        src: '', // <-- Replace with real image path when ready
      },
      {
        width: 1080,
        height: 1350,
        aspectRatio: '4:5',
        slotId: 'SLOT 04B',
        title: 'Feed & Carousel Video (Meta / LinkedIn)',
        suggestion:
          'Portrait feed format (4:5) optimized for Facebook & Instagram newsfeeds with prominent Hook overlays.',
        formats: 'WebP / PNG / MP4 (Max 600 KB)',
        src: '', // <-- Replace with real image path when ready
      },
      {
        width: 1920,
        height: 1080,
        aspectRatio: '16:9',
        slotId: 'SLOT 04C',
        title: 'Landscape Video (YouTube / Web Banners)',
        suggestion:
          'Horizontal widescreen ad (16:9) featuring cinematic AI B-roll, product close-ups, and branded audio.',
        formats: 'WebP / PNG / MP4 (Max 600 KB)',
        src: '', // <-- Replace with real image path when ready
      },
    ],
    outcomeVisual: {
      width: 612,
      height: 408,
      aspectRatio: '3:2',
      slotId: 'OUTCOME',
      title: 'AI Video Variation Studio & Asset Library',
      suggestion:
        'Studio interface showing project folders, multi-format mobile video variations, and master playback timeline.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/ai-video-outcome.png',
      alt: 'AI Video Creation variation studio and multi-format asset library preview',
      objectFit: 'contain',
    },
  },
  'lead-generation': {
    headerHero: {
      width: 1024,
      height: 768,
      aspectRatio: '4:3',
      slotId: 'HERO',
      title: 'Waterfall Scraping & Lead Scoring Engine',
      suggestion:
        'Technical pipeline diagram showing multi-provider waterfall cascades (Apollo, Clay, Hunter) and algorithmic ICP lead scoring into CRM.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/lead-generation-hero.png',
      alt: 'Lead Generation Systems waterfall data enrichment and algorithmic qualification pipeline',
      objectFit: 'contain',
    },
    challengeIcons: [
      '/images/services/lead-gen-fail-01.png',
      '/images/services/lead-gen-fail-02.png',
      '/images/services/lead-gen-fail-03.png',
      '/images/services/lead-gen-fail-04.png',
    ],
    architectureDiagram: {
      width: 1024,
      height: 320,
      aspectRatio: '3.2:1',
      slotId: 'SLOT 03',
      title: 'Waterfall Enrichment & CRM Pipeline Architecture',
      suggestion:
        'Technical flowchart: Signal Scrapers → Waterfall Enrichment → Algorithmic Scoring → Direct CRM Pipeline Injection.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/lead-generation-architecture.png',
      alt: 'Lead Generation Systems 4-step engineering architecture diagram: Signal Scrapers, Waterfall Enrichment, Algorithmic Scoring, and CRM Injection',
      objectFit: 'contain',
    },
    outcomeVisual: {
      width: 612,
      height: 408,
      aspectRatio: '3:2',
      slotId: 'OUTCOME',
      title: 'Prospect Intelligence Card & Booking Telemetry',
      suggestion:
        'Prospect research card showing profile data, company intent signals, data verification status, and calendar booking availability.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/lead-generation-outcome.png',
      alt: 'Lead Generation prospect intelligence card and calendar booking telemetry preview',
      objectFit: 'contain',
    },
  },
  'cold-email-outreach': {
    headerHero: {
      width: 978,
      height: 470,
      aspectRatio: '2.08:1',
      slotId: 'HERO',
      title: 'Deliverability-Hardened Outbound Infrastructure',
      suggestion:
        'Infrastructure architecture showing secondary domain isolation, SPF/DKIM/DMARC alignment, automated warm-up rotation, and inbox triage.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/cold-email-hero.png',
      alt: 'Cold Email & Outreach secondary domain isolation and deliverability architecture',
      objectFit: 'contain',
    },
    challengeIcons: [
      '/images/services/cold-email-fail-01.png',
      '/images/services/cold-email-fail-02.png',
      '/images/services/cold-email-fail-03.png',
      '/images/services/cold-email-fail-04.png',
    ],
    architectureDiagram: {
      width: 1024,
      height: 320,
      aspectRatio: '3.2:1',
      slotId: 'SLOT 03',
      title: 'Secondary Domain Isolation & Deliverability Architecture',
      suggestion:
        'Technical flowchart: Secondary Domain Isolation → Strict Security DNS Hardening → Automated Warm-Up & Rotation → AI Personalization Engine.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/cold-email-architecture.png',
      alt: 'Cold Email & Outreach 4-step engineering architecture diagram: Secondary Domain Isolation, Strict Security DNS Hardening, Automated Warm-Up & Rotation, AI Personalization Engine',
      objectFit: 'contain',
    },
    outcomeVisual: {
      width: 612,
      height: 408,
      aspectRatio: '3:2',
      slotId: 'OUTCOME',
      title: 'Dedicated Deliverability Monitoring & Outbound Telemetry Dashboard',
      suggestion:
        'Deliverability dashboard showing inbox placement rate, secondary domain health, warm-up volume ramp, and mailbox status telemetry.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/cold-email-outcome.png',
      alt: 'Cold Email & Outreach dedicated deliverability monitoring dashboard and secondary domain telemetry preview',
      objectFit: 'contain',
    },
  },
  'website-design': {
    headerHero: {
      width: 840,
      height: 630,
      aspectRatio: '4:3',
      slotId: 'HERO',
      title: 'High-Conversion Editorial Web Systems',
      suggestion:
        'Editorial responsive device mockups displaying typography hierarchy, sub-second load performance, and conversion funnel checkpoints.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/website-design-hero.png',
      alt: 'Website Design & High-Conversion Systems high-speed editorial browser platform mockup',
      objectFit: 'contain',
    },
    challengeIcons: [
      '/images/services/website-design-fail-01.png',
      '/images/services/website-design-fail-02.png',
      '/images/services/website-design-fail-03.png',
      '/images/services/website-design-fail-04.png',
    ],
    architectureDiagram: {
      width: 1024,
      height: 320,
      aspectRatio: '3.2:1',
      slotId: 'SLOT 03',
      title: 'Editorial Design & Performance Architecture',
      suggestion:
        'Technical flowchart: Editorial Design System → Modern Performant Frontend → Conversion-Engineered Funnels → Active Retainer Management.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/website-design-architecture.png',
      alt: 'Website Design & High-Conversion Systems 4-step engineering architecture diagram: Editorial Design System, Modern Performant Frontend, Conversion Funnels, and Retainer Management',
      objectFit: 'contain',
    },
    outcomeVisual: {
      width: 612,
      height: 408,
      aspectRatio: '3:2',
      slotId: 'OUTCOME',
      title: 'Performance & Conversion Telemetry Dashboard',
      suggestion:
        'Telemetry visual displaying time-to-interactive stopwatch, Google Lighthouse 95+ performance speedometer, and conversion rate growth curve.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/website-design-outcome.png',
      alt: 'Website Design & High-Conversion Systems performance speedometer, sub-second stopwatch, and conversion growth telemetry',
      objectFit: 'contain',
    },
  },
  'content-strategy': {
    headerHero: {
      width: 1024,
      height: 768,
      aspectRatio: '4:3',
      slotId: 'HERO',
      title: 'Compounding Multi-Channel Editorial Engine',
      suggestion:
        'Workflow visual showing 1 core executive interview transmuting into LinkedIn thought leadership, newsletter essays, and social threads.',
      src: '/images/services/content-strategy-hero.png',
      alt: 'Content Strategy & Editorial Engines multi-channel repurposing workflow from core executive interview into essays, newsletters, and social posts',
      objectFit: 'contain',
    },
    challengeIcons: [
      '/images/services/content-strategy-fail-01.png',
      '/images/services/content-strategy-fail-02.png',
      '/images/services/content-strategy-fail-03.png',
      '/images/services/content-strategy-fail-04.png',
    ],
    architectureDiagram: {
      width: 1024,
      height: 341,
      aspectRatio: '3:1',
      slotId: 'SLOT 03',
      title: 'Executive Voice & Multi-Channel Editorial Engine Architecture',
      suggestion:
        'Technical flowchart: Executive Voice Modeling → Source-to-Channel Transmutation → Asynchronous Approval Gateways → Distribution & Attribution Tracking.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/content-strategy-architecture.png',
      alt: 'Content Strategy & Editorial Engines 4-step engineering architecture diagram: Voice Modeling, Source Transmutation, Review Gateways, and Attribution Tracking',
      objectFit: 'contain',
    },
    outcomeVisual: {
      width: 612,
      height: 408,
      aspectRatio: '3:2',
      slotId: 'OUTCOME',
      title: 'Editorial Calendar & Asynchronous Review Portal',
      suggestion:
        'Calendar dashboard showing scheduled thought leadership essays, LinkedIn posts, newsletter drops, and asynchronous 2-click review queue.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/content-strategy-outcome.png',
      alt: 'Content Strategy & Editorial Engines editorial calendar and asynchronous approval queue preview',
      objectFit: 'contain',
    },
  },
  'software-development': {
    headerHero: {
      width: 720,
      height: 720,
      aspectRatio: '1:1',
      slotId: 'HERO',
      title: 'Custom Full-Stack & Private AI Architecture',
      suggestion:
        'System architecture diagram showing custom React/Node portal, private RAG vector database, and secure enterprise API gateway.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/software-development-hero.png',
      alt: 'Software Development & Custom AI Solutions private server stack, vector database, and secure API gateway architecture',
      objectFit: 'contain',
    },
    challengeIcons: [
      '/images/services/software-development-fail-01.png',
      '/images/services/software-development-fail-02.png',
      '/images/services/software-development-fail-03.png',
      '/images/services/software-development-fail-04.png',
    ],
    architectureDiagram: {
      width: 1024,
      height: 341,
      aspectRatio: '3:1',
      slotId: 'SLOT 03',
      title: 'Full-Stack, Private RAG & Observability Architecture',
      suggestion:
        'Technical flowchart: Modern Full-Stack Architecture → Private Retrieval-Augmented Generation (RAG) → Role-Based Client Portals → CI/CD & Server Observability.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/software-development-architecture.png',
      alt: 'Software Development & Custom AI Solutions 4-step engineering architecture diagram: Modern Full-Stack, Private RAG, Role-Based Portals, and CI/CD Observability',
      objectFit: 'contain',
    },
    outcomeVisual: {
      width: 612,
      height: 408,
      aspectRatio: '3:2',
      slotId: 'OUTCOME',
      title: 'Custom Client Portal & Role-Based Telemetry Dashboard',
      suggestion:
        'Client dashboard showing real-time operational metrics, multi-user role management table with permissions, and analytics telemetry.',
      formats: 'PNG / WebP / SVG',
      src: '/images/services/software-development-outcome.png',
      alt: 'Software Development & Custom AI Solutions authenticated client portal and role-based management dashboard preview',
      objectFit: 'contain',
    },
  },
};

export const PRODUCT_MEDIA_CONFIGS: Record<string, ServiceMediaConfig> = {
  'field-sales-tracking': {
    // 1. Manager dashboard and field rep's phone app showing live GPS tracking
    headerHero: {
      width: 1024,
      height: 731,
      aspectRatio: '1.4:1',
      slotId: 'SLOT 01 / HERO',
      title: 'field-sales-tracking-dashboard-hero.webp',
      suggestion:
        'Manager dashboard and field rep\'s phone app showing live GPS tracking.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '/images/products/field-sales-tracking-dashboard-hero.webp',
      alt: 'Manager dashboard and field rep phone app showing live GPS tracking',
      objectFit: 'contain',
    },
    // 2. Live GPS map, geo-fenced attendance and automated daily report screens
    modulesComposite: {
      width: 1024,
      height: 576,
      aspectRatio: '16:9',
      slotId: 'SLOT 02 / MODULES',
      title: 'field-sales-modules-composite.webp',
      suggestion:
        'Live GPS map, geo-fenced attendance and automated daily report screens.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '/images/products/field-sales-modules-composite.webp',
      alt: 'Live GPS map, geo-fenced attendance and automated daily report screens',
      objectFit: 'contain',
    },
    // 3. Four-step field rep day: attendance, beat navigation, visit check-in, expense settlement
    dayCycleWorkflow: {
      width: 1024,
      height: 341,
      aspectRatio: '3:1',
      slotId: 'SLOT 03 / WORKFLOW',
      title: 'field-sales-day-cycle.webp',
      suggestion:
        'Four-step field rep day: attendance, beat navigation, visit check-in, expense settlement.',
      formats: 'WebP / PNG / SVG',
      src: '/images/products/field-sales-day-cycle.webp',
      alt: 'Four-step field rep day cycle: attendance, beat navigation, visit check-in, expense settlement',
      objectFit: 'contain',
    },
    // 6. Dashboard and mobile app for tracking a field sales team
    socialShare: {
      width: 1024,
      height: 538,
      aspectRatio: '1.9:1',
      slotId: 'SLOT 06 / SHARE',
      title: 'field-sales-tracking-share.webp',
      suggestion:
        'Dashboard and mobile app for tracking a field sales team.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '/images/products/field-sales-tracking-share.webp',
      alt: 'Dashboard and mobile app for tracking a field sales team',
      objectFit: 'contain',
    },
  },
  'growthflow-crm': {
    // 1. Unified CRM dashboard showing lead pipeline kanban, behavioral email trigger rules, and WhatsApp conversation preview
    headerHero: {
      width: 1024,
      height: 731,
      aspectRatio: '1.4:1',
      slotId: 'SLOT 01 / HERO',
      title: 'growthflow-crm-hero.webp',
      suggestion:
        'Unified CRM dashboard showing lead pipeline kanban, behavioral email trigger rules, and WhatsApp conversation preview.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '/images/products/growthflow-crm-hero.webp',
      alt: 'GrowthFlow CRM unified lead pipeline, email triggers, and WhatsApp preview',
      objectFit: 'contain',
    },
    // 2. Composite interface showing CRM lead timeline, dynamic email template builder, and official WhatsApp broadcast manager
    modulesComposite: {
      width: 1024,
      height: 576,
      aspectRatio: '16:9',
      slotId: 'SLOT 02 / MODULES',
      title: 'growthflow-crm-modules-composite.webp',
      suggestion:
        'Composite interface showing CRM lead timeline, dynamic email template builder, and official WhatsApp broadcast manager.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '/images/products/growthflow-crm-modules-composite.webp',
      alt: 'GrowthFlow CRM lead timeline, email template builder, and WhatsApp broadcast screens',
      objectFit: 'contain',
    },
    // 3. 4-step revenue workflow: Lead Ingestion & Enrichment → Activity-Triggered Email → Automated WhatsApp → Real-Time Telemetry
    dayCycleWorkflow: {
      width: 1024,
      height: 341,
      aspectRatio: '3:1',
      slotId: 'SLOT 03 / WORKFLOW',
      title: 'growthflow-crm-workflow.webp',
      suggestion:
        '4-step revenue workflow: Lead Ingestion & Enrichment → Activity-Triggered Email → Automated WhatsApp → Real-Time Telemetry.',
      formats: 'WebP / PNG / SVG',
      src: '/images/products/growthflow-crm-workflow.webp',
      alt: 'GrowthFlow CRM 4-step revenue cycle: Ingestion, Email Personalization, WhatsApp Automation, and Telemetry Attribution',
      objectFit: 'contain',
    },
    // 4. Desktop web CRM interface connected to mobile WhatsApp chat & email client via central cloud deliverability engine
    socialShare: {
      width: 1024,
      height: 538,
      aspectRatio: '1.9:1',
      slotId: 'SLOT 04 / SHOWCASE',
      title: 'growthflow-crm-omnichannel-showcase.webp',
      suggestion:
        'Desktop web CRM interface connected to mobile WhatsApp chat & email client via central cloud deliverability engine.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '/images/products/growthflow-crm-omnichannel-showcase.webp',
      alt: 'GrowthFlow CRM omnichannel desktop dashboard and mobile chat preview connected via cloud deliverability engine',
      objectFit: 'contain',
    },
  },
  'data-scraper-service': {
    // 1. Live multi-channel extraction dashboard showing LinkedIn and Google Maps queue, proxy health, and real-time contact validation stream
    headerHero: {
      width: 1024,
      height: 731,
      aspectRatio: '1.4:1',
      slotId: 'SLOT 01 / HERO',
      title: 'data-scraper-hero.webp',
      suggestion:
        'Live multi-channel extraction dashboard showing LinkedIn and Google Maps queue, proxy health, and real-time contact validation stream.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '',
      alt: 'Data Scraper Service live multi-channel extraction dashboard and verification queue',
      objectFit: 'contain',
    },
    // 2. Composite interface showcasing query builder, anti-captcha stealth monitor, technographic tag inspector, and lead deduplication table
    modulesComposite: {
      width: 1024,
      height: 576,
      aspectRatio: '16:9',
      slotId: 'SLOT 02 / MODULES',
      title: 'data-scraper-modules-composite.webp',
      suggestion:
        'Composite interface showcasing query builder, anti-captcha stealth monitor, technographic tag inspector, and lead deduplication table.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '',
      alt: 'Data Scraper Service query builder, proxy monitor, and contact enrichment tables',
      objectFit: 'contain',
    },
    // 3. 4-step extraction pipeline: Target ICP Definition → Distributed Stealth Scraping → Deep Enrichment & Verification → Clean CRM Delivery
    dayCycleWorkflow: {
      width: 1024,
      height: 341,
      aspectRatio: '3:1',
      slotId: 'SLOT 03 / WORKFLOW',
      title: 'data-scraper-workflow.webp',
      suggestion:
        '4-step extraction pipeline: Target ICP Definition → Distributed Stealth Scraping → Deep Enrichment & Verification → Clean CRM Delivery.',
      formats: 'WebP / PNG / SVG',
      src: '',
      alt: 'Data Scraper Service 4-step extraction architecture: Query Setup, Stealth Scraping, Multi-Tier Verification, and CRM Sync',
      objectFit: 'contain',
    },
    // 4. Omnichannel data extraction terminal connected to GrowthFlow CRM and verified lead download center
    socialShare: {
      width: 1024,
      height: 538,
      aspectRatio: '1.9:1',
      slotId: 'SLOT 04 / SHOWCASE',
      title: 'data-scraper-showcase.webp',
      suggestion:
        'Omnichannel data extraction terminal connected to GrowthFlow CRM and verified lead download center.',
      formats: 'WebP / PNG (Max 800 KB)',
      src: '',
      alt: 'Data Scraper Service multi-channel web extraction terminal and verified lead export preview',
      objectFit: 'contain',
    },
  },
};

