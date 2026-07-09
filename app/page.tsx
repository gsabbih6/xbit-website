import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import ServicesGrid from '@/app/components/ServicesGrid';
import StatsCounter from '@/app/components/StatsCounter';
import CTASection from '@/app/components/CTASection';
import Footer from '@/app/components/Footer';

const PRODUCTS = [
  {
    slug: 'xrpay',
    name: 'XRPay',
    tagline: 'Non-custodial commerce platform',
    badge: 'Flagship',
    image: '/products/xrpay-dashboard.png',
    gridClass: 'md:col-span-2 aspect-[16/10]',
  },
  {
    slug: 'xrpay-cash',
    name: 'XRPay Cash',
    tagline: 'Crypto-to-bank mobile app',
    badge: 'iOS App',
    image: '/products/xrpay-cash-app.png',
    gridClass: 'md:col-span-1 aspect-[9/16] md:aspect-auto',
  },
  {
    slug: 'meshada',
    name: 'Meshada',
    tagline: 'AI-powered style discovery',
    badge: 'Mobile App',
    image: '/products/meshada-app.jpg',
    gridClass: 'md:col-span-1 aspect-[9/16] md:aspect-auto',
  },
  {
    slug: 'molsim',
    name: 'MolSim',
    tagline: 'Molecular simulation platform',
    badge: 'Research',
    image: '/products/molsim-dashboard.jpg',
    gridClass: 'md:col-span-2 aspect-[16/10]',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesGrid />
        <StatsCounter />

        {/* Products section */}
        <section id="products" className="bg-brand-dark py-24 md:py-32 relative border-b border-[oklch(20%_0.01_230)]">
          <div className="absolute inset-0 bg-dot-matrix pointer-events-none opacity-30" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:items-start gap-4 mb-16">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary font-semibold mb-3 block">
                  [ WHAT_WE_BUILD ]
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Our Product Portfolio
                </h2>
              </div>
            </div>

            {/* Balanced Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <Link
                  key={product.name}
                  href={`/products/${product.slug}`}
                  className={`group relative bg-brand-dark-surface border border-[oklch(18%_0.01_230)] rounded-2xl overflow-hidden transition-all duration-400 hover:border-brand-primary/40 min-h-[320px] ${product.gridClass}`}
                >
                  {/* Full Card Image Background */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} — ${product.tagline}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Multi-layered Vignette / Gradient Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-400" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded border border-brand-primary/20">
                      {product.badge}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-4 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-[oklch(65%_0.01_230)] text-sm mt-1.5 leading-relaxed max-w-sm">
                      {product.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
