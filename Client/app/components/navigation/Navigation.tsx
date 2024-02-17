"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.jpg";
import Button from "../Button";

const Navigation = () => {
  const [currentAccount, setCurrentAccount] = useState();

  const connectWallet = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } else {
      alert("Please Connect metamask");
    }
  };
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
      {currentAccount ? (
        <>
          <p>Wallet Address</p>
        </>
      ) : (
        <Button onClick={connectWallet}>Connect</Button>
      )}
    </div>
  );
};

export default Navigation;
