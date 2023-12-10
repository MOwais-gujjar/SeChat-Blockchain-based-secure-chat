"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Facebook, Instagram, Linkedin, MessagesSquare } from "lucide-react";
import { Label } from "@radix-ui/react-label";


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router =  useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Fill the Required Fields");
      return;
    }

    try {
      const resUserExist  = await fetch("api/UserExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
      })

      const {user} = await resUserExist.json()
      if(user){
        setError("User Have Already Exist")
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target
        form.reset();
        router.push("/");
      } else {
        console.log("Error registration have failed");
      }
    } catch (error) {
      console.log("Error during user have Registring", error);
    }
  };

  return (
    <div className=" flex">
      <div className=" hidden md:flex-1 md:flex">
        <div className=" flex flex-col justify-center items-center gap-y-5 bg-gradient-to-t from-green-dark to-blue-dark w-full h-screen shadow-md ">
          {/* Icon */}
          <div className=" text-center text-white font-sans font-semibold ">
            <MessagesSquare className=" w-24 h-24" />
            <h1 className=" text-4xl tracking-wider">SeChat</h1>
          </div>
          {/* Heading */}
          <div className="">
            <h1 className=" text-center text-2xl text-white w-[350px]">
              Share Your Smile with this world & find friends
            </h1>
          </div>
          {/* Social Links */}
          <div className=" flex justify-center items-center gap-x-4">
            <div className=" bg-green-dark hover:bg-green-500 transition-all scale-105 overflow-hidden duration-300 focus-visible:bg-green-dark shadow-md rounded-full p-2">
              <Link href={'/'}>
              <Facebook className=" text-white w-[20px] h-[20px] " />
              </Link>
            </div>
            <div className=" bg-green-dark hover:bg-green-500 transition-all scale-105 overflow-hidden duration-300 focus-visible:bg-green-dark shadow-md rounded-full p-2">
            <Link href={'/'}>
              <Instagram className=" text-white w-[20px] h-[20px] " />
              </Link>
            </div>
            <div className=" bg-green-dark hover:bg-green-500 transition-all scale-105 overflow-hidden duration-300 focus-visible:bg-green-dark shadow-md rounded-full p-2">
            <Link href={'/'}>
              <Linkedin className=" text-white w-[20px] h-[20px] " />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Register Form */}
      <div className=" flex-1 ">
        <div className=" flex flex-col max-h-screen gap-y-2 mx-auto mt-20 md:ml-16 justify-center item-center">
          <h2 className=" text-center text-2xl text-black font-bold w-[320px]">Register for Sechat </h2>
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col w-[320px] md:w-[450px] mx-5 md:mx-10 my-2 border shadow-md rounded-md gap-y-2 py-8 px-4">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className=" md:mx-auto px-5 mx-2 my-2 hover:bg-blue-dark">
                Submit
              </Button>
              {error && <div className=" bg-red text-white text-sm font-sans font-normal border shadow-sm w-fit px-6 py-2 rounded">{error}</div>}
            <div>
              
                <p className=" text-sm font-normal font-sans">
                  Already have an account to 
              <Link href={"/"} className=" underline text-md font-semibold mx-2 font-sarif hover:text-blue-dark">
                Login
              </Link>
              </p>
            </div>
            </div>
            
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default RegisterPage;
