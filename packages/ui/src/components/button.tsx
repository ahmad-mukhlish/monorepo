import * as React from "react";

interface ButtonParams {
  children: React.ReactNode;
}

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="bg-teal-500 p-2 rounded-lg">{children}</button>;
};
