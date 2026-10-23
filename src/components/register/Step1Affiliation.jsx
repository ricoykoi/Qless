export default function Step1Affiliation({ affiliation, onSelect }) {
  return (
    <section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-space-xs">
          <span className="rounded-full bg-secondary-fixed px-2 py-0.5 font-label-sm text-label-sm font-semibold uppercase tracking-wide text-on-secondary-fixed">
            Primary Affiliation
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Step 1 of 4
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-primary">
          How are you connected to USPF?
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Select your affiliation to configure your student record and
          verification pipeline accurately.
        </p>
      </div>

      <div className="mt-space-xs grid grid-cols-1 gap-space-md md:grid-cols-2">
        <AffiliationCard
          active={affiliation === 'student'}
          onClick={() => onSelect('student')}
          icon="school"
          title="Current USPF Student"
          desc="For actively enrolled basic education, college undergraduate, or graduate school scholars."
          checklist="Active USPF ID Card & Enrolled Term"
          iconBg="bg-primary-container text-on-primary"
        />
        <AffiliationCard
          active={affiliation === 'alumni'}
          onClick={() => onSelect('alumni')}
          icon="history_edu"
          title="USPF Alumni / Former Student"
          desc="For graduates and past students requesting official transcripts, credentials, or certifications."
          checklist="Graduation Year or Last Attended Semester"
          iconBg="bg-surface-container-high text-primary"
        />
      </div>

      <div className="flex items-start justify-between gap-3 rounded-lg bg-surface-container-low p-space-sm sm:items-center">
        <div className="flex items-start gap-space-xs">
          <span className="material-symbols-outlined text-primary" aria-hidden="true">
            info
          </span>
          <span className="font-body-sm text-body-sm text-on-surface">
            Changing affiliation later requires manual registrar verification
            reset.
          </span>
        </div>
        <span className="shrink-0 font-label-sm text-label-sm font-semibold text-primary">
          USPF Office of Registrar
        </span>
      </div>
    </section>
  )
}

function AffiliationCard({
  active,
  onClick,
  icon,
  title,
  desc,
  checklist,
  iconBg,
}) {
  const cardClass = active
    ? 'group flex cursor-pointer flex-col justify-between rounded-xl bg-surface-container-low p-space-md shadow-md transition-all duration-200 hover:bg-surface-container'
    : 'group flex cursor-pointer flex-col justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-200 hover:bg-surface-container'

  const checkClass = active
    ? 'flex h-6 w-6 items-center justify-center rounded-full bg-primary-container text-on-primary shadow-sm'
    : 'flex h-6 w-6 items-center justify-center rounded-full bg-surface-container text-on-surface-variant'

  return (
    <button
      className={`${cardClass} text-left`}
      onClick={onClick}
      type="button"
      aria-pressed={active}
    >
      <span className="mb-space-sm flex items-start justify-between">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}
        >
          <span className="material-symbols-outlined text-lg" aria-hidden="true">
            {icon}
          </span>
        </span>
        <span className={checkClass}>
          <span
            className={`material-symbols-outlined text-sm ${active ? '' : 'hidden'}`}
            aria-hidden="true"
          >
            check
          </span>
        </span>
      </span>
      <span>
        <span className="mb-1 block font-headline-sm text-headline-sm text-primary">
          {title}
        </span>
        <span className="mb-space-sm block font-body-sm text-body-sm text-on-surface-variant">
          {desc}
        </span>
      </span>
      <span
        className={`flex flex-col gap-1 rounded-lg p-2.5 pt-space-sm ${
          active ? 'bg-surface-container-lowest' : 'bg-surface-container-low'
        }`}
      >
        <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">
          Requirement Checklist
        </span>
        <span className="flex items-center gap-1.5 font-body-sm text-body-sm text-primary">
          <span className="material-symbols-outlined text-xs text-secondary" aria-hidden="true">
            verified
          </span>
          <span>{checklist}</span>
        </span>
      </span>
    </button>
  )
}
