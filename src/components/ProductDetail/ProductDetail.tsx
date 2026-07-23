import * as React from 'react'
import { Minus, Plus, Heart, ShoppingCart, Star } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Badge } from '../Badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../Carousel'
import { Tabs } from '../Tabs'
import { Separator } from '../Separator'
import { ToggleGroup, ToggleGroupItem } from '../ToggleGroup'
import { Skeleton } from '../Skeleton'

export interface ProductVariant {
  label: string
  value: string
}

export interface ProductDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  price: number
  originalPrice?: number
  description?: string
  images?: string[]
  rating?: number
  reviewCount?: number
  sizes?: ProductVariant[]
  colors?: ProductVariant[]
  onAddToCart?: (data: { quantity: number; size?: string; color?: string }) => void
  onWishlist?: () => void
  isWishlisted?: boolean
  loading?: boolean
  brandSlot?: React.ReactNode
}

function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

export function ProductDetail({
  className,
  title,
  price,
  originalPrice,
  description,
  images,
  rating,
  reviewCount,
  sizes,
  colors,
  onAddToCart,
  onWishlist,
  isWishlisted,
  loading,
  brandSlot,
  ...props
}: ProductDetailProps) {
  const [quantity, setQuantity] = React.useState(1)
  const [selectedSize, setSelectedSize] = React.useState('')
  const [selectedColor, setSelectedColor] = React.useState('')

  if (loading) {
    return (
      <div className={cn('grid grid-cols-1 gap-8 lg:grid-cols-2', className)} {...props}>
        <Skeleton className="aspect-square w-full rounded-lg" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    )
  }

  return (
    <div className={cn('grid grid-cols-1 gap-8 lg:grid-cols-2', className)} {...props}>
      <div>
        {images && images.length > 1 ? (
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img src={src} alt={`${title} ${i + 1}`} className="h-full w-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : images && images[0] ? (
          <div className="aspect-square overflow-hidden rounded-lg">
            <img src={images[0]} alt={title} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="flex aspect-square items-center justify-center rounded-lg bg-muted text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {brandSlot}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {rating !== undefined ? (
                Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={cn('h-4 w-4', i < Math.round(rating) ? 'fill-primary text-primary' : 'text-muted-foreground')}
                  />
                ))
              ) : null}
              {reviewCount !== undefined ? (
                <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
              ) : null}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">{formatPrice(price)}</span>
            {originalPrice ? (
              <span className="text-lg text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
            ) : null}
            {originalPrice ? <Badge variant="destructive">{Math.round((1 - price / originalPrice) * 100)}% off</Badge> : null}
          </div>
        </div>

        {description ? <p className="text-base text-muted-foreground">{description}</p> : null}

        <Separator />

        {sizes && sizes.length > 0 ? (
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Size</p>
            <ToggleGroup type="single" value={selectedSize} onValueChange={setSelectedSize}>
              {sizes.map((s) => (
                <ToggleGroupItem key={s.value} value={s.value}>{s.label}</ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        ) : null}

        {colors && colors.length > 0 ? (
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Color</p>
            <ToggleGroup type="single" value={selectedColor} onValueChange={setSelectedColor}>
              {colors.map((c) => (
                <ToggleGroupItem key={c.value} value={c.value}>{c.label}</ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        ) : null}

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" size="sm" iconOnly onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm text-foreground">{quantity}</span>
            <Button type="button" variant="outline" size="sm" iconOnly onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <Button className="flex-1" onClick={() => onAddToCart?.({ quantity, size: selectedSize || undefined, color: selectedColor || undefined })}>
            <ShoppingCart className="h-4 w-4" /> Add to Cart
          </Button>
          {onWishlist ? (
            <Button variant="outline" size="sm" iconOnly onClick={onWishlist} aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}>
              <Heart className={cn('h-4 w-4', isWishlisted && 'fill-destructive text-destructive')} />
            </Button>
          ) : null}
        </div>

        <Tabs
          tabs={[
            { value: 'description', label: 'Description', content: <p className="text-sm text-muted-foreground">High-quality product designed for everyday use. Crafted with premium materials and attention to detail.</p> },
            { value: 'reviews', label: 'Reviews', content: <p className="text-sm text-muted-foreground">Customer reviews and ratings will appear here.</p> },
            { value: 'shipping', label: 'Shipping', content: <p className="text-sm text-muted-foreground">Free shipping on orders over $50. Estimated delivery: 3-5 business days.</p> },
          ]}
          defaultValue="description"
          className="mt-4"
        />
      </div>
    </div>
  )
}
