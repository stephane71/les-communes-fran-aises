import type { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-2">{children}</div>
  );
};
