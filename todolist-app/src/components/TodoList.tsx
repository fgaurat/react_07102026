import type { Todo, Todos } from "../types/todo";
import { useDocumentTitle } from "@uidotdev/usehooks";

interface TodoListProps {
  todos: Todos;
  isLoading: boolean;
  deleteTodo: (t: Todo) => void;
}

function TodoList({ todos, isLoading, deleteTodo }: TodoListProps) {
  //   const [todos, setTodos] = useState<Todos>([]);

  useDocumentTitle(`${todos.length} todos chargées`);

  //   useEffect(() => {
  //     const url = import.meta.env.VITE_TODOLIST_URL;
  //     fetch(url, {
  //       headers: { "Content-type": "application/json" },
  //     })
  //       .then((data) => data.json())
  //     //   .then((data) => setTodos(data));
  //       .then(setTodos);
  //   }, []);

  /*
  useEffect(() => {
    // (async () => {
    //   const url = import.meta.env.VITE_TODOLIST_URL;
    //   const reponse = await fetch(url);
    //   const data = await reponse.json();
    //   setTodos(data);
    // })();

    const url = import.meta.env.VITE_TODOLIST_URL;
    fetch(url, {
      headers: { "Content-type": "application/json" },
    })
      .then((data) => data.json())
      //   .then((data) => setTodos(data));
      .then(setTodos);
  }, []);
  */
  return (
    <>
      <h1>TodoList</h1>

      {isLoading && <p>Chargement en cours ...</p>}

      {!isLoading && (
        <table>
          <tbody>
            {todos.map((todo: Todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Done" : "Not Done"}</td>
                <td>
                  <button onClick={() => deleteTodo(todo)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default TodoList;
