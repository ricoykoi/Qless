export default function WelcomeBanner({
  studentName = 'Charlyn Dico',
  onNewRequest,
}) {
  return (
    <div className="relative flex w-full flex-col items-start justify-between gap-space-md overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm md:flex-row md:items-center">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary-container/10 blur-2xl" />

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mb-1 flex items-center gap-space-xs">
          <span className="inline-flex rounded-full bg-surface-container-high px-2 py-0.5 font-label-sm text-label-sm font-semibold text-primary">
            AY 2026-2027 • 1st Semester
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            • Mabuhay USPFian!
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg tracking-tight text-primary">
          Good morning, {studentName}!
        </h1>
        <p className="mt-0.5 font-body-md text-body-md text-on-surface-variant">
          Manage and monitor all your USPF academic requests in one centralized
          portal.
        </p>
      </div>

      <div className="relative z-10 flex w-full shrink-0 items-center gap-space-sm md:w-auto">
        <button
          type="button"
          onClick={onNewRequest}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-space-md py-2.5 text-on-primary shadow-sm transition-all hover:bg-primary-container md:flex-none"
        >
          <span className="material-symbols-outlined text-lg transition-transform group-hover:rotate-90" aria-hidden="true">
            add
          </span>
          <span className="font-label-lg text-label-lg tracking-wide">
            New Request
          </span>
        </button>
        <button
          type="button"
          aria-label="Filter dashboard"
          className="rounded-lg bg-surface-container-low p-2.5 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary"
        >
          <span className="material-symbols-outlined text-lg" aria-hidden="true">
            tune
          </span>
        </button>
      </div>
    </div>
  )
}
