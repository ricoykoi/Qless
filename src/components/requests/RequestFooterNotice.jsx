const NOTICES = [
  {
    icon: 'verified_user',
    title: 'Digital Seal Verification',
    body: 'All PDF credentials generated via QLess feature encrypted SHA-256 registrar timestamps recognized by CHED and DFA.',
  },
  {
    icon: 'schedule',
    title: 'Standard Processing Time',
    body: 'Official Transcripts: 5-7 working days. Certifications: 2-3 working days upon verified payment and clearance sign-off.',
  },
  {
    icon: 'support_agent',
    title: 'Registrar Helpdesk',
    body: 'Office hours: Mon–Fri 8:00 AM – 5:00 PM. Direct line: (032) 414-8773 loc 108 or email registrar@uspf.edu.ph.',
  },
]

export default function RequestFooterNotice() {
  return (
    <div className="grid grid-cols-1 gap-space-md pt-2 md:grid-cols-3">
      {NOTICES.map((n) => (
        <div
          key={n.title}
          className="flex items-start gap-space-sm rounded-xl bg-surface-container-lowest p-space-md"
        >
          <span className="material-symbols-outlined text-2xl text-secondary" aria-hidden="true">
            {n.icon}
          </span>
          <div>
            <h5 className="font-label-lg text-label-lg font-semibold text-primary">
              {n.title}
            </h5>
            <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
              {n.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
