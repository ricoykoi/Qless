import { FILTER_TABS } from '../../data/payments'

export default function TransactionsCard({
  transactions,
  filter,
  onFilterChange,
  onPayClick,
  onReceiptClick,
}) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-md">
        <div className="flex flex-col">
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Payment &amp; Assessment Records
          </h3>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Official Registrar &amp; Cashier Transaction Logs
          </span>
        </div>
        <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-lg overflow-x-auto">
          {FILTER_TABS.map((tab) => {
            const active = filter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onFilterChange(tab.id)}
                className={`px-3 py-1.5 rounded-md font-label-sm text-label-sm transition-all whitespace-nowrap ${
                  active
                    ? 'text-on-surface bg-surface-container-lowest shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            )
          })}
        </div>
      </div>

      <div className="overflow-x-auto -mx-space-lg px-space-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low/70 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
              <th className="py-3 px-3 rounded-l-lg">Reference No.</th>
              <th className="py-3 px-3">Request Item</th>
              <th className="py-3 px-3">Amount</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3">Channel</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-right rounded-r-lg">Receipt / Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container font-body-sm text-body-sm">
            {transactions.length === 0 && (
              <tr>
                <td colSpan={7} className="py-8 text-center text-on-surface-variant">
                  No transactions in this category.
                </td>
              </tr>
            )}
            {transactions.map((tx) => (
              <tr
                key={tx.ref}
                className="hover:bg-surface-container-low transition-colors"
              >
                <td className="py-3.5 px-3">
                  <div className="font-label-md text-label-md text-primary font-semibold">
                    {tx.ref}
                  </div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">
                    {tx.subref}
                  </div>
                </td>
                <td className="py-3.5 px-3">
                  <div className="font-label-md text-label-md text-on-surface">
                    {tx.item}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {tx.subitem}
                  </div>
                </td>
                <td className="py-3.5 px-3 font-label-md text-label-md text-primary font-bold">
                  ₱{tx.amount.toFixed(2)}
                </td>
                <td className="py-3.5 px-3 text-on-surface-variant">{tx.date}</td>
                <td className="py-3.5 px-3">
                  <ChannelCell channel={tx.channel} />
                </td>
                <td className="py-3.5 px-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${tx.statusClass}`}
                  >
                    {tx.statusLabel}
                  </span>
                </td>
                <td className="py-3.5 px-3 text-right">
                  <ActionCell
                    action={tx.action}
                    onPayClick={onPayClick}
                    onReceiptClick={onReceiptClick}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between pt-space-md mt-space-sm text-on-surface-variant font-body-sm text-body-sm">
        <span>Displaying {transactions.length} of 8 recorded transactions</span>
        <div className="flex items-center gap-space-xs">
          <button
            type="button"
            disabled
            className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm"
          >
            1
          </button>
          <button
            type="button"
            className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm"
          >
            2
          </button>
          <button
            type="button"
            className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

function ChannelCell({ channel }) {
  return (
    <div className="flex items-center gap-1.5">
      {channel.dot && <span className={`w-2 h-2 rounded-full ${channel.dot}`} />}
      {channel.icon && (
        <span className="material-symbols-outlined text-sm text-on-surface-variant">
          {channel.icon}
        </span>
      )}
      <span
        className={
          channel.muted
            ? 'font-label-sm text-label-sm text-on-surface-variant'
            : 'font-label-sm text-label-sm text-primary'
        }
      >
        {channel.label}
      </span>
    </div>
  )
}

function ActionCell({ action, onPayClick, onReceiptClick }) {
  if (action.type === 'pay') {
    return (
      <button
        type="button"
        onClick={() => onPayClick(action.ref, action.amount, action.docName)}
        className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed font-label-sm text-label-sm transition-colors shadow-sm"
      >
        {action.label}
      </button>
    )
  }
  if (action.type === 'receipt') {
    return (
      <button
        type="button"
        onClick={() => onReceiptClick(action.receipt)}
        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-primary font-label-sm text-label-sm transition-colors"
      >
        <span className="material-symbols-outlined text-sm">download</span>
        {action.label}
      </button>
    )
  }
  if (action.type === 'uploaded') {
    return (
      <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
        <span className="material-symbols-outlined text-sm">attachment</span>
        {action.label}
      </span>
    )
  }
  return null
}
