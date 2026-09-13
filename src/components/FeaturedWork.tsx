import { useState, useRef, type MouseEvent } from 'react';

interface Project {
  id: string;
  name: string;
  category: string;
  type: 'video' | 'static';
  aspectRatio: string;
  colSpan: string;
  mediaSrc: string;
  posterSrc?: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    id: 'project-lumina',
    name: 'Lumina UGC',
    category: 'AI Video Creation',
    type: 'video',
    aspectRatio: 'aspect-[9/16]',
    colSpan: 'col-span-12 md:col-span-4',
    mediaSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    href: '/services/ai-video-creation',
  },
  {
    id: 'project-kairo',
    name: 'Kairo Engine',
    category: 'AI Automation',
    type: 'static',
    aspectRatio: 'aspect-[16/10]',
    colSpan: 'col-span-12 md:col-span-8',
    mediaSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    href: '/services/ai-automation',
  },
  {
    id: 'project-verve',
    name: 'Verve Studio',
    category: 'Website Design',
    type: 'static',
    aspectRatio: 'aspect-[16/10]',
    colSpan: 'col-span-12 md:col-span-7',
    mediaSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    href: '/services/website-design',
  },
  {
    id: 'project-nova',
    name: 'Nova Synthetic',
    category: 'AI Video Creation',
    type: 'video',
    aspectRatio: 'aspect-[9/16]',
    colSpan: 'col-span-12 md:col-span-5',
    mediaSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    posterSrc: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    href: '/services/ai-video-creation',
  },
  {
    id: 'project-matrix',
    name: 'Matrix Pipeline',
    category: 'Lead Generation',
    type: 'static',
    aspectRatio: 'aspect-[16/9] md:aspect-[21/9]',
    colSpan: 'col-span-12',
    mediaSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    href: '/services/lead-generation',
  },
];

function VideoTile({
  project,
  onNavigate,
}: {
  project: Project;
  onNavigate?: (path: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Playback blocked or postponed
        });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(project.href);
    }
  };

  return (
    <a
      id={project.id}
      href={project.href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative block w-full ${project.aspectRatio} overflow-hidden rounded-[6px] bg-[#EAE6DF] cursor-pointer`}
    >
      {/* Fallback & base poster image */}
      {project.posterSrc && (
        <img
          src={project.posterSrc}
          alt=""
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />
      )}

      {/* Looping video preview */}
      <video
        ref={videoRef}
        src={project.mediaSrc}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for caption contrast - persistent on mobile touchscreens */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
      />

      {/* Caption at bottom showing project name and category */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none z-10 flex items-center justify-between">
        <p className="font-body text-xs sm:text-[15px] font-medium text-white tracking-wide">
          {project.name} <span className="mx-1.5 sm:mx-2 text-white/50">|</span> {project.category}
        </p>
        <span className="text-white/80 text-xs sm:text-sm">→</span>
      </div>
    </a>
  );
}

function StaticTile({
  project,
  onNavigate,
}: {
  project: Project;
  onNavigate?: (path: string) => void;
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(project.href);
    }
  };

  return (
    <a
      id={project.id}
      href={project.href}
      onClick={handleClick}
      className={`group relative block w-full ${project.aspectRatio} overflow-hidden rounded-[6px] bg-[#EAE6DF] cursor-pointer active:scale-[0.99] transition-transform`}
    >
      {/* Static image with subtle zoom on hover */}
      <img
        src={project.mediaSrc}
        alt=""
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-500 ease-out transform scale-100 group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Dark overlay for caption contrast - persistent on mobile touchscreens */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
      />

      {/* Caption at bottom showing project name and category */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none z-10 flex items-center justify-between">
        <p className="font-body text-xs sm:text-[15px] font-medium text-white tracking-wide">
          {project.name} <span className="mx-1.5 sm:mx-2 text-white/50">|</span> {project.category}
        </p>
        <span className="text-white/80 text-xs sm:text-sm">→</span>
      </div>
    </a>
  );
}

export default function FeaturedWork({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) {
  return (
    <section
      id="featured-work-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-14 sm:py-18 md:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Section Header Row: Title on the left, View all link on the right */}
        <div
          id="featured-work-header"
          className="flex items-baseline justify-between mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            id="featured-work-heading"
            className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A]"
          >
            Selected work
          </h2>

          <a
            href="/services/ai-automation"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/services/ai-automation');
              }
            }}
            id="featured-work-view-all"
            className="group relative inline-flex items-center font-body text-sm sm:text-[15px] font-medium text-[#1A1A1A] cursor-pointer"
          >
            <span className="relative py-1">
              Explore services →
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#1A1A1A] transition-all duration-300 ease-out group-hover:w-full" />
            </span>
          </a>
        </div>

        {/* Asymmetric Project Grid with intentional variation in tile sizes and aspect ratios */}
        <div
          id="featured-work-grid"
          className="grid grid-cols-12 gap-5 sm:gap-6 md:gap-8 items-center"
        >
          {PROJECTS.map((project) => (
            <div key={project.id} className={project.colSpan}>
              {project.type === 'video' ? (
                <VideoTile project={project} onNavigate={onNavigate} />
              ) : (
                <StaticTile project={project} onNavigate={onNavigate} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
