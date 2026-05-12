"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<null | 'success' | 'submitting'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    // Note: In production, this would connect to an API endpoint
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-surface border border-slate-200 p-16 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-brand-midnight text-white flex items-center justify-center mx-auto mb-10">
          <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45 -translate-y-1"></div>
        </div>
        <h3 className="text-2xl font-black text-brand-midnight mb-6 uppercase tracking-tight">Enquiry Received</h3>
        <p className="text-slate-500 font-light text-sm max-w-sm mx-auto mb-8">
          Your engagement request has been logged. Our strategy team will review and respond via your registered secure contact method.
        </p>
        <button 
          onClick={() => setStatus(null)} 
          className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-brand-midnight transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 group" id="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-black text-slate-400">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            placeholder="John Citizen"
            className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all"
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="organisation" className="text-[10px] uppercase tracking-widest font-black text-slate-400">Organisation</label>
          <input 
            type="text" 
            id="organisation" 
            required 
            placeholder="Agency or Firm"
            className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-black text-slate-400">Professional Email</label>
          <input 
            type="email" 
            id="email" 
            required 
            placeholder="name@org.gov.au"
            className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all"
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="capability" className="text-[10px] uppercase tracking-widest font-black text-slate-400">Service Interest</label>
          <select 
            id="capability" 
            className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all appearance-none cursor-pointer"
          >
            <option>Trust Services</option>
            <option>Digital Consultancy</option>
            <option>DISP Advisory</option>
            <option>General Enquiry</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-black text-slate-400">Enquiry Brief</label>
        <textarea 
          id="message" 
          rows={6} 
          required 
          placeholder="Describe your operational requirement..."
          className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all resize-none"
        ></textarea>
      </div>

      <div className="pt-6">
        <button type="submit" className="btn-primary w-full md:w-auto !px-16">
          Submit Engagement Request
        </button>
        <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-tight">
          Information provided via this form is handled in accordance with our secure privacy protocols.
        </p>
      </div>
    </form>
  );
}
