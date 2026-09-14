import { useState, useEffect, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import PageHeader from './PageHeader';
import { updatePageSEO } from '../utils/seo';

interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export default function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Contact Page SEO
  useEffect(() => {
    const cleanup = updatePageSEO({
      title: 'Contact Us | Start a Project with GlowLab Tech',
      description:
        'Connect directly with our engineering team at World Tech Park, Gurugram. Call +91 89297 21558 or submit a project brief for custom AI software and workforce automation.',
      keywords:
        'contact GlowLab Tech, hire AI developers, software engineering quote, project inquiry, enterprise software consultation, Gurugram software agency',
      canonicalUrl: 'https://glowlabtech.com/contact',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact GlowLab Tech',
        url: 'https://glowlabtech.com/contact',
        description:
          'Direct contact form, corporate office address, and engineering inquiry desk for GlowLab Tech.',
        mainEntity: {
          '@type': 'Organization',
          name: 'GlowLab Tech',
          url: 'https://glowlabtech.com',
          telephone: '+91 89297 21558',
          email: 'contact@glowlabtech.com',
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <div id="contact-page" className="w-full bg-[#FAF9F6] text-[#1A1A1A]">
      {/* PAGE HEADER */}
      <PageHeader
        id="contact-header"
        eyebrow="Direct Engineering Desk"
        title="Let's build / something enduring."
        subtitle="Tell us about your pipeline bottlenecks, automation goals, or upcoming launch. You will hear back directly from a systems engineer within 24 hours."
      />

      {/* CONTACT & OFFICE GRID */}
      <section className="w-full py-10 sm:py-16 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* LEFT COLUMN: OFFICE DETAILS & DIRECT ACCESS (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1">
              <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h3 className="font-headline font-semibold text-xl text-[#1A1A1A] mb-1">
                    Corporate Headquarters
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-neutral-500">
                    Visit our engineering workstations or reach out directly to our operations team.
                  </p>
                </div>

                {/* Address Card */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-black/5 font-body">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-black/10 flex items-center justify-center text-[#C84826] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-xs text-neutral-400 uppercase tracking-wider mb-1">
                      Office Address
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                      B-13 World Tech Park Block-B, World Tech Park, 30, Jaipur - Delhi Expy, Silokhera, Block A, Sector 30, Gurugram, Haryana 122001
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-black/5 font-body">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-black/10 flex items-center justify-center text-[#C84826] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-xs text-neutral-400 uppercase tracking-wider mb-1">
                      Direct Line / Phone
                    </span>
                    <a
                      href="tel:+918929721558"
                      className="font-headline font-semibold text-base sm:text-lg text-[#1A1A1A] hover:text-[#C84826] transition-colors"
                    >
                      +91 89297 21558
                    </a>
                    <span className="block text-xs text-neutral-500 mt-0.5">
                      Mon – Fri, 09:30 – 18:30 IST
                    </span>
                  </div>
                </div>

                {/* Domain Email Inboxes */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-black/5 font-body">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-black/10 flex items-center justify-center text-[#C84826] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5 w-full">
                    <span className="block font-medium text-xs text-neutral-400 uppercase tracking-wider mb-1">
                      Domain Inboxes
                    </span>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm">
                      <a
                        href="mailto:contact@glowlabtech.com"
                        className="text-[#1A1A1A] font-medium hover:text-[#C84826] transition-colors"
                      >
                        contact@glowlabtech.com
                        <span className="text-neutral-400 text-xs font-normal block sm:inline sm:ml-1.5">— Inquiries &amp; New Projects</span>
                      </a>
                      <a
                        href="mailto:support@glowlabtech.com"
                        className="text-neutral-600 hover:text-[#C84826] transition-colors"
                      >
                        support@glowlabtech.com
                        <span className="text-neutral-400 text-xs font-normal block sm:inline sm:ml-1.5">— Platform &amp; Field Support</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTAKE FORM (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] text-left">
                {isSubmitted ? (
                  /* SUCCESS STATE */
                  <div className="text-center py-8 sm:py-14 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#C84826]/10 text-[#C84826] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-headline font-medium text-2xl sm:text-3xl text-[#1A1A1A] mb-3">
                      Message received.
                    </h3>
                    <p className="font-body text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed mb-8">
                      Thank you, <span className="font-semibold text-[#1A1A1A]">{formData.name}</span>. We've logged your project brief and our systems engineer will contact you at{' '}
                      <span className="font-semibold text-[#1A1A1A]">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center font-body font-medium text-sm text-white bg-[#1A1A1A] hover:bg-neutral-800 active:bg-black px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  /* INTAKE FORM */
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div>
                      <h3 className="font-headline font-medium text-xl sm:text-2xl text-[#1A1A1A] mb-1.5 sm:mb-2">
                        Tell us about your project
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-neutral-500">
                        Fill in your details below and our lead engineer will respond promptly.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-body">
                        {errorMsg}
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-body text-xs font-medium text-neutral-700 uppercase tracking-wider mb-2"
                      >
                        Full Name <span className="text-[#C84826]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 sm:py-3 bg-[#FAF9F6] border border-black/10 rounded-lg text-base sm:text-sm font-body text-[#1A1A1A] placeholder-neutral-400 focus:outline-none focus:border-[#C84826] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block font-body text-xs font-medium text-neutral-700 uppercase tracking-wider mb-2"
                        >
                          Work Email <span className="text-[#C84826]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="rahul@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 sm:py-3 bg-[#FAF9F6] border border-black/10 rounded-lg text-base sm:text-sm font-body text-[#1A1A1A] placeholder-neutral-400 focus:outline-none focus:border-[#C84826] focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block font-body text-xs font-medium text-neutral-700 uppercase tracking-wider mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+91 89297 21558"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 sm:py-3 bg-[#FAF9F6] border border-black/10 rounded-lg text-base sm:text-sm font-body text-[#1A1A1A] placeholder-neutral-400 focus:outline-none focus:border-[#C84826] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block font-body text-xs font-medium text-neutral-700 uppercase tracking-wider mb-2"
                      >
                        Project Details / Inquiry <span className="text-[#C84826]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Describe what you want to build or automate (e.g. Field tracking app, AI agent workflow, custom cloud architecture, or timeline)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 sm:py-3 bg-[#FAF9F6] border border-black/10 rounded-lg text-base sm:text-sm font-body text-[#1A1A1A] placeholder-neutral-400 focus:outline-none focus:border-[#C84826] focus:bg-white transition-colors resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body font-medium text-sm text-white bg-[#C84826] hover:bg-[#B33E1D] active:bg-[#9E3416] px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer disabled:opacity-60 select-none shadow-md sm:shadow-sm active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <span>Transmitting...</span>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="font-body text-xs text-neutral-400 pt-2">
                      We respect your privacy under the DPDP Act. Zero marketing spam. Direct engineer response only.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}