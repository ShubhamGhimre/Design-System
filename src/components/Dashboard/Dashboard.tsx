import * as React from 'react'
import { ArrowUpRight, type LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '../Card'
import { Badge } from '../Badge'

export interface StatCard {
  id: string
  title: string
  value: string
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon?: LucideIcon
}

export interface ChartCard {
  id: string
  title: string
  slot: React.ReactNode
  description?: string
}

export interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  stats: StatCard[]
  charts?: ChartCard[]
  brandSlot?: React.ReactNode
  actionsSlot?: React.ReactNode
}

function TrendIcon({ trend }: { trend?: 'up' | 'down' | 'neutral' }) {
  if (!trend || trend === 'neutral') return null
  return (
    <ArrowUpRight
      className={cn(
        'h-4 w-4',
        trend === 'up' ? 'text-emerald-500' : 'rotate-90 text-destructive',
      )}
    />
  )
}

export function Dashboard({
  className,
  title = 'Dashboard',
  subtitle,
  stats,
  charts,
  brandSlot,
  actionsSlot,
  ...props
}: DashboardProps) {
  return (
    <div className={cn('space-y-6 p-6', className)} {...props}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {brandSlot}
          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
        </div>
        {actionsSlot ? <div className="flex items-center gap-2">{actionsSlot}</div> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                {Icon ? <Icon className="h-4 w-4 text-muted-foreground" /> : null}
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  {stat.change ? (
                    <Badge
                      variant={stat.trend === 'up' ? 'default' : stat.trend === 'down' ? 'destructive' : 'secondary'}
                      className="flex items-center gap-0.5"
                    >
                      <TrendIcon trend={stat.trend} />
                      {stat.change}
                    </Badge>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {charts && charts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {charts.map((chart) => (
            <Card key={chart.id} className={cn(charts.length === 1 ? 'md:col-span-2 lg:col-span-3' : '')}>
              <CardHeader>
                <CardTitle className="text-sm text-foreground">{chart.title}</CardTitle>
                {chart.description ? <p className="text-xs text-muted-foreground">{chart.description}</p> : null}
              </CardHeader>
              <CardContent>{chart.slot}</CardContent>
            </Card>
          ))}
        </div>
      ) : null}
    </div>
  )
}
