import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function DashboardLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const activePath = pathname.split('/')[1] || 'dashboard'

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      <Sidebar
        activePath={activePath}
        onNavigate={(path) => navigate(`/${path}`)}
        onLogout={() => navigate('/')}
      />

      <div className="ml-72 w-[calc(100%-18rem)]">
        <TopBar />

        <main className="relative min-h-screen w-full bg-surface px-4 py-space-md pt-16 sm:px-6 lg:px-8 xl:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
