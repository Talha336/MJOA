import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { contactFormSchema } from '@/lib/validations'
import { fadeInLeft, fadeInRight, MotionDiv } from '@/components/ui/motion'

function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1, y: 0, x: 0 }}
          animate={{
            opacity: 0,
            y: -100 - Math.random() * 100,
            x: (Math.random() - 0.5) * 200,
            rotate: Math.random() * 360,
          }}
          transition={{ duration: 1.5, delay: Math.random() * 0.3 }}
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
          style={{ backgroundColor: ['#2563EB', '#3B82F6', '#22C55E', '#DBEAFE'][i % 4] }}
        />
      ))}
    </div>
  )
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', phone: '', company: '', message: '' },
  })

  // --- UPDATED ONSUBMIT FUNCTION ---
  const onSubmit = async (data) => {
    setLoading(true)
    
    try {
      // Prepare the form data for Web3Forms
      const formData = new FormData()
      formData.append('access_key', 'fd90ed90-bd98-4846-8cff-f7e30c19cbc1') // Your Access Key
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('company', data.company || 'N/A') // Send 'N/A' if company is empty
      formData.append('message', data.message)

      // Send the data to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        // Success logic
        reset()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact" variant="white">
      <SectionHeader
        badge="Contact Us"
        title="Let's Start Growing Your Business"
        description="Reach out for a free consultation. We'd love to hear about your goals."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <MotionDiv variants={fadeInLeft}>
          <div className="space-y-8 mt-15">
            {[
              { icon: Phone, label: 'Phone', value: '571-562-5006', href: 'tel:+15715625006' },
              { icon: Mail, label: 'Email', value: 'info@mjoa-consulting.com', href: 'mailto:info@mjoa-consulting.com' },
              {
                icon: MapPin,
                label: 'Address',
                value: '2807 N Parham Rd\nSte 320 #3410\nHenrico, VA 23294',
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-muted">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-foreground font-semibold hover:text-primary transition-colors whitespace-pre-line">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-semibold whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv variants={fadeInRight}>
          <div className="relative p-8 rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-white/95 backdrop-blur-sm"
                >
                  <Confetti />
                  <CheckCircle2 className="h-16 w-16 text-success mb-4" />
                  <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-sm text-muted mt-2 text-center max-w-xs">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="John Smith" error={errors.name} {...register('name')} aria-invalid={!!errors.name} />
                  {errors.name && <p className="text-xs text-red-500" role="alert">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" error={errors.email} {...register('email')} aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-xs text-red-500" role="alert">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" error={errors.phone} {...register('phone')} aria-invalid={!!errors.phone} />
                  {errors.phone && <p className="text-xs text-red-500" role="alert">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" {...register('company')} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" placeholder="Tell us about your business and marketing goals..." error={errors.message} {...register('message')} aria-invalid={!!errors.message} />
                {errors.message && <p className="text-xs text-red-500" role="alert">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full" loading={loading}>
                Send Message
              </Button>
            </form>
          </div>
        </MotionDiv>
      </div>
    </Section>
  )
}