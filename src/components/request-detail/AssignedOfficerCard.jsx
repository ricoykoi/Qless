export default function AssignedOfficerCard({ officer }) {
  return (
    <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center gap-space-xs pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-space-sm rounded-t-xl">
        <span className="material-symbols-outlined text-primary-container">
          support_agent
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary">
          Assigned Officer
        </h3>
      </div>

      <div className="flex items-center gap-space-md">
        <img
          src={officer.avatar}
          alt={officer.name}
          className="w-14 h-14 rounded-full object-cover bg-surface-container"
        />
        <div className="min-w-0">
          <h4 className="font-label-lg text-label-lg text-primary font-semibold">
            {officer.name}
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {officer.role}
          </p>
        </div>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface">
        {officer.division}
      </p>

      <div className="flex flex-col gap-space-sm">
        <a
          href={`mailto:${officer.email}`}
          className="flex items-center gap-space-sm font-body-sm text-body-sm text-primary hover:text-primary-container break-all"
        >
          <span className="material-symbols-outlined text-base">mail</span>
          {officer.email}
        </a>
        <div className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface">
          <span className="material-symbols-outlined text-base text-on-surface-variant">
            call
          </span>
          <span>
            <span className="text-on-surface-variant">{officer.phoneLabel}: </span>
            {officer.phone}
          </span>
        </div>
      </div>

      <div className="mt-space-xs p-space-sm rounded-lg bg-surface-container-high/60 flex items-center gap-space-sm text-on-surface-variant">
        <span className="material-symbols-outlined text-sm text-primary shrink-0">
          info
        </span>
        <p className="font-body-sm text-body-sm">{officer.note}</p>
      </div>
    </div>
  )
}
