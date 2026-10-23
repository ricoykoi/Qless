export default function SidebarSummary() {
  return (
    <aside className="flex flex-col gap-space-md lg:col-span-4">
      {/* Verification Benefit Card */}
      <div className="relative flex flex-col gap-space-sm overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
        <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-secondary-container/20 blur-xl" />
        <div className="flex items-center gap-space-xs">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-container text-on-secondary-container">
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              verified
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Why verify your account?
          </h3>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Online verification ensures instant processing and prevents
          unauthorized requests of academic records, grades, and graduation
          credentials.
        </p>
        <div className="flex flex-col gap-space-xs pt-space-xs">
          <Benefit icon="bolt" text="Priority Registrar Queue Ticket" />
          <Benefit icon="history_edu" text="Direct TOR & Good Moral Release" />
          <Benefit icon="lock_clock" text="Secure USPF Identity Archive" />
        </div>
      </div>

      {/* Live Transaction Status Preview Widget */}
      <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">
            Portal System Health
          </span>
          <span className="flex items-center gap-1 rounded-full bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            Operational
          </span>
        </div>
        <div className="flex items-center gap-space-sm rounded-lg bg-surface-container-low p-space-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest font-bold text-primary">
            2.4k
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md font-semibold text-primary">
              Registrations Processed
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              First Semester AY 2024-2025
            </span>
          </div>
        </div>
        {/* Registrar Help Contact Snippet */}
        <div className="flex flex-col gap-1 rounded-lg bg-surface-container p-space-sm">
          <span className="font-label-sm text-label-sm font-semibold text-primary">
            Need Assistance?
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Email: registrar@uspf.edu.ph
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Tel: (032) 414-7963 loc. 104
          </span>
        </div>
      </div>
    </aside>
  )
}

function Benefit({ icon, text }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-surface-container-low p-2">
      <span className="material-symbols-outlined text-sm text-secondary" aria-hidden="true">
        {icon}
      </span>
      <span className="font-body-sm text-body-sm font-semibold text-on-surface">
        {text}
      </span>
    </div>
  )
}
