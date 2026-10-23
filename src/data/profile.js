export const PROFILE = {
  fullName: 'Charlyn Mae Dico',
  studentId: '2023-01842',
  program: 'BS Information Technology • 3rd Year',
  college: 'College of Computer Studies (CCS)',
  email: 'c.dico@uspf.edu.ph',
  contactNumber: '+63 917 842 9012',
  address: 'Salinas Drive, Lahug, Cebu City, 6000',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDA56AGHXzN72HBxuxAUmu31YcaTRj2NcWrGbpTJo5ttxphlF7wnS123TOdWKr5-2abBW4Ys7EkCNCXxLhnLODUMjTw-gapO6cTZRkVZH1uDJaiCpjSOSobTgnAF0zHn71hcIRyoU5gqnARyf4cTHKeiYe_7JI2WpM7Bu87XFZ_j6ZDikvM0Zg2ImRabXbFYyqkSOImrk-RnQswJjyySEWeZA598yWQbYe_r-FfTGhq',
  status: 'Active Student • Verified',
}

export const BASIC_INFO_FIELDS = [
  { key: 'fullName', label: 'Full Name', value: PROFILE.fullName },
  {
    key: 'studentId',
    label: 'Student ID Number',
    value: PROFILE.studentId,
    mono: true,
  },
  { key: 'college', label: 'College / Department', value: PROFILE.college },
  { key: 'email', label: 'Institutional Email', value: PROFILE.email },
  {
    key: 'contactNumber',
    label: 'Contact Number',
    value: PROFILE.contactNumber,
    mono: true,
    fullWidth: true,
  },
  {
    key: 'address',
    label: 'Home Address',
    value: PROFILE.address,
    fullWidth: true,
  },
]

export const ACCOUNT_SECURITY = {
  sso: { email: PROFILE.email, status: 'Connected' },
  password: { lastUpdated: 'Last updated 45 days ago' },
  twoFactor: { enabled: true, method: 'Enabled via SMS' },
}

export const VERIFIED_DOCUMENTS = [
  {
    id: 'uspf-id',
    name: 'USPF Student ID',
    icon: 'badge',
    iconClass: 'text-primary',
    verified: true,
    linkLabel: 'View',
  },
  {
    id: 'psa-birth',
    name: 'PSA Birth Certificate',
    icon: 'picture_as_pdf',
    iconClass: 'text-error',
    verified: true,
    linkLabel: 'View',
  },
]
