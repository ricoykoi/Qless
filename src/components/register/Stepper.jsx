import { STEP_TITLES } from '../../data/registration'

export default function Stepper({ currentStep, onStepClick }) {
  return (
    <div className="mb-space-lg w-full rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
      <div className="relative flex items-center justify-between">
        {[1, 2, 3, 4].map((step, idx) => (
          <div key={step} className="contents">
            <StepBadge
              step={step}
              currentStep={currentStep}
              onClick={() => onStepClick(step)}
            />
            {idx < 3 && (
              <div className="relative mx-space-xs h-0.5 flex-1 bg-surface-container-high">
                <div
                  className="absolute left-0 top-0 h-full bg-primary-container transition-all duration-300"
                  style={{
                    width: currentStep > step ? '100%' : '0%',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function StepBadge({ step, currentStep, onClick }) {
  const isActive = step === currentStep
  const isDone = step < currentStep

  const badgeClass = isActive
    ? 'flex h-9 w-9 items-center justify-center rounded-full bg-primary-container font-headline-sm text-headline-sm text-on-primary shadow-sm transition-all duration-300'
    : isDone
      ? 'flex h-9 w-9 items-center justify-center rounded-full bg-secondary font-headline-sm text-headline-sm text-on-secondary shadow-sm transition-all duration-300'
      : 'flex h-9 w-9 items-center justify-center rounded-full bg-surface-container font-headline-sm text-headline-sm text-on-surface-variant transition-all duration-300'

  const labelClass = isActive
    ? 'font-label-md text-label-md font-semibold text-primary'
    : 'font-label-md text-label-md font-semibold text-on-surface-variant'

  return (
    <button
      className="z-10 flex cursor-pointer items-center gap-space-xs text-left"
      onClick={onClick}
      type="button"
      aria-current={isActive ? 'step' : undefined}
      aria-label={`Go to step ${step}: ${STEP_TITLES[step]}`}
    >
      <span className={badgeClass}>
        {isDone ? (
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            check
          </span>
        ) : (
          step
        )}
      </span>
      <span className="flex flex-col">
        <span className={labelClass}>Step {step}</span>
        <span className="hidden font-label-sm text-label-sm text-on-surface-variant sm:inline">
          {STEP_TITLES[step]}
        </span>
      </span>
    </button>
  )
}
