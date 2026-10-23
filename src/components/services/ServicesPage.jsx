import { useMemo, useState } from 'react'
import ServiceHeader from './ServiceHeader'
import ServiceControls from './ServiceControls'
import ServiceGrid from './ServiceGrid'
import EmptyState from './EmptyState'
import ServiceModal from './ServiceModal'
import InquiryModal from './InquiryModal'
import Toast from './Toast'
import TrustMosaic from './TrustMosaic'
import InfoBanner from './InfoBanner'
import { SERVICES } from '../../data/services'

export default function ServicesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('requested')

  const [serviceModal, setServiceModal] = useState(null)
  const [inquiryOpen, setInquiryOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    let list = SERVICES.filter((s) => {
      const matchesCategory = category === 'all' || s.category === category
      const matchesSearch =
        !q || s.searchTokens.includes(q) || s.name.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
    if (sortBy === 'requested') {
      list = [...list].sort((a, b) => a.popularity - b.popularity)
    }
    if (sortBy === 'sla') {
      list = [...list].sort((a, b) => a.processingDays - b.processingDays)
    }
    if (sortBy === 'fee') {
      list = [...list].sort((a, b) => a.feeValue - b.feeValue)
    }
    return list
  }, [search, category, sortBy])

  const resetFilters = () => {
    setSearch('')
    setCategory('all')
    setSortBy('requested')
  }

  const showToast = (message) => {
    setToast({ message })
    setTimeout(() => setToast(null), 4000)
  }

  const proceedToApplication = () => {
    const name = serviceModal?.name
    setServiceModal(null)
    showToast(`Initiating request wizard for: ${name}`)
    // TODO: navigate('/requests/new', { state: { service: serviceModal } })
  }

  const submitInquiry = () => {
    setInquiryOpen(false)
    showToast('Support ticket logged successfully! Ticket #REG-2026-8812')
  }

  return (
    <div className="relative w-full pb-space-xl">
      <div className="pointer-events-none absolute -right-8 -top-10 -z-10 h-96 w-96 rounded-full bg-primary-fixed/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-12 top-72 -z-10 h-80 w-80 rounded-full bg-secondary-container/20 blur-3xl" />

      <ServiceHeader />

      <ServiceControls
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onReset={resetFilters}
      />

      {filtered.length > 0 ? (
        <ServiceGrid services={filtered} onOpen={setServiceModal} />
      ) : (
        <EmptyState onReset={resetFilters} />
      )}

      <TrustMosaic />
      <InfoBanner onInquiry={() => setInquiryOpen(true)} />

      {serviceModal && (
        <ServiceModal
          service={serviceModal}
          onClose={() => setServiceModal(null)}
          onProceed={proceedToApplication}
        />
      )}

      {inquiryOpen && (
        <InquiryModal
          onClose={() => setInquiryOpen(false)}
          onSubmit={submitInquiry}
        />
      )}

      {toast && <Toast message={toast.message} />}
    </div>
  )
}
