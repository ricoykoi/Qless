export default function ClaimTokenCard({ requestId }) {
  return (
    <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between gap-space-md shadow-sm">
      <div className="flex flex-col min-w-0">
        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
          Official Claim Token
        </span>
        <span className="font-headline-md text-headline-md text-primary font-bold tracking-wider mt-0.5 truncate">
          {requestId}
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Present this QR code to the teller upon arrival.
        </span>
      </div>

      <div className="w-20 h-20 bg-surface-container-lowest p-1.5 rounded-lg shadow-sm flex items-center justify-center shrink-0">
        <QrPattern />
      </div>
    </div>
  )
}

function QrPattern() {
  return (
    <svg
      className="w-full h-full text-primary"
      fill="currentColor"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <rect height="30" rx="3" width="30" x="0" y="0" />
      <rect fill="#FFFFFF" height="20" rx="1" width="20" x="5" y="5" />
      <rect height="10" rx="1" width="10" x="10" y="10" />
      <rect height="30" rx="3" width="30" x="70" y="0" />
      <rect fill="#FFFFFF" height="20" rx="1" width="20" x="75" y="5" />
      <rect height="10" rx="1" width="10" x="80" y="10" />
      <rect height="30" rx="3" width="30" x="0" y="70" />
      <rect fill="#FFFFFF" height="20" rx="1" width="20" x="5" y="75" />
      <rect height="10" rx="1" width="10" x="10" y="80" />
      <rect height="8" width="8" x="40" y="10" />
      <rect height="8" width="8" x="52" y="10" />
      <rect height="8" width="8" x="40" y="22" />
      <rect height="8" width="8" x="10" y="45" />
      <rect height="8" width="8" x="22" y="45" />
      <rect height="8" width="8" x="34" y="45" />
      <rect height="8" width="8" x="46" y="45" />
      <rect height="8" width="8" x="58" y="45" />
      <rect height="8" width="8" x="70" y="45" />
      <rect height="8" width="8" x="82" y="45" />
      <rect height="10" width="10" x="45" y="60" />
      <rect height="10" width="10" x="65" y="60" />
      <rect height="10" width="10" x="80" y="75" />
      <rect height="10" width="10" x="45" y="80" />
    </svg>
  )
}
