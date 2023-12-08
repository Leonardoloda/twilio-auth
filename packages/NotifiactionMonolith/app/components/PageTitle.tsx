import { FC, ReactNode } from "react";

export interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h1 className="text-2xl text-cyan-900">{children}</h1>;
};
