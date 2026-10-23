export default function RequirementsChecklist({ requirements }) {
  return (
    <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex items-center justify-between border-b border-surface-container pb-space-sm">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-xl text-secondary" aria-hidden="true">
            checklist
          </span>
          <h2 className="font-headline-md text-headline-md font-semibold">
            Requirements Checklist
          </h2>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          {requirements.length} Items Needed
        </span>
      </div>

      <p className="font-body-md text-body-md text-on-surface-variant">
        Prepare the following items to avoid processing delays:
      </p>

      <div className="flex flex-col gap-2.5">
        {requirements.map((req) => (
          <div
            key={req.label}
            className="flex items-center gap-3 rounded-lg bg-surface-container-low p-3"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-container/40 text-primary">
              <span className="material-symbols-outlined text-sm font-bold" aria-hidden="true">
                check
              </span>
            </div>
            <div className="flex flex-1 items-center justify-between gap-3">
              <span className="font-label-md text-label-md font-semibold text-primary">
                {req.label}
              </span>
              <span className="shrink-0 font-label-sm text-label-sm text-on-surface-variant">
                {req.hint}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
