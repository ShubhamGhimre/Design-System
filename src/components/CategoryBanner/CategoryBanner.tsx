import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Badge } from '../Badge'

const categoryBannerVariants = cva(
  'relative flex min-h-[280px] w-full items-center overflow-hidden rounded-lg',
  {
    variants: {
      variant: {
        default: 'justify-start',
        centered: 'justify-center text-center',
        split: 'grid grid-cols-1 md:grid-cols-2',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface CategoryBannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof categoryBannerVariants> {
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  itemCount?: number
  ctaText?: string
  onCtaClick?: () => void
  overlay?: boolean
  brandSlot?: React.ReactNode
}

export function CategoryBanner({
  className,
  variant,
  title,
  description,
  imageSrc,
  imageAlt = '',
  itemCount,
  ctaText = 'Shop Now',
  onCtaClick,
  overlay = true,
  brandSlot,
  ...props
}: CategoryBannerProps) {
  const content = (
    <div className={cn(
      'relative z-10 flex flex-col gap-3 p-8',
      variant === 'split' ? 'justify-center' : 'max-w-lg',
    )}>
      {brandSlot}
      {itemCount !== undefined ? (
        <Badge variant="secondary" className="w-fit">{itemCount} items</Badge>
      ) : null}
      <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base text-muted-foreground">{description}</p>
      ) : null}
      <div>
        <Button onClick={onCtaClick} className="mt-2">
          {ctaText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const image = imageSrc ? (
    <img
      src={imageSrc}
      alt={imageAlt}
      className={cn(
        'absolute inset-0 h-full w-full object-cover',
        variant === 'split' ? 'static md:relative' : '',
      )}
    />
  ) : (
    <div className={cn(
      'absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5',
      variant === 'split' ? 'static md:relative' : '',
    )} />
  )

  return (
    <div className={cn(categoryBannerVariants({ variant }), className)} {...props}>
      {image}
      {overlay && variant !== 'split' ? (
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      ) : null}
      {variant === 'split' ? (
        <>
          <div className="relative z-10 flex items-center">{content}</div>
          <div className="relative min-h-[280px]">{image}</div>
        </>
      ) : (
        content
      )}
    </div>
  )
}
