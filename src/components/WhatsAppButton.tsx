import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const phoneNumber = '918929721558';
  const displayPhone = '+91 89297 21558';
  const message = encodeURIComponent(
    'Hi GrowthTechSys, I would like to inquire about your services.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat directly on WhatsApp with GrowthTechSys at ${displayPhone}`}
        className="group relative flex items-center gap-2.5 sm:gap-3 bg-[#141413]/95 hover:bg-[#1A1A1A] text-[#FAF9F6] pl-3 pr-4 sm:pl-3.5 sm:pr-5 py-2.5 sm:py-3 rounded-full border border-white/10 hover:border-[#25D366]/60 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.25)] transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-md"
      >
        {/* Subtle decorative glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        {/* WhatsApp Icon Circle */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4 sm:w-5 sm:h-5 fill-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          {/* Active Status Pulse */}
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full ring-2 ring-[#141413] animate-pulse" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-headline font-medium text-xs sm:text-[13px] text-[#FAF9F6] tracking-tight leading-tight group-hover:text-white transition-colors">
              Direct Chat
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] shrink-0" />
          </div>
          <span className="font-body text-[11px] sm:text-xs text-neutral-400 group-hover:text-neutral-300 font-normal leading-tight transition-colors">
            {displayPhone}
          </span>
        </div>
      </a>
    </aside>
  );
}
