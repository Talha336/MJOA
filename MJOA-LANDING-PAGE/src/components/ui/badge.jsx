import { cn } from '@/lib/utils'

export function Badge({ className, variant = 'default', children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300',
        variant === 'default' && 'bg-primary-muted text-primary',
        variant === 'outline' && 'border border-border text-muted bg-white hover:border-primary/30 hover:-translate-y-0.5',
        variant === 'success' && 'bg-green-50 text-success',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
