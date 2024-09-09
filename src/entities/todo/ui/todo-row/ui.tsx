import { FC } from "react";
import type { ITodo } from "../../model";
import { Link } from "@tanstack/react-router";

type PropsType = {
  todo: ITodo;
};

export const TodoRow: FC<PropsType> = ({ todo }) => {
  return (
    <div>
      {todo.title}
      <Link to={"/todos/$id"} params={{ id: todo.id }}>
        {todo.id}
      </Link>
    </div>
  );
};
