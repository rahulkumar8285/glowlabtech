export interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  id = 'page-header',
}: PageHeaderProps) {
  // Split title into separate lines if "/" delimiter is present
  const titleLines = title.includes('/')
    ? title.split(/\s*\/\s*/)
    : [title];

  return (
    <header
      id={id}
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 relative border-b border-black/10"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 text-left">
        {/* Eyebrow: Inter, uppercase, small size (~13px), letter-spacing 0.1em, muted gray #6B6862 — plain text, no badge/pill/dot */}
        <p
          id={`${id}-eyebrow`}
          className="font-body font-medium text-[13px] uppercase tracking-[0.1em] text-[#6B6862] mb-4 sm:mb-6 select-none"
        >
          {eyebrow}
        </p>

        {/* Title: Bricolage Grotesque, weight 400-500, large display size (~56-80px desktop / ~32-40px mobile), tight line-height 1.05 */}
        <h1
          id={`${id}-title`}
          className="font-headline font-normal sm:font-medium text-[34px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] max-w-5xl"
        >
          {titleLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Subtitle (if passed): Inter, weight 400, muted gray, clearly smaller than title */}
        {subtitle && (
          <p
            id={`${id}-subtitle`}
            className="font-body font-normal text-base sm:text-lg md:text-xl text-[#6B6862] leading-relaxed max-w-2xl mt-5 sm:mt-6"
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
