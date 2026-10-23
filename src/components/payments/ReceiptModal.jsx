export default function ReceiptModal({ receipt, onClose }) {
  const handlePrint = () => window.print()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
      <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-space-lg shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="text-center pb-space-md">
          <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-2">
            <span className="material-symbols-outlined text-2xl text-secondary">
              verified_user
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            University of Southern Philippines Foundation
          </h3>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Official Electronic Receipt • Mabolo Campus
          </p>
          <span className="inline-block mt-2 font-mono font-bold text-sm bg-surface-container px-3 py-1 rounded-full text-primary">
            #{receipt.or}
          </span>
        </div>

        <div className="space-y-3 py-space-md font-body-sm text-body-sm text-on-surface">
          <Row label="Date Settled:" value={receipt.date} />
          <Row label="Student Name:" value="Charlyn Dico" />
          <Row label="Particulars:" value={receipt.item} />
          <Row label="Payment Channel:" value={receipt.channel} />
          <div className="pt-3 flex justify-between items-center">
            <span className="font-label-md text-label-md text-primary">
              Amount Cleared:
            </span>
            <span className="font-headline-md text-headline-md text-primary font-bold">
              ₱{receipt.amount.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-space-md pt-space-sm flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrint}
            className="px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">print</span>
            Print OR
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-space-lg py-2 rounded-lg bg-primary text-on-primary hover:bg-tertiary-container font-label-md text-label-md transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between items-center gap-3">
      <span className="text-on-surface-variant shrink-0">{label}</span>
      <span className="font-semibold text-primary text-right">{value}</span>
    </div>
  )
}
