import type { MouseEvent } from 'react';
import { ArrowUp, ArrowRight, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { SERVICES_DATA } from '../data/offeringsData';
import { BLOG_POSTS } from '../data/blogData';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: string, e: MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#0E0E0D] text-[#FAF9F6] border-t border-white/[0.08] transition-colors"
      aria-label="Site Footer"
    >
      {/* Top Banner / Studio Presence */}
      <div className="w-full border-b border-white/[0.06] py-8 sm:py-12">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          <div>
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="inline-block focus:outline-none"
            >
              <img
                src="/logo-dark.png"
                alt="GlowLab Tech"
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </a>
            <p className="font-body text-xs sm:text-sm text-neutral-400 max-w-lg mt-2.5 leading-relaxed">
              Applied AI engineering &amp; technology agency designing custom software, autonomous pipelines, and digital products that compound revenue.
            </p>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Directory */}
      <div className="w-full py-10 sm:py-16 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-left">
            {/* Column 1: Services */}
            <div>
              <h3 className="font-headline font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-4 sm:mb-5">
                Engineered Services
              </h3>
              <ul className="space-y-1.5 sm:space-y-3 font-body text-sm">
                {SERVICES_DATA.map((service) => (
                  <li key={service.id}>
                    <a
                      href={`/services/${service.slug}`}
                      onClick={(e) => handleLinkClick(`/services/${service.slug}`, e)}
                      className="text-neutral-400 hover:text-[#FAF9F6] py-1 inline-block transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Navigation & Company */}
            <div>
              <h3 className="font-headline font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-4 sm:mb-5">
                Studio
              </h3>
              <ul className="space-y-1.5 sm:space-y-3 font-body text-sm text-neutral-400">
                <li>
                  <a
                    href="/"
                    onClick={(e) => handleLinkClick('/', e)}
                    className="hover:text-[#FAF9F6] py-1 inline-block transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    onClick={(e) => handleLinkClick('/about', e)}
                    className="hover:text-[#FAF9F6] py-1 inline-block transition-colors"
                  >
                    About & Principles
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    onClick={(e) => handleLinkClick('/testimonials', e)}
                    className="hover:text-[#FAF9F6] py-1 inline-block transition-colors"
                  >
                    Client Outcomes & Results
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    onClick={(e) => handleLinkClick('/blog', e)}
                    className="hover:text-[#FAF9F6] py-1 inline-block transition-colors"
                  >
                    Field Notes & Playbooks
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    onClick={(e) => handleLinkClick('/products', e)}
                    className="hover:text-[#FAF9F6] py-1 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Products</span>
                    <span className="text-[10px] bg-white/10 text-neutral-300 px-1.5 py-0.5 rounded font-medium">
                      Upcoming
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={(e) => handleLinkClick('/contact', e)}
                    className="hover:text-[#FAF9F6] py-1 inline-block transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Latest Playbooks (Blog) */}
            <div>
              <h3 className="font-headline font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-4 sm:mb-5">
                Selected Playbooks
              </h3>
              <ul className="space-y-3 sm:space-y-3.5 font-body text-sm">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <li key={post.id}>
                    <a
                      href={`/blog/${post.slug}`}
                      onClick={(e) => handleLinkClick(`/blog/${post.slug}`, e)}
                      className="group block py-1"
                    >
                      <p className="text-neutral-300 group-hover:text-[#C84826] transition-colors line-clamp-2 text-xs sm:text-sm leading-snug">
                        {post.title}
                      </p>
                      <span className="text-[11px] text-neutral-500 mt-1 block">
                        {post.readTime}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Action */}
            <div className="flex flex-col justify-between pt-4 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
              <div>
                <h3 className="font-headline font-semibold text-xs uppercase tracking-wider text-neutral-400 mb-4 sm:mb-5">
                  Direct Inquiries
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-400 mb-3 sm:mb-4 leading-relaxed">
                  Have an architecture challenge or need system throughput? Speak directly with an engineer.
                </p>
                <a
                  href="mailto:contact@glowlabtech.com"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-body text-[#FAF9F6] hover:text-[#C84826] transition-colors mb-5"
                >
                  <Mail className="w-4 h-4 text-[#C84826]" />
                  <span>contact@glowlabtech.com</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="font-body text-xs text-neutral-500 block mb-3">Connect:</span>
                <div className="flex items-center gap-3 text-neutral-400">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] hover:bg-white/10 active:bg-white/15 hover:text-[#FAF9F6] transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] hover:bg-white/10 active:bg-white/15 hover:text-[#FAF9F6] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] hover:bg-white/10 active:bg-white/15 hover:text-[#FAF9F6] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer: Copyright, Legal & Back to Top */}
      <div className="w-full border-t border-white/[0.06] py-6 sm:py-8 bg-[#090908]">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-body text-neutral-500">
          <p>© {currentYear} GLOWLAB TECH. All rights reserved.</p>

          <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
            <div className="flex items-center gap-3 sm:gap-4 text-neutral-400">
              <span className="hover:text-[#FAF9F6] cursor-pointer transition-colors py-1">Privacy</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-[#FAF9F6] cursor-pointer transition-colors py-1">Terms</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-[#FAF9F6] cursor-pointer transition-colors py-1">Security</span>
              <span className="text-neutral-700">•</span>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new Event('open-cookie-preferences'));
                  }
                }}
                className="hover:text-[#FAF9F6] cursor-pointer transition-colors py-1 text-xs"
              >
                Cookies
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-[#C84826] transition-colors cursor-pointer py-1 px-2 rounded active:bg-white/5"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
