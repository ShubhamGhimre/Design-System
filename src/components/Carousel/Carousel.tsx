import * as React from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'

type CarouselApi = UseEmblaCarouselType[1]

interface CarouselContextValue {
  api: CarouselApi | null
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const ctx = React.useContext(CarouselContext)
  if (!ctx) throw new Error('useCarousel must be used within <Carousel />')
  return ctx
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
}

export function Carousel({ opts, plugins, className, children, ...props }: CarouselProps) {
  const [emblaRef, api] = useEmblaCarousel(opts, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }
    onSelect()
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <CarouselContext.Provider
      value={{
        api: api ?? null,
        canScrollPrev,
        canScrollNext,
        scrollPrev: () => api?.scrollPrev(),
        scrollNext: () => api?.scrollNext(),
      }}
    >
      <div ref={emblaRef} className={cn('overflow-hidden', className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex -ml-4', className)} {...props} />
}

export function CarouselItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('min-w-0 shrink-0 grow-0 basis-full pl-4', className)}
      {...props}
    />
  )
}

export function CarouselPrevious({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { canScrollPrev, scrollPrev } = useCarousel()
  return (
    <Button
      variant="outline"
      size="sm"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn('absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full', className)}
      {...props}
    >
      <ArrowLeft className="size-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

export function CarouselNext({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { canScrollNext, scrollNext } = useCarousel()
  return (
    <Button
      variant="outline"
      size="sm"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn('absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full', className)}
      {...props}
    >
      <ArrowRight className="size-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}
