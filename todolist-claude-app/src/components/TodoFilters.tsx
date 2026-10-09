import type { Filter } from '../hooks/useTodoFilter'

const LABELS: Record<Filter, string> = {
  all: 'Toutes',
  active: 'À faire',
  done: 'Terminées',
}

interface Props {
  filter: Filter
  onChange: (filter: Filter) => void
}

export function TodoFilters({ filter, onChange }: Props) {
  return (
    <nav className="filters">
      {(Object.keys(LABELS) as Filter[]).map((f) => (
        <button
          key={f}
          className={filter === f ? 'active' : ''}
          onClick={() => onChange(f)}
        >
          {LABELS[f]}
        </button>
      ))}
    </nav>
  )
}
