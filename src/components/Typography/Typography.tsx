import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      code: 'rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm font-medium text-foreground',
    },
  },
  defaultVariants: { variant: 'p' },
})

const variantMap: Record<string, string> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4',
  p: 'p', lead: 'p', large: 'p', small: 'p', muted: 'p', code: 'code',
}

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: keyof React.JSX.IntrinsicElements
}

export function Typography({ className, variant = 'p', as, ...props }: TypographyProps) {
  const Comp = as || (variantMap[variant || 'p'] as keyof React.JSX.IntrinsicElements) || 'p'
  return React.createElement(Comp, { className: cn(typographyVariants({ variant }), className), ...props })
}
