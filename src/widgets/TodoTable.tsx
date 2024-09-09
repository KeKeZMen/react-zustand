import styled from "@emotion/styled";
import { TodoRow, useTodoStore } from "@entities/todo";
import { CompleteAll, DeleteCompleted, AddTodo } from "@features/todo";

const TodoItemsTable = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 30px 0;
`;

const TodoGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const TodoTableActions = styled.div``;

export const TodoTable = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <TodoGrid>
      <AddTodo />
      <TodoItemsTable>
        {todos.map((todo) => (
          <TodoRow todo={todo} key={todo.id} />
        ))}
      </TodoItemsTable>
      <TodoTableActions>
        {todos.length > 0 && <CompleteAll />}
        {todos.filter((todo) => todo.completed).length > 0 && (
          <DeleteCompleted />
        )}
      </TodoTableActions>
    </TodoGrid>
  );
};
