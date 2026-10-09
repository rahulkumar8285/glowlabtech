import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICES_DATA, PRODUCTS_DATA, type ServiceItem, type ProductItem } from '../src/data/offeringsData.ts';
import { BLOG_POSTS, type BlogPost } from '../src/data/blogData.ts';

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
  bodyHtml?: string;
}

// Helper to escape special HTML characters in text
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Generate complete semantic body HTML for a Service page
function generateServiceBody(s: ServiceItem): string {
  const challengesHtml =
    s.challenges && s.challenges.length > 0
      ? `<section style="margin-top:2rem;">
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">Key Operational Challenges We Solve</h2>
          <ul style="margin:0 0 1.5rem 1.5rem;line-height:1.8;">
            ${s.challenges.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}
          </ul>
        </section>`
      : '';

  const deliverablesHtml =
    s.deliverables && s.deliverables.length > 0
      ? `<section style="margin-top:2rem;">
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">Architecture &amp; Engineering Deliverables</h2>
          <ul style="margin:0 0 1.5rem 1.5rem;line-height:1.8;">
            ${s.deliverables.map((d) => `<li>${escapeHtml(d)}</li>`).join('')}
          </ul>
        </section>`
      : '';

  const architectureHtml =
    s.architecture && s.architecture.length > 0
      ? `<section style="margin-top:2rem;">
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">System Architecture Specification</h2>
          ${s.architecture
            .map(
              (a) => `
            <div style="margin-bottom:1.25rem;">
              <h3 style="font-size:1.15rem;font-weight:600;margin-bottom:0.25rem;">${escapeHtml(a.title)}</h3>
              <p style="color:#3f3f46;margin:0;">${escapeHtml(a.description)}</p>
            </div>
          `
            )
            .join('')}
        </section>`
      : '';

  const metricsHtml =
    s.metrics && s.metrics.length > 0
      ? `<section style="margin-top:2rem;">
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">Measurable Outcomes</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;">
            ${s.metrics
              .map(
                (m) => `
              <div style="padding:1rem;background:#f4f4f5;border-radius:6px;">
                <p style="font-size:1.5rem;font-weight:700;margin:0;color:#18181b;">${escapeHtml(m.value)}</p>
                <p style="font-size:0.875rem;color:#71717a;margin:0.25rem 0 0;">${escapeHtml(m.label)}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </section>`
      : '';

  return `
    <main class="page-content" style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
      <nav aria-label="Breadcrumb" style="margin-bottom:1.5rem;font-size:0.9rem;color:#71717a;">
        <a href="/" style="color:#2563eb;text-decoration:none;">Home</a> &gt; 
        <a href="/#services" style="color:#2563eb;text-decoration:none;">Services</a> &gt; 
        <span>${escapeHtml(s.name)}</span>
      </nav>
      <header>
        <p style="font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;margin-bottom:0.25rem;">Engineering Practice ${escapeHtml(s.number)}</p>
        <h1 style="font-size:2.25rem;font-weight:700;line-height:1.2;margin:0.5rem 0;">${escapeHtml(s.name)}</h1>
        <p style="font-size:1.25rem;color:#52525b;margin-bottom:1.5rem;line-height:1.5;">${escapeHtml(s.tagline)}</p>
      </header>
      <section>
        <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">Service Overview &amp; Scope</h2>
        <p style="font-size:1.05rem;color:#27272a;">${escapeHtml(s.summary || s.description)}</p>
      </section>
      ${challengesHtml}
      ${deliverablesHtml}
      ${architectureHtml}
      ${metricsHtml}
      <section style="margin-top:3rem;padding:1.75rem;background:#f4f4f5;border-radius:8px;">
        <h2 style="font-size:1.35rem;font-weight:600;margin-top:0;">Discuss Your Engineering Architecture</h2>
        <p style="margin-bottom:1.25rem;color:#3f3f46;">${escapeHtml(s.outcome)}</p>
        <p><a href="/contact" style="display:inline-block;padding:0.75rem 1.5rem;background:#18181b;color:#fff;text-decoration:none;border-radius:6px;font-weight:500;">Start a Project Consultation &rarr;</a></p>
      </section>
    </main>
  `;
}

// Generate complete semantic body HTML for a Product page
function generateProductBody(p: ProductItem): string {
  const modulesHtml =
    p.modules && p.modules.length > 0
      ? `<section style="margin-top:2rem;">
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">Core Modules &amp; Functional Capabilities</h2>
          ${p.modules
            .map(
              (m) => `
            <div style="margin-bottom:1.5rem;padding:1rem;background:#fafafa;border:1px solid #f4f4f5;border-radius:6px;">
              <h3 style="font-size:1.2rem;font-weight:600;margin:0 0 0.5rem;">${escapeHtml(m.title)}${m.badge ? ` <span style="font-size:0.75rem;padding:0.2rem 0.5rem;background:#e4e4e7;border-radius:4px;font-weight:500;">${escapeHtml(m.badge)}</span>` : ''}</h3>
              <p style="margin:0 0 0.5rem;color:#3f3f46;">${escapeHtml(m.description)}</p>
              ${m.bullets ? `<ul style="margin:0 0 0 1.25rem;line-height:1.7;">${m.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>` : ''}
            </div>
          `
            )
            .join('')}
        </section>`
      : '';

  const workflowHtml =
    p.workflow && p.workflow.length > 0
      ? `<section style="margin-top:2rem;">
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">Operational Workflow &amp; Execution Pipeline</h2>
          <ol style="margin:0 0 1.5rem 1.25rem;line-height:1.8;">
            ${p.workflow
              .map(
                (w) => `
              <li style="margin-bottom:0.75rem;">
                <strong>${escapeHtml(w.title)}:</strong> ${escapeHtml(w.description)}
                <p style="font-size:0.9rem;color:#71717a;margin:0.25rem 0 0;">${escapeHtml(w.detail)}</p>
              </li>
            `
              )
              .join('')}
          </ol>
        </section>`
      : '';

  const whyHtml = p.whyNeeded
    ? `<section style="margin-top:2rem;">
        <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.5rem;">${escapeHtml(p.whyNeeded.headline)}</h2>
        <p style="color:#52525b;margin-bottom:1rem;">${escapeHtml(p.whyNeeded.subheadline)}</p>
        <h3 style="font-size:1.15rem;font-weight:600;margin-bottom:0.5rem;">Common Operational Pain Points</h3>
        <ul style="margin:0 0 1.5rem 1.25rem;line-height:1.8;">
          ${p.whyNeeded.painPoints.map((pp) => `<li>${escapeHtml(pp)}</li>`).join('')}
        </ul>
        <h3 style="font-size:1.15rem;font-weight:600;margin-bottom:0.5rem;">Target Business Outcomes</h3>
        <ul style="margin:0 0 1.5rem 1.25rem;line-height:1.8;">
          ${p.whyNeeded.outcomes.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}
        </ul>
      </section>`
    : '';

  const industriesHtml =
    p.industries && p.industries.length > 0
      ? `<section style="margin-top:2rem;">
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">Industry Deployments</h2>
          ${p.industries
            .map(
              (ind) => `
            <div style="margin-bottom:1rem;">
              <h3 style="font-size:1.15rem;font-weight:600;margin-bottom:0.25rem;">${escapeHtml(ind.title)}</h3>
              <p style="margin:0 0 0.25rem;color:#3f3f46;"><strong>Problem:</strong> ${escapeHtml(ind.problem)}</p>
              <p style="margin:0;color:#3f3f46;"><strong>Solution:</strong> ${escapeHtml(ind.solution)}</p>
            </div>
          `
            )
            .join('')}
        </section>`
      : '';

  const faqsHtml =
    p.faqs && p.faqs.length > 0
      ? `<section style="margin-top:2.5rem;">
          <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:1rem;">Frequently Asked Questions</h2>
          ${p.faqs
            .map(
              (f) => `
            <div style="margin-bottom:1.25rem;">
              <h3 style="font-size:1.15rem;font-weight:600;margin-bottom:0.25rem;">${escapeHtml(f.question)}</h3>
              <p style="color:#3f3f46;margin:0;">${escapeHtml(f.answer)}</p>
            </div>
          `
            )
            .join('')}
        </section>`
      : '';

  return `
    <main class="page-content" style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
      <nav aria-label="Breadcrumb" style="margin-bottom:1.5rem;font-size:0.9rem;color:#71717a;">
        <a href="/" style="color:#2563eb;text-decoration:none;">Home</a> &gt; 
        <a href="/#products" style="color:#2563eb;text-decoration:none;">Products</a> &gt; 
        <span>${escapeHtml(p.name)}</span>
      </nav>
      <header>
        <p style="font-size:0.875rem;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;margin-bottom:0.25rem;">${escapeHtml(p.badge || 'Platform')}</p>
        <h1 style="font-size:2.25rem;font-weight:700;line-height:1.2;margin:0.5rem 0;">${escapeHtml(p.name)}</h1>
        <p style="font-size:1.25rem;color:#52525b;margin-bottom:1.5rem;line-height:1.5;">${escapeHtml(p.tagline)}</p>
      </header>
      <section>
        <h2 style="font-size:1.5rem;font-weight:600;margin-bottom:0.75rem;">Platform Overview</h2>
        <p style="font-size:1.05rem;color:#27272a;">${escapeHtml(p.description)}</p>
      </section>
      ${modulesHtml}
      ${workflowHtml}
      ${whyHtml}
      ${industriesHtml}
      ${faqsHtml}
      <section style="margin-top:3rem;padding:1.75rem;background:#f4f4f5;border-radius:8px;">
        <h2 style="font-size:1.35rem;font-weight:600;margin-top:0;">Request a 14-Day Free Pilot</h2>
        <p style="margin-bottom:1.25rem;color:#3f3f46;">${escapeHtml(p.outcome)}</p>
        <p><a href="/contact" style="display:inline-block;padding:0.75rem 1.5rem;background:#18181b;color:#fff;text-decoration:none;border-radius:6px;font-weight:500;">Request Team Onboarding &rarr;</a></p>
      </section>
    </main>
  `;
}

// Generate complete semantic body HTML for a Blog post
function generateBlogBody(b: BlogPost): string {
  const sectionsHtml =
    b.sections && b.sections.length > 0
      ? b.sections
          .map((sec) => {
            let secContent = '';
            if (sec.heading) {
              secContent += `<h2 style="font-size:1.5rem;font-weight:600;margin:2rem 0 0.75rem;">${escapeHtml(sec.heading)}</h2>`;
            }
            if (sec.subheading) {
              secContent += `<h3 style="font-size:1.2rem;font-weight:600;margin:1.25rem 0 0.5rem;">${escapeHtml(sec.subheading)}</h3>`;
            }
            if (sec.content && sec.content.length > 0) {
              secContent += sec.content
                .map((p) => `<p style="margin-bottom:1.1rem;font-size:1.05rem;color:#27272a;">${escapeHtml(p)}</p>`)
                .join('');
            }
            if (sec.bullets && sec.bullets.length > 0) {
              secContent += `<ul style="margin:1rem 0 1.25rem 1.5rem;line-height:1.8;">${sec.bullets
                .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
                .join('')}</ul>`;
            }
            if (sec.contentAfterBullets && sec.contentAfterBullets.length > 0) {
              secContent += sec.contentAfterBullets
                .map((p) => `<p style="margin-bottom:1.1rem;font-size:1.05rem;color:#27272a;">${escapeHtml(p)}</p>`)
                .join('');
            }
            if (sec.callout) {
              secContent += `<blockquote style="border-left:4px solid #18181b;padding:0.875rem 1.25rem;background:#f4f4f5;margin:1.5rem 0;font-style:italic;">
            <p style="margin:0;color:#18181b;">${escapeHtml(sec.callout.text)}</p>
            ${sec.callout.attribution ? `<cite style="display:block;margin-top:0.5rem;font-size:0.875rem;font-style:normal;color:#71717a;">— ${escapeHtml(sec.callout.attribution)}</cite>` : ''}
          </blockquote>`;
            }
            if (sec.table) {
              secContent += `<div style="overflow-x:auto;margin:1.5rem 0;">
            <table style="width:100%;border-collapse:collapse;text-align:left;">
              <thead>
                <tr style="background:#f4f4f5;border-bottom:2px solid #e4e4e7;">
                  ${sec.table.headers.map((h) => `<th style="padding:0.75rem;border:1px solid #e4e4e7;">${escapeHtml(h)}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${sec.table.rows
                  .map(
                    (row) => `
                  <tr style="border-bottom:1px solid #e4e4e7;">
                    ${row.map((cell) => `<td style="padding:0.75rem;border:1px solid #e4e4e7;">${escapeHtml(cell)}</td>`).join('')}
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          </div>`;
            }
            return `<section>${secContent}</section>`;
          })
          .join('')
      : `<section><p>${escapeHtml(b.excerpt)}</p></section>`;

  const takeawaysHtml =
    b.keyTakeaways && b.keyTakeaways.length > 0
      ? `<div style="padding:1.25rem;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;margin:1.5rem 0;">
        <h3 style="margin-top:0;color:#166534;font-size:1.15rem;font-weight:600;">Key Strategic Takeaways</h3>
        <ul style="margin:0 0 0 1.25rem;color:#15803d;line-height:1.8;">
          ${b.keyTakeaways.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}
        </ul>
      </div>`
    : '';

  const faqsHtml =
    b.faqs && b.faqs.length > 0
      ? `<section style="margin-top:2.5rem;">
        <h2 style="font-size:1.75rem;font-weight:700;margin-bottom:1.25rem;">Frequently Asked Questions</h2>
        ${b.faqs
          .map(
            (f) => `
          <div style="margin-bottom:1.5rem;">
            <h3 style="font-size:1.2rem;font-weight:600;margin-bottom:0.35rem;">${escapeHtml(f.question)}</h3>
            <p style="color:#3f3f46;margin:0;">${escapeHtml(f.answer)}</p>
          </div>
        `
          )
          .join('')}
      </section>`
      : '';

  return `
    <main class="page-content" style="max-width:860px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
      <nav aria-label="Breadcrumb" style="margin-bottom:1.5rem;font-size:0.9rem;color:#71717a;">
        <a href="/" style="color:#2563eb;text-decoration:none;">Home</a> &gt; 
        <a href="/blog" style="color:#2563eb;text-decoration:none;">Blog</a> &gt; 
        <span>${escapeHtml(b.title)}</span>
      </nav>
      <article>
        <header>
          <h1 style="font-size:2.25rem;font-weight:700;line-height:1.25;margin:0.5rem 0;">${escapeHtml(b.title)}</h1>
          <p style="font-size:0.9rem;color:#71717a;margin-bottom:1.5rem;">
            ${b.author ? `By <strong>${escapeHtml(b.author.name)}</strong> (${escapeHtml(b.author.role)}) · ` : ''}Published on ${escapeHtml(b.publishedAt)} · ${escapeHtml(b.readTime)}
          </p>
          <p style="font-size:1.2rem;color:#3f3f46;margin-bottom:1.5rem;line-height:1.6;">${escapeHtml(b.excerpt)}</p>
        </header>
        ${takeawaysHtml}
        ${sectionsHtml}
        ${faqsHtml}
      </article>
      <section style="margin-top:3rem;padding:1.75rem;background:#f4f4f5;border-radius:8px;">
        <h2 style="font-size:1.35rem;font-weight:600;margin-top:0;">Discuss Your Systems Architecture</h2>
        <p style="margin-bottom:1.25rem;color:#3f3f46;">We engineer custom AI software, automated workflow pipelines, and enterprise field workforce tracking telematics that scale revenue.</p>
        <p><a href="/contact" style="display:inline-block;padding:0.75rem 1.5rem;background:#18181b;color:#fff;text-decoration:none;border-radius:6px;font-weight:500;">Connect with Engineering &rarr;</a></p>
      </section>
    </main>
  `;
}

// Generate complete semantic body HTML for core pages
function generateCoreBody(routePath: string): string {
  if (routePath === '/about') {
    return `
      <main class="page-content" style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
        <header>
          <h1 style="font-size:2.25rem;font-weight:700;margin-bottom:0.75rem;">About GrowthTechSys — Software, AI &amp; Automation Agency</h1>
          <p style="font-size:1.25rem;color:#52525b;margin-bottom:2rem;">Deep Engineering Experience Across Diverse Industries &amp; Modern Tools</p>
        </header>
        <section>
          <p>GrowthTechSys is a specialized software engineering firm based at World Tech Park, Gurugram. We design and deploy high-performance software systems, automated workflow pipelines, and enterprise workforce telematics.</p>
          <p>Our multidisciplinary team combines system architecture, full-stack engineering, and AI fine-tuning to solve complex operational bottlenecks for growing enterprises.</p>
        </section>
        <section style="margin-top:2rem;">
          <h2>Core Capabilities</h2>
          <ul>
            <li>Custom AI Software &amp; Proprietary System Portals</li>
            <li>Zero-Hardware Field Sales Tracking &amp; Beat Plan Telematics</li>
            <li>Unified Omnichannel Sales CRM &amp; Multi-Inbox Outreach</li>
            <li>High-Throughput Web Data Extraction &amp; Verification Pipelines</li>
          </ul>
        </section>
        <section style="margin-top:2rem;">
          <h2>Headquarters &amp; Contact</h2>
          <p>B-13 World Tech Park Block-B, Sector 30, Gurugram, Haryana 122001, India</p>
          <p>Phone: +91 89297 21558 | Email: contact@growthtechsys.com</p>
        </section>
      </main>
    `;
  }

  if (routePath === '/contact') {
    return `
      <main class="page-content" style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
        <header>
          <h1 style="font-size:2.25rem;font-weight:700;margin-bottom:0.75rem;">Contact Us | Start a Project with GrowthTechSys</h1>
          <p style="font-size:1.25rem;color:#52525b;margin-bottom:2rem;">Connect directly with our engineering team at World Tech Park, Gurugram.</p>
        </header>
        <section>
          <p>Whether you need custom AI software, workflow automation, or enterprise workforce tracking telematics, our engineering leads are available for direct architecture consultations.</p>
          <h2>Direct Contact Channels</h2>
          <ul>
            <li><strong>Telephone:</strong> +91 89297 21558</li>
            <li><strong>Email:</strong> contact@growthtechsys.com</li>
            <li><strong>Office:</strong> B-13 World Tech Park Block-B, 30, Jaipur - Delhi Expy, Silokhera, Block A, Sector 30, Gurugram, Haryana 122001</li>
            <li><strong>Pilot Availability:</strong> 14-day zero-hardware team onboarding</li>
          </ul>
        </section>
      </main>
    `;
  }

  if (routePath === '/testimonials') {
    return `
      <main class="page-content" style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
        <header>
          <h1 style="font-size:2.25rem;font-weight:700;margin-bottom:0.75rem;">Client Outcomes &amp; Testimonials | GrowthTechSys</h1>
          <p style="font-size:1.25rem;color:#52525b;margin-bottom:2rem;">Verified outcomes, architectural case studies, and enterprise reviews.</p>
        </header>
        <section>
          <p>Explore how enterprises and growing businesses deploy GrowthTechSys software to eliminate fraud, reduce software overhead, and automate operational workflows.</p>
        </section>
      </main>
    `;
  }

  if (routePath === '/blog') {
    return `
      <main class="page-content" style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
        <header>
          <h1 style="font-size:2.25rem;font-weight:700;margin-bottom:0.75rem;">Field Notes, Architecture Playbooks &amp; Engineering Essays</h1>
          <p style="font-size:1.25rem;color:#52525b;margin-bottom:2rem;">Deep dives on operational AI, cold outreach infrastructure, and field workforce tracking telematics.</p>
        </header>
        <section>
          <h2>Latest Engineering Playbooks</h2>
          <ul>
            ${BLOG_POSTS.map(
              (b) => `
              <li style="margin-bottom:1rem;">
                <a href="/blog/${b.slug}" style="font-weight:600;font-size:1.15rem;color:#2563eb;text-decoration:none;">${escapeHtml(b.title)}</a>
                <p style="color:#52525b;margin:0.25rem 0 0;">${escapeHtml(b.excerpt)}</p>
              </li>
            `
            ).join('')}
          </ul>
        </section>
      </main>
    `;
  }

  if (routePath === '/privacy') {
    return `
      <main class="page-content" style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
        <header>
          <h1 style="font-size:2.25rem;font-weight:700;margin-bottom:0.75rem;">Privacy Policy / Data Protection Standards</h1>
          <p style="font-size:1.25rem;color:#52525b;margin-bottom:2rem;">How GrowthTechSys collects, encrypts, and processes personal and organizational telemetry data across our digital platforms and workforce automation engines.</p>
        </header>
        <section>
          <h2>1. Overview &amp; Scope</h2>
          <p>GrowthTechSys (“we,” “our,” or “us”) designs and operates enterprise software, custom AI automations, and workforce telematics solutions. This Privacy Policy details how we handle information collected through our official website (<a href="https://growthtechsys.com" style="color:#c84826;">growthtechsys.com</a>), our mobile tracking and sales automation applications, and related software engines.</p>
        </section>
        <section style="margin-top:2rem;">
          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Direct Communications &amp; Inquiries:</strong> Name, work email address, corporate telephone number, organization name, and project specifications.</li>
            <li><strong>Field Force Telemetry (For App Users):</strong> GPS coordinates, beat route breadcrumbs, trip distance calculations, visit timestamps, and Proof of Execution (POE).</li>
            <li><strong>Technical Device Identifiers:</strong> Operating system version, device model, network state, battery indicators, and anti-tamper telemetry.</li>
            <li><strong>Platform Usage Logs:</strong> Access logs, API invocation metrics, error traces, and administrative tenant session identifiers.</li>
          </ul>
        </section>
        <section style="margin-top:2rem;">
          <h2>3. Dedicated Field Force &amp; GPS Privacy Safeguards</h2>
          <p>GPS coordinates are captured strictly between your explicit punch-in and punch-out. The instant a user punches out of their shift, all background location services immediately terminate.</p>
        </section>
        <section style="margin-top:2rem;">
          <h2>4. How We Use Data &amp; Legal Bases</h2>
          <p>Service execution, workforce reimbursement audits (TA/DA), platform security, fraud prevention, and direct inquiry handling.</p>
        </section>
        <section style="margin-top:2rem;">
          <h2>5. Data Security &amp; Encryption Standards</h2>
          <p>TLS 1.3 encryption in transit, AES-256 encryption at rest, offline sandbox encryption, and least-privilege role scoping.</p>
        </section>
        <section style="margin-top:2rem;">
          <h2>6. Third-Party Sharing &amp; Transfers</h2>
          <p>We do not sell, rent, monetize, or trade your personal or organizational telemetry data to third parties. Data is shared strictly with audited infrastructure sub-processors essential to service operations.</p>
        </section>
        <section style="margin-top:2rem;padding:1.5rem;background:#f4f4f5;border-radius:8px;border:1px solid #e4e4e7;">
          <h2>7. Google API Limited Use Disclosure</h2>
          <p>GrowthTech Marketing Tools' use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style="color:#c84826;font-weight:600;">Google API Services User Data Policy</a>, including the Limited Use requirements. Raw, derived, or aggregated Google Workspace user data is never used to create, train, fine-tune, or improve foundational or generalized machine learning or artificial intelligence models.</p>
          <p style="margin-top:0.75rem;font-weight:600;">Email warming services are not provided for Google accounts.</p>
          <p style="margin-top:0.75rem;">Our applications do not provide, harvest, or sell contact leads databases. Users upload their own permission-based, opt-in contact lists via CSV. Every email dispatched through connected email integrations automatically includes an unsubscribe link and Gmail's native RFC-8058 one-click unsubscribe header, which immediately removes recipients from future communications upon request.</p>
        </section>
        <section style="margin-top:2rem;">
          <h2>8. Your Rights &amp; Data Retention</h2>
          <p>Under applicable data protection regulations, users maintain the right to request export, correction, or deletion of customer tenant data upon contract completion.</p>
        </section>
        <section style="margin-top:2rem;">
          <h2>9. Contact Our Privacy &amp; Grievance Officer</h2>
          <p>B-13 World Tech Park Block-B, Sector 30, Gurugram, Haryana 122001 | Phone: +91 89297 21558 | Email: privacy@growthtechsys.com</p>
        </section>
      </main>
    `;
  }

  return `
    <main class="page-content" style="max-width:960px;margin:2rem auto;padding:1.5rem;font-family:system-ui,-apple-system,sans-serif;line-height:1.7;color:#18181b;">
      <h1>We engineer systems that compound your advantage.</h1>
      <p>GrowthTechSys engineers custom AI software, automated workflow pipelines, and enterprise field workforce tracking telematics that scale revenue.</p>
      <footer style="margin-top:2rem;padding-top:1rem;border-top:1px solid #e4e4e7;font-size:0.875rem;color:#71717a;">
        <p>© ${new Date().getFullYear()} GrowthTechSys. All rights reserved.</p>
        <p style="margin-top:0.25rem;">Email warming services are not provided for Google accounts.</p>
      </footer>
    </main>
  `;
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
    bodyHtml: generateCoreBody('/'),
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
    bodyHtml: generateCoreBody('/about'),
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
    bodyHtml: generateCoreBody('/testimonials'),
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
    bodyHtml: generateCoreBody('/contact'),
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
    bodyHtml: generateCoreBody('/privacy'),
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
    bodyHtml: generateCoreBody('/terms'),
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
    bodyHtml: generateCoreBody('/security'),
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
    bodyHtml: generateCoreBody('/blog'),
    jsonLd: {
      '@type': 'CollectionPage',
      name: 'Field Notes & Engineering Playbooks',
      url: 'https://growthtechsys.com/blog',
    },
  },
];

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

    const serviceHeroImage =
      s.slug === 'ai-automation'
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
      bodyHtml: generateServiceBody(s),
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
      bodyHtml: generateProductBody(p),
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
      bodyHtml: generateBlogBody(b),
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
    html = html.replace('</head>', `  <meta name="description" content="${escapedDesc}" />\n</head>`);
  }

  // 3. Replace <link rel="canonical">
  if (/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonicalUrl}" />`
    );
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${route.canonicalUrl}" />\n</head>`);
  }

  // 4. Replace or update OpenGraph Tags
  const ogTitle = escapedTitle;
  const ogDesc = escapedDesc;
  const ogUrl = route.canonicalUrl;
  const ogImage = route.ogImage || 'https://growthtechsys.com/images/homepage-share.png';
  const ogType = route.ogType || 'website';

  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${ogTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${ogDesc}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${ogUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${ogImage}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:type" content="${ogType}" />`
  );

  // 5. Replace Twitter Card Tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${ogTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${ogDesc}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

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

  // 7. Clean up Master Homepage JSON-LD on Inner Pages to avoid duplicate or misleading schema
  if (route.path !== '/') {
    // Remove static Organization / WebSite block from inner pages
    html = html.replace(
      /<!-- Static JSON-LD Organization Schema for Crawlers -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
      ''
    );
  }

  // 8. Inject Route-Specific JSON-LD Schema (Article, Service, SoftwareApplication, BreadcrumbList, FAQPage)
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

  // 9. Inject Complete Pre-rendered Semantic HTML Body into <div id="root">
  // Crawlers and non-JS clients see the full, real article/service/product body immediately.
  // The #brand-fallback-loader is styled to cover the view until client React takes over.
  if (route.bodyHtml) {
    html = html.replace(
      '<div id="root">',
      `<div id="root">\n      <!-- Static Pre-rendered Content Shell -->\n      ${route.bodyHtml}`
    );
  }

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
  console.log(`🚀 Starting Full Static Pre-Rendering (SSG) for ${routes.length} routes...`);
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

  // Generate and sync updated sitemap.xml to dist and public
  console.log(`\n🗺️  Synchronizing sitemap.xml for ${routes.length} routes...`);
  const sitemapXml = generateSitemapXml(routes);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`✓ Synced sitemap.xml to dist/sitemap.xml & public/sitemap.xml`);

  console.log(`\n✨ Successfully pre-rendered ${count} full HTML pages with real body copy into dist/\n`);
}

// Execute if run directly from CLI
if (process.argv[1] && process.argv[1].endsWith('prerender.ts')) {
  prerenderAll();
}
