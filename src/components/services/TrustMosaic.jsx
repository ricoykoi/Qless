import { TRUST_ITEMS } from '../../data/services'

export default function TrustMosaic() {
  return (
    <section className="mt-space-xl grid grid-cols-1 gap-space-md lg:grid-cols-3">
      {TRUST_ITEMS.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-3 rounded-xl bg-surface-container-lowest p-space-md shadow-sm"
        >
          <div className={`rounded-lg p-2 ${item.iconBg}`}>
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              {item.icon}
            </span>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-primary">
              {item.title}
            </h4>
            <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
