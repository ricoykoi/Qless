export default function RequestsPagination({
  page,
  totalPages,
  total,
  start,
  end,
  onPageChange,
}) {
  const pages = buildPages(page, totalPages)

  return (
    <div className="flex flex-col items-center justify-between gap-space-sm bg-surface-container-low/70 px-space-md py-space-sm sm:flex-row">
      <span className="font-body-sm text-body-sm text-on-surface-variant">
        Showing <span className="font-semibold text-on-surface">{start}</span> to{' '}
        <span className="font-semibold text-on-surface">{end}</span> of{' '}
        <span className="font-semibold text-on-surface">{total}</span> requests
      </span>

      <nav aria-label="Requests pagination" className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Previous page"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded bg-surface-container px-2.5 py-1.5 font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container-high disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-xs" aria-hidden="true">
            arrow_back_ios
          </span>
        </button>

        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`ellipsis-${i}`} className="px-1 text-on-surface-variant" aria-hidden="true">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              aria-label={`Page ${p}`}
              aria-current={p === page ? 'page' : undefined}
              onClick={() => onPageChange(p)}
              className={
                p === page
                  ? 'h-8 w-8 rounded bg-primary font-label-md text-label-md font-semibold text-on-primary'
                  : 'h-8 w-8 rounded font-label-md text-label-md text-on-surface hover:bg-surface-container'
              }
            >
              {p}
            </button>
          )
        )}

        <button
          type="button"
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="flex items-center rounded bg-surface-container px-2.5 py-1.5 font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-xs" aria-hidden="true">
            arrow_forward_ios
          </span>
        </button>
      </nav>
    </div>
  )
}

function buildPages(current, total) {
  if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = [1]
  if (current > 3) pages.push('…')
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)
  if (current < total - 2) pages.push('…')
  pages.push(total)
  return pages
}
