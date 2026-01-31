import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/foods/schedule/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/foods/schedule/new"!</div>;
}
