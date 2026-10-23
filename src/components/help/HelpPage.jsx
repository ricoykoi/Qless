import { useMemo, useState } from 'react'
import HelpHero from './HelpHero'
import CategoryCards from './CategoryCards'
import FaqSection from './FaqSection'
import PolicyNotice from './PolicyNotice'
import SupportOffices from './SupportOffices'
import TicketForm from './TicketForm'
import { FAQS } from '../../data/help'

export default function HelpPage() {
  const [search, setSearch] = useState('')
  const [openFaqIds, setOpenFaqIds] = useState(new Set(['f1']))
  const [prefillCategory, setPrefillCategory] = useState(null)

  const filteredFaqs = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return FAQS
    return FAQS.filter((faq) => {
      const text =
        `${faq.question} ${typeof faq.answer === 'string' ? faq.answer : ''}`.toLowerCase()
      return text.includes(q)
    })
  }, [search])

  const allExpanded =
    filteredFaqs.length > 0 && filteredFaqs.every((f) => openFaqIds.has(f.id))

  const toggleFaq = (id) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleExpandAll = () => {
    if (allExpanded) {
      setOpenFaqIds(new Set())
    } else {
      setOpenFaqIds(new Set(filteredFaqs.map((f) => f.id)))
    }
  }

  const handleCategoryClick = (category) => {
    setPrefillCategory(category.ticketCategory)
    document
      .getElementById('ticket-form')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="flex flex-col w-full pb-space-xl">
      <HelpHero
        search={search}
        onSearchChange={(v) => setSearch(v)}
        onClear={() => setSearch('')}
      />

      <CategoryCards onSelect={handleCategoryClick} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <section className="lg:col-span-7 flex flex-col gap-space-md">
          <FaqSection
            faqs={filteredFaqs}
            openFaqIds={openFaqIds}
            onToggle={toggleFaq}
            onToggleAll={toggleExpandAll}
            allExpanded={allExpanded}
            searchQuery={search}
          />
          <PolicyNotice />
        </section>

        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <SupportOffices />
          <TicketForm
            key={prefillCategory ?? 'default'}
            prefillCategory={prefillCategory}
          />
        </div>
      </div>
    </div>
  )
}
