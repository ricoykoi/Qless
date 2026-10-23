export default function ProfileSummaryBanner({
  profile,
  editing,
  onEditToggle,
  onSave,
}) {
  return (
    <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm mb-space-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-sm bg-surface-container shrink-0">
          <img
            alt={profile.fullName}
            className="w-full h-full object-cover"
            src={profile.avatar}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h2 className="font-headline-md text-headline-md text-primary">
              {profile.fullName}
            </h2>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-label-sm font-label-sm">
              <span
                className="material-symbols-outlined text-xs"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              {profile.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-on-surface-variant font-body-sm text-body-sm">
            <span className="font-medium text-primary">ID: {profile.studentId}</span>
            <span>•</span>
            <span>{profile.program}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {editing && (
          <button
            type="button"
            onClick={onSave}
            className="inline-flex items-center gap-2 px-space-md py-2 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md shadow-sm hover:brightness-105 transition-all"
          >
            <span className="material-symbols-outlined text-base">save</span>
            <span>Save Changes</span>
          </button>
        )}
        <button
          type="button"
          onClick={onEditToggle}
          className="inline-flex items-center gap-2 px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-container transition-all"
        >
          <span className="material-symbols-outlined text-base">
            {editing ? 'close' : 'edit'}
          </span>
          <span>{editing ? 'Cancel Editing' : 'Edit Profile'}</span>
        </button>
      </div>
    </div>
  )
}
