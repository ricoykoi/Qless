import { STATS } from '../../data/payments'

export default function PaymentStatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
      {STATS.map((s) => (
        <div
          key={s.key}
          className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
        >
          {s.highlight && (
            <div className="absolute -right-3 -top-3 w-14 h-14 bg-error-container/40 rounded-full blur-xl pointer-events-none" />
          )}
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant">
              {s.title}
            </span>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.iconBg}`}
            >
              <span
                className="material-symbols-outlined text-lg"
                style={s.iconFill ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {s.icon}
              </span>
            </div>
          </div>
          <div className="mt-space-md">
            <div
              className={`${
                s.isChannel
                  ? 'font-headline-sm text-headline-sm font-semibold'
                  : 'font-headline-xl text-headline-xl font-bold'
              } tracking-tight truncate ${s.valueClass}`}
            >
              {s.value}
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-on-surface-variant">
              {s.subtitleDot && (
                <span className={`inline-block w-2 h-2 rounded-full ${s.subtitleDot}`} />
              )}
              <span className={`font-body-sm text-body-sm ${s.subtitleClass ?? ''}`}>
                {s.subtitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
