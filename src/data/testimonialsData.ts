export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  category: string;
  serviceSlug: string;
  serviceName: string;
  metric: {
    value: string;
    label: string;
  };
  context: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      'We went from one video ad running for weeks to twenty high-performing variations tested in five days. The winning hook alone paid for the entire studio engagement within the first 48 hours.',
    clientName: 'Aarav Mehta',
    role: 'Founder & CEO',
    company: 'Veloce Apparel',
    category: 'AI Video Creation',
    serviceSlug: 'ai-video-creation',
    serviceName: 'AI Video Creation',
    metric: {
      value: '4.2x',
      label: 'Creative ROAS increase',
    },
    context: 'Deployed automated synthetic UGC ad variation engine for paid Meta & TikTok campaigns.',
  },
  {
    id: 'testimonial-2',
    quote:
      'The event-driven automation they engineered handles client onboarding and data syncing we used to spend hours doing manually every single day. It has never dropped a single webhook.',
    clientName: 'Sara Kapoor',
    role: 'Head of Operations',
    company: 'HyperScale Logistics',
    category: 'AI Automation',
    serviceSlug: 'ai-automation',
    serviceName: 'AI Automation & Workflows',
    metric: {
      value: '18 hrs',
      label: 'Saved per team member / week',
    },
    context: 'Architected resilient webhook middleware connecting CRM, billing, and internal Slack alerts.',
  },
  {
    id: 'testimonial-3',
    quote:
      'Outbound email used to be our weakest acquisition channel. Their waterfall enrichment and multi-inbox rotation system books more qualified enterprise meetings than all our paid ads combined.',
    clientName: 'Daniel Osei',
    role: 'Co-Founder',
    company: 'Apex Cloud Analytics',
    category: 'Cold Email Outreach',
    serviceSlug: 'cold-email-outreach',
    serviceName: 'Cold Email & Outreach',
    metric: {
      value: '68%',
      label: 'Sustained open rate across 40 domains',
    },
    context: 'Configured secondary domain infrastructure and automated waterfall verification pipelines.',
  },
  {
    id: 'testimonial-4',
    quote:
      'Our sales development reps were drowning in manual prospecting. The custom qualification pipeline now filters, scores, and injects verified buyers directly into HubSpot every morning.',
    clientName: 'Elena Rostova',
    role: 'VP of Sales',
    company: 'Nexus Cyber Security',
    category: 'Lead Generation',
    serviceSlug: 'lead-generation',
    serviceName: 'Lead Generation Systems',
    metric: {
      value: '+310%',
      label: 'Qualified pipeline volume',
    },
    context: 'Constructed automated intent-signal scraping and CRM routing workflows.',
  },
  {
    id: 'testimonial-5',
    quote:
      'The website rebuild changed how enterprise clients perceive us. The typography, editorial speed, and conversion architecture immediately doubled our demo booking conversion rate.',
    clientName: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Verve Capital Partners',
    category: 'Website Design',
    serviceSlug: 'website-design',
    serviceName: 'Website Design & Management',
    metric: {
      value: '2.4x',
      label: 'Demo booking conversion lift',
    },
    context: 'Engineered high-performance editorial website with sub-second page loads.',
  },
  {
    id: 'testimonial-6',
    quote:
      'Instead of generic advice, they built us a proprietary fine-tuned model and internal portal that reduced our legal contract review cycle from three days down to 45 minutes.',
    clientName: 'Priya Sharma',
    role: 'Chief Technology Officer',
    company: 'Cognitive Fintech',
    category: 'Software Development',
    serviceSlug: 'software-development',
    serviceName: 'Software Development & Custom AI',
    metric: {
      value: '84%',
      label: 'Contract processing cycle reduction',
    },
    context: 'Engineered custom secure RAG architecture and authenticated internal client portal.',
  },
];
