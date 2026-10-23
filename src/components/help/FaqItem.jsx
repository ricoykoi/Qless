export default function FaqItem({ faq, open, onToggle }) {
  return (
    <article className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-space-md text-left font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low/40 transition-colors"
      >
        <span className="flex items-center gap-space-sm pr-space-sm">
          <span className="material-symbols-outlined text-base text-secondary shrink-0">
            help
          </span>
          {faq.question}
        </span>
        <span
          className={`material-symbols-outlined transition-transform duration-200 text-on-surface-variant shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-space-md pb-space-md text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
          {faq.answer}
        </div>
      )}
    </article>
  )
}
