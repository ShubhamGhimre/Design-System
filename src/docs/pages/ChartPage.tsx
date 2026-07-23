import { ChartContainer, ChartTooltip } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

const chartData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
]

const chartConfig = {
  revenue: { label: 'Revenue', color: 'hsl(var(--chart-1))' },
}

export function ChartPage() {
  return (
    <ComponentDoc
      name="Chart" description="A chart container that works with Recharts for data visualization."
      radixPrimitive="—"
      preview={
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" axisLine={false} tickLine={false} />
            <ChartTooltip />
            <Bar dataKey="revenue" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      }
      code={`const config = {
  revenue: { label: 'Revenue', color: 'hsl(var(--chart-1))' },
}

<ChartContainer config={config}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip />
    <Bar dataKey="revenue" fill="var(--chart-1)" />
  </BarChart>
</ChartContainer>`}
      props={[
        { name: 'config', type: 'ChartConfig', defaultVal: '—', description: 'Chart config mapping keys to labels and colors' },
      ]}
    />
  )
}
