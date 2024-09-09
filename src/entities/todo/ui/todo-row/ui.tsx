import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { useTodoStore, type ITodo } from "../../model";
import { Link } from "@tanstack/react-router";
import styled from "@emotion/styled";

type PropsType = {
  todo: ITodo;
};

const TodoDiv = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  gap: 15,
}));

export const TodoRow: FC<PropsType> = ({ todo }) => {
  const changeTodoText = useTodoStore((state) => state.changeTodoText);
  const toogleTodo = useTodoStore((state) => state.toogleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const [title, setTitle] = useState(todo.title);
  const handleEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSave = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setIsEditing(false);
      if (title.trim()) {
        changeTodoText(todo.id, title);
      } else {
        setTitle(todo.title);
      }
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    setTitle(todo.title);
  };

  const handleToggle = () => {
    toogleTodo(todo.id);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <TodoDiv>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />

      {!isEditing ? (
        <p onDoubleClick={handleEdit}>{title}</p>
      ) : (
        <input
          type="text"
          onKeyUp={handleSave}
          onChange={handleEditTitle}
          onBlur={handleBlur}
          value={title}
        />
      )}

      <Link to={"/todos/$id"} params={{ id: todo.id }}>
        {todo.id}
      </Link>

      <button onClick={handleRemoveTodo}>delete</button>
    </TodoDiv>
  );
};
