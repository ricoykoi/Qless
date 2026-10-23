export const STATS = [
  {
    key: 'active',
    title: 'Active Queue',
    value: 4,
    subtitle: '2 Processing • 1 Review',
    subtitleDot: 'bg-secondary',
    iconBg: 'bg-surface-container-high text-primary',
    icon: 'pending_actions',
    valueClass: 'text-primary',
    subtitleClass: 'text-on-surface-variant',
    titleClass: 'text-on-surface-variant',
  },
  {
    key: 'ready',
    title: 'Ready for Release',
    value: 1,
    subtitle: 'Digital Clearance Verified',
    iconBg: 'bg-surface-container-highest text-primary-container',
    icon: 'verified',
    valueClass: 'text-primary',
    subtitleClass: 'text-on-surface-variant',
    titleClass: 'text-on-surface-variant',
  },
  {
    key: 'action',
    title: 'Requires Action',
    value: 1,
    subtitle: 'Document Upload Needed',
    iconBg: 'bg-error-container text-on-error-container',
    icon: 'notification_important',
    valueClass: 'text-error',
    subtitleClass: 'text-error',
    titleClass: 'text-error font-semibold',
  },
  {
    key: 'completed',
    title: 'Completed Archive',
    value: 14,
    subtitle: 'Permanent USPF Vault',
    iconBg: 'bg-surface-container text-primary',
    icon: 'folder_managed',
    valueClass: 'text-primary',
    subtitleClass: 'text-on-surface-variant',
    titleClass: 'text-on-surface-variant',
  },
]

export const FILTER_PILLS = [
  { id: 'all', label: 'All Requests', count: 5, default: true },
  { id: 'processing', label: 'Processing', count: 2 },
  { id: 'under-verification', label: 'Under Verification', count: 1 },
  { id: 'ready', label: 'Ready for Release', count: 1 },
  { id: 'requires-action', label: 'Requires Action', count: 1, warn: true, default: false },
  { id: 'completed', label: 'Completed', count: 14 },
]

export const STATUS_STYLES = {
  processing: {
    cls: 'bg-primary-fixed text-on-primary-fixed',
    icon: null,
    dot: 'bg-primary animate-pulse',
  },
  'under-verification': {
    cls: 'bg-tertiary-fixed text-on-tertiary-fixed',
    icon: 'manage_search',
  },
  ready: {
    cls: 'bg-surface-container-highest text-primary-container',
    icon: 'check_circle',
  },
  completed: {
    cls: 'bg-surface-container text-on-surface',
    icon: 'task_alt',
  },
  'requires-action': {
    cls: 'bg-secondary-container text-on-secondary-container',
    icon: 'warning',
  },
}

export const REQUESTS = [
  {
    id: 'QR-2026-00125',
    location: 'Mabolo Campus',
    service: 'Transcript of Records (Official)',
    purpose: 'Purpose: Board Exam Verification / PRC',
    submittedDate: 'Sept 28, 2026',
    submittedTime: '09:42 AM',
    statusId: 'processing',
    statusLabel: 'Processing',
    payment: { amount: '₱350.00', meta: 'Paid (Verified)', icon: 'verified', secondary: true },
    release: { icon: 'storefront', label: 'Physical Pickup', sub: 'Registrar Window 2' },
    action: { type: 'view', label: 'View Details' },
    alert: {
      message:
        'Additional 2x2 ID picture with nametag needed for final document clearance seal.',
      cta: 'Upload Missing Document',
      icon: 'upload_file',
    },
  },
  {
    id: 'QR-2026-00122',
    location: 'Online Clearance',
    service: 'Certificate of Enrollment & Units',
    purpose: 'Purpose: Scholarship & CHED Verification',
    submittedDate: 'Sept 27, 2026',
    submittedTime: '02:15 PM',
    statusId: 'ready',
    statusLabel: 'Ready for Release',
    payment: { amount: '₱100.00', meta: 'Paid (GCash Ref #992)', secondary: false },
    release: { icon: 'cloud_download', label: 'Digital Download', sub: 'PDF with QR Signature', iconSecondary: true },
    action: { type: 'download', label: 'Download PDF' },
  },
  {
    id: 'QR-2026-00119',
    location: "Dean's Endorsement",
    service: 'Honorable Dismissal & Clearance',
    purpose: 'Departmental sign-offs pending (Accounting & Library)',
    submittedDate: 'Sept 24, 2026',
    submittedTime: '11:05 AM',
    statusId: 'under-verification',
    statusLabel: 'Under Verification',
    payment: { amount: '₱350.00', meta: 'For Verification', italic: true },
    release: { icon: 'storefront', label: 'Physical Pickup', sub: 'Dean of Student Affairs' },
    action: { type: 'view-muted', label: 'View Details' },
  },
  {
    id: 'QR-2026-00114',
    location: 'Discipline Office',
    service: 'Good Moral Character Certificate',
    purpose: 'Issued and archived into institutional repository',
    submittedDate: 'Sept 18, 2026',
    submittedTime: '04:30 PM',
    statusId: 'completed',
    statusLabel: 'Completed',
    payment: { amount: '₱80.00', meta: 'Paid (Over-the-Counter)' },
    release: { icon: 'cloud_done', label: 'Digital Download', sub: 'Vault Stored' },
    action: { type: 'view-soft', label: 'View Receipt & Archive' },
  },
  {
    id: 'QR-2026-00108',
    location: 'Records Division',
    service: 'Certified True Copy of Diploma',
    purpose: 'Claimed with dry seal endorsement',
    submittedDate: 'Sept 15, 2026',
    submittedTime: '10:14 AM',
    statusId: 'completed',
    statusLabel: 'Completed',
    payment: { amount: '₱200.00', meta: 'Paid (Landbank ePayment)' },
    release: { icon: 'domain_verification', label: 'Physical Pickup', sub: 'Claimed on Sept 20' },
    action: { type: 'view-soft', label: 'View Archive' },
  },
]

export const SEMESTER_OPTIONS = [
  'All Semesters / 2026',
  '1st Semester 2026-2027',
  '2nd Semester 2025-2026',
  'Summer Term 2025',
  'Prior Archival Years',
]

export const METHOD_OPTIONS = ['All Methods', 'Digital Download', 'Physical Pickup']

export const PAGE_SIZE = 5
