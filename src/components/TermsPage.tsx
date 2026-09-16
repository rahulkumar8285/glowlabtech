import { useEffect } from 'react';
import { Scale, FileCheck, AlertCircle, ShieldAlert, Phone, Mail, MapPin } from 'lucide-react';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

interface TermsPageProps {
  onNavigate?: (path: string) => void;
}

export default function TermsPage({ onNavigate }: TermsPageProps) {
  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'Terms of Service | GrowthTechSys',
      description:
        'Standard master service agreement and platform terms governing GrowthTechSys custom software development, AI automation pipelines, and field force management SaaS.',
      keywords:
        'terms of service, GrowthTechSys terms, master service agreement, SaaS agreement, enterprise software contract',
      canonicalUrl: 'https://growthtechsys.com/terms',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms of Service | GrowthTechSys',
        url: 'https://growthtechsys.com/terms',
        description:
          'Commercial and platform operational terms for GrowthTechSys engineering services and software applications.',
        publisher: {
          '@type': 'Organization',
          name: 'GrowthTechSys',
          url: 'https://growthtechsys.com',
          telephone: '+91 89297 21558',
          email: 'legal@growthtechsys.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'B-13 World Tech Park Block-B, World Tech Park, 30, Jaipur - Delhi Expy, Silokhera, Block A, Sector 30',
            addressLocality: 'Gurugram',
            addressRegion: 'Haryana',
            postalCode: '122001',
            addressCountry: 'IN',
          },
        },
      },
    });

    return cleanup;
  }, []);

  return (
    <div id="terms-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      <PageHeader
        id="terms-header"
        eyebrow="Commercial & Operational Terms"
        title="Terms of Service / Master Services Agreement"
        subtitle="The contractual framework governing access to GrowthTechSys software engines, bespoke engineering services, and field force management infrastructure."
      />

      {/* METADATA STRIP */}
      <section className="w-full border-b border-black/10 bg-white/70 backdrop-blur-sm py-4">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 flex flex-wrap items-center justify-between gap-4 text-xs font-body text-neutral-600">
          <div>
            <span>Version 2.4 — Updated September 14, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Jurisdiction: Gurugram, Haryana, India</span>
            <span className="text-neutral-300">/</span>
            <span>Governing Body: Arbitration and Conciliation Act, 1996</span>
          </div>
        </div>
      </section>

      {/* MAIN TERMS CONTENT */}
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 text-left space-y-12">
          
          {/* 1. Agreement & Acceptance */}
          <div className="space-y-4">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              1. Acceptance of Terms & Engagement Scope
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              These Terms of Service (“Terms”) constitute a legally binding agreement between GrowthTechSys (“Company,” “we,” or “us”) and the enterprise entity, founder, or individual (“Client,” “Customer,” or “you”) engaging our engineering services, accessing our software repositories, or subscribing to our cloud-hosted platforms.
            </p>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              By commissioning a Statement of Work (SOW), executing an enterprise software agreement, or authorizing team members to download our field telemetry mobile applications, you confirm that you have read, understood, and agreed to be bound by these Terms.
            </p>
          </div>

          {/* 2. Services & Proprietary Software Engines */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              2. Scope of Services & SaaS Platforms
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              GrowthTechSys provides engineering deliverables across two core engagement models:
            </p>
            <ul className="space-y-3 font-body text-sm sm:text-base text-neutral-700 pl-5 list-disc leading-relaxed">
              <li>
                <strong>Bespoke Engineering & AI Automation:</strong> Custom development of cloud backends, API integrations, distributed microservices, LLM reasoning pipelines, and custom web applications delivered under executed Statements of Work.
              </li>
              <li>
                <strong>Workforce Automation & Field Tracking Platform:</strong> Turnkey mobile and cloud SaaS for beat route planning, live telemetry verification, geo-fenced attendance, proof of execution, and automated travel reimbursement audits across Indian commercial hubs.
              </li>
            </ul>
          </div>

          {/* 3. Acceptable Use & Field Workforce Policies */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              3. Acceptable Use & Employer Responsibilities
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              When utilizing GrowthTechSys’s Field Sales & Workforce Automation software:
            </p>
            <ul className="space-y-2.5 font-body text-sm sm:text-base text-neutral-700 pl-5 list-disc leading-relaxed">
              <li>
                <strong>Authorized Personnel:</strong> The Client must ensure that all field representatives tracking activity through the application have provided informed corporate consent in compliance with applicable employment agreements and the Digital Personal Data Protection (DPDP) Act.
              </li>
              <li>
                <strong>Prohibition of Off-Duty Tracking:</strong> The Client covenants not to mandate, configure, or attempt telemetry capture outside of authorized working shift hours.
              </li>
              <li>
                <strong>No Malicious Reverse Engineering:</strong> Neither Client nor its agents shall decompile, disassemble, reverse engineer, or create derivative works from GrowthTechSys’s compiled mobile binaries or proprietary backend telemetry ingestion endpoints.
              </li>
            </ul>
          </div>

          {/* 4. Intellectual Property & Code Ownership */}
          <div className="space-y-4 pt-4 border-t border-black/10 bg-white border border-black/10 p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-3 text-[#C84826] mb-1">
              <Scale className="w-5 h-5" />
              <h3 className="font-headline font-semibold text-lg sm:text-xl text-[#1A1A1A]">
                4. Intellectual Property Rights & Ownership
              </h3>
            </div>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              We maintain a fair, transparent intellectual property structure:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm font-body">
              <div className="border border-black/10 rounded-xl p-4 bg-[#FAF9F6]">
                <h4 className="font-headline font-medium text-[#1A1A1A] mb-1">Client Deliverables (100% Owned by Client)</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Upon full settlement of contracted milestone invoices, all bespoke code, custom database schemas, domain-specific AI prompts, and proprietary business logic authored explicitly for the Client belong unconditionally to the Client.
                </p>
              </div>
              <div className="border border-black/10 rounded-xl p-4 bg-[#FAF9F6]">
                <h4 className="font-headline font-medium text-[#1A1A1A] mb-1">GrowthTechSys Core Technology (Proprietary Engine)</h4>
                <p className="text-neutral-600 leading-relaxed">
                  GrowthTechSys retains all rights, title, and interest in our pre-existing telemetry kernels, anti-mock GPS detection algorithms, baseline workflow automation scaffolding, and cloud infrastructure templates.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Invoicing, Taxes & Payment Terms */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              5. Commercial Invoicing & Payment Terms
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              Unless otherwise specified in an active Statement of Work:
            </p>
            <ul className="space-y-2 font-body text-sm sm:text-base text-neutral-700 pl-5 list-disc leading-relaxed">
              <li>Invoices are issued digitally and are payable within 15 calendar days from the invoice date (Net 15).</li>
              <li>SaaS user seat subscriptions are billed monthly or annually in advance based on active field force user licenses.</li>
              <li>All quoted fees are exclusive of Goods and Services Tax (GST) and applicable statutory taxes, which will be levied at the prevailing rate under Indian tax regulations.</li>
              <li>Late payments overdue past 30 days may result in temporary suspension of API webhook executions or SaaS administrative dashboard access until reconciled.</li>
            </ul>
          </div>

          {/* 6. Service Level Standards & Warranties */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              6. Service Levels, Uptime & Warranties
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              GrowthTechSys commits to maintaining an operational uptime target of <strong>99.9%</strong> for cloud-hosted SaaS endpoints, excluding pre-notified scheduled maintenance windows (typically executed outside standard business hours).
            </p>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              Bespoke software deliverables are supported by a standard 30-day post-launch warranty during which any reproducible bugs or functional regressions violating the approved technical specification are remediated at zero additional cost.
            </p>
          </div>

          {/* 7. Limitation of Liability */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              7. Limitation of Liability
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              To the maximum extent permissible under applicable law, in no event shall GrowthTechSys, its directors, or its software engineers be liable for indirect, incidental, special, consequential, or punitive damages (including loss of business profits, data corruption, or operational interruption).
            </p>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              Our total aggregate liability arising out of or related to any engagement shall not exceed the total fees actually received by GrowthTechSys from the Client under the specific SOW or subscription during the three (3) months preceding the claim.
            </p>
          </div>

          {/* 8. Governing Law & Dispute Resolution */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              8. Governing Law & Exclusive Jurisdiction
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              These Terms shall be construed, interpreted, and enforced strictly in accordance with the substantive laws of the Republic of India.
            </p>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              Any dispute, controversy, or claim arising out of or relating to these Terms shall first be resolved through good-faith executive escalation. Failing amicable settlement within 30 days, the dispute shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996, conducted by a sole arbitrator mutually appointed in Gurugram, Haryana. The courts situated in Gurugram, Haryana shall have exclusive territorial jurisdiction.
            </p>
          </div>

          {/* 9. Corporate Legal Notices */}
          <div className="space-y-6 pt-6 border-t border-black/10 bg-white p-6 sm:p-8 rounded-2xl border border-black/10">
            <div>
              <h2 className="font-headline font-semibold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight mb-2">
                9. Legal Notices & Communications
              </h2>
              <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                All legal notices, contractual amendments, or formal claims must be addressed in writing to:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-black/5 text-xs sm:text-sm font-body">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#C84826] font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Corporate Office</span>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  B-13 World Tech Park Block-B, World Tech Park, 30, Jaipur - Delhi Expy, Silokhera, Block A, Sector 30, Gurugram, Haryana 122001
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#C84826] font-medium">
                  <Phone className="w-4 h-4" />
                  <span>Telephone</span>
                </div>
                <p className="text-neutral-700">
                  <a href="tel:+918929721558" className="hover:text-[#C84826] transition-colors font-medium">
                    +91 89297 21558
                  </a>
                </p>
                <span className="text-[11px] text-neutral-400 block">Mon - Fri, 10:00 - 18:00 IST</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#C84826] font-medium">
                  <Mail className="w-4 h-4" />
                  <span>Legal Department</span>
                </div>
                <p className="text-neutral-700">
                  <a href="mailto:legal@growthtechsys.com" className="hover:text-[#C84826] transition-colors block">
                    legal@growthtechsys.com
                  </a>
                  <a href="mailto:contact@growthtechsys.com" className="hover:text-[#C84826] transition-colors block text-neutral-500">
                    contact@growthtechsys.com
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
}