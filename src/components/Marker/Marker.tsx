import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export const markerVariants = cva('inline-flex items-center gap-1 text-[10px]', {
  variants: {
    status: {
      sent: 'text-muted-foreground',
      delivered: 'text-muted-foreground',
      read: 'text-primary',
      error: 'text-destructive',
      sending: 'text-muted-foreground animate-pulse',
    },
  },
  defaultVariants: { status: 'sent' },
})

export interface MarkerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof markerVariants> {
  status?: 'sent' | 'delivered' | 'read' | 'error' | 'sending'
}

export function Marker({ status = 'sent', className, ...props }: MarkerProps) {
  return (
    <span className={cn(markerVariants({ status }), className)} {...props}>
      {status === 'sending' && <ClockIcon />}
      {status === 'sent' && <CheckIcon double={false} />}
      {status === 'delivered' && <CheckIcon double />}
      {status === 'read' && <CheckIcon double blue />}
      {status === 'error' && <AlertIcon />}
      {statusLabel(status)}
    </span>
  )
}

function statusLabel(status: string): string {
  switch (status) {
    case 'sending': return 'Sending'
    case 'sent': return 'Sent'
    case 'delivered': return 'Delivered'
    case 'read': return 'Read'
    case 'error': return 'Failed'
    default: return ''
  }
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function CheckIcon({ double, blue }: { double?: boolean; blue?: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={blue ? 'currentColor' : 'currentColor'} strokeWidth="2" className={blue ? 'text-primary' : ''}>
      <path d="M5 13l4 4L19 7" />
      {double && <path d="M9 13l4 4L19 7" className="-translate-x-1 opacity-50" />}
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  )
}
