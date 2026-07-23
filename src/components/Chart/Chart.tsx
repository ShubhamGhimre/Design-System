import * as React from 'react'
import {
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'
import { cn } from '../../lib/utils'

export interface ChartConfig {
  [key: string]: { label: string; color: string }
}

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
  children: React.ReactElement
}

export function ChartContainer({ config, className, children, ...props }: ChartContainerProps) {
  return (
    <div
      className={cn('w-full', className)}
      style={
        {
          '--chart-1': config?.[Object.keys(config)[0]]?.color ?? 'hsl(var(--chart-1))',
          '--chart-2': config?.[Object.keys(config)[1]]?.color ?? 'hsl(var(--chart-2))',
          '--chart-3': config?.[Object.keys(config)[2]]?.color ?? 'hsl(var(--chart-3))',
          '--chart-4': config?.[Object.keys(config)[3]]?.color ?? 'hsl(var(--chart-4))',
          '--chart-5': config?.[Object.keys(config)[4]]?.color ?? 'hsl(var(--chart-5))',
        } as React.CSSProperties
      }
      {...props}
    >
      <ResponsiveContainer width="100%" height={350}>
        {children}
      </ResponsiveContainer>
    </div>
  )
}

export interface ChartTooltipContentProps {
  active?: boolean
  payload?: Array<{ name?: string; dataKey?: string | number; value?: number; color?: string; payload?: Record<string, string> }>
  label?: string
  className?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: 'line' | 'dot' | 'dashed'
  nameKey?: string
  labelKey?: string
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  hideLabel,
  hideIndicator,
  indicator = 'dot',
  nameKey,
  labelKey,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) return null

  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-md',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {!hideLabel && (
          <span className="font-medium text-muted-foreground">
            {labelKey ? (payload[0]?.payload as Record<string, string>)?.[labelKey] : label}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        {payload.map((entry, i) => {
          const key = (entry.name ?? entry.dataKey ?? i) as string
          return (
            <div key={key} className="flex items-center gap-2">
              {!hideIndicator && (
                <span
                  className={cn(
                    'shrink-0',
                    indicator === 'dot' && 'size-2 rounded-full',
                    indicator === 'line' && 'h-1 w-4 rounded-sm',
                    indicator === 'dashed' && 'h-0.5 w-4 border-t-2 border-dashed',
                  )}
                  style={{ background: entry.color, borderColor: entry.color }}
                />
              )}
              <span className="text-muted-foreground">
                {nameKey ? entry.name : String(entry.dataKey ?? '')}
              </span>
              <span className="font-medium text-foreground">{entry.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function ChartTooltip({ ...props }: React.ComponentProps<typeof Tooltip>) {
  return <Tooltip content={<ChartTooltipContent />} {...props} />
}

export function ChartLegend(props: React.ComponentProps<typeof Legend>) {
  return (
    <Legend
      wrapperStyle={{ paddingTop: '0.75rem' }}
      {...props}
    />
  )
}
