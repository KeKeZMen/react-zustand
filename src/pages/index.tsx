import { createFileRoute } from "@tanstack/react-router";

export const MainPage = () => {
  return <div>MainPage</div>;
};

export const Route = createFileRoute("/")({
  component: MainPage,
});
