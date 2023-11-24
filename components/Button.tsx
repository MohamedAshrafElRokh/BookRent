import React from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `rounded-full bg-black px-2 py-1 hover:opacity-75 cursor-pointer`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
