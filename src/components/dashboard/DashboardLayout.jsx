import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const activePath = pathname.split('/')[1] || 'dashboard'

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-primary/40 lg:hidden"
        />
      )}
      <Sidebar
        activePath={activePath}
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={(path) => {
          navigate(`/${path}`)
          setMobileMenuOpen(false)
        }}
        onLogout={() => {
          navigate('/')
          setMobileMenuOpen(false)
        }}
      />

      <div className="w-full lg:ml-72 lg:w-[calc(100%-18rem)]">
        <TopBar
          mobileMenuOpen={mobileMenuOpen}
          onMenuClick={() => setMobileMenuOpen((open) => !open)}
        />

        <main className="relative min-h-screen w-full bg-surface px-4 py-space-md pt-16 sm:px-6 lg:px-8 xl:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
