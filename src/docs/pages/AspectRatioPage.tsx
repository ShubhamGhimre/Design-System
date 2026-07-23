import { AspectRatio } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function AspectRatioPage() {
  return (
    <ComponentDoc
      name="AspectRatio"
      description="Displays content within a desired aspect ratio."
      radixPrimitive="@radix-ui/react-aspect-ratio"
      preview={
        <div className="w-64">
          <AspectRatio ratio={16 / 9}>
            <div className="flex size-full items-center justify-center rounded-md bg-muted text-muted-foreground">
              16:9
            </div>
          </AspectRatio>
        </div>
      }
      code={`<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." className="size-full object-cover rounded-md" />
</AspectRatio>`}
      props={[
        { name: 'ratio', type: 'number', defaultVal: '16/9', description: 'Desired width / height ratio' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="16:9">
            <div className="w-48">
              <AspectRatio ratio={16 / 9}>
                <div className="flex size-full items-center justify-center rounded-md bg-muted text-muted-foreground text-sm">16:9</div>
              </AspectRatio>
            </div>
          </Row>
          <Row label="4:3">
            <div className="w-48">
              <AspectRatio ratio={4 / 3}>
                <div className="flex size-full items-center justify-center rounded-md bg-muted text-muted-foreground text-sm">4:3</div>
              </AspectRatio>
            </div>
          </Row>
          <Row label="1:1">
            <div className="w-48">
              <AspectRatio ratio={1}>
                <div className="flex size-full items-center justify-center rounded-md bg-muted text-muted-foreground text-sm">1:1</div>
              </AspectRatio>
            </div>
          </Row>
        </div>
      }
      anatomy={['<AspectRatio> — Wraps content to enforce aspect ratio']}
      accessibility={['Content should include descriptive text or alt attributes for images']}
    />
  )
}
