"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.jpg";
import Button from "../Button";
import { ethers } from "ethers";
import Login_metamask from "./Login_metamask";

const Navigation = () => {
  const [account, setAccount] = useState("" || undefined);
  //Implement Metamask authetication
  const LoadBalancing = async () => {
    window.ethereum.on('accountChanged', async () => {
      window.location.reload();
    })
  };
  useEffect(() => {
    LoadBalancing();
  }, []);
  return (
    <div
      className=" 
    flex 
    justify-between
    items-center 
    w-full h-fit 
    bg-white 
    border-b-2 border-opacity-40 
    py-2  
    px-16
    fixed 
    top-0
    "
    >
      <div className=" flex gap-2 items-center ">
        <Image
          src={logo}
          alt="Sechat"
          height={30}
          width={30}
          className="
          rounded-lg w-fit mx-auto m-1
        "
        />
        <h1 className=" text-lg font-bold mx-auto font-sans text-blue-700">
          Sechat
        </h1>
      </div>

      <Login_metamask account={account} setAccount={setAccount} />
    </div>
  );
};

export default Navigation;
