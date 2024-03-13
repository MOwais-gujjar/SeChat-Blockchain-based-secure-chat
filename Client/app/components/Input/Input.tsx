"use client"

import React from 'react'
import clsx from 'clsx';
import {
    FieldValues, 
    FieldErrors,
    UseFormRegister
} from 'react-hook-form';

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    Disabled?: boolean
}
const Input: React.FC<InputProps> = (
    {
        label,
        id,
        type,
        required,
        register,
        errors,
        Disabled
    }
) => {
  return (
    <div>
      <label 
      className=' block text-sm text-gray-900 font-medium leading-6'
      htmlFor={id}>
        {label}
      </label>
      <div className=" mt-2">
        <input 
        id={id} 
        type={type} 
        autoComplete={id} 
        disabled={Disabled} 
        {...register(id, {required})}
        className={clsx(`
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
  )
}

export default Input