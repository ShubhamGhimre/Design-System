import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Mail, CheckCircle2, LoaderCircle } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Input } from '../Input'
import { Label } from '../Label'

const newsletterVariants = cva('w-full', {
  variants: {
    variant: {
      centered: 'text-center max-w-lg mx-auto',
      stacked: 'flex flex-col gap-4',
      inline: 'flex flex-row items-end gap-3 flex-wrap',
    },
  },
  defaultVariants: { variant: 'centered' },
})

export interface NewsletterProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'>,
    VariantProps<typeof newsletterVariants> {
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
  onSubmit?: (email: string) => Promise<void> | void
  onSuccess?: () => void
  brandSlot?: React.ReactNode
}

export function Newsletter({
  className,
  variant,
  title = 'Stay in the loop',
  description = 'Get the latest updates and offers delivered to your inbox.',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  onSubmit,
  onSuccess,
  brandSlot,
  ...props
}: NewsletterProps) {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      setStatus('error')
      return
    }
    setStatus('loading')
    setError('')
    try {
      await onSubmit?.(email)
      setStatus('success')
      setEmail('')
      onSuccess?.()
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn(newsletterVariants({ variant }), className)} {...props}>
        {brandSlot}
        <div className="flex flex-col items-center gap-2 text-center">
          <CheckCircle2 className="h-10 w-10 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">You&apos;re subscribed!</h3>
          <p className="text-sm text-muted-foreground">Thanks for joining. We&apos;ll be in touch.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(newsletterVariants({ variant }), className)} {...props}>
      {brandSlot}
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <div className="flex flex-col gap-1.5">
          {variant === 'inline' ? null : <Label htmlFor="newsletter-email">Email</Label>}
          <div className={cn('flex gap-2', variant === 'inline' ? 'flex-row' : 'flex-col sm:flex-row')}>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="newsletter-email"
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                className="pl-10"
                aria-invalid={status === 'error'}
                aria-describedby={error ? 'newsletter-error' : undefined}
              />
            </div>
            <Button type="submit" loading={status === 'loading'} disabled={status === 'loading'}>
              {status === 'loading' ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
              {buttonText}
            </Button>
          </div>
          {error ? (
            <p id="newsletter-error" className="text-xs text-destructive" role="alert">{error}</p>
          ) : null}
        </div>
      </form>
    </div>
  )
}
