import { CATEGORIES, SORT_OPTIONS } from '../../data/services'

export default function ServiceControls({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
  onReset,
}) {
  return (
    <section className="mb-space-lg flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
      <div className="flex flex-col items-stretch justify-between gap-space-md lg:flex-row lg:items-center">
        {/* Search */}
        <div className="relative min-w-[280px] flex-1">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-on-surface-variant material-symbols-outlined" aria-hidden="true">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search services by name, keyword, or document code (e.g. TOR, OSAS, Enrollment)..."
            aria-label="Search services"
            className="w-full rounded-lg bg-surface-container-low py-2.5 pl-11 pr-10 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant transition-all focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container"
          />
          {search && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-sm text-on-surface-variant hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                close
              </span>
            </button>
          )}
        </div>

        {/* Sort + Reset */}
        <div className="flex w-full items-center gap-space-sm self-end lg:w-auto lg:self-auto">
          <div className="flex w-full items-center gap-2 rounded-lg bg-surface-container-low px-3 py-1.5 lg:w-auto">
            <span className="material-symbols-outlined text-base text-on-surface-variant" aria-hidden="true">
              swap_vert
            </span>
            <label
              htmlFor="sort-dropdown"
              className="whitespace-nowrap font-label-sm text-label-sm text-on-surface-variant"
            >
              Sort by:
            </label>
            <select
              id="sort-dropdown"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="min-w-0 cursor-pointer bg-transparent py-1 pr-2 font-label-md text-label-md font-semibold text-primary focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={onReset}
            title="Reset Filters"
            aria-label="Reset filters"
            className="rounded-lg bg-surface-container-low p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              filter_alt_off
            </span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="scrollbar-none flex items-center gap-2 overflow-x-auto pb-1 pt-1 text-nowrap">
        {CATEGORIES.map((cat) => {
          const active = category === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              aria-pressed={active}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 font-label-md text-label-md transition-all ${
                active
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`inline-block rounded-full px-1.5 py-0.2 font-label-sm text-label-sm font-semibold ${
                  active
                    ? 'bg-surface-container-highest text-primary'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {cat.count}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
