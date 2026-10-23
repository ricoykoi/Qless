export default function ServiceTitleHeader({ service }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex flex-col justify-between gap-space-md sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-surface-container-high px-2.5 py-0.5 font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">
              {service.code}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {service.categoryLabel}
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl font-bold tracking-tight text-primary">
            {service.title}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {service.subtitle}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 self-start rounded-lg bg-surface-container-low px-3 py-1.5 text-primary sm:self-center">
          <span className="material-symbols-outlined text-lg text-secondary" aria-hidden="true">
            verified
          </span>
          <span className="font-label-md text-label-md font-semibold">
            {service.badgeLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
