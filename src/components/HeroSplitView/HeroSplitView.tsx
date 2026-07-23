import * as React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Badge } from '../Badge'

export interface HeroSplitViewProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  imageSrc?: string
  imageAlt?: string
  badge?: string
  brandSlot?: React.ReactNode
  onCtaClick?: () => void
  onSecondaryCtaClick?: () => void
  mediaPosition?: 'left' | 'right'
}

export function HeroSplitView({
  className,
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  secondaryCtaText,
  imageSrc,
  imageAlt = '',
  badge,
  brandSlot,
  onCtaClick,
  onSecondaryCtaClick,
  mediaPosition = 'right',
  ...props
}: HeroSplitViewProps) {
  const content = (
    <div className="flex flex-col justify-center gap-6 p-8 lg:p-16">
      {brandSlot}
      {badge ? <Badge variant="secondary" className="w-fit">{badge}</Badge> : null}
      <div className="space-y-2">
        {subtitle ? <p className="text-sm font-medium uppercase tracking-wider text-primary">{subtitle}</p> : null}
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">{title}</h1>
      </div>
      {description ? <p className="max-w-lg text-lg text-muted-foreground">{description}</p> : null}
      <div className="flex flex-wrap gap-3">
        <Button size="lg" onClick={onCtaClick}>
          {ctaText} <ArrowRight className="h-4 w-4" />
        </Button>
        {secondaryCtaText ? (
          <Button size="lg" variant="outline" onClick={onSecondaryCtaClick}>
            <Play className="h-4 w-4" /> {secondaryCtaText}
          </Button>
        ) : null}
      </div>
    </div>
  )

  const media = imageSrc ? (
    <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
      <p className="text-muted-foreground">Image placeholder</p>
    </div>
  )

  return (
    <div
      className={cn(
        'grid min-h-[500px] grid-cols-1 lg:grid-cols-2',
        mediaPosition === 'left' ? '' : '',
        className,
      )}
      {...props}
    >
      {mediaPosition === 'left' ? (
        <>{media}{content}</>
      ) : (
        <>{content}{media}</>
      )}
    </div>
  )
}
