import Image from 'next/image'
import React from 'react'
import Logo from '@/public/metamask.svg'
import AuthForm from './components/AuthForm'
const Home = () => {
  return (
    <div
    className='
     flex
     min-h-full
     flex-col
     justify-center
     md:items-center
     py-8
     sm:px-6
     lg:px-8
     bg-gray-200
    '>
        <div className="
         sm:mx-auto sm:w-full sm:max-w-md
        ">
            <h1 className=' mx-auto w-fit text-3xl font-bold'>Logo</h1>
            <h2 className=" text-2xl font-semibold text-center tracking-tight leading-tight">Sechat</h2>
        </div>
        <AuthForm />
    </div>
  )
}

export default Home