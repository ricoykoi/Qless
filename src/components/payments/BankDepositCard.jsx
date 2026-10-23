import { BANK } from '../../data/payments'

export default function BankDepositCard({ onUpload }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center gap-2 mb-space-sm">
        <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-lg">account_balance</span>
        </div>
        <div>
          <h4 className="font-headline-sm text-headline-sm text-primary">
            Bank Deposit Guidelines
          </h4>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {BANK.name}
          </span>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-lg p-space-sm space-y-2 font-body-sm text-body-sm text-on-surface">
        <div className="flex justify-between items-center">
          <span className="text-on-surface-variant">Account Name:</span>
          <span className="font-semibold text-primary">{BANK.accountName}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-on-surface-variant">Account Number:</span>
          <span className="font-mono font-bold text-primary select-all">
            {BANK.accountNumber}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-on-surface-variant">Branch:</span>
          <span className="text-on-surface">{BANK.branch}</span>
        </div>
      </div>

      <div className="mt-space-md">
        <div className="font-label-md text-label-md text-primary mb-1">
          Important Deposit Protocol:
        </div>
        <ul className="space-y-1.5 text-on-surface-variant font-body-sm text-body-sm list-disc pl-4">
          <li>
            Always put your <strong>Student ID</strong> and{' '}
            <strong>Request # (e.g., QR-2026-00128)</strong> in the deposit
            slip remarks.
          </li>
          <li>Take a clear, uncropped photo or scan of the validated deposit slip.</li>
          <li>
            Upload the slip via the 'Upload Cashier Bank Deposit' button.
            Verification takes 24 hours.
          </li>
        </ul>
      </div>

      <button
        type="button"
        onClick={onUpload}
        className="mt-space-md w-full py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5"
      >
        <span className="material-symbols-outlined text-base">cloud_upload</span>
        <span>Submit Bank Deposit Slip</span>
      </button>
    </div>
  )
}
