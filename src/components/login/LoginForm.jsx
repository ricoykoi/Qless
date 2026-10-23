import { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from './GoogleIcon'

export default function LoginForm() {
  const [role, setRole] = useState('student')
  const [showPassword, setShowPassword] = useState(false)
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.info('Login form submitted; connect an authentication provider to enable sign-in.')
  }

  return (
    <div className="flex min-h-full flex-col justify-between bg-surface-container-lowest p-6 sm:p-10 lg:col-span-7 lg:p-14 xl:col-span-6">
      <div className="my-auto mx-auto flex w-full max-w-xl flex-col gap-6">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <h2 className="font-headline-lg text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
            Sign In to Your Account
          </h2>
          <p className="font-body-md text-sm text-on-surface-variant">
            Select your institutional affiliation below to proceed to your
            portal.
          </p>
        </div>

        {/* Role tabs */}
        <div className="grid grid-cols-2 gap-1 rounded-lg bg-surface-container p-1">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-label-md font-label-md transition-all duration-200 ${
              role === 'student'
                ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
              school
            </span>
            Student / Alumni
          </button>
          <button
            type="button"
            onClick={() => setRole('staff')}
            className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-label-md font-label-md transition-all duration-200 ${
              role === 'staff'
                ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              admin_panel_settings
            </span>
            Registrar / Staff
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Identifier */}
          <div className="flex flex-col gap-1.5">
            <label
              className="flex items-center justify-between font-label-md text-label-md text-on-surface"
              htmlFor="identifierInput"
            >
              <span>USPF ID Number or Email</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                e.g., 2023-01842
              </span>
            </label>
            <div className="relative flex items-center">
              <span className="pointer-events-none absolute left-3 text-xl text-on-surface-variant material-symbols-outlined" aria-hidden="true">
                badge
              </span>
              <input
                id="identifierInput"
                type="text"
                autoComplete="username"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="e.g. 2023-01842 or c.dico@uspf.edu.ph"
                className="w-full rounded-lg border border-surface-container-highest/60 bg-surface-container-lowest py-2.5 pl-10 pr-4 font-body-md text-body-md text-on-surface shadow-sm outline-none transition-shadow focus:border-primary-container focus:shadow-md"
              />
            </div>
            <span
              className="font-body-sm text-xs text-on-surface-variant"
              id="roleNotice"
            >
              {role === 'student'
                ? 'Use your official 9-digit institutional student ID or Google Workspace ID.'
                : 'Use your institutional staff email and security passphrase.'}
            </span>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                className="font-label-md text-label-md text-on-surface"
                htmlFor="passwordInput"
              >
                Password
              </label>
              <a
                className="font-label-sm text-label-sm text-primary-container hover:underline"
                href="#forgot"
              >
                Forgot Password?
              </a>
            </div>
            <div className="relative flex items-center">
              <span className="pointer-events-none absolute left-3 text-xl text-on-surface-variant material-symbols-outlined" aria-hidden="true">
                lock
              </span>
              <input
                id="passwordInput"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your security passphrase"
                className="w-full rounded-lg border border-surface-container-highest/60 bg-surface-container-lowest py-2.5 pl-10 pr-10 font-body-md text-body-md text-on-surface shadow-sm outline-none transition-shadow focus:border-primary-container focus:shadow-md"
              />
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 p-1 text-on-surface-variant transition-colors hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Remember + SSL badge */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <label className="flex cursor-pointer select-none items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 cursor-pointer rounded accent-primary-container"
              />
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Remember this device
              </span>
            </label>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary-container/20 px-2 py-0.5 font-label-sm text-label-sm text-on-secondary-container">
              <span className="material-symbols-outlined text-xs" aria-hidden="true">
                verified_user
              </span>
              256-bit SSL
            </span>
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={() => window.location.assign('/register')}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-4 py-3 font-headline-sm text-headline-sm text-surface-container-lowest shadow-md transition-all hover:bg-tertiary-container active:scale-[0.99]"
          >
            <span>Log In to Portal</span>
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              arrow_forward
            </span>
          </button>

          {/* Divider */}
          <div className="relative my-2 flex items-center justify-center">
            <div className="h-px w-full bg-surface-container-highest" />
            <span className="absolute bg-surface-container-lowest px-3 font-label-sm text-label-sm uppercase tracking-wide text-on-surface-variant">
              Or Continue With
            </span>
          </div>

          {/* Google SSO */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-surface-container-highest/60 bg-surface-container-low px-4 py-2.5 font-label-lg text-label-lg text-on-surface shadow-sm transition-colors hover:bg-surface-container"
          >
            <GoogleIcon />
            <span>Sign in with USPF Google Account (@uspf.edu.ph)</span>
          </button>
        </form>

        {/* Register link */}
        <div className="pt-1 text-center">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Don’t have an active account yet?
            <Link
              className="ml-1 font-label-md text-label-md font-semibold text-primary-container hover:underline"
              to="/register"
            >
              Create an Account / Register
            </Link>
          </p>
        </div>

        {/* Help callout */}
        <div className="flex items-start gap-3 rounded-lg border border-surface-container-highest/40 bg-surface-container-low p-3.5">
          <span className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-secondary" aria-hidden="true">
            contact_support
          </span>
          <div className="flex flex-col gap-0.5 font-body-sm text-body-sm text-on-surface-variant">
            <span className="font-label-sm text-label-sm font-semibold text-on-surface">
              Having trouble logging in?
            </span>
            <span>
              Contact USPF IT Helpdesk at{' '}
              <a
                className="font-label-sm text-primary-container underline"
                href="mailto:helpdesk@uspf.edu.ph"
              >
                helpdesk@uspf.edu.ph
              </a>{' '}
              or visit the Registrar Help Desk at the USPF Main Campus.
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-surface-container-highest/40 pt-4 font-label-sm text-label-sm text-on-surface-variant">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm text-on-surface-variant" aria-hidden="true">
            security
          </span>
          <span>Secure Institutional Gateway</span>
        </div>
        <span>© University of Southern Philippines Foundation</span>
      </div>
    </div>
  )
}
