import WelcomeBanner from './WelcomeBanner'
import StatGrid from './StatGrid'
import UrgentAlert from './UrgentAlert'
import RecentRequestsTable from './RecentRequestsTable'
import ServiceLaunchpad from './ServiceLaunchpad'
import NotificationsPanel from './NotificationsPanel'

export default function DashboardPage() {
  const handleNewRequest = () => {
    // TODO: open a "New Request" modal or navigate to /requests/new
    alert('New Request flow — hook up your modal or route here.')
  }

  const handleViewRequest = (request) => {
    // TODO: navigate to /requests/:ref
    alert(`Viewing ${request.ref}`)
  }

  const handleDownloadRequest = (request) => {
    // TODO: trigger download of the PDF
    alert(`Downloading ${request.ref}`)
  }

  const handleMarkAllRead = () => {
    // TODO: call API to mark notifications as read
    alert('Marked all notifications as read.')
  }

  return (
    <div className="flex w-full flex-col gap-space-lg pb-space-xl">
      <WelcomeBanner
        studentName="Charlyn Dico"
        onNewRequest={handleNewRequest}
      />

      <StatGrid />

      <UrgentAlert requestId="QR-2026-00125" />

      <RecentRequestsTable
        onView={handleViewRequest}
        onDownload={handleDownloadRequest}
      />

      <div className="grid w-full grid-cols-1 gap-space-lg lg:grid-cols-3">
        <ServiceLaunchpad />
        <NotificationsPanel onMarkAllRead={handleMarkAllRead} />
      </div>
    </div>
  )
}
