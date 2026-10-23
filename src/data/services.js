export const CATEGORIES = [
  { id: 'all', label: 'All Services', count: 12 },
  { id: 'academic', label: 'Academic Records', count: 4 },
  { id: 'certifications', label: 'Certifications', count: 3 },
  { id: 'clearances', label: 'Student Clearances', count: 2 },
  { id: 'alumni', label: 'Alumni Credentials', count: 3 },
]

export const SERVICES = [
  {
    id: 'tor',
    name: 'Transcript of Records (TOR)',
    description:
      'Official certified transcript containing cumulative grades, subjects, credits, and graduation details.',
    category: 'academic',
    categoryLabel: 'Academic Records',
    categoryIcon: 'folder_shared',
    tag: { label: 'Most Requested', icon: 'star', cls: 'bg-secondary-container text-on-secondary-container' },
    processingTime: '3–5 working days',
    processingDays: 3,
    fee: '₱250.00 / copy',
    feeValue: 250,
    release: 'Digital PDF & Physical Mabolo Pickup',
    prerequisites: 'Clearance signoff, 1 Valid ID',
    popularity: 1,
    searchTokens: 'transcript of records tor academic certified credits',
  },
  {
    id: 'enrollment-cert',
    name: 'Certificate of Enrollment & Grades',
    description:
      'Official verification of current or prior term academic enrollment with unit load and enrolled subjects.',
    category: 'certifications',
    categoryLabel: 'Certifications',
    categoryIcon: 'verified',
    tag: { label: 'Fast Release', icon: 'bolt', cls: 'bg-surface-container-highest text-primary-container' },
    processingTime: '1–2 working days',
    processingDays: 1,
    fee: '₱100.00',
    feeValue: 100,
    release: 'Instant Digital PDF with QR Seal',
    prerequisites: 'Active enrollment record',
    popularity: 2,
    searchTokens: 'certificate of enrollment and grades cert subjects units',
  },
  {
    id: 'good-moral',
    name: 'Good Moral Character Certificate',
    description:
      'Character verification issued and attested by the USPF Office of Student Affairs & Services (OSAS).',
    category: 'clearances',
    categoryLabel: 'Student Services',
    categoryIcon: 'shield_person',
    tag: { label: 'OSAS Verified', icon: 'approval', cls: 'bg-surface-container-low text-on-surface-variant' },
    processingTime: '2–3 working days',
    processingDays: 2,
    fee: '₱80.00',
    feeValue: 80,
    release: 'Digital & Physical',
    prerequisites: 'OSAS clearance',
    popularity: 3,
    searchTokens: 'good moral character certificate osas student affairs',
  },
  {
    id: 'diploma-ctc',
    name: 'Certified True Copy of Diploma',
    description:
      'Authentication and dry seal stamping of USPF collegiate graduation diploma for local and international use.',
    category: 'alumni',
    categoryLabel: 'Alumni Credentials',
    categoryIcon: 'school',
    tag: { label: 'Dry Seal', icon: 'workspace_premium', cls: 'bg-surface-container-low text-on-surface-variant' },
    processingTime: '5–7 working days',
    processingDays: 5,
    fee: '₱200.00',
    feeValue: 200,
    release: 'Physical Pickup (Registrar Mabolo)',
    prerequisites: 'Original Diploma copy scanned',
    popularity: 4,
    searchTokens: 'certified true copy of diploma alumni authentication dry seal',
  },
  {
    id: 'honorable-dismissal',
    name: 'Honorable Dismissal & Transfer Credentials',
    description:
      'Formal certificate of honorable dismissal required for transferring to other colleges or universities.',
    category: 'academic',
    categoryLabel: 'Academic Records',
    categoryIcon: 'folder_shared',
    tag: { label: 'Clearance Reqd', icon: 'assignment_turned_in', cls: 'bg-surface-container-low text-on-surface-variant' },
    processingTime: '5–10 working days',
    processingDays: 6,
    fee: '₱350.00',
    feeValue: 350,
    release: 'Physical Mabolo Pickup',
    prerequisites: 'Complete Multi-Dept Clearance',
    popularity: 5,
    searchTokens: 'honorable dismissal transfer credentials academic university transfer',
  },
  {
    id: 'course-desc',
    name: 'Course Description & Syllabus Certification',
    description:
      'Official certified catalog descriptions of completed curriculum subjects for credit evaluation.',
    category: 'academic',
    categoryLabel: 'Academic Records',
    categoryIcon: 'folder_shared',
    tag: { label: 'Curriculum Archival', icon: 'menu_book', cls: 'bg-surface-container-low text-on-surface-variant' },
    processingTime: '7–10 working days',
    processingDays: 7,
    fee: '₱150.00 / syllabus',
    feeValue: 150,
    release: 'Digital & Physical',
    prerequisites: 'Transcript copy',
    popularity: 6,
    searchTokens: 'course description syllabus certification subjects credits',
  },
]

