import { COLLEGES } from '../../data/registration'

export default function Step2PersonalData({ data, onChange }) {
  return (
    <section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-space-xs">
          <span className="rounded-full bg-secondary-fixed px-2 py-0.5 font-label-sm text-label-sm font-semibold uppercase tracking-wide text-on-secondary-fixed">
            Institutional Records
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Step 2 of 4
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
          Personal &amp; Academic Profile
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Provide official details as recorded in USPF Registrar archives.
        </p>
      </div>

      {/* Names */}
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
        <Field label="First Name">
          <TextInput
            placeholder="e.g. Maria Clara"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
          />
        </Field>
        <Field label="Middle Name (Optional)">
          <TextInput
            placeholder="e.g. Santos"
            value={data.middleName}
            onChange={(e) => onChange('middleName', e.target.value)}
          />
        </Field>
        <Field label="Last Name">
          <TextInput
            placeholder="e.g. Del Rosario"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
          />
        </Field>
      </div>

      {/* ID + College */}
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
        <Field label="Student / Alumni ID Number" hint="e.g. 2021-04921">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-sm text-on-surface-variant" aria-hidden="true">
              badge
            </span>
            <input
              type="text"
              placeholder="20XX-XXXXX"
              value={data.idNumber}
              onChange={(e) => onChange('idNumber', e.target.value)}
              className="w-full rounded-lg bg-surface-container-lowest py-2.5 pl-9 pr-3 font-mono font-body-md text-body-md text-primary shadow-sm transition-colors focus:bg-surface-container-low focus:outline-none"
            />
          </div>
        </Field>
        <Field label="Academic Department / College">
          <select
            value={data.college}
            onChange={(e) => onChange('college', e.target.value)}
            className="w-full rounded-lg bg-surface-container-lowest px-3 py-2.5 font-body-md text-body-md text-primary shadow-sm transition-colors focus:bg-surface-container-low focus:outline-none"
          >
            <option value="" disabled>
              Select College Department
            </option>
            {COLLEGES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Mobile + DOB */}
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
        <Field label="Primary Contact Mobile">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-sm text-on-surface-variant" aria-hidden="true">
              call
            </span>
            <input
              type="tel"
              placeholder="+63 9XX-XXX-XXXX"
              value={data.mobile}
              onChange={(e) => onChange('mobile', e.target.value)}
              className="w-full rounded-lg bg-surface-container-lowest py-2.5 pl-9 pr-3 font-mono font-body-md text-body-md text-primary shadow-sm transition-colors focus:bg-surface-container-low focus:outline-none"
            />
          </div>
        </Field>
        <Field label="Date of Birth">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-sm text-on-surface-variant" aria-hidden="true">
              calendar_month
            </span>
            <input
              type="date"
              value={data.dob}
              onChange={(e) => onChange('dob', e.target.value)}
              className="w-full rounded-lg bg-surface-container-lowest py-2.5 pl-9 pr-3 font-body-md text-body-md text-primary shadow-sm transition-colors focus:bg-surface-container-low focus:outline-none"
            />
          </div>
        </Field>
      </div>
    </section>
  )
}

function Field({ label, hint, children }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2">
        <label className="font-label-md text-label-md font-semibold text-primary">
          {label}
        </label>
        {hint && (
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {hint}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function TextInput(props) {
  return (
    <input
      {...props}
      className="w-full rounded-lg bg-surface-container-lowest p-2.5 font-body-md text-body-md text-primary shadow-sm transition-colors focus:bg-surface-container-low focus:outline-none"
    />
  )
}
