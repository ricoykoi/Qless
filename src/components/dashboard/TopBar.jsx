import { AVATAR_URL, STUDENT } from '../../data/dashboard'

export default function TopBar({ mobileMenuOpen, onMenuClick }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between gap-2 bg-surface/90 px-3 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:px-space-lg lg:left-72">
      {/* Breadcrumb */}
      <div className="flex min-w-0 items-center gap-space-sm text-on-surface-variant">
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={onMenuClick}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary hover:bg-surface-container lg:hidden"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            menu
          </span>
        </button>
        <span className="material-symbols-outlined hidden text-sm sm:inline" aria-hidden="true">
          home
        </span>
        <span className="hidden text-xs sm:inline">/</span>
        <span className="truncate font-label-md text-label-md font-semibold text-primary">
          University Portal
        </span>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-space-md">
        {/* Search */}
        <label className="relative hidden w-48 items-center md:flex lg:w-72">
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
          className="hidden items-center gap-1.5 rounded-lg bg-surface-container-lowest px-space-sm py-1.5 font-label-md text-label-md text-on-surface-variant shadow-[0_1px_3px_0_rgba(11,37,69,0.04)] transition-colors hover:bg-surface-container-high hover:text-on-surface xl:flex"
        >
          <span>USPF Quick Links</span>
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            expand_more
          </span>
        </button>

        <div className="hidden h-6 w-px bg-surface-container sm:block" />

        {/* User */}
        <div className="flex items-center gap-space-sm sm:pl-space-xs">
          <div className="hidden flex-col text-right sm:flex">
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
