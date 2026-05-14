'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, AlertCircle, FileText } from 'lucide-react'

export default function CapabilityStatementPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrors({})
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    
    // Client-side validation
    const newErrors: Record<string, string> = {}
    if (!name || name.trim().length < 2) {
      newErrors.name = 'Full Name is required'
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'A valid email address is required'
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
            <h1 className="text-h1 font-display font-bold mb-6 text-ink">Request Capability Statement.</h1>
            <p className="text-body-lg text-slate lg:max-w-xl">
              Receive a concise overview of our services, experience, and delivery approach 
              for Australian government and regulated-sector programs.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="paper" spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto">
            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center" role="status">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-h3 font-display font-bold text-ink mb-4">Request Received.</h2>
                <p className="text-slate mb-8 leading-relaxed">
                  Thank you. We will email the Websoul Digital Capability Statement 
                  to your provided address shortly.
                </p>
                <Button href="/" variant="secondary">
                  Back to Homepage
                </Button>
              </div>
            ) : (
              <div className="bg-mist border border-silver/50 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="flex gap-6 items-start mb-10 pb-10 border-b border-silver/50">
                   <div className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center shrink-0 border border-silver/30">
                     <FileText className="w-6 h-6 text-ink" />
                   </div>
                   <div>
                     <p className="text-base text-slate leading-relaxed">
                       Please provide your professional contact details to receive our 2026/27 Capability Statement.
                     </p>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <input type="hidden" name="_subject" value="Capability Statement Request" />
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-base font-semibold text-ink">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-paper border border-silver rounded-lg focus:ring-2 focus:ring-ink focus:border-ink transition-all text-base"
                      placeholder="e.g. Jane Doe"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1" role="alert">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-base font-semibold text-ink">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-paper border border-silver rounded-lg focus:ring-2 focus:ring-ink focus:border-ink transition-all text-base"
                      placeholder="jane@organisation.gov.au"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1" role="alert">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organisation" className="text-base font-semibold text-ink">
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      className="w-full px-4 py-3 bg-paper border border-silver rounded-lg focus:ring-2 focus:ring-ink focus:border-ink transition-all text-base"
                      placeholder="Your department or company"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full px-12 h-14 text-base font-bold uppercase tracking-widest"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Sending Request...' : 'Request Capability Statement'}
                    </Button>
                    
                    {status === 'error' && (
                      <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm flex items-center gap-3" role="alert">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p>Something went wrong. Please try again or email hello@websoul.com.au.</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </main>
  )
}
