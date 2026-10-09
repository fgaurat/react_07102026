import { useCallback, useEffect, useState } from 'react'
import { createTodo, deleteTodo, getTodos, updateTodo } from '../api'
import type { Todo } from '../api'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch(() => setError("Impossible de joindre l'API"))
      .finally(() => setLoading(false))
  }, [])

  const run = useCallback(async (action: () => Promise<void>) => {
    setError(null)
    try {
      await action()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erreur inconnue')
    }
  }, [])

  const addTodo = (title: string) =>
    run(async () => {
      const created = await createTodo(title)
      setTodos((prev) => [created, ...prev])
    })

  const toggleTodo = (todo: Todo) =>
    run(async () => {
      const updated = await updateTodo(todo.id, { completed: !todo.completed })
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? updated : t)))
    })

  const removeTodo = (id: Todo['id']) =>
    run(async () => {
      await deleteTodo(id)
      setTodos((prev) => prev.filter((t) => t.id !== id))
    })

  const clearDone = () =>
    run(async () => {
      const done = todos.filter((t) => t.completed)
      await Promise.all(done.map((t) => deleteTodo(t.id)))
      setTodos((prev) => prev.filter((t) => !t.completed))
    })

  return { todos, loading, error, addTodo, toggleTodo, removeTodo, clearDone }
}
