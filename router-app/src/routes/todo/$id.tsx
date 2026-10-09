import { createFileRoute } from "@tanstack/react-router";
import { getTodo } from "../../services/todos";

export const Route = createFileRoute("/todo/$id")({
  component: TodoPage,
  loader: ({ params }) => getTodo(Number(params.id)),
});

function TodoPage() {
  const { id } = Route.useParams();
  const todo = Route.useLoaderData();

  return (
    <div>
      Todo id = {id}
      <br />
      title <strong>{todo.title}</strong>
    </div>
  );
}
