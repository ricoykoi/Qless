import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RequestsHeader from './RequestsHeader'
import RequestStatsGrid from './RequestStatsGrid'
import RequestFilters from './RequestFilters'
import RequestsTable from './RequestsTable'
import RequestsPagination from './RequestsPagination'
import ArchiveNoticeCard from './ArchiveNoticeCard'
import RequestFooterNotice from './RequestFooterNotice'
import { REQUESTS, PAGE_SIZE } from '../../data/requests'

export default function RequestsPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [semester, setSemester] = useState('All Semesters / 2026')
  const [method, setMethod] = useState('All Methods')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return REQUESTS.filter((r) => {
      if (activeFilter !== 'all' && r.statusId !== activeFilter) return false
      if (!q) return true
      return (
        r.id.toLowerCase().includes(q) ||
        r.service.toLowerCase().includes(q)
      )
    })
  }, [search, activeFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const handleRefresh = () => {
    // TODO: refetch
    alert('Feed refreshed')
  }

  const handleCreate = () => {
    // TODO: navigate('/services')
    alert('Create new request — hook up route here')
  }

  const handleCopy = async (ref) => {
    try {
      await navigator.clipboard.writeText(ref)
      // toast optional
    } catch {
      alert(`Reference: ${ref}`)
    }
  }

  const handleAction = (row) => {
    navigate(`/requests/${row.id}`)
  }

  const handleUploadMissing = (row) => {
    // TODO: open upload modal or navigate
    alert(`Upload missing document for ${row.id}`)
  }

  return (
    <div className="flex w-full flex-col gap-space-lg pb-space-xl">
      <RequestsHeader
        onRefresh={handleRefresh}
        onCreateNew={handleCreate}
      />

      <RequestStatsGrid />

      <RequestFilters
        search={search}
        onSearchChange={(v) => {
          setSearch(v)
          setPage(1)
        }}
        activeFilter={activeFilter}
        onFilterChange={(id) => {
          setActiveFilter(id)
          setPage(1)
        }}
        semester={semester}
        onSemesterChange={setSemester}
        method={method}
        onMethodChange={setMethod}
      />

      <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
        <RequestsTable
          rows={paged}
          onCopy={handleCopy}
          onAction={handleAction}
          onUploadMissing={handleUploadMissing}
        />

        <RequestsPagination
          page={safePage}
          totalPages={totalPages}
          total={filtered.length}
          start={(safePage - 1) * PAGE_SIZE + 1}
          end={Math.min(safePage * PAGE_SIZE, filtered.length)}
          onPageChange={setPage}
        />
      </div>

      <ArchiveNoticeCard />
      <RequestFooterNotice />
    </div>
  )
}
