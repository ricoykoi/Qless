export default function NotificationItem({ notification, onAction }) {
  const unread = notification.status === 'unread'

  const cardClass = unread
    ? 'group relative flex items-start justify-between gap-3 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary shadow-sm transition-all'
    : 'group relative flex items-start justify-between gap-3 p-3.5 rounded-xl bg-surface-container-lowest/60 border border-outline-variant/20 hover:border-surface-tint shadow-sm transition-all'

  return (
    <div className={cardClass}>
      <div className="flex items-start gap-3 min-w-0">
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${notification.iconBg}`}
        >
          <span
            className="material-symbols-outlined text-lg"
            style={
              notification.iconFilled
                ? { fontVariationSettings: "'FILL' 1" }
                : undefined
            }
          >
            {notification.icon}
          </span>
        </div>

        <div className="min-w-0 flex flex-col">
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <span className="font-label-md text-label-md font-semibold text-primary group-hover:text-tertiary-container transition-colors">
              {notification.title}
            </span>
            <span
              className={`px-1.5 py-0.2 rounded-full font-label-sm text-[10px] ${notification.tagClass}`}
            >
              {notification.tag}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant truncate max-w-xl">
            {notification.body}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">schedule</span>
              {notification.time}
            </span>
            {notification.ref && (
              <>
                <span className="text-xs text-outline-variant">•</span>
                <span className="text-xs text-on-surface-variant font-mono">
                  {notification.ref}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0 self-center">
        <NotificationAction
          action={notification.action}
          onClick={() => onAction?.(notification)}
        />
      </div>
    </div>
  )
}

function NotificationAction({ action, onClick }) {
  const base =
    'inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-label-sm text-label-sm transition-colors shadow-sm'

  if (action.variant === 'primary') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} bg-primary-container text-on-primary hover:bg-primary`}
      >
        <span className="material-symbols-outlined text-sm">{action.icon}</span>
        <span>{action.label}</span>
      </button>
    )
  }

  if (action.variant === 'soft') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} bg-surface-container text-primary hover:bg-surface-container-high`}
      >
        <span className="material-symbols-outlined text-sm">{action.icon}</span>
        <span>{action.label}</span>
      </button>
    )
  }

  if (action.variant === 'outline') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} bg-surface-container-lowest text-primary hover:bg-surface-container border border-outline-variant/30`}
      >
        <span className="material-symbols-outlined text-sm">{action.icon}</span>
        <span>{action.label}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm"
    >
      {action.label}
    </button>
  )
}
