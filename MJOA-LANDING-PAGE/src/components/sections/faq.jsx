import { Section, SectionHeader } from '@/components/layout/section'
import { FAQ_ITEMS } from '@/lib/constants'
import { Accordion } from '@/components/ui/accordion'
import { MotionDiv } from '@/components/ui/motion'

export function FAQ() {
  return (
    <Section variant="gray">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with MJOA."
        />
        <MotionDiv>
          <Accordion items={FAQ_ITEMS} />
        </MotionDiv>
      </div>
    </Section>
  )
}
