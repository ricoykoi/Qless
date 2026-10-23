import { useState } from 'react'

const pipeline = [
  { n: 1, title: 'Request', desc: 'Submit online credentials', active: true },
  { n: 2, title: 'Verification', desc: 'Identity & prerequisite check', active: true },
  { n: 3, title: 'Processing', desc: 'Registrar archive signing', secondary: true },
  { n: 4, title: 'Release Ready', desc: 'Digital stamp & dispatch' },
  { n: 5, title: 'Completed', desc: 'Download or Mabolo pickup' },
]

export default function Hero({ onTrackRequest }) {
  const [refCode, setRefCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onTrackRequest()
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-background px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8"
      id="home"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest/80 px-3.5 py-2 shadow-sm">
          <span
            className="material-symbols-outlined text-secondary text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          <span className="font-label-sm text-label-sm text-on-surface tracking-wide">
            University of Southern Philippines Foundation <span aria-hidden="true">•</span> Official Portal
          </span>
        </div>
        <h1 className="mb-5 max-w-4xl font-headline-xl text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl sm:leading-[1.12]">
          Skip the Queue. <span className="text-on-primary-fixed-variant">Manage Your USPF Requests Online.</span>
        </h1>
        <p className="mb-8 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          Submit official requests, upload required credentials, track progress in real-time,
          handle payments securely, and receive updates without unnecessary campus visits.
        </p>
        <div className="mb-12 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-7 py-3.5 font-label-lg text-label-lg text-on-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-xl sm:w-auto"
            href="#services"
          >
            <span>Start a Request</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <button
            onClick={onTrackRequest}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-7 py-3.5 font-label-lg text-label-lg text-on-surface shadow-sm transition-all hover:-translate-y-0.5 hover:bg-surface-container hover:shadow-md sm:w-auto"
            type="button"
          >
            <span className="material-symbols-outlined text-sm text-primary">
              search_insights
            </span>
            <span>Track My Request</span>
          </button>
        </div>

        {/* Tracking Widget */}
        <div
          className="surface-card mb-12 w-full max-w-2xl rounded-2xl bg-surface-container-lowest p-2.5"
          id="track"
        >
          <form
            className="flex flex-col items-stretch gap-2 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-surface-container-low px-3 py-2.5 text-left">
              <span className="material-symbols-outlined text-base text-on-surface-variant" aria-hidden="true">
                pin
              </span>
              <input
                aria-label="Request reference code"
                className="w-full min-w-0 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none"
                placeholder="Enter Reference Code (e.g., USPF-2026-9481)"
                required
                type="text"
                value={refCode}
                onChange={(e) => setRefCode(e.target.value)}
              />
            </label>
            <button
              className="shrink-0 rounded-lg bg-secondary-container px-5 py-2.5 font-label-md text-label-md text-on-secondary-container shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-95 sm:w-auto"
              type="submit"
            >
              Query Status
            </button>
          </form>
        </div>

        {/* Pipeline */}
        <div className="surface-card w-full max-w-5xl rounded-2xl bg-surface-container-lowest p-4 sm:p-6">
          <div className="mb-4 flex flex-col gap-2 text-left sm:flex-row sm:items-center sm:justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Standard Processing Pipeline
            </span>
            <span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Average Turnaround: 2–4 Business Days
            </span>
          </div>
          <div className="relative grid grid-cols-2 gap-3 md:grid-cols-5">
            {pipeline.map((step) => (
              <div
                key={step.n}
                className={`flex flex-col items-center rounded-xl border border-outline-variant/30 bg-surface-container-low p-3 text-center transition-colors hover:bg-surface-container ${
                  step.n === 5 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full font-label-sm text-label-sm flex items-center justify-center mb-2 ${
                    step.secondary
                      ? 'bg-secondary-container text-on-secondary-container'
                      : step.active
                      ? 'bg-primary-container text-on-primary'
                      : 'bg-surface-container-high text-on-surface'
                  }`}
                >
                  {step.n}
                </span>
                <span className="font-headline-sm text-headline-sm text-primary mb-1">
                  {step.title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
