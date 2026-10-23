export default function ArchiveNoticeCard() {
  return (
    <div className="flex flex-col items-start justify-between gap-space-md rounded-xl bg-surface-container-low p-space-md md:flex-row md:items-center">
      <div className="flex items-center gap-space-md">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-primary">
          <span className="material-symbols-outlined text-xl" aria-hidden="true">
            history_edu
          </span>
        </div>
        <div>
          <h4 className="font-headline-sm text-headline-sm text-primary">
            Can't find an older paper request from prior academic years?
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Historical paper records processed prior to QLess v2.0 deployment can
            be requested through the Manual Archive Retrieval System.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="self-stretch rounded-lg bg-surface-container-lowest px-4 py-2 text-center font-label-md text-label-md text-primary shadow-sm transition-colors hover:bg-surface-container md:self-auto"
      >
        Submit Archive Retrieval Request →
      </button>
    </div>
  )
}
