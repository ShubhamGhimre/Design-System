import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Badge } from '../Badge'

export interface HeroParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  imageSrc?: string
  badge?: string
  brandSlot?: React.ReactNode
  onCtaClick?: () => void
  parallaxSpeed?: number
}

export function HeroParallax({
  className,
  title,
  subtitle,
  description,
  ctaText = 'Explore',
  imageSrc,
  badge,
  brandSlot,
  onCtaClick,
  parallaxSpeed = 0.4,
  ...props
}: HeroParallaxProps) {
  const [offsetY, setOffsetY] = React.useState(0)
  const [reducedMotion, setReducedMotion] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', handler)

    const onScroll = () => {
      if (!ref.current || reducedMotion) return
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      if (scrolled > 0 && rect.top < window.innerHeight) {
        setOffsetY(scrolled * parallaxSpeed)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      mq.removeEventListener('change', handler)
      window.removeEventListener('scroll', onScroll)
    }
  }, [parallaxSpeed, reducedMotion])

  return (
    <div
      ref={ref}
      className={cn('relative flex min-h-[500px] items-center justify-center overflow-hidden', className)}
      {...props}
    >
      {imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageSrc})`,
            transform: reducedMotion ? 'none' : `translateY(${offsetY * 0.3}px)`,
            willChange: reducedMotion ? 'auto' : 'transform',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-primary/10"
          style={{
            transform: reducedMotion ? 'none' : `translateY(${offsetY * 0.2}px)`,
            willChange: reducedMotion ? 'auto' : 'transform',
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6 px-4 text-center">
        {brandSlot}
        {badge ? <Badge variant="secondary">{badge}</Badge> : null}
        {subtitle ? <p className="text-sm font-medium uppercase tracking-wider text-primary">{subtitle}</p> : null}
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">{title}</h1>
        {description ? <p className="text-lg text-muted-foreground">{description}</p> : null}
        <Button size="lg" onClick={onCtaClick}>
          {ctaText} <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
