import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative bg-[#050505] py-32 md:py-48 overflow-hidden border-t border-[oklch(20%_0.01_230)]">
      {/* Background Engineering Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.373 55H0v-1h54V0h.627zM60 55H55v5h-1v-5H0v-1h54V0h1v54h5v1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Structural Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-[oklch(20%_0.01_230)] opacity-50" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-[oklch(20%_0.01_230)] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8 font-mono text-xs text-brand-primary uppercase tracking-widest">
            <span className="block w-2 h-2 bg-brand-primary" />
            <span>PROJECT_INITIALIZATION</span>
          </div>
          <h2
            className="font-display font-bold text-white leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(3rem, 6vw + 1rem, 5rem)', letterSpacing: '-0.02em' }}
          >
            Ready to Build <br />
            <span className="text-[oklch(40%_0.01_230)]">Something Real?</span>
          </h2>
          <p className="text-[oklch(60%_0.01_230)] text-xl leading-relaxed max-w-lg mb-10">
            Stop waiting on bloated agencies. We deploy senior engineering teams that ship production-ready systems in weeks, not months.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-brand-primary text-brand-dark font-bold h-14 px-8 text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-white"
            >
              <span className="relative z-10 flex items-center gap-2">
                Deploy Your Team <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Decorative Data Visual */}
        <div className="hidden md:flex justify-end opacity-60">
           <div className="border border-[oklch(20%_0.01_230)] bg-brand-dark p-8 font-mono text-xs text-[oklch(50%_0.01_230)] w-full max-w-md">
              <div className="mb-4 text-brand-primary border-b border-[oklch(20%_0.01_230)] pb-2">SYSTEM_REQUIREMENTS</div>
              <ul className="space-y-3">
                <li className="flex justify-between"><span>ARCHITECTURE</span> <span className="text-white">SCALABLE</span></li>
                <li className="flex justify-between"><span>SECURITY</span> <span className="text-white">ENTERPRISE</span></li>
                <li className="flex justify-between"><span>PERFORMANCE</span> <span className="text-white">OPTIMIZED</span></li>
                <li className="flex justify-between border-t border-[oklch(20%_0.01_230)] pt-3 mt-3"><span>STATUS</span> <span className="text-brand-primary blink">AWAITING_INPUT</span></li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}
