export default function AssuranceNote() {
  return (
    <div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
          <span className="material-symbols-outlined text-xl">security</span>
        </div>
        <div>
          <div className="font-label-md text-label-md text-primary">
            University Electronic Assessment Assurance
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            All payments generate a Bureau of Internal Revenue (BIR) compliant
            digital receipt authorized by USPF Accounting.
          </div>
        </div>
      </div>
      <a
        href="#audit-policy"
        className="font-label-md text-label-md text-secondary hover:underline flex-shrink-0"
      >
        Audit Policy →
      </a>
    </div>
  )
}
