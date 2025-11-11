import type { MouseEventHandler, ReactNode } from "react";

export type CardProps = {
  borderRadius?: number;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export const Card = ({
  borderRadius = 20,
  children,
  onClick = () => {},
}: CardProps) => {
  return (
    <div
      className="border border-gray-300 p-2 cursor-pointer hover:bg-gray-200 hover:border-gray-400 transition-colors duration-150"
      style={{ borderRadius }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
