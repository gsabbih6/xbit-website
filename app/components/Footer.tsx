import Link from 'next/link';
import Image from 'next/image';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/contact', label: 'Contact' },
];

const SERVICES = [
  'Custom Software',
  'IT Consulting',
  'Cloud Solutions',
  'Blockchain',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-surface border-t border-[oklch(20%_0.01_230)]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Asymmetric grid: large left + 3 smaller right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Company info — spans 5 cols */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <Image
                src="/xbitinnovations-logo.png"
                alt="Xbit Innovations Logo"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
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
            <p className="text-[oklch(55%_0.01_230)] text-sm leading-relaxed max-w-sm mb-6">
              Building forward-thinking software solutions and providing expert IT
              consulting to businesses ready to scale with technology.
            </p>
            <p className="text-[oklch(40%_0.01_230)] text-xs">
              &copy; {year} Xbit Innovations. All rights reserved.
            </p>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[oklch(55%_0.01_230)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[oklch(65%_0.01_230)] hover:text-brand-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 2 cols */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[oklch(55%_0.01_230)] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-[oklch(65%_0.01_230)] hover:text-brand-primary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[oklch(55%_0.01_230)] mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@xbitinnovations.com"
                  className="text-sm text-[oklch(65%_0.01_230)] hover:text-brand-primary transition-colors duration-200"
                >
                  info@xbitinnovations.com
                </a>
              </li>
              <li>
                <a
                  href="tel:4794129908"
                  className="text-sm text-[oklch(65%_0.01_230)] hover:text-brand-primary transition-colors duration-200"
                >
                  (479) 412-9908
                </a>
              </li>
              <li className="text-sm text-[oklch(55%_0.01_230)]">
                Arkansas, USA
              </li>
              <li className="flex items-center gap-4 pt-2">
                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-[oklch(50%_0.01_230)] hover:text-brand-primary transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-[oklch(50%_0.01_230)] hover:text-brand-primary transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a
                  href="#"
                  aria-label="GitHub"
                  className="text-[oklch(50%_0.01_230)] hover:text-brand-primary transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[oklch(16%_0.01_230)]">
          <p className="text-[oklch(35%_0.01_230)] text-xs">
            Xbit Innovations LLC &middot; Built with purpose in the Natural State.
          </p>
        </div>
      </div>
    </footer>
  );
}
