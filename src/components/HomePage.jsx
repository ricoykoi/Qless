import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import HelpSection from './HelpSection'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import MetricsStrip from './MetricsStrip'
import Services from './Services'
import TrackingModal from './TrackingModal'

export default function HomePage() {
  const [trackingOpen, setTrackingOpen] = useState(false)

  return (
    <>
      <Header />
      <main>
        <Hero onTrackRequest={() => setTrackingOpen(true)} />
        <MetricsStrip />
        <Services />
        <HowItWorks />
        <HelpSection />
      </main>
      <Footer />
      <TrackingModal
        open={trackingOpen}
        onClose={() => setTrackingOpen(false)}
      />
    </>
  )
}
