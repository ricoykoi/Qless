import { useState } from 'react'

export default function UploadSlipModal({ request, onClose, onSubmit }) {
  const [terminal, setTerminal] = useState('')
  const [file, setFile] = useState(null)

  const handleSubmit = () => {
    if (!file) {
      alert('Please select a receipt image first.')
      return
    }
    onSubmit?.({ ref: request.ref, terminal, file })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex items-center gap-space-sm mb-space-md">
          <div className="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">upload_file</span>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md text-primary">
              Upload Bank / OTC Slip
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              For verification by Mabolo Campus Cashier
            </p>
          </div>
        </div>

        <div className="space-y-space-md mb-space-lg">
          <div>
            <label className="block font-label-md text-label-md text-primary mb-1">
              Target Assessment
            </label>
            <input
              type="text"
              readOnly
              value={request.ref}
              className="w-full px-3 py-2 bg-surface-container-low rounded-lg font-mono text-sm text-on-surface"
            />
          </div>
          <div>
            <label className="block font-label-md text-label-md text-primary mb-1">
              Branch / Terminal Number
            </label>
            <input
              type="text"
              value={terminal}
              onChange={(e) => setTerminal(e.target.value)}
              placeholder="e.g., LBP Lahug Cebu Branch / Window 2"
              className="w-full px-3 py-2 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block font-label-md text-label-md text-primary mb-1">
              Receipt Photo or PDF
            </label>
            <label className="border-2 border-dashed border-surface-container-high rounded-xl p-space-md text-center bg-surface-container-low/50 hover:bg-surface-container-low transition-colors cursor-pointer flex flex-col items-center">
              <span className="material-symbols-outlined text-3xl text-on-surface-variant mb-1">
                cloud_upload
              </span>
              <div className="font-label-md text-label-md text-primary">
                {file ? file.name : 'Click to select receipt image'}
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                PNG, JPG, or PDF up to 10MB
              </div>
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
            </label>
          </div>
        </div>

        <div className="flex items-center justify-end gap-space-sm">
          <button
            type="button"
            onClick={onClose}
            className="px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-space-lg py-2.5 rounded-lg bg-primary text-on-primary hover:bg-tertiary-container font-label-lg text-label-lg transition-colors shadow-sm"
          >
            Submit for Cashier Audit
          </button>
        </div>
      </div>
    </div>
  )
}
