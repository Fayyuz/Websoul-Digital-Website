'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrors({})
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    
    // Client-side validation
    const newErrors: Record<string, string> = {}
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Full Name is required (minimum 2 characters)'
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'A valid email address is required'
    }
    if (!message || message.trim().length < 5) {
      newErrors.message = 'Message is required (minimum 5 characters)'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus('idle')
      return
    }
    
    try {
      const response = await fetch('https://formspree.io/f/mdabjgjq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setStatus('success')
        const form = e.target as HTMLFormElement
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
    }
  }

  return (
    <main className="animate-fade-in">
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-bold mb-6 text-ink">Talk to us.</h1>
            <p className="text-body-lg text-slate lg:max-w-xl">
              Start a trusted delivery conversation about secure digital transformation, 
              workforce trust pathways, or DISP readiness.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 md:p-12 text-center" role="status">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-h3 font-display font-bold text-ink mb-4">Message sent.</h2>
                  <p className="text-slate mb-8 leading-relaxed">
                    Thank you for reaching out. A Websoul Digital specialist will review 
                    your inquiry and respond within 1–2 business days.
                  </p>
                  <Button onClick={() => setStatus('idle')} variant="secondary">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot field - hidden from users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this if you are human</label>
                    <input type="text" id="hp_field" name="_gotcha" tabIndex={-1} autoComplete="off" />
                  </div>

                  <input type="hidden" name="_subject" value="New Contact from Websoul Digital" />

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-base font-semibold text-ink">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-mist border border-silver rounded-lg focus:ring-2 focus:ring-ink focus:border-ink transition-all text-base"
                        placeholder="e.g. John Smith"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-base text-red-600 flex items-center gap-1 mt-1" role="alert">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-base font-semibold text-ink">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-mist border border-silver rounded-lg focus:ring-2 focus:ring-ink focus:border-ink transition-all text-base"
                        placeholder="john@organisation.com.au"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-base text-red-600 flex items-center gap-1 mt-1" role="alert">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organisation" className="text-base font-semibold text-ink">
                      Organisation (Optional)
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      className="w-full px-4 py-3 bg-mist border border-silver rounded-lg focus:ring-2 focus:ring-ink focus:border-ink transition-all text-base"
                      placeholder="Your department or company"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-base font-semibold text-ink">
                      Primary Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-mist border border-silver rounded-lg focus:ring-2 focus:ring-ink focus:border-ink transition-all text-base appearance-none"
                    >
                      <option value="trust-services">Trust Services</option>
                      <option value="digital-consultancy">Digital Consultancy</option>
                      <option value="disp-advisory">DISP Advisory</option>
                      <option value="other">Other / Mixed Requirement</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-base font-semibold text-ink">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-mist border border-silver rounded-lg focus:ring-2 focus:ring-ink focus:border-ink transition-all text-base resize-none"
                      placeholder="Briefly describe your requirement..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-base text-red-600 flex items-center gap-1 mt-1" role="alert">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full md:w-auto px-12 h-14 text-base font-bold uppercase tracking-widest"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                    
                    {status === 'error' && (
                      <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-base flex items-center gap-3" role="alert">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p>Something went wrong with the submission. Please try again or email hello@websoul.com.au directly.</p>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 lg:pl-12">
              <div className="space-y-12">
                <div>
                  <h2 className="text-h4 font-display font-bold text-ink mb-4">Canberra HQ</h2>
                  <address className="not-italic text-base text-slate space-y-1">
                    <p>Websoul Digital Pty Ltd</p>
                    <p>National Circuit, Barton</p>
                    <p>Canberra, ACT 2600</p>
                    <p className="pt-2">Australia</p>
                  </address>
                </div>

                <div>
                  <h2 className="text-h4 font-display font-bold text-ink mb-4">Direct Contact</h2>
                  <div className="space-y-3">
                    <a 
                      href="mailto:hello@websoul.com.au" 
                      className="block text-base text-ink font-semibold hover:text-slate transition-colors"
                    >
                      hello@websoul.com.au
                    </a>
                  </div>
                </div>

                <div className="p-8 bg-mist rounded-3xl border border-silver/50">
                  <h2 className="text-h4 font-display font-bold text-ink mb-4">Why talk to us?</h2>
                  <ul className="space-y-4 text-base text-slate">
                    <li className="flex gap-4">
                      <span className="font-bold text-ink shrink-0">01</span>
                      <p>Practical advisors who understand Australian government delivery contexts.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-ink shrink-0">02</span>
                      <p>Integrated approach spanning personnel trust, cyber assurance and ICT transformation.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-ink shrink-0">03</span>
                      <p>Sovereign knowledge built on years of serving high-trust Australian organisations.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
