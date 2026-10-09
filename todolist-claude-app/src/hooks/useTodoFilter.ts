import { useMemo, useState } from 'react'
import type { Todo } from '../api'

export type Filter = 'all' | 'active' | 'done'

export function useTodoFilter(todos: Todo[]) {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(
    () =>
      todos.filter((t) =>
        filter === 'all' ? true : filter === 'done' ? t.completed : !t.completed,
      ),
    [todos, filter],
  )

  return { filter, setFilter, visible }
}
