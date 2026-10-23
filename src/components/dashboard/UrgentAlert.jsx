export default function UrgentAlert({ requestId = 'QR-2026-00125' }) {
  return (
    <div className="relative flex w-full flex-col items-start justify-between gap-space-md overflow-hidden rounded-xl bg-secondary-container/20 p-space-md shadow-sm md:flex-row md:items-center md:p-space-lg">
      <div className="flex flex-1 items-start gap-space-md">
        <div className="mt-0.5 shrink-0 rounded-lg bg-secondary-container p-2.5 text-on-secondary-container">
          <span className="material-symbols-outlined text-xl leading-none" aria-hidden="true">
            warning
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
              Action Required on Request #{requestId}
            </h2>
            <span className="rounded-full bg-secondary-container px-2 py-0.5 font-label-sm text-label-sm font-semibold text-on-secondary-container">
              Urgent Clarification
            </span>
          </div>
          <p className="mt-1 font-body-md text-body-md text-on-surface">
            <strong className="font-semibold text-primary">
              Additional document required:
            </strong>{' '}
            The Registrar Office requires a clear back photo of your USPF
            Student ID to complete verification for your Transcript of Records.
          </p>
        </div>
      </div>

      <div className="flex w-full shrink-0 items-center justify-end gap-space-sm self-stretch md:w-auto md:self-auto">
        <a
          href="#modal-upload"
          className="flex-1 rounded-lg bg-on-secondary-container px-space-md py-2 text-center font-label-md text-label-md text-surface shadow-sm transition-colors hover:bg-secondary md:flex-none"
        >
          Upload Requirement Now
        </a>
        <button
          type="button"
          className="rounded-lg bg-surface-container-lowest px-space-md py-2 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
