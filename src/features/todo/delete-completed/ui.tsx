import { useTodoStore } from "@entities/todo";

export const DeleteCompleted = () => {
  const deleteCompleted = useTodoStore((state) => state.deleteCompleted);

  return <button onClick={deleteCompleted}>Delete completed</button>;
};
