import { CASHIER_IMAGE } from '../../data/payments'

export default function CashierCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-lg">storefront</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary">
              On-Campus Cashier
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Mabolo Main Campus
            </span>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface">
          Window 1 • 2 • 3
        </span>
      </div>

      <div className="mt-space-md space-y-2.5 font-body-sm text-body-sm text-on-surface">
        <div className="flex items-start gap-2.5">
          <span className="material-symbols-outlined text-base text-secondary flex-shrink-0 mt-0.5">
            location_on
          </span>
          <span>
            Ground Floor, Administration Building (Salinas Drive,
            Lahug/Mabolo, Cebu City)
          </span>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="material-symbols-outlined text-base text-secondary flex-shrink-0 mt-0.5">
            schedule
          </span>
          <div>
            <span className="font-semibold text-primary">Operating Hours:</span>
            <p className="text-on-surface-variant">
              Monday – Friday: 8:00 AM – 4:30 PM (No Noon Break)
            </p>
            <p className="text-on-surface-variant">
              Saturday: 8:00 AM – 12:00 NN
            </p>
          </div>
        </div>
      </div>

      <div className="mt-space-md rounded-lg overflow-hidden relative">
        <img
          className="w-full h-32 object-cover"
          alt="USPF Mabolo administration building"
          src={CASHIER_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-2.5">
          <span className="text-on-primary font-label-sm text-label-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">pin_drop</span>
            USPF Mabolo Central Cashier Hub
          </span>
        </div>
      </div>
    </div>
  )
}
