import { useEffect } from 'react';
import { PRODUCTS_DATA } from '../data/offeringsData';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

export default function ProductsPage({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
} = {}) {
  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'Products & Platforms | GlowLab Tech',
      description:
        'Turnkey digital products and software engines engineered to solve specific automation, outbound, and creative bottlenecks without lengthy development cycles.',
      canonicalUrl: 'https://glowlabtech.com/products',
      ogType: 'website',
    });
    return cleanup;
  }, []);
  return (
    <div id="products-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="products-header"
        title="Pre-built AI platforms / ready to deploy."
        subtitle="Turnkey software engines engineered to solve specific automation, outbound, and creative bottlenecks without lengthy development cycles."
      />

      {/* PRODUCTS EMPTY / SHOWCASE */}
      <section
        id="products-showcase-section"
        className="w-full py-16 sm:py-20 md:py-24 border-b border-black/10"
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-center">
          {PRODUCTS_DATA.length === 0 ? (
            <div className="max-w-xl mx-auto py-10 sm:py-16 px-5 sm:px-10 border border-dashed border-black/15 rounded-[6px] bg-black/[0.01]">
              <h3 className="font-headline font-medium text-xl sm:text-3xl text-[#1A1A1A] mb-3">
                No products currently listed
              </h3>
              <p className="font-body text-xs sm:text-base text-neutral-500 leading-relaxed mb-8 max-w-md mx-auto">
                Our proprietary software platforms and AI engines are currently under development. In the meantime, explore our bespoke services or get in touch for custom builds.
              </p>
              <a
                href="/contact"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('/contact');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center font-body font-medium text-xs sm:text-sm text-white bg-[#C84826] hover:bg-[#B33E1D] px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer select-none shadow-sm"
              >
                Inquire / Book a call →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 text-left">
              {PRODUCTS_DATA.map((product) => (
                <div
                  key={product.id}
                  id={product.slug}
                  className="border border-black/10 p-5 sm:p-7 md:p-9 bg-[#FAF9F6] rounded-[6px] flex flex-col justify-between hover:border-black/30 transition-colors duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-body text-xs uppercase tracking-[0.1em] text-[#C84826] font-semibold select-none">
                        {product.badge}
                      </span>
                    </div>

                    <h3 className="font-headline font-medium text-2xl sm:text-3xl text-[#1A1A1A] leading-tight mb-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm font-medium text-neutral-600 mb-4">
                      {product.tagline}
                    </p>
                    <p className="font-body text-sm text-neutral-500 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <div className="border-t border-black/[0.06] pt-4 mb-6">
                      <span className="font-body text-xs uppercase tracking-wider text-neutral-400 block mb-2.5 font-medium">
                        Core Capabilities
                      </span>
                      <ul className="space-y-2 font-body text-xs sm:text-sm text-[#1A1A1A]">
                        {product.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#C84826] font-medium select-none">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-black/[0.06] pt-3 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {product.specs.map((spec, idx) => (
                          <span
                            key={idx}
                            className="font-body text-xs text-neutral-500 bg-black/[0.04] px-2.5 py-1 rounded-[3px]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-5 mt-4 flex items-center justify-between">
                    <span className="font-body text-xs text-neutral-500 max-w-[65%]">
                      {product.outcome}
                    </span>
                    <a
                      href="/contact"
                      onClick={(e) => {
                        if (onNavigate) {
                          e.preventDefault();
                          onNavigate('/contact');
                        }
                      }}
                      className="inline-flex items-center justify-center font-body font-medium text-xs text-white bg-[#C84826] hover:bg-[#B33E1D] px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer select-none shrink-0"
                    >
                      Inquire access →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
