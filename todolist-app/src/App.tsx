import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, isLoading, deleteTodo } = useTodos();
  return (
    <>
      <TodoForm />
      <hr />
      <TodoList todos={todos} isLoading={isLoading} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
