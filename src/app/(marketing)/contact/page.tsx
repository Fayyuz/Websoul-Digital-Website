'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Replace with your Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-endpoint-here'

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
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMessage('Unable to send message. Please email us directly at contact@websoul.digital')
    }
  }

  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 font-display font-semibold mb-4">Contact Us</h1>
            <p className="text-body-lg text-slate">
              Ready to discuss how Websoul Digital can support your organisation?
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-h2 font-display font-semibold mb-6">Send a Message</h2>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you for reaching out. We&apos;ll respond within 2 business days.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-silver rounded-lg focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-silver rounded-lg focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-silver rounded-lg focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent"
                  />
                </div>
                
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                <Button type="submit" variant="primary" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-h2 font-display font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-slate flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate">contact@websoul.digital</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-slate flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-slate">+61 2 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-slate flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-slate">Canberra, ACT, Australia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-silver">
                <h3 className="font-semibold mb-3">Response Time</h3>
                <p className="text-sm text-slate">
                  We respond to all inquiries within 2 business days.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
