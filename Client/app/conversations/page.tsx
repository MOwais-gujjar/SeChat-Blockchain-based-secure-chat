import React from 'react'
import EmptyState from '../components/EmptyState'
import LoadingModel from './components/LoadingModel'

const users = () => {
  return (
    <>
    <div className=' lg:block lg:pl-80 h-full'>
      {/* <LoadingModel /> */}
      <EmptyState />
    </div>
    </>
  )
}

export default users