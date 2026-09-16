import { useState, useEffect, type MouseEvent, type ReactNode } from 'react';
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
  const post = getBlogPostBySlug(slug) || (BLOG_POSTS.length > 0 ? BLOG_POSTS[0] : undefined);

  // Dynamic SEO setup for Article
  useEffect(() => {
    if (!post) {
      const cleanup = updatePageSEO({
        title: 'Article Not Found | GrowthTechSys',
        description: 'The requested article is currently being updated or is in production.',
        canonicalUrl: 'https://growthtechsys.com/blog',
        ogType: 'website',
      });
      return cleanup;
    }

    const cleanup = updatePageSEO({
      title: post.metaTitle || `${post.title} | GrowthTechSys`,
      description: post.metaDescription,
      keywords: post.tags ? post.tags.join(', ') : undefined,
      canonicalUrl: `https://growthtechsys.com/blog/${post.slug}`,
      ogType: 'article',
      publishedTime: post.isoDate,
      authorName: post.author?.name || 'GrowthTechSys',
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
        author: post.author
          ? {
              '@type': 'Person',
              name: post.author.name,
              jobTitle: post.author.role,
            }
          : {
              '@type': 'Organization',
              name: 'GrowthTechSys',
              url: 'https://growthtechsys.com',
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

  const formatInlineText = (text: string) => {
    const parts: (string | ReactNode)[] = [];
    const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith('[') && token.includes('](')) {
        const linkText = token.slice(1, token.indexOf(']('));
        const linkUrl = token.slice(token.indexOf('](') + 2, -1);
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            onClick={(e) => handleNavigate(linkUrl, e)}
            className="text-[#C84826] font-medium hover:underline underline-offset-2 cursor-pointer"
          >
            {linkText}
          </a>
        );
      } else if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-semibold text-[#1A1A1A]">
            {token.slice(2, -2)}
          </strong>
        );
      }
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  if (!post) {
    return (
      <div className="w-full min-h-[70vh] bg-[#FAF9F6] text-[#1A1A1A] pt-32 pb-20 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-12 h-12 rounded-full bg-[#C84826]/10 text-[#C84826] flex items-center justify-center mb-5 font-headline font-medium text-xl">
          ✦
        </div>
        <h1 className="font-headline font-medium text-3xl sm:text-4xl text-[#1A1A1A] mb-3">
          Article In Production
        </h1>
        <p className="font-body text-base text-neutral-600 max-w-md mb-8 leading-relaxed">
          This article is currently being drafted or updated by our engineering team. Please explore our services or return to the blog directory.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="/blog"
            onClick={(e) => handleNavigate('/blog', e)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body text-sm font-medium text-white bg-[#C84826] hover:bg-[#B33E1D] px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All playbooks</span>
          </a>
          <a
            href="/contact"
            onClick={(e) => handleNavigate('/contact', e)}
            className="w-full sm:w-auto inline-flex items-center justify-center font-body text-sm font-medium text-neutral-600 hover:text-[#1A1A1A] px-5 py-3 transition-colors cursor-pointer"
          >
            Contact us →
          </a>
        </div>
      </div>
    );
  }

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
          {/* Metadata row with Share Buttons on the right */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-body text-neutral-500 mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-[#C84826] bg-[#C84826]/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time dateTime={post.isoDate}>{post.publishedAt}</time>
              <span className="text-neutral-300">•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Social Share Buttons (Right Side) */}
            <div className="flex items-center gap-2 text-neutral-500">
              <span className="font-body text-xs text-neutral-400 mr-1">Share:</span>
              <button
                type="button"
                onClick={handleCopyLink}
                aria-label="Copy article link"
                className="p-1.5 sm:p-2 rounded-full border border-black/10 hover:border-black/30 hover:text-[#1A1A1A] transition-colors relative cursor-pointer"
                title="Copy link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
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
                className="p-1.5 sm:p-2 rounded-full border border-black/10 hover:border-black/30 hover:text-[#1A1A1A] transition-colors"
                title="Share on X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>

              <a
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="p-1.5 sm:p-2 rounded-full border border-black/10 hover:border-black/30 hover:text-[#1A1A1A] transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="font-headline font-normal sm:font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#1A1A1A] mb-8">
            {post.title}
          </h1>

          {/* Lead excerpt */}
          <p className="font-body text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
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
                    {formatInlineText(para)}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="my-6 space-y-3 pl-4 border-l-2 border-black/10">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed pl-2"
                      >
                        {formatInlineText(bullet)}
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="my-8 overflow-x-auto border border-black/10 rounded-xl shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm font-body">
                      <thead className="bg-[#F5F3EF] border-b border-black/10">
                        <tr>
                          {section.table.headers.map((header, hIdx) => (
                            <th
                              key={hIdx}
                              className="px-4 sm:px-5 py-3.5 font-headline font-semibold text-[#1A1A1A] tracking-tight whitespace-nowrap"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/5 bg-white">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-neutral-50/70 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-4 sm:px-5 py-3.5 leading-relaxed ${
                                  cIdx === 0
                                    ? 'font-medium text-[#1A1A1A] bg-black/[0.01]'
                                    : 'text-neutral-700'
                                }`}
                              >
                                {formatInlineText(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
