export default function UrgentActionBanner({ onUpload }) {
  return (
    <div className="mb-space-lg rounded-xl bg-secondary-container/30 p-space-md px-space-lg flex flex-wrap items-center justify-between gap-space-md shadow-sm">
      <div className="flex items-center gap-space-md">
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-secondary-container text-on-secondary-container shadow-inner shrink-0">
          <span className="material-symbols-outlined text-2xl">priority_high</span>
        </div>
        <div className="flex flex-col">
          <h4 className="font-headline-sm text-headline-sm text-on-secondary-container font-semibold">
            Action Required: Identification Verification
          </h4>
          <p className="font-body-md text-body-md text-on-surface">
            Please upload the back photo of your valid{' '}
            <strong>USPF Student ID</strong> with current semester validation
            sticker to proceed to releasing clearance.
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onUpload}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-on-secondary-container text-surface font-label-lg text-label-lg hover:bg-primary transition-all shadow-sm"
      >
        <span className="material-symbols-outlined text-base">upload_file</span>
        <span>Upload Requirement Now</span>
      </button>
    </div>
  )
}
