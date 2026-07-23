import { Section, SectionHeader } from '@/components/layout/section'
import { PROCESS_STEPS } from '@/lib/constants'
import { MotionDiv, StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion'

export function Process() {
  return (
    <Section id="process" variant="gray">
      <SectionHeader
        badge="Our Process"
        title="How We Help You Grow"
        description="A proven four-step process that takes you from consultation to scalable results."
      />

      <div className="hidden lg:block">
        <StaggerContainer className="grid grid-cols-4 gap-0 relative">
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-border" aria-hidden="true">
            <MotionDiv className="h-full bg-primary origin-left" style={{ width: '100%' }} />
          </div>

          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.step} variants={fadeInUp}>
              <div className="relative flex flex-col items-center text-center px-4">
                <div className="relative z-10 flex h-[104px] w-[104px] items-center justify-center rounded-2xl bg-white border-2 border-primary shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
                  <span className="text-3xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed max-w-[220px]">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="lg:hidden space-y-6">
        {PROCESS_STEPS.map((step, index) => (
          <MotionDiv key={step.step} delay={index * 0.1}>
            <div className="flex gap-5 p-6 rounded-2xl bg-white border border-border">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white text-xl font-bold">
                {step.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
            {index < PROCESS_STEPS.length - 1 && (
              <div className="flex justify-center py-2" aria-hidden="true">
                <div className="w-0.5 h-6 bg-primary/30" />
              </div>
            )}
          </MotionDiv>
        ))}
      </div>
    </Section>
  )
}
