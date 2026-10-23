export default function AccountSecurityCard({
  security,
  twoFactor,
  onToggleTwoFactor,
}) {
  return (
    <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex items-center gap-space-sm pb-space-sm mb-space-md">
        <div className="p-2 rounded-lg bg-surface-container-high text-primary">
          <span className="material-symbols-outlined text-xl">shield</span>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Account &amp; Security
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Sign-in and access settings
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        <div className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between gap-2">
          <div className="flex flex-col min-w-0">
            <span className="font-label-md text-label-md text-primary font-semibold">
              Institutional Google SSO
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
              {security.sso.email}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 shrink-0">
            {security.sso.status}
          </span>
        </div>

        <div className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between gap-2">
          <div className="flex flex-col min-w-0">
            <span className="font-label-md text-label-md text-primary font-semibold">
              Password
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {security.password.lastUpdated}
            </span>
          </div>
          <button
            type="button"
            className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-colors"
          >
            Change
          </button>
        </div>

        <div className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between gap-2">
          <div className="flex flex-col min-w-0">
            <span className="font-label-md text-label-md text-primary font-semibold">
              Two-Factor Authentication
            </span>
            <span
              className={`font-body-sm text-body-sm font-medium ${
                twoFactor ? 'text-emerald-800' : 'text-on-surface-variant'
              }`}
            >
              {twoFactor ? 'Enabled via SMS' : 'Disabled'}
            </span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={onToggleTwoFactor}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
          </label>
        </div>
      </div>
    </section>
  )
}
