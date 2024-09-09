import { useTodoStore } from "@entities/todo";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addTodo = useTodoStore((s) => s.addTodo);
  const handleCreate = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (title.trim()) {
        addTodo(title);
        setTitle("");
      }
    }
  };

  return (
    <input
      type="text"
      onKeyUp={handleCreate}
      onChange={handleTitle}
      value={title}
    />
  );
};
