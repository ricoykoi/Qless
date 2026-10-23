import FaqItem from './FaqItem'

export default function FaqSection({
  faqs,
  openFaqIds,
  onToggle,
  onToggleAll,
  allExpanded,
  searchQuery,
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {searchQuery
              ? `Showing ${faqs.length} matching FAQ${faqs.length === 1 ? '' : 's'}`
              : 'Instant answers to standard university registrar inquiries'}
          </p>
        </div>
        <button
          type="button"
          onClick={onToggleAll}
          className="font-label-sm text-label-sm text-primary-container hover:underline shrink-0"
        >
          {allExpanded ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      <div className="flex flex-col gap-space-sm">
        {faqs.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-xl shadow-sm p-8 text-center text-on-surface-variant font-body-sm text-body-sm">
            No FAQs matched your search. Try a different keyword or clear the
            search box above.
          </div>
        ) : (
          faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              open={openFaqIds.has(faq.id)}
              onToggle={() => onToggle(faq.id)}
            />
          ))
        )}
      </div>
    </>
  )
}
