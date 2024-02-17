import SideBar from "../components/Sidebar/SideBar";
import Header from '../components/navigation/Navigation'
import UserList from "./components/userList";

export default async function Userslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header />
      <SideBar>
        <div className=" h-full">
          <UserList />
          {children}
        </div>
      </SideBar>
    </>
  );
}
