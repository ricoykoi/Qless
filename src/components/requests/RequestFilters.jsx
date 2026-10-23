import {
  FILTER_PILLS,
  METHOD_OPTIONS,
  SEMESTER_OPTIONS,
} from '../../data/requests'

export default function RequestFilters({
  search,
  onSearchChange,
  activeFilter,
  onFilterChange,
  semester,
  onSemesterChange,
  method,
  onMethodChange,
}) {
  return (
    <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
      {/* Search + dropdowns */}
      <div className="flex flex-col items-stretch justify-between gap-space-md lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-on-surface-variant material-symbols-outlined" aria-hidden="true">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by reference number (e.g. QR-2026-00125) or service name..."
            aria-label="Search requests"
            className="w-full rounded-lg bg-surface-container-low py-2.5 pl-10 pr-4 font-body-md text-body-md text-on-surface shadow-inner placeholder:text-on-surface-variant focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-wrap items-center gap-space-sm sm:flex-nowrap">
          <SelectField
            value={semester}
            onChange={(e) => onSemesterChange(e.target.value)}
            options={SEMESTER_OPTIONS}
            icon="arrow_drop_down"
            label="Filter by semester"
          />
          <SelectField
            value={method}
            onChange={(e) => onMethodChange(e.target.value)}
            options={METHOD_OPTIONS}
            icon="tune"
            label="Filter by method"
          />
          <button
            type="button"
            title="Export Summary"
            aria-label="Export summary"
            className="flex items-center justify-center rounded-lg bg-surface-container-low p-2.5 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              download
            </span>
          </button>
        </div>
      </div>

      {/* Category pills */}
      <div className="scrollbar-none flex items-center gap-2 overflow-x-auto pb-1 pt-1">
        {FILTER_PILLS.map((pill) => {
          const active = activeFilter === pill.id
          const warnStyle =
            pill.warn && !active
              ? 'bg-secondary-container text-on-secondary-container shadow-sm font-bold'
              : pill.warn && active
                ? 'bg-secondary text-on-secondary shadow-md font-bold'
                : active
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
          return (
            <button
              key={pill.id}
              type="button"
              onClick={() => onFilterChange(pill.id)}
              aria-pressed={active}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 font-label-sm text-label-sm transition-colors ${warnStyle}`}
            >
              {pill.warn && (
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  warning
                </span>
              )}
              <span>{pill.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                  active
                    ? 'bg-surface-container-lowest text-primary'
                    : pill.warn
                      ? 'bg-secondary text-on-secondary'
                      : 'bg-surface-container-highest text-on-surface'
                }`}
              >
                {pill.count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SelectField({ value, onChange, options, icon, label }) {
  return (
    <div className="relative w-full min-w-[190px] sm:w-auto">
      <select
        aria-label={label}
        value={value}
        onChange={onChange}
        className="w-full cursor-pointer appearance-none rounded-lg bg-surface-container-low py-2.5 pl-3.5 pr-8 font-label-md text-label-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-base text-on-surface-variant material-symbols-outlined" aria-hidden="true">
        {icon}
      </span>
    </div>
  )
}
