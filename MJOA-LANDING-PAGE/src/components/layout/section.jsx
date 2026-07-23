import { cn } from '@/lib/utils'
import { Container } from './container'

export function Section({ id, className, children, variant = 'white', ...props }) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-[120px]',
        variant === 'white' && 'bg-white',
        variant === 'gray' && 'bg-background-secondary',
        variant === 'gradient' && 'bg-white section-grid-bg',
        className
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeader({ badge, title, description, align = 'center', className }) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {badge && (
        <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  )
}
