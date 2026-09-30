import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICES_DATA, PRODUCTS_DATA } from '../src/data/offeringsData.ts';
import { BLOG_POSTS } from '../src/data/blogData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
  h1: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  changefreq?: string;
  priority?: string;
  images?: Array<{ loc: string; title: string; caption?: string }>;
}

// 1. Core static pages
const CORE_PAGES: RouteMeta[] = [
  {
    path: '/',
    title: 'GrowthTechSys — AI Systems, Workforce Telematics & Digital Engineering',
    description:
      'GrowthTechSys engineers custom AI software, automated workflow pipelines, and enterprise field workforce tracking telematics that scale revenue.',
    canonicalUrl: 'https://growthtechsys.com/',
    h1: 'We engineer systems that compound your advantage.',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
    keywords:
      'GrowthTechSys, AI software agency, digital product development, field sales automation, GPS employee tracking app, custom software engineering, B2B workflow automation',
    changefreq: 'weekly',
    priority: '1.0',
    images: [
      {
        loc: 'https://growthtechsys.com/images/homepage-hero-composite.webp',
        title: 'GrowthTechSys AI Systems & Revenue Architecture',
        caption: 'AI automation, video creative, and outreach pipelines converging into customer acquisition.',
      },
    ],
  },
  {
    path: '/about',
    title: 'About GrowthTechSys — Software, AI & Automation Agency',
    description:
      'We run an engineering agency with deep knowledge and hands-on experience, delivering high-quality software across multiple industries using a versatile multi-tool ecosystem.',
    canonicalUrl: 'https://growthtechsys.com/about',
    h1: 'Deep Engineering Experience / Across Diverse Industries & Modern Tools',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
    changefreq: 'monthly',
    priority: '0.8',
    jsonLd: {
      '@type': 'AboutPage',
      name: 'About GrowthTechSys',
      description: 'Corporate background, engineering leadership, and multi-tool technical ecosystem.',
      url: 'https://growthtechsys.com/about',
    },
  },
  {
    path: '/testimonials',
    title: 'Client Outcomes & Testimonials | GrowthTechSys',
    description:
      'Explore verified outcomes, architectural case studies, and enterprise reviews from founders and operators building with GrowthTechSys.',
    canonicalUrl: 'https://growthtechsys.com/testimonials',
    h1: 'Client Outcomes / & Verified Systems Impact',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
    changefreq: 'monthly',
    priority: '0.8',
    jsonLd: {
      '@type': 'ItemPage',
      name: 'Client Outcomes & Testimonials',
      url: 'https://growthtechsys.com/testimonials',
    },
  },
  {
    path: '/contact',
    title: 'Contact Us | Start a Project with GrowthTechSys',
    description:
      'Connect directly with our engineering team at World Tech Park, Gurugram. Call +91 89297 21558 or submit a project brief for custom AI software and workforce automation.',
    canonicalUrl: 'https://growthtechsys.com/contact',
    h1: "Let's build / something enduring.",
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
    changefreq: 'monthly',
    priority: '0.85',
    jsonLd: {
      '@type': 'ContactPage',
      name: 'Contact GrowthTechSys Engineering',
      url: 'https://growthtechsys.com/contact',
      telephone: '+91-89297-21558',
      email: 'contact@growthtechsys.com',
    },
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | GrowthTechSys',
    description:
      'GrowthTechSys privacy commitments, data collection policies, and telemetry privacy safeguards.',
    canonicalUrl: 'https://growthtechsys.com/privacy',
    h1: 'Privacy Policy',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    path: '/terms',
    title: 'Terms of Service | GrowthTechSys',
    description:
      'Terms of Service, service agreements, and commercial licensing policies for GrowthTechSys software and engineering services.',
    canonicalUrl: 'https://growthtechsys.com/terms',
    h1: 'Terms of Service',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    path: '/security',
    title: 'Security & Compliance Architecture | GrowthTechSys',
    description:
      'Enterprise-grade security controls, SOC2-aligned telemetry protections, and cryptographic infrastructure details.',
    canonicalUrl: 'https://growthtechsys.com/security',
    h1: 'Security Architecture',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    path: '/blog',
    title: 'Field Notes, Architecture Playbooks & Engineering Essays | GrowthTechSys',
    description:
      'Deep dives on operational AI, cold outreach infrastructure, high-velocity video production, and real revenue leverage.',
    canonicalUrl: 'https://growthtechsys.com/blog',
    h1: 'Field notes, / essays & playbooks.',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
    changefreq: 'weekly',
    priority: '0.8',
    jsonLd: {
      '@type': 'CollectionPage',
      name: 'Field Notes & Engineering Playbooks',
      url: 'https://growthtechsys.com/blog',
    },
  },
];

