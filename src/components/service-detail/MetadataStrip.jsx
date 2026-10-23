export default function MetadataStrip({ metadata }) {
  return (
    <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
      {metadata.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 rounded-xl bg-surface-container-lowest p-space-md shadow-sm"
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">
              {item.icon}
            </span>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              {item.label}
            </span>
            <span className="truncate font-headline-sm text-headline-sm font-semibold text-primary">
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
