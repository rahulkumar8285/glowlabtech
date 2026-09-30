import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICES_DATA, PRODUCTS_DATA } from '../src/data/offeringsData.ts';
import { BLOG_POSTS } from '../src/data/blogData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
  h1: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
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
  },
  {
    path: '/about',
    title: 'About GrowthTechSys — Software, AI & Automation Agency',
    description:
      'We run an engineering agency with deep knowledge and hands-on experience, delivering high-quality software across multiple industries using a versatile multi-tool ecosystem.',
    canonicalUrl: 'https://growthtechsys.com/about',
    h1: 'Deep Engineering Experience / Across Diverse Industries & Modern Tools',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
  },
  {
    path: '/testimonials',
    title: 'Client Outcomes & Testimonials | GrowthTechSys',
    description:
      'Explore verified outcomes, architectural case studies, and enterprise reviews from founders and operators building with GrowthTechSys.',
    canonicalUrl: 'https://growthtechsys.com/testimonials',
    h1: 'Client Outcomes / & Verified Systems Impact',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
  },
  {
    path: '/contact',
    title: 'Contact Us | Start a Project with GrowthTechSys',
    description:
      'Connect directly with our engineering team at World Tech Park, Gurugram. Call +91 89297 21558 or submit a project brief for custom AI software and workforce automation.',
    canonicalUrl: 'https://growthtechsys.com/contact',
    h1: "Let's build / something enduring.",
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | GrowthTechSys',
    description:
      'GrowthTechSys privacy commitments, data collection policies, and telemetry privacy safeguards.',
    canonicalUrl: 'https://growthtechsys.com/privacy',
    h1: 'Privacy Policy',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
  },
  {
    path: '/terms',
    title: 'Terms of Service | GrowthTechSys',
    description:
      'Terms of Service, service agreements, and commercial licensing policies for GrowthTechSys software and engineering services.',
    canonicalUrl: 'https://growthtechsys.com/terms',
    h1: 'Terms of Service',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
  },
  {
    path: '/security',
    title: 'Security & Compliance Architecture | GrowthTechSys',
    description:
      'Enterprise-grade security controls, SOC2-aligned telemetry protections, and cryptographic infrastructure details.',
    canonicalUrl: 'https://growthtechsys.com/security',
    h1: 'Security Architecture',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
  },
  {
    path: '/blog',
    title: 'Field Notes, Architecture Playbooks & Engineering Essays | GrowthTechSys',
    description:
      'Deep dives on operational AI, cold outreach infrastructure, high-velocity video production, and real revenue leverage.',
    canonicalUrl: 'https://growthtechsys.com/blog',
    h1: 'Field notes, / essays & playbooks.',
    ogImage: 'https://growthtechsys.com/images/homepage-share.png',
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
    routes.push({
      path: `/services/${s.slug}`,
      title: `${s.name} | GrowthTechSys`,
      description: s.summary || s.tagline || s.description,
      canonicalUrl: `https://growthtechsys.com/services/${s.slug}`,
      h1: s.name,
      ogType: 'website',
      ogImage: s.slug === 'ai-automation'
        ? 'https://growthtechsys.com/images/services/ai-automation-hero.png'
        : s.slug === 'ai-video-creation'
        ? 'https://growthtechsys.com/images/services/ai-video-hero.png'
        : s.slug === 'lead-generation'
        ? 'https://growthtechsys.com/images/services/lead-generation-hero.png'
        : s.slug === 'cold-email-outreach'
        ? 'https://growthtechsys.com/images/services/cold-email-hero.png'
        : 'https://growthtechsys.com/images/homepage-share.png',
    });
  }

  // 3. Products
  for (const p of PRODUCTS_DATA) {
    routes.push({
      path: `/product/${p.slug}`,
      title: `${p.name} | GrowthTechSys`,
      description: p.tagline || p.description,
      canonicalUrl: `https://growthtechsys.com/product/${p.slug}`,
      h1: p.name,
      ogType: 'website',
      ogImage: p.slug === 'field-sales-tracking'
        ? 'https://growthtechsys.com/images/products/field-sales-tracking-dashboard-hero.webp'
        : p.slug === 'growthflow-crm'
        ? 'https://growthtechsys.com/images/products/growthflow-crm-hero.webp'
        : p.slug === 'data-scraper-service'
        ? 'https://growthtechsys.com/images/products/data-scraper-hero.png'
        : 'https://growthtechsys.com/images/homepage-share.png',
    });
  }

  // 4. All Blog Posts (Existing and Future)
  for (const b of BLOG_POSTS) {
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
      ogImage: b.coverImage
        ? `https://growthtechsys.com${b.coverImage}`
        : 'https://growthtechsys.com/images/homepage-share.png',
      keywords: b.tags ? b.tags.join(', ') : undefined,
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

  // 7. Inject Semantic Pre-rendered Shell into <div id="root">
  // This ensures curl, text browsers, and non-JS search crawlers see the page's exact <h1> and lead summary.
  // When client-side React loads, createRoot automatically mounts and replaces this shell.
  const escapedH1 = escapeHtml(route.h1);
  const semanticHeader = `<header style="opacity:0.01;position:absolute;pointer-events:none;" aria-hidden="false"><h1>${escapedH1}</h1><p>${escapedDesc}</p></header>`;
  html = html.replace('<div id="root">', `<div id="root">\n      ${semanticHeader}`);

  return html;
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
      console.log(`✓ [200] / -> dist/index.html`);
    } else {
      // Create subfolder, e.g. dist/services/software-development/index.html
      const subDir = path.join(distDir, route.path.replace(/^\//, ''));
      fs.mkdirSync(subDir, { recursive: true });
      const targetFilePath = path.join(subDir, 'index.html');
      fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');
      console.log(`✓ [200] ${route.path} -> dist${route.path}/index.html`);
    }
    count++;
  }

  console.log(`\n✨ Successfully pre-rendered ${count} SEO-optimized HTML pages into dist/\n`);
}

// Execute if run directly from CLI
if (process.argv[1] && process.argv[1].endsWith('prerender.ts')) {
  prerenderAll();
}
