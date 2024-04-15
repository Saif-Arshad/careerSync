import React from 'react'
import Link from 'next/link'
import { BiSearchAlt } from "react-icons/bi";
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";


function Footer() {
  return (
<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
      <span className="main self-cente box-border flex items-center justify-center text-2xl font-bold whitespace-nowrap text-emerald-500">
          <BiSearchAlt className='icon' size={30} /> Career<span className='logo text-6xl mb-6 text-emerald-500'
             >s   </span>ync
            </span>
      </Link>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-gray-800">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <p className="mt-4 text-sm text-gray-800">
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
      <div className="flex">
        <p className="mr-1 text-gray-800">Phone:</p>
        <Link href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">850-123-5021</Link>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Email:</p>
        <Link href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">info@lorem.mail</Link>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Address:</p>
        <Link href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
          312 Lovely Street, NY
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
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-600">
      © Copyright 2024. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <Link href="/faq" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</Link>
      </li>
      <li>
        <Link href="/policy" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</Link>
      </li>
      <li>
        <Link href="/condition" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</Link>
      </li>
    </ul>
  </div>
</div>


  )
}

export default Footer
