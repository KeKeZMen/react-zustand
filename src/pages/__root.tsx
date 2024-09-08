import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Nav } from "@widgets";

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
