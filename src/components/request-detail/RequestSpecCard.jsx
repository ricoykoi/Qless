export default function RequestSpecCard({ specification, fee }) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-space-sm rounded-t-xl">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary-container">
            article
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Request Specification
          </h3>
        </div>
        <span className="font-label-sm text-label-sm bg-surface-container-highest px-2 py-0.5 rounded text-on-surface">
          Degree Records
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-space-md gap-x-space-lg pt-space-xs">
        {specification.map((spec) => (
          <div key={spec.label}>
            <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wide">
              {spec.label}
            </span>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              {spec.icon && (
                <span className="material-symbols-outlined text-base text-primary">
                  {spec.icon}
                </span>
              )}
              <span
                className={
                  spec.valueBold
                    ? 'font-label-lg text-label-lg text-primary font-bold'
                    : 'font-body-md text-body-md text-on-surface'
                }
              >
                {spec.value}
              </span>
              {spec.badge && (
                <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-1.5 py-0.5 rounded">
                  {spec.badge}
                </span>
              )}
            </div>
            {spec.sub && (
              <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                {spec.sub}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-space-xs p-space-md bg-surface-container-low rounded-lg flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary-container">
            receipt_long
          </span>
          <div>
            <p className="font-label-md text-label-md text-primary font-semibold">
              {fee.title}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {fee.meta}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="text-primary hover:text-primary-container font-label-sm text-label-sm flex items-center gap-1 underline underline-offset-4"
        >
          {fee.cta}
        </button>
      </div>
    </div>
  )
}
