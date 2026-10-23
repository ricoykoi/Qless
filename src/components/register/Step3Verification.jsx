import { ID_SAMPLE_URL, GOV_ID_SAMPLE_URL } from '../../data/registration'

export default function Step3Verification({ data, onChange }) {
  return (
    <section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-space-xs">
          <span className="rounded-full bg-secondary-fixed px-2 py-0.5 font-label-sm text-label-sm font-semibold uppercase tracking-wide text-on-secondary-fixed">
            Identity Proof
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Step 3 of 4
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
          Identity &amp; Verification Upload
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Submit clear photographic or scanned documentation to cross-verify
          USPF institutional database records.
        </p>
      </div>

      <UploadCard
        icon="id_card"
        title="Valid USPF ID / Alumni Card"
        badge="Required"
        badgeClass="text-secondary"
        imageUrl={ID_SAMPLE_URL}
        imageAlt="Close up specimen mock view of a university student identification card"
        overlayIcon="photo_camera"
        headline="Drop USPF ID file here or browse files"
        subtitle="Supports PDF, JPG, PNG (Max 10MB)"
        note="Front and back readable copy"
        buttonLabel="Select File"
        buttonClass="bg-primary text-on-primary hover:bg-tertiary"
        onFile={(file) => onChange('uspfIdFile', file)}
        fileName={data.uspfIdFile?.name}
      />

      <UploadCard
        icon="verified_user"
        title="Supporting Government ID"
        badge="Optional for Current Students"
        badgeClass="text-on-surface-variant"
        imageUrl={GOV_ID_SAMPLE_URL}
        imageAlt="National identity card biometric identification document"
        headline="Passport, Driver's License, or National ID"
        subtitle="Ensure full legal name matches records"
        buttonLabel="Choose Document"
        buttonClass="bg-surface-container-highest text-primary hover:bg-surface-variant"
        onFile={(file) => onChange('govIdFile', file)}
        fileName={data.govIdFile?.name}
      />
    </section>
  )
}

function UploadCard({
  icon,
  title,
  badge,
  badgeClass,
  imageUrl,
  imageAlt,
  overlayIcon,
  headline,
  subtitle,
  note,
  buttonLabel,
  buttonClass,
  onFile,
  fileName,
}) {
  return (
    <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-low p-space-md shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-space-xs">
          <span className="material-symbols-outlined shrink-0 text-primary" aria-hidden="true">
            {icon}
          </span>
          <span className="font-headline-sm text-headline-sm text-primary">
            {title}
          </span>
        </div>
        <span
          className={`shrink-0 font-label-sm text-label-sm font-semibold uppercase ${badgeClass}`}
        >
          {badge}
        </span>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-md sm:flex-row">
        <div className="flex min-w-0 items-center gap-space-md">
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-container">
            <img
              className="h-full w-full object-cover"
              alt={imageAlt}
              src={imageUrl}
            />
            {overlayIcon && (
              <span className="material-symbols-outlined absolute text-xl text-primary" aria-hidden="true">
                {overlayIcon}
              </span>
            )}
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="break-words font-label-md text-label-md font-semibold text-primary">
              {fileName || headline}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {subtitle}
            </span>
            {note && (
              <span className="mt-1 font-label-sm text-label-sm text-secondary">
                {note}
              </span>
            )}
          </div>
        </div>
        <label
          className={`cursor-pointer whitespace-nowrap rounded-lg px-4 py-2 font-label-md text-label-md shadow-sm transition-colors ${buttonClass}`}
        >
          <span>{buttonLabel}</span>
          <input
            className="sr-only"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          />
        </label>
      </div>
    </div>
  )
}
