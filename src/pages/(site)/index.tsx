import { createFileRoute } from "@tanstack/react-router";
import styled from "@emotion/styled";
import { FC } from "react";

const Opa = styled.p<{ opa?: boolean }>((props) => ({
  backgroundColor: props.opa ? "red" : "black",
}));

const NeOpa = styled(Opa)`
  color: aqua;
`;

const ReversedOpa = (props: any) => (
  <Opa {...props} children={props.children.split("").reverse()} />
);

const MainPage: FC = () => {
  return (
    <div>
      <Opa opa>Main page{")"}</Opa>
      <NeOpa>Main page{"("}</NeOpa>
      <ReversedOpa>opa text</ReversedOpa>
    </div>
  );
};

export const Route = createFileRoute("/(site)/")({
  component: MainPage,
});
