export default function ServiceHeader() {
  return (
    <section className="mb-space-lg flex flex-col gap-space-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-md">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-2.5 py-0.5 font-label-sm text-label-sm uppercase tracking-wide text-on-secondary-container">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-on-secondary-container" />
              Academic Year 2025–2026
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Registrar Mabolo Campus
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl tracking-tight text-primary">
            Services
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Choose the official academic or administrative document service you
            need. Secure digital verifications and expedited counter releases
            handled seamlessly.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-surface-container-lowest p-2 shadow-sm">
          <div className="flex items-center gap-2.5 rounded-lg bg-surface-container-low px-3 py-2">
            <div className="rounded-md bg-primary p-1.5 text-on-primary">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                verified
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm leading-none text-primary">
                100%
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                CHED Authenticated
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg bg-surface-container-low px-3 py-2">
            <div className="rounded-md bg-secondary p-1.5 text-on-secondary">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                speed
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm leading-none text-primary">
                1–3 Days
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Average Turnaround
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
