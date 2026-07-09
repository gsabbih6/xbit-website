'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import Scheduler from './Scheduler';

export default function ContactPane() {
  const [activeTab, setActiveTab] = useState<'message' | 'calendar'>('message');

  return (
    <div className="bg-brand-dark-surface border border-[oklch(18%_0.01_230)] rounded-2xl p-8 md:p-10 flex flex-col">
      {/* Switcher Tabs */}
      <div className="flex border-b border-white/[0.05] pb-5 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab('message')}
          className={`flex-1 text-center pb-2 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
            activeTab === 'message'
              ? 'border-brand-primary text-brand-primary'
              : 'border-transparent text-[oklch(55%_0.01_230)] hover:text-[oklch(80%_0.01_230)]'
          }`}
        >
          Send a Message
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('calendar')}
          className={`flex-1 text-center pb-2 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
            activeTab === 'calendar'
              ? 'border-brand-primary text-brand-primary'
              : 'border-transparent text-[oklch(55%_0.01_230)] hover:text-[oklch(80%_0.01_230)]'
          }`}
        >
          Schedule a Call
        </button>
      </div>

      {/* Pane Content */}
      <div className="flex-1">
        {activeTab === 'message' ? <ContactForm /> : <Scheduler />}
      </div>
    </div>
  );
}
