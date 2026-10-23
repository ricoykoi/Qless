import { STEP_LABELS } from '../../data/registration'

export default function NavFooter({ currentStep, onBack, onNext }) {
  return (
    <div className="mt-space-xs flex items-center justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
      <button
        type="button"
        onClick={onBack}
        className={`flex items-center gap-2 rounded-lg bg-surface-container px-space-md py-2.5 font-label-md text-label-md text-primary shadow-sm transition-colors hover:bg-surface-container-high ${
          currentStep === 1 ? 'invisible' : ''
        }`}
      >
        <span className="material-symbols-outlined text-sm" aria-hidden="true">
          arrow_back
        </span>
        <span>Back</span>
      </button>
      <button
        type="button"
        onClick={onNext}
        className="ml-auto flex items-center gap-2 rounded-lg bg-primary px-space-lg py-2.5 font-label-md text-label-md text-on-primary shadow-md transition-all duration-200 hover:bg-tertiary"
      >
        <span>{STEP_LABELS[currentStep]}</span>
        <span className="material-symbols-outlined text-sm" aria-hidden="true">
          arrow_forward
        </span>
      </button>
    </div>
  )
}
