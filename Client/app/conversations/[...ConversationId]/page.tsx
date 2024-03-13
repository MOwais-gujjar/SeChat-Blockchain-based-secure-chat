import React from 'react'

interface Iparam {
    ConversationId: string
}
const page = async ({params}: {params: Iparam}) => {
  
  return (
    <div className=' bg-black'>page</div>
  )
}

export default page