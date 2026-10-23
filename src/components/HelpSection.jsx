export default function HelpSection() {
  return (
    <section className="w-full bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8" id="help">
      <div className="surface-card mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl bg-gradient-to-r from-surface-container-high to-surface-container p-6 shadow-sm sm:p-8 md:flex-row md:items-center md:p-12">
        <div className="max-w-2xl">
          <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">
            USPF Student Helpdesk
          </span>
          <h2 className="mb-3 mt-1 font-headline-lg text-headline-lg font-bold tracking-tight text-primary">
            Have questions about document eligibility or clearances?
          </h2>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Our Registrar team and Admissions advisers are standing by to guide
            both continuing students and alumni through the requirements.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            className="flex items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3 font-label-lg text-label-lg text-on-primary shadow transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-md"
            href="#help"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">support_agent</span>
            <span>Contact Registrar</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest px-6 py-3 font-label-lg text-label-lg text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-surface hover:shadow-md"
            href="#help"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">help_outline</span>
            <span>Read FAQs</span>
          </a>
        </div>
      </div>
    </section>
  )
}
