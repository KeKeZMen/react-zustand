import { useTodoStore } from "@entities/todo";
import { createFileRoute } from "@tanstack/react-router";
import { FC } from "react";

const TodoPage: FC = () => {
  const { id } = Route.useParams<{ id: string }>();
  const todos = useTodoStore((state) => state.todos);

  return <div>{todos.find((todo) => String(todo.id) === id)?.title}</div>;
};

export const Route = createFileRoute("/(site)/todos/$id/")({
  component: TodoPage,
});
