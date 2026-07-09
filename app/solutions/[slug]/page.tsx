import { notFound } from 'next/navigation';
import industries from '../../data/industries.json';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';

// Pre-render all industry pages at build time
export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

// Helper to capitalize slugs
function formatSlug(slug: string) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industries.find((i) => i.slug === resolvedParams.slug);
  const industryName = industry ? industry.industryName : formatSlug(resolvedParams.slug);

  return {
    title: `AI & Automation Solutions for ${industryName} | Xbit Innovations`,
    description: industry ? industry.heroDescription : `Custom AI, process automation, and technology consulting for the ${industryName} industry.`,
  };
}

export default async function IndustrySolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const foundIndustry = industries.find((i) => i.slug === resolvedParams.slug);
  const formattedName = formatSlug(resolvedParams.slug);
  
  // Dynamic fallback for programmatic SEO
  const industry = foundIndustry || {
    slug: resolvedParams.slug,
    industryName: formattedName,
    heroTitle: `Scale ${formattedName} with AI & Automation`,
    heroDescription: `We build secure, compliant AI systems and automation workflows specifically tailored for the ${formattedName} sector. Focus on growth while our technology handles the complexity.`,
    challenges: [
      `Scaling operations in ${formattedName}`,
      "Outdated legacy infrastructure",
      "Inefficient manual workflows"
    ],
    xbitSolution: `Our custom solutions integrate directly into your existing infrastructure to automate processes, streamline data flow, and reduce overhead in the ${formattedName} industry.`,
    relevantProduct: "Custom AI & Automation Services"
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-brand-dark overflow-hidden" id="main-content">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-50" />
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 px-6 md:px-12 border-b border-[oklch(20%_0.01_230)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 font-mono text-xs text-brand-primary uppercase tracking-widest">
              <span>[ INDUSTRY_{industry.slug.toUpperCase().replace(/-/g, '_')} ]</span>
              <div className="h-px bg-brand-primary flex-1 opacity-30" />
              <span>ACTIVE</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              {industry.heroTitle}
            </h1>
            
            <p className="text-xl md:text-2xl text-[oklch(60%_0.01_230)] max-w-3xl leading-relaxed mb-12">
              {industry.heroDescription}
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

        {/* Challenges & Solutions */}
        <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-[oklch(20%_0.01_230)] border border-[oklch(20%_0.01_230)]">
          
          {/* Left Column: Challenges */}
          <div className="bg-brand-dark p-10 lg:p-16">
            <div className="font-mono text-xs text-brand-primary mb-6">01 // IDENTIFIED_ISSUES</div>
            <h2 className="font-display text-3xl font-bold text-white mb-10">The Challenges in {industry.industryName}</h2>
            <ul className="space-y-8">
              {industry.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <div className="mt-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="oklch(60% 0.01 230)" strokeWidth="1.5">
                      <path d="M5 10l3 3 7-7" />
                    </svg>
                  </div>
                  <span className="text-lg text-[oklch(75%_0.01_230)]">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Solution */}
          <div className="bg-[#0a0a0c] p-10 lg:p-16">
            <div className="font-mono text-xs text-brand-primary mb-6">02 // PROPOSED_ARCHITECTURE</div>
            <h2 className="font-display text-3xl font-bold text-white mb-8">The Xbit Solution</h2>
            <p className="text-xl text-[oklch(60%_0.01_230)] leading-relaxed mb-12">
              {industry.xbitSolution}
            </p>
            
            <div className="bg-brand-dark border border-[oklch(20%_0.01_230)] p-8">
              <div className="font-mono text-[10px] text-[oklch(40%_0.01_230)] uppercase tracking-widest mb-3">Target Deployment</div>
              <div className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-primary" />
                {industry.relevantProduct}
              </div>
            </div>
          </div>
        </section>

      </main>
      <CTASection />
      <Footer />
    </>
  );
}
