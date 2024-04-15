/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React,{useState,useRef} from 'react'
import Image from 'next/image'
import signUpImage from '../../../public/image/SVG/signup/sign-up-animate.svg'
import Link from 'next/link'
import { AiFillEye } from "react-icons/ai";
import toast from 'react-hot-toast'
export default function page() {
	const [name,setname] =useState()
	const [email,setemail] =useState()
	const [password,setpassword] =useState()
	const [Cpassword,setCpassword] =useState()
	const [checkP ,setcheckP] =useState(false)
	const passwordtype = useRef<HTMLInputElement>(null);
	const Cpasswordtype = useRef<HTMLInputElement>(null);

	
const submitform = (e:any) => {
	e.preventDefault()
	if (!name || !email || !password || !Cpassword) {
		toast.error("All fields are required")
		return;
	}
	if(password !== Cpassword){
		setcheckP(true)
		return;
	}
	else{
		setcheckP(false)
	}
	console.log(name, password,email,Cpassword);
	
	};
	const PasswordVisibility = () => {
		if (!password) {
		  toast.error("Please enter a password first!")
		  return;
		}
		
		if (passwordtype.current) {
		  const currentType = passwordtype.current.type;
		  passwordtype.current.type = currentType === "password" ? "text" : "password";
		}
	  };
	const CPasswordVisibility = () => {
		if (!Cpassword) {
		  toast.error("Please enter a password first!") 
		  return;
		}
		
		if (Cpasswordtype.current) {
		  const currentType = Cpasswordtype.current.type;
		  Cpasswordtype.current.type = currentType === "password" ? "text" : "password";
		}
	  };

  return (

<div className="min-h-screen bg-slate-200 dark:bg-gray-900">
	<div className="mx-auto">
		<div className="flex justify-center px-6 pt-4 ">
			<div className="w-full xl:w-3/4 lg:w-11/12 flex">
				<div className="w-full h-auto bg-white dark:bg-gray-800 hidden md:flex lg:w-5/12 justify-center rounded-l-lg">
					<Image
					src={signUpImage}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
					alt='login'
					/>


					</div>
				<div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
					<h3 className="py-4 text-2xl text-center text-black font-bold dark:text-white">Create your  Account!</h3>
					<form
					onSubmit={submitform} 
					className="px-8 pt-6 pb-8 mb-0 bg-white dark:bg-gray-800 rounded">
							<div className="mb-4  ">
								<label className="block mb-2 text-sm font-bold text-black dark:text-white" htmlFor="firstName">
                                    Full Name
                                </label>
								<input
									onChange={(e:any)=>setname(e.target.value)}
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="Muhammad saif"
                                />
							</div>

						<div className="mb-4 ">
							<label className="block mb-2 text-sm font-bold text-black dark:text-white" htmlFor="email">
                                Email
                            </label>
							<input
									onChange={(e:any)=>setemail(e.target.value)}

                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="yourmail@gmail.com"
                            />
						</div>
							<div className="mb-2 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-black dark:text-white" htmlFor="password">
                                    Password
                                </label>
								<div className='flex items-start justify-center'>
								<input
									onChange={(e:any)=>setpassword(e.target.value)}
									ref={passwordtype}
								  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								<div className='h-full cursor-pointer ml-2 mt-2 text-emerald-800' onClick={PasswordVisibility}>
   <AiFillEye size={25} /> 
</div>
								</div>
							</div>
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-bold text-black dark:text-white" htmlFor="password">
                                    confirm Password
                                </label>
								<div className='flex items-start justify-center'>
								<input
									onChange={(e:any)=>setCpassword(e.target.value)}
									ref={Cpasswordtype}
								  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								<div className='h-full cursor-pointer ml-2 mt-2 text-emerald-800' onClick={CPasswordVisibility}>
   <AiFillEye size={25} /> 
</div>
								</div>
{checkP ? <p className='text-red-500 text-sm'>
	Error : Password & Confirm Password do not match</p>
: ''
}
								
							</div>

						<div className="mb-6 mt-5 text-center">
							<button
                                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                               Create Account
                            </button>
						</div>
						<hr className="mb-6 border-t" />
						<div className=" flex flex-wrap justify-around flex-col sm:flex-row space-y-4 sm:space-y-0">
							<Link className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="/login">
								Already have an account? LogIn!
							</Link>
							<a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="#">
								Forgot Password?
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
