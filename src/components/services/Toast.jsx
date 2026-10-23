export default function Toast({ message }) {
  return (
    <div
      aria-live="polite"
      role="status"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-xl transition-all"
    >
      <span className="material-symbols-outlined text-secondary-container" aria-hidden="true">
        check_circle
      </span>
      <span>{message}</span>
    </div>
  )
}
