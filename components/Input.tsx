import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, disabled, children, ...props },
    ref: React.Ref<HTMLInputElement> | undefined
  ) => {
    return (
      <label>
        <input
          type={type}
          className={twMerge(
            `
          flex 
          w-full 
          rounded-md 
          bg-neutral-700
          border
          border-transparent
          px-3 
          py-3 
          text-sm 
          file:border-0 
          file:bg-transparent 
          file:text-sm 
          file:font-medium 
          placeholder:text-neutral-400 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          focus:outline-none
        `,
            disabled && "opacity-75",
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {children}
      </label>
    );
  }
);
Input.displayName = "Input";
export default Input;
