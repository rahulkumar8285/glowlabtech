export interface BlogAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface BlogCallout {
  text: string;
  attribution?: string;
}

export interface BlogSectionBlock {
  heading?: string;
  subheading?: string;
  content: string[];
  bullets?: string[];
  callout?: BlogCallout;
  codeBlock?: {
    language: string;
    code: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  isoDate: string;
  readTime: string;
  author: BlogAuthor;
  tags: string[];
  metaDescription: string;
  featured?: boolean;
  keyTakeaways: string[];
  sections: BlogSectionBlock[];
}

// Empty blog posts repository - ready for live publication
export const BLOG_POSTS: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRecentBlogPosts(count = 3): BlogPost[] {
  return BLOG_POSTS.slice(0, count);
}

export function getAllBlogCategories(): string[] {
  return ['All', 'AI Automation', 'Software Engineering', 'Cloud Infrastructure', 'Workforce Tech'];
}
