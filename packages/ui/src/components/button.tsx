import * as React from "react";

interface ButtonParams {
  children: React.ReactNode;
}

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};
