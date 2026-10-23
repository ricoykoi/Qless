export default function PolicyCard() {
  return (
    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
      <div className="flex items-center gap-2 mb-2 text-primary">
        <span className="material-symbols-outlined text-base">verified_user</span>
        <h3 className="font-label-md text-label-md font-semibold">
          Registrar Notification Policy
        </h3>
      </div>
      <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mb-3">
        Official USPF Registrar notices reflect instant changes from counter
        evaluators. Urgent action requirements expire after 5 working days.
      </p>
      <a
        href="#advisory-guidelines"
        className="inline-flex items-center gap-1 font-label-sm text-[11px] text-primary font-semibold hover:underline"
      >
        <span>Read Academic Advisory Guidelines</span>
        <span className="material-symbols-outlined text-xs">arrow_forward</span>
      </a>
    </div>
  )
}
