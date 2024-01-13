"use client";

import clsx from "clsx";
import React from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondry?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<buttonProps> = ({
  type,
  fullWidth,
  onClick,
  secondry,
  danger,
  disabled,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex 
        justify-center 
        rounded-md 
        px-3 
        py-2 
        text-sm 
        font-semibold 
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        `,
        disabled && " opacity-50 cursor-default",
        fullWidth && " w-full",
        secondry ? "text-gray-900" : "text-white",
        danger && " bg-rose-500 hover:bg-rose-600 focus-visible:bg-rose-600",
        !secondry &&
          !danger &&
          " bg-sky-500 hover:bg-sky-600 focus-visible:bg-sky-600"
      )}
    >
        {children}
    </button>
  );
};

export default Button;
