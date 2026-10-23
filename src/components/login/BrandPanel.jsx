const EMBLEM_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAMyCbmQ7ZcWfcp5n58gMAEaGJpiF06yLD-WjwaTbr67e9ZQGtui4mjrUUcX57zHa16pQFpY-PgKM-MsXoh7lyKRoJPtW20xZdQYJJC_3UUihK9rxWU3mqYmlIZpZ_zyJpbSSYNBKQzHuDLn_1bSasupm2yHNivwYanMiiOW2yoOuOYN0BkmONe4ERjq-FqST-Od6QbddudmrKtU-MOWEXUQsENpzmnOsUsE4ehx-U7'

export default function BrandPanel() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-primary-container via-tertiary-container to-primary p-6 text-surface-container-lowest sm:p-10 lg:col-span-5 lg:p-14 xl:col-span-6">
      {/* Decorative blurs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-secondary-container/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-surface-container-highest/10 blur-3xl" />

      {/* Top content */}
      <div className="relative z-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-container-lowest/10 p-1 shadow-md backdrop-blur-sm">
            <img
              className="h-full w-full rounded-full object-contain drop-shadow"
              alt="Official circular academic emblem seal of University of Southern Philippines Foundation"
              src={EMBLEM_URL}
            />
          </div>
          <div>
            <span className="block font-label-sm text-xs uppercase tracking-wider text-secondary-container">
              University of Southern Philippines Foundation
            </span>
            <span className="font-headline-sm text-lg font-semibold tracking-tight text-surface-container-lowest">
              USPF QLess Gateway
            </span>
          </div>
        </div>

        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-surface-container-lowest/15 px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider text-surface-container-lowest backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-container" />
          Official University Portal
        </div>

        <h1 className="mb-4 font-headline-xl text-3xl font-bold leading-tight tracking-tight text-surface-container-lowest sm:text-4xl lg:text-5xl">
          Expedite Your Academic Credentials
        </h1>
        <p className="max-w-xl font-body-lg text-sm leading-relaxed text-surface-dim sm:text-base">
          Lodge document requests, track real-time clearance workflows, schedule
          campus appointments, and verify credentials seamlessly anywhere.
        </p>
      </div>

      {/* Feature cards */}
      <div className="relative z-10 my-8 hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-xl border border-surface-container-lowest/10 bg-surface-container-lowest/10 p-4 backdrop-blur-sm">
          <span className="material-symbols-outlined mt-0.5 shrink-0 text-2xl text-secondary-container">
            speed
          </span>
          <div>
            <h2 className="font-headline-sm text-sm font-semibold text-surface-container-lowest">
              Real-Time Queuing
            </h2>
            <p className="mt-0.5 text-xs text-surface-dim">
              Live updates on registrar verification and document processing.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-surface-container-lowest/10 bg-surface-container-lowest/10 p-4 backdrop-blur-sm">
          <span className="material-symbols-outlined mt-0.5 shrink-0 text-2xl text-secondary-container">
            verified_user
          </span>
          <div>
            <h2 className="font-headline-sm text-sm font-semibold text-surface-container-lowest">
              256-Bit SSL Security
            </h2>
            <p className="mt-0.5 text-xs text-surface-dim">
              Encrypted end-to-end institutional grade student records.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-surface-container-lowest/10 pt-4 text-xs text-surface-dim">
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm">security</span>
          Institutional Identity &amp; Access Gateway
        </span>
        <span>USPF Campus v2.4</span>
      </div>
    </div>
  )
}
