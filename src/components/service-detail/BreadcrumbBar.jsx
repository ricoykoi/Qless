import { Link } from 'react-router-dom'

export default function BreadcrumbBar({ category, title }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-space-md">
      <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
        <Link
          to="/services"
          className="flex items-center gap-1 transition-colors hover:text-primary"
        >
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            home
          </span>
          Services
        </Link>
        <span className="text-outline-variant">/</span>
        <Link to="/services" className="transition-colors hover:text-primary">
          {category}
        </Link>
        <span className="text-outline-variant">/</span>
        <span className="font-semibold text-primary">{title}</span>
      </div>
      <Link
        to="/services"
        className="inline-flex items-center gap-2 rounded-lg bg-surface-container-low px-space-md py-1.5 font-label-md text-label-md text-on-surface shadow-sm transition-all hover:bg-surface-container"
      >
        <span className="material-symbols-outlined text-sm" aria-hidden="true">
          arrow_back
        </span>
        Back to All Services
      </Link>
    </div>
  )
}
