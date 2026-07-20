'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const PROJECT_TYPES = [
  'Build a new product',
  'Fix or modernize a system',
  'Add AI or automation',
  'Need an engineering team',
  'Not sure yet',
];

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
  website: string;
};

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  service: '',
  message: '',
  website: '',
};

export default function LeadCaptureForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === 'error') {
      setStatus('idle');
      setError('');
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.service || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      setError('Please add your name, a valid email, and the closest project type.');
      return;
    }

    setStatus('submitting');
    setError('');

    const params = new URLSearchParams(window.location.search);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'homepage-build-plan',
          pageUrl: window.location.href,
          referrer: document.referrer,
          utmSource: params.get('utm_source') ?? '',
          utmMedium: params.get('utm_medium') ?? '',
          utmCampaign: params.get('utm_campaign') ?? '',
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your request.');
      }

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (submissionError) {
      setStatus('error');
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'We could not send your request. Please try again.',
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[430px] flex flex-col justify-center" role="status" aria-live="polite">
        <span className="w-12 h-12 border border-brand-primary flex items-center justify-center text-brand-primary mb-7">
          <Check className="w-6 h-6" aria-hidden="true" />
        </span>
        <p className="font-mono text-xs text-brand-primary uppercase tracking-[0.18em] mb-4">
          Request received
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          Your build plan is in the queue.
        </h3>
        <p className="text-[oklch(68%_0.01_230)] leading-relaxed max-w-md">
          We&apos;ll review the request and reply within one business day with useful next steps—not a canned sales sequence.
        </p>
      </div>
    );
  }

  const fieldClass =
    'w-full h-12 bg-[oklch(9%_0.01_230)] border border-[oklch(24%_0.015_230)] px-4 text-sm text-white placeholder:text-[oklch(43%_0.01_230)] transition-colors hover:border-[oklch(34%_0.02_230)] focus:border-brand-primary outline-none';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-name" className="block text-xs font-semibold text-[oklch(72%_0.01_230)] mb-2">
            Your name
          </label>
          <input
            id="lead-name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            className={fieldClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="block text-xs font-semibold text-[oklch(72%_0.01_230)] mb-2">
            Work email
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            className={fieldClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-service" className="block text-xs font-semibold text-[oklch(72%_0.01_230)] mb-2">
          What do you need?
        </label>
        <select
          id="lead-service"
          name="service"
          required
          value={form.service}
          onChange={(event) => update('service', event.target.value)}
          className={`${fieldClass} appearance-none cursor-pointer`}
        >
          <option value="">Choose the closest match</option>
          {PROJECT_TYPES.map((projectType) => (
            <option key={projectType} value={projectType}>
              {projectType}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lead-message" className="block text-xs font-semibold text-[oklch(72%_0.01_230)] mb-2">
          One sentence about the project <span className="font-normal text-[oklch(48%_0.01_230)]">(optional)</span>
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          className={`${fieldClass} h-auto py-3 resize-none`}
          placeholder="We need to replace our manual operations workflow..."
        />
      </div>

      <div className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="lead-website">Website</label>
        <input
          id="lead-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => update('website', event.target.value)}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-300" role="alert">
          {error}{' '}
          <a className="underline hover:text-white" href="mailto:info@xbitinnovations.com">
            Email us directly.
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full h-14 bg-brand-primary text-brand-dark font-bold text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending request…' : 'Get My Free Build Plan'}
        {status !== 'submitting' && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
      </button>

      <p className="text-[11px] text-[oklch(48%_0.01_230)] leading-relaxed">
        No mailing list. No obligation. A technical lead reviews every request.
      </p>
    </form>
  );
}
