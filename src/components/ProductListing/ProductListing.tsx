import * as React from 'react'
import { Heart } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Badge } from '../Badge'

export interface ProductItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  imageSrc?: string
  rating?: number
  badge?: string
}

export interface ProductListingProps extends React.HTMLAttributes<HTMLDivElement> {
  products: ProductItem[]
  columns?: 2 | 3 | 4
  onProductClick?: (product: ProductItem) => void
  onAddToCart?: (product: ProductItem) => void
  onWishlist?: (product: ProductItem) => void
  wishlistedIds?: string[]
}

function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

export function ProductListing({
  className,
  products,
  columns = 3,
  onProductClick,
  onAddToCart,
  onWishlist,
  wishlistedIds = [],
  ...props
}: ProductListingProps) {
  if (products.length === 0) {
    return (
      <div className={cn('flex items-center justify-center py-16 text-muted-foreground', className)} {...props}>
        No products found
      </div>
    )
  }

  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={cn('grid grid-cols-1 gap-6', gridCols[columns], className)} {...props}>
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"
          onClick={() => onProductClick?.(product)}
        >
          <div className="relative aspect-square overflow-hidden">
            {product.imageSrc ? (
              <img src={product.imageSrc} alt={product.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">No image</div>
            )}
            {product.badge ? (
              <Badge variant="secondary" className="absolute left-2 top-2">{product.badge}</Badge>
            ) : null}
            {onWishlist ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                iconOnly
                className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={(e) => { e.stopPropagation(); onWishlist(product) }}
                aria-label={wishlistedIds.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={cn('h-4 w-4', wishlistedIds.includes(product.id) && 'fill-destructive text-destructive')} />
              </Button>
            ) : null}
          </div>
          <div className="flex flex-col gap-1 p-4">
            <p className="text-sm text-muted-foreground line-clamp-1">{product.name}</p>
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-foreground">{formatPrice(product.price)}</span>
              {product.originalPrice ? (
                <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
              ) : null}
            </div>
            {onAddToCart ? (
              <Button
                size="sm"
                className="mt-2"
                onClick={(e) => { e.stopPropagation(); onAddToCart(product) }}
              >
                Add to Cart
              </Button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}
