export const SERVICE_DETAIL = {
  code: 'REG-TOR-001',
  categoryLabel: 'Official Document',
  title: 'Transcript of Records (TOR)',
  subtitle:
    'Official academic transcript of units, grades, and graduation credentials.',
  badgeLabel: 'Authorized Release',

  metadata: [
    {
      icon: 'schedule',
      iconBg: 'bg-surface-container-high text-primary',
      label: 'Processing Time',
      value: '3–5 Working Days',
    },
    {
      icon: 'payments',
      iconBg: 'bg-secondary-container/30 text-secondary',
      label: 'Service Base Fee',
      value: '₱250.00 / copy',
    },
    {
      icon: 'local_shipping',
      iconBg: 'bg-surface-container-high text-primary',
      label: 'Release Format',
      value: 'Digital & Campus Pickup',
    },
    {
      icon: 'account_balance',
      iconBg: 'bg-surface-container-high text-primary',
      label: 'Issuing Office',
      value: 'University Registrar',
    },
  ],

  basePrice: 250,
  maxCopies: 10,

  requirements: [
    { label: 'Valid USPF Student ID or Government ID', hint: 'PDF or JPEG' },
    { label: 'University Clearance Sign-off', hint: 'Pre-cleared' },
    { label: '2x2 Formal Colored Photo (White Background)', hint: 'Digital upload' },
  ],

  contact: {
    title: 'Questions regarding your transcript?',
    body: 'Contact registrar@uspf.edu.ph or call local 105 / 106',
    cta: 'Contact Office',
  },

  deliveryOptions: [
    { id: 'pickup', label: 'Campus Pickup', fee: 0, feeLabel: 'FREE', default: true },
    { id: 'courier', label: 'Express Courier', fee: 180, feeLabel: '+₱180.00', highlight: true },
    { id: 'digital', label: 'Digital Copy Only', fee: 0, feeLabel: 'FREE' },
  ],
}
