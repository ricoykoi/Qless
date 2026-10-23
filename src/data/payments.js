export const STATS = [
  {
    key: 'paid',
    title: 'Total Paid Fees',
    value: '₱880.00',
    valueClass: 'text-primary',
    subtitle: '6 verified official receipts',
    subtitleDot: 'bg-secondary-container',
    icon: 'verified',
    iconFill: true,
    iconBg: 'bg-surface-container-high text-primary',
  },
  {
    key: 'pending',
    title: 'Pending Payments',
    value: '₱150.00',
    valueClass: 'text-error',
    subtitle: '1 request awaiting settlement',
    subtitleClass: 'text-error font-medium',
    icon: 'pending_actions',
    iconBg: 'bg-error-container text-error',
    highlight: true,
  },
  {
    key: 'verification',
    title: 'Cashier Verification',
    value: '₱350.00',
    valueClass: 'text-on-surface',
    subtitle: '1 slip under cashier audit',
    icon: 'hourglass_top',
    iconBg: 'bg-secondary-container/40 text-on-secondary-container',
  },
  {
    key: 'channel',
    title: 'Linked Settlement Channel',
    value: 'GCash • 0917-***-4921',
    valueClass: 'text-primary',
    isChannel: true,
    subtitle: 'USPF Mabolo Cashier Enabled',
    subtitleClass: 'text-secondary font-medium',
    icon: 'account_balance_wallet',
    iconBg: 'bg-primary-container text-on-primary',
  },
]

export const FILTER_TABS = [
  { id: 'all', label: 'All', count: 8 },
  { id: 'verified', label: 'Verified', count: 6 },
  { id: 'verification', label: 'For Review', count: 1 },
  { id: 'pending', label: 'Unpaid', count: 1 },
]

export const TRANSACTIONS = [
  {
    ref: 'QR-2026-00128',
    subref: 'Ref #29402',
    item: 'Good Moral & Clearances',
    subitem: 'Office of Student Affairs',
    amount: 150,
    date: 'Oct 01, 2026',
    channel: { icon: 'schedule', label: 'Pending Selection', muted: true },
    status: 'pending',
    statusLabel: 'Unpaid',
    statusClass: 'bg-error-container text-error',
    action: {
      type: 'pay',
      label: 'Pay ₱150',
      ref: 'QR-2026-00128',
      amount: 150,
      docName: 'Good Moral & Clearances',
    },
  },
  {
    ref: 'QR-2026-00125',
    subref: 'Ref #99281',
    item: 'Transcript of Records (2 copies)',
    subitem: "Official Registrar's Copy",
    amount: 350,
    date: 'Sept 28, 2026',
    channel: { dot: 'bg-secondary', label: 'GCash Gateway' },
    status: 'verified',
    statusLabel: 'Verified • Paid',
    statusClass: 'bg-surface-container-high text-primary',
    action: {
      type: 'receipt',
      label: '#OR-90214',
      receipt: {
        or: 'OR-90214',
        item: 'Transcript of Records (2 copies)',
        amount: 350,
        date: 'Sept 28, 2026',
        channel: 'GCash (Ref #99281)',
      },
    },
  },
  {
    ref: 'QR-2026-00122',
    subref: 'Ref #98104',
    item: 'Certificate of Enrollment',
    subitem: 'Scholarship Endorsement',
    amount: 100,
    date: 'Sept 27, 2026',
    channel: { dot: 'bg-primary-container', label: 'Maya E-Wallet' },
    status: 'verified',
    statusLabel: 'Verified • Paid',
    statusClass: 'bg-surface-container-high text-primary',
    action: {
      type: 'receipt',
      label: '#OR-90183',
      receipt: {
        or: 'OR-90183',
        item: 'Certificate of Enrollment',
        amount: 100,
        date: 'Sept 27, 2026',
        channel: 'Maya E-Wallet (Ref #98104)',
      },
    },
  },
  {
    ref: 'QR-2026-00119',
    subref: 'Deposit #LB-4401',
    item: 'Honorable Dismissal & Clearance',
    subitem: 'Transfer Credential Release',
    amount: 350,
    date: 'Sept 24, 2026',
    channel: { dot: 'bg-secondary-container', label: 'Over-the-Counter / Deposit' },
    status: 'verification',
    statusLabel: 'For Verification',
    statusClass: 'bg-secondary-container/40 text-on-secondary-container',
    action: {
      type: 'uploaded',
      label: 'Slip Uploaded',
    },
  },
  {
    ref: 'QR-2026-00114',
    subref: 'Ref #87311',
    item: 'Good Moral Certificate',
    subitem: 'Regular Application',
    amount: 80,
    date: 'Sept 18, 2026',
    channel: { dot: 'bg-secondary', label: 'GCash Gateway' },
    status: 'verified',
    statusLabel: 'Verified • Paid',
    statusClass: 'bg-surface-container-high text-primary',
    action: {
      type: 'receipt',
      label: '#OR-89912',
      receipt: {
        or: 'OR-89912',
        item: 'Good Moral Certificate',
        amount: 80,
        date: 'Sept 18, 2026',
        channel: 'GCash (Ref #87311)',
      },
    },
  },
]

export const PENDING_ASSESSMENT = {
  ref: 'QR-2026-00128',
  title: 'Good Moral Certificate & University Clearance',
  description:
    'Settle your registrar fee to immediately dispatch this document to the Office of Student Affairs for digital signature and clearance stamp.',
  amount: 150,
  docName: 'Good Moral & Clearances',
}

export const BANK = {
  name: 'Land Bank of the Philippines',
  accountName: 'USPF Inc. / Trust Fund',
  accountNumber: '0142-1082-99',
  branch: 'Lahug Cebu Branch',
}

export const PAYMENT_METHODS = [
  {
    id: 'gcash',
    label: 'GCash E-Wallet',
    desc: 'Instant receipt authorization via mobile number',
    badge: 'Popular',
    default: true,
  },
  {
    id: 'maya',
    label: 'Maya / Maya Wallet',
    desc: 'Zero convenience fee for USPF students',
  },
  {
    id: 'card',
    label: 'Credit / Debit Card (Visa/Mastercard)',
    desc: 'Secure Landbank Card Payment Engine',
  },
]

export const CASHIER_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPQgsD2sFBbEh6EmsKdJEPxHf1uzAqAcVLs0C83rbo3TZTYQ2Ap_Q0i9mWKbzBe89cYm4-OVtFW17dHGSTh3nxxJwQ8YhTjOr7DAwsrcRfz78dBQWRdAiYkpDoPmMx1OXnVO1SWWLXPMN8FWn5pxMbRqVKm9djtn_9tz77AX41ifrneYFu7501y2NC_277PRWY51DosNIQX3XthWygXi1t4X-IU_Mh-XhgJLG0O_wP'
