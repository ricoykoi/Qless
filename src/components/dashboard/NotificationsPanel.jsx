import { NOTIFICATIONS } from '../../data/dashboard'

export default function NotificationsPanel({ onMarkAllRead }) {
  return (
    <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-md shadow-sm md:p-space-lg">
      <div className="mb-space-md flex items-center justify-between">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-primary">
            Notifications
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Real-time status updates
          </p>
        </div>
        <button
          type="button"
          aria-label="Mark all notifications as read"
          onClick={onMarkAllRead}
          className="rounded-lg p-1 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            mark_email_read
          </span>
        </button>
      </div>

      <div className="flex flex-col gap-space-md">
        {NOTIFICATIONS.map((n, idx) => (
          <div key={n.title}>
            <div className="flex items-start gap-space-sm pb-space-sm">
              <div
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${n.iconBg}`}
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {n.icon}
                </span>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-label-md text-label-md font-semibold leading-snug text-primary">
                  {n.title}
                </span>
                <span className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                  {n.body}
                </span>
                <span className="mt-1.5 flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                  <span className={`h-1.5 w-1.5 rounded-full ${n.dot}`} />
                  {n.time}
                </span>
              </div>
            </div>
            {idx < NOTIFICATIONS.length - 1 && (
              <div className="h-px bg-surface-container" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-space-lg pt-space-xs">
        <a
          href="#all-notifications"
          className="block w-full rounded-lg bg-surface-container-low py-2 text-center font-label-md text-label-md text-primary transition-colors hover:bg-surface-container"
        >
          View All Notifications (12)
        </a>
      </div>
    </div>
  )
}
