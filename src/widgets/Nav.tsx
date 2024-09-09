import { Link } from "@tanstack/react-router";

export const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>Main</Link>
      <Link to={"/todos"}>Todos</Link>
    </nav>
  );
};
