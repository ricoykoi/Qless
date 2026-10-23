import { useState } from 'react'
import { TICKET_CATEGORIES } from '../../data/help'

export default function TicketForm({ prefillCategory }) {
  const [category, setCategory] = useState(prefillCategory ?? '')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!category || !subject || !message) return

    setSubmitting(true)
    setTimeout(() => {
      const randomTicketNum = Math.floor(1000 + Math.random() * 9000)
      setSuccess({ ref: `#TKT-2025-${randomTicketNum}` })
      setSubmitting(false)
    }, 600)
  }

  const handleReset = () => {
    setCategory('')
    setSubject('')
    setMessage('')
    setSuccess(null)
  }

  return (
    <section
      id="ticket-form"
      className="relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md overflow-hidden"
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
            Still need assistance?
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Submit a Support Ticket
          </h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container">
          <span className="material-symbols-outlined text-base">outgoing_mail</span>
        </div>
      </div>

      <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="ticket-category"
            className="font-label-sm text-label-sm text-on-surface"
          >
            Category
          </label>
          <div className="relative">
            <select
              id="ticket-category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container transition-all appearance-none pr-8 cursor-pointer"
            >
              <option value="" disabled>
                Select concern category
              </option>
              {TICKET_CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-2.5 pointer-events-none text-on-surface-variant text-base">
              expand_more
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="ticket-subject"
            className="font-label-sm text-label-sm text-on-surface"
          >
            Subject / Reference Number
          </label>
          <input
            id="ticket-subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g., TOR Urgent Request #REQ-2025-0891"
            className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="ticket-message"
            className="font-label-sm text-label-sm text-on-surface"
          >
            Brief Description
          </label>
          <textarea
            id="ticket-message"
            required
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Explain your inquiry or issue clearly to help officers resolve it quicker..."
            className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline resize-none"
          />
        </div>

        <div className="flex items-center gap-2 py-1 px-2 rounded bg-surface-container-low text-on-surface-variant">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="font-label-sm text-label-sm">
            Average response time: <strong>Within 24 business hours</strong>
          </span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-space-xs w-full py-2.5 px-4 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-tertiary-container active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
        >
          {submitting ? (
            <>
              <span className="material-symbols-outlined text-sm animate-spin">
                refresh
              </span>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit Support Ticket</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </>
          )}
        </button>
      </form>

      {success && (
        <div className="absolute inset-0 bg-surface-container-lowest p-space-lg flex flex-col items-center justify-center text-center gap-space-sm z-20">
          <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">check_circle</span>
          </div>
          <h4 className="font-headline-sm text-headline-sm text-primary">
            Ticket Logged Successfully
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
            Reference{' '}
            <span className="font-semibold text-primary">{success.ref}</span> has
            been dispatched to the Registrar Desk. You will receive an email
            update shortly.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-space-xs px-4 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container font-label-md text-label-md text-on-surface transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      )}
    </section>
  )
}
