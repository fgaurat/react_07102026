import { useTodos } from './hooks/useTodos'
import { useTodoFilter } from './hooks/useTodoFilter'
import { TodoForm } from './components/TodoForm'
import { TodoFilters } from './components/TodoFilters'
import { TodoList } from './components/TodoList'
import { TodoFooter } from './components/TodoFooter'
import './App.css'

function App() {
  const { todos, loading, error, addTodo, toggleTodo, removeTodo, clearDone } =
    useTodos()
  const { filter, setFilter, visible } = useTodoFilter(todos)

  const doneCount = todos.filter((t) => t.completed).length

  return (
    <main className="app">
      <h1>Todo list</h1>
      <TodoForm onAdd={addTodo} />
      {error && <p className="error">{error}</p>}
      <TodoFilters filter={filter} onChange={setFilter} />
      <TodoList
        todos={visible}
        loading={loading}
        onToggle={toggleTodo}
        onDelete={removeTodo}
      />
      <TodoFooter
        remaining={todos.length - doneCount}
        doneCount={doneCount}
        onClearDone={clearDone}
      />
    </main>
  )
}

export default App
