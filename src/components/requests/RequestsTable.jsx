import { STATUS_STYLES } from '../../data/requests'

export default function RequestsTable({ rows, onCopy, onAction, onUploadMissing }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[1050px] border-collapse text-left">
        <thead>
          <tr className="bg-surface-container-low font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            <th className="px-4 py-3.5 font-semibold">Reference No.</th>
            <th className="px-4 py-3.5 font-semibold">Service Requested</th>
            <th className="px-4 py-3.5 font-semibold">Date Submitted</th>
            <th className="px-4 py-3.5 font-semibold">Status</th>
            <th className="px-4 py-3.5 font-semibold">Payment</th>
            <th className="px-4 py-3.5 font-semibold">Release Method</th>
            <th className="px-4 py-3.5 text-right font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="font-body-md text-body-md text-on-surface">
          {rows.length === 0 && (
            <tr>
              <td colSpan={7} className="py-8 text-center font-body-sm text-body-sm text-on-surface-variant">
                No requests match your filters.
              </td>
            </tr>
          )}
          {rows.map((row) => (
            <RequestRow
              key={row.id}
              row={row}
              onCopy={onCopy}
              onAction={onAction}
              onUploadMissing={onUploadMissing}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RequestRow({ row, onCopy, onAction, onUploadMissing }) {
  const status = STATUS_STYLES[row.statusId] ?? {}

  return (
    <>
      <tr className="bg-surface-container-lowest transition-colors hover:bg-surface-container-low/60">
        <td className="px-4 py-4 align-top">
          <div className="flex items-center gap-2">
            <span className="font-label-md text-label-md font-bold tracking-tight text-primary">
              {row.id}
            </span>
            <button
              type="button"
              onClick={() => onCopy?.(row.id)}
              title="Copy Reference"
              aria-label={`Copy reference ${row.id}`}
              className="text-on-surface-variant transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                content_copy
              </span>
            </button>
          </div>
          <span className="mt-0.5 block font-body-sm text-body-sm text-on-surface-variant">
            {row.location}
          </span>
        </td>

        <td className="px-4 py-4 align-top">
          <div className="font-label-lg text-label-lg font-semibold text-primary">
            {row.service}
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {row.purpose}
          </span>
        </td>

        <td className="whitespace-nowrap px-4 py-4 align-top">
          <div className="font-label-md text-label-md text-on-surface">
            {row.submittedDate}
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {row.submittedTime}
          </span>
        </td>

        <td className="whitespace-nowrap px-4 py-4 align-top">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-label-sm text-label-sm font-semibold ${status.cls}`}
          >
            {status.dot && (
              <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
            )}
            {status.icon && (
              <span className="material-symbols-outlined text-xs" aria-hidden="true">
                {status.icon}
              </span>
            )}
            {row.statusLabel}
          </span>
        </td>

        <td className="whitespace-nowrap px-4 py-4 align-top">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md font-semibold text-on-surface">
              {row.payment.amount}
            </span>
            <span
              className={`flex items-center gap-0.5 font-body-sm text-body-sm ${
                row.payment.secondary
                  ? 'font-medium text-secondary'
                  : 'text-on-surface-variant'
              } ${row.payment.italic ? 'italic' : ''}`}
            >
              {row.payment.icon && (
                <span className="material-symbols-outlined text-xs" aria-hidden="true">
                  {row.payment.icon}
                </span>
              )}
              {row.payment.meta}
            </span>
          </div>
        </td>

        <td className="px-4 py-4 align-top">
          <div className="flex items-center gap-1.5">
            <span
              className={`material-symbols-outlined text-base ${
                row.release.iconSecondary
                  ? 'text-secondary'
                  : 'text-on-surface-variant'
              }`}
              aria-hidden="true"
            >
              {row.release.icon}
            </span>
            <span className="font-label-md text-label-md text-on-surface">
              {row.release.label}
            </span>
          </div>
          <span className="block font-body-sm text-body-sm text-on-surface-variant">
            {row.release.sub}
          </span>
        </td>

        <td className="whitespace-nowrap px-4 py-4 text-right align-top">
          <ActionButton row={row} onAction={onAction} />
        </td>
      </tr>

      {row.alert && (
        <tr className="bg-surface-container-high/40">
          <td colSpan={7} className="px-4 py-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-secondary-container/30 px-3 py-2 text-on-surface">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-secondary" aria-hidden="true">
                  warning
                </span>
                <span className="font-label-sm text-label-sm font-bold text-on-secondary-container">
                  Action Required:
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  {row.alert.message}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onUploadMissing?.(row)}
                className="flex items-center gap-1 rounded-md bg-secondary-container px-3 py-1 font-label-sm text-label-sm font-semibold text-on-secondary-container transition-colors hover:bg-secondary hover:text-on-secondary"
              >
                <span className="material-symbols-outlined text-xs" aria-hidden="true">
                  {row.alert.icon}
                </span>
                {row.alert.cta}
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

function ActionButton({ row, onAction }) {
  const { type, label } = row.action

  if (type === 'download') {
    return (
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => onAction?.(row)}
          className="flex items-center gap-1 rounded-lg bg-secondary px-3 py-1.5 font-label-md text-label-md text-on-secondary shadow-sm transition-all hover:bg-on-secondary-container"
        >
          <span className="material-symbols-outlined text-xs" aria-hidden="true">
            download
          </span>
          {label}
        </button>
        <button
          type="button"
          title="View Detail Card"
          aria-label={`View details for ${row.id}`}
          onClick={() => onAction?.(row)}
          className="rounded-lg p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            info
          </span>
        </button>
      </div>
    )
  }

  if (type === 'view') {
    return (
      <button
        type="button"
        onClick={() => onAction?.(row)}
        className="rounded-lg bg-primary px-3.5 py-1.5 font-label-md text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container"
      >
        {label}
      </button>
    )
  }

  if (type === 'view-muted') {
    return (
      <button
        type="button"
        onClick={() => onAction?.(row)}
        className="rounded-lg bg-surface-container-high px-3.5 py-1.5 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container"
      >
        {label}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={() => onAction?.(row)}
      className="rounded-lg bg-surface-container-low px-3.5 py-1.5 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container"
    >
      {label}
    </button>
  )
}
