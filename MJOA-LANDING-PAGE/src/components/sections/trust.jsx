import { Star, Quote } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/section'
import { PLACEHOLDER_LOGOS } from '@/lib/constants'
import { StaggerContainer, StaggerItem, fadeInUp, MotionDiv } from '@/components/ui/motion'

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Mitchell Home Services',
    rating: 5,
    text: 'MJOA transformed our lead generation. We went from 5 leads a month to over 40, and our ROI has been incredible.',
  },
  {
    name: 'James Rodriguez',
    role: 'Director, Rodriguez Realty',
    rating: 5,
    text: 'Professional, transparent, and results-driven. They took the time to understand our market and delivered campaigns that actually convert.',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Practice Manager, Chen Medical',
    rating: 5,
    text: 'Our patient inquiries increased by 180% within the first three months. The team is responsive and truly cares about our success.',
  },
]

export function Trust() {
  return (
    <Section id="trust" variant="gray">
      <SectionHeader
        badge="Trusted by Businesses"
        title="Results That Speak for Themselves"
        description="Businesses across industries trust MJOA to deliver measurable growth."
      />

      <MotionDiv className="mb-16">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {PLACEHOLDER_LOGOS.map((name) => (
            <div
              key={name}
              className="px-6 py-3 rounded-xl border border-border bg-white text-sm font-semibold text-muted transition-all duration-300 hover:opacity-100 hover:border-primary/20 hover:-translate-y-0.5"
            >
              {name}
            </div>
          ))}
        </div>
      </MotionDiv>

      <StaggerContainer className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <StaggerItem key={testimonial.name} variants={fadeInUp}>
            <div className="p-8 rounded-2xl bg-white border border-border transition-all duration-300 hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 h-full flex flex-col">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed flex-1">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}
