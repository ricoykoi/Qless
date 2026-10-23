export default function ProfileHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
      <div className="flex flex-col">
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          My Profile
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
          Manage your student credentials and account preferences.
        </p>
      </div>
    </div>
  )
}
