import { LOGO_URL } from '../../data/registration'

export default function RegisterHeader() {
  return (
    <header className="mb-space-lg flex w-full items-center justify-between bg-surface-container-lowest px-4 py-3 shadow-sm sm:px-6 sm:py-4 lg:px-12">
      <div className="flex items-center gap-space-sm">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-surface-container-low shadow-sm">
          <img
            alt="QLess USPF Seal"
            className="h-full w-full object-contain"
            src={LOGO_URL}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm tracking-tight text-primary">
            QLess USPF
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            University Registrar Online Portal
          </span>
        </div>
      </div>
      <a
        className="flex items-center gap-space-xs rounded-lg bg-surface-container px-space-sm py-1.5 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-high"
        href="/login"
      >
        <span className="material-symbols-outlined text-sm" aria-hidden="true">
          arrow_back
        </span>
        <span>Return to Login</span>
      </a>
    </header>
  )
}
