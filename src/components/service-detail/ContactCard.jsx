export default function ContactCard({ contact }) {
  return (
    <div className="flex items-center justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container text-secondary">
          <span className="material-symbols-outlined text-lg" aria-hidden="true">
            help_center
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md font-semibold text-primary">
            {contact.title}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {contact.body}
          </span>
        </div>
      </div>
      <a
        href="mailto:registrar@uspf.edu.ph"
        className="shrink-0 font-label-md text-label-md font-semibold text-secondary hover:underline"
      >
        {contact.cta}
      </a>
    </div>
  )
}
