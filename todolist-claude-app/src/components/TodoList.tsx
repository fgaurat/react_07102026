import type { Todo } from '../api'
import { TodoItem } from './TodoItem'

interface Props {
  todos: Todo[]
  loading: boolean
  onToggle: (todo: Todo) => void
  onDelete: (id: Todo['id']) => void
}

export function TodoList({ todos, loading, onToggle, onDelete }: Props) {
  if (loading) return <p className="empty">Chargement…</p>
  if (todos.length === 0) return <p className="empty">Aucune tâche.</p>

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
