export interface PageHeaderProps {
  eyebrow?: string;
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
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] pt-24 sm:pt-32 md:pt-36 pb-8 sm:pb-12 md:pb-14 relative border-b border-black/10"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
        {/* Eyebrow (optional): Inter, uppercase, small size */}
        {eyebrow && eyebrow.trim() !== '' && (
          <p
            id={`${id}-eyebrow`}
            className="font-body font-medium text-xs sm:text-[13px] uppercase tracking-[0.1em] text-[#6B6862] mb-2 sm:mb-4 select-none"
          >
            {eyebrow}
          </p>
        )}

        {/* Title: Bricolage Grotesque, fluid sizing on mobile to prevent clipping */}
        <h1
          id={`${id}-title`}
          className="font-headline font-normal sm:font-medium text-[28px] min-[380px]:text-[34px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[1.1] sm:leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] max-w-5xl"
        >
          {titleLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Subtitle (if passed): Inter, weight 400, muted gray */}
        {subtitle && (
          <p
            id={`${id}-subtitle`}
            className="font-body font-normal text-xs sm:text-lg md:text-xl text-[#6B6862] leading-relaxed max-w-2xl mt-3 sm:mt-5"
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
