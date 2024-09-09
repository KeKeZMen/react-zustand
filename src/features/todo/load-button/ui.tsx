import { useTodoStore } from "@entities/todo";

export const LoadButton = () => {
  const loadTodos = useTodoStore((state) => state.loadTodos);

  return <button onClick={loadTodos}>Load todos</button>;
};
