import { useState, useRef, useEffect, type MouseEvent } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA, PRODUCTS_DATA } from '../data/offeringsData';

interface NavigationProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export default function Navigation({
  currentPath = '/',
  onNavigate,
}: NavigationProps) {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const productsTimeoutRef = useRef<number | null>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive =
    currentPath.startsWith('/services') ||
    currentPath.startsWith('/service');

  const isProductsActive =
    currentPath === '/products' ||
    currentPath.startsWith('/products');

  const handleNavClick = (path: string, e?: MouseEvent<HTMLElement>) => {
    if (e) {
      e.preventDefault();
    }
    setIsServicesDropdownOpen(false);
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      window.clearTimeout(productsTimeoutRef.current);
    }
    setIsProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = window.setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
        setIsProductsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        id="main-navigation"
        className="fixed top-0 left-0 right-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-black/[0.06] transition-colors duration-200"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            id="nav-logo"
            className="group flex items-center gap-2 text-left cursor-pointer shrink-0"
          >
            <img
              src="/logo-transparent.png"
              alt="GlowLab Tech"
              className="h-4.5 sm:h-5.5 md:h-6.5 w-auto object-contain transition-transform group-hover:opacity-95"
            />
          </a>

          {/* Desktop Links */}
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

            {/* SERVICES DROPDOWN CONTAINER */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                id="nav-link-services"
                onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
                className={`font-body text-sm tracking-wide flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isServicesActive
                    ? 'text-[#C84826] font-medium'
                    : 'text-neutral-600 hover:text-[#1A1A1A]'
                }`}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180 text-[#C84826]' : 'text-neutral-400'
                  }`}
                />
              </button>

              {/* FLOATING SERVICES DROPDOWN MENU */}
              {isServicesDropdownOpen && (
                <div
                  id="services-dropdown-menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[420px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="bg-[#FAF9F6] border border-black/10 rounded-[6px] shadow-xl p-3 sm:p-3.5 text-left">
                    <ul className="space-y-0.5">
                      {SERVICES_DATA.map((service) => {
                        const isCurrent = currentPath === `/services/${service.slug}`;
                        return (
                          <li key={service.id}>
                            <a
                              href={`/services/${service.slug}`}
                              onClick={(e) => handleNavClick(`/services/${service.slug}`, e)}
                              className={`group block p-2.5 rounded-[4px] transition-colors cursor-pointer ${
                                isCurrent
                                  ? 'bg-[#C84826]/10 text-[#C84826]'
                                  : 'hover:bg-black/[0.03] text-[#1A1A1A]'
                              }`}
                            >
                              <p className="font-body text-xs font-medium truncate group-hover:text-[#C84826] transition-colors">
                                {service.name}
                              </p>
                              <p className="font-body text-[11px] text-neutral-500 truncate mt-0.5">
                                {service.summary}
                              </p>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* PRODUCTS DROPDOWN CONTAINER */}
            <div
              ref={productsDropdownRef}
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button
                type="button"
                id="nav-link-products"
                onClick={() => setIsProductsDropdownOpen((prev) => !prev)}
                className={`font-body text-sm tracking-wide flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isProductsActive
                    ? 'text-[#C84826] font-medium'
                    : 'text-neutral-600 hover:text-[#1A1A1A]'
                }`}
                aria-expanded={isProductsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isProductsDropdownOpen ? 'rotate-180 text-[#C84826]' : 'text-neutral-400'
                  }`}
                />
              </button>

              {/* FLOATING PRODUCTS DROPDOWN MENU */}
              {isProductsDropdownOpen && (
                <div
                  id="products-dropdown-menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[430px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="bg-[#FAF9F6] border border-black/10 rounded-[6px] shadow-xl p-3 sm:p-3.5 text-left">
                    <div className="px-2.5 pb-2 mb-1 border-b border-black/5 flex items-center justify-between">
                      <span className="font-body text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                        GlowLab Software Engines
                      </span>
                      <span className="text-[10px] bg-[#C84826]/10 text-[#C84826] px-2 py-0.5 rounded-full font-medium">
                        Proprietary
                      </span>
                    </div>

                    <ul className="space-y-1">
                      {PRODUCTS_DATA.map((product) => {
                        const isPrimary = product.id === 'field-tracking-app';
                        return (
                          <li key={product.id}>
                            <a
                              href="/products"
                              onClick={(e) => {
                                handleNavClick('/products', e);
                                setIsProductsDropdownOpen(false);
                              }}
                              className={`group block p-2.5 rounded-[4px] transition-colors cursor-pointer ${
                                isPrimary && isProductsActive
                                  ? 'bg-[#C84826]/10 text-[#C84826]'
                                  : 'hover:bg-black/[0.03] text-[#1A1A1A]'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <p className="font-body text-xs font-semibold truncate group-hover:text-[#C84826] transition-colors">
                                  {product.name}
                                </p>
                                <span
                                  className={`text-[10px] shrink-0 px-1.5 py-0.5 rounded font-medium ${
                                    product.badge.includes('Live') || product.badge.includes('Flagship')
                                      ? 'bg-emerald-500/15 text-emerald-700'
                                      : 'bg-black/5 text-neutral-500'
                                  }`}
                                >
                                  {product.badge.includes('Live') || product.badge.includes('Flagship')
                                    ? 'Live SaaS'
                                    : product.badge}
                                </span>
                              </div>
                              <p className="font-body text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                                {product.tagline}
                              </p>
                            </a>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Dropdown Footer Link */}
                    <div className="pt-2.5 mt-2 border-t border-black/5 px-2.5">
                      <a
                        href="/products"
                        onClick={(e) => {
                          handleNavClick('/products', e);
                          setIsProductsDropdownOpen(false);
                        }}
                        className="inline-flex items-center justify-between w-full font-body text-xs font-medium text-[#C84826] hover:text-[#9E3416] transition-colors py-1 cursor-pointer"
                      >
                        <span>View All Platforms &amp; Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/blog"
              onClick={(e) => handleNavClick('/blog', e)}
              id="nav-link-blog"
              className={`font-body text-sm tracking-wide transition-colors ${
                currentPath.startsWith('/blog')
                  ? 'text-[#C84826] font-medium'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              Blog
            </a>

            <a
              href="/testimonials"
              onClick={(e) => handleNavClick('/testimonials', e)}
              id="nav-link-testimonials"
              className={`font-body text-sm tracking-wide transition-colors ${
                currentPath === '/testimonials'
                  ? 'text-[#C84826] font-medium'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              Testimonials
            </a>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/contact"
              onClick={(e) => handleNavClick('/contact', e)}
              id="nav-cta-button"
              className="inline-flex items-center justify-center font-body font-medium text-xs sm:text-sm text-white bg-[#C84826] hover:bg-[#B33E1D] px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-colors duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              Book a call
            </a>

            {/* Mobile Hamburger Button with comfortable 44px tap zone */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full text-neutral-800 hover:text-[#C84826] active:bg-black/5 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULL-HEIGHT SCREEN-CONTAINED MOBILE DRAWER OUTSIDE BACKDROP-FILTER NAV */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-0 z-50 bg-[#FAF9F6] flex flex-col h-[100dvh] w-screen overflow-hidden animate-in fade-in duration-150"
        >
          {/* Mobile Top Header inside Drawer */}
          <div className="w-full h-18 sm:h-20 px-4 sm:px-8 flex items-center justify-between border-b border-black/[0.08] bg-[#FAF9F6] shrink-0">
            <a
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className="group flex items-center gap-2 text-left cursor-pointer shrink-0"
            >
              <img
                src="/logo-transparent.png"
                alt="GlowLab Tech"
                className="h-4.5 sm:h-5.5 w-auto object-contain"
              />
            </a>

            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="/contact"
                onClick={(e) => handleNavClick('/contact', e)}
                className="inline-flex items-center justify-center font-body font-medium text-xs sm:text-sm text-white bg-[#C84826] hover:bg-[#B33E1D] px-3.5 sm:px-5 py-2 rounded-full transition-colors duration-200 cursor-pointer shadow-sm active:scale-95"
              >
                Book a call
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
                className="w-11 h-11 flex items-center justify-center rounded-full text-neutral-800 hover:text-[#C84826] active:bg-black/5 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Nav Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 overscroll-contain">
            {/* Main Links */}
            <div className="flex flex-col divide-y divide-black/[0.06] text-left">
              {/* Home */}
              <a
                href="/"
                onClick={(e) => handleNavClick('/', e)}
                className={`font-headline text-2xl font-normal py-3.5 flex items-center justify-between transition-colors cursor-pointer ${
                  currentPath === '/' ? 'text-[#C84826] font-medium' : 'text-[#1A1A1A] hover:text-[#C84826]'
                }`}
              >
                <span>Home</span>
                {currentPath === '/' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C84826]" />
                )}
              </a>

              {/* About */}
              <a
                href="/about"
                onClick={(e) => handleNavClick('/about', e)}
                className={`font-headline text-2xl font-normal py-3.5 flex items-center justify-between transition-colors cursor-pointer ${
                  currentPath === '/about' ? 'text-[#C84826] font-medium' : 'text-[#1A1A1A] hover:text-[#C84826]'
                }`}
              >
                <span>About</span>
                {currentPath === '/about' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C84826]" />
                )}
              </a>

              {/* Services Accordion */}
              <div className="py-3.5">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between font-headline text-2xl font-normal py-1 transition-colors cursor-pointer text-left ${
                    isServicesActive ? 'text-[#C84826] font-medium' : 'text-[#1A1A1A] hover:text-[#C84826]'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180 text-[#C84826]' : 'text-neutral-400'
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="pt-3 pb-2 space-y-3">
                    <div className="space-y-1">
                      {SERVICES_DATA.map((service) => {
                        const isCurrent = currentPath === `/services/${service.slug}`;
                        return (
                          <a
                            key={service.id}
                            href={`/services/${service.slug}`}
                            onClick={(e) => handleNavClick(`/services/${service.slug}`, e)}
                            className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-colors cursor-pointer ${
                              isCurrent
                                ? 'bg-[#C84826]/10 text-[#C84826] font-medium'
                                : 'text-neutral-700 hover:text-[#1A1A1A] active:bg-black/[0.04]'
                            }`}
                          >
                            <span className="truncate font-medium">{service.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-2" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Products Accordion */}
              <div className="py-3.5">
                <button
                  type="button"
                  onClick={() => setIsMobileProductsOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between font-headline text-2xl font-normal py-1 transition-colors cursor-pointer text-left ${
                    isProductsActive ? 'text-[#C84826] font-medium' : 'text-[#1A1A1A] hover:text-[#C84826]'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isMobileProductsOpen ? 'rotate-180 text-[#C84826]' : 'text-neutral-400'
                    }`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <div className="pt-3 pb-2 space-y-3">
                    <div className="space-y-1">
                      {PRODUCTS_DATA.map((product) => {
                        return (
                          <a
                            key={product.id}
                            href="/products"
                            onClick={(e) => handleNavClick('/products', e)}
                            className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-neutral-700 hover:text-[#1A1A1A] active:bg-black/[0.04] transition-colors cursor-pointer"
                          >
                            <div className="flex flex-col">
                              <span className="font-medium text-xs text-[#1A1A1A]">{product.name}</span>
                              <span className="text-[11px] text-neutral-500">{product.badge}</span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-2" />
                          </a>
                        );
                      })}
                      <a
                        href="/products"
                        onClick={(e) => handleNavClick('/products', e)}
                        className="flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-medium text-[#C84826] bg-[#C84826]/5 transition-colors cursor-pointer mt-2"
                      >
                        <span>View All Platforms</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Blog */}
              <a
                href="/blog"
                onClick={(e) => handleNavClick('/blog', e)}
                className={`font-headline text-2xl font-normal py-3.5 flex items-center justify-between transition-colors cursor-pointer ${
                  currentPath.startsWith('/blog') ? 'text-[#C84826] font-medium' : 'text-[#1A1A1A] hover:text-[#C84826]'
                }`}
              >
                <span>Blog</span>
                {currentPath.startsWith('/blog') && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C84826]" />
                )}
              </a>

              {/* Testimonials */}
              <a
                href="/testimonials"
                onClick={(e) => handleNavClick('/testimonials', e)}
                className={`font-headline text-2xl font-normal py-3.5 flex items-center justify-between transition-colors cursor-pointer ${
                  currentPath === '/testimonials' ? 'text-[#C84826] font-medium' : 'text-[#1A1A1A] hover:text-[#C84826]'
                }`}
              >
                <span>Testimonials</span>
                {currentPath === '/testimonials' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C84826]" />
                )}
              </a>
            </div>

            {/* Bottom Actions & Contacts */}
            <div className="pt-6 border-t border-black/[0.08] space-y-4 pb-8">
              <a
                href="/contact"
                onClick={(e) => handleNavClick('/contact', e)}
                className="w-full flex items-center justify-center font-body font-medium text-sm text-white bg-[#C84826] hover:bg-[#B33E1D] active:bg-[#9E3416] py-3.5 rounded-full transition-colors shadow-sm cursor-pointer"
              >
                Book a strategy call
              </a>

              <div className="flex items-center justify-between text-xs font-body text-neutral-500 pt-1">
                <a
                  href="mailto:contact@glowlabtech.com"
                  className="hover:text-[#C84826] transition-colors py-1"
                >
                  contact@glowlabtech.com
                </a>
                <span className="py-1">glowlabtech.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
