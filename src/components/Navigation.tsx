import type { MouseEvent } from 'react';

interface NavigationProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export default function Navigation({
  currentPath = '/',
  onNavigate,
}: NavigationProps) {
  const handleNavClick = (path: string, e: MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <nav
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/92 backdrop-blur-md border-b border-black/[0.06] transition-colors duration-200"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick('/', e)}
          id="nav-logo"
          className="group flex items-center gap-2 text-left cursor-pointer"
        >
          <span className="font-headline font-medium text-lg sm:text-xl tracking-tight text-[#1A1A1A]">
            STUDIO<span className="text-[#C84826]">.</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            id="nav-link-home"
            className={`font-body text-sm tracking-wide transition-colors ${
              currentPath === '/'
                ? 'text-[#1A1A1A] font-medium'
                : 'text-neutral-600 hover:text-[#1A1A1A]'
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={(e) => handleNavClick('/about', e)}
            id="nav-link-about"
            className={`font-body text-sm tracking-wide transition-colors ${
              currentPath === '/about'
                ? 'text-[#C84826] font-medium'
                : 'text-neutral-600 hover:text-[#1A1A1A]'
            }`}
          >
            About
          </a>
          <a
            href="/services"
            onClick={(e) => handleNavClick('/services', e)}
            id="nav-link-services"
            className={`font-body text-sm tracking-wide transition-colors ${
              currentPath === '/services' || currentPath === '/service'
                ? 'text-[#C84826] font-medium'
                : 'text-neutral-600 hover:text-[#1A1A1A]'
            }`}
          >
            Services
          </a>
          <a
            href="/#featured-work-section"
            onClick={(e) => {
              if (currentPath !== '/') {
                handleNavClick('/#featured-work-section', e);
              }
            }}
            id="nav-link-work"
            className="font-body text-sm tracking-wide text-neutral-600 hover:text-[#1A1A1A] transition-colors"
          >
            Work
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a
            href="#final-cta-section"
            id="nav-cta-button"
            className="inline-flex items-center justify-center font-body font-medium text-xs sm:text-sm text-white bg-[#C84826] hover:bg-[#B33E1D] px-5 sm:px-6 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
}
