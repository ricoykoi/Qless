export default function RequestsHeader({ onRefresh, onCreateNew }) {
  return (
    <div className="flex flex-col justify-between gap-space-md pt-2 lg:flex-row lg:items-end">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-space-xs text-on-surface-variant">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Student Records Portal
          </span>
          <span className="text-xs">•</span>
          <span className="font-label-sm text-label-sm">AY 2026-2027</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl tracking-tight text-primary">
          My Requests
        </h1>
        <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">
          View, track, and manage all your submitted USPF credential requests and
          official registrar certifications in real-time.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-space-sm">
        <button
          type="button"
          onClick={onRefresh}
          className="flex items-center gap-2 rounded-lg bg-surface-container-lowest px-4 py-2.5 font-label-lg text-label-lg text-primary shadow-sm transition-all hover:bg-surface-container"
        >
          <span className="material-symbols-outlined text-lg" aria-hidden="true">
            sync
          </span>
          <span>Refresh Feed</span>
        </button>
        <button
          type="button"
          onClick={onCreateNew}
          className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container hover:shadow-lg"
        >
          <span className="material-symbols-outlined text-lg" aria-hidden="true">
            add_circle
          </span>
          <span>+ Create New Request</span>
        </button>
      </div>
    </div>
  )
}
