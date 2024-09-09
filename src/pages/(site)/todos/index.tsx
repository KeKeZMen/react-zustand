import { useTodoStore, TodoRow } from "@entities/todo";
import { createFileRoute } from "@tanstack/react-router";
import { FC, useEffect } from "react";

const TodosPage: FC = () => {
  const { getTodos, todos } = useTodoStore();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoRow todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export const Route = createFileRoute("/(site)/todos/")({
  component: TodosPage,
});
