import { Nav } from "@widgets";
import { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const RootLayout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
