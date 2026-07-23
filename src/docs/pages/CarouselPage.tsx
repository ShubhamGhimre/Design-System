import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function CarouselPage() {
  return (
    <ComponentDoc
      name="Carousel" description="A sliding carousel component built with Embla Carousel."
      radixPrimitive="—"
      preview={
        <div className="relative w-full max-w-xs">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3].map((i) => (
                <CarouselItem key={i}>
                  <div className="flex h-40 items-center justify-center rounded-lg bg-primary/10 text-2xl font-bold text-primary">
                    Slide {i}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      }
      code={`<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
      props={[
        { name: 'opts', type: 'UseEmblaCarouselType[0]', defaultVal: '—', description: 'Embla carousel options (loop, startIndex, etc.)' },
        { name: 'plugins', type: 'UseEmblaCarouselType[1]', defaultVal: '—', description: 'Embla carousel plugins' },
      ]}
    />
  )
}
