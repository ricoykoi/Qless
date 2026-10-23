const RULES = [
  { label: '8+ Characters', test: (v) => v.length >= 8 },
  { label: 'Uppercase Letter', test: (v) => /[A-Z]/.test(v) },
  { label: 'Numeric Value', test: (v) => /[0-9]/.test(v) },
  { label: 'Special Symbol', test: (v) => /[^A-Za-z0-9]/.test(v) },
]

function getStrength(value) {
  if (value.length === 0) return { pct: 0, label: 'Empty', color: 'bg-surface-container-highest' }
  if (value.length < 6) return { pct: 25, label: 'Weak', color: 'bg-error' }
  if (value.length < 10) return { pct: 60, label: 'Moderate', color: 'bg-secondary-fixed-dim' }
  return { pct: 100, label: 'Strong', color: 'bg-secondary' }
}

export default function Step4Security({ data, onChange }) {
  const strength = getStrength(data.password)

  return (
    <section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-space-xs">
          <span className="rounded-full bg-secondary-fixed px-2 py-0.5 font-label-sm text-label-sm font-semibold uppercase tracking-wide text-on-secondary-fixed">
            Account Protection
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Step 4 of 4
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
          Security Credentials &amp; Privacy
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Protect your academic portal with strong credentials complying with
          USPF Security Directives.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="register-password">
            Create Password
          </label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-sm text-on-surface-variant" aria-hidden="true">
              lock
            </span>
            <input
              id="register-password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••••••"
              value={data.password}
              onChange={(e) => onChange('password', e.target.value)}
              className="w-full rounded-lg bg-surface-container-lowest py-2.5 pl-9 pr-3 font-body-md text-body-md text-primary shadow-sm transition-colors focus:bg-surface-container-low focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="confirm-register-password">
            Confirm Password
          </label>
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-sm text-on-surface-variant" aria-hidden="true">
              lock_reset
            </span>
            <input
              id="confirm-register-password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••••••"
              value={data.confirmPassword}
              onChange={(e) => onChange('confirmPassword', e.target.value)}
              className="w-full rounded-lg bg-surface-container-lowest py-2.5 pl-9 pr-3 font-body-md text-body-md text-primary shadow-sm transition-colors focus:bg-surface-container-low focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Strength */}
      <div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">
            Password Strength
          </span>
          <span className="font-label-sm text-label-sm font-semibold text-secondary">
            {strength.label}
          </span>
        </div>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest"
          role="progressbar"
          aria-label="Password strength"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={strength.pct}
        >
          <div
            className={`h-full ${strength.color} transition-all duration-300`}
            style={{ width: `${strength.pct}%` }}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1 font-body-sm text-body-sm text-on-surface-variant sm:grid-cols-4">
          {RULES.map((rule) => {
            const passed = rule.test(data.password)
            return (
              <div key={rule.label} className="flex items-center gap-1">
                <span
                  className={`material-symbols-outlined text-xs ${
                    passed ? 'text-secondary' : 'text-on-surface-variant'
                  }`}
                  aria-hidden="true"
                >
                  {passed ? 'check_circle' : 'radio_button_unchecked'}
                </span>
                {rule.label}
              </div>
            )
          })}
        </div>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3 rounded-lg bg-surface-container-low p-space-sm">
        <input
          id="privacy-consent"
          type="checkbox"
          checked={data.consent}
          onChange={(e) => onChange('consent', e.target.checked)}
          className="mt-1 h-4 w-4 cursor-pointer rounded bg-surface-container-lowest text-primary accent-primary-container focus:ring-0"
        />
        <label
          htmlFor="privacy-consent"
          className="cursor-pointer select-none font-body-sm text-body-sm text-on-surface"
        >
          I agree to the{' '}
          <a className="font-semibold text-primary underline" href="#terms">
            QLess USPF Terms of Service
          </a>{' '}
          and explicitly consent to the lawful processing of my educational
          records in compliance with the{' '}
          <span className="font-semibold text-primary">
            Philippine Data Privacy Act of 2012 (RA 10173)
          </span>
          .
        </label>
      </div>
    </section>
  )
}
