import { services } from '../data/services'

export default function Services() {
  return (
    <section
      className="w-full bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      id="services"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">
              Catalog of Academic Credentials
            </span>
            <h2 className="mt-1 font-headline-lg text-headline-lg font-bold tracking-tight text-primary">
              Featured Online Services
            </h2>
          </div>
          <p className="max-w-md font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Request primary scholastic records authenticated directly by the USPF
            Registrar Office with tamper-evident digital verification.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="surface-card group flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-6"
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-primary">
                    {service.tag}
                  </span>
                  <span className="material-symbols-outlined text-xl text-primary transition-colors group-hover:text-secondary" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mb-2 min-h-12 font-headline-sm text-headline-sm font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mb-5 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {service.description}
                </p>
              </div>
              <div>
                <div className="mb-4 space-y-2 rounded-xl bg-surface-container-low px-3 py-3">
                  <Row label="Timeline:" value={service.timeline} />
                  <Row label="Filing Fee:" value={service.fee} bold />
                  <Row label="Method:" value={service.method} secondary />
                </div>
                <button
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-surface-container px-4 py-2.5 font-label-md text-label-md text-primary transition-all hover:bg-primary-container hover:text-on-primary"
                  type="button"
                >
                  <span>View Service</span>
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Row({ label, value, bold, secondary }) {
  return (
    <div className="flex justify-between items-center font-body-sm text-body-sm">
      <span className="text-on-surface-variant">{label}</span>
      <span
        className={
          bold
            ? 'font-label-md text-label-md text-primary font-bold'
            : secondary
            ? 'font-label-sm text-label-sm text-secondary font-semibold'
            : 'font-label-sm text-label-sm text-primary font-semibold'
        }
      >
        {value}
      </span>
    </div>
  )
}
