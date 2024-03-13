"use client";

import React from "react";
import clsx from "clsx";
import { FieldErrors } from "react-hook-form";

interface InputProps {
  placeholder: string;
  id: string;
  type?: string;
  errors: FieldErrors;
  Disabled?: boolean;
}

const Search: React.FC<InputProps> = ({
  placeholder,
  id,
  type,
  errors,
  Disabled,
}) => {
  return (
    <div>
      <div className=" mt-2">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={id}
          disabled={Disabled}
          className={clsx(
            `
        form-input
        block
        w-full
        rounded-md
        border-0
        py-1.5
        text-gray-900
        shadow-sm
        ring-1
        ring-inset
        ring-gray-300
        placeholder:text-gray-400
        focus:ring-2
        focus:ring-inset
        sm:text-sm
        sm:leading-6`,
            errors[id] && "focus:ring-rose-500",
            Disabled && " opacity-50 cursor-default"
          )}
        />
      </div>
    </div>
  );
};

export default Search;
