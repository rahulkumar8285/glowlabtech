import { useState, useEffect, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
        'Get in touch with our engineering team to design custom software, AI workflows, or digital product systems.',
      canonicalUrl: 'https://glowlabtech.com/contact',
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact GlowLab Tech',
        url: 'https://glowlabtech.com/contact',
        description:
          'Direct contact form and engineering inquiry desk for GlowLab Tech.',
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
        title="Let's build / something enduring."
        subtitle="Tell us about your pipeline bottlenecks, automation goals, or upcoming launch. You will hear back directly from a systems engineer within 24 hours."
      />

      {/* MAIN FORM SECTION */}
      <section className="w-full py-10 sm:py-18 md:py-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-12">
          <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] text-left">
                {isSubmitted ? (
                  /* SUCCESS STATE */
                  <div className="text-center py-8 sm:py-14 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-5">
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
                        Fill in your details below and we will respond promptly.
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
                        placeholder="Alex Morgan"
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
                          placeholder="alex@company.com"
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
                          placeholder="+1 (555) 000-0000"
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
                        Project Details / Message <span className="text-[#C84826]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Describe what you want to automate, what systems you currently use, or the timeline you're aiming for..."
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
                          <span>Submitting...</span>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="font-body text-xs text-neutral-400 pt-2">
                      We respect your privacy. No spam or marketing drips. Direct operator response only.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      );
    }
