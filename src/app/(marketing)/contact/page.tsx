'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please provide a valid professional email.' }),
  organisation: z.string().optional(),
  message: z.string().min(10, { message: 'Message context must be at least 10 characters.' }),
  _gotcha: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

// Use environment variable for Formspree
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    if (!FORMSPREE_ENDPOINT) {
      setFormStatus('error')
      setErrorMessage('Form configuration missing. Please email us directly at hello@websoul.com.au')
      return
    }

    setFormStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      
      if (response.ok) {
        setFormStatus('success')
        reset()
      } else {
        const result = await response.json()
        throw new Error(result.error || 'Form submission failed')
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Unable to send message. Please email us directly at hello@websoul.com.au'
      )
    }
  }

  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate/60 px-1">Enquiries</span>
            </div>
            <h1 className="text-h1 font-display font-bold mb-4 text-ink">Contact the Consultancy.</h1>
            <p className="text-body-lg text-slate lg:max-w-xl">
              Ready to discuss how Websoul Digital can support your mission? We provide the specialized capacity required to navigate secure transitions and trusted capability uplift.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-h3 font-display font-bold mb-8 text-ink">Send a Message</h2>
              
              {formStatus === 'success' && (
                <div className="mb-8 p-10 bg-paper border border-ink/10 rounded-3xl animate-fade-in shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <CheckCircle className="w-6 h-6 text-ink flex-shrink-0" />
                    <div>
                      <p className="font-bold text-ink">Inquiry received.</p>
                      <p className="text-sm text-slate mt-1 leading-relaxed">
                        Thank you for reaching out. A consultant will respond within 1–2 business days.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t border-silver">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate">Next Steps</p>
                    <div className="grid gap-3">
                      <Link href="/capability-statement" className="text-xs font-bold text-ink hover:underline">Download Capability Statement →</Link>
                      <Link href="/case-studies" className="text-xs font-bold text-ink hover:underline">Review Case Studies →</Link>
                      <a href="mailto:hello@websoul.com.au" className="text-xs font-bold text-ink hover:underline">Email Urgent Inquiries →</a>
                    </div>
                  </div>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-8 p-6 bg-paper border border-red-500/10 rounded-2xl flex items-start gap-4 animate-fade-in">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-red-800">Inquiry Error</p>
                    <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              {formStatus !== 'success' && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate block px-1">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        placeholder="e.g. Alex Smith"
                        className={`w-full px-5 py-4 border ${errors.name ? 'border-red-500' : 'border-silver'} rounded-2xl bg-mist/30 text-ink focus:outline-none focus:ring-2 focus:ring-ink/5 focus:border-ink transition-all placeholder:text-slate/40`}
                      />
                      {errors.name && <p className="text-[10px] font-bold text-red-600 px-1">{errors.name.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate block px-1">
                        Professional Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        placeholder="alex@organisation.gov.au"
                        className={`w-full px-5 py-4 border ${errors.email ? 'border-red-500' : 'border-silver'} rounded-2xl bg-mist/30 text-ink focus:outline-none focus:ring-2 focus:ring-ink/5 focus:border-ink transition-all placeholder:text-slate/40`}
                      />
                      {errors.email && <p className="text-[10px] font-bold text-red-600 px-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="organisation" className="text-[10px] font-bold uppercase tracking-widest text-slate block px-1">
                      Organisation (Optional)
                    </label>
                    <input
                      {...register('organisation')}
                      type="text"
                      id="organisation"
                      placeholder="Company or Government Agency"
                      className="w-full px-5 py-4 border border-silver rounded-2xl bg-mist/30 text-ink focus:outline-none focus:ring-2 focus:ring-ink/5 focus:border-ink transition-all placeholder:text-slate/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate block px-1">
                      Message Context *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      placeholder="Tell us about your requirements..."
                      className={`w-full px-5 py-4 border ${errors.message ? 'border-red-500' : 'border-silver'} rounded-2xl bg-mist/30 text-ink focus:outline-none focus:ring-2 focus:ring-ink/5 focus:border-ink transition-all placeholder:text-slate/40 resize-none`}
                    />
                    {errors.message && <p className="text-[10px] font-bold text-red-600 px-1">{errors.message.message}</p>}
                  </div>
                  
                  {/* Honeypot field */}
                  <input {...register('_gotcha')} type="text" style={{ display: 'none' }} />
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-auto h-14 px-10 text-xs tracking-widest font-bold uppercase"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : 'Submit Inquiry'}
                  </Button>
                  
                  <p className="text-[10px] font-medium text-slate/60 text-center md:text-left">
                    By submitting, you acknowledge that your information will be handled in accordance with our <Link href="/privacy" className="text-ink underline underline-offset-4">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="lg:pt-16">
              <div className="bg-mist/30 border border-silver rounded-3xl p-10 lg:p-12">
                <h2 className="text-h3 font-display font-bold mb-8 text-ink">Connect Directly</h2>
                
                <div className="space-y-10 mb-12">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-paper border border-silver flex items-center justify-center transition-colors group-hover:border-ink/10">
                      <Mail className="w-5 h-5 text-ink" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate mb-1">Email Protocol</h3>
                      <a href="mailto:hello@websoul.com.au" className="text-lg font-medium text-ink hover:text-slate transition-colors">
                        hello@websoul.com.au
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-paper border border-silver flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-ink" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate mb-1">Location</h3>
                      <p className="text-lg font-medium text-ink">Canberra, Australian Capital Territory</p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-silver">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Operations</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm py-1 border-b border-silver/50">
                      <span className="text-slate">Business Hours</span>
                      <span className="text-ink font-medium">09:00 - 17:30 AEST</span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-1">
                      <span className="text-slate">Response SLA</span>
                      <span className="text-ink font-medium">Within 2 Business Days</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 px-6">
                <p className="text-xs text-slate italic leading-relaxed">
                  Websoul Digital operates with a secure-by-design mindset. For sensitive technical enquiries, please request a secure transmission channel in your initial message.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}


