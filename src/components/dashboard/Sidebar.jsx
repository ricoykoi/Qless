import { LOGO_URL, NAV_ITEMS, NAV_FOOTER_ITEMS } from '../../data/dashboard'

export default function Sidebar({
  activePath = 'dashboard',
  onNavigate,
  onLogout,
}) {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col justify-between bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col">
        {/* Brand */}
        <div className="flex items-center gap-space-sm p-space-lg">
          <img
            alt="QLess USPF Logo"
            className="h-8 w-auto object-contain"
            src={LOGO_URL}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary">
              QLess USPF
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Student &amp; Alumni Services
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav aria-label="Dashboard navigation" className="flex flex-col gap-space-xs px-space-md">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.path}
              item={item}
              active={item.path === activePath}
              onClick={() => onNavigate?.(item.path)}
            />
          ))}

          <div className="my-space-sm h-px bg-surface-container" />

          {NAV_FOOTER_ITEMS.map((item) => (
            <NavItem
              key={item.path}
              item={item}
              active={false}
              onClick={() =>
                item.path === 'logout'
                  ? onLogout?.()
                  : onNavigate?.(item.path)
              }
            />
          ))}
        </nav>
      </div>

      <div className="m-space-md rounded-lg bg-surface-container-low p-space-md">
        <p className="font-label-sm text-label-sm leading-tight text-on-surface-variant">
          USPF Registrar Portal v2.4
        </p>
        <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
          Academic Year 2025-2026
        </p>
      </div>
    </aside>
  )
}

function NavItem({ item, active, onClick }) {
  const base =
    'flex items-center justify-between rounded-lg px-space-md py-space-sm font-label-lg transition-colors'

  const cls = active
    ? `${base} bg-primary-container text-on-primary shadow-[0_1px_3px_0_rgba(11,37,69,0.04)]`
    : item.danger
      ? `${base} text-on-surface-variant hover:bg-error-container hover:text-on-error-container`
      : `${base} text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface`

  return (
    <a
      href={`#${item.path}`}
      aria-current={active ? 'page' : undefined}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}
      className={cls}
    >
      <span className="flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-lg" aria-hidden="true">
          {item.icon}
        </span>
        <span className="font-label-lg text-label-lg">{item.label}</span>
      </span>
      {item.badge && (
        <span className="rounded-full bg-secondary-container px-2 py-0.5 font-label-sm text-label-sm text-on-secondary-container">
          {item.badge}
        </span>
      )}
      {item.dot && !item.badge && (
        <span className="h-2 w-2 rounded-full bg-secondary-container" />
      )}
    </a>
  )
}
