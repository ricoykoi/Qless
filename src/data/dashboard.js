export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD83txMMTCeYmKFmFqZVD9HPnzol9QSL_pMFndhqJnc6qSnBhxySzZTvkf-Sx0JaQwzRyXeBxx-OTEJw8x7osJi4wRN9v-uxXaMW_oO5aF9c-gP9clBpjXBg-6hC6S9RxF6VeXyd8P8MgGmu8jZxTlS7H7Gk-0OUj0MzJt3KtiGXm9dn-s-fHnnmAOThKl0Us0MYHIwiDvEJI1L5LuZ2c7iIxK_TGHI_J2qg9e36kSl'

export const AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDA56AGHXzN72HBxuxAUmu31YcaTRj2NcWrGbpTJo5ttxphlF7wnS123TOdWKr5-2abBW4Ys7EkCNCXxLhnLODUMjTw-gapO6cTZRkVZH1uDJaiCpjSOSobTgnAF0zHn71hcIRyoU5gqnARyf4cTHKeiYe_7JI2WpM7Bu87XFZ_j6ZDikvM0Zg2ImRabXbFYyqkSOImrk-RnQswJjyySEWeZA598yWQbYe_r-FfTGhq'

export const STUDENT = {
  name: 'Charlyn Dico',
  roleLabel: 'Student • Verified Account ✓',
}

export const NAV_ITEMS = [
  { path: 'dashboard', icon: 'dashboard', label: 'Dashboard', active: true },
  { path: 'services', icon: 'view_list', label: 'Services' },
  { path: 'requests', icon: 'folder_open', label: 'My Requests', badge: '2' },
  { path: 'payment', icon: 'account_balance_wallet', label: 'Payment', dot: true },
  { path: 'notifications', icon: 'notifications', label: 'Notifications', badge: '3' },
  { path: 'profile', icon: 'person', label: 'Profile' },
]

export const NAV_FOOTER_ITEMS = [
  { path: 'help', icon: 'help_center', label: 'Help & Support' },
  { path: 'logout', icon: 'logout', label: 'Logout', danger: true },
]

export const STATS = [
  {
    title: 'Active Requests',
    icon: 'folder_shared',
    iconBg: 'bg-surface-container',
    iconColor: 'text-primary-container',
    value: '3',
    badge: 'In Queue',
    badgeClass: 'bg-primary-container/90 text-white',
    dot: 'bg-primary-container',
    detail: '2 in processing, 1 under verification',
    titleClass: 'text-on-surface-variant',
    valueClass: 'text-primary',
    detailClass: 'text-on-surface-variant',
  },
  {
    title: 'Pending Actions',
    icon: 'priority_high',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    pulse: true,
    value: '1',
    badge: 'Immediate',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    dot: 'bg-secondary',
    detail: 'Action required by requester',
    titleClass: 'text-on-secondary-container',
    valueClass: 'text-on-secondary-container',
    detailClass: 'text-secondary font-medium',
  },
  {
    title: 'Ready for Release',
    icon: 'verified',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-primary',
    value: '1',
    badge: 'Verified',
    badgeClass: 'bg-surface-container-highest text-primary',
    dot: 'bg-surface-tint',
    detail: 'Available for digital download',
    titleClass: 'text-on-surface-variant',
    valueClass: 'text-primary',
    detailClass: 'text-on-surface-variant',
  },
  {
    title: 'Completed Requests',
    icon: 'task_alt',
    iconBg: 'bg-surface-container-low',
    iconColor: 'text-on-surface-variant',
    value: '14',
    badge: 'Historical',
    badgeClass: 'bg-surface-container-low text-on-surface-variant',
    dot: 'bg-outline-variant',
    detail: 'All-time processed records',
    titleClass: 'text-on-surface-variant',
    valueClass: 'text-primary',
    detailClass: 'text-on-surface-variant',
  },
]

