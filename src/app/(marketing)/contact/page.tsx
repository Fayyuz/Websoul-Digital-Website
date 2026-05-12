'use client'

import { useState, useRef, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const errorRef = useRef<HTMLDivElement>(null)

  // Announce status changes to screen readers
  useEffect(() => {
    if (formStatus === 'success' && successRef.current) {
      successRef.current.focus()
    }
    if (formStatus === 'error' && errorRef.current) {
      errorRef.current.focus()
    }
  }, [formStatus])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus('submitting')
    setFieldErrors({})
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    
    // Validate required fields
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const errors: Record<string, string> = {}

    if (!name?.trim()) errors.name = 'Name is required'
    if (!email?.trim()) errors.email = 'Email is required'
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address'
    if (!message?.trim()) errors.message = 'Message is required'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setFormStatus('idle')
      return
    }
    
    try {
      if (!FORMSPREE_ENDPOINT) {
        throw new Error('Form configuration error. Please email us directly.')
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })
      
      if (response.ok) {
        setFormStatus('success')
        e.currentTarget.reset()
        setTimeout(() => {
          setFormStatus('idle')
        }, 8000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMessage(
        FORMSPREE_ENDPOINT 
          ? 'Unable to send message. Please try again or email hello@websoul.com.au'
          : 'Please email us directly at hello@websoul.com.au'
      )
      setTimeout(() => {
        setFormStatus('idle')
        setErrorMessage('')
      }, 8000)
    }
  }

  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-slate">
              Ready to discuss how Websoul Digital can support your organisation?
            </p>
            <p className="text-sm text-slate mt-2">
              A consultant will respond within 1–2 business days.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Send a Message</h2>
              
              {/* Success Message */}
              {formStatus === 'success' && (
                <div 
                  ref={successRef}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                  role="status"
                  aria-live="polite"
                  tabIndex={-1}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-green-800">Message sent successfully</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Thank you for reaching out. We&apos;ll respond within 1–2 business days.
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                      In the meantime, explore our <a href="/case-studies" className="underline">case studies</a> or <a href="/insights" className="underline">insights</a>.
                    </p>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {formStatus === 'error' && (
                <div 
                  ref={errorRef}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                  role="alert"
                  aria-live="assertive"
                  tabIndex={-1}
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-800">Failed to send</h3>
                    <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    className={`w-full h-12 px-4 border rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 focus:border-ink transition-colors ${
                      fieldErrors.name ? 'border-red-500' : 'border-silver'
                    }`}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="text-sm text-red-600 mt-1" role="alert">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    className={`w-full h-12 px-4 border rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 focus:border-ink transition-colors ${
                      fieldErrors.email ? 'border-red-500' : 'border-silver'
                    }`}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="text-sm text-red-600 mt-1" role="alert">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
                
                {/* Organisation Field */}
                <div>
                  <label htmlFor="organisation" className="block text-sm font-medium text-ink mb-2">
                    Organisation (Optional)
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    className="w-full h-12 px-4 border border-silver rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 focus:border-ink transition-colors"
                  />
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-2 border rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 focus:border-ink transition-colors resize-none ${
                      fieldErrors.message ? 'border-red-500' : 'border-silver'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="text-sm text-red-600 mt-1" role="alert">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>
                
                {/* Honeypot */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <input type="hidden" name="_redirect" value="https://websoul.com.au/contact" />
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  disabled={formStatus === 'submitting'}
                  className="w-full sm:w-auto h-12 px-6 text-base font-semibold rounded-lg"
                  aria-busy={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
                
                <p className="text-sm text-slate mt-4">
                  By submitting, you agree to our <a href="/privacy" className="text-ink underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-slate flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Email</h3>
                    <a href="mailto:hello@websoul.com.au" className="text-slate hover:text-ink transition-colors break-all">
                      hello@websoul.com.au
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-slate flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Location</h3>
                    <p className="text-slate">Canberra, ACT, Australia</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-silver pt-8">
                <h3 className="font-semibold text-ink mb-2">Response Time</h3>
                <p className="text-sm text-slate">
                  We respond to all inquiries within 1–2 business days.
                </p>
              </div>

              <div className="bg-mist rounded-xl p-6 mt-8 border border-silver">
                <h3 className="font-semibold text-ink mb-2">Prefer to email directly?</h3>
                <code className="block bg-paper p-3 rounded-lg border border-silver text-sm font-mono text-ink break-all">
                  hello@websoul.com.au
                </code>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
