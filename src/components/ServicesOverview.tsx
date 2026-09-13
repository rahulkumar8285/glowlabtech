import { useState, useRef, MouseEvent } from 'react';

interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  href: string;
  image: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'service-automation',
    number: '01',
    name: 'AI Automation & Workflows',
    description: 'automating operations, follow-ups, and internal processes so your team scales without adding headcount',
    href: '#service-automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'service-video',
    number: '02',
    name: 'AI Video Creation',
    description: 'AI-generated UGC, ad creative, and short-form video content built for paid social and organic growth',
    href: '#service-video',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'service-leadgen',
    number: '03',
    name: 'Lead Generation Systems',
    description: 'end-to-end pipelines that find, qualify, and route leads into your CRM automatically',
    href: '#service-leadgen',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'service-outreach',
    number: '04',
    name: 'Cold Email & Outreach',
    description: 'deliverability-safe outbound systems that book meetings on autopilot',
    href: '#service-outreach',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'service-web',
    number: '05',
    name: 'Website Design & Management',
    description: 'premium websites and ongoing management, built to convert',
    href: '#service-web',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=240&q=80',
  },
  {
    id: 'service-content',
    number: '06',
    name: 'Content Strategy',
    description: 'a content system that compounds, not one-off posts',
    href: '#service-content',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=240&q=80',
  },
];

interface ServiceRowProps {
  key?: string;
  service: ServiceItem;
}

function ServiceRow({ service }: ServiceRowProps) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const updatePosition = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    // Follow cursor vertically within row bounds (thumbnail height: 90px)
    const clampedY = Math.max(8, Math.min(rect.height - 98, relY - 45));

    // Position horizontally near cursor with safety bounds (thumbnail width: 120px)
    const placeRight = relX + 24 + 120 <= rect.width;
    const targetX = placeRight ? relX + 24 : relX - 144;
    const clampedX = Math.max(12, Math.min(rect.width - 132, targetX));

    setCoords({ x: clampedX, y: clampedY });
  };

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    updatePosition(e);
    setIsHovered(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    updatePosition(e);
  };

  return (
    <a
      ref={rowRef}
      id={service.id}
      href={service.href}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block w-full py-8 sm:py-10 md:py-12 border-t border-black/10 transition-colors duration-200 cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 md:gap-8 lg:gap-12">
        {/* Left: Number + Service Name */}
        <div className="flex items-baseline gap-6 sm:gap-10 md:gap-12 flex-1 min-w-0">
          <span className="font-body text-xs sm:text-sm font-normal text-neutral-400 tabular-nums shrink-0 select-none group-hover:text-neutral-600 transition-colors duration-200">
            {service.number}
          </span>
          <h3 className="font-headline font-normal sm:font-medium text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] group-hover:text-[#C84826] transition-colors duration-200">
            {service.name}
          </h3>
        </div>

        {/* Right: One-line description */}
        <p className="font-body text-sm sm:text-[15px] md:text-base font-normal text-neutral-500 leading-relaxed md:text-right max-w-xl md:max-w-md lg:max-w-lg shrink-0 group-hover:text-[#1A1A1A] transition-colors duration-200 pl-8 sm:pl-16 md:pl-0">
          {service.description}
        </p>
      </div>

      {/* Desktop hover thumbnail: ~120x90px, flat, no drop-shadow, follows cursor vertically */}
      <div
        aria-hidden="true"
        style={{
          top: `${coords.y}px`,
          left: `${coords.x}px`,
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'scale(1)' : 'scale(0.95)',
        }}
        className="pointer-events-none absolute hidden md:block w-[120px] h-[90px] overflow-hidden border border-black/10 bg-[#FAF9F6] transition-opacity duration-150 ease-out z-20"
      >
        <img
          src={service.image}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </a>
  );
}

export default function ServicesOverview() {
  return (
    <section
      id="services-overview"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-28 sm:py-32 md:py-36 lg:py-40"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Section title: Left-aligned "What we do" in Bricolage Grotesque, weight 400-500 */}
        <h2
          id="services-heading"
          className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A] mb-12 sm:mb-16 md:mb-20 text-left"
        >
          What we do
        </h2>

        {/* 6 stacked rows with hairline dividers */}
        <div id="services-list" className="w-full border-b border-black/10">
          {SERVICES.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
