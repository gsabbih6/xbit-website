import { notFound } from 'next/navigation';
import products from '../../data/products.json';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Cpu, Layers } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';

// Pre-render all product pages at build time
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Xbit Innovations',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} - ${product.tagline} | Xbit Innovations`,
    description: product.heroDescription,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Determine CTA Link
  const ctaLink = product.externalUrl || `/contact?product=${product.slug}`;

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-brand-dark overflow-hidden" id="main-content">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-40" />

        {/* Back navigation & header */}
        <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-[oklch(20%_0.01_230)]">
          <div className="max-w-7xl mx-auto">
            <Link 
              href="/#products" 
              className="inline-flex items-center gap-2 font-mono text-[10px] text-brand-primary uppercase tracking-[0.25em] hover:text-white transition-colors mb-12 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              [ BACK_TO_PORTFOLIO ]
            </Link>

            {/* Asymmetrical Header Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Headline and Badges */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] text-brand-primary uppercase tracking-widest border border-brand-primary/20 px-2 py-0.5 bg-brand-primary/5">
                    {product.badge}
                  </span>
                  <div className="h-px bg-[oklch(20%_0.01_230)] flex-1" />
                </div>
                
                <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
                  {product.name}
                </h1>
                
                <p className="text-xl md:text-2xl text-[oklch(60%_0.01_230)] leading-relaxed max-w-4xl">
                  {product.tagline}
                </p>
              </div>

              {/* Right Column: CTA */}
              <div className="lg:col-span-4 lg:pt-16 flex lg:justify-end">
                <a 
                  href={ctaLink}
                  target={product.externalUrl ? "_blank" : "_self"}
                  rel={product.externalUrl ? "noopener noreferrer" : ""}
                  className="group relative inline-flex items-center justify-center bg-white text-brand-dark font-bold h-14 px-8 text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-brand-primary w-full sm:w-auto lg:w-full"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {product.ctaText}
                    {product.externalUrl && <ExternalLink className="w-4 h-4" />}
                  </span>
                  <div className="absolute inset-0 bg-brand-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Showcase */}
        {product.image && (
          <section className="border-b border-[oklch(20%_0.01_230)] bg-brand-dark relative py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden border border-[oklch(20%_0.01_230)] bg-brand-dark-surface shadow-2xl">
                <Image 
                  src={product.image} 
                  alt={`${product.name} interface`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Core Case Study Narrative */}
        <section className="relative border-b border-[oklch(20%_0.01_230)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-px bg-[oklch(20%_0.01_230)]">
            
            {/* The Challenge */}
            <div className="lg:col-span-6 bg-brand-dark p-10 md:p-16">
              <div className="flex items-center gap-4 mb-8 font-mono text-[10px] text-brand-primary uppercase tracking-[0.2em]">
                <span>01 // THE_CHALLENGE</span>
                <div className="h-px bg-brand-primary/20 flex-1" />
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">What needs solving?</h2>
              <p className="text-[oklch(60%_0.01_230)] text-lg leading-relaxed">
                {product.problem}
              </p>
            </div>

            {/* The Engineering Response */}
            <div className="lg:col-span-6 bg-brand-dark p-10 md:p-16">
              <div className="flex items-center gap-4 mb-8 font-mono text-[10px] text-brand-primary uppercase tracking-[0.2em]">
                <span>02 // THE_RESPONSE</span>
                <div className="h-px bg-brand-primary/20 flex-1" />
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">How {product.name} delivers</h2>
              <p className="text-[oklch(60%_0.01_230)] text-lg leading-relaxed">
                {product.solution}
              </p>
            </div>

          </div>
        </section>

        {/* System Architecture Spec Sheet */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Tech Specs Side-rail */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary font-semibold mb-4 block">
                  [ SPECIFICATION_DETAILS ]
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                  System Specs
                </h2>
              </div>

              {/* Key Capabilities */}
              <div className="border-t border-[oklch(20%_0.01_230)] pt-6">
                <h3 className="text-white font-display text-lg font-bold mb-4 flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-brand-primary" /> Key Capabilities
                </h3>
                <ul className="space-y-4 text-sm text-[oklch(65%_0.01_230)] font-sans">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-brand-primary font-mono text-xs mt-0.5">//</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="border-t border-[oklch(20%_0.01_230)] pt-6">
                <h3 className="text-white font-display text-lg font-bold mb-4 flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-brand-primary" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="font-mono text-[10px] text-white bg-white/5 border border-white/10 px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Editorial Breakdown */}
            <div className="lg:col-span-8 border border-[oklch(20%_0.01_230)] p-8 md:p-12 bg-brand-dark-surface/10 relative">
              <div className="flex items-center justify-between border-b border-[oklch(20%_0.01_230)] pb-6 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white">System Architecture</span>
                </div>
                <span className="font-mono text-[10px] text-[oklch(40%_0.01_230)]">REV. 2026.07</span>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-[oklch(70%_0.01_230)] leading-relaxed text-base whitespace-pre-line font-sans">
                  {product.technicalArchitecture}
                </p>
              </div>
            </div>

          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
