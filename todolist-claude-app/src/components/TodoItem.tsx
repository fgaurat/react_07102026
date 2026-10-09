import type { Todo } from '../api'

interface Props {
  todo: Todo
  onToggle: (todo: Todo) => void
  onDelete: (id: Todo['id']) => void
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={todo.completed ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        <span>{todo.title}</span>
      </label>
      <button
        className="delete"
        onClick={() => onDelete(todo.id)}
        aria-label={`Supprimer ${todo.title}`}
      >
        ✕
      </button>
    </li>
  )
}
