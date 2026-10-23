import { Link } from 'react-router-dom'

export default function BreadcrumbHeader({
  requestId,
  statusLabel,
  subtitle,
  onPrint,
  onContact,
}) {
  return (
    <div className="flex flex-col gap-space-sm mb-space-md">
      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
        <Link
          to="/requests"
          className="hover:text-primary transition-colors flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to My Requests
        </Link>
        <span className="text-outline-variant">/</span>
        <span className="text-on-surface font-semibold">Request #{requestId}</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
        <div className="flex flex-wrap items-center gap-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-sm flex-wrap">
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Request #{requestId}
              </h1>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-md text-label-md bg-surface-container-high text-primary-container font-bold uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
                {statusLabel}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            onClick={onPrint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-base">print</span>
            <span>Print Summary</span>
          </button>
          <button
            type="button"
            onClick={onContact}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container hover:bg-tertiary-container text-on-primary font-label-lg text-label-lg transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Contact Handler</span>
          </button>
        </div>
      </div>
    </div>
  )
}
