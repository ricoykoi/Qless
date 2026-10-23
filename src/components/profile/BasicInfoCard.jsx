export default function BasicInfoCard({ fields, draft, editing, onChange }) {
  return (
    <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex items-center gap-space-sm pb-space-sm mb-space-md">
        <div className="p-2 rounded-lg bg-surface-container-high text-primary">
          <span className="material-symbols-outlined text-xl">badge</span>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Basic Information
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Institutional records and primary contact details
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        {fields.map((field) => {
          const editable =
            editing &&
            ['contactNumber', 'address', 'email'].includes(field.key)
          const isFull = field.fullWidth ? 'sm:col-span-2' : ''

          return (
            <div
              key={field.key}
              className={`p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 ${isFull}`}
            >
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {field.label}
              </span>
              {editable ? (
                <input
                  type="text"
                  value={draft[field.key] ?? ''}
                  onChange={(e) => onChange(field.key, e.target.value)}
                  className={`bg-surface-container-lowest rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-primary-container font-body-md text-body-md text-primary ${
                    field.mono ? 'font-mono' : ''
                  }`}
                />
              ) : (
                <span
                  className={`font-body-md text-body-md text-primary font-semibold truncate ${
                    field.mono ? 'font-mono' : ''
                  }`}
                >
                  {field.value}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
