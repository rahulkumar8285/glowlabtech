export interface BlogAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface BlogCallout {
  text: string;
  attribution?: string;
}

export interface BlogSectionBlock {
  heading?: string;
  subheading?: string;
  content: string[];
  bullets?: string[];
  callout?: BlogCallout;
  codeBlock?: {
    language: string;
    code: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'AI Automation' | 'Video Systems' | 'Outreach' | 'Architecture';
  publishedAt: string;
  isoDate: string;
  readTime: string;
  author: BlogAuthor;
  tags: string[];
  metaDescription: string;
  featured?: boolean;
  keyTakeaways: string[];
  sections: BlogSectionBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'autonomous-inbound-lead-engine',
    title: 'How We Built an Autonomous Inbound Lead Engine With Claude & Make',
    excerpt:
      'Replacing 15 hours of weekly manual SDR research with an autonomous enrich-score-route pipeline that responds in under 90 seconds.',
    category: 'AI Automation',
    publishedAt: 'October 18, 2025',
    isoDate: '2025-10-18',
    readTime: '6 min read',
    featured: true,
    author: {
      name: 'Julian Vance',
      role: 'Head of Systems Architecture',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    },
    tags: ['AI Automation', 'CRM Integration', 'Claude 3.5 Sonnet', 'Make.com'],
    metaDescription:
      'Learn how we engineered an autonomous lead enrichment and routing pipeline using Claude and Make.com to reduce lead response time to 90 seconds.',
    keyTakeaways: [
      'Speed to lead decays logarithmically: responding under 5 minutes yields an 8x conversion lift over standard next-day follow-ups.',
      'Raw LLMs fail on unstructured CRM data; deterministic validation gates must wrap every generative classification step.',
      'Separating intent classification from messaging generation keeps execution latency under 1,200ms per lead.',
    ],
    sections: [
      {
        heading: 'The Fallacy of Human-First Triage',
        content: [
          'Every growth-stage B2B company faces an identical bottleneck: high-intent inbound inquiries land in a shared Slack channel or CRM inbox, only to sit idle while a sales rep manually researches LinkedIn, checks Clearbit data, and drafts a tailored reply.',
          'By the time the reply arrives four hours later, the prospect has already booked a demo with a competitor. Speed-to-lead data across 10,000+ B2B transactions reveals a brutal reality: leads contacted within 5 minutes are 21 times more likely to enter pipeline than those contacted after 30 minutes.',
          'We set out to engineer an autonomous engine that ingests inbound forms, performs multi-source firmographic enrichment, scores intent using Claude 3.5 Sonnet, and drafts custom contextual responses directly inside HubSpot within 90 seconds.',
        ],
      },
      {
        heading: 'System Architecture & Data Flow',
        content: [
          'Rather than relying on closed-box SaaS tools with rigid schemas, we built a three-stage event-driven pipeline on Make.com connected via secure webhooks to our backend workers.',
        ],
        bullets: [
          'Stage 1 (Ingestion & Sanitization): Webhook triggers on form submission, parses metadata, validates corporate domain MX records, and filters disposable emails.',
          'Stage 2 (Enrichment Fan-out): Parallel HTTP queries pull company revenue, headcount, tech stack, and recent funding announcements via Clay and Apollo APIs.',
          'Stage 3 (Synthesis & Intent Evaluation): Claude 3.5 Sonnet compares the enriched profile against our ICP criteria using structured JSON output schemas.',
          'Stage 4 (Routing & Action): If Tier-1 ICP, the system assigns the account executive, generates a tailored calendar invite email draft, and sends an urgent Slack alert.',
        ],
        callout: {
          text: 'The primary failure mode in AI automation is hallucinated routing. We enforce hard schema validation before any payload touches our CRM database.',
          attribution: 'Julian Vance, Architecture Memo',
        },
      },
      {
        heading: 'Deterministic Guardrails Over LLM Magic',
        content: [
          'Prompt engineering alone is insufficient for mission-critical operations. If Claude hallucinates an enterprise contract value or misidentifies a company’s primary industry, your sales team loses confidence in the automated alerts.',
          'We implemented a hybrid verification pattern: LLMs handle fuzzy qualitative synthesis (e.g., assessing whether the company’s stated goal aligns with our capabilities), while deterministic rules handle quantitative constraints (employee minimums, geographic exclusions, and duplicate deal checks).',
          'The result? Zero false-positive routing errors across over 1,400 inbound accounts processed over the last 90 days.',
        ],
      },
      {
        heading: 'Operational Outcomes',
        content: [
          'Within 30 days of deploying this pipeline, the client observed a 44% reduction in inbound sales cycle length. Lead qualification accuracy rose to 98.4%, and SDRs redirected 15 weekly hours from manual data lookup to high-value prospecting calls.',
          'When you treat automation as high-precision systems engineering rather than quick hacks, AI becomes a compounding asset that outpaces headcount growth.',
        ],
      },
    ],
  },
  {
    id: 'post-2',
    slug: 'math-behind-short-form-video-b2b',
    title: 'The Math Behind Short-Form Video For B2B Pipeline',
    excerpt:
      'Why algorithmic volume and modular asset architectures consistently outperform sporadic high-production brand films for B2B pipeline.',
    category: 'Video Systems',
    publishedAt: 'October 08, 2025',
    isoDate: '2025-10-08',
    readTime: '5 min read',
    featured: false,
    author: {
      name: 'Elena Rostova',
      role: 'Creative Director & Video Systems Lead',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    },
    tags: ['Video Systems', 'B2B Marketing', 'Algorithmic Distribution', 'ROAS'],
    metaDescription:
      'An analytical breakdown of the unit economics and algorithmic distribution mechanisms behind short-form video pipelines for B2B growth.',
    keyTakeaways: [
      'Organic reach algorithms test hooks against sample cohorts: producing 30 systematic hook variants delivers 4x higher retention than 1 polished hero video.',
      'Modular asset assembly cuts cost-per-minute of finished video by over 70% without sacrificing editorial grade.',
      'Direct-response short-form video reduces blended customer acquisition cost (CAC) when mapped to specific mid-funnel objections.',
    ],
    sections: [
      {
        heading: 'The Death of the $20,000 Corporate Brand Video',
        content: [
          'Traditional B2B agencies still sell six-month production cycles for a single two-minute corporate overview. By the time the video is approved and rendered, the product roadmap has shifted and the footage is obsolete.',
          'Modern attention is distributed across algorithmic feeds: LinkedIn Video, YouTube Shorts, and vertical social. The algorithm does not reward 4K cinema cameras; it rewards hook retention, average percentage viewed, and message clarity.',
          'To win today, B2B companies must shift from artisanal video production to a repeatable, modular video factory model.',
        ],
      },
      {
        heading: 'Deconstructing the Modular Video Framework',
        content: [
          'We decompose every video asset into four interchangeable mathematical components: the Hook (0-3s), the Problem Statement (3-12s), the Mechanism (12-35s), and the Call to Action (35-45s).',
          'By filming five distinct hooks, three problem variations, and two CTAs in a single batch recording session, we generate 30 unique deliverables with zero incremental studio cost.',
        ],
        bullets: [
          'Variant A: Contrarian premise ("Stop using cold emails for enterprise deals...")',
          'Variant B: Data-driven urgency ("74% of inbound leads never receive a response...")',
          'Variant C: Behind-the-scenes teardown ("Inside our 90-second CRM automation setup...")',
        ],
        callout: {
          text: 'Video is no longer an art project; it is a measurable feedback loop. The math always favors modular iteration over static perfection.',
          attribution: 'Elena Rostova',
        },
      },
      {
        heading: 'Results Across Paid & Organic Feeds',
        content: [
          'When deployed across client paid advertising accounts, our modular hook testing delivered a 4.2x ROAS increase while lowering overall cost-per-qualified-meeting by 38%.',
          'Systematizing video turns creative production into an engineering discipline with predictable pipeline velocity.',
        ],
      },
    ],
  },
  {
    id: 'post-3',
    slug: 'cold-email-deliverability-2025',
    title: 'Cold Email Deliverability in 2025: Engineering Resilient Inbox Infrastructure',
    excerpt:
      'Google and Yahoo spam filters have rewritten the rules of outbound. Here is the technical blueprint for secondary domain architectures.',
    category: 'Outreach',
    publishedAt: 'September 29, 2025',
    isoDate: '2025-09-29',
    readTime: '7 min read',
    featured: false,
    author: {
      name: 'Marcus Chen',
      role: 'Director of Outbound Engineering',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    },
    tags: ['Outreach', 'Deliverability', 'DNS Infrastructure', 'DKIM/DMARC'],
    metaDescription:
      'A technical guide to engineering secondary domain cold email infrastructure that survives Google and Yahoo 2025 deliverability updates.',
    keyTakeaways: [
      'Sending more than 35 cold emails per mailbox per day guarantees domain reputation degradation under current spam filters.',
      'Primary company domains must never be used for outbound prospecting; secondary domain isolation is strictly non-negotiable.',
      'DMARC alignment (p=reject) and custom tracking domains are now mandatory prerequisites for baseline inboxing.',
    ],
    sections: [
      {
        heading: 'The New Deliverability Paradigm',
        content: [
          'The era of blasting 500 emails per day from a single Google Workspace account is permanently dead. Over the past 18 months, major mailbox providers deployed aggressive behavioral machine learning models that monitor reply-to-complaint ratios and mailbox volume variances.',
          'If your spam complaint rate touches even 0.3%, your entire domain reputation plummets into the spam folder, impairing not just marketing outbound, but mission-critical customer emails and invoice delivery.',
        ],
      },
      {
        heading: 'The Multi-Domain Isolation Architecture',
        content: [
          'To protect primary corporate reputation while maintaining outbound scale, we build dedicated secondary domain clusters isolated across multiple cloud providers (Google Workspace, Microsoft 365, and private SMTP relays).',
        ],
        bullets: [
          'Domain Provisioning: Register 5-10 lookalike domains (.co, .io, get[brand].com) aged at least 21 days before any traffic.',
          'DNS Records: Strict SPF records, 2048-bit DKIM keys, and DMARC policies set to quarantine or reject.',
          'Custom Return-Path & Tracking: Replace default ESP tracking domains with branded SSL-secured CNAME records to eliminate blacklisting cross-contamination.',
          'Controlled Warmup: Algorithmic peer-to-peer warmup ramps sending volume gradually over 28 days with human-simulated reply threading.',
        ],
        callout: {
          text: 'Never risk your primary corporate domain for outbound acquisition. Secondary domain isolation provides an immutable firewall for your core brand.',
          attribution: 'Marcus Chen',
        },
      },
      {
        heading: 'Dynamic Personalization at Scale',
        content: [
          'Deliverability is not just DNS records; it is also semantic text variation. Mailbox filters detect near-identical email copies sent in burst intervals.',
          'Our outbound engines use Claude to rewrite sentence structures, greeting styles, and value propositions while preserving core positioning, guaranteeing that no two prospects receive identical hash signatures.',
        ],
      },
    ],
  },
  {
    id: 'post-4',
    slug: 'custom-ai-workflows-vs-saas-wrappers',
    title: 'Why Custom AI Workflows Beat Off-The-Shelf SaaS Wrappers',
    excerpt:
      'Why scaling enterprises are abandoning rigid AI point solutions in favor of owned, custom-engineered API pipelines.',
    category: 'Architecture',
    publishedAt: 'September 15, 2025',
    isoDate: '2025-09-15',
    readTime: '5 min read',
    featured: false,
    author: {
      name: 'Julian Vance',
      role: 'Head of Systems Architecture',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    },
    tags: ['Architecture', 'API Infrastructure', 'Enterprise AI', 'System Design'],
    metaDescription:
      'An analysis of why custom AI workflows outperform generic SaaS wrappers in enterprise reliability, data privacy, and ROI.',
    keyTakeaways: [
      'SaaS wrappers introduce vendor lock-in, recurring per-seat taxes, and inflexible prompt chaining that cannot adapt to proprietary schemas.',
      'Direct API integrations reduce LLM compute cost by up to 85% compared to commercial markups.',
      'Owning your workflow code ensures full compliance, proprietary data retention, and zero risk of sudden vendor shutdown.',
    ],
    sections: [
      {
        heading: 'The Commoditization of the Wrapper',
        content: [
          'In late 2023, hundreds of venture-backed startups launched products that were essentially thin user interfaces sitting atop OpenAI’s Chat Completions API. Fast forward to today, and enterprise buyers are realizing the severe shortcomings of these tools.',
          'They charge $150 per seat per month for features that cost $0.03 in direct API tokens, all while storing sensitive customer communications on unverified third-party multi-tenant databases.',
        ],
      },
      {
        heading: 'The Three Pillars of Custom Systems',
        content: [
          'When we engineer internal AI systems for our clients, we follow three fundamental principles:',
        ],
        bullets: [
          '1. Direct Model Portability: Build model-agnostic pipelines so you can switch between Anthropic, OpenAI, or open-source Llama models based on cost and capability curves.',
          '2. Data Sovereignty: Customer and financial data remains in your own AWS/GCP virtual private cloud and primary data warehouse.',
          '3. Workflow Modularity: Extend and modify logic in minutes via standard code rather than waiting on a third-party roadmap.',
        ],
        callout: {
          text: 'Building on your own infrastructure turns AI from an expensive operational expense into a permanent, defensible enterprise balance-sheet asset.',
          attribution: 'Julian Vance',
        },
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRecentBlogPosts(count = 3): BlogPost[] {
  return BLOG_POSTS.slice(0, count);
}

export function getAllBlogCategories(): string[] {
  return ['All', 'AI Automation', 'Video Systems', 'Outreach', 'Architecture'];
}
