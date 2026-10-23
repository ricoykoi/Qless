export default function PipelineStepper({ steps, referenceId }) {
  const doneCount = steps.filter((s) => s.state === 'done').length
  const activeCount = steps.some((s) => s.state === 'active') ? 1 : 0
  const progressPct = Math.round(
    ((doneCount + activeCount * 0.5) / steps.length) * 100
  )

  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl mb-space-lg shadow-sm">
      <div className="flex items-center justify-between mb-space-md flex-wrap gap-space-sm">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Live Routing &amp; Processing Pipeline
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Track your credential verification, evaluation, and scheduled
            physical turnover.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full text-on-surface-variant font-label-sm text-label-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-surface-tint" />
          Reference ID: {referenceId}
        </div>
      </div>

      <div className="relative pt-4 pb-2">
        <div className="hidden lg:block absolute top-10 left-12 right-12 h-1 bg-surface-container-high rounded-full -z-0">
          <div
            className="h-full bg-primary-container rounded-full transition-all duration-700"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-space-md relative z-10">
          {steps.map((s) => (
            <Step key={s.key} step={s} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Step({ step }) {
  const { state, icon, title, time, note } = step

  const isDone = state === 'done'
  const isActive = state === 'active'
  const isUpcoming = state === 'upcoming'

  const badgeClass = isDone
    ? 'bg-primary-container text-on-primary shadow-md'
    : isActive
      ? 'bg-secondary-container text-on-secondary-container shadow-lg'
      : 'bg-surface-container-high text-on-surface-variant shadow-sm'

  const titleClass = isDone
    ? 'text-primary'
    : isActive
      ? 'text-on-secondary-container font-bold'
      : 'text-on-surface-variant'

  const timeClass = isActive
    ? 'text-on-surface font-semibold'
    : 'text-on-surface-variant'

  const noteClass = isActive
    ? 'text-on-surface font-medium'
    : 'text-on-surface-variant'

  return (
    <div
      className={`flex flex-col items-start lg:items-center text-left lg:text-center group ${
        isUpcoming ? 'opacity-60' : ''
      }`}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 relative ${badgeClass}`}
      >
        <span className="material-symbols-outlined text-xl">{icon}</span>
        {isActive && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary" />
          </span>
        )}
      </div>
      <span className={`font-label-lg text-label-lg ${titleClass}`}>{title}</span>
      <span className={`font-label-sm text-label-sm ${timeClass}`}>{time}</span>
      <span className={`font-body-sm text-body-sm mt-1 ${noteClass}`}>{note}</span>
    </div>
  )
}
