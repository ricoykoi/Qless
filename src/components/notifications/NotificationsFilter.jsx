export default function NotificationsFilter({ filters, activeFilter, onChange }) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-1 border-none">
      {filters.map((f) => {
        const active = f.id === activeFilter
        return (
          <button
            key={f.id}
            type="button"
            onClick={() => onChange(f.id)}
            className={`px-3.5 py-1.5 rounded-lg font-label-md text-label-md transition-colors flex items-center gap-2 shrink-0 ${
              active
                ? 'bg-primary-container text-on-primary shadow-sm'
                : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container shadow-sm border border-outline-variant/30'
            }`}
          >
            {f.warn && !active && (
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            )}
            <span>{f.label}</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                active
                  ? 'bg-surface-container-lowest/20 text-on-primary'
                  : f.warn
                    ? 'bg-secondary-container text-on-secondary-container font-bold'
                    : 'bg-surface-container text-on-surface-variant'
              }`}
            >
              {f.count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
