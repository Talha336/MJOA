import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white shadow-[0_1px_2px_rgba(37,99,235,0.2),0_4px_16px_rgba(37,99,235,0.25)] hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] active:translate-y-0',
        secondary:
          'bg-background-secondary text-foreground border border-border hover:border-primary/30 hover:bg-primary-muted/50 hover:-translate-y-0.5',
        outline:
          'border-2 border-primary/20 text-primary bg-transparent hover:border-primary hover:bg-primary-muted/30 hover:-translate-y-0.5',
        ghost: 'text-muted hover:text-primary hover:bg-primary-muted/50',
        link: 'text-primary underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-12 px-6 text-sm',
        sm: 'h-10 px-4 text-sm',
        lg: 'h-14 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = forwardRef(({ className, variant, size, asChild = false, loading, children, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Sending...</span>
        </>
      ) : (
        children
      )}
    </Comp>
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
