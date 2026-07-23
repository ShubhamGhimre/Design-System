import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Badge } from '../Badge'

export interface HeroSlide {
  id: string
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  imageSrc?: string
  badge?: string
}

export interface HeroSlideshowProps extends React.HTMLAttributes<HTMLDivElement> {
  slides: HeroSlide[]
  brandSlot?: React.ReactNode
  onCtaClick?: (slideId: string) => void
}

export function HeroSlideshow({
  className,
  slides,
  brandSlot,
  onCtaClick,
  ...props
}: HeroSlideshowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return
    setCurrent(emblaApi.selectedScrollSnap())
    emblaApi.on('select', () => setCurrent(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  if (slides.length === 0) {
    return (
      <div className={cn('flex min-h-[400px] items-center justify-center bg-muted', className)} {...props}>
        <p className="text-muted-foreground">No slides</p>
      </div>
    )
  }

  return (
    <div className={cn('relative', className)} {...props}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex -ml-4">
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-0 shrink-0 grow-0 basis-full pl-4">
              <div className="relative flex min-h-[500px] items-center overflow-hidden">
                {slide.imageSrc ? (
                  <img
                    src={slide.imageSrc}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
                <div className="relative z-10 flex max-w-xl flex-col gap-4 p-8 lg:p-16">
                  {brandSlot}
                  {slide.badge ? <Badge variant="secondary" className="w-fit">{slide.badge}</Badge> : null}
                  {slide.subtitle ? <p className="text-sm font-medium uppercase tracking-wider text-primary">{slide.subtitle}</p> : null}
                  <h2 className="text-4xl font-bold text-foreground md:text-5xl">{slide.title}</h2>
                  {slide.description ? <p className="text-lg text-muted-foreground">{slide.description}</p> : null}
                  {slide.ctaText ? (
                    <Button size="lg" className="w-fit" onClick={() => onCtaClick?.(slide.id)}>
                      {slide.ctaText} <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={cn(
              'h-2 w-2 rounded-full transition-colors',
              i === current ? 'bg-primary' : 'bg-primary/30',
            )}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
      <Button
        variant="outline"
        size="sm"
        disabled={!emblaApi?.canScrollPrev()}
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 size-8 rounded-full"
        aria-label="Previous slide"
      >
        <ArrowLeft className="size-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        disabled={!emblaApi?.canScrollNext()}
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 size-8 rounded-full"
        aria-label="Next slide"
      >
        <ArrowRight className="size-4" />
      </Button>
    </div>
  )
}
