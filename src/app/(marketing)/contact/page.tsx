'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

// IMPORTANT: Formspree endpoint placeholder - user to replace in production
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-endpoint-here'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })
      
      if (response.ok) {
        setFormStatus('success')
        e.currentTarget.reset()
        
        // Auto-reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle')
        }, 5000)
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Form submission failed')
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Unable to send message. Please email us directly at contact@websoul.digital'
      )
      
      // Auto-clear error after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-bold mb-4 text-ink">Contact Us</h1>
            <p className="text-body-lg text-slate lg:max-w-xl">
              Ready to discuss how Websoul Digital can support your organisation? We facilitate secure transitions and trusted capability uplift.
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
                <div className="mb-8 p-6 bg-paper border border-ink/10 rounded-2xl flex items-start gap-4 animate-fade-in shadow-sm">
                  <CheckCircle className="w-6 h-6 text-ink flex-shrink-0" />
                  <div>
                    <p className="font-bold text-ink">Message sent successfully</p>
                    <p className="text-sm text-slate mt-1 leading-relaxed">
                      Thank you for reaching out. A specialist from our team will respond within 24–48 business hours.
                    </p>
                  </div>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-8 p-6 bg-paper border border-red-500/10 rounded-2xl flex items-start gap-4 animate-fade-in">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-red-800">Failed to send</p>
                    <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate block px-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 border border-silver rounded-2xl bg-mist/30 text-ink focus:outline-none focus:ring-2 focus:ring-ink/5 focus:border-ink transition-all placeholder:text-slate/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate block px-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@organisation.gov.au"
                      className="w-full px-5 py-4 border border-silver rounded-2xl bg-mist/30 text-ink focus:outline-none focus:ring-2 focus:ring-ink/5 focus:border-ink transition-all placeholder:text-slate/40"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="org" className="text-[10px] font-bold uppercase tracking-widest text-slate block px-1">
                    Organisation (Optional)
                  </label>
                  <input
                    type="text"
                    id="org"
                    name="organisation"
                    placeholder="Company or Government Agency"
                    className="w-full px-5 py-4 border border-silver rounded-2xl bg-mist/30 text-ink focus:outline-none focus:ring-2 focus:ring-ink/5 focus:border-ink transition-all placeholder:text-slate/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate block px-1">
                    Message Context *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your requirements or mission goals..."
                    className="w-full px-5 py-4 border border-silver rounded-2xl bg-mist/30 text-ink focus:outline-none focus:ring-2 focus:ring-ink/5 focus:border-ink transition-all placeholder:text-slate/40 resize-none"
                  />
                </div>
                
                {/* Honeypot field */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  disabled={formStatus === 'submitting'}
                  className="w-full md:w-auto h-14 px-10 text-xs tracking-widest"
                >
                  {formStatus === 'submitting' ? 'Processing...' : 'Submit Inquiry'}
                </Button>
                
                <p className="text-[10px] font-medium text-slate/60 text-center md:text-left">
                  By submitting, you acknowledge that your information will be handled in accordance with our <a href="/privacy" className="text-ink underline underline-offset-4">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pt-16">
              <div className="bg-mist/30 border border-silver rounded-3xl p-10 lg:p-12">
                <h2 className="text-h3 font-display font-bold mb-8 text-ink">Connect Directly</h2>
                
                <div className="space-y-10 mb-12">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-paper border border-silver flex items-center justify-center transition-colors group-hover:border-ink/10">
                      <Mail className="w-5 h-5 text- ink" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate mb-1">Email Protocol</h3>
                      <a href="mailto:contact@websoul.digital" className="text-lg font-medium text-ink hover:text-slate transition-colors">
                        contact@websoul.digital
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                     <div className="w-12 h-12 rounded-2xl bg-paper border border-silver flex items-center justify-center transition-colors group-hover:border-ink/10">
                      <Phone className="w-5 h-5 text- ink" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate mb-1">Direct Line</h3>
                      <a href="tel:+61212345678" className="text-lg font-medium text-ink hover:text-slate transition-colors">
                        +61 2 1234 5678
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-paper border border-silver flex items-center justify-center">
                      <MapPin className="w-5 h-5 text- ink" />
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
                  Websoul Digital operates with a secure-by-design mindset. For sensitive technical inquiries, please request a secure transmission channel in your initial message.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
