import { useState } from 'react'
import { PAYMENT_METHODS } from '../../data/payments'

export default function PaymentModal({ request, onClose, onAuthorize }) {
  const [method, setMethod] = useState(
    PAYMENT_METHODS.find((m) => m.default)?.id ?? PAYMENT_METHODS[0].id
  )

  const handleAuthorize = () => {
    onAuthorize?.({ method })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-space-sm mb-space-md">
          <div className="w-10 h-10 rounded-xl bg-secondary-container/60 text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">
              shopping_cart_checkout
            </span>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md text-primary">
              University Fee Settlement
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Select authorized secure electronic gateway
            </p>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl p-space-md mb-space-md">
          <div className="flex justify-between items-center mb-1">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Request Document
            </span>
            <span className="font-label-sm text-label-sm text-primary font-semibold">
              {request.docName}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Reference Identifier
            </span>
            <span className="font-mono text-xs text-on-surface">{request.ref}</span>
          </div>
          <div className="pt-2 flex justify-between items-center">
            <span className="font-label-md text-label-md text-primary font-semibold">
              Total Payable
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              ₱{request.amount.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="space-y-2 mb-space-lg">
          <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block mb-1">
            Choose Payment Method
          </label>
          {PAYMENT_METHODS.map((m) => (
            <label
              key={m.id}
              className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment-method"
                  value={m.id}
                  checked={method === m.id}
                  onChange={() => setMethod(m.id)}
                  className="text-primary focus:ring-0"
                />
                <div>
                  <div className="font-label-md text-label-md text-primary">
                    {m.label}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {m.desc}
                  </div>
                </div>
              </div>
              {m.badge && (
                <span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-secondary-container/40 text-on-secondary-container">
                  {m.badge}
                </span>
              )}
            </label>
          ))}
        </div>

        <div className="flex items-center justify-end gap-space-sm">
          <button
            type="button"
            onClick={onClose}
            className="px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleAuthorize}
            className="px-space-lg py-2.5 rounded-lg bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-lg text-label-lg transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Authorize ₱{request.amount.toFixed(2)} →</span>
          </button>
        </div>
      </div>
    </div>
  )
}
