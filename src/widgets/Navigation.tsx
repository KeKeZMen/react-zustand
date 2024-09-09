import { Link } from "@tanstack/react-router";
import styled from "@emotion/styled";

const Nav = styled.nav(() => ({
  padding: "15px",
  display: "flex",
  justifyContent: "left",
  backgroundColor: "aqua",
  "& ul": {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
}));

export const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to={"/"}>Main</Link>
        </li>
        <li>
          <Link to={"/todos"}>Todos</Link>
        </li>
      </ul>
    </Nav>
  );
};
