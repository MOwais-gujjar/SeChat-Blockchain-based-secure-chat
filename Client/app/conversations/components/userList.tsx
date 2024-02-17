"use client";
import React, { useState } from "react";
import { TiPlusOutline } from "react-icons/ti";
import UserBox from "./UserBox";

const UserList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    alert("Add Friends ")
  };
  return (
    <aside
      className="
      fixed 
      top-16
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
        <div className="flex justify-between  py-4">
          <h1
            className="
            text-xl 
            font-bold 
            text-neutral-800 
          "
          >
            People
          </h1>
          <button
            onClick={handleSubmit}
            className=" bg-blue-600 rounded-full w-7 h-7 p-2 hover:bg-blue-500 transition"
          >
            <TiPlusOutline size={13} className={" text-white"} />
          </button>
        </div>
        <UserBox />
      </div>
    </aside>
  );
};

export default UserList;
