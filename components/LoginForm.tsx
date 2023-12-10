"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSession } from "next-auth/react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Facebook, Instagram, Linkedin, MessagesSquare } from "lucide-react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("dashboard");
      // toast.success(`Login`, {
      // position: toast.POSITION.TOP_CENTER
      //  });
    } catch (error) {
      console.log(error);
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
              <Link href={"/"}>
                <Facebook className=" text-white w-[20px] h-[20px] " />
              </Link>
            </div>
            <div className=" bg-green-dark hover:bg-green-500 transition-all scale-105 overflow-hidden duration-300 focus-visible:bg-green-dark shadow-md rounded-full p-2">
              <Link href={"/"}>
                <Instagram className=" text-white w-[20px] h-[20px] " />
              </Link>
            </div>
            <div className=" bg-green-dark hover:bg-green-500 transition-all scale-105 overflow-hidden duration-300 focus-visible:bg-green-dark shadow-md rounded-full p-2">
              <Link href={"/"}>
                <Linkedin className=" text-white w-[20px] h-[20px] " />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Login Form */}
      <div className=" flex-1 ">
        <div className=" flex flex-col h-screen gap-y-2 mx-auto md:ml-16 justify-center item-center">
          <h2 className=" text-center text-2xl text-black-dark font-bold w-[320px]">
            Register for Sechat{" "}
          </h2>
          <form onSubmit={handleLogin}>
            <div className=" flex flex-col w-[320px] md:w-[450px] mx-5 md:mx-10 my-2 border shadow-md rounded-md gap-y-3 py-8 px-4">
              <Label htmlFor="email"> Email</Label>
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
              <Button
                type="submit"
                className=" md:mx-auto px-5 mx-2 my-2 hover:bg-blue-dark"
              >
                Submit
              </Button>
              {error && (
                <div className=" bg-red text-white text-sm font-sans font-normal border shadow-sm w-fit px-6 py-2 rounded">
                  {error}
                </div>
              )}
              <div>
                <p className=" text-sm font-normal font-sans">
                  Don't have an account
                  <Link
                    href={"/Register"}
                    className=" underline text-md font-semibold mx-2 font-sarif hover:text-blue-dark/70"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
