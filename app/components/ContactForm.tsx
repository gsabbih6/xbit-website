'use client';

import { useState, type FormEvent, useEffect } from 'react';

const SERVICE_OPTIONS = [
  { id: 'Custom Software Development', icon: '💻', desc: 'End-to-end product engineering' },
  { id: 'IT Consulting & Strategy', icon: '🧠', desc: 'Technology roadmaps & audits' },
  { id: 'Cloud Solutions', icon: '☁️', desc: 'Migration, optimization & DevOps' },
  { id: 'Blockchain & FinTech', icon: '⛓️', desc: 'DeFi protocols & smart contracts' },
  { id: 'Cybersecurity', icon: '🔒', desc: 'Audits & proactive protection' },
  { id: 'Mobile Development', icon: '📱', desc: 'Native & cross-platform apps' },
  { id: 'Staff Augmentation', icon: '👥', desc: 'Embedded senior engineers' },
  { id: 'Other', icon: '✨', desc: 'Something else entirely' },
];

const BUDGET_OPTIONS = [
  'Under $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K - $100K',
  '$100K+',
  'Not Sure',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const INITIAL: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

export default function ContactForm() {
  const [step, setStep] = useState<number>(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Scroll to top of form when step changes on mobile
  useEffect(() => {
    if (step > 1) {
      const formEl = document.getElementById('contact-flow');
      if (formEl) {
        const y = formEl.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [step]);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSubmitError('');
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validateStep(currentStep: number): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (currentStep === 1) {
      if (!form.service) newErrors.service = 'Please select a primary focus to continue.';
    }
    
    if (currentStep === 2) {
      if (!form.budget) newErrors.budget = 'Please select an estimated budget.';
      if (!form.message.trim()) newErrors.message = 'Please share some details about your project.';
    }
    
    if (currentStep === 3) {
      if (!form.name.trim()) newErrors.name = 'Please enter your full name.';
      if (!form.email.trim()) {
        newErrors.email = 'Please enter a work email.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = 'Please enter a valid work email.';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    return true;
  }

  function handleNext() {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    setStep((s) => Math.max(1, s - 1));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setSubmitError('');
    

    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'contact-project-brief',
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

      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'There was a network error. Please try again or email us directly.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center text-center py-20 bg-[oklch(12%_0.01_230)] border border-[oklch(20%_0.015_230)] rounded-2xl">
        <div className="w-16 h-16 rounded-full border-2 border-brand-primary flex items-center justify-center mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="text-brand-primary"
          >
            <path
              d="M8 17L13.5 22.5L24 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="30"
              strokeDashoffset="30"
              style={{
                animation: 'check-draw 0.5s cubic-bezier(0.25, 1, 0.5, 1) 0.2s forwards',
              }}
            />
          </svg>
        </div>
        <h3 className="font-display text-3xl font-bold text-[oklch(95%_0.01_230)] mb-3">
          Message sent.
        </h3>
        <p className="text-[oklch(60%_0.01_230)] text-base max-w-sm">
          We&apos;ve received your project details. Our engineering team will review them and reach out within 1 business day.
        </p>
      </div>
    );
  }

  const inputBase =
    'w-full bg-[oklch(10%_0.01_230)] border rounded-xl px-4 py-3.5 text-base text-[oklch(90%_0.01_230)] placeholder:text-[oklch(40%_0.01_230)] outline-none transition-all duration-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 shadow-inner shadow-black/20';
  const inputBorder = (field: keyof FormData) =>
    errors[field] ? 'border-red-500/70' : 'border-[oklch(22%_0.01_230)] hover:border-[oklch(30%_0.01_230)]';

  return (
    <div id="contact-flow" className="w-full bg-[oklch(12%_0.01_230)] border border-[oklch(20%_0.015_230)] rounded-2xl p-6 md:p-10 shadow-2xl">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                  step === i
                    ? 'bg-brand-primary text-brand-dark ring-4 ring-brand-primary/20'
                    : step > i
                    ? 'bg-[oklch(30%_0.01_230)] text-white'
                    : 'bg-[oklch(18%_0.01_230)] text-[oklch(40%_0.01_230)]'
                }`}
              >
                {step > i ? '✓' : i}
              </div>
              {i < 3 && (
                <div
                  className={`w-6 md:w-12 h-px transition-colors duration-500 ${
                    step > i ? 'bg-[oklch(30%_0.01_230)]' : 'bg-[oklch(18%_0.01_230)]'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <span className="text-[oklch(50%_0.01_230)] text-sm font-medium hidden md:block">
          Step {step} of 3
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* STEP 1: The Goal */}
        <div className={`transition-all duration-500 ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[oklch(95%_0.01_230)] mb-2">
            What are you looking to achieve?
          </h2>
          <p className="text-[oklch(60%_0.01_230)] mb-8">
            Select the primary focus of your project so we can route you to the right technical lead.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICE_OPTIONS.map((opt) => {
              const isSelected = form.service === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    update('service', opt.id);
                    setErrors({}); // clear error
                  }}
                  className={`text-left flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? 'bg-brand-primary/10 border-brand-primary shadow-[0_0_15px_rgba(30,195,179,0.1)]'
                      : 'bg-[oklch(10%_0.01_230)] border-[oklch(22%_0.01_230)] hover:border-[oklch(35%_0.01_230)] hover:bg-[oklch(14%_0.01_230)]'
                  }`}
                >
                  <span className="text-2xl mt-0.5" aria-hidden="true">{opt.icon}</span>
                  <div>
                    <span className={`block font-semibold mb-1 ${isSelected ? 'text-brand-primary' : 'text-[oklch(90%_0.01_230)]'}`}>
                      {opt.id}
                    </span>
                    <span className="block text-xs text-[oklch(55%_0.01_230)]">
                      {opt.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          {errors.service && (
            <p className="text-red-400 text-sm mt-4 font-medium" role="alert">{errors.service}</p>
          )}

          <div className="mt-10 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary inline-flex items-center justify-center bg-brand-primary text-brand-dark font-semibold h-12 px-8 rounded-lg text-sm transition-transform active:scale-95"
            >
              Continue
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* STEP 2: The Details */}
        <div className={`transition-all duration-500 ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[oklch(95%_0.01_230)] mb-2">
            Tell us about your project
          </h2>
          <p className="text-[oklch(60%_0.01_230)] mb-8">
            Provide a brief overview of your goals, timeline, and any specific technical requirements.
          </p>

          <div className="space-y-6">
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[oklch(75%_0.01_230)] mb-2">
                Project Overview <span className="text-red-400">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                aria-invalid={!!errors.message}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className={`${inputBase} ${inputBorder('message')} resize-none`}
                placeholder="We are looking to build..."
              />
              {errors.message && <p className="text-red-400 text-sm mt-2 font-medium" role="alert">{errors.message}</p>}
            </div>

            <div>
              <label htmlFor="contact-budget" className="block text-sm font-medium text-[oklch(75%_0.01_230)] mb-2">
                Estimated Budget <span className="text-red-400">*</span>
              </label>
              <select
                id="contact-budget"
                value={form.budget}
                onChange={(e) => update('budget', e.target.value)}
                className={`${inputBase} ${inputBorder('budget')} appearance-none cursor-pointer`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23888' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                }}
              >
                <option value="">Select an estimate</option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.budget && <p className="text-red-400 text-sm mt-2 font-medium" role="alert">{errors.budget}</p>}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-[oklch(20%_0.01_230)] pt-6">
            <button
              type="button"
              onClick={handleBack}
              className="text-[oklch(70%_0.01_230)] hover:text-white font-medium text-sm inline-flex items-center transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary inline-flex items-center justify-center bg-brand-primary text-brand-dark font-semibold h-12 px-8 rounded-lg text-sm transition-transform active:scale-95"
            >
              Continue
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* STEP 3: Contact Info */}
        <div className={`transition-all duration-500 ${step === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[oklch(95%_0.01_230)] mb-2">
            Who are we speaking with?
          </h2>
          <p className="text-[oklch(60%_0.01_230)] mb-8">
            Almost done. We just need a few details to get in touch.
          </p>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[oklch(75%_0.01_230)] mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  aria-invalid={!!errors.name}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={`${inputBase} ${inputBorder('name')}`}
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="text-red-400 text-sm mt-2 font-medium" role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[oklch(75%_0.01_230)] mb-2">
                  Work Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  aria-invalid={!!errors.email}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={`${inputBase} ${inputBorder('email')}`}
                  placeholder="jane@company.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-2 font-medium" role="alert">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-[oklch(75%_0.01_230)] mb-2">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={`${inputBase} ${inputBorder('phone')}`}
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="block text-sm font-medium text-[oklch(75%_0.01_230)] mb-2">
                  Company
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  className={`${inputBase} ${inputBorder('company')}`}
                  placeholder="Acme Corp"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-[oklch(20%_0.01_230)] pt-6">
            <button
              type="button"
              onClick={handleBack}
              className="text-[oklch(70%_0.01_230)] hover:text-white font-medium text-sm inline-flex items-center transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary inline-flex items-center justify-center bg-brand-primary text-brand-dark font-semibold h-12 px-8 rounded-lg text-sm transition-all active:scale-95 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-brand-dark" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit Request'
              )}
            </button>
          </div>
          {submitError && (
            <p className="text-red-300 text-sm mt-5" role="alert">
              {submitError}{' '}
              <a href="mailto:info@xbitinnovations.com" className="underline hover:text-white">
                Email us directly.
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
