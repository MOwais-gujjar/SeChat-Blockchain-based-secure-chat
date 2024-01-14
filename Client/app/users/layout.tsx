import Sidebar from "../components/Sidebar/Sidebar"
import UserList from "./components/userList"

export default async function Userslayout({
    children
}: {
   children:  React.ReactNode
}) {
  return (
    <>
      <Sidebar>
    <div className=' h-full'>
      <UserList />
      {children}</div>
    </Sidebar>
    </>
  )
}