// Helper to escape special HTML characters in text
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function getAllRoutes(): RouteMeta[] {
  const routes: RouteMeta[] = [...CORE_PAGES];

  // 2. Services
  for (const s of SERVICES_DATA) {
    const serviceSchema = {
      '@type': 'Service',
      name: s.name,
      description: s.description,
      provider: {
        '@type': 'Organization',
        name: 'GrowthTechSys',
        url: 'https://growthtechsys.com',
      },
      serviceType: s.shortTitle,
      areaServed: 'Worldwide',
      url: `https://growthtechsys.com/services/${s.slug}`,
    };

    const breadcrumbSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://growthtechsys.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://growthtechsys.com/#services' },
        { '@type': 'ListItem', position: 3, name: s.name, item: `https://growthtechsys.com/services/${s.slug}` },
      ],
    };

    const serviceHeroImage = s.slug === 'ai-automation'
      ? 'https://growthtechsys.com/images/services/ai-automation-hero.png'
      : s.slug === 'ai-video-creation'
      ? 'https://growthtechsys.com/images/services/ai-video-hero.png'
      : s.slug === 'lead-generation'
      ? 'https://growthtechsys.com/images/services/lead-generation-hero.png'
      : s.slug === 'cold-email-outreach'
      ? 'https://growthtechsys.com/images/services/cold-email-hero.png'
      : 'https://growthtechsys.com/images/homepage-share.png';

    routes.push({
      path: `/services/${s.slug}`,
      title: `${s.name} | GrowthTechSys`,
      description: s.summary || s.tagline || s.description,
      canonicalUrl: `https://growthtechsys.com/services/${s.slug}`,
      h1: s.name,
      ogType: 'website',
      ogImage: serviceHeroImage,
      changefreq: 'monthly',
      priority: '0.9',
      jsonLd: [serviceSchema, breadcrumbSchema],
      images: [
        {
          loc: serviceHeroImage,
          title: s.name,
          caption: s.tagline,
        },
      ],
    });
  }

  // 3. Products
  for (const p of PRODUCTS_DATA) {
    const isCrm = p.slug === 'growthflow-crm' || p.slug === 'omniflow-crm';
    const isScraper = p.slug === 'data-scraper-service';
    const productHeroImage = isCrm
      ? 'https://growthtechsys.com/images/products/growthflow-crm-hero.webp'
      : isScraper
      ? 'https://growthtechsys.com/images/products/data-scraper-hero.png'
      : 'https://growthtechsys.com/images/products/field-sales-tracking-dashboard-hero.webp';

    const softwareSchema = {
      '@type': 'SoftwareApplication',
      name: `${p.name} | GrowthTechSys`,
      operatingSystem: 'Android, iOS, Cloud Web',
      applicationCategory: 'BusinessApplication',
      url: `https://growthtechsys.com/product/${p.slug}`,
      description: p.description,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '148',
        bestRating: '5',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        description: '14-Day Free Pilot & Team Onboarding',
      },
      creator: {
        '@type': 'Organization',
        name: 'GrowthTechSys',
        url: 'https://growthtechsys.com',
      },
    };

    const breadcrumbSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://growthtechsys.com/' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://growthtechsys.com/#products' },
        { '@type': 'ListItem', position: 3, name: p.name, item: `https://growthtechsys.com/product/${p.slug}` },
      ],
    };

    const faqSchema =
      p.faqs && p.faqs.length > 0
        ? {
            '@type': 'FAQPage',
            mainEntity: p.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }
        : null;

    const jsonLdGraph = faqSchema
      ? [softwareSchema, breadcrumbSchema, faqSchema]
      : [softwareSchema, breadcrumbSchema];

    routes.push({
      path: `/product/${p.slug}`,
      title: `${p.name} | GrowthTechSys`,
      description: p.tagline || p.description,
      canonicalUrl: `https://growthtechsys.com/product/${p.slug}`,
      h1: p.name,
      ogType: 'website',
      ogImage: productHeroImage,
      changefreq: 'weekly',
      priority: '0.95',
      jsonLd: jsonLdGraph,
      images: [
        {
          loc: productHeroImage,
          title: p.name,
          caption: p.tagline,
        },
      ],
    });
  }

  // 4. All Blog Posts (Existing and Future)
  for (const b of BLOG_POSTS) {
    const articleOgImage = b.coverImage
      ? `https://growthtechsys.com${b.coverImage}`
      : 'https://growthtechsys.com/images/homepage-share.png';

    const articleSchema = {
      '@type': 'Article',
      headline: b.title,
      description: b.metaDescription || b.excerpt,
      url: `https://growthtechsys.com/blog/${b.slug}`,
      datePublished: b.isoDate,
      dateModified: b.isoDate,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://growthtechsys.com/blog/${b.slug}`,
      },
      image: articleOgImage,
      author: b.author
        ? {
            '@type': 'Person',
            name: b.author.name,
            jobTitle: b.author.role,
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
        logo: {
          '@type': 'ImageObject',
          url: 'https://growthtechsys.com/logo.png',
        },
      },
    };

    const breadcrumbSchema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://growthtechsys.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://growthtechsys.com/blog' },
        { '@type': 'ListItem', position: 3, name: b.title, item: `https://growthtechsys.com/blog/${b.slug}` },
      ],
    };

    const faqSchema =
      b.faqs && b.faqs.length > 0
        ? {
            '@type': 'FAQPage',
            mainEntity: b.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }
        : null;

    const jsonLdGraph = faqSchema
      ? [articleSchema, breadcrumbSchema, faqSchema]
      : [articleSchema, breadcrumbSchema];

    routes.push({
      path: `/blog/${b.slug}`,
      title: b.metaTitle
        ? b.metaTitle.includes('GrowthTechSys')
          ? b.metaTitle
          : `${b.metaTitle} | GrowthTechSys`
        : `${b.title} | GrowthTechSys`,
      description: b.metaDescription || b.excerpt,
      canonicalUrl: `https://growthtechsys.com/blog/${b.slug}`,
      h1: b.title,
      ogType: 'article',
      ogImage: articleOgImage,
      keywords: b.tags ? b.tags.join(', ') : undefined,
      changefreq: 'monthly',
      priority: '0.85',
      jsonLd: jsonLdGraph,
      images: [
        {
          loc: articleOgImage,
          title: b.title,
          caption: b.metaDescription || b.excerpt,
        },
      ],
    });
  }

  return routes;
}

