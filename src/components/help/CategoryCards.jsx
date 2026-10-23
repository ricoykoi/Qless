import { CATEGORIES } from '../../data/help'

export default function CategoryCards({ onSelect }) {
  return (
    <section className="mb-space-xl">
      <div className="flex items-center justify-between mb-space-md">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
            Assistance Categories
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Select an administrative area for guided walk-throughs
          </p>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          4 specialized desks
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat)}
            className="group text-left bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between focus:outline-none"
          >
            <div className="flex flex-col gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low text-primary-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                <span className="material-symbols-outlined text-xl">{cat.icon}</span>
              </div>
              <div>
                <h3 className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-space-md mt-space-sm">
              <span className="font-label-sm text-label-sm text-primary-container group-hover:translate-x-0.5 transition-transform">
                Explore desk
              </span>
              <span className="material-symbols-outlined text-sm text-on-surface-variant">
                arrow_forward
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
