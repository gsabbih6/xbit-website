import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ContactForm from '@/app/components/ContactForm';
import Scheduler from '@/app/components/Scheduler';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Xbit Innovations for IT consulting, custom software development, and technology solutions. Book a call or send a message.',
};

const FAQ_ITEMS = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer custom software development, IT consulting & strategy, cloud solutions, blockchain & FinTech, cybersecurity, mobile development, staff augmentation, and managed IT services. Every engagement is tailored to your specific business needs.',
  },
  {
    question: 'How much does a typical project cost?',
    answer:
      'Projects range from $10K for MVPs to $500K+ for enterprise solutions. We\'ll scope your project during our free consultation and provide a transparent, fixed-price or time-and-materials estimate — whichever fits your needs best.',
  },
  {
    question: 'Do you work with businesses outside Arkansas?',
    answer:
      'Absolutely. While we\'re based in Arkansas, we serve clients nationwide and internationally. Our team is fully equipped for remote collaboration with async communication, shared project boards, and weekly video demos.',
  },
  {
    question: 'What is your development process?',
    answer:
      'We follow an agile methodology with 2-week sprints, weekly demos, and continuous deployment. You\'ll have full visibility into progress through shared dashboards, and we iterate based on your feedback at every stage.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'MVPs: 4–8 weeks. Full products: 3–6 months. Enterprise projects: 6–12 months. Timelines depend on scope and complexity — we\'ll give you an honest estimate during our initial consultation.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-brand-dark min-h-[100dvh] overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-40" />

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-16 px-6 md:px-12 border-b border-[oklch(20%_0.01_230)]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8 font-mono text-xs text-brand-primary uppercase tracking-widest">
              <span>[ INITIALIZE_CONNECTION ]</span>
              <div className="h-px bg-brand-primary flex-1 opacity-30" />
              <span>ACTIVE</span>
            </div>
            <h1
              className="font-display font-bold leading-[1.05] text-white mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
              }}
            >
              Get a useful answer, <span className="text-brand-primary">not a sales pitch</span>.
            </h1>
            <p className="text-lg md:text-xl text-[oklch(60%_0.01_230)] max-w-2xl leading-relaxed">
              Send the project details for a practical first-pass recommendation, or book a 30-minute call with a technical lead.
            </p>
          </div>
        </section>

        {/* ── Split Conversion Layout ── */}
        <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Onboarding Wizard */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6 font-mono text-xs text-brand-primary uppercase tracking-widest">
                <span>01 // STEPPED_ONBOARDING</span>
              </div>
              <ContactForm />
            </div>

            {/* Right Column: Calendly Embed */}
            <div id="calendar" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6 font-mono text-xs text-brand-primary uppercase tracking-widest">
                <span>02 // SECURE_CALENDAR_RESERVATION</span>
              </div>
              <Scheduler />
            </div>
          </div>

          {/* Technical Status / Contact Details Metadata Bar */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-[oklch(20%_0.01_230)] pt-12 font-mono text-xs text-[oklch(50%_0.01_230)]">
            <div>
              <span className="text-brand-primary block mb-2">{'// DIRECT_EMAIL'}</span>
              <a href="mailto:info@xbitinnovations.com" className="text-white hover:text-brand-primary transition-colors">
                info@xbitinnovations.com
              </a>
            </div>
            <div>
              <span className="text-brand-primary block mb-2">{'// VOICE_LINE'}</span>
              <a href="tel:4794129908" className="text-white hover:text-brand-primary transition-colors">
                (479) 412-9908
              </a>
            </div>
            <div>
              <span className="text-brand-primary block mb-2">{'// PHYSICAL_REGION'}</span>
              <span className="text-white">Arkansas, USA</span>
            </div>
            <div>
              <span className="text-brand-primary block mb-2">{'// SERVICE_HOURS'}</span>
              <span className="text-white">Mon–Fri // 08:00–18:00 CST</span>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-brand-light py-24 md:py-32 relative border-t border-[oklch(20%_0.01_230)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-16 text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-primary mb-3 block">
                [ SERVICE_SPECIFICATIONS ]
              </span>
              <h2
                className="font-display font-bold text-brand-dark leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)' }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-0">
              {FAQ_ITEMS.map((item, index) => (
                <details
                  key={index}
                  className="group border-b border-[oklch(88%_0.005_230)]"
                >
                  <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer list-none text-left font-display text-base md:text-lg font-semibold text-brand-dark select-none [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="shrink-0 text-[oklch(50%_0.01_230)] transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div className="pb-6 pr-8">
                    <p className="text-sm text-[oklch(40%_0.01_230)] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
