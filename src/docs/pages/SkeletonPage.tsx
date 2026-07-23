import { Skeleton } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function SkeletonPage() {
  return (
    <ComponentDoc
      name="Skeleton" description="A loading placeholder that animates to indicate content is being loaded."
      preview={
        <div className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      }
      code={`<Skeleton className="h-4 w-32" />`}
      props={[
        { name: 'className', type: 'string', defaultVal: '—', description: 'CSS classes for width, height, shape' },
      ]}
      variants={
        <Row label="Examples">
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-36" />
            </div>
          </div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </Row>
      }
    />
  )
}
