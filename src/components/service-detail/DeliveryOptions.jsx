export default function DeliveryOptions({
  options,
  selectedId,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => {
        const active = selectedId === opt.id
        return (
          <label
            key={opt.id}
            className={`flex cursor-pointer items-center justify-between rounded-lg p-2.5 transition-all ${
              active
                ? 'bg-surface-container'
                : 'bg-surface-container-low hover:bg-surface-container'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <input
                type="radio"
                name="delivery_method"
                value={opt.id}
                checked={active}
                onChange={() => onChange(opt.id)}
                className="accent-primary"
              />
              <span className="font-label-md text-label-md font-medium text-primary">
                {opt.label}
              </span>
            </span>
            <span
              className={`font-label-sm text-label-sm font-semibold ${
                opt.fee > 0 ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {opt.feeLabel}
            </span>
          </label>
        )
      })}
    </div>
  )
}
