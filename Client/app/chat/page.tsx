'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <button onClick={() => signOut()}>Log Out</button>
      )
}

export default page