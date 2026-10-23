import { useState } from 'react'
import RegisterHeader from './RegisterHeader'
import Stepper from './Stepper'
import Step1Affiliation from './Step1Affiliation'
import Step2PersonalData from './Step2PersonalData'
import Step3Verification from './Step3Verification'
import Step4Security from './Step4Security'
import NavFooter from './NavFooter'
import SidebarSummary from './SidebarSummary'

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [affiliation, setAffiliation] = useState('student')
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    idNumber: '',
    college: '',
    mobile: '+63 ',
    dob: '',
    password: '',
    confirmPassword: '',
    consent: false,
    uspfIdFile: null,
    govIdFile: null,
  })

  const update = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const goToStep = (step) => setCurrentStep(step)

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((s) => s + 1)
    } else {
      window.location.assign('/dashboard')
    }
  }

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1)
  }

  return (
    <main className="flex w-full flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-space-xl sm:px-6 lg:px-8">
        <RegisterHeader />
        <Stepper currentStep={currentStep} onStepClick={goToStep} />

        <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12">
          <div className="flex flex-col gap-space-md lg:col-span-8">
            {currentStep === 1 && (
              <Step1Affiliation
                affiliation={affiliation}
                onSelect={setAffiliation}
              />
            )}
            {currentStep === 2 && (
              <Step2PersonalData data={formData} onChange={update} />
            )}
            {currentStep === 3 && (
              <Step3Verification data={formData} onChange={update} />
            )}
            {currentStep === 4 && (
              <Step4Security data={formData} onChange={update} />
            )}

            <NavFooter
              currentStep={currentStep}
              onBack={previousStep}
              onNext={nextStep}
            />
          </div>

          <SidebarSummary />
        </div>
      </div>
    </main>
  )
}
