import type { MouseEvent } from 'react';

interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  description: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'service-automation',
    slug: 'ai-automation',
    number: '01',
    name: 'AI Automation & Workflows',
    description: 'automating operations, follow-ups, and internal processes so your team scales without adding headcount',
    href: '/services/ai-automation',
  },
  {
    id: 'service-video',
    slug: 'ai-video-creation',
    number: '02',
    name: 'AI Video Creation',
    description: 'AI-generated UGC, ad creative, and short-form video content built for paid social and organic growth',
    href: '/services/ai-video-creation',
  },
  {
    id: 'service-leadgen',
    slug: 'lead-generation',
    number: '03',
    name: 'Lead Generation Systems',
    description: 'end-to-end pipelines that find, qualify, and route leads into your CRM automatically',
    href: '/services/lead-generation',
  },
  {
    id: 'service-outreach',
    slug: 'cold-email-outreach',
    number: '04',
    name: 'Cold Email & Outreach',
    description: 'deliverability-safe outbound systems that book meetings on autopilot',
    href: '/services/cold-email-outreach',
  },
  {
    id: 'service-web',
    slug: 'website-design',
    number: '05',
    name: 'Website Design & Management',
    description: 'premium websites and ongoing management, built to convert',
    href: '/services/website-design',
  },
  {
    id: 'service-content',
    slug: 'content-strategy',
    number: '06',
    name: 'Content Strategy',
    description: 'a content system that compounds, not one-off posts',
    href: '/services/content-strategy',
  },
  {
    id: 'service-software',
    slug: 'software-development',
    number: '07',
    name: 'Software Development & Custom AI',
    description: 'tailored web apps, internal dashboards, and fine-tuned proprietary AI models',
    href: '/services/software-development',
  },
];

interface ServiceRowProps {
  key?: string;
  service: ServiceItem;
  onNavigate?: (path: string) => void;
}

function ServiceRow({ service, onNavigate }: ServiceRowProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(service.href);
    }
  };

  return (
    <a
      id={service.id}
      href={service.href}
      onClick={handleClick}
      className="group relative block w-full py-4.5 sm:py-6 md:py-7 px-1 sm:px-0 border-t border-black/10 transition-all duration-200 cursor-pointer overflow-hidden rounded-lg active:bg-black/[0.03] active:scale-[0.99]"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2.5 sm:gap-3 md:gap-8 lg:gap-12">
        {/* Left: Service Name */}
        <div className="flex items-center sm:items-baseline flex-1 min-w-0">
          <h3 className="font-headline font-normal sm:font-medium text-xl sm:text-3xl lg:text-[34px] xl:text-[38px] leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] group-hover:text-[#C84826] transition-colors duration-200">
            {service.name}
          </h3>
        </div>

        {/* Right: One-line description and persistent arrow */}
        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0 pl-0">
          <p className="font-body text-xs sm:text-[15px] md:text-base font-normal text-neutral-500 leading-relaxed md:text-right max-w-xl md:max-w-md lg:max-w-lg group-hover:text-[#1A1A1A] transition-colors duration-200">
            {service.description}
          </p>
          <span className="text-neutral-400 group-hover:text-[#C84826] group-hover:translate-x-1 group-active:translate-x-1 transition-all duration-200 text-sm shrink-0 select-none">
            →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ServicesOverview({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) {
  return (
    <section
      id="services-overview-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-14 sm:py-18 md:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
        <span id="services-overview" className="sr-only" />
        {/* Section title: Left-aligned "What we do" in Bricolage Grotesque, weight 400-500 */}
        <h2
          id="services-heading"
          className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A] mb-8 sm:mb-10 md:mb-12 text-left"
        >
          What we do
        </h2>

        {/* 7 stacked rows with hairline dividers */}
        <div id="services-list" className="w-full border-b border-black/10">
          {SERVICES.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
