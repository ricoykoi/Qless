import { STATS } from '../../data/requests'

export default function RequestStatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 xl:grid-cols-4">
      {STATS.map((s) => (
        <div
          key={s.key}
          className="flex items-center justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-sm"
        >
          <div className="flex flex-col">
            <span
              className={`font-label-sm text-label-sm uppercase tracking-wider ${s.titleClass}`}
            >
              {s.title}
            </span>
            <span className={`mt-1 font-headline-lg text-headline-lg ${s.valueClass}`}>
              {s.value}
            </span>
            <span
              className={`mt-0.5 flex items-center gap-1 font-body-sm text-body-sm ${s.subtitleClass}`}
            >
              {s.subtitleDot && (
                <span className={`h-2 w-2 rounded-full ${s.subtitleDot}`} />
              )}
              {s.subtitle}
            </span>
          </div>
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg}`}
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              {s.icon}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
