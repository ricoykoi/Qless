import { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileSummaryBanner from './ProfileSummaryBanner'
import BasicInfoCard from './BasicInfoCard'
import AccountSecurityCard from './AccountSecurityCard'
import VerifiedDocumentsCard from './VerifiedDocumentsCard'
import {
  ACCOUNT_SECURITY,
  BASIC_INFO_FIELDS,
  PROFILE,
  VERIFIED_DOCUMENTS,
} from '../../data/profile'

export default function ProfilePage() {
  const [editing, setEditing] = useState(false)
  const [fields, setFields] = useState(BASIC_INFO_FIELDS)
  const [draft, setDraft] = useState(() =>
    Object.fromEntries(BASIC_INFO_FIELDS.map((f) => [f.key, f.value]))
  )
  const [twoFactor, setTwoFactor] = useState(ACCOUNT_SECURITY.twoFactor.enabled)

  const handleEditToggle = () => {
    if (editing) {
      setDraft(Object.fromEntries(fields.map((f) => [f.key, f.value])))
    }
    setEditing((v) => !v)
  }

  const handleFieldChange = (key, value) => {
    setDraft((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    setFields((prev) =>
      prev.map((f) => ({ ...f, value: draft[f.key] ?? f.value }))
    )
    setEditing(false)
    alert('Personal contact details updated successfully.')
  }

  const handleTwoFactorToggle = () => {
    setTwoFactor((v) => {
      alert(`Two-Factor Authentication is now ${!v ? 'enabled' : 'disabled'}.`)
      return !v
    })
  }

  return (
    <div className="flex flex-col w-full pb-space-xl">
      <ProfileHeader />

      <ProfileSummaryBanner
        profile={PROFILE}
        editing={editing}
        onEditToggle={handleEditToggle}
        onSave={handleSave}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <BasicInfoCard
            fields={fields}
            draft={draft}
            editing={editing}
            onChange={handleFieldChange}
          />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <AccountSecurityCard
            security={ACCOUNT_SECURITY}
            twoFactor={twoFactor}
            onToggleTwoFactor={handleTwoFactorToggle}
          />
          <VerifiedDocumentsCard documents={VERIFIED_DOCUMENTS} />
        </div>
      </div>
    </div>
  )
}
