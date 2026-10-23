import { useState } from 'react'

export default function InquiryModal({ onClose, onSubmit }) {
  const [subject, setSubject] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ subject, details })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
      />
      <div
        aria-labelledby="inquiry-modal-title"
        aria-modal="true"
        className="relative z-10 flex w-full max-w-md flex-col gap-space-md overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-xl"
        role="dialog"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm text-primary" id="inquiry-modal-title">
            Submit Inquiries Ticket
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry form"
            className="rounded-lg p-1 text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              close
            </span>
          </button>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Have a question regarding custom credentials, CAV (CHED Red Ribbon),
          or cross-enrollment certifications?
        </p>

        <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
          <div>
            <label
              className="mb-1 block font-label-sm text-label-sm text-on-surface-variant"
              htmlFor="inquiry-subject"
            >
              Subject / Document Type
            </label>
            <input
              id="inquiry-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. CAV Application or CAV Red Ribbon Endorsement"
              className="w-full rounded-lg bg-surface-container-low px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container"
            />
          </div>
          <div>
            <label
              className="mb-1 block font-label-sm text-label-sm text-on-surface-variant"
              htmlFor="inquiry-details"
            >
              Inquiry Details
            </label>
            <textarea
              id="inquiry-details"
              required
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe your request or situation..."
              className="w-full resize-y rounded-lg bg-surface-container-low px-3 py-2 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-primary px-4 py-1.5 font-label-md text-label-md text-on-primary shadow-sm hover:bg-tertiary-container"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
