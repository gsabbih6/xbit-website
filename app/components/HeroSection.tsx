'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-brand-dark bg-tech-grid border-b border-[oklch(20%_0.01_230)]">
      {/* Decorative technical elements */}
      <div className="absolute top-24 left-6 md:left-12 font-mono text-[10px] text-[oklch(40%_0.01_230)] tracking-widest hidden md:block">
        SYS.INIT // v2.4.0 <br />
        LOC: US-SOUTH <br />
        STATUS: ONLINE
      </div>
      
      <div className="absolute top-24 right-6 md:right-12 hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="oklch(30% 0.01 230)" strokeWidth="1">
          <circle cx="30" cy="30" r="28" strokeDasharray="4 4"/>
          <circle cx="30" cy="30" r="10" />
          <path d="M30 0v60M0 30h60" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[72px] pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div
            className="animate-reveal flex items-center gap-3 mb-8"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            <div className="flex items-center">
              <span className="block w-2 h-2 bg-brand-primary" aria-hidden="true" />
              <span className="block w-4 h-px bg-brand-primary" aria-hidden="true" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-primary font-semibold">
              Precision Engineering Studio
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-reveal font-display font-bold leading-[1.05] text-white mb-8"
            style={
              {
                '--i': 1,
                fontSize: 'clamp(3rem, 6vw + 1rem, 6.5rem)',
                letterSpacing: '-0.02em',
              } as React.CSSProperties
            }
          >
            We Build Software. <br />
            <span className="text-[oklch(50%_0.01_230)]">You Build Businesses.</span>
          </h1>

          {/* Subheadline and CTA Grid */}
          <div 
            className="animate-reveal grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl text-[oklch(75%_0.01_230)] leading-relaxed">
                Strategic IT consulting paired with precision-crafted custom software. 
                We partner with high-growth companies to architect systems that scale.
              </p>
            </div>
            
            <div className="md:col-span-5 flex flex-col items-start md:items-end">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center bg-white text-brand-dark font-bold h-14 px-8 text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-brand-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initialize Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Micro-interaction highlight */}
                <div className="absolute inset-0 bg-brand-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute bottom-0 left-[10%] w-px h-32 bg-gradient-to-t from-brand-primary to-transparent opacity-50" />
      <div className="absolute top-0 right-[20%] w-px h-64 bg-gradient-to-b from-[oklch(20%_0.01_230)] to-transparent" />
      
      {/* Scroll indicator */}
      <div
        className="absolute bottom-0 left-6 flex flex-col items-center"
        aria-hidden="true"
      >
        <div className="w-px h-16 bg-[oklch(20%_0.01_230)] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-primary animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
