import { useEffect } from 'react'

export default function ServiceModal({ service, onClose, onProceed }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
      />
      <div
        aria-labelledby="service-modal-title"
        aria-modal="true"
        className="relative z-10 flex max-h-[calc(100vh-2rem)] w-full max-w-lg flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-xl"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-surface-container-low p-space-lg">
          <div className="flex min-w-0 items-center gap-2">
            <div className="rounded-lg bg-primary-container p-2 text-on-primary">
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                description
              </span>
            </div>
            <div className="min-w-0">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Document Service Request
              </span>
              <h3 className="font-headline-sm text-headline-sm leading-tight text-primary" id="service-modal-title">
                {service.name}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="ml-2 rounded-lg p-1 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        {/* Body */}
        <div className="flex max-h-[716px] flex-col gap-space-md overflow-y-auto p-space-lg">
          <div className="grid grid-cols-2 gap-3 rounded-lg bg-surface-container-low p-3.5">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Fee per copy
              </span>
              <p className="font-headline-sm text-headline-sm text-primary">
                {service.fee}
              </p>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Standard SLA
              </span>
              <p className="font-headline-sm text-headline-sm text-primary">
                {service.processingTime}
              </p>
            </div>
          </div>

          <Block
            icon="verified_user"
            iconClass="text-secondary"
            title="Mandatory Prerequisites & Clearances"
            body={service.prerequisites}
          />
          <Block
            icon="share_location"
            iconClass="text-primary"
            title="Release Mode"
            body={service.release}
          />

          <div className="flex items-start gap-2.5 rounded-lg bg-surface-container-low/70 p-3">
            <span className="material-symbols-outlined mt-0.5 text-lg text-primary" aria-hidden="true">
              info
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Document processing begins once the accounting office confirms your
              payment receipt. Tracking reference will be issued immediately
              upon submission.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-space-sm bg-surface-container-low p-space-md">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-surface-container-lowest px-4 py-2 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container"
          >
            Close
          </button>
          <button
            type="button"
            onClick={onProceed}
            className="flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-tertiary-container"
          >
            <span>Start Online Application</span>
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

function Block({ icon, iconClass, title, body }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="flex items-center gap-1.5 font-label-lg text-label-lg text-primary">
        <span className={`material-symbols-outlined text-base ${iconClass}`} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h4>
      <div className="rounded-lg bg-surface-container-low p-3 font-body-md text-body-md text-on-surface">
        {body}
      </div>
    </div>
  )
}
