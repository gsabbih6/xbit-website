import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    num: '01',
    title: 'Custom Software Development',
    description:
      'End-to-end product engineering tailored to your business processes. From architecture through deployment, we build systems that scale with you.',
    featured: true,
  },
  {
    num: '02',
    title: 'IT Consulting & Strategy',
    description:
      'Technology roadmaps, infrastructure audits, and digital transformation strategies that align IT investments with business outcomes.',
    featured: true,
  },
  {
    num: '03',
    title: 'Cloud Solutions',
    description:
      'Migration, optimization, and managed cloud infrastructure across AWS, Azure, and GCP. Reduce costs while improving reliability.',
  },
  {
    num: '04',
    title: 'Blockchain & FinTech',
    description:
      'Smart contracts, DeFi protocols, and payment integrations. We build secure financial technology for the modern economy.',
  },
  {
    num: '05',
    title: 'Cybersecurity',
    description:
      'Vulnerability assessments, compliance frameworks, and security-first architecture to protect your most critical assets.',
  },
  {
    num: '06',
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences on every device.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-brand-dark py-24 md:py-32 border-b border-[oklch(20%_0.01_230)] relative">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-dot-matrix pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-6 font-mono text-xs text-brand-primary uppercase tracking-widest">
            <span>[ SYSTEM_CAPABILITIES ]</span>
            <div className="h-px bg-[oklch(30%_0.01_230)] flex-1" />
          </div>
          <h2
            className="font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw + 0.5rem, 4rem)' }}
          >
            Engineering Output.
          </h2>
          <p className="text-[oklch(60%_0.01_230)] text-lg md:text-xl">
            We don't do theory. We ship production-grade systems designed for performance, security, and scale.
          </p>
        </div>

        {/* Industrial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[oklch(20%_0.01_230)] border border-[oklch(20%_0.01_230)]">
          {SERVICES.map((service, idx) => (
            <div
              key={service.num}
              className="group relative bg-brand-dark p-10 transition-colors duration-300 hover:bg-[#0a0a0c]"
            >
              {/* Highlight bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              
              <div className="flex justify-between items-start mb-20">
                <span className="font-mono text-xs text-brand-primary tracking-widest border border-brand-primary/20 px-2 py-1 bg-brand-primary/5">
                  ID_{service.num}
                </span>
                <ArrowRight className="text-[oklch(30%_0.01_230)] w-5 h-5 transition-all group-hover:text-brand-primary group-hover:translate-x-1" />
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center md:justify-start">
           <Link href="/solutions" className="font-mono text-sm text-brand-primary uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
             Explore All Capabilities <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </div>
    </section>
  );
}
