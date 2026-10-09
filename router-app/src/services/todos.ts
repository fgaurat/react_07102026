export interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

export type TodoInput = Omit<Todo, 'id'>

const API_URL = `${import.meta.env.VITE_API_URL}/todos`

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  })
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`)
  }
  return response.json() as Promise<T>
}

export const getTodos = (): Promise<Todo[]> => request<Todo[]>(API_URL)

export const getTodo = (id: number): Promise<Todo> =>
  request<Todo>(`${API_URL}/${id}`)

export const createTodo = (todo: TodoInput): Promise<Todo> =>
  request<Todo>(API_URL, { method: 'POST', body: JSON.stringify(todo) })

export const updateTodo = (id: number, todo: TodoInput): Promise<Todo> =>
  request<Todo>(`${API_URL}/${id}`, { method: 'PUT', body: JSON.stringify(todo) })

export const patchTodo = (id: number, changes: Partial<TodoInput>): Promise<Todo> =>
  request<Todo>(`${API_URL}/${id}`, { method: 'PATCH', body: JSON.stringify(changes) })

export const deleteTodo = (id: number): Promise<void> =>
  request<void>(`${API_URL}/${id}`, { method: 'DELETE' })
