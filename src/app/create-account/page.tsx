import Not from '@/Components/NotAuthorize/Not'
import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='min-h-screen'>
      <Not/>
      <div className='w-full flex justify-center'>
      <div className='flex flex-col flex-wrap items-center justify-center w-11/12'>
      <div className=' md:text-xl text-gray-700 gap-y-2 flex flex-col justify-center items-center flex-wrap'><h1 className='text-xl md:text-3xl font-bold text-black block capitalize'>Unauthorized User</h1> Please create a CareerSync account to access job search.</div>
      <div className='space-x-4 mt-10'>


<Link
  href="/signup"
  className="text-white border-emerald-500 border-2 bg-emerald-500 hover:bg-emerald-700 hover:border-emerald-700 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none "
>
  SignUp
</Link>
<Link
  href="/login"
  className=" border-2 border-emerald-500 text-emerald-900 transition-all hover:bg-emerald-700 hover:border-emerald-700 hover:text-white focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
  >
  LogIn
</Link>
  </div>
      </div>
      </div>
    </div>
  )
}

export default page
