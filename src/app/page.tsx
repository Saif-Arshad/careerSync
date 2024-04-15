import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='min-h-screen flex items-center justify-around'>
   <Link href={"/login"}><button className='p-3 rounded-lg text-white bg-blue-700'>Login</button> </Link>   
    <Link href={"/signin"}> <button className='p-3 text-white rounded-lg bg-blue-700'>signin</button></Link> 
    </div>
  )
}
