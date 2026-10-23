export default function EmptyState({ onReset }) {
  return (
    <div className="my-4 flex flex-col items-center justify-center rounded-xl bg-surface-container-lowest p-space-xl text-center shadow-sm">
      <div className="mb-space-sm flex h-16 w-16 items-center justify-center rounded-full bg-surface-container text-on-surface-variant">
        <span className="material-symbols-outlined text-3xl" aria-hidden="true">
          search_off
        </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary">
        No matching document services
      </h3>
      <p className="mt-1 max-w-md font-body-md text-body-md text-on-surface-variant">
        We couldn't find any services matching your search or active filter. Try
        adjusting your search term or exploring all services.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-space-md rounded-lg bg-primary px-4 py-2 font-label-md text-label-md text-on-primary transition-colors hover:bg-primary-container"
      >
        Clear All Filters
      </button>
    </div>
  )
}
