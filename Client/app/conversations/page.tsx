import React from 'react'
import EmptyState from '../components/EmptyState'

const users = () => {
  return (
    <>
    {/* <div className=" w-full h-10 "> */}
      {/* <Header /> */}
    {/* </div> */}
    <div className=' hidden lg:block lg:pl-80 h-full'>
      <EmptyState />
    </div>
    </>
  )
}

export default users