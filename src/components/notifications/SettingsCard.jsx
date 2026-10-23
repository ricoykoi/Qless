import { MOBILE_NUMBER, SETTINGS_META } from '../../data/notifications'

export default function SettingsCard({ settings, onChange }) {
  return (
    <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-container">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">tune</span>
          <h2 className="font-label-md text-label-md font-semibold text-primary">
            Notification Settings
          </h2>
        </div>
        <span className="text-[11px] text-on-surface-variant font-medium">
          Quick Setup
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {SETTINGS_META.map((s) => (
          <div key={s.key} className="flex items-center justify-between gap-3">
            <div className="flex flex-col min-w-0">
              <span className="font-body-sm text-body-sm font-semibold text-primary">
                {s.title}
              </span>
              <span className="text-[11px] text-on-surface-variant">
                {s.desc}
              </span>
            </div>
            <input
              type="checkbox"
              checked={settings[s.key]}
              onChange={() => onChange(s.key)}
              className="w-4 h-4 rounded text-primary-container focus:ring-primary-container cursor-pointer shrink-0"
            />
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-surface-container flex items-center justify-between">
        <span className="text-[11px] text-on-surface-variant">
          Active mobile: {MOBILE_NUMBER}
        </span>
        <a
          href="#edit-mobile"
          className="font-label-sm text-[11px] text-primary font-semibold hover:underline"
        >
          Edit
        </a>
      </div>
    </div>
  )
}
