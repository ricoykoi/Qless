import { useMemo, useState } from 'react'
import NotificationsHeader from './NotificationsHeader'
import NotificationsFilter from './NotificationsFilter'
import NotificationFeed from './NotificationFeed'
import SettingsCard from './SettingsCard'
import PolicyCard from './PolicyCard'
import {
  FILTERS,
  NOTIFICATIONS,
  SETTINGS_DEFAULTS,
} from '../../data/notifications'

export default function NotificationsPage() {
  const [filter, setFilter] = useState('all')
  const [notifications, setNotifications] = useState(NOTIFICATIONS)
  const [settings, setSettings] = useState(SETTINGS_DEFAULTS)

  const unreadCount = notifications.filter((n) => n.status === 'unread').length

  const filtered = useMemo(() => {
    if (filter === 'all') return notifications
    return notifications.filter((n) => n.category === filter)
  }, [filter, notifications])

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, status: 'read' })))
  }

  const markOneRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: 'read' } : n))
    )
  }

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleAction = (notification) => {
    alert(`Action: ${notification.action.label}`)
    markOneRead(notification.id)
  }

  return (
    <div className="flex flex-col w-full pb-space-xl max-w-6xl">
      <NotificationsHeader
        unreadCount={unreadCount}
        onMarkAllRead={markAllRead}
        onOpenPreferences={() => alert('Open preferences modal')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-sm">
          <NotificationsFilter
            filters={FILTERS}
            activeFilter={filter}
            onChange={setFilter}
          />
          <NotificationFeed
            notifications={filtered}
            onAction={handleAction}
          />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <SettingsCard
            settings={settings}
            onChange={toggleSetting}
          />
          <PolicyCard />
        </div>
      </div>
    </div>
  )
}
