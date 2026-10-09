import { createFileRoute } from "@tanstack/react-router";

type HelloSearch = {
  name: string;
};

export const Route = createFileRoute("/hello")({
  component: HelloPage,
  validateSearch: (search: Record<string, unknown>): HelloSearch => ({
    name: typeof search.name === "string" ? search.name : "No value"
  }),
});

function HelloPage() {
  const { name } = Route.useSearch();

  return <>Hello {name}</>;
}
