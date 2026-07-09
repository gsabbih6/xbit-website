'use client';

import { useState } from 'react';

export default function Scheduler() {
  const [loading, setLoading] = useState(true);

  // Calendly widget URL customized with brand colors
  // Primary color: 2dd4bf (Teal brand accent)
  // Background color: 0c0d12 (Dark card surface brand-dark-surface)
  // Text color: e5e7eb (Light grey text)
  const calendlyUrl = 
    'https://calendly.com/godfred-sabbih-xbitinnovations/30min' +
    '?hide_landing_page_details=1' +
    '&hide_gdpr_banner=1' +
    '&background_color=0c0d12' +
    '&text_color=e5e7eb' +
    '&primary_color=2dd4bf';

  return (
    <div className="relative w-full h-[580px] bg-brand-dark-surface rounded-xl overflow-hidden">
      {/* Loading state spinner */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-dark-surface z-10">
          <div className="w-10 h-10 border-2 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin mb-4" />
          <span className="text-xs text-[oklch(55%_0.01_230)] uppercase tracking-wider font-semibold">
            Loading Calendar...
          </span>
        </div>
      )}

      {/* Calendly Inline Embed */}
      <iframe
        src={calendlyUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule a Call"
        onLoad={() => setLoading(false)}
        className="w-full h-full border-none rounded-xl"
        allow="geolocation; microphone; camera; midi; encrypted-media;"
      />
    </div>
  );
}
