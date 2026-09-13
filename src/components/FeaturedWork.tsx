import { useState, useRef } from 'react';

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
    href: '#case-study-lumina',
  },
  {
    id: 'project-kairo',
    name: 'Kairo Engine',
    category: 'AI Automation',
    type: 'static',
    aspectRatio: 'aspect-[16/10]',
    colSpan: 'col-span-12 md:col-span-8',
    mediaSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    href: '#case-study-kairo',
  },
  {
    id: 'project-verve',
    name: 'Verve Studio',
    category: 'Website Design',
    type: 'static',
    aspectRatio: 'aspect-[16/10]',
    colSpan: 'col-span-12 md:col-span-7',
    mediaSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    href: '#case-study-verve',
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
    href: '#case-study-nova',
  },
  {
    id: 'project-matrix',
    name: 'Matrix Pipeline',
    category: 'Lead Generation',
    type: 'static',
    aspectRatio: 'aspect-[16/9] md:aspect-[21/9]',
    colSpan: 'col-span-12',
    mediaSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    href: '#case-study-matrix',
  },
];

function VideoTile({ project }: { project: Project }) {
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

  return (
    <a
      id={project.id}
      href={project.href}
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

      {/* Looping video preview on hover */}
      <video
        ref={videoRef}
        src={project.mediaSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for caption contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
      />

      {/* Caption at bottom-left showing project name | service category */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none z-10">
        <p className="font-body text-sm sm:text-[15px] font-medium text-white tracking-wide">
          {project.name} <span className="mx-2 text-white/50">|</span> {project.category}
        </p>
      </div>
    </a>
  );
}

function StaticTile({ project }: { project: Project }) {
  return (
    <a
      id={project.id}
      href={project.href}
      className={`group relative block w-full ${project.aspectRatio} overflow-hidden rounded-[6px] bg-[#EAE6DF] cursor-pointer`}
    >
      {/* Static image with subtle zoom on hover */}
      <img
        src={project.mediaSrc}
        alt=""
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-500 ease-out transform scale-100 group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Dark overlay for caption contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
      />

      {/* Caption at bottom-left showing project name | service category */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none z-10">
        <p className="font-body text-sm sm:text-[15px] font-medium text-white tracking-wide">
          {project.name} <span className="mx-2 text-white/50">|</span> {project.category}
        </p>
      </div>
    </a>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="featured-work-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-28 sm:py-32 md:py-36 lg:py-40"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Section Header Row: Title on the left, View all link on the right */}
        <div
          id="featured-work-header"
          className="flex items-baseline justify-between mb-12 sm:mb-16 md:mb-20"
        >
          <h2
            id="featured-work-heading"
            className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A]"
          >
            Selected work
          </h2>

          <a
            href="#all-work"
            id="featured-work-view-all"
            className="group relative inline-flex items-center font-body text-sm sm:text-[15px] font-medium text-[#1A1A1A] cursor-pointer"
          >
            <span className="relative py-1">
              View all →
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#1A1A1A] transition-all duration-300 ease-out group-hover:w-full" />
            </span>
          </a>
        </div>

        {/* Asymmetric Project Grid with intentional variation in tile sizes and aspect ratios */}
        <div
          id="featured-work-grid"
          className="grid grid-cols-12 gap-6 sm:gap-8 items-center"
        >
          {PROJECTS.map((project) => (
            <div key={project.id} className={project.colSpan}>
              {project.type === 'video' ? (
                <VideoTile project={project} />
              ) : (
                <StaticTile project={project} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
