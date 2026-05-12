"use client";

import React, { useState } from 'react';
import { contactSchema } from '@/lib/validations/contact';

export default function ContactForm() {
  const [status, setStatus] = useState<null | 'success' | 'submitting' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    serviceType: "General Enquiry"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    try {
      // Map "General Enquiry" to "Other" for schema compatibility if needed
      const payload = {
        ...formData,
        serviceType: formData.serviceType === "General Enquiry" ? "Other" : formData.serviceType
      };

      // Validate on client first
      const validated = contactSchema.parse(payload);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validated),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    // Map 'organisation' to 'company' as needed by schema
    const fieldId = id === 'organisation' ? 'company' : id === 'capability' ? 'serviceType' : id;
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-surface border border-slate-200 p-12 md:p-16 text-center">
        <div className="w-16 h-16 bg-brand-midnight text-white flex items-center justify-center mx-auto mb-10">
          <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45 -translate-y-1"></div>
        </div>
        <h3 className="text-2xl font-space font-medium text-brand-midnight mb-6 tracking-tight">Enquiry Received</h3>
        <p className="text-slate-500 font-sans font-light text-sm max-w-sm mx-auto mb-8">
          Your enquiry has been successfully transmitted. Our team will review the brief and contact you shortly via your professional email.
        </p>
        <button 
          onClick={() => {
            setStatus(null);
            setFormData({ name: "", email: "", company: "", message: "", serviceType: "General Enquiry" });
          }} 
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-brand-midnight transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 group" id="contact-form">
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest">
          {errorMessage}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            value={formData.name}
            onChange={handleChange}
            placeholder="John Citizen"
            className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all font-sans"
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="organisation" className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Organisation</label>
          <input 
            type="text" 
            id="organisation" 
            required 
            value={formData.company}
            onChange={handleChange}
            placeholder="Agency or Firm"
            className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all font-sans"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Professional Email</label>
          <input 
            type="email" 
            id="email" 
            required 
            value={formData.email}
            onChange={handleChange}
            placeholder="name@org.gov.au"
            className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all font-sans"
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="capability" className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Service Interest</label>
          <select 
            id="capability" 
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all appearance-none cursor-pointer font-sans"
          >
            <option>General Enquiry</option>
            <option>Trust Services</option>
            <option>Digital Consultancy</option>
            <option>DISP Advisory</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Enquiry Brief</label>
        <textarea 
          id="message" 
          rows={6} 
          required 
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your operational requirement..."
          className="w-full bg-slate-50 border border-slate-200 px-6 py-4 text-sm font-light focus:outline-none focus:border-brand-midnight focus:bg-white transition-all resize-none font-sans"
        ></textarea>
      </div>

      <div className="pt-6">
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="btn-primary w-full md:w-auto !px-16 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Processing...' : 'Submit Engagement Request'}
        </button>
        <p className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-tight font-sans">
          Information provided via this form is handled in accordance with our secure privacy protocols.
        </p>
      </div>
    </form>
  );
}
