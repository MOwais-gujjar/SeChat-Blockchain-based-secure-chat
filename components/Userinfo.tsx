"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const UserInfo = () => {
  const { data: session } = useSession();
const router = useRouter();
  const handleLogout = async () => {
    try {
      const Data = await signOut({ redirect: false, callbackUrl: "/" });
      router.push(Data.url)
      toast.success(` ${session?.user?.name} LogOut`, {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (error) {
      toast.error(` During Logout ${error}`, {
        position: toast.POSITION.TOP_CENTER
      });    }
  };
  return (
    <div className=" h-screen grid bg-gray-100 w-full justify-center items-center">
      <div className=""></div>
      <div className=" flex flex-col space-y-4 shadow-lg px-6 py-5 rounded-md bg-white w-fit">
        <h3>
          Name:{" "}
          <span className=" text-lg font-bold "> {session?.user?.name}</span>
        </h3>
        <h3>
          Email:
          <span className=" text-lg font-bold p-2">{session?.user?.email}</span>
        </h3>
        <button
          onClick={handleLogout}
          className=" bg-blue-dark text-white rounded-md px-6 py-3"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
