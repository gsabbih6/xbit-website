import { Check } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

const DELIVERABLES = [
  'The smallest useful first release',
  'A realistic delivery and budget range',
  'The biggest technical risk to solve first',
];

export default function CTASection() {
  return (
    <section
      id="project-fit"
      className="relative bg-[oklch(7%_0.01_230)] py-24 md:py-36 overflow-hidden border-t border-[oklch(20%_0.01_230)]"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
        <div className="lg:col-span-6 lg:pt-8">
          <div className="flex items-center gap-4 mb-8 font-mono text-xs text-brand-primary uppercase tracking-[0.18em]">
            <span className="block w-2 h-2 bg-brand-primary" aria-hidden="true" />
            <span>Free project triage</span>
          </div>

          <h2
            className="font-display font-bold text-white leading-[1.02] mb-7"
            style={{ fontSize: 'clamp(3rem, 5vw + 0.5rem, 5.5rem)', letterSpacing: '-0.025em' }}
          >
            Know what to build <span className="text-[oklch(48%_0.01_230)]">before you pay to build it.</span>
          </h2>

          <p className="text-[oklch(68%_0.01_230)] text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            Send us the rough idea. Within one business day, a technical lead will reply with a practical first-pass build plan.
          </p>

          <ul className="space-y-4 max-w-lg">
            {DELIVERABLES.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-3 text-[oklch(82%_0.01_230)]">
                <span className="mt-0.5 w-5 h-5 border border-brand-primary/50 flex items-center justify-center text-brand-primary shrink-0">
                  <Check className="w-3 h-3" aria-hidden="true" />
                </span>
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-6 border-t border-[oklch(20%_0.01_230)] flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[oklch(48%_0.01_230)]">
            <span><strong className="text-white font-medium">1 day</strong> response</span>
            <span><strong className="text-white font-medium">$0</strong> cost</span>
            <span><strong className="text-white font-medium">No</strong> sales sequence</span>
          </div>
        </div>

        <div className="lg:col-span-6 bg-brand-dark-surface border border-[oklch(23%_0.015_230)] p-6 sm:p-8 md:p-10">
          <div className="flex items-center justify-between gap-4 mb-8 pb-5 border-b border-[oklch(22%_0.01_230)]">
            <div>
              <p className="font-mono text-[10px] text-brand-primary uppercase tracking-[0.16em] mb-2">Project intake</p>
              <h3 className="font-display text-2xl font-bold text-white">Get your free build plan</h3>
            </div>
            <span className="hidden sm:block font-mono text-[10px] text-[oklch(45%_0.01_230)]">~60 SEC</span>
          </div>
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
