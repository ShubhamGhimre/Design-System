import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Star } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Card } from '../Card'
import { Avatar } from '../Avatar'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../Carousel'

const testimonialsVariants = cva('w-full', {
  variants: {
    variant: {
      grid: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
      carousel: '',
    },
  },
  defaultVariants: { variant: 'grid' },
})

export interface Testimonial {
  id: string
  name: string
  role?: string
  avatarSrc?: string
  content: string
  rating: number
}

export interface TestimonialsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof testimonialsVariants> {
  testimonials: Testimonial[]
  title?: string
  description?: string
  brandSlot?: React.ReactNode
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn('h-4 w-4', i < rating ? 'fill-primary text-primary' : 'fill-none text-muted-foreground')}
        />
      ))}
    </div>
  )
}

export function Testimonials({
  className,
  variant = 'grid',
  testimonials,
  title,
  description,
  brandSlot,
  ...props
}: TestimonialsProps) {
  if (variant === 'carousel') {
    return (
      <div className={cn('w-full', className)} {...props}>
        {brandSlot}
        {title ? <h2 className="text-2xl font-bold text-foreground">{title}</h2> : null}
        {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
        <Carousel className="mt-6">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="flex h-full flex-col gap-4 p-6">
                  <StarRating rating={t.rating} />
                  <blockquote className="flex-1 text-sm text-foreground">&ldquo;{t.content}&rdquo;</blockquote>
                  <div className="flex items-center gap-3">
                    <Avatar src={t.avatarSrc} alt={t.name} fallback={t.name.charAt(0)} />
                    <div>
                      <p className="text-sm font-medium text-foreground">{t.name}</p>
                      {t.role ? <p className="text-xs text-muted-foreground">{t.role}</p> : null}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  }

  return (
    <div className={cn(className)} {...props}>
      {brandSlot}
      {title ? <h2 className="text-2xl font-bold text-foreground">{title}</h2> : null}
      {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
      <div className={cn(testimonialsVariants({ variant }), 'mt-6')}>
        {testimonials.map((t) => (
          <Card key={t.id} className="flex flex-col gap-4 p-6">
            <StarRating rating={t.rating} />
            <blockquote className="flex-1 text-sm text-foreground">&ldquo;{t.content}&rdquo;</blockquote>
            <div className="flex items-center gap-3">
              <Avatar src={t.avatarSrc} alt={t.name} fallback={t.name.charAt(0)} />
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                {t.role ? <p className="text-xs text-muted-foreground">{t.role}</p> : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
