import { RECENT_REQUESTS } from '../../data/dashboard'

export default function RecentRequestsTable({ onView, onDownload }) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm p-space-md">
        <div className="flex items-center gap-space-sm">
          <h2 className="font-headline-sm text-headline-sm text-primary">
            Recent Requests
          </h2>
          <span className="rounded-full bg-surface-container px-2 py-0.5 font-label-sm text-label-sm font-semibold text-on-surface-variant">
            18 total
          </span>
        </div>
        <div className="flex items-center gap-space-sm">
          <div className="hidden items-center gap-1 rounded-lg bg-surface-container-low px-2 py-1 sm:flex">
            <span className="material-symbols-outlined text-sm text-on-surface-variant" aria-hidden="true">
              filter_list
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              All Semesters
            </span>
          </div>
          <a
            href="#all-requests"
            className="flex items-center gap-0.5 font-label-md text-label-md font-semibold text-primary hover:underline"
          >
            View All (18)
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[950px] text-left">
          <thead>
            <tr className="bg-surface-container-low font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              <th className="px-space-md py-3 font-semibold">Reference No.</th>
              <th className="px-space-md py-3 font-semibold">Service Requested</th>
              <th className="px-space-md py-3 font-semibold">Date Submitted</th>
              <th className="px-space-md py-3 font-semibold">Estimated Release</th>
              <th className="px-space-md py-3 font-semibold">Status</th>
              <th className="px-space-md py-3 font-semibold">Payment</th>
              <th className="px-space-md py-3 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low font-body-md text-body-md">
            {RECENT_REQUESTS.map((r) => (
              <tr
                key={r.ref}
                className="transition-colors hover:bg-surface-container-low/70"
              >
                <td className="px-space-md py-3.5 font-label-md text-label-md font-bold text-primary">
                  {r.ref}
                </td>
                <td className="px-space-md py-3.5">
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">{r.service}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {r.subtitle}
                    </span>
                  </div>
                </td>
                <td className="px-space-md py-3.5 font-body-sm text-body-sm text-on-surface-variant">
                  {r.submitted}
                </td>
                <td className="px-space-md py-3.5 font-body-sm text-body-sm font-medium text-primary">
                  {r.release}
                </td>
                <td className="px-space-md py-3.5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-label-sm text-label-sm font-semibold ${r.status.cls}`}
                  >
                    {r.status.dot && (
                      <span className={`h-1.5 w-1.5 rounded-full ${r.status.dot}`} />
                    )}
                    {r.status.icon && (
                      <span className="material-symbols-outlined text-xs" aria-hidden="true">
                        {r.status.icon}
                      </span>
                    )}
                    {r.status.label}
                  </span>
                </td>
                <td className="px-space-md py-3.5">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-label-sm text-label-sm font-medium ${r.payment.cls}`}
                  >
                    <span className="material-symbols-outlined text-xs" aria-hidden="true">
                      {r.payment.icon}
                    </span>
                    {r.payment.label}
                  </span>
                </td>
                <td className="px-space-md py-3.5 text-right">
                  {r.action === 'download' ? (
                    <button
                      type="button"
                      onClick={() => onDownload?.(r)}
                      className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 font-label-md text-label-md font-medium text-on-primary shadow-sm transition-colors hover:bg-primary-container"
                    >
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">
                        download
                      </span>
                      Download
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onView?.(r)}
                      className="rounded-lg bg-surface-container-high px-3 py-1.5 font-label-md text-label-md font-medium text-primary transition-colors hover:bg-surface-container-highest"
                    >
                      View Details
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
