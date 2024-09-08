import { createFileRoute } from "@tanstack/react-router";

const TodosPage = () => {
  return <div>Todos</div>;
};

export const Route = createFileRoute("/todos/")({
  component: () => TodosPage,
});
