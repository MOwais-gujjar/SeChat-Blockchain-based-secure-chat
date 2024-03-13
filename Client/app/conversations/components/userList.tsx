"use client";
import React, { useState } from "react";
import { TiPlusOutline } from "react-icons/ti";
import UserBox from "./UserBox";
import Input from "../../components/Input/Input";
import { register } from "module";
import Search from "../../components/Search";
import { FieldValues, useForm } from "react-hook-form";

const UserList = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    alert("Add Friends ");
  };
  return (
    <aside
      className="
      fixed 
      top-2
      inset-y-0 
      pb-20
      lg:pb-0
      lg:left-20 
      lg:w-80 
      lg:block
      overflow-y-auto 
      border-r 
      border-gray-200
      block w-full left-0
    "
    >
      <div className="px-5 flex flex-col ">
        <div className="flex justify-between py-4 ml-2">
          <div className=" flex gap-1">
            <h1
              className="
            text-xl 
            font-bold 
            text-neutral-800 
          "
            >
              Chat
            </h1>
            <p className=" text-[10px] text-black opacity-60 font-bold text-nowrap mt-1">
              10
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className=" bg-blue-600 rounded-full w-7 h-7 p-2 hover:bg-blue-500 transition"
          >
            <TiPlusOutline size={13} className={" text-white"} />
          </button>
        </div>
        <div className=" mx-auto w-full ml-2 border-b-[1px]">
          <Search  placeholder="Search Friend " id="search" Disabled={isLoading} errors={errors}/>
          <p className=" text-[10px] m-2 opacity-60">
            result: {1}
          </p>
        </div>
        <UserBox />
      </div>
    </aside>
  );
};

export default UserList;
