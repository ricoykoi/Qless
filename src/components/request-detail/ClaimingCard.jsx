export default function ClaimingCard({ claiming }) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-space-sm rounded-t-xl">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary-container">
            local_shipping
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Claiming &amp; Turnover
          </h3>
        </div>
        <span className="font-label-sm text-label-sm bg-surface-container-highest px-2 py-0.5 rounded text-on-surface">
          Window Releasing
        </span>
      </div>

      <div className="flex flex-col gap-space-sm">
        <div className="relative rounded-lg overflow-hidden h-36 bg-surface-container-high shadow-inner">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${claiming.mapImage}')` }}
          />
          <div className="absolute bottom-2 left-2 right-2 bg-surface/95 backdrop-blur-sm p-2 rounded-lg shadow-sm flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">
                pin_drop
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                {claiming.mapOverlay}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">
              {claiming.mapOverlaySub}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-space-xs pt-space-xs">
          <InfoRow
            icon="domain"
            label="Designated Office"
            value={claiming.office}
          />
          <InfoRow
            icon="schedule"
            label="Operating Schedule"
            value={claiming.hours}
          />
          <div className="flex items-start gap-space-sm mt-1">
            <span className="material-symbols-outlined text-on-surface-variant text-base mt-0.5">
              badge
            </span>
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Mandatory Physical Requirements
              </span>
              <div className="font-body-sm text-body-sm text-on-surface">
                {claiming.requirements.map((r) => (
                  <div key={r}>{r}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-space-sm mt-1">
      <span className="material-symbols-outlined text-on-surface-variant text-base mt-0.5">
        {icon}
      </span>
      <div>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
          {label}
        </span>
        <p className="font-label-md text-label-md text-on-surface">{value}</p>
      </div>
    </div>
  )
}
