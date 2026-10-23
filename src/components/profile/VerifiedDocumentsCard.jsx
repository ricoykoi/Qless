export default function VerifiedDocumentsCard({ documents }) {
  return (
    <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex items-center justify-between pb-space-sm mb-space-md gap-2">
        <div className="flex items-center gap-space-sm">
          <div className="p-2 rounded-lg bg-surface-container-high text-primary">
            <span className="material-symbols-outlined text-xl">verified</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Verified Documents
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Official student credentials
            </p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container font-label-sm text-label-sm transition-colors"
        >
          <span className="material-symbols-outlined text-sm">upload_file</span>
          <span>Upload</span>
        </button>
      </div>

      <div className="flex flex-col gap-space-sm">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-space-sm min-w-0">
              <span className={`material-symbols-outlined text-xl ${doc.iconClass}`}>
                {doc.icon}
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-primary truncate font-semibold">
                  {doc.name}
                </span>
                {doc.verified && (
                  <span className="text-xs text-emerald-700 font-medium">
                    Verified
                  </span>
                )}
              </div>
            </div>
            <a
              href="#view-document"
              className="font-label-sm text-label-sm text-primary hover:underline ml-2 shrink-0"
            >
              {doc.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