export const RECENT_REQUESTS = [
  {
    ref: 'QR-2026-00125',
    service: 'Transcript of Records (Official)',
    subtitle: 'Hardcopy (2 copies) • Board Exam',
    submitted: 'Sept 28, 2026',
    release: 'Oct 03, 2026',
    status: {
      label: 'Processing',
      icon: null,
      dot: 'bg-primary animate-pulse',
      cls: 'bg-surface-container-highest text-primary',
      iconCls: '',
    },
    payment: { label: 'Paid (₱350.00)', icon: 'check_circle', cls: 'bg-surface-container text-primary' },
    action: 'view',
  },
  {
    ref: 'QR-2026-00122',
    service: 'Certificate of Enrollment',
    subtitle: 'Digital PDF • Scholarship Verification',
    submitted: 'Sept 27, 2026',
    release: 'Sept 29, 2026',
    status: {
      label: 'Ready for Release',
      icon: 'verified',
      cls: 'bg-surface-container-highest text-on-surface',
    },
    payment: { label: 'Paid (₱75.00)', icon: 'check_circle', cls: 'bg-surface-container text-primary' },
    action: 'download',
  },
  {
    ref: 'QR-2026-00119',
    service: 'Honorable Dismissal & Clearance',
    subtitle: 'Physical Package • Multi-department signoff',
    submitted: 'Sept 24, 2026',
    release: 'Oct 08, 2026',
    status: {
      label: 'Under Verification',
      icon: 'pending',
      cls: 'bg-surface-container text-on-surface-variant',
    },
    payment: { label: 'For Verification', icon: 'schedule', cls: 'bg-secondary-container text-on-secondary-container' },
    action: 'view',
  },
  {
    ref: 'QR-2026-00108',
    service: 'Certified True Copy of Diploma',
    subtitle: 'Sealed Authentication • Registrar Dry Seal',
    submitted: 'Sept 15, 2026',
    release: 'Sept 22, 2026',
    status: {
      label: 'Completed',
      icon: 'done_all',
      cls: 'bg-surface-container-low text-on-surface-variant',
    },
    payment: { label: 'Paid (₱200.00)', icon: 'check_circle', cls: 'bg-surface-container text-primary' },
    action: 'view',
  },
]

export const SHORTCUTS = [
  {
    icon: 'description',
    iconBg: 'bg-primary-container text-white',
    title: 'Request Transcript',
    desc: 'Official Transcript of Records (OTR) for employment, PRC, or transfer',
  },
  {
    icon: 'school',
    iconBg: 'bg-surface-container-highest text-primary',
    title: 'Enrollment Certificate',
    desc: 'Proof of current enrollment, units earned, or GPA certification',
  },
  {
    icon: 'workspace_premium',
    iconBg: 'bg-surface-container text-primary',
    title: 'Good Moral Certificate',
    desc: 'Office of Student Affairs character verification and clearance',
  },
  {
    icon: 'credit_card',
    iconBg: 'bg-secondary-container text-on-secondary-container',
    title: 'Pay Assessment & Fees',
    desc: 'Online cash checkout via GCash, Maya, Dragonpay or Bank Transfer',
    highlight: true,
  },
]

export const NOTIFICATIONS = [
  {
    icon: 'update',
    iconBg: 'bg-surface-container-highest text-primary',
    title: 'Request #QR-2026-00125 moved to Processing',
    body: 'Assigned to Officer M. Rosal (USPF Registrar Dept).',
    time: '2 hours ago',
    dot: 'bg-primary-container',
  },
  {
    icon: 'payments',
    iconBg: 'bg-secondary-container text-on-secondary-container',
    title: 'Payment of ₱150.00 verified',
    body: 'OR #2026-99381 confirmed by USPF Accounting.',
    time: 'Yesterday • 3:42 PM',
    dot: 'bg-outline-variant',
  },
  {
    icon: 'download_done',
    iconBg: 'bg-surface-container-high text-primary',
    title: 'Certificate of Enrollment ready',
    body: 'Digital copy certified with cryptographic seal.',
    time: '2 days ago • 10:15 AM',
    dot: 'bg-outline-variant',
  },
]
