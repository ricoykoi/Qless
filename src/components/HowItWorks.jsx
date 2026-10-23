import { steps } from '../data/services'

export default function HowItWorks() {
  return (
    <section
      className="w-full bg-surface-container-low px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">
            Zero Ambiguity
          </span>
          <h2 className="mt-1 font-headline-lg text-headline-lg font-bold tracking-tight text-primary">
            How QLess Works
          </h2>
          <p className="mt-2 font-body-md text-body-md leading-relaxed text-on-surface-variant">
            From submission to release, follow this intuitive six-step pathway
            designed to eliminate unnecessary lines and document delays.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="surface-card flex min-h-56 flex-col justify-between rounded-2xl bg-surface-container-lowest p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-6"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-container font-headline-sm text-headline-sm font-bold text-on-primary shadow-sm">
                  {step.num}
                </div>
                <h3 className="mb-2 font-headline-sm text-headline-sm font-bold text-primary">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {step.description}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-outline-variant/40 pt-3 font-label-sm text-label-sm text-primary">
                <span className="material-symbols-outlined text-sm text-secondary" aria-hidden="true">
                  {step.icon}
                </span>
                {step.footnote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
