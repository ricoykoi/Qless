import { useMemo, useState } from 'react'
import BreadcrumbBar from './BreadcrumbBar'
import ServiceTitleHeader from './ServiceTitleHeader'
import MetadataStrip from './MetadataStrip'
import RequirementsChecklist from './RequirementsChecklist'
import ContactCard from './ContactCard'
import RequestSummaryCard from './RequestSummaryCard'
import { SERVICE_DETAIL } from '../../data/serviceDetail'

export default function ServiceDetailPage() {
  const base = SERVICE_DETAIL
  const [copies, setCopies] = useState(1)
  const [deliveryId, setDeliveryId] = useState(
    base.deliveryOptions.find((d) => d.default)?.id ?? base.deliveryOptions[0].id
  )

  const delivery = base.deliveryOptions.find((d) => d.id === deliveryId)

  const totals = useMemo(() => {
    const baseTotal = copies * base.basePrice
    const deliveryFee = delivery?.fee ?? 0
    return {
      baseTotal,
      deliveryFee,
      grandTotal: baseTotal + deliveryFee,
    }
  }, [copies, delivery, base.basePrice])

  const inc = () => setCopies((c) => Math.min(c + 1, base.maxCopies))
  const dec = () => setCopies((c) => Math.max(c - 1, 1))

  const handleSubmit = () => {
    // TODO: navigate('/requests/new', { state: { serviceCode: base.code, copies, deliveryId } })
    alert(`Requesting ${copies} copy(ies) of ${base.title} via ${delivery?.label}. Total ₱${totals.grandTotal.toFixed(2)}`)
  }

  return (
    <div className="flex w-full flex-col gap-space-lg pb-space-xl">
      <BreadcrumbBar
        category={base.categoryLabel}
        title={base.title}
      />

      <ServiceTitleHeader service={base} />

      <MetadataStrip metadata={base.metadata} />

      <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12">
        {/* Main column */}
        <div className="flex flex-col gap-space-lg lg:col-span-8">
          <RequirementsChecklist requirements={base.requirements} />
          <ContactCard contact={base.contact} />
        </div>

        {/* Sidebar */}
        <div className="sticky top-20 flex flex-col gap-space-md lg:col-span-4">
          <RequestSummaryCard
            basePrice={base.basePrice}
            copies={copies}
            onInc={inc}
            onDec={dec}
            maxCopies={base.maxCopies}
            deliveryOptions={base.deliveryOptions}
            deliveryId={deliveryId}
            onDeliveryChange={setDeliveryId}
            totals={totals}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}
