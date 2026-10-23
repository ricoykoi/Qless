export default function NotificationsHeader({
  unreadCount,
  onMarkAllRead,
  onOpenPreferences,
}) {
  const hasUnread = unreadCount > 0

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-space-md pb-space-sm border-b border-surface-container">
      <div className="flex items-center gap-3">
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          Notifications
        </h1>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${
            hasUnread
              ? 'bg-secondary-container text-on-secondary-container'
              : 'bg-surface-container text-on-surface-variant'
          }`}
        >
          {unreadCount} Unread
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onMarkAllRead}
          disabled={!hasUnread}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm border border-outline-variant/30 ${
            !hasUnread ? 'pointer-events-none opacity-60' : ''
          }`}
        >
          <span className="material-symbols-outlined text-base text-primary">
            {hasUnread ? 'done_all' : 'done'}
          </span>
          <span>{hasUnread ? 'Mark all as read' : 'All caught up'}</span>
        </button>
        <button
          type="button"
          onClick={onOpenPreferences}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm border border-outline-variant/30"
        >
          <span className="material-symbols-outlined text-base">tune</span>
          <span>Preferences</span>
        </button>
      </div>
    </div>
  )
}
