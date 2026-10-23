import { createElement, Fragment } from 'react'

export const POPULAR_TAGS = [
  { label: 'TOR Processing', query: 'TOR' },
  { label: 'Payment Validation', query: 'GCash' },
  { label: 'Graduation Clearance', query: 'Clearance' },
  { label: 'Representative Pickup', query: 'Authorization' },
]

export const CATEGORIES = [
  {
    id: 'document-requests',
    icon: 'description',
    title: 'Document Requests',
    description:
      'Official TOR, certifications, diplomas, authentications & live release timelines.',
    ticketCategory: 'Document Requests',
  },
  {
    id: 'payments-billing',
    icon: 'account_balance_wallet',
    title: 'Payments & Billing',
    description:
      'GCash, Maya, Landbank verification, official receipts, and cashier confirmation.',
    ticketCategory: 'Payments & Billing',
  },
  {
    id: 'clearance',
    icon: 'fact_check',
    title: 'Clearance & Holds',
    description:
      'College dean sign-offs, library clearance, graduation audits, and hold lift procedures.',
    ticketCategory: 'Clearance',
  },
  {
    id: 'account-login',
    icon: 'manage_accounts',
    title: 'Account & Login',
    description:
      'USPF institutional Google SSO, student profile updates, and authentication reset.',
    ticketCategory: 'Account & Login',
  },
]

const strong = (text) =>
  createElement('strong', { className: 'text-primary font-medium' }, text)

export const FAQS = [
  {
    id: 'f1',
    question: 'How do I track my requested academic records?',
    answer: createElement(
      Fragment,
      null,
      'Go to ',
      strong('My Requests'),
      ' on the main menu and select any active filing. You will see its real-time 4-stage tracking timeline (Pending Review, Cashier Validation, Registrar Processing, and Ready for Claim) alongside designated window pickup schedules and courier tracking notes.'
    ),
  },
  {
    id: 'f2',
    question: 'What should I do if my payment status remains pending?',
    answer: createElement(
      Fragment,
      null,
      'Online cashier settlements via GCash, Maya, and Landbank are validated by accounting officers within 1–2 hours during university business hours (8:00 AM – 5:00 PM). If completed during weekends or holidays, posting occurs on the following school day. Your generated e-receipt is permanently accessible in the ',
      strong('Payment'),
      ' ledger tab.'
    ),
  },
  {
    id: 'f3',
    question: 'Can I authorize someone else to claim my physical documents?',
    answer: createElement(
      Fragment,
      null,
      'Yes. The authorized proxy must present: (1) A signed authorization letter specifying the release, (2) A photocopy of your valid USPF Student ID or government ID with signature specimen, and (3) Original valid government ID of the representative at Windows 1–3 in the Administration Building.'
    ),
  },
  {
    id: 'f4',
    question: 'How can I request urgent or rush document release?',
    answer: createElement(
      Fragment,
      null,
      'Eligible documents (e.g., Certificate of Enrollment, Form 137, Grading Verification) offer an ',
      strong('Express Processing'),
      ' toggle during the service intake step. For special employment or board exam deadlines, visit Registrar Window 1 with supporting documentation for administrative supervisor override.'
    ),
  },
]

export const SUPPORT_OFFICES = [
  {
    id: 'registrar',
    icon: 'assured_workload',
    name: 'University Registrar',
    location: 'Windows 1–3',
    items: [
      {
        icon: 'mail',
        type: 'link',
        label: 'registrar@uspf.edu.ph',
        href: 'mailto:registrar@uspf.edu.ph',
      },
      { icon: 'call', type: 'text', label: '(032) 414-7963 local 102' },
      { icon: 'schedule', type: 'text', label: 'Mon – Fri, 8:00 AM – 5:00 PM' },
    ],
  },
  {
    id: 'cashier',
    icon: 'receipt_long',
    name: 'University Cashier',
    location: 'Main Hall GF',
    items: [
      {
        icon: 'mail',
        type: 'link',
        label: 'cashier@uspf.edu.ph',
        href: 'mailto:cashier@uspf.edu.ph',
      },
      { icon: 'payments', type: 'text', label: 'Online Proofs & Counter Payments' },
      { icon: 'schedule', type: 'text', label: 'Mon – Fri, 8:00 AM – 5:00 PM' },
    ],
  },
  {
    id: 'it',
    icon: 'dns',
    name: 'IT Helpdesk & QLess Portal',
    location: 'CIT Building',
    items: [
      {
        icon: 'mail',
        type: 'link',
        label: 'it.support@uspf.edu.ph',
        href: 'mailto:it.support@uspf.edu.ph',
      },
      {
        icon: 'badge',
        type: 'text',
        label: 'USPF Institutional SSO & Credential Recovery',
      },
    ],
  },
]

export const TICKET_CATEGORIES = [
  { value: 'Document Requests', label: 'Document Inquiries & Status' },
  { value: 'Payments & Billing', label: 'Payment Verification Issue' },
  { value: 'Clearance', label: 'Clearance or Record Hold' },
  { value: 'Account & Login', label: 'Account & Student Portal Error' },
  { value: 'Other Concerns', label: 'Other Campus Inquiries' },
]
