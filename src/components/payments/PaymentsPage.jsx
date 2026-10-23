import { useMemo, useState } from 'react'
import PaymentsHeader from './PaymentsHeader'
import PaymentStatsGrid from './PaymentStatsGrid'
import PendingAssessmentBanner from './PendingAssessmentBanner'
import TransactionsCard from './TransactionsCard'
import AssuranceNote from './AssuranceNote'
import CashierCard from './CashierCard'
import BankDepositCard from './BankDepositCard'
import HelpDeskCard from './HelpDeskCard'
import PaymentModal from './PaymentModal'
import UploadSlipModal from './UploadSlipModal'
import ReceiptModal from './ReceiptModal'
import { PENDING_ASSESSMENT, TRANSACTIONS } from '../../data/payments'

export default function PaymentsPage() {
  const [filter, setFilter] = useState('all')
  const [paymentModal, setPaymentModal] = useState(null)
  const [uploadModal, setUploadModal] = useState(null)
  const [receiptModal, setReceiptModal] = useState(null)

  const filteredTransactions = useMemo(() => {
    if (filter === 'all') return TRANSACTIONS
    return TRANSACTIONS.filter((t) => t.status === filter)
  }, [filter])

  const handlePayClick = (ref, amount, docName) => {
    setPaymentModal({ ref, amount, docName })
  }

  const handleUploadClick = (ref) => {
    setUploadModal({ ref })
  }

  const handleReceiptClick = (receipt) => {
    setReceiptModal(receipt)
  }

  const handlePayAuthorized = () => {
    setPaymentModal(null)
    alert(
      'Payment Authorized! Reference receipt #OR-90240 has been queued and sent to your university registered email.'
    )
  }

  const handleSlipSubmitted = () => {
    setUploadModal(null)
    alert(
      'Deposit slip successfully submitted to the Mabolo Campus Cashier verification ledger.'
    )
  }

  const scrollToOtc = () => {
    document
      .getElementById('otc-instructions')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col w-full pb-space-xl">
      <PaymentsHeader
        onScrollOtc={scrollToOtc}
        onPayOutstanding={() =>
          handlePayClick(
            PENDING_ASSESSMENT.ref,
            PENDING_ASSESSMENT.amount,
            PENDING_ASSESSMENT.docName
          )
        }
      />

      <PaymentStatsGrid />

      <PendingAssessmentBanner
        assessment={PENDING_ASSESSMENT}
        onPay={() =>
          handlePayClick(
            PENDING_ASSESSMENT.ref,
            PENDING_ASSESSMENT.amount,
            PENDING_ASSESSMENT.docName
          )
        }
        onUpload={() => handleUploadClick(PENDING_ASSESSMENT.ref)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <TransactionsCard
            transactions={filteredTransactions}
            filter={filter}
            onFilterChange={setFilter}
            onPayClick={handlePayClick}
            onReceiptClick={handleReceiptClick}
          />
          <AssuranceNote />
        </div>

        <div
          className="lg:col-span-4 flex flex-col gap-space-md"
          id="otc-instructions"
        >
          <CashierCard />
          <BankDepositCard
            onUpload={() => handleUploadClick(PENDING_ASSESSMENT.ref)}
          />
          <HelpDeskCard />
        </div>
      </div>

      {paymentModal && (
        <PaymentModal
          request={paymentModal}
          onClose={() => setPaymentModal(null)}
          onAuthorize={handlePayAuthorized}
        />
      )}

      {uploadModal && (
        <UploadSlipModal
          request={uploadModal}
          onClose={() => setUploadModal(null)}
          onSubmit={handleSlipSubmitted}
        />
      )}

      {receiptModal && (
        <ReceiptModal
          receipt={receiptModal}
          onClose={() => setReceiptModal(null)}
        />
      )}
    </div>
  )
}
