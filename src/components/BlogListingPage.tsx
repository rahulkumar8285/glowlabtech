import { useState, useMemo, useEffect, type MouseEvent } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getAllBlogCategories, BlogPost } from '../data/blogData';
import { updatePageSEO } from '../utils/seo';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';

interface BlogListingPageProps {
  onNavigate?: (path: string) => void;
}

export default function BlogListingPage({ onNavigate }: BlogListingPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getAllBlogCategories();

  // SEO Update for Blog Listing
  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'Field Notes & Playbooks | GrowthTechSys',
      description:
        'Technical breakdowns, operational case studies, and engineering playbooks on AI automation, software engineering, and B2B growth infrastructure.',
      keywords:
        'AI engineering blog, software architecture playbooks, RAG pipelines, LLM latency benchmarks, cold email deliverability, B2B growth engineering',
      canonicalUrl: 'https://growthtechsys.com/blog',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'GrowthTechSys Insights',
        description:
          'Technical breakdowns, operational case studies, and engineering playbooks on AI automation, software engineering, and B2B growth infrastructure.',
        url: 'https://growthtechsys.com/blog',
        blogPost: BLOG_POSTS.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          url: `https://growthtechsys.com/blog/${post.slug}`,
          datePublished: post.isoDate,
          author: post.author
            ? {
                '@type': 'Person',
                name: post.author.name,
              }
            : {
                '@type': 'Organization',
                name: 'GrowthTechSys',
              },
        })),
      },
    });

    return cleanup;
  }, []);

  const handlePostClick = (slug: string, e: MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(`/blog/${slug}`);
    }
  };

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost =
    selectedCategory === 'All' && searchQuery.trim() === ''
      ? filteredPosts.find((p) => p.featured) || filteredPosts[0]
      : null;

  const standardPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  return (
    <div id="blog-listing-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="blog-header"
        title="Field notes, / essays & playbooks."
        subtitle="Deep dives on operational AI, cold outreach infrastructure, high-velocity video production, and real revenue leverage."
      />

      {/* FILTER & SEARCH BAR (Only when articles exist) */}
      {BLOG_POSTS.length > 0 && (
        <section className="w-full border-b border-black/[0.06] bg-[#FAF9F6] py-6 sm:py-8">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
            {/* Category Pills - horizontal swipe on mobile, wrap on desktop */}
            <div
              id="blog-category-filter"
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap"
              role="tablist"
              aria-label="Filter blog posts by category"
            >
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat)}
                    className={`font-body text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer active:scale-95 ${
                      isSelected
                        ? 'bg-[#1A1A1A] text-[#FAF9F6] font-medium shadow-sm'
                        : 'bg-black/[0.04] text-neutral-600 hover:bg-black/[0.08] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <label htmlFor="blog-search-input" className="sr-only">
                Search articles
              </label>
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="blog-search-input"
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 sm:py-2 bg-black/[0.03] border border-black/10 rounded-full text-base sm:text-sm font-body text-[#1A1A1A] placeholder-neutral-400 focus:outline-none focus:border-[#C84826] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs p-1 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ARTICLES CONTENT SECTION */}
      <section className="w-full py-10 sm:py-16 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          {/* FEATURED POST HERO (Displayed when on All view without search) */}
          {featuredPost && (
            <div className="mb-10 sm:mb-16">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-3 sm:mb-4">
                Featured Analysis
              </span>
              <article className="group relative bg-white border border-black/10 rounded-xl p-6 sm:p-10 hover:border-black/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className={`grid grid-cols-1 ${featuredPost.coverImage ? 'lg:grid-cols-12' : ''} gap-8 items-center`}>
                  <div className={featuredPost.coverImage ? 'lg:col-span-7 flex flex-col justify-between h-full' : 'flex flex-col justify-between h-full'}>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-body text-neutral-500 mb-4">
                        <span className="font-semibold text-[#C84826] bg-[#C84826]/10 px-2.5 py-0.5 rounded-full">
                          {featuredPost.category}
                        </span>
                        <time dateTime={featuredPost.isoDate}>{featuredPost.publishedAt}</time>
                        <span className="text-neutral-300">•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>

                      <h2 className="font-headline font-medium text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] group-hover:text-[#C84826] transition-colors leading-[1.2] tracking-tight mb-4">
                        <a
                          href={`/blog/${featuredPost.slug}`}
                          onClick={(e) => handlePostClick(featuredPost.slug, e)}
                        >
                          {featuredPost.title}
                        </a>
                      </h2>

                      <p className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between gap-4">
                      {featuredPost.author && (
                        <div className="flex items-center gap-3 mr-auto">
                          <img
                            src={featuredPost.author.avatarUrl}
                            alt={featuredPost.author.name}
                            className="w-10 h-10 rounded-full object-cover border border-black/10"
                          />
                          <div>
                            <p className="font-body font-medium text-sm text-[#1A1A1A]">
                              {featuredPost.author.name}
                            </p>
                            <p className="font-body text-xs text-neutral-400">
                              {featuredPost.author.role}
                            </p>
                          </div>
                        </div>
                      )}

                      <a
                        href={`/blog/${featuredPost.slug}`}
                        onClick={(e) => handlePostClick(featuredPost.slug, e)}
                        className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#C84826] group-hover:text-[#B33E1D] transition-colors cursor-pointer"
                      >
                        <span>Read complete playbook</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {featuredPost.coverImage && (
                    <div className="lg:col-span-5 order-first lg:order-last">
                      <a
                        href={`/blog/${featuredPost.slug}`}
                        onClick={(e) => handlePostClick(featuredPost.slug, e)}
                        className="block overflow-hidden rounded-xl border border-black/10 aspect-[16/10] bg-black/[0.02] shadow-xs cursor-pointer"
                      >
                        <img
                          src={featuredPost.coverImage}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </div>
          )}

          {/* STANDARD ARTICLES GRID */}
          {standardPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standardPosts.map((post: BlogPost) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between p-7 rounded-xl bg-white border border-black/[0.06] hover:border-black/15 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                >
                  <div>
                    {post.coverImage && (
                      <a
                        href={`/blog/${post.slug}`}
                        onClick={(e) => handlePostClick(post.slug, e)}
                        className="block mb-5 overflow-hidden rounded-lg aspect-[16/9] bg-black/[0.02] border border-black/5 cursor-pointer"
                      >
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </a>
                    )}
                    <div className="flex items-center gap-1.5 mb-3 text-xs font-body text-neutral-500">
                      <time dateTime={post.isoDate}>{post.publishedAt}</time>
                      <span className="text-neutral-300">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-headline font-medium text-xl text-[#1A1A1A] group-hover:text-[#C84826] transition-colors leading-snug tracking-tight mb-3">
                      <a
                        href={`/blog/${post.slug}`}
                        onClick={(e) => handlePostClick(post.slug, e)}
                      >
                        {post.title}
                      </a>
                    </h3>

                    <p className="font-body text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.05] flex items-center justify-end gap-3 text-xs font-body">
                    {post.author && (
                      <div className="flex items-center gap-2.5 mr-auto">
                        <img
                          src={post.author.avatarUrl}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-black/10"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-medium text-[#1A1A1A] leading-tight">
                            {post.author.name}
                          </p>
                          <p className="text-[11px] text-neutral-400">{post.author.role}</p>
                        </div>
                      </div>
                    )}

                    <a
                      href={`/blog/${post.slug}`}
                      onClick={(e) => handlePostClick(post.slug, e)}
                      className="font-medium text-[#C84826] group-hover:translate-x-0.5 transition-transform duration-200 inline-flex items-center gap-0.5"
                    >
                      <span>Read</span>
                      <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* BLOG REPOSITORY EMPTY STATE (WHEN NO POSTS EXIST AT ALL) */}
          {BLOG_POSTS.length === 0 && (
            <div className="text-center py-16 sm:py-20 bg-white border border-black/[0.06] rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#C84826]/10 text-[#C84826] flex items-center justify-center mx-auto mb-5 font-headline font-medium text-xl">
                ✦
              </div>
              <h3 className="font-headline font-medium text-2xl sm:text-3xl text-[#1A1A1A] mb-3">
                Playbooks &amp; Notes In Production
              </h3>
              <p className="font-body text-sm sm:text-base text-neutral-600 mb-8 leading-relaxed">
                We are actively writing and curating our technical breakdowns, system architecture blueprints, and real-world AI implementation playbooks. New articles will be published shortly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/contact"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/contact');
                    }
                  }}
                  className="w-full sm:w-auto font-body text-sm font-medium text-white bg-[#C84826] hover:bg-[#B33E1D] px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Book a strategy call
                </a>
                <a
                  href="/"
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate('/');
                    }
                  }}
                  className="w-full sm:w-auto font-body text-sm font-medium text-neutral-600 hover:text-[#1A1A1A] px-5 py-3 transition-colors cursor-pointer"
                >
                  Return to home →
                </a>
              </div>
            </div>
          )}

          {/* SEARCH / FILTER EMPTY STATE (ONLY WHEN USER SEARCH/FILTER YIELDS ZERO POSTS) */}
          {filteredPosts.length === 0 && BLOG_POSTS.length > 0 && (
            <div className="text-center py-16 bg-white border border-black/[0.06] rounded-xl p-8">
              <p className="font-headline font-medium text-xl text-[#1A1A1A] mb-2">
                No articles found
              </p>
              <p className="font-body text-sm text-neutral-500 mb-6">
                We couldn't find any articles matching "{searchQuery}" in {selectedCategory}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="font-body text-xs font-medium text-white bg-[#C84826] hover:bg-[#B33E1D] px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