export function renderPageHtml(masterHtml: string, route: RouteMeta): string {
  let html = masterHtml;

  // 1. Replace <title>
  const escapedTitle = escapeHtml(route.title);
  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapedTitle}</title>`);

  // 2. Replace <meta name="description">
  const escapedDesc = escapeHtml(route.description);
  if (/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i.test(html)) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapedDesc}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <meta name="description" content="${escapedDesc}" />\n</head>`
    );
  }

  // 3. Replace <link rel="canonical">
  if (/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonicalUrl}" />`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${route.canonicalUrl}" />\n</head>`
    );
  }

  // 4. Replace or update OpenGraph Tags
  const ogTitle = escapedTitle;
  const ogDesc = escapedDesc;
  const ogUrl = route.canonicalUrl;
  const ogImage = route.ogImage || 'https://growthtechsys.com/images/homepage-share.png';
  const ogType = route.ogType || 'website';

  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${ogTitle}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${ogDesc}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${ogUrl}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${ogImage}" />`);
  html = html.replace(/<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:type" content="${ogType}" />`);

  // 5. Replace Twitter Card Tags
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${ogTitle}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${ogDesc}" />`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:image" content="${ogImage}" />`);

  // 6. Keywords if provided
  if (route.keywords) {
    const escapedKeywords = escapeHtml(route.keywords);
    if (/<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i.test(html)) {
      html = html.replace(
        /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="keywords" content="${escapedKeywords}" />`
      );
    }
  }

  // 7. Inject Route-Specific JSON-LD Schema (Article, Service, SoftwareApplication, FAQPage, BreadcrumbList)
  if (route.jsonLd) {
    const schemaContent = JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@graph': Array.isArray(route.jsonLd) ? route.jsonLd : [route.jsonLd],
      },
      null,
      2
    );
    const schemaTag = `\n    <!-- Route-Specific Structured Data (SSG Injected) -->\n    <script type="application/ld+json">\n${schemaContent}\n    </script>\n`;
    html = html.replace('</head>', `${schemaTag}</head>`);
  }

  // 8. Inject Semantic Pre-rendered Content Shell + Crawlable Noscript inside <div id="root">
  const escapedH1 = escapeHtml(route.h1);
  const semanticShell = `
      <!-- Crawlable Semantic Header for Search Spiders & Text Indexers -->
      <header class="sr-only" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;" aria-hidden="false">
        <h1>${escapedH1}</h1>
        <p>${escapedDesc}</p>
      </header>
      <noscript>
        <div style="max-width:880px;margin:2rem auto;padding:1.5rem;font-family:system-ui,sans-serif;line-height:1.6;color:#111;">
          <h1>${escapedH1}</h1>
          <p>${escapedDesc}</p>
          <hr style="margin:1.5rem 0;border:0;border-top:1px solid #e5e7eb;" />
          <nav aria-label="Site Navigation">
            <p><strong>Explore GrowthTechSys:</strong></p>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/testimonials">Client Outcomes</a></li>
              <li><a href="/contact">Contact Engineering</a></li>
              <li><a href="/blog">Field Notes &amp; Playbooks</a></li>
            </ul>
          </nav>
        </div>
      </noscript>`;

  html = html.replace('<div id="root">', `<div id="root">${semanticShell}`);

  return html;
}

