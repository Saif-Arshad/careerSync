import React from 'react'
import Link from 'next/link'
import { BiSearchAlt } from "react-icons/bi";
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";


function Footer() {
  return (
<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="flex flex-wrap justify-between flex-col md:flex-row space-y-3 lg:space-y-0">
    <div className="sm:col-span-2 ">
      <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
      <span className="main self-cente box-border flex items-center justify-center text-2xl font-bold whitespace-nowrap text-emerald-500">
          <BiSearchAlt className='icon' size={30} /> Career<span className='logo text-6xl mb-6 text-emerald-500'
             >s   </span>ync
            </span>
      </Link>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-gray-800">
        CareerSync is a dynamic job platform that seamlessly connects job seekers with employment opportunities tailored to their skills and preferences.
        </p>
      </div>
    </div>
    <div className='flex flex-row flex-wrap space-x-10 md:space-x-20' >
    <div className="space-y-2 text-sm flex flex-col">
      <p className="text-base font-bold tracking-wide text-gray-900 ">Quick Links</p>
        <Link href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
        Home Page
        </Link>
        <Link href="/jobs"   className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
        Jobs Search
        </Link>
        <Link href="/about" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
        About Page
        </Link>
        <Link href="/faq"  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
        F.A.Q
        </Link>
    </div>
    <div className="space-y-2 text-sm flex flex-col">
      <p className="text-base font-bold tracking-wide text-gray-900 ">Legal</p>
       
        <Link href="/term&condition" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
        Terms &amp; Conditions
        </Link>
        <Link href="/policy" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
        Privacy Policy
        </Link>
        <Link href="/faq"  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
    Questions

        </Link>
    </div>
    </div>
    <div>
      <span className="text-base font-bold tracking-wide text-gray-900">Social Links</span>
      <div className="flex items-center mt-1 space-x-3">
       
        <Link href="https://github.com/Saif-Arshad/" target='_blank' className="text-gray-500 transition-colors hover:text-emerald-500  duration-300 hover:text-deep-purple-accent-400">
        <AiFillGithub size={28} />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100086295243570"  target='_blank' className="text-gray-500 transition-colors hover:text-emerald-500  duration-300 hover:text-deep-purple-accent-400">
        <BsFacebook  size={25} />
        </Link>
        <Link href="https://twitter.com/saifurrehmanpro" target='_blank'  className="text-gray-500 transition-colors hover:text-emerald-500  duration-300 hover:text-deep-purple-accent-400">
        <FaSquareXTwitter size={25} />
        </Link>
        <Link href="https://www.linkedin.com/in/saif-rehman-professional/" target='_blank'  className="text-gray-500 transition-colors hover:text-emerald-500  duration-300 hover:text-deep-purple-accent-400">
        <BsLinkedin  size={25} />
        </Link>
      
      </div>
      <p className="mt-4 text-sm text-gray-500">
    Follow Us on Social media
      </p>
    </div>
  </div>
  <div className="flex justify-center pt-5 pb-10 border-t ">
    <p className="text-sm text-gray-600">
      © Copyright 2024. All rights reserved.
    </p>
   
  </div>
</div>


  )
}

export default Footer
