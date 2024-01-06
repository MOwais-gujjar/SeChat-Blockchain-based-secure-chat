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
            <Image
            alt='Logo'
            width={20}
            height={20}
            src={Logo}
            className=' mx-auto w-fit'
            />
            <h2 className=" text-2xl font-semibold text-center tracking-tight leading-tight">Sechat</h2>
        </div>
        <AuthForm />
    </div>
  )
}

export default Home