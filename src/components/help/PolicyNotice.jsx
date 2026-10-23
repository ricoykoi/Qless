export default function PolicyNotice() {
  return (
    <div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-md mt-space-sm">
      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-on-secondary-container">
        <span className="material-symbols-outlined text-base">info</span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="font-label-md text-label-md text-on-surface">
          Data Privacy &amp; Record Verification Notice
        </span>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          All requests adhere to RA 10173 (Data Privacy Act of 2012). Official
          student records will only be issued upon complete academic and
          institutional financial clearance.
        </p>
      </div>
    </div>
  )
}
