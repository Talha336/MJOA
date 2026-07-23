import { ArrowRight, Target, Eye, TrendingUp, Wallet } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { fadeInLeft, fadeInRight, MotionDiv } from '@/components/ui/motion'
import { scrollToSection } from '@/lib/utils'

const FEATURES = [
  { icon: Target, title: 'Increasing Leads', description: 'Attract qualified prospects ready to buy your products or services.' },
  { icon: Eye, title: 'Improving Brand Visibility', description: 'Get your business in front of the right audience at the right time.' },
  { icon: TrendingUp, title: 'Maximizing Advertising ROI', description: 'Every dollar spent is optimized for the highest possible return.' },
  { icon: Wallet, title: 'Affordable Marketing Solutions', description: 'Professional marketing that fits your budget and scales with growth.' },
]

export function Introduction() {
  return (
    <Section id="about" variant="gray">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <MotionDiv variants={fadeInLeft}>
          <SectionHeader
            badge="About MJOA"
            title="Helping Small Businesses Attract More Customers"
            description="MJOA helps small businesses attract more customers using digital advertising. We combine data-driven strategies with creative execution to deliver measurable growth for businesses of all sizes."
            align="left"
            className="mb-8"
          />
          <div className="space-y-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-4 rounded-2xl bg-white border border-border transition-all duration-300 hover:border-primary/20 hover:shadow-[var(--shadow-soft)] hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-muted">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-8" onClick={() => scrollToSection('services')}>
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </MotionDiv>

        <MotionDiv variants={fadeInRight}>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=700&fit=crop"
                alt="Marketing team collaborating on digital strategy"
                className="w-full h-[400px] lg:h-[560px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white border border-border shadow-[var(--shadow-card)] max-w-[240px]">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted mt-1">Years of combined marketing expertise</p>
            </div>
            <div className="absolute -top-4 -right-4 p-6 rounded-2xl bg-white border border-border shadow-[var(--shadow-card)]">
  <TrendingUp className="h-10 w-10 text-primary" />
</div>
          </div>
        </MotionDiv>
      </div>
    </Section>
  )
}
