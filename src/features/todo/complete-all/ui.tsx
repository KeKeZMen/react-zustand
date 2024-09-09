import { useTodoStore } from "@entities/todo";

export const CompleteAll = () => {
  const todos = useTodoStore((s) => s.todos);
  const completeAll = useTodoStore((s) => s.completeAll);

  return (
    <input
      type="checkbox"
      checked={todos.every((todo) => todo.completed)}
      onChange={completeAll}
    />
  );
};
