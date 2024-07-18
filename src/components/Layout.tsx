import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Hero />
      <main>{children}</main>
    </>
  );
};
