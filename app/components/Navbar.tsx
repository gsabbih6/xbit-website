'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/#products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/xbitinnovations-logo.png"
              alt="Xbit Innovations Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <div className="flex items-baseline gap-0.5">
              <span className="font-display font-bold text-[oklch(92%_0.01_230)]">
                Xbit
              </span>
              <span className="font-display font-light text-brand-primary">
                Innovations
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={isActive}
                  className={`link-underline text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-primary'
                      : 'text-[oklch(65%_0.01_230)] hover:text-[oklch(85%_0.01_230)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center bg-brand-primary text-brand-dark font-semibold text-sm h-10 px-6 rounded-lg btn-primary"
          >
            Get in Touch
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] bg-[oklch(85%_0.01_230)] transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
              />
              <span
                className={`block h-[1.5px] bg-[oklch(85%_0.01_230)] transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
              />
              <span
                className={`block h-[1.5px] bg-[oklch(85%_0.01_230)] transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col pt-[72px]">
          <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center px-8">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`animate-menu-item block py-4 text-3xl font-display font-medium border-b border-[oklch(18%_0.01_230)] ${
                    isActive ? 'text-brand-primary' : 'text-[oklch(85%_0.01_230)]'
                  }`}
                  style={{ '--i': i } as React.CSSProperties}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="animate-menu-item mt-8 inline-flex items-center justify-center bg-brand-primary text-brand-dark font-semibold h-12 px-8 rounded-lg btn-primary self-start"
              style={{ '--i': NAV_LINKS.length } as React.CSSProperties}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
