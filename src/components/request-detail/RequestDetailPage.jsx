import BreadcrumbHeader from './BreadcrumbHeader'
import UrgentActionBanner from './UrgentActionBanner'
import PipelineStepper from './PipelineStepper'
import RequestSpecCard from './RequestSpecCard'
import DocumentsCard from './DocumentsCard'
import ClaimingCard from './ClaimingCard'
import ClaimTokenCard from './ClaimTokenCard'
import AssignedOfficerCard from './AssignedOfficerCard'
import { REQUEST } from '../../data/requestDetail'

export default function RequestDetailPage() {
  const handlePrint = () => window.print()

  const handleContact = () => {
    // TODO: open a chat panel or mailto
    window.location.href = `mailto:${REQUEST.officer.email}`
  }

  const handleUploadRequirement = () => {
    document
      .getElementById('id-back-upload')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleFileSelect = (file) => {
    if (!file) return
    alert(`Uploaded: ${file.name}`)
    // TODO: upload to backend
  }

  return (
    <div className="flex flex-col w-full pb-space-xl">
      <BreadcrumbHeader
        requestId={REQUEST.id}
        statusLabel={REQUEST.statusLabel}
        subtitle={REQUEST.subtitle}
        onPrint={handlePrint}
        onContact={handleContact}
      />

      <UrgentActionBanner onUpload={handleUploadRequirement} />

      <PipelineStepper
        steps={REQUEST.steps}
        referenceId={REQUEST.id}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <RequestSpecCard
            specification={REQUEST.specification}
            fee={REQUEST.fee}
          />
          <DocumentsCard
            documents={REQUEST.documents}
            missingDocument={REQUEST.missingDocument}
            onUpload={handleFileSelect}
          />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <ClaimingCard claiming={REQUEST.claiming} />
          <ClaimTokenCard requestId={REQUEST.id} />
          <AssignedOfficerCard officer={REQUEST.officer} />
        </div>
      </div>
    </div>
  )
}
