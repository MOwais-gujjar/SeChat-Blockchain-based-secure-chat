"use client";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Button from "../Button";


const Login_metamask = ({ account, setAccount }: any) => {
    const copyAddress = async () => {
        alert("copy Address")
    }
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account.slice(0, 4) + '..' + account.slice(38, 40));
  };
  return (
    <>
      {account ? (
        <Button onClick={copyAddress}>{account}</Button>
      ) : (
        <Button onClick={connectHandler}>connect</Button>
      )}
    </>
  );
};

export default Login_metamask;
