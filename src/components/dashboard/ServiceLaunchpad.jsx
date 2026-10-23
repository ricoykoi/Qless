import { SHORTCUTS } from '../../data/dashboard'

export default function ServiceLaunchpad() {
  return (
    <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-md shadow-sm md:p-space-lg lg:col-span-2">
      <div className="mb-space-md flex items-center justify-between gap-3">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-primary">
            Quick Service Launchpad
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Instant direct access to high-frequency registrar requests
          </p>
        </div>
        <span className="shrink-0 font-label-sm text-label-sm text-on-surface-variant">
          4 shortcuts configured
        </span>
      </div>

      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        {SHORTCUTS.map((s) => (
          <a
            key={s.title}
            href="#"
            className={`group flex items-start gap-space-md rounded-xl p-space-md transition-all ${
              s.highlight
                ? 'bg-secondary-container/30 hover:bg-secondary-container/50'
                : 'bg-surface-container-low hover:bg-surface-container'
            }`}
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105 ${s.iconBg}`}
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                {s.icon}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-lg font-bold text-primary group-hover:text-primary-container">
                {s.title}
              </span>
              <span className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                {s.desc}
              </span>
              <span
                className={`mt-2 inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold ${
                  s.highlight ? 'text-on-secondary-container' : 'text-primary'
                }`}
              >
                {s.highlight ? 'Open Cashier' : 'Start Request'}
                <span className="material-symbols-outlined text-xs" aria-hidden="true">
                  arrow_forward
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Notice */}
      <div className="mt-space-md flex items-start justify-between gap-3 rounded-lg bg-surface-container-low p-space-sm sm:items-center">
        <div className="flex items-start gap-2 font-body-sm text-body-sm text-on-surface-variant sm:items-center">
          <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
            schedule
          </span>
          <span>
            Registrar Counter Hours: Monday – Friday 8:00 AM – 5:00 PM (USPF Main
            Campus)
          </span>
        </div>
        <span className="shrink-0 font-label-sm text-label-sm font-semibold text-primary">
          Queue Window Active
        </span>
      </div>
    </div>
  )
}