export const SORT_OPTIONS = [
  { value: 'requested', label: 'Most Requested' },
  { value: 'sla', label: 'Processing SLA: Fastest' },
  { value: 'fee', label: 'Fee: Low to High' },
]

export const TRUST_ITEMS = [
  {
    icon: 'qr_code',
    iconBg: 'bg-secondary-container text-on-secondary-container',
    title: 'Tamper-Proof QR Verification',
    body: 'Every digital document includes an embedded cryptographic QR signature verifiable on the official USPF Registrar portal.',
  },
  {
    icon: 'account_balance_wallet',
    iconBg: 'bg-surface-container-highest text-primary',
    title: 'Cashless Payment Channels',
    body: 'Pay directly via GCash, Maya, Landbank, or over-the-counter USPF Mabolo Cashier with automated reference syncing.',
  },
  {
    icon: 'mark_email_read',
    iconBg: 'bg-surface-container-highest text-primary',
    title: 'Real-time Notification SMS',
    body: 'Receive automated SMS and email notifications at every milestone: Clearance review, Dry seal affixing, and Ready for pickup.',
  },
]

export const services = [
  {
    id: 1,
    tag: 'Registrar Archive',
    icon: 'history_edu',
    title: 'Transcript of Records (TOR)',
    description:
      'Official academic record transcript required for corporate employment, PRC board examinations, or university transfer.',
    timeline: '3–5 working days',
    fee: '₱250.00',
    method: 'Digital & Mabolo Pickup',
  },
  {
    id: 2,
    tag: 'Instant Release',
    icon: 'description',
    title: 'Certificate of Enrollment & Grades',
    description:
      'Validated semester enrollment certification, grade slips, and scholarship validation with registrar dry seal.',
    timeline: '1–2 working days',
    fee: '₱100.00',
    method: 'Instant PDF Download',
  },
  {
    id: 3,
    tag: 'Alumni Document',
    icon: 'school',
    title: 'Diploma Reissuance & CTC',
    description:
      'Certified second copy of official USPF diploma or notarized Certified True Copies for overseas attestation.',
    timeline: '7–10 working days',
    fee: '₱500.00',
    method: 'Physical Pickup',
  },
  {
    id: 4,
    tag: 'Student Affairs',
    icon: 'workspace_premium',
    title: 'Good Moral Certificate',
    description:
      'Official character certification endorsement evaluated and signed by the Dean of Student Affairs & Services.',
    timeline: '2–3 working days',
    fee: '₱80.00',
    method: 'Digital / Pickup',
  },
]

export const steps = [
  {
    num: '01',
    title: 'Register & Verify Identity',
    description:
      'Log in with your USPF student portal credentials or register as an alumnus with your USPF Student ID and valid government identification.',
    icon: 'badge',
    footnote: 'Single Sign-On Supported',
  },
  {
    num: '02',
    title: 'Select Required Academic Service',
    description:
      'Choose from the service catalog: Transcripts, Certificates of Grades, Honorable Dismissal, Diplomas, or Course Descriptions.',
    icon: 'list_alt',
    footnote: 'Multiple Request Bundling',
  },
  {
    num: '03',
    title: 'Upload Prerequisite Documents',
    description:
      'Attach scanned requirements such as previous clearances, PSA Birth Certificate, or clearance slips right from your device.',
    icon: 'cloud_upload',
    footnote: 'PDF, PNG & JPG format',
  },
  {
    num: '04',
    title: 'Secure Online or OTC Payment',
    description:
      'Settle filing fees safely through integrated digital channels (GCash, Maya, credit/debit card) or USPF campus cashier.',
    icon: 'payments',
    footnote: 'Instant Official Receipt (OR)',
  },
  {
    num: '05',
    title: 'Live Progress Tracking',
    description:
      'Monitor the live status as your record moves through clearance checking, Dean review, dry sealing, and release readiness.',
    icon: 'notifications_active',
    footnote: 'SMS & Email Notifications',
  },
  {
    num: '06',
    title: 'Instant Download or Campus Pickup',
    description:
      'Retrieve digitally certified copies directly to your phone or present your generated QR claim code at the Mabolo express window.',
    icon: 'qr_code_scanner',
    footnote: 'Express Counter Clearance',
  },
]

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD83txMMTCeYmKFmFqZVD9HPnzol9QSL_pMFndhqJnc6qSnBhxySzZTvkf-Sx0JaQwzRyXeBxx-OTEJw8x7osJi4wRN9v-uxXaMW_oO5aF9c-gP9clBpjXBg-6hC6S9RxF6VeXyd8P8MgGmu8jZxTlS7H7Gk-0OUj0MzJt3KtiGXm9dn-s-fHnnmAOThKl0Us0MYHIwiDvEJI1L5LuZ2c7iIxK_TGHI_J2qg9e36kSl'
