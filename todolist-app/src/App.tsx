import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, isLoading, deleteTodo,saveTodo } = useTodos();
  return (
    <>
      <TodoForm saveTodo={saveTodo}/>
      <hr />
      <TodoList todos={todos} isLoading={isLoading} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
