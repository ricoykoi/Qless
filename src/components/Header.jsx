import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../data/services'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    { label: 'Home', href: '/#home', active: true },
    { label: 'Services', href: '/#services' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Track Request', href: '/#track' },
    { label: 'Help Center', href: '/#help' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-outline-variant/40 bg-surface-container-lowest/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/#home" className="flex min-w-0 items-center gap-3">
          <img
            alt="USPF QLess Institutional Emblem"
            className="h-11 w-11 shrink-0 rounded-full object-contain shadow-sm sm:h-12 sm:w-12"
            src={LOGO_URL}
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
              QLess USPF
            </span>
            <span className="hidden truncate font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant sm:block">
              Online Registrar &amp; Document Pipeline
            </span>
          </div>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-md px-1 py-2 font-label-lg text-label-lg transition-colors ${
                link.active
                  ? 'font-bold text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <a
            href="/login"
            className="rounded-lg px-4 py-2 font-label-lg text-label-lg text-primary transition-colors hover:bg-surface-container"
          >
            Login
          </a>
          <Link
            to="/register"
            className="flex items-center gap-2 rounded-lg bg-primary-container px-4 py-2 font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary hover:shadow-lg"
          >
            <span>Register</span>
            <span className="h-2 w-2 rounded-full bg-secondary-container" />
          </Link>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-surface-container xl:hidden"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-outline-variant/40 bg-surface-container-lowest px-4 py-3 shadow-lg sm:px-6 xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 font-label-lg text-label-lg text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2 border-t border-outline-variant/40 pt-3 xl:hidden">
              <a
                href="/login"
                className="flex-1 rounded-lg border border-outline-variant px-4 py-2.5 font-label-lg text-label-lg text-primary"
              >
                Login
              </a>
              <Link
                to="/register"
                className="flex-1 rounded-lg bg-primary-container px-4 py-2.5 font-label-lg text-label-lg text-on-primary"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
