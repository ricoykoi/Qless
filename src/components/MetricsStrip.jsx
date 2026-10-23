const metrics = [
  {
    value: '24,000+',
    label: 'Academic Requests Fulfilled',
    sub: 'Undergraduate, Graduate & Alumni',
  },
  {
    value: '98.4%',
    label: 'On-Time SLA Delivery',
    sub: 'Processed within designated timeline',
  },
  {
    value: 'Zero Queues',
    label: 'Campus Congestion Reduced',
    sub: '100% digital self-service workflow',
  },
]

export default function MetricsStrip() {
  return (
    <section className="w-full bg-primary-container px-4 py-6 text-on-primary shadow-inner sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-on-primary/15 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
        {metrics.map((m) => (
          <div key={m.label} className="px-3 py-5 md:py-1">
            <div className="mb-1 font-headline-xl text-headline-xl font-bold tracking-tight text-secondary-container">
              {m.value}
            </div>
            <div className="font-label-lg text-label-lg font-semibold tracking-wide text-on-primary">
              {m.label}
            </div>
            <div className="mt-1 font-body-sm text-body-sm text-on-primary-container">
              {m.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
