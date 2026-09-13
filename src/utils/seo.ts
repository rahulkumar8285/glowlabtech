/**
 * SEO management utility for SPA page updates.
 * Injects and updates standard meta tags, OpenGraph, Twitter Cards, Canonical links,
 * and JSON-LD structured data in the document head.
 */

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function updatePageSEO({
  title,
  description,
  keywords,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  canonicalUrl,
  ogType = 'website',
  ogImage = '/logo.png',
  publishedTime,
  modifiedTime,
  authorName,
  jsonLd,
}: SEOProps): () => void {
  if (typeof document === 'undefined') {
    return () => {};
  }

  // 1. Update Title
  const previousTitle = document.title;
  document.title = title;

  // Helper to set or create meta tag
  const setMeta = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
    return el;
  };

  // Helper to set or create link tag
  const setLink = (rel: string, href: string) => {
    let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
    return el;
  };

  // 2. Standard Meta
  setMeta('description', description);
  if (keywords) {
    setMeta('keywords', keywords);
  }
  if (robots) {
    setMeta('robots', robots);
  }

  // 3. OpenGraph Tags
  setMeta('og:site_name', 'GlowLab Tech', true);
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:type', ogType, true);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : (canonicalUrl || 'https://glowlabtech.com/');
  setMeta('og:url', currentUrl, true);
  
  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : typeof window !== 'undefined'
      ? `${window.location.origin}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`
      : `https://glowlabtech.com${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  setMeta('og:image', absoluteOgImage, true);

  if (ogType === 'article') {
    if (publishedTime) setMeta('article:published_time', publishedTime, true);
    if (modifiedTime) setMeta('article:modified_time', modifiedTime, true);
    if (authorName) setMeta('article:author', authorName, true);
  }

  // 4. Twitter Card Tags
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', absoluteOgImage);

  // 5. Canonical Link
  if (canonicalUrl || typeof window !== 'undefined') {
    const canonicalHref = canonicalUrl || window.location.origin + window.location.pathname;
    setLink('canonical', canonicalHref);
  }

  // 6. JSON-LD Structured Data
  let scriptEl = document.getElementById('seo-json-ld') as HTMLScriptElement | null;
  if (jsonLd) {
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'seo-json-ld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(jsonLd);
  } else if (scriptEl) {
    scriptEl.remove();
  }

  // Cleanup function when component unmounts
  return () => {
    document.title = previousTitle;
  };
}
