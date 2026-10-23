import { useEffect } from 'react'

export default function TrackingModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-primary/55 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        aria-labelledby="tracking-modal-title"
        aria-modal="true"
        className="surface-card relative my-auto w-full max-w-lg rounded-2xl bg-surface-container-lowest p-5 shadow-2xl sm:p-7"
        role="dialog"
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">
              Tracking Result
            </span>
            <h3 className="mt-1 font-headline-sm text-headline-sm font-bold text-primary" id="tracking-modal-title">
              USPF-2026-9481
            </h3>
          </div>
          <button
            aria-label="Close tracking result"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </div>
        <div className="mb-5 flex flex-col gap-3 rounded-xl bg-surface-container-low p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="font-label-md text-label-md font-bold text-primary">
              Official Transcript of Records (TOR)
            </div>
            <div className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
              Applicant: Maria Lourdes Santos
            </div>
          </div>
          <span className="w-fit shrink-0 rounded-full bg-secondary-container px-2.5 py-1 font-label-sm text-label-sm font-semibold text-on-secondary-container">
            In Processing
          </span>
        </div>
        <div className="mb-6 space-y-4">
          <TimelineItem done label="Request Logged & Verified" sub="March 28, 2026 - 09:15 AM" />
          <TimelineItem done label="Accounting Clearance Approved" sub="March 28, 2026 - 11:40 AM (OR #99281)" />
          <TimelineItem
            num="3"
            label="Registrar Archive Printing & Seal"
            sub="Expected completion: March 31, 2026"
            bold
          />
        </div>
        <button
          className="w-full rounded-lg bg-primary-container py-3 font-label-md text-label-md font-semibold text-on-primary transition-colors hover:bg-primary"
          onClick={onClose}
          type="button"
        >
          Close Tracker
        </button>
      </div>
    </div>
  )
}

function TimelineItem({ done, num, label, sub, bold }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
          done
            ? 'bg-primary-container text-on-primary'
            : 'bg-secondary-container font-bold text-on-secondary-container'
        }`}
      >
        {done ? '✓' : num}
      </span>
      <div className="pt-0.5">
        <div
          className={`font-label-sm text-label-sm text-primary ${
            bold ? 'font-bold' : ''
          }`}
        >
          {label}
        </div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">
          {sub}
        </div>
      </div>
    </div>
  )
}
