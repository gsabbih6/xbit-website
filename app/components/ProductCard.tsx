import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imageSrc: string;
  href: string;
  badge?: string;
  ctaText?: string;
}

export default function ProductCard({
  name,
  tagline,
  description,
  features,
  imageSrc,
  href,
  badge,
  ctaText = 'Learn More',
}: ProductCardProps) {
  const domain = href.startsWith('http') 
    ? href.replace('https://', '').replace('http://', '').split('/')[0] 
    : href.startsWith('/') 
      ? 'xbitinnovations.com'
      : `${name.toLowerCase()}.it`;

  return (
    <div className="dark-card-hover rounded-2xl border border-[oklch(20%_0.02_230)] bg-brand-dark-surface overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image side with Browser Mockup */}
        <div className="relative p-6 md:p-8 lg:p-10 flex items-center justify-center bg-[oklch(12%_0.01_230)] overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -inset-10 opacity-20 bg-[radial-gradient(circle_at_center,oklch(72%_0.14_180)_0%,transparent_60%)] pointer-events-none" />
          
          {/* Browser Window Wrapper */}
          <div className="w-full relative rounded-xl border border-white/[0.08] bg-brand-dark shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.7)]">
            {/* Header */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[oklch(15%_0.015_230)] border-b border-white/[0.05]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <div className="flex-1 max-w-[180px] mx-auto bg-[oklch(10%_0.01_230)] text-[oklch(50%_0.01_230)] text-[10px] py-1 rounded text-center truncate font-mono border border-white/[0.02]">
                {domain}
              </div>
            </div>
            {/* Image container with fixed aspect ratio */}
            <div className="relative w-full aspect-[16/10] bg-[oklch(8%_0.01_230)]">
              <Image
                src={imageSrc}
                alt={`${name} dashboard preview`}
                fill
                className="object-contain object-top opacity-95 transition-opacity duration-300 group-hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          {badge && (
            <span className="inline-flex items-center self-start gap-1.5 text-xs uppercase tracking-[0.15em] text-brand-primary font-semibold mb-4 bg-brand-primary/10 px-3 py-1.5 rounded-full">
              <span
                className="w-1.5 h-1.5 rounded-full bg-brand-primary"
                aria-hidden="true"
              />
              {badge}
            </span>
          )}

          <h3 className="font-display text-2xl md:text-3xl font-bold text-[oklch(95%_0.005_230)] mb-1">
            {name}
          </h3>
          <p className="text-brand-primary font-medium text-sm mb-5">
            {tagline}
          </p>
          <p className="text-[oklch(60%_0.01_230)] text-sm leading-relaxed mb-8 max-w-md">
            {description}
          </p>

          {/* Feature list — 2 columns */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-[oklch(70%_0.01_230)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 mt-0.5 text-brand-primary"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={href}
            className="btn-primary self-start inline-flex items-center gap-2 bg-brand-primary text-brand-dark font-semibold h-12 px-8 rounded-lg text-sm"
          >
            {ctaText}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
