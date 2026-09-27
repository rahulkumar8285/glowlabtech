import type { MouseEvent } from 'react';
import { getRecentBlogPosts, BlogPost } from '../data/blogData';

interface BlogSectionProps {
  onNavigate?: (path: string) => void;
}

export default function BlogSection({ onNavigate }: BlogSectionProps) {
  const recentPosts = getRecentBlogPosts(3);

  if (recentPosts.length === 0) {
    return null;
  }

  const handlePostClick = (slug: string, e: MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(`/blog/${slug}`);
    }
  };

  const handleViewAllClick = (e: MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/blog');
    }
  };

  return (
    <section
      id="latest-blogs-section"
      className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-14 sm:py-20 md:py-24 border-t border-black/[0.06] scroll-mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-4 mb-8 sm:mb-14">
          <div>
            <h2
              id="blogs-heading"
              className="font-headline font-normal sm:font-medium text-2xl sm:text-4xl md:text-[44px] leading-tight tracking-[-0.02em] text-[#1A1A1A]"
            >
              Latest thinking
            </h2>
            <p className="font-body text-neutral-500 text-xs sm:text-base mt-1.5 sm:mt-2 max-w-xl">
              Field notes, architecture breakdowns, and tactical playbooks from our engineering team.
            </p>
          </div>

          <a
            href="/blog"
            onClick={handleViewAllClick}
            id="view-all-blogs-link"
            className="group relative inline-flex items-center font-body text-sm sm:text-[15px] font-medium text-[#1A1A1A] hover:text-[#C84826] transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span className="relative py-1">
              View all articles →
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#C84826] transition-all duration-300 ease-out group-hover:w-full" />
            </span>
          </a>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {recentPosts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-white border border-black/[0.06] hover:border-black/15 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Blog Card Thumbnail */}
                {post.coverImage && (
                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => handlePostClick(post.slug, e)}
                    className="block mb-4 overflow-hidden rounded-lg aspect-[16/9] bg-black/[0.02] border border-black/5 cursor-pointer"
                    aria-label={post.title}
                  >
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </a>
                )}

                {/* Meta info: Category & Reading Time */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-body text-neutral-500">
                  <span className="font-semibold text-[#C84826] bg-[#C84826]/10 px-2.5 py-0.5 rounded-full text-[11px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <time dateTime={post.isoDate}>{post.publishedAt}</time>
                    <span className="text-neutral-300">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-headline font-medium text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#C84826] transition-colors leading-snug tracking-tight mb-2.5">
                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => handlePostClick(post.slug, e)}
                    className="focus:outline-none"
                  >
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="font-body text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-5">
                  {post.excerpt}
                </p>
              </div>

              {/* Read Action (without author name) */}
              <div className="pt-3.5 border-t border-black/[0.05] flex items-center justify-end text-xs font-body">
                <a
                  href={`/blog/${post.slug}`}
                  onClick={(e) => handlePostClick(post.slug, e)}
                  className="font-medium text-[#C84826] group-hover:translate-x-0.5 transition-transform duration-200 inline-flex items-center gap-1"
                  aria-label={`Read article: ${post.title}`}
                >
                  <span>Read article</span>
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
