import { SUPPORT_OFFICES } from '../../data/help'

export default function SupportOffices() {
  return (
    <section className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
          Support Offices
        </h2>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Admin Complex
        </span>
      </div>

      <div className="flex flex-col gap-space-sm">
        {SUPPORT_OFFICES.map((office) => (
          <div
            key={office.id}
            className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-space-xs min-w-0">
                <span className="material-symbols-outlined text-secondary text-lg shrink-0">
                  {office.icon}
                </span>
                <span className="font-label-lg text-label-lg text-on-surface truncate">
                  {office.name}
                </span>
              </div>
              <span className="bg-surface-container-high text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded-full shrink-0">
                {office.location}
              </span>
            </div>

            <div className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm pl-6">
              {office.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs shrink-0">
                    {item.icon}
                  </span>
                  {item.type === 'link' ? (
                    <a
                      href={item.href}
                      className="hover:text-primary hover:underline truncate"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
