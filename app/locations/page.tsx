import Link from 'next/link';
import cities from '../data/cities.json';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Service Locations | Xbit Innovations',
  description: 'Explore the cities where Xbit Innovations provides custom software development, cloud infrastructure, and AI engineering services.',
};

export default function LocationsHub() {
  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-brand-dark overflow-hidden" id="main-content">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-50" />

        <section className="relative pt-40 pb-24 px-6 md:px-12 border-b border-[oklch(20%_0.01_230)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 font-mono text-xs text-brand-primary uppercase tracking-widest">
              <span>[ GEO_TARGET_ZONES ]</span>
              <div className="h-px bg-brand-primary flex-1 opacity-30" />
              <span>DIRECTORY</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              Service <span className="text-brand-primary">Locations</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[oklch(60%_0.01_230)] max-w-3xl leading-relaxed mb-12">
              We provide enterprise-grade software engineering and IT consulting to businesses across the United States. Find your local service area below.
            </p>
          </div>
        </section>

        <section className="relative py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[oklch(20%_0.01_230)] border border-[oklch(20%_0.01_230)]">
              {cities.map((city, idx) => (
                <Link href={`/locations/${city.slug}`} key={city.slug} className="group block">
                  <div className="h-full bg-brand-dark p-8 relative overflow-hidden transition-colors duration-300 hover:bg-[#0a0a0c]">
                    
                    {/* Hover indicator */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-xs text-[oklch(40%_0.01_230)] uppercase tracking-widest">
                        LOC_{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <ArrowRight className="text-[oklch(30%_0.01_230)] w-4 h-4 transition-colors group-hover:text-brand-primary" />
                    </div>

                    <h2 className="font-display text-xl font-bold text-white mb-2">{city.cityName}</h2>
                    <p className="text-[oklch(55%_0.01_230)] text-sm">{city.state}</p>
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
