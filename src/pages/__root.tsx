import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navigation } from "@widgets";
import styled from "@emotion/styled";

const Main = styled.main(() => ({
  maxWidth: "1400px",
  margin: "0 auto",
}));

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <TanStackRouterDevtools />
    </>
  ),
});
