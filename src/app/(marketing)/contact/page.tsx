'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations/contact'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      organisation: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting')
    setErrorMessage('')

    if (!FORMSPREE_ENDPOINT) {
      setSubmitStatus('error')
      setErrorMessage('Form configuration error. Please email hello@websoul.com.au directly.')
      return
    }

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('organisation', data.organisation || '')
      formData.append('message', data.message)

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 8000)
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Unable to send message. Please email hello@websoul.com.au')
      setTimeout(() => setSubmitStatus('idle'), 8000)
    }
  }

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

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3" role="status" aria-live="polite">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Message sent successfully</p>
                    <p className="text-sm text-green-700 mt-1">We&apos;ll respond within 1–2 business days.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3" role="alert">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">Failed to send</p>
                    <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    aria-invalid={!!errors.name}
                    className={`w-full h-12 px-4 border rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 ${
                      errors.name ? 'border-red-500' : 'border-silver'
                    }`}
                  />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                    className={`w-full h-12 px-4 border rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 ${
                      errors.email ? 'border-red-500' : 'border-silver'
                    }`}
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="organisation" className="block text-sm font-medium text-ink mb-2">
                    Organisation (Optional)
                  </label>
                  <input
                    id="organisation"
                    type="text"
                    {...register('organisation')}
                    className="w-full h-12 px-4 border border-silver rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    aria-invalid={!!errors.message}
                    className={`w-full px-4 py-2 border rounded-lg bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-ink/20 resize-none ${
                      errors.message ? 'border-red-500' : 'border-silver'
                    }`}
                  />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
                </div>

                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                <input type="hidden" name="_redirect" value="https://websoul.com.au/contact" />

                <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto h-12 px-6">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
