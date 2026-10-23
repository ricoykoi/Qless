export default function ServiceCard({ service, onOpen }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex flex-col gap-space-sm">
        {/* Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-high px-2.5 py-0.5 font-label-sm text-label-sm font-semibold text-primary">
            <span className="material-symbols-outlined text-xs" aria-hidden="true">
              {service.categoryIcon}
            </span>
            {service.categoryLabel}
          </span>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-label-sm text-label-sm font-semibold ${service.tag.cls}`}
          >
            <span className="material-symbols-outlined text-xs" aria-hidden="true">
              {service.tag.icon}
            </span>
            {service.tag.label}
          </span>
        </div>

        {/* Title + Desc */}
        <div className="pt-1">
          <h2 className="font-headline-sm text-headline-sm text-primary transition-colors group-hover:text-tertiary-container">
            {service.name}
          </h2>
          <p className="mt-1.5 line-clamp-2 font-body-md text-body-md text-on-surface-variant">
            {service.description}
          </p>
        </div>

        {/* Specs */}
        <div className="mt-2 grid grid-cols-2 gap-2.5 rounded-lg bg-surface-container-low p-3.5">
          <Spec
            icon="schedule"
            label="Processing Time"
            value={service.processingTime}
          />
          <Spec icon="payments" label="Service Fee" value={service.fee} headline />
          <Spec
            icon="local_shipping"
            label="Release Method"
            value={service.release}
            span={2}
          />
          <Spec
            icon="fact_check"
            label="Prerequisites"
            value={service.prerequisites}
            span={2}
            small
          />
        </div>
      </div>

      {/* Action */}
      <div className="mt-auto pt-space-md">
        <button
          type="button"
          onClick={() => onOpen(service)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-tertiary-container active:scale-[0.99]"
        >
          <span>View Service &amp; Requirements</span>
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            arrow_forward
          </span>
        </button>
      </div>
    </article>
  )
}

function Spec({ icon, label, value, span, headline, small }) {
  return (
    <div className={`flex flex-col ${span === 2 ? 'col-span-2' : ''}`}>
      <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
        <span className="material-symbols-outlined text-xs" aria-hidden="true">
          {icon}
        </span>
        {label}
      </span>
      <span
        className={
          headline
            ? 'mt-0.5 font-headline-sm text-headline-sm text-primary'
            : small
              ? 'mt-0.5 font-body-sm text-body-sm font-medium text-on-surface'
              : 'mt-0.5 font-label-md text-label-md text-primary'
        }
      >
        {value}
      </span>
    </div>
  )
}
