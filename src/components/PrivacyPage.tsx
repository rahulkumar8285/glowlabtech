import { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

interface PrivacyPageProps {
  onNavigate?: (path: string) => void;
}

export default function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'Privacy Policy | GlowLab Tech',
      description:
        'Comprehensive privacy policy for GlowLab Tech software, website, and GPS workforce telemetry applications in compliance with India DPDP Act and international privacy frameworks.',
      keywords:
        'privacy policy, GlowLab Tech privacy, field force telemetry privacy, DPDP act compliance, data protection officer',
      canonicalUrl: 'https://glowlabtech.com/privacy',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy | GlowLab Tech',
        url: 'https://glowlabtech.com/privacy',
        description:
          'Data privacy and security standards governing GlowLab Tech platforms, website, and workforce telemetry applications.',
        publisher: {
          '@type': 'Organization',
          name: 'GlowLab Tech',
          url: 'https://glowlabtech.com',
          telephone: '+91 89297 21558',
          email: 'privacy@glowlabtech.com',
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
    <div id="privacy-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      <PageHeader
        id="privacy-header"
        eyebrow="Legal & Data Governance"
        title="Privacy Policy / Data Protection Standards"
        subtitle="How GlowLab Tech collects, encrypts, and processes personal and organizational telemetry data across our digital platforms and workforce automation engines."
      />

      {/* DOCUMENT METADATA STRIP */}
      <section className="w-full border-b border-black/10 bg-white/70 backdrop-blur-sm py-4">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 flex flex-wrap items-center justify-between gap-4 text-xs font-body text-neutral-600">
          <div>
            <span>Effective Date: September 14, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Jurisdiction: Republic of India</span>
            <span className="text-neutral-300">/</span>
            <span>Compliance: DPDP Act 2023 & ISO 27001 Standards</span>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT BODY */}
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 text-left space-y-12">
          
          {/* 1. Overview */}
          <div className="space-y-4">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              1. Overview & Scope
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              GlowLab Tech (“we,” “our,” or “us”) designs and operates enterprise software, custom AI automations, and workforce telematics solutions. This Privacy Policy details how we handle information collected through our official website (<a href="https://glowlabtech.com" className="text-[#C84826] underline">glowlabtech.com</a>), our mobile tracking and sales automation applications, and related software engines.
            </p>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              We operate under the fundamental principle of data minimization: we strictly collect data necessary to fulfill technical workflows, contractual obligations, and workforce validation needs agreed upon by your organization.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              2. Information We Collect
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              Depending on whether you visit our public website or utilize our client software engines, we collect:
            </p>
            <ul className="space-y-3 font-body text-sm sm:text-base text-neutral-700 pl-5 list-disc leading-relaxed">
              <li>
                <strong>Direct Communications & Inquiries:</strong> Name, work email address, corporate telephone number, organization name, and project specifications submitted via our intake forms.
              </li>
              <li>
                <strong>Field Force Telemetry (For App Users):</strong> GPS coordinates, beat route breadcrumbs, trip distance calculations, visit timestamps, and geo-tagged photographic Proof of Execution (POE).
              </li>
              <li>
                <strong>Technical Device Identifiers:</strong> Operating system version, device model, network state, battery health indicators, and anti-tamper telemetry (e.g. detection of simulated mock GPS apps).
              </li>
              <li>
                <strong>Platform Usage Logs:</strong> Access logs, API invocation metrics, error traces, and administrative tenant session identifiers.
              </li>
            </ul>
          </div>

          {/* 3. Strict Workforce Telemetry & Location Privacy */}
          <div className="space-y-4 pt-4 border-t border-black/10 bg-[#F4EDE4]/50 p-6 sm:p-8 rounded-2xl border border-[#C84826]/20">
            <div className="flex items-center gap-3 text-[#C84826] mb-1">
              <Shield className="w-5 h-5" />
              <h3 className="font-headline font-semibold text-lg sm:text-xl text-[#1A1A1A]">
                3. Dedicated Field Force & GPS Privacy Safeguards
              </h3>
            </div>
            <p className="font-body text-sm sm:text-base text-neutral-800 leading-relaxed">
              For employees and agents using GlowLab Tech’s Field Sales & Workforce Automation applications, your privacy is safeguarded by strict algorithmic boundaries:
            </p>
            <ul className="space-y-2.5 font-body text-xs sm:text-sm text-neutral-700 pl-4 list-disc leading-relaxed">
              <li>
                <strong>Shift-Bound Telemetry Only:</strong> GPS coordinates are captured strictly between your explicit punch-in and punch-out. The instant a user punches out of their shift, all background location services immediately terminate.
              </li>
              <li>
                <strong>Zero Off-Duty Surveillance:</strong> GlowLab Tech never records, queries, or stores location telemetry during weekends, off-duty hours, or approved leaves.
              </li>
              <li>
                <strong>Anti-Tamper Without Device Intrusion:</strong> Our anti-mock location algorithms inspect OS provider state flags to verify authentic physical attendance without reading private files, chats, or personal accounts.
              </li>
              <li>
                <strong>Compliance with Indian Labor & DPDP Regulations:</strong> In compliance with the Digital Personal Data Protection (DPDP) Act 2023, data is stored securely on servers located within certified data centers.
              </li>
            </ul>
          </div>

          {/* 4. Purpose and Legal Bases for Processing */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              4. How We Use Data & Legal Bases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-black/10 rounded-xl p-5 text-left">
                <h4 className="font-headline font-medium text-base text-[#1A1A1A] mb-2">Service Execution & Deliverables</h4>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Executing customer software development contracts, synchronizing automated ERP/CRM webhooks, and delivering live telematics dashboards.
                </p>
              </div>
              <div className="bg-white border border-black/10 rounded-xl p-5 text-left">
                <h4 className="font-headline font-medium text-base text-[#1A1A1A] mb-2">Workforce Reimbursement Audits</h4>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Calculating transparent, dispute-free travel allowances (TA/DA) based on actual verified road distance traveled during company shifts.
                </p>
              </div>
              <div className="bg-white border border-black/10 rounded-xl p-5 text-left">
                <h4 className="font-headline font-medium text-base text-[#1A1A1A] mb-2">Platform Security & Fraud Prevention</h4>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Preventing fraudulent GPS mock check-ins, unauthorized tenant access, and malicious automated intrusions across enterprise endpoints.
                </p>
              </div>
              <div className="bg-white border border-black/10 rounded-xl p-5 text-left">
                <h4 className="font-headline font-medium text-base text-[#1A1A1A] mb-2">Direct Inquiry Handling</h4>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Responding to engineering proposals, scheduling discovery calls, and providing technical support directly from our core team.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Data Security & Storage */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              5. Data Security & Encryption Standards
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              We employ defense-in-depth architectural safeguards to protect all stored information:
            </p>
            <ul className="space-y-2.5 font-body text-sm sm:text-base text-neutral-700 pl-5 list-disc leading-relaxed">
              <li><strong>Encryption in Transit:</strong> All web traffic and mobile payloads are encrypted using TLS 1.3 with automated HSTS enforcement.</li>
              <li><strong>Encryption at Rest:</strong> Cloud databases, persistent block storage volumes, and server snapshots are encrypted with industry-standard AES-256 keys.</li>
              <li><strong>Offline Sandbox Encryption:</strong> Mobile SQLite databases on field devices operate inside an encrypted OS sandbox, safeguarding data before automated cloud sync.</li>
              <li><strong>Access Control:</strong> Administrative access follows zero-trust principles, requiring hardware-backed Multi-Factor Authentication (MFA) and least-privilege role scoping.</li>
            </ul>
          </div>

          {/* 6. Data Sharing & Third Parties */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              6. Third-Party Sharing & Transfers
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              <strong>We do not sell, rent, monetize, or trade your personal or organizational telemetry data to third parties.</strong> Data is shared strictly with audited infrastructure sub-processors essential to service operations:
            </p>
            <ul className="space-y-2 font-body text-xs sm:text-sm text-neutral-600 pl-5 list-disc leading-relaxed">
              <li>Cloud infrastructure and managed hosting providers (AWS, Google Cloud Platform).</li>
              <li>Geographic mapping and routing APIs for turn-by-turn road distance computations.</li>
              <li>Transactional email gateways for automated alert dispatches and shift summaries.</li>
            </ul>
          </div>

          {/* 7. Individual Rights & Data Retention */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              7. Your Rights & Data Retention
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              Under applicable data protection regulations, users and enterprise tenants maintain the right to:
            </p>
            <ul className="space-y-2 font-body text-sm sm:text-base text-neutral-700 pl-5 list-disc leading-relaxed">
              <li>Request an export of all personal data held in our systems.</li>
              <li>Request correction of inaccurate corporate or biographical records.</li>
              <li>Request permanent deletion of customer tenant data upon contract completion or termination.</li>
              <li>Withdraw consent for optional communications at any time.</li>
            </ul>
            <p className="font-body text-xs sm:text-sm text-neutral-500 pt-2 leading-relaxed">
              Workforce telemetry data is retained in accordance with corporate client retention contracts (typically 90 to 365 days for statutory audit and travel reimbursement verification) after which records are automatically scrubbed or anonymized.
            </p>
          </div>

          {/* 8. Corporate Grievance Officer & Official Contact Details */}
          <div className="space-y-6 pt-6 border-t border-black/10 bg-white p-6 sm:p-8 rounded-2xl border border-black/10">
            <div>
              <h2 className="font-headline font-semibold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight mb-2">
                8. Contact Our Privacy & Grievance Officer
              </h2>
              <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                If you have questions regarding this Privacy Policy, wish to exercise statutory privacy rights, or need to lodge a formal data grievance, please reach out to our dedicated officer:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-black/5 text-xs sm:text-sm font-body">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#C84826] font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Registered Office</span>
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
                  <span>Domain Inquiries</span>
                </div>
                <p className="text-neutral-700">
                  <a href="mailto:privacy@glowlabtech.com" className="hover:text-[#C84826] transition-colors block">
                    privacy@glowlabtech.com
                  </a>
                  <a href="mailto:legal@glowlabtech.com" className="hover:text-[#C84826] transition-colors block text-neutral-500">
                    legal@glowlabtech.com
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