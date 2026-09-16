import { useState, useEffect, type MouseEvent } from 'react';
import { Share2, Check, ArrowLeft, ArrowRight, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, BLOG_POSTS, BlogPost } from '../data/blogData';
import { updatePageSEO } from '../utils/seo';
import FinalCTASection from './FinalCTASection';

interface BlogDetailPageProps {
  slug: string;
  onNavigate?: (path: string) => void;
}

export default function BlogDetailPage({ slug, onNavigate }: BlogDetailPageProps) {
  const [copied, setCopied] = useState(false);
  const post = getBlogPostBySlug(slug) || BLOG_POSTS[0];

  // Dynamic SEO setup for Article
  useEffect(() => {
    if (!post) return;

    const cleanup = updatePageSEO({
      title: `${post.title} | GrowthTechSys`,
      description: post.metaDescription,
      keywords: post.tags ? post.tags.join(', ') : undefined,
      canonicalUrl: `https://growthtechsys.com/blog/${post.slug}`,
      ogType: 'article',
      publishedTime: post.isoDate,
      authorName: post.author.name,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        url: `https://growthtechsys.com/blog/${post.slug}`,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://growthtechsys.com/blog/${post.slug}`,
        },
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: 'GrowthTechSys',
          url: 'https://growthtechsys.com',
        },
      },
    });

    return cleanup;
  }, [post]);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNavigate = (path: string, e: MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  // Related posts from other articles
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    post.title
  )}&url=${encodeURIComponent(currentUrl)}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <div id={`blog-detail-${post.slug}`} className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* BREADCRUMB & BACK NAVIGATION */}
      <div className="w-full border-b border-black/[0.06] bg-[#FAF9F6] pt-24 pb-4">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 flex items-center justify-between text-xs font-body text-neutral-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 overflow-hidden">
            <a
              href="/"
              onClick={(e) => handleNavigate('/', e)}
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Home
            </a>
            <span className="text-neutral-300">/</span>
            <a
              href="/blog"
              onClick={(e) => handleNavigate('/blog', e)}
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Blog
            </a>
            <span className="text-neutral-300">/</span>
            <span className="text-[#C84826] font-medium truncate">{post.category}</span>
          </nav>

          <a
            href="/blog"
            onClick={(e) => handleNavigate('/blog', e)}
            className="inline-flex items-center gap-1 hover:text-[#C84826] transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All articles</span>
          </a>
        </div>
      </div>

      {/* ARTICLE HEADER */}
      <header className="w-full pt-12 sm:pt-16 pb-10 border-b border-black/[0.06]">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 text-left">
          {/* Metadata pill */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-body text-neutral-500 mb-6">
            <span className="font-semibold text-[#C84826] bg-[#C84826]/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <time dateTime={post.isoDate}>{post.publishedAt}</time>
            <span className="text-neutral-300">•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#1A1A1A] mb-8">
            {post.title}
          </h1>

          {/* Lead excerpt */}
          <p className="font-body text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mb-10">
            {post.excerpt}
          </p>

          {/* Author attribution & Social Sharing */}
          <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border border-black/10"
              />
              <div>
                <p className="font-headline font-medium text-base text-[#1A1A1A] leading-tight">
                  {post.author.name}
                </p>
                <p className="font-body text-xs text-neutral-500 mt-0.5">{post.author.role}</p>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2 text-neutral-500">
              <span className="font-body text-xs text-neutral-400 mr-1">Share:</span>
              <button
                type="button"
                onClick={handleCopyLink}
                aria-label="Copy article link"
                className="p-2 rounded-full border border-black/10 hover:border-black/30 hover:text-[#1A1A1A] transition-colors relative"
                title="Copy link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                {copied && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[10px] px-2 py-0.5 rounded font-body whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>

              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X / Twitter"
                className="p-2 rounded-full border border-black/10 hover:border-black/30 hover:text-[#1A1A1A] transition-colors"
                title="Share on X"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="p-2 rounded-full border border-black/10 hover:border-black/30 hover:text-[#1A1A1A] transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <main className="w-full py-12 sm:py-16">
        <article className="w-full max-w-4xl mx-auto px-6 sm:px-10 text-left">
          {/* KEY TAKEAWAYS CALLOUT BOX */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <aside
              aria-label="Executive takeaways"
              className="bg-white border border-black/10 rounded-xl p-6 sm:p-8 mb-12 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C84826]" />
                <h2 className="font-headline font-semibold text-xs uppercase tracking-wider text-neutral-800">
                  Key Executive Takeaways
                </h2>
              </div>
              <ul className="space-y-2.5">
                {post.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="font-body text-sm text-neutral-700 leading-relaxed flex items-start gap-2.5">
                    <span className="text-[#C84826] font-medium select-none">→</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* SECTIONS */}
          <div className="space-y-12">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-5">
                {section.heading && (
                  <h2 className="font-headline font-medium text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight pt-4">
                    {section.heading}
                  </h2>
                )}

                {section.subheading && (
                  <h3 className="font-headline font-medium text-lg text-neutral-700">
                    {section.subheading}
                  </h3>
                )}

                {section.content.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-body text-base sm:text-[17px] text-neutral-700 leading-[1.8] font-normal"
                  >
                    {para}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="my-6 space-y-3 pl-4 border-l-2 border-black/10">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed pl-2"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <blockquote className="my-8 border-l-2 border-[#C84826] pl-6 py-2 bg-[#C84826]/[0.03] rounded-r-lg">
                    <p className="font-serif-accent italic text-xl sm:text-2xl text-[#1A1A1A] leading-snug mb-2">
                      “{section.callout.text}”
                    </p>
                    {section.callout.attribution && (
                      <cite className="not-italic font-body text-xs text-neutral-500 block">
                        — {section.callout.attribution}
                      </cite>
                    )}
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {/* TAGS FOOTER */}
          <div className="mt-14 pt-8 border-t border-black/[0.08] flex flex-wrap items-center gap-2">
            <span className="font-body text-xs text-neutral-400 mr-2">Filed under:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body text-neutral-600 bg-white border border-black/10 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <aside className="w-full max-w-4xl mx-auto px-6 sm:px-10 mt-16 pt-12 border-t border-black/[0.08] text-left">
            <h2 className="font-headline font-medium text-xl sm:text-2xl text-[#1A1A1A] mb-8">
              Related analysis & playbooks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="group bg-white border border-black/[0.06] hover:border-black/20 p-6 rounded-xl transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2.5 text-xs font-body text-neutral-500">
                      <span className="font-medium text-[#C84826]">{related.category}</span>
                      <span>•</span>
                      <span>{related.readTime}</span>
                    </div>

                    <h3 className="font-headline font-medium text-lg text-[#1A1A1A] group-hover:text-[#C84826] transition-colors leading-snug mb-2">
                      <a
                        href={`/blog/${related.slug}`}
                        onClick={(e) => handleNavigate(`/blog/${related.slug}`, e)}
                      >
                        {related.title}
                      </a>
                    </h3>

                    <p className="font-body text-xs text-neutral-500 line-clamp-2 mb-4">
                      {related.excerpt}
                    </p>
                  </div>

                  <a
                    href={`/blog/${related.slug}`}
                    onClick={(e) => handleNavigate(`/blog/${related.slug}`, e)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#C84826] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </aside>
        )}
      </main>

      {/* BOTTOM CTA */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}
