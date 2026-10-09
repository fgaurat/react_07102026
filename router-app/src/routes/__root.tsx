import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/hello" className="[&.active]:font-bold" search={{ name: 1 }}>
          Hello qui ?
        </Link>
        <Link to="/todo" className="[&.active]:font-bold">
          All Todos
        </Link>
        <Link to="/todo/2" className="[&.active]:font-bold">
          Todo id 2
        </Link>
        <Link
          to="/todo/$id"
          params={{ id: "12" }}
          className="[&.active]:font-bold"
        >
          Todo id 12
        </Link>
      </div>
      <hr />

      <Outlet />

      <TanStackRouterDevtools />
    </>
  );
}
