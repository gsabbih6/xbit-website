'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Technologies Mastered' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support' },
];

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedNumber({
  value,
  suffix,
  trigger,
}: {
  value: number;
  suffix: string;
  trigger: boolean;
}) {
  const [displayed, setDisplayed] = useState(0);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  }, []);

  useEffect(() => {
    if (!trigger) return;

    if (prefersReduced.current) {
      setDisplayed(value);
      return;
    }

    const duration = 1500;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      setDisplayed(Math.round(easedProgress * value));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [trigger, value]);

  return (
    <span className="tabular-nums">
      {displayed}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-brand-dark py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-20">
          {/* Left: section title */}
          <div className="lg:w-1/3 shrink-0">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-primary mb-3 block">
              Our Impact
            </span>
            <h2
              className="font-display font-bold text-[oklch(92%_0.01_230)] leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3rem)' }}
            >
              By the Numbers
            </h2>
          </div>

          {/* Right: stats row */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl md:text-6xl font-bold text-brand-primary mb-2 leading-none">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    trigger={visible}
                  />
                </div>
                <span className="text-sm uppercase tracking-[0.1em] text-[oklch(55%_0.01_230)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
