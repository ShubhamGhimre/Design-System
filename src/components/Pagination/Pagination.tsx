import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '../../lib/utils'
import { buttonVariants } from '../Button'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const pages = getPageNumbers(currentPage, totalPages)

  return (
    <nav aria-label="Pagination" className={cn('mx-auto flex w-full items-center justify-center gap-1', className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'gap-1')}
      >
        <ChevronLeft className="size-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {pages.map((page, i) => {
        if (page === 'ellipsis') {
          return (
            <span key={`ellipsis-${i}`} className="flex size-9 items-center justify-center">
              <MoreHorizontal className="size-4 text-muted-foreground" />
            </span>
          )
        }
        return (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={cn(
              buttonVariants({ variant: currentPage === page ? 'primary' : 'ghost', size: 'sm' }),
              'min-w-9',
            )}
          >
            {page}
          </button>
        )
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'gap-1')}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="size-4" />
      </button>
    </nav>
  )
}

function getPageNumbers(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages: (number | 'ellipsis')[] = []
  pages.push(1)

  if (current > 3) pages.push('ellipsis')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) pages.push(i)

  if (current < total - 2) pages.push('ellipsis')

  pages.push(total)
  return pages
}
