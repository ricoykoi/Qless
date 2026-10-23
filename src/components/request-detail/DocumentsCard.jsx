export default function DocumentsCard({ documents, missingDocument, onUpload }) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-space-sm rounded-t-xl">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary-container">
            attachment
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Submitted Requirements &amp; Documents
          </h3>
        </div>
        <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface px-2 py-0.5 rounded">
          {documents.filter((d) => d.verified).length} of{' '}
          {documents.length + 1} Verified
        </span>
      </div>

      <div className="flex flex-col gap-space-sm">
        {documents.map((doc) => (
          <div
            key={doc.name}
            className="flex flex-wrap items-center justify-between p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors"
          >
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
                <span className="material-symbols-outlined text-xl">
                  picture_as_pdf
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface">
                  {doc.name}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {doc.meta}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md mt-2 sm:mt-0">
              {doc.verified && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-lowest text-primary font-semibold shadow-sm">
                  <span className="material-symbols-outlined text-xs text-primary">
                    check_circle
                  </span>
                  Verified ✓
                </span>
              )}
              <button
                type="button"
                className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-base">
                  download
                </span>
              </button>
            </div>
          </div>
        ))}

        <div
          id="id-back-upload"
          className="p-space-md rounded-lg bg-secondary-container/20 flex flex-col gap-space-sm shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm shrink-0">
                <span className="material-symbols-outlined text-xl">warning</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                  {missingDocument.name}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {missingDocument.meta}
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-container font-bold shadow-sm">
              Missing / Required
            </span>
          </div>

          <label className="mt-space-xs p-space-lg rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-low transition-all">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container mb-2 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">cloud_upload</span>
            </div>
            <p className="font-label-md text-label-md text-primary font-semibold">
              Drag and drop file here, or browse from device
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Supports PDF, PNG, JPG (Maximum 10 MB)
            </p>
            <span className="mt-3 px-4 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-colors inline-block">
              Select Document
            </span>
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              className="hidden"
              onChange={(e) => onUpload?.(e.target.files?.[0] ?? null)}
            />
          </label>
        </div>
      </div>
    </div>
  )
}
