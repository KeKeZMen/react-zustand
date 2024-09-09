import { LoadButton } from "@features/todo";
import { createFileRoute } from "@tanstack/react-router";
import { TodoTable } from "@widgets/TodoTable";
import { FC } from "react";

const TodosPage: FC = () => {
  return (
    <div>
      <TodoTable />
      <LoadButton />
    </div>
  );
};

export const Route = createFileRoute("/(site)/todos/")({
  component: TodosPage,
});
