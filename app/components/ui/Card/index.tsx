import type { ReactNode } from "react";

export type CardProps = {
  borderRadius?: number;
  children: ReactNode;
};

export const Card = ({ borderRadius = 20, children }: CardProps) => {
  return (
    <div className="border border-gray-300 p-2" style={{ borderRadius }}>
      {children}
    </div>
  );
};
