import { notFound } from 'next/navigation';
import cities from '../../data/cities.json';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';

// Pre-render pages for known cities
export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

// Helper to capitalize dynamic slugs
function formatSlug(slug: string) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const cityData = cities.find((c) => c.slug === resolvedParams.city);
  const cityName = cityData ? cityData.cityName : formatSlug(resolvedParams.city);
  const state = cityData ? cityData.state : "the US";

  return {
    title: `Software Development & IT Consulting in ${cityName}, ${state} | Xbit Innovations`,
    description: `Expert custom software development, cloud migration, and AI solutions for businesses in ${cityName}. Build scalable technology with Xbit Innovations.`,
  };
}

export default async function CityLocationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = await params;
  const cityData = cities.find((c) => c.slug === resolvedParams.city);
  const cityName = cityData ? cityData.cityName : formatSlug(resolvedParams.city);
  const state = cityData ? cityData.state : "";

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-brand-dark overflow-hidden" id="main-content">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-50" />
        
        <section className="relative pt-40 pb-24 px-6 md:px-12 border-b border-[oklch(20%_0.01_230)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 font-mono text-xs text-brand-primary uppercase tracking-widest">
              <span>[ LOC:{resolvedParams.city.toUpperCase()} ]</span>
              <div className="h-px bg-brand-primary flex-1 opacity-30" />
              <span>GEO_TARGET_ACTIVE</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              Precision Software Engineering in <br className="hidden md:block" />
              <span className="text-brand-primary">{cityName}{state ? `, ${state}` : ""}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[oklch(60%_0.01_230)] max-w-3xl leading-relaxed mb-12">
              We partner with enterprises and high-growth startups in {cityName} to architect, build, and deploy mission-critical software systems. No bloat, no generic templates—just high-performance code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center bg-white text-brand-dark font-bold h-14 px-8 text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-brand-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initialize Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-brand-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs text-brand-primary mb-6">SYSTEM_CAPABILITIES</div>
            <h2 className="font-display text-3xl font-bold text-white mb-16">
              Engineering Output for {cityName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[oklch(20%_0.01_230)] border border-[oklch(20%_0.01_230)]">
              {[
                {
                  title: "Custom Software Architecture",
                  desc: "We build scalable web and mobile applications from the ground up using modern, highly resilient tech stacks."
                },
                {
                  title: "AI & Machine Learning",
                  desc: "Integrate predictive models, computer vision, and secure LLM deployments directly into your existing infrastructure."
                },
                {
                  title: "Cloud Infrastructure",
                  desc: "Migration, optimization, and zero-downtime deployment strategies across AWS, Azure, and Google Cloud."
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-brand-dark p-10 group hover:bg-[#0a0a0c] transition-colors">
                  <div className="font-mono text-xs text-[oklch(40%_0.01_230)] mb-6">0{idx + 1} // MODULE</div>
                  <h3 className="font-display text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-[oklch(55%_0.01_230)] leading-relaxed">{service.desc}</p>
                </div>
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
