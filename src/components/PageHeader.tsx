import type { ReactNode } from 'react';

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
  rightContent?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  id = 'page-header',
  rightContent,
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
        {rightContent ? (
          <div className="grid grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
            {/* Left Column: Eyebrow, Big Headline & Subtitle */}
            <div className="col-span-12 lg:col-span-6">
              {eyebrow && eyebrow.trim() !== '' && (
                <p
                  id={`${id}-eyebrow`}
                  className="font-body font-medium text-xs sm:text-[13px] uppercase tracking-[0.1em] text-[#6B6862] mb-2 sm:mb-4 select-none"
                >
                  {eyebrow}
                </p>
              )}

              <h1
                id={`${id}-title`}
                className="font-headline font-normal sm:font-medium text-[30px] min-[380px]:text-[36px] sm:text-[46px] md:text-[54px] lg:text-[56px] xl:text-[64px] leading-[1.1] sm:leading-[1.05] tracking-[-0.03em] text-[#1A1A1A]"
              >
                {titleLines.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              {subtitle && (
                <p
                  id={`${id}-subtitle`}
                  className="font-body font-normal text-sm sm:text-lg md:text-xl text-[#6B6862] leading-relaxed max-w-xl mt-3 sm:mt-5"
                >
                  {subtitle}
                </p>
              )}
            </div>

            {/* Right Column: Hero Image Container */}
            <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end">
              {rightContent}
            </div>
          </div>
        ) : (
          /* Default 1-column layout for Home, About, Blog, Contact, etc. */
          <>
            {eyebrow && eyebrow.trim() !== '' && (
              <p
                id={`${id}-eyebrow`}
                className="font-body font-medium text-xs sm:text-[13px] uppercase tracking-[0.1em] text-[#6B6862] mb-2 sm:mb-4 select-none"
              >
                {eyebrow}
              </p>
            )}

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

            {subtitle && (
              <p
                id={`${id}-subtitle`}
                className="font-body font-normal text-xs sm:text-lg md:text-xl text-[#6B6862] leading-relaxed max-w-2xl mt-3 sm:mt-5"
              >
                {subtitle}
              </p>
            )}
          </>
        )}
      </div>
    </header>
  );
}
