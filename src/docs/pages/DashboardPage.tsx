import { Dashboard, Button } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function DashboardPage() {
  const stats = [
    { id: '1', title: 'Revenue', value: '$45,231', change: '+20%', trend: 'up' as const },
    { id: '2', title: 'Users', value: '2,350', change: '+12%', trend: 'up' as const },
    { id: '3', title: 'Orders', value: '1,423', change: '+8%', trend: 'up' as const },
    { id: '4', title: 'Bounce Rate', value: '24.5%', change: '-3%', trend: 'down' as const },
  ]
  return (
    <ComponentDoc
      name="Dashboard"
      description="A dashboard layout with stat cards, chart slots, brand header, and action slot."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-3xl">
          <Dashboard
            title="Dashboard"
            subtitle="Overview of your metrics"
            stats={stats}
            actionsSlot={
              <>
                <Button variant="outline" size="sm">Export</Button>
                <Button size="sm">Add New</Button>
              </>
            }
          />
        </div>
      }
      code={`import { Dashboard } from 'design-system/components'

const stats = [
  { id: '1', title: 'Revenue', value: '$45,231', change: '+20%', trend: 'up' },
  { id: '2', title: 'Users', value: '2,350', change: '+12%', trend: 'up' },
]

;<Dashboard title="Dashboard" subtitle="Overview" stats={stats} />`}
      props={[
        { name: 'title', type: 'string', defaultVal: '"Dashboard"', description: 'Page title' },
        { name: 'subtitle', type: 'string', defaultVal: '—', description: 'Page subtitle' },
        { name: 'stats', type: 'StatCard[]', defaultVal: '[]', description: 'Array of stat cards' },
        { name: 'charts', type: 'ChartCard[]', defaultVal: '—', description: 'Chart card slots' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'actionsSlot', type: 'ReactNode', defaultVal: '—', description: 'Action buttons slot' },
      ]}
    />
  )
}
