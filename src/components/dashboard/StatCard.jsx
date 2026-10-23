export default function StatCard({ stat }) {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <span
          className={`font-label-md text-label-md uppercase tracking-wider ${stat.titleClass}`}
        >
          {stat.title}
        </span>
        <div
          className={`relative flex h-8 w-8 items-center justify-center rounded-lg ${stat.iconBg} ${stat.iconColor}`}
        >
          <span className="material-symbols-outlined text-lg" aria-hidden="true">
            {stat.icon}
          </span>
          {stat.pulse && (
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full bg-secondary" />
          )}
        </div>
      </div>
      <div className="my-space-sm flex items-baseline gap-2">
        <span className={`font-headline-xl text-headline-xl font-bold ${stat.valueClass}`}>
          {stat.value}
        </span>
        <span
          className={`rounded px-1.5 py-0.5 font-label-sm text-label-sm font-semibold ${stat.badgeClass}`}
        >
          {stat.badge}
        </span>
      </div>
      <div
        className={`flex items-center gap-1.5 font-body-sm text-body-sm ${stat.detailClass}`}
      >
        <span className={`h-2 w-2 rounded-full ${stat.dot}`} />
        <span>{stat.detail}</span>
      </div>
    </div>
  )
}
