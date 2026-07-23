import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Badge } from '../Badge'
import { Card } from '../Card'

const productCardVariants = cva('group overflow-hidden', {
  variants: {
    variant: {
      grid: 'flex flex-col',
      row: 'flex flex-row gap-4',
      compact: 'flex flex-col gap-1',
    },
  },
  defaultVariants: { variant: 'grid' },
})

export interface ProductCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof productCardVariants> {
  title: string
  price: number
  originalPrice?: number
  imageSrc?: string
  imageHoverSrc?: string
  rating?: number
  reviewCount?: number
  sale?: boolean
  isWishlisted?: boolean
  onWishlist?: () => void
  onAddToCart?: () => void
  onQuickView?: () => void
  brandSlot?: React.ReactNode
}

function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

export function ProductCard({
  className,
  variant = 'grid',
  title,
  price,
  originalPrice,
  imageSrc,
  imageHoverSrc,
  rating,
  reviewCount,
  sale,
  isWishlisted,
  onWishlist,
  onAddToCart,
  onQuickView,
  brandSlot,
  ...props
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = React.useState(imageSrc)
  const isRow = variant === 'row'

  return (
    <Card
      className={cn(
        productCardVariants({ variant }),
        'bg-card text-card-foreground',
        isRow ? 'p-3' : 'p-0',
        className,
      )}
      {...props}
    >
      <div className={cn('relative overflow-hidden', isRow ? 'h-32 w-32 flex-shrink-0' : 'aspect-square w-full')}>
        {imageSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-opacity duration-300"
            onMouseEnter={() => imageHoverSrc && setImgSrc(imageHoverSrc)}
            onMouseLeave={() => setImgSrc(imageSrc)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            No Image
          </div>
        )}
        {sale ? (
          <Badge className="absolute left-2 top-2">Sale</Badge>
        ) : null}
        <div className={cn(
          'absolute right-2 top-2 flex flex-col gap-1 opacity-0 transition-opacity',
          'group-hover:opacity-100',
        )}>
          {onWishlist ? (
            <Button
              variant="secondary"
              size="sm"
              iconOnly
              onClick={(e) => { e.stopPropagation(); onWishlist() }}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart className={cn('h-4 w-4', isWishlisted && 'fill-destructive text-destructive')} />
            </Button>
          ) : null}
          {onQuickView ? (
            <Button
              variant="secondary"
              size="sm"
              iconOnly
              onClick={(e) => { e.stopPropagation(); onQuickView() }}
              aria-label="Quick view"
            >
              <Eye className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </div>
      <div className={cn('flex flex-col', isRow ? 'flex-1 justify-center gap-1' : 'gap-2 p-4')}>
        {brandSlot}
        <h3 className={cn('font-medium text-foreground', variant === 'compact' ? 'text-sm' : 'text-base')}>{title}</h3>
        {rating !== undefined ? (
          <div className="flex items-center gap-1">
            <div className="flex" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={cn('h-3.5 w-3.5', i < Math.round(rating) ? 'fill-primary text-primary' : 'text-muted-foreground')}
                />
              ))}
            </div>
            {reviewCount !== undefined ? (
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
            ) : null}
          </div>
        ) : null}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{formatPrice(price)}</span>
          {originalPrice ? (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
          ) : null}
        </div>
        {variant !== 'compact' && onAddToCart ? (
          <Button size="sm" onClick={onAddToCart} className="mt-1">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        ) : null}
      </div>
    </Card>
  )
}
