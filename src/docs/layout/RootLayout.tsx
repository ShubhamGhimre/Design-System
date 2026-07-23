import { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { ThemeProvider } from '../hooks/useTheme'
import { TopBar } from './TopBar'
import { Sidebar } from './Sidebar'

export function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigation = useNavigation()
  const isLoading = navigation.state !== 'idle'

  return (
    <ThemeProvider>
      <div className="h-screen overflow-hidden bg-background text-foreground">
        {isLoading && (
          <div className="fixed inset-x-0 top-0 z-[200] h-0.5">
            <div className="h-full w-full origin-left animate-[loading_2s_ease-in-out_infinite] bg-primary" />
          </div>
        )}
        <TopBar onToggleSidebar={() => setSidebarOpen(v => !v)} />
        <div className="flex h-full pt-14">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1 overflow-y-auto px-6 py-8 lg:px-10">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
