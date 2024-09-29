import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { useTodoStore, type ITodo } from "../../model";
import { Link } from "@tanstack/react-router";
import styled from "@emotion/styled";

type PropsType = {
  todo: ITodo;
};

const TodoDiv = styled.div(() => ({
  display: "grid",
  gridTemplateColumns: "0.5fr 1fr 0.5fr 1fr",
  gap: 15,
}));

const EditInput = styled.input(() => ({
  border: "none",
  outline: "none",
}));

export const TodoRow: FC<PropsType> = ({ todo }) => {
  const changeTodoText = useTodoStore((state) => state.changeTodoText);
  const toogleTodo = useTodoStore((state) => state.toogleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    /* сработает, так как setState это микротаска
      const p = new Promise((resolve) => {
        resolve(true);
      });
      p.then(() => {
        editInputRef.current?.focus();
      });
    
      не сработает из-за того, что это синхронный код
      editInputRef.current?.focus()
    Ы*/
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
        <EditInput
          type="text"
          autoFocus
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
