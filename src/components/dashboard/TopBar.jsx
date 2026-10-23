import { AVATAR_URL, STUDENT } from '../../data/dashboard'

export default function TopBar() {
  return (
    <header className="fixed left-72 right-0 top-0 z-40 flex h-16 items-center justify-between bg-surface/90 px-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-space-sm text-on-surface-variant">
        <span className="material-symbols-outlined text-sm" aria-hidden="true">
          home
        </span>
        <span className="text-xs">/</span>
        <span className="font-label-md text-label-md font-semibold text-primary">
          University Portal
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-space-md">
        {/* Search */}
        <label className="relative flex w-72 items-center">
          <span className="pointer-events-none absolute left-3 text-base text-on-surface-variant material-symbols-outlined" aria-hidden="true">
            search
          </span>
          <input
            type="search"
            aria-label="Search reference number or document"
            placeholder="Search reference # or document..."
            className="w-full rounded-lg bg-surface-container-lowest py-1.5 pl-9 pr-3 font-body-sm text-body-sm text-on-surface shadow-[0_1px_3px_0_rgba(11,37,69,0.04)] placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container"
          />
        </label>

        {/* Notifications bell */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg bg-surface-container-lowest p-2 text-on-surface-variant shadow-[0_1px_3px_0_rgba(11,37,69,0.04)] transition-colors hover:bg-surface-container-high hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-lg" aria-hidden="true">
            notifications
          </span>
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-secondary-container" />
        </button>

        {/* Quick links */}
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg bg-surface-container-lowest px-space-sm py-1.5 font-label-md text-label-md text-on-surface-variant shadow-[0_1px_3px_0_rgba(11,37,69,0.04)] transition-colors hover:bg-surface-container-high hover:text-on-surface"
        >
          <span>USPF Quick Links</span>
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            expand_more
          </span>
        </button>

        <div className="h-6 w-px bg-surface-container" />

        {/* User */}
        <div className="flex items-center gap-space-sm pl-space-xs">
          <div className="flex flex-col text-right">
            <span className="font-label-md text-label-md font-semibold leading-tight text-primary">
              {STUDENT.name}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {STUDENT.roleLabel}
            </span>
          </div>
          <img
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover ring-2 ring-surface-container-high"
            src={AVATAR_URL}
          />
        </div>
      </div>
    </header>
  )
}
