import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/todo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Todo Layout</h1>
      <Outlet />
    </div>
  );
}
