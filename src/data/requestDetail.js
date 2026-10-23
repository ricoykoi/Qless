export const REQUEST = {
  id: 'QR-2026-00125',
  statusLabel: 'Processing',
  subtitle:
    'Official Academic Record Document • USPF Office of the University Registrar',

  steps: [
    {
      key: 'submitted',
      icon: 'check',
      title: '1. Submitted',
      time: 'Sept 28, 2026 • 09:15 AM',
      note: 'Submitted via Portal',
      state: 'done',
    },
    {
      key: 'verification',
      icon: 'verified_user',
      title: '2. Verification',
      time: 'Sept 28, 2026 • 11:30 AM',
      note: 'Identity verified',
      state: 'done',
    },
    {
      key: 'paid',
      icon: 'payments',
      title: '3. Paid',
      time: 'Sept 28, 2026 • 02:45 PM',
      note: '₱350 GCash (OR#99381)',
      state: 'done',
    },
    {
      key: 'processing',
      icon: 'sync',
      title: '4. Processing',
      time: 'Sept 29, 2026 • 08:30 AM',
      note: 'Archive Evaluation',
      state: 'active',
    },
    {
      key: 'ready',
      icon: 'inventory_2',
      title: '5. Ready for Release',
      time: 'Est. Oct 03, 2026',
      note: 'Registrar Window 3',
      state: 'upcoming',
    },
    {
      key: 'completed',
      icon: 'task_alt',
      title: '6. Completed',
      time: 'Pending Handover',
      note: 'Final Release Signed',
      state: 'upcoming',
    },
  ],

  specification: [
    {
      label: 'Requester Name',
      value: 'Charlyn Dico',
      badge: 'ID: 2023-01842',
    },
    {
      label: 'Academic Program',
      value: 'BS Information Technology, 3rd Year',
    },
    {
      label: 'Service Requested',
      value: 'Transcript of Records (TOR)',
      icon: 'description',
      sub: 'Official Copy • 2 Sets (Sealed Envelope)',
    },
    {
      label: 'Declared Purpose',
      value: 'Scholarship Application & Board Evaluation',
    },
    {
      label: 'Submission Timestamp',
      value: 'September 28, 2026 • 9:15 AM PHT',
    },
    {
      label: 'Estimated Release Date',
      value: 'October 03, 2026',
      badge: 'Standard 5-Day SLA',
      valueBold: true,
    },
  ],

  fee: {
    title: 'Fee Assessment: ₱350.00 Paid in Full',
    meta: 'GCash Reference No. GC-99381-8841-B • Validated by Cashier Window',
    cta: 'View Receipt',
  },

  documents: [
    {
      name: 'USPF_Student_ID_Front.pdf',
      meta: '1.4 MB • Uploaded Sept 28, 09:12 AM',
      verified: true,
    },
    {
      name: 'Clearance_Signoff_2026.pdf',
      meta: '2.8 MB • Uploaded Sept 28, 09:14 AM',
      verified: true,
    },
  ],

  missingDocument: {
    name: 'USPF_Student_ID_Back.pdf',
    meta: 'Must display current term semester sticker clearly',
  },

  claiming: {
    mapImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9lHE9C_fEzlzuANO8qJWkMCSQHhsdKWPMe5j8QDnB6cWe5swpCzVAPH4WLT1oIZYtlhe5MQJw55VsRNKVZrjvVLOL-N5e0HxpKNEVliDVsGTAkqBQ4bhIVvJQLGS2dcEpl9UWF2dfrhS171N-G-fnMcHOFBJZXZMtQJcLiRfBNGT4tuqkioGwXWI92vSWjx-CNhwFa7J1wyGIJUhdR8NKZlSYtf8ulh1HVfxqzxW8',
    mapOverlay: 'USPF Mabolo Campus • Administration Bldg',
    mapOverlaySub: 'Ground Floor',
    office: 'Office of the University Registrar, Window 3',
    hours: 'Monday to Friday, 8:00 AM – 5:00 PM (No Noon Break)',
    requirements: [
      '1. Original Valid USPF ID',
      '2. Printed/Digital Claim Voucher QR Code',
    ],
  },

  officer: {
    name: 'Maria Rosal',
    role: 'Senior Registrar Evaluation Specialist',
    division: 'College of Computer Studies & Engineering Division',
    email: 'm.rosal@uspf.edu.ph',
    phone: '+63 (32) 414-8773 • Local 104',
    phoneLabel: 'Registrar Desk',
    note: 'Handler reviews submissions between 9:00 AM – 3:00 PM. Expect updates within 24 working hours.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ER106YSDfsTuIAJ77uhPE-hP_qqP9QwgBetpsK0Qq39fvMO_X40Zs9ZcYLcxpQ79OF4HkLe9iqu7ZiuWB4vgn-BP1ycY-GzcxeJk7KqsXCmQu9pIGELWvdy07wKyCl1WYwDc03nrozTy146XyJsXaULyWuPhhaBS8Z2qQvkQZakLBAP6dfWta2DnfZLtexQAdlpbF5VQaJkDgrAkH2KHrq4xB6WltZ0umbAYTCda',
  },
}
