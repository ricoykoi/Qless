export const FILTERS = [
  { id: 'all', label: 'All', count: 6 },
  { id: 'requests', label: 'Requests', count: 3 },
  { id: 'payments', label: 'Payments', count: 2 },
  { id: 'clearances', label: 'Clearances', count: 1, warn: true },
]

export const NOTIFICATIONS = [
  {
    id: 'n1',
    category: 'clearances',
    status: 'unread',
    icon: 'priority_high',
    iconBg: 'bg-secondary-container/40 text-on-secondary-container',
    iconFilled: true,
    title: 'Action Required: ID Back Photo',
    tag: 'Action Needed',
    tagClass:
      'bg-secondary-container text-on-secondary-container font-bold uppercase tracking-wider',
    body: 'Request #QR-2026-00125 needs back view of USPF ID.',
    time: '10m ago',
    ref: '#QR-2026-00125',
    action: {
      label: 'Upload Now',
      icon: 'upload_file',
      variant: 'primary',
    },
    highlight: true,
  },
  {
    id: 'n2',
    category: 'requests',
    status: 'unread',
    icon: 'check_circle',
    iconBg: 'bg-surface-container-high text-primary-container',
    iconFilled: true,
    title: 'Document Ready for Pickup',
    tag: 'Ready',
    tagClass:
      'bg-surface-container text-primary font-semibold uppercase tracking-wider',
    body: 'Transcript of Records (TOR) is ready at Window 3, Mabolo Campus.',
    time: '2h ago',
    ref: 'TOR Claim #812',
    action: {
      label: 'View Claim Voucher',
      icon: 'confirmation_number',
      variant: 'soft',
    },
  },
  {
    id: 'n3',
    category: 'payments',
    status: 'unread',
    icon: 'payments',
    iconBg: 'bg-surface-container text-secondary',
    iconFilled: false,
    title: 'Payment Confirmed',
    tag: 'Paid',
    tagClass:
      'bg-surface-container text-secondary font-semibold uppercase tracking-wider',
    body: '₱350.00 verified for Request #QR-2026-00125 via GCash.',
    time: 'Yesterday',
    ref: 'OR-90214',
    action: {
      label: 'View Receipt',
      icon: 'receipt',
      variant: 'outline',
    },
  },
  {
    id: 'n4',
    category: 'requests',
    status: 'read',
    icon: 'sync',
    iconBg: 'bg-surface-container-low text-on-surface-variant',
    iconFilled: false,
    title: 'Request Under Processing',
    tag: 'Processing',
    tagClass:
      'bg-surface-container-low text-on-surface-variant uppercase tracking-wider',
    body: 'Clearance signed off by College Dean. Sent to Registrar archiving.',
    time: '2 days ago',
    action: { label: 'Details', variant: 'muted' },
  },
  {
    id: 'n5',
    category: 'requests',
    status: 'read',
    icon: 'event_note',
    iconBg: 'bg-surface-container-low text-on-surface-variant',
    iconFilled: false,
    title: 'Enrollment Period Reminder',
    tag: 'Notice',
    tagClass:
      'bg-surface-container-low text-on-surface-variant uppercase tracking-wider',
    body: 'AY 2025–2026 2nd Semester credential requests cut-off is Oct 15.',
    time: '3 days ago',
    action: { label: 'Details', variant: 'muted' },
  },
  {
    id: 'n6',
    category: 'payments',
    status: 'read',
    icon: 'receipt_long',
    iconBg: 'bg-surface-container-low text-on-surface-variant',
    iconFilled: false,
    title: 'Tuition Clearance Acknowledged',
    tag: 'Archived',
    tagClass:
      'bg-surface-container-low text-on-surface-variant uppercase tracking-wider',
    body: 'Accounting clearance approved for 1st Semester academic documents.',
    time: '5 days ago',
    action: { label: 'Details', variant: 'muted' },
  },
]

export const SETTINGS_DEFAULTS = {
  email: true,
  sms: true,
  pickupReminders: true,
}

export const SETTINGS_META = [
  {
    key: 'email',
    title: 'Email Notifications',
    desc: 'Send updates to student email',
  },
  {
    key: 'sms',
    title: 'SMS Urgent Alerts',
    desc: 'Receive SMS for pending action items',
  },
  {
    key: 'pickupReminders',
    title: 'Pickup Ready Reminders',
    desc: 'Alert when credentials arrive at counter',
  },
]

export const MOBILE_NUMBER = '+63 917 ••• 4281'
