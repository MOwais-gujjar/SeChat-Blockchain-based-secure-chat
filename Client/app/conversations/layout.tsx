import { ethers } from "ethers";
import SideBar from "../components/Sidebar/SideBar";
import Navigation from '../components/navigation/Navigation'
import UserList from "./components/userList";
import ChatHeader from "./components/ChatHeader";
import LoadingModel from "./components/LoadingModel";

export default async function Userslayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <>
    {/* <Navigation /> */}
      <SideBar>
        <div className=" h-full">
          <UserList />
          {children}
        </div>
      </SideBar>
    </>
  );
}
