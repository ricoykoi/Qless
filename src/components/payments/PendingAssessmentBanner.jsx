export default function PendingAssessmentBanner({ assessment, onPay, onUpload }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md mb-space-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary to-secondary-container" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg pt-1">
        <div className="flex items-start gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-secondary-container/60 text-on-secondary-container flex-shrink-0 flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined text-2xl">priority_high</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-error-container text-error font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold">
                Action Required
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Assessment #{assessment.ref}
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mt-1">
              {assessment.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 max-w-2xl">
              {assessment.description}
            </p>
            <div className="flex items-center gap-3 mt-space-sm flex-wrap text-on-surface-variant font-body-sm text-body-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base text-secondary">
                  payments
                </span>
                Channels: GCash, Maya, Landbank, OTC Cashier
              </span>
              <span className="text-outline">•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">schedule</span>
                Due by: Oct 05, 2026
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-space-md p-space-md bg-surface-container-low rounded-xl">
          <div className="flex flex-col lg:text-right">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Outstanding Assessment
            </span>
            <span className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
              ₱{assessment.amount.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-space-xs w-full lg:w-auto">
            <button
              type="button"
              onClick={onPay}
              className="px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-base">bolt</span>
              <span>Pay Online Now</span>
            </button>
            <button
              type="button"
              onClick={onUpload}
              className="px-space-md py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-base">upload_file</span>
              <span>Upload Receipt / Slip</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
