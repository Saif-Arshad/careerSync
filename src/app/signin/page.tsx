/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React,{useState,useRef} from 'react'
import Image from 'next/image'
import signUpImage from '../../../public/image/SVG/signup/sign-up-animate.svg'
import Link from 'next/link'
import { AiFillEye } from "react-icons/ai";
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';
import Loading from "@/Components/AuthenticationLoader/Loading"
export default function page() {
		
	const passwordtype = useRef<HTMLInputElement>(null);
	const Cpasswordtype = useRef<HTMLInputElement>(null);
	const [Cpassword,setCpassword] =useState()
	const [loader,setloader]= useState(false)
	const [checkP ,setcheckP] =useState(false)
	const router = useRouter();
//Credentials

	const [name,setname] =useState()
	const [email,setemail] =useState()
	const [password,setpassword] =useState()

	
const submitform = (e:any) => {
	e.preventDefault()
	setloader(true)
	if (!name || !email || !password || !Cpassword) {
		toast.error("All fields are required")
	setloader(false)
		return;
	}
	if(password !== Cpassword){
		setcheckP(true)
	setloader(false)
		return;
	}
	else{
		setcheckP(false)
	setloader(true)

	}
	try {
		const postinfData = async ()=>{
			const checkAlready = await fetch ('/api/Authentication/userexist',{
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify({email})
			});
			const { userExists } = await checkAlready.json();
			if (userExists) {
				toast.error("Email Already Exist Try Another Email to signIn");
	setloader(false)

				return;
			}
		
			const res = await fetch('/api/Authentication/signin',{
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify({name,email,password})
			})
			if (res.ok) {
				toast.success("Account Created Sucessfully")
				router.push("/login");
			  }
			  else {
				toast.error("Something went wrong");
				console.log("User Failed");
			  }
	setloader(false)
			  
			}
		postinfData()
		
	} catch (error:any) {
			console.log(error);
			throw error.message
			
	}

	
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

<div className="min-h-screen white ">
	<div className="mx-auto">
		<div className="flex justify-center px-6 ">
			<div className="w-full xl:w-3/4 lg:w-11/12 flex flex-col md:flex-row">
				<div className="w-full h-auto bg-white flex lg:w-5/12 justify-center rounded-l-lg">
					<Image
					src={signUpImage}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
					alt='login'
					/>


					</div>
				<div className="w-full lg:w-7/12 bg-white p-5">
					<h3 className="pt-4 text-lg md:text-2xl text-center text-emerald-700 font-bold">Create your  Account!</h3>
					<form
					onSubmit={submitform} 
					className="px-8 pt-6 pb-4 mb-0 bg-white rounded">
							<div className="mb-2  ">
								<label className="block mb-2 text-sm text-semibold  text-black " htmlFor="firstName">
                                    Full Name
                                </label>
								<input
									onChange={(e:any)=>setname(e.target.value)}
                                    className="w-full ring-1 ring-emerald-200  px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="Muhammad saif"
                                />
							</div>

						<div className=" ">
							<label className="block mb-2 text-sm text-semibold  text-black" htmlFor="email">
                                Email
                            </label>
							<input
									onChange={(e:any)=>setemail(e.target.value)}

                                className="w-full ring-1 ring-emerald-200  px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="yourmail@gmail.com"
                            />
						</div>
						<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm text-semibold  text-black " htmlFor="password">
                                    Password
                                </label>
								<div className='flex relative items-start justify-center'>
								<input
									onChange={(e:any)=>setpassword(e.target.value)}
									ref={passwordtype}
								  className="w-full ring-1 ring-emerald-200  px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border  rounded  appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								<div className=' absolute top-1 h-5 bg-white  right-4  cursor-pointer text-emerald-800' onClick={PasswordVisibility}>
   <AiFillEye size={25} /> 
</div>
								</div>
							</div>
							<div className="mb-4 md:mr-2 md:mb-0">
								<label className="block mb-2 text-sm text-semibold  text-black" htmlFor="password">
                                    confirm Password
                                </label>
								<div className='flex items-start relative justify-center'>
								<input
									onChange={(e:any)=>setCpassword(e.target.value)}
									ref={Cpasswordtype}
								  className="w-full ring-1 ring-emerald-200  px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border  rounded  appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="******************"
                                />
								<div className=' absolute top-1 h-5 bg-white  right-4  cursor-pointer text-emerald-800' onClick={CPasswordVisibility}>
   <AiFillEye size={25} /> 
</div>
								</div>
{checkP ? <p className='text-red-500 text-sm'>
	Error : Password & Confirm Password do not match</p>
: ''
}
								
							</div>

						<div className="mb-6 mt-5 text-center">
							{loader ? <Loading/> : 
							<button
                                className="w-full px-4 py-2 font-bold text-white bg-emerald-700 rounded-full hover:bg-emerald-800 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                               Create Account
                            </button>
							}
						</div>
						<hr className="mb-6 border-t" />
						<div className=" flex flex-wrap justify-around flex-col sm:flex-row space-y-4 sm:space-y-0">
							<Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								href="/login">
								Already have an account? LogIn!
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
