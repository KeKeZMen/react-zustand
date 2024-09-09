import styled from "@emotion/styled";
import { TodoRow, useTodoStore } from "@entities/todo";
import { CompleteAll, DeleteCompleted } from "@features/todo";

const TableGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 30px 0;
`;

export const TodoTable = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      {todos.filter((todo) => todo.completed).length > 0 && <DeleteCompleted />}
      {todos.length > 0 && <CompleteAll />}
      <TableGrid>
        {todos.map((todo) => (
          <TodoRow todo={todo} key={todo.id} />
        ))}
      </TableGrid>
    </>
  );
};
