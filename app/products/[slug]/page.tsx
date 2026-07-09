import { notFound } from 'next/navigation';
import products from '../../data/products.json';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, ShieldCheck, Cpu, Layers, Activity } from 'lucide-react';
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
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-50" />

        {/* Back navigation & header */}
        <section className="relative pt-40 pb-16 px-6 md:px-12 border-b border-[oklch(20%_0.01_230)]">
          <div className="max-w-5xl mx-auto">
            <Link 
              href="/#products" 
              className="inline-flex items-center gap-2 font-mono text-xs text-brand-primary uppercase tracking-widest hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              [ BACK_TO_PORTFOLIO ]
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-brand-primary uppercase tracking-widest border border-brand-primary/20 px-2 py-1 bg-brand-primary/5">
                {product.badge}
              </span>
              <div className="h-px bg-brand-primary flex-1 opacity-20" />
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              {product.name}
            </h1>

            <p className="text-xl md:text-2xl text-[oklch(60%_0.01_230)] max-w-3xl leading-relaxed mb-10">
              {product.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={ctaLink}
                target={product.externalUrl ? "_blank" : "_self"}
                rel={product.externalUrl ? "noopener noreferrer" : ""}
                className="group relative inline-flex items-center justify-center bg-white text-brand-dark font-bold h-14 px-8 text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-brand-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {product.ctaText}
                  {product.externalUrl && <ExternalLink className="w-4 h-4" />}
                </span>
                <div className="absolute inset-0 bg-brand-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </a>
            </div>
          </div>
        </section>

        {/* Hero Image Showcase */}
        {product.image && (
          <section className="border-b border-[oklch(20%_0.01_230)] bg-[#050507]/40 relative">
            <div className="max-w-5xl mx-auto px-6 py-12">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-[oklch(20%_0.01_230)] bg-brand-dark-surface shadow-2xl">
                <Image 
                  src={product.image} 
                  alt={`${product.name} Interface`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Solution Grid: Problem vs Solution */}
        <section className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-[oklch(20%_0.01_230)] border-b border-[oklch(20%_0.01_230)]">
          {/* Problem */}
          <div className="bg-brand-dark p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-brand-primary mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                01 // THE_CHALLENGE
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">What needs solving?</h2>
              <p className="text-[oklch(60%_0.01_230)] text-lg leading-relaxed mb-8">
                {product.problem}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-brand-dark p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-brand-primary mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                02 // THE_SOLUTION
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">How {product.name} delivers</h2>
              <p className="text-[oklch(60%_0.01_230)] text-lg leading-relaxed mb-8">
                {product.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Technical Architecture Section */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-primary font-semibold mb-3 block">
              [ SYSTEM_ARCHITECTURE ]
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Under the Hood
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Tech Specs Summary */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-brand-dark-surface border border-[oklch(20%_0.01_230)] p-6 rounded-none">
                <h3 className="text-white font-display font-semibold mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-primary" /> Key Capabilities
                </h3>
                <ul className="space-y-3 font-mono text-xs text-[oklch(60%_0.01_230)]">
                  {product.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-primary">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-dark-surface border border-[oklch(20%_0.01_230)] p-6 rounded-none">
                <h3 className="text-white font-display font-semibold mb-4 flex items-center gap-2">
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

            {/* Architecture Details */}
            <div className="lg:col-span-2 bg-[#09090b] border border-[oklch(20%_0.01_230)] font-mono text-sm leading-relaxed p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Activity className="w-32 h-32 text-brand-primary" />
              </div>
              <div className="flex items-center justify-between border-b border-[oklch(20%_0.01_230)] pb-4 mb-6">
                <span className="text-xs text-[oklch(40%_0.01_230)]">ENGINEERING_SPECIFICATION.md</span>
                <span className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-primary/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-primary/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                </span>
              </div>
              <p className="text-[oklch(75%_0.01_230)] leading-relaxed font-sans whitespace-pre-line">
                {product.technicalArchitecture}
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
