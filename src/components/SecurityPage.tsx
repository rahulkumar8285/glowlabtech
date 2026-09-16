import { useEffect } from 'react';
import { ShieldCheck, Lock, Server, KeyRound, Smartphone, AlertTriangle, Phone, Mail, MapPin, CheckCircle2, ShieldAlert } from 'lucide-react';
import PageHeader from './PageHeader';
import FinalCTASection from './FinalCTASection';
import { updatePageSEO } from '../utils/seo';

interface SecurityPageProps {
  onNavigate?: (path: string) => void;
}

export default function SecurityPage({ onNavigate }: SecurityPageProps) {
  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'Security Overview & Trust Center | GrowthTechSys',
      description:
        'Enterprise security posture, zero-trust infrastructure, AES-256 encryption, anti-tamper telemetry defenses, and vulnerability disclosure program at GrowthTechSys.',
      keywords:
        'security policy, zero trust architecture, SOC 2 compliance, anti-mock GPS security, data encryption, vulnerability disclosure',
      canonicalUrl: 'https://growthtechsys.com/security',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Security Overview & Trust Center | GrowthTechSys',
        url: 'https://growthtechsys.com/security',
        description:
          'Security architecture, encryption standards, and threat prevention mechanisms engineered into GrowthTechSys systems.',
        publisher: {
          '@type': 'Organization',
          name: 'GrowthTechSys',
          url: 'https://growthtechsys.com',
          email: 'security@growthtechsys.com',
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
    <div id="security-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      <PageHeader
        id="security-header"
        eyebrow="Trust Center & Threat Defense"
        title="Security Overview / Enterprise Architecture"
        subtitle="How GrowthTechSys safeguards production software, client data, and mobile field telemetry through defense-in-depth zero-trust engineering."
      />

      {/* PILLARS HIGHLIGHT STRIP */}
      <section className="w-full border-b border-black/10 bg-white/80 py-6 sm:py-8">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l-2 border-[#C84826] pl-4">
              <span className="font-headline font-semibold text-xl sm:text-2xl text-[#1A1A1A] block">
                TLS 1.3 &amp; AES-256
              </span>
              <span className="font-body text-xs text-neutral-500 mt-1 block">
                Full-payload encryption in-transit and at-rest
              </span>
            </div>
            <div className="border-l-2 border-[#C84826] pl-4">
              <span className="font-headline font-semibold text-xl sm:text-2xl text-[#1A1A1A] block">
                Zero-Trust
              </span>
              <span className="font-body text-xs text-neutral-500 mt-1 block">
                Strict least-privilege &amp; hardware MFA enforcement
              </span>
            </div>
            <div className="border-l-2 border-[#C84826] pl-4">
              <span className="font-headline font-semibold text-xl sm:text-2xl text-[#1A1A1A] block">
                99.8% Anti-Spoof
              </span>
              <span className="font-body text-xs text-neutral-500 mt-1 block">
                OS-level mock location &amp; emulator blocking
              </span>
            </div>
            <div className="border-l-2 border-[#C84826] pl-4">
              <span className="font-headline font-semibold text-xl sm:text-2xl text-[#1A1A1A] block">
                99.9% SLA
              </span>
              <span className="font-body text-xs text-neutral-500 mt-1 block">
                High-availability multi-zone cloud infrastructure
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SECURITY SECTIONS */}
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 text-left space-y-12">
          
          {/* 1. Security Philosophy */}
          <div className="space-y-4">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              1. Security Philosophy &amp; Posture
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              At GrowthTechSys, security is not an afterthought or an isolated audit checkbox—it is engineered into every line of code, Docker container, database migration, and telemetry webhook we deploy.
            </p>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              Because our platforms process mission-critical business transactions, automated ERP synchronizations, and verified field workforce movements across 500+ Indian cities, we implement defense-in-depth principles across the entire application lifecycle.
            </p>
          </div>

          {/* 2. Infrastructure & Cloud Security */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              2. Cloud Infrastructure &amp; Network Isolation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-body">
              <div className="bg-white border border-black/10 rounded-xl p-5">
                <div className="flex items-center gap-2.5 text-[#C84826] mb-2">
                  <Server className="w-4 h-4" />
                  <h4 className="font-headline font-medium text-base text-[#1A1A1A]">Virtual Private Clouds (VPC)</h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  All databases and compute clusters run inside segregated private subnets with zero direct public internet exposure. Access is gated strictly via hardened bastions and authenticated VPN tunnels.
                </p>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-5">
                <div className="flex items-center gap-2.5 text-[#C84826] mb-2">
                  <Lock className="w-4 h-4" />
                  <h4 className="font-headline font-medium text-base text-[#1A1A1A]">Web Application Firewalls (WAF)</h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Traffic is screened at the edge for OWASP Top 10 vulnerabilities, automated bot scrapers, brute-force attempts, and distributed denial-of-service (DDoS) vectors before hitting application handlers.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Field Force Anti-Fraud & Anti-Tamper Telemetry */}
          <div className="space-y-4 pt-4 border-t border-black/10 bg-[#F4EDE4]/60 p-6 sm:p-8 rounded-2xl border border-[#C84826]/20">
            <div className="flex items-center gap-3 text-[#C84826] mb-1">
              <Smartphone className="w-5 h-5" />
              <h3 className="font-headline font-semibold text-lg sm:text-xl text-[#1A1A1A]">
                3. Field Telematics Anti-Tampering &amp; Fraud Prevention
              </h3>
            </div>
            <p className="font-body text-sm sm:text-base text-neutral-800 leading-relaxed">
              Field workforce systems are vulnerable to GPS spoofing and fake attendance tools. GrowthTechSys engineers an active telemetry defense layer built directly into our mobile kernel:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm font-body">
              <div className="bg-white/90 border border-black/10 rounded-lg p-4">
                <h5 className="font-headline font-medium text-[#1A1A1A] mb-1">Mock Location Detection</h5>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  Inspects OS-level provider flags and detects active spoofing packages (e.g., Fake GPS, Location Spoofer, rooted/jailbroken runtime hooks).
                </p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-lg p-4">
                <h5 className="font-headline font-medium text-[#1A1A1A] mb-1">Biometric Liveness Proof</h5>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  Attendance punch-in mandates real-time camera captures with active facial liveness detection, instantly rejecting static gallery uploads and digital screens.
                </p>
              </div>
              <div className="bg-white/90 border border-black/10 rounded-lg p-4">
                <h5 className="font-headline font-medium text-[#1A1A1A] mb-1">Device Clock Validation</h5>
                <p className="text-neutral-600 text-xs leading-relaxed">
                  Prevents retroactive time fraud by cross-verifying device system clocks with network-provided NTP and server-verified GPS satellite timestamps.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Encryption & Secret Management */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              4. Data Encryption &amp; Cryptographic Standards
            </h2>
            <ul className="space-y-3 font-body text-sm sm:text-base text-neutral-700 pl-5 list-disc leading-relaxed">
              <li>
                <strong>Data in Transit:</strong> 100% of external and internal service-to-service communications are encrypted with TLS 1.3 using modern cipher suites (ChaCha20-Poly1305, AES-GCM). Weak protocols (TLS 1.0, 1.1) are permanently rejected.
              </li>
              <li>
                <strong>Data at Rest:</strong> All database stores, disk volumes, and snapshot backups are encrypted using hardware-accelerated AES-256 keys managed through automated Cloud Key Management Systems (KMS).
              </li>
              <li>
                <strong>Encrypted Offline SQLite:</strong> Field data collected during network dead zones is stored in an encrypted local sandbox and authenticated with HMAC tokens before cloud ingestion.
              </li>
              <li>
                <strong>Automated Key Rotation:</strong> Cryptographic keys, API tokens, and JWT signing certificates are cycled automatically on scheduled 90-day intervals.
              </li>
            </ul>
          </div>

          {/* 5. Access Control & Identity */}
          <div className="space-y-4 pt-4 border-t border-black/10">
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              5. Identity &amp; Access Governance
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              Internal engineering and operational access enforces zero-trust privilege boundaries:
            </p>
            <ul className="space-y-2 font-body text-sm sm:text-base text-neutral-700 pl-5 list-disc leading-relaxed">
              <li><strong>Mandatory Multi-Factor Authentication:</strong> FIDO2/WebAuthn hardware security keys or time-based OTPs are required for all team accounts.</li>
              <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions ensure operators and developers have access strictly to resources required for active task delivery.</li>
              <li><strong>Ephemeral Production Access:</strong> Direct production access requires dual-authorization and generates immutable audit logs recorded in real time.</li>
            </ul>
          </div>

          {/* 6. Vulnerability Disclosure & Responsible Reporting */}
          <div className="space-y-4 pt-4 border-t border-black/10 bg-white border border-black/10 p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-3 text-[#C84826] mb-1">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="font-headline font-semibold text-lg sm:text-xl text-[#1A1A1A]">
                6. Vulnerability Disclosure &amp; Security Research
              </h3>
            </div>
            <p className="font-body text-sm sm:text-base text-neutral-700 leading-relaxed">
              We welcome collaboration with independent security researchers and ethical hackers. If you believe you have discovered a security vulnerability affecting GrowthTechSys systems, please report it responsibly:
            </p>
            <ul className="space-y-2 font-body text-xs sm:text-sm text-neutral-600 pl-5 list-disc leading-relaxed">
              <li>Submit reports directly to <a href="mailto:security@growthtechsys.com" className="text-[#C84826] font-medium underline">security@growthtechsys.com</a>.</li>
              <li>Include reproduction steps, proof-of-concept payloads, and affected component endpoints.</li>
              <li>Provide reasonable time for remediation prior to public disclosure.</li>
              <li>We commit to acknowledging valid disclosures within 24 business hours.</li>
            </ul>
          </div>

          {/* 7. Official Security Contacts */}
          <div className="space-y-6 pt-6 border-t border-black/10 bg-white p-6 sm:p-8 rounded-2xl border border-black/10">
            <div>
              <h2 className="font-headline font-semibold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight mb-2">
                7. Security Desk &amp; Emergency Contacts
              </h2>
              <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                For security inquiries, audit requests, or urgent incident reporting, please contact our Security Operations Desk:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-black/5 text-xs sm:text-sm font-body">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#C84826] font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  B-13 World Tech Park Block-B, World Tech Park, 30, Jaipur - Delhi Expy, Silokhera, Block A, Sector 30, Gurugram, Haryana 122001
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#C84826] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Incident Response</span>
                </div>
                <p className="text-neutral-700">
                  <a href="mailto:security@growthtechsys.com" className="hover:text-[#C84826] transition-colors font-medium">
                    security@growthtechsys.com
                  </a>
                </p>
                <span className="text-[11px] text-neutral-400 block">PGP &amp; Encrypted Disclosures</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#C84826] font-medium">
                  <Mail className="w-4 h-4" />
                  <span>Secure Inboxes</span>
                </div>
                <p className="text-neutral-700">
                  <a href="mailto:security@growthtechsys.com" className="hover:text-[#C84826] transition-colors block">
                    security@growthtechsys.com
                  </a>
                  <a href="mailto:legal@growthtechsys.com" className="hover:text-[#C84826] transition-colors block text-neutral-500">
                    legal@growthtechsys.com
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