/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React,{useState,useRef} from 'react'
import Image from 'next/image'
import loginImage from '../../../public/image/SVG/Login/secure-login-animate.svg'
import Link from 'next/link'
import { signIn } from 'next-auth/react';
import Loading from "@/Components/AuthenticationLoader/Loading"
import { AiFillEye } from "react-icons/ai";
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


export default function page() {
	const router = useRouter()
	const [name,setname] =useState()
	const [email,setemail] =useState()
	const [password,setpassword] =useState()
	const [laoder,setlaoder]=useState(false)


	const passwordtype = useRef<HTMLInputElement>(null);

	
const submitform = (e:any) => {
	e.preventDefault()
	setlaoder(true)
	if (!name || !email || !password) {
		toast.error("All fields are required")
	setlaoder(false)
		return;
	}
	try {
	const func = async ()=>{


		const login=  await signIn('credentials', {
			email,
			password,
			redirect: false,
		  })
		  if(login?.error){
			toast.error("Invalid login")
	        setlaoder(false)

			return
		  }
		  toast.success('login successful Now you can access Job Section')
		  router.push('/')
		  window.location.reload()
		}
		  func()
		} 
		catch (error) {
		  console.log(error);
		  
		}
	
	};
	const togglePasswordVisibility = () => {
		if (!password) {
		  toast.error("Please enter a password first!")
		  return;
		}
		
		if (passwordtype.current) {
		  const currentType = passwordtype.current.type;
		  passwordtype.current.type = currentType === "password" ? "text" : "password";
		}
	  };

  return (

<div className="min-h-screen bg-white ">
	<div className="mx-auto">
		<div className="flex justify-center px-6 pt-4 ">
			<div className="w-full xl:w-3/4 lg:w-11/12 flex md:flex-row flex-col">
				<div className="w-full h-auto bg-white flex lg:w-5/12 rounded-l-lg">
					<Image
					src={loginImage}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
					alt='login'
					/>


					</div>
				<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
					<h3 className=" py-4 text-lg md:text-2xl capitalize text-center text-emerald-700 font-bold">Login to your  Account!</h3>
					<form
					onSubmit={submitform} 
					className="px-8 pt-6 pb-8 mb-0 bg-white rounded">
							<div className="mb-4  ">
								<label className="block mb-2 text-sm font-semibold 	 text-black" htmlFor="firstName">
                                    Full Name
                                </label>
								<input
									onChange={(e:any)=>setname(e.target.value)}
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded ring-1 ring-emerald-200 appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="Muhammad saif"
                                />
							</div>

						<div className="mb-4 ">
							<label className="block mb-2 text-sm font-semibold text-black " htmlFor="email">
                                Email
                            </label>
							<input
									onChange={(e:any)=>setemail(e.target.value)}

                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border ring-1 ring-emerald-200  rounded appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="yourmail@gmail.com"
                            />
						</div>
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm font-semibold text-black " htmlFor="password">
                                    Password
                                </label>
								<div className='flex relative items-start justify-center'>
								<input
									onChange={(e:any)=>setpassword(e.target.value)}
									ref={passwordtype}
								  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  ring-1 ring-emerald-200  border  rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								<div className=' absolute top-1 h-5 bg-white  right-4  cursor-pointer text-emerald-800' onClick={togglePasswordVisibility}>
   <AiFillEye size={25} /> 
</div>
								</div>
							</div>

						<div className="mb-6 mt-5 text-center">
						{laoder ? <Loading/> : 
						
							<button
                                className="w-full px-4 py-2 font-bold text-white bg-emerald-700 rounded-full hover:bg-emerald-800 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                               Login
                            </button>
}
						</div>
						<hr className="mb-6 border-t" />
						<div className=" flex flex-wrap justify-around flex-col sm:flex-row space-y-4 sm:space-y-0">
							<Link className="inline-block text-sm text-blue-500  align-baseline hover:text-blue-800"
								href="/signup">
								Don&apos;t  have an account? SignUp!
							</Link>
							<Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								href="/forget-password">
								Forgot Password?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}


