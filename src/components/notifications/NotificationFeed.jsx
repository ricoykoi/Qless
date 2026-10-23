import NotificationItem from './NotificationItem'

export default function NotificationFeed({ notifications, onAction }) {
  return (
    <div className="flex flex-col gap-2.5">
      {notifications.length === 0 && (
        <div className="p-8 text-center text-on-surface-variant font-body-sm text-body-sm rounded-xl bg-surface-container-lowest border border-outline-variant/20">
          No notifications in this category.
        </div>
      )}
      {notifications.map((n) => (
        <NotificationItem key={n.id} notification={n} onAction={onAction} />
      ))}
    </div>
  )
}
