import { createFileRoute, Link } from "@tanstack/react-router";
import { getTodos } from "../../services/todos";

export const Route = createFileRoute("/todo/")({
  loader: () => getTodos(),
  pendingComponent: () => <p>Chargement…</p>,
  errorComponent: ({ error }) => <p>Erreur : {error instanceof Error ? error.message : String(error)}</p>,
  component: RouteComponent,
});

function RouteComponent() {
  const todos = Route.useLoaderData();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly />{" "}
          <Link to="/todo/$id" params={{ id: String(todo.id) }}>
            {todo.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
