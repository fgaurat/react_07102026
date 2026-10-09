export interface Todo {
  id: number | string
  userId?: number
  title: string
  completed: boolean
}

const BASE_URL = `${import.meta.env.VITE_API_URL}/todos`

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  })
  if (!res.ok) throw new Error(`Erreur API (${res.status})`)
  return res.json() as Promise<T>
}

export const getTodos = () => request<Todo[]>(BASE_URL)

export const createTodo = (title: string) =>
  request<Todo>(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({ title, completed: false }),
  })

export const updateTodo = (id: Todo['id'], patch: Partial<Omit<Todo, 'id'>>) =>
  request<Todo>(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
  })

export const deleteTodo = async (id: Todo['id']) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error(`Erreur API (${res.status})`)
}
