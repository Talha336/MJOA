import { Target, Wallet, BarChart3, UserCheck, Zap, RefreshCw } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/section'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion'

const iconMap = { Target, Wallet, BarChart3, UserCheck, Zap, RefreshCw }

export function WhyChooseUs() {
  return (
    <Section id="why-us" variant="gradient">
      <SectionHeader
        badge="Why Choose Us"
        title="The MJOA Difference"
        description="We're not just another agency. We're your dedicated marketing partner committed to your success."
      />

<StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {WHY_CHOOSE_US.map((item) => {
    const Icon = iconMap[item.icon]

    return (
      <StaggerItem
        key={item.title}
        variants={fadeInUp}
        className="h-full"
      >
        <div className="group h-full flex flex-col p-8 rounded-2xl bg-white border border-border transition-all duration-300 hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background-secondary transition-all duration-300 group-hover:bg-primary-muted">
            <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-foreground">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-muted leading-relaxed">
            {item.description}
          </p>
        </div>
      </StaggerItem>
    )
  })}
</StaggerContainer>
    </Section>
  )
}
