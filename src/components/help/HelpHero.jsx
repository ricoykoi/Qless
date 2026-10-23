import { POPULAR_TAGS } from '../../data/help'

export default function HelpHero({ search, onSearchChange, onClear }) {
  return (
    <section className="relative w-full rounded-xl bg-primary-container text-on-primary p-space-lg md:p-space-xl overflow-hidden shadow-sm mb-space-lg">
      <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-secondary-container/10 pointer-events-none blur-2xl" />
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none pr-space-lg pb-space-xs hidden md:block">
        <span className="material-symbols-outlined text-[160px] text-surface-container-lowest">
          school
        </span>
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col gap-space-sm">
        <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-lowest/10 w-fit">
          <span className="material-symbols-outlined text-sm text-secondary-fixed">
            support_agent
          </span>
          <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary-fixed">
            Student &amp; Alumni Assistance
          </span>
        </div>

        <h1 className="font-headline-lg text-headline-lg text-surface-container-lowest tracking-tight">
          Help &amp; Support
        </h1>
        <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
          Find quick answers, contact university support offices, or submit a
          direct inquiry for expedited assistance.
        </p>

        <div className="mt-space-md w-full relative flex items-center">
          <span className="material-symbols-outlined absolute left-4 text-outline pointer-events-none">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search FAQs, guidelines, office directory, or reference #..."
            className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-12 pr-28 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary-fixed placeholder:text-outline transition-all"
          />
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 px-3 py-1.5 rounded bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-space-xs">
          <span className="font-label-sm text-label-sm text-on-primary-container">
            Popular:
          </span>
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag.query}
              type="button"
              onClick={() => onSearchChange(tag.query)}
              className="px-2.5 py-1 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 font-label-sm text-label-sm text-surface-container-lowest transition-colors"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
