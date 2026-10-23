import DeliveryOptions from './DeliveryOptions'

export default function RequestSummaryCard({
  basePrice,
  copies,
  onInc,
  onDec,
  maxCopies,
  deliveryOptions,
  deliveryId,
  onDeliveryChange,
  totals,
  onSubmit,
}) {
  return (
    <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-surface-container pb-space-sm">
        <h3 className="font-headline-sm text-headline-sm font-semibold text-primary">
          Request Summary
        </h3>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          ₱{basePrice.toFixed(2)} / copy
        </span>
      </div>

      {/* Delivery options */}
      <div className="flex flex-col gap-space-xs">
        <label className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
          Delivery Method
        </label>
        <DeliveryOptions
          options={deliveryOptions}
          selectedId={deliveryId}
          onChange={onDeliveryChange}
        />
      </div>

      {/* Copies stepper */}
      <div className="flex items-center justify-between border-y border-surface-container py-2">
        <span className="font-label-md text-label-md font-semibold text-primary">
          Copies
        </span>
        <div className="flex items-center rounded-lg bg-surface-container p-0.5">
          <button
            type="button"
            onClick={onDec}
            disabled={copies <= 1}
            aria-label="Decrease copy count"
            className="flex h-7 w-7 items-center justify-center rounded bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-surface-container-high disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              remove
            </span>
          </button>
          <span className="w-8 text-center font-label-lg text-label-lg font-bold text-primary">
            {copies}
          </span>
          <button
            type="button"
            onClick={onInc}
            disabled={copies >= maxCopies}
            aria-label="Increase copy count"
            className="flex h-7 w-7 items-center justify-center rounded bg-surface-container-lowest text-primary shadow-sm transition-colors hover:bg-surface-container-high disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              add
            </span>
          </button>
        </div>
      </div>

      {/* Totals */}
      <div className="flex flex-col gap-1 rounded-lg bg-surface-container-high/40 p-space-sm">
        <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
          <span>
            Base Cost ({copies} × ₱{basePrice}):
          </span>
          <span>₱{totals.baseTotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
          <span>Delivery Fee:</span>
          <span>₱{totals.deliveryFee.toFixed(2)}</span>
        </div>
        <div className="my-1 h-px bg-surface-container" />
        <div className="flex items-center justify-between">
          <span className="font-label-lg text-label-lg font-bold text-primary">
            Total Cost:
          </span>
          <span className="font-headline-lg text-headline-lg font-bold text-primary">
            ₱{totals.grandTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={onSubmit}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-space-md py-3 font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary"
      >
        <span>Request This Service</span>
        <span className="material-symbols-outlined text-lg" aria-hidden="true">
          arrow_forward
        </span>
      </button>

      <div className="flex items-center justify-center gap-1.5 text-center font-body-sm text-body-sm text-on-surface-variant">
        <span className="material-symbols-outlined text-sm text-secondary" aria-hidden="true">
          verified_user
        </span>
        <span>Secured Automated Registry</span>
      </div>
    </div>
  )
}