// Generate canonical sitemap.xml with image tags
export function generateSitemapXml(routes: RouteMeta[]): string {
  const today = new Date().toISOString().split('T')[0];

  const xmlEntries = routes.map((r) => {
    let imagesXml = '';
    if (r.images && r.images.length > 0) {
      imagesXml = r.images
        .map(
          (img) => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeHtml(img.title)}</image:title>${img.caption ? `\n      <image:caption>${escapeHtml(img.caption)}</image:caption>` : ''}
    </image:image>`
        )
        .join('');
    }

    return `  <url>
    <loc>${r.canonicalUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq || 'monthly'}</changefreq>
    <priority>${r.priority || '0.8'}</priority>${imagesXml}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">

${xmlEntries.join('\n\n')}

</urlset>
`;
}

export function prerenderAll(): void {
  const masterIndexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(masterIndexPath)) {
    console.error(`❌ Error: ${masterIndexPath} does not exist. Run "vite build" first.`);
    process.exit(1);
  }

  const masterHtml = fs.readFileSync(masterIndexPath, 'utf-8');
  const routes = getAllRoutes();

  console.log(`\n======================================================`);
  console.log(`🚀 Starting Static Pre-Rendering (SSG) for ${routes.length} routes...`);
  console.log(`======================================================\n`);

  let count = 0;
  for (const route of routes) {
    const pageHtml = renderPageHtml(masterHtml, route);

    if (route.path === '/') {
      // Overwrite dist/index.html with enriched homepage metadata
      fs.writeFileSync(masterIndexPath, pageHtml, 'utf-8');
      console.log(`✓ [200] / -> dist/index.html (with JSON-LD & meta)`);
    } else {
      // Create subfolder, e.g. dist/services/software-development/index.html
      const subDir = path.join(distDir, route.path.replace(/^\//, ''));
      fs.mkdirSync(subDir, { recursive: true });
      const targetFilePath = path.join(subDir, 'index.html');
      fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');
      console.log(`✓ [200] ${route.path} -> dist${route.path}/index.html (with JSON-LD & meta)`);
    }
    count++;
  }

  // Generate and sync updated sitemap.xml to dist and public
  console.log(`\n🗺️  Synchronizing sitemap.xml for ${routes.length} routes...`);
  const sitemapXml = generateSitemapXml(routes);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`✓ Synced sitemap.xml to dist/sitemap.xml & public/sitemap.xml`);

  console.log(`\n✨ Successfully pre-rendered ${count} SEO-optimized HTML pages into dist/\n`);
}

// Execute if run directly from CLI
if (process.argv[1] && process.argv[1].endsWith('prerender.ts')) {
  prerenderAll();
}
