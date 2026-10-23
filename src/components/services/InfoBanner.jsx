export default function InfoBanner({ onInquiry }) {
  return (
    <section className="relative mt-space-lg overflow-hidden rounded-xl bg-primary-container p-space-lg text-on-primary shadow-md">
      <div className="pointer-events-none absolute -bottom-8 -right-6 opacity-10">
        <svg fill="currentColor" height="220" viewBox="0 0 100 100" width="220" aria-hidden="true">
          <path d="M50 5 L85 20 L85 55 C85 75 50 95 50 95 C50 95 15 75 15 55 L15 20 Z" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-start justify-between gap-space-md md:flex-row md:items-center">
        <div className="flex max-w-3xl items-start gap-space-md">
          <div className="mt-0.5 shrink-0 rounded-lg bg-secondary-container p-3 text-on-secondary-container">
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              help_center
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-primary">
              Need a customized credential not listed here?
            </h3>
            <p className="mt-1 font-body-md text-body-md text-on-primary-container">
              Submit an Administrative Inquiries Ticket or visit the Registrar
              Counter window at Mabolo Campus, Administration Building Room 102.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4 font-label-sm text-label-sm text-on-primary-container">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs" aria-hidden="true">
                  call
                </span>
                (032) 414-8773 loc 104
              </span>
              <span aria-hidden="true">•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs" aria-hidden="true">
                  schedule
                </span>
                Mon–Fri: 8:00 AM – 5:00 PM
              </span>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3 self-stretch md:self-auto">
          <button
            type="button"
            onClick={onInquiry}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary-container px-5 py-2.5 font-label-lg text-label-lg text-on-secondary-container shadow-sm transition-all hover:brightness-105 md:w-auto"
          >
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              support_agent
            </span>
            <span>Submit Inquiries Ticket</span>
          </button>
        </div>
      </div>
    </section>
  )
}
