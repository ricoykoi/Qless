export default function PaymentsHeader({ onScrollOtc, onPayOutstanding }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
      <div className="flex flex-col">
        <div className="flex items-center gap-space-xs text-on-surface-variant mb-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Student Accounts &amp; Cashier Portal
          </span>
          <span className="text-xs">•</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            AY 2025-2026
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          Payments &amp; Fee Assessment
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
          View, settle, and audit transactions for credential certifications,
          diploma requests, and transcript releases.
        </p>
      </div>

      <div className="flex items-center gap-space-sm flex-wrap">
        <button
          type="button"
          onClick={onScrollOtc}
          className="px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-primary font-label-lg text-label-lg transition-colors flex items-center gap-2 shadow-sm"
        >
          <span className="material-symbols-outlined text-base">receipt_long</span>
          <span>Cashier Guide</span>
        </button>
        <button
          type="button"
          onClick={onPayOutstanding}
          className="px-space-lg py-2.5 rounded-lg bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-lg text-label-lg transition-all flex items-center gap-2 shadow-md hover:shadow-lg transform active:scale-95"
        >
          <span className="material-symbols-outlined text-base">add_card</span>
          <span>+ Pay Outstanding Assessment</span>
        </button>
      </div>
    </div>
  )
}
