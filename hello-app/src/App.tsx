import { useState } from "react";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import TPEvent from "./components/TPEvent";
import Form from "./components/Form";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

type Todos = Todo[];

const todos: Todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
];

function App() {
  const isShow: boolean = true;

  const rows: React.JSX.Element[] = todos.map((todo: Todo) => (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? "Done" : "Not Done"}</td>
    </tr>
  ));

  // for (const todo of todos) {
  //   rows.push(
  //     <tr key={todo.id}>
  //       <td>{todo.id}</td>
  //       <td>{todo.title}</td>
  //       <td>{todo.completed ? "Done" : "Not Done"}</td>
  //     </tr>,
  //   );
  // }

  const [showCounter, setShowCounter] = useState(true);
  return (
    <>
      <hr />
      <Form />
      <hr />

      <TPEvent />
      <hr />
      <button onClick={() => setShowCounter((s) => !s)}>Show Counter</button>

      {showCounter && <Counter />}

      <hr />

      <Hello firstName="Fred" name="GAURAT" showTitle={isShow} />
      <Hello firstName="Robert" name="DUPONT" showTitle={!isShow} />

      <table>
        <tbody>{rows}</tbody>
      </table>
      <hr />
      <table>
        <tbody>
          {todos.map((todo: Todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Done" : "Not Done"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
