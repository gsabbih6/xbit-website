import Link from 'next/link';
import industries from '../data/industries.json';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Industry Solutions | Xbit Innovations',
  description: 'Discover how Xbit Innovations empowers different industries with custom software architecture, MolSim, XRPay, and Custom AI solutions.',
};

export default function SolutionsHub() {
  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-brand-dark overflow-hidden" id="main-content">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-50" />

        <section className="relative pt-40 pb-24 px-6 md:px-12 border-b border-[oklch(20%_0.01_230)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 font-mono text-xs text-brand-primary uppercase tracking-widest">
              <span>[ SYSTEM_SOLUTIONS ]</span>
              <div className="h-px bg-brand-primary flex-1 opacity-30" />
              <span>DIRECTORY</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              Solutions by <span className="text-brand-primary">Industry</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[oklch(60%_0.01_230)] max-w-3xl leading-relaxed mb-12">
              Tailored automation, artificial intelligence, and scalable software architectures designed specifically for the unique demands of your sector.
            </p>
          </div>
        </section>

        <section className="relative py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[oklch(20%_0.01_230)] border border-[oklch(20%_0.01_230)]">
              {industries.map((industry, idx) => (
                <Link href={`/solutions/${industry.slug}`} key={industry.slug} className="group block">
                  <div className="h-full bg-brand-dark p-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#0a0a0c]">
                    
                    {/* Hover indicator */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    
                    <div className="flex justify-between items-start mb-8">
                      <span className="font-mono text-xs text-[oklch(40%_0.01_230)] uppercase tracking-widest">
                        0{idx + 1} // {industry.slug.toUpperCase().replace(/-/g, '_')}
                      </span>
                      <ArrowRight className="text-[oklch(30%_0.01_230)] w-5 h-5 transition-colors group-hover:text-brand-primary" />
                    </div>

                    <h2 className="font-display text-2xl font-bold text-white mb-4">{industry.industryName}</h2>
                    <p className="text-[oklch(55%_0.01_230)] leading-relaxed mb-8">{industry.heroDescription}</p>
                    
                    <div className="mt-auto pt-6 border-t border-[oklch(20%_0.01_230)]">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary">
                        Featured Product: {industry.relevantProduct}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
