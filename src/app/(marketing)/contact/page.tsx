'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mdabjgjq')

  return (
    <>
      <Section background="mist" spacing="lg">
        <Container>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-slate">Ready to discuss how Websoul Digital can support your organisation?</p>
          <p className="text-sm text-slate mt-2">A consultant will respond within 1–2 business days.</p>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Send a Message</h2>

              {state.succeeded && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3" role="status" aria-live="polite">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Message sent successfully</p>
                    <p className="text-sm text-green-700 mt-1">We&apos;ll respond within 1–2 business days.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full h-12 px-4 border border-silver rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-600 mt-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full h-12 px-4 border border-silver rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-600 mt-1" />
                </div>

                <div>
                  <label htmlFor="organisation" className="block text-sm font-medium text-ink mb-2">
                    Organisation (Optional)
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    className="w-full h-12 px-4 border border-silver rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-silver rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-600 mt-1" />
                </div>

                <Button type="submit" variant="primary" disabled={state.submitting} className="w-full sm:w-auto h-12 px-6">
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-slate mt-4">
                  By submitting, you agree to our <a href="/privacy" className="text-ink underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-slate flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Email</h3>
                    <a href="mailto:hello@websoul.com.au" className="text-slate hover:text-ink transition-colors">
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
              <div className="mt-8 pt-8 border-t border-silver">
                <h3 className="font-semibold text-ink mb-2">Response Time</h3>
                <p className="text-sm text-slate">All inquiries receive a response within 1–2 business days.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
