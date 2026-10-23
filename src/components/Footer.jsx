import { LOGO_URL } from '../data/services'

export default function Footer() {
  const quickServices = [
    { label: 'Transcript of Records (TOR)', href: '#services' },
    { label: 'Certificate of Enrollment', href: '#services' },
    { label: 'Diploma Second Copy', href: '#services' },
    { label: 'Good Moral Certificate', href: '#services' },
    { label: 'Course Descriptions & Syllabus', href: '#services' },
  ]

  const supportLinks = [
    { label: 'Track Existing Request', href: '#track' },
    { label: 'Clearance Guidelines', href: '#help' },
    { label: 'Payment Methods & Banks', href: '#help' },
    { label: 'Authorized Representative Claim', href: '#help' },
    { label: 'Help Center & Inquiries', href: '#help' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Data Privacy Compliance', href: '#' },
  ]

  return (
    <footer className="w-full bg-primary px-4 pb-8 pt-12 text-on-primary sm:px-6 sm:pt-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:mb-12 lg:grid-cols-5 lg:gap-8">
          {/* University Identity */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                alt="USPF QLess Emblem"
                className="w-10 h-10 rounded-full object-contain bg-surface-container-lowest p-0.5"
                src={LOGO_URL}
              />
              <div>
                <div className="font-headline-sm text-headline-sm font-bold text-on-primary">
                  University of Southern Philippines Foundation
                </div>
                <div className="font-label-sm text-label-sm text-secondary-container">
                  QLess Institutional Service Suite
                </div>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container max-w-sm">
              Empowering students, faculty, and alumni through responsive,
              digital-first academic credential fulfillment with verified
              administrative integrity.
            </p>
            <div className="font-body-sm text-body-sm text-on-primary-container">
              <div className="mb-2 flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-secondary-container">
                  location_on
                </span>
                <span>
                  Salinas Drive, Lahug / Mabolo Campus, Cebu City, Philippines 6000
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-secondary-container">
                  schedule
                </span>
                <span>
                  Office Hours: Monday – Friday, 8:00 AM – 5:00 PM PHT
                </span>
              </div>
            </div>
          </div>

          {/* Academic Services */}
          <div>
            <h4 className="mb-4 font-label-lg text-label-lg font-bold uppercase tracking-wider text-secondary-container">
              Quick Services
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-on-primary-container">
              {quickServices.map((item) => (
                <li key={item.label}>
                  <a
                    className="hover:text-on-primary transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Support */}
          <div>
            <h4 className="mb-4 font-label-lg text-label-lg font-bold uppercase tracking-wider text-secondary-container">
              Registrar Support
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-on-primary-container">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="hover:text-on-primary transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hotlines */}
          <div>
            <h4 className="mb-4 font-label-lg text-label-lg font-bold uppercase tracking-wider text-secondary-container">
              Contact Channels
            </h4>
            <div className="space-y-2.5 font-body-sm text-body-sm text-on-primary-container">
              <div>
                <span className="block text-xs uppercase tracking-wider text-on-primary-container/70">
                  Registrar Trunkline
                </span>
                <span className="text-on-primary font-semibold">
                  (032) 414-8773 loc. 104
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-on-primary-container/70">
                  Official Email
                </span>
                <span className="text-on-primary">registrar@uspf.edu.ph</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-on-primary-container/70">
                  Student Affairs
                </span>
                <span className="text-on-primary">osas@uspf.edu.ph</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Baseline */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-on-primary/15 pt-6 text-center font-body-sm text-body-sm text-on-primary-container sm:flex-row sm:text-left">
          <div className="max-w-xl">
            © 2026 University of Southern Philippines Foundation (USPF). All
            rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <a
                key={item.label}
                className="hover:text-on-primary transition-colors"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
