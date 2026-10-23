import { STATS } from '../../data/dashboard'
import StatCard from './StatCard'

export default function StatGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  )
}
