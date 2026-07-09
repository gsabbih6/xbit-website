const TESTIMONIALS = [
  {
    quote:
      'Xbit Innovations transformed our legacy systems into a modern, scalable platform that handles three times the traffic at half the infrastructure cost. Their team understood our business deeply before writing a single line of code.',
    author: 'Sarah Mitchell',
    title: 'CTO',
    company: 'Meridian Health Systems',
    featured: true,
  },
  {
    quote:
      'Their IT consulting engagement gave us a clear 18-month technology roadmap. We stopped guessing and started executing. Revenue from digital channels grew 140% in the first year.',
    author: 'David Chen',
    title: 'VP of Operations',
    company: 'Atlas Logistics',
    featured: false,
  },
  {
    quote:
      'The blockchain payment solution they built processes thousands of transactions daily with zero downtime. Xbit delivered exactly what they promised — on time and on budget.',
    author: 'Maria Rodriguez',
    title: 'Founder & CEO',
    company: 'PayStream Financial',
    featured: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header — left-aligned */}
        <div className="mb-14 max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary mb-3 block">
            Testimonials
          </span>
          <h2
            className="font-display font-bold text-[oklch(92%_0.01_230)] leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)' }}
          >
            Trusted by Forward-Thinking Businesses
          </h2>
        </div>

        {/* Asymmetric grid: featured (3 cols) + 2 standard stacked (2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured testimonial — spans 3 cols */}
          <div className="lg:col-span-3 dark-card-hover bg-brand-dark-surface border border-[oklch(18%_0.01_230)] rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
            {/* Thin teal accent line on left edge */}
            <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-brand-primary rounded-full" />

            <blockquote className="pl-6">
              <p className="text-lg md:text-xl leading-relaxed text-[oklch(78%_0.01_230)] mb-8">
                &ldquo;{TESTIMONIALS[0].quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block font-semibold text-[oklch(88%_0.01_230)]">
                    {TESTIMONIALS[0].author}
                  </span>
                  <span className="text-sm text-[oklch(50%_0.015_230)]">
                    {TESTIMONIALS[0].title}, {TESTIMONIALS[0].company}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </div>

          {/* Two standard testimonials stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {TESTIMONIALS.slice(1).map((t) => (
              <div
                key={t.author}
                className="flex-1 dark-card-hover bg-brand-dark-surface border border-[oklch(18%_0.01_230)] rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-brand-primary rounded-full" />
                <blockquote className="pl-6 flex flex-col justify-between h-full">
                  <p className="text-[oklch(75%_0.01_230)] leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <cite className="not-italic">
                      <span className="block font-semibold text-[oklch(88%_0.01_230)] text-sm">
                        {t.author}
                      </span>
                      <span className="text-xs text-[oklch(50%_0.015_230)]">
                        {t.title}, {t.company}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
