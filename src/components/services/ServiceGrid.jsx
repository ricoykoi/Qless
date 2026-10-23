import ServiceCard from './ServiceCard'

export default function ServiceGrid({ services, onOpen }) {
  return (
    <section
      aria-label="Available document services"
      className="grid grid-cols-1 gap-space-md md:grid-cols-2 xl:grid-cols-3"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onOpen={onOpen}
        />
      ))}
    </section>
  )
}
