export default function HelpDeskCard() {
  return (
    <div className="bg-primary-container rounded-xl p-space-md shadow-sm">
      <div className="flex items-center gap-2 mb-space-sm">
        <div className="w-8 h-8 rounded-lg bg-on-primary/10 flex items-center justify-center text-secondary-container">
          <span className="material-symbols-outlined text-lg">support_agent</span>
        </div>
        <span className="font-headline-sm text-headline-sm text-on-primary">
          Accounting Desk Help
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-primary-container">
        Experiencing payment gateway timeouts or duplicate charges? Our bursar
        helpdesk resolves issues within 1 business day.
      </p>
      <div className="mt-space-md pt-space-sm flex flex-wrap items-center justify-between gap-2 border-t border-on-primary/15 font-label-sm text-label-sm">
        <span className="text-on-primary-container">cashier@uspf.edu.ph</span>
        <span className="text-secondary-container font-semibold">
          (032) 414-7777 loc 104
        </span>
      </div>
    </div>
  )
}
