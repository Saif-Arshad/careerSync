import React from 'react'
import one from '../../public/image/Companies/one.png'
import two from '../../public/image/Companies/two.png'
import three from '../../public/image/Companies/three.png'
import four from '../../public/image/Companies/four.png'
import PersonOne from '../../public/image/Users/one.jpeg'
import PersonTwo from '../../public/image/Users/two.jpeg'
import PersonThree from '../../public/image/Users/three.jpeg'
import PersonFour from '../../public/image/Users/four.jpeg'
import PersonFive from '../../public/image/Users/five.jpeg'
import PersonSix from '../../public/image/Users/six.jpeg'
import Image from 'next/image'
import '@/Stylesheets/Home.css'
import Link from 'next/link'

export default function page() {
  return (
    <div className='min-h-screen  flex items-center w-full overflow-x-hidden justify-around'>
<section className=" bg-white w-full">
    <div className='w-full main-hero box-border py-24 md:py-32 min-h-screen'>
    <div className="px-12 mx-auto max-w-7xl ">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 w-full text-3xl sm:text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Find Your</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-600 lg:inline">Dream Job</span> <span>Faster With Us</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Our mission is to create products that provide opportunities for all job seekers we’re fostering a world where people have the support and resources they need to find a job that loves them back.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link href="/signin" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-emerald-500 hover:bg-emerald-700 rounded-2xl sm:w-auto sm:mb-0">
                    Get Started
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </Link>
            </div>
        </div>

    </div>
    </div>
    <section className="bg-white py-0 ">
        
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
             
                <Image
                  src={one}
                  alt='compant one'
                  height={220}
                >
                  </Image>
                <Image
                  src={two}
                  height={130}
                  alt='compant otwone'
                >
                  </Image>
                <Image
                  src={three}
                  alt='compant three'
                >
                  </Image>
                <Image
                  src={four}
                  alt='compant four'
                >
                  </Image>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section id="works" className="relative  py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-black font-extrabold mx-auto md:text-6xl lg:text-5xl">How to Land Your Next Job?</h2>
            <p className="max-w-2xl mx-auto mt-4 text-base text-gray-700 leading-relaxed md:text-2xl">
            CareerSync makes job hunting very easy.
            </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><Image alt="hello" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" className="w-full"  src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"/>
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-600 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">1</span>
                    </div>
                    <h3 className="mt-6 text-xl  text-black font-semibold leading-tight md:mt-10">Create Account</h3>
                    <p className="mt-4 text-base text-gray-600 md:text-lg">
                        Create your careerSync account by adding your name , email and password
                    </p>
                </div>
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-600 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">2</span>
                    </div>
                    <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Search For Job</h3>
                    <p className="mt-4 text-base text-gray-600 md:text-lg">
              The second step is to search for jobs using your field and location filters.
                    </p>
                </div>
                <div>
                    <div
                        className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-600 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">3</span>
                    </div>
                    <h3 className="mt-6 text-xl text-black font-semibold leading-tight md:mt-10">Apply for Job</h3>
                    <p className="mt-4 text-base text-gray-600 md:text-lg">
                    The last step is very simple just apply for jobs that meet your criteria.
                    </p>
                </div>
            </div>
        </div>
    </div>

</section>
<div className="text-gray-600  pt-8 " id="reviews">

    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

        <div className="mb-10 space-y-4 px-6 md:px-0 flex w-full justify-center">
            <h2 className="text-center text-2xl w-full md:w-2/4 font-bold text-gray-800 md:text-4xl">
                We have some Fans around the World.
            </h2>
        </div>


        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 ">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full object-cover" src={PersonOne}  alt="user avatar" width="400" height="400" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-medium text-gray-700">Daniella Doe</h6>
                        <p className="text-sm text-gray-500 ">Project Manager</p>
                    </div>
                </div>
                <p className="mt-8">CareerSync has been an absolute game-changer for me. As someone who was feeling overwhelmed by the job search process, I can not emphasize enough how much this platform simplified everything. The user interface is intuitive, making it incredibly easy to navigate through the plethora of job listings. I found my dream job within days of signing up, and I truly believe it was all thanks to CareerSync efficient search algorithm. 
                </p>
            </div>


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-whiteshadow-2xl shadow-gray-600/10 ">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full object-cover"src={PersonTwo}  alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-medium text-gray-700 ">Jane doe</h6>
                        <p className="text-sm text-gray-500 ">Marketing</p>
                    </div>
                </div>
                <p className="mt-8">Within a week of using CareerSync, I landed a job that perfectly matched my skills and career goals. I was impressed by the wide range of job listings available on the platform
                </p>
            </div>


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full object-cover" src={PersonThree}  alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-medium text-gray-700 ">Yanick Doe</h6>
                        <p className="text-sm text-gray-500 ">Developer</p>
                    </div>
                </div>
                <p className="mt-8">I was impressed by the wide range of job listings available on the platform, covering various industries and positions. The filters were particularly useful; I could easily narrow down my search based on location, industry, and job type. CareerSync made the entire job hunting process a breeze, and I am grateful for the opportunity it provided me.
                </p>
            </div>


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 ">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full object-cover" src={PersonFour}  alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-medium text-gray-700">Jane Doe</h6>
                        <p className="text-sm text-gray-500 ">Mobile dev</p>
                    </div>
                </div>
                <p className="mt-8">CareerSync exceeded my expectations in every way possible. Not only did it help me secure multiple interviews within a matter of weeks, but it also provided me with invaluable resources and support throughout the job search journey.
                </p>
            </div>


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 ">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full object-cover" src={PersonFive}  alt="user avatar" width="200" height="200" loading="lazy"/>
                    <div>
                        <h6 className="text-lg font-medium text-gray-700">Andy Doe</h6>
                        <p className="text-sm text-gray-500 ">Manager</p>
                    </div>
                </div>
                <p className="mt-8"> As a recent graduate entering the job market, I was met with uncertainty and apprehension. However, CareerSync quickly alleviated my concerns and provided me with the confidence I needed to navigate the job search process successfully.
                </p>
            </div>


            <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                <div className="flex gap-4">
                    <Image className="w-12 h-12 rounded-full object-cover" src={PersonSix}  alt="user avatar" width="400" height="400" loading="lazy" />
                    <div>
                        <h6 className="text-lg font-medium text-gray-700">Yanndy Doe</h6>
                        <p className="text-sm text-gray-500">Mobile dev</p>
                    </div>
                </div>
                <p className="mt-8">CareerSync has simplified the job hunting process in ways I never thought possible. What I love most about the platform is its simplicity and effectiveness. Unlike other job search websites that overwhelm you with endless options, CareerSync provides a curated selection of job listings tailored to your preferences.
                </p>
            </div>

        </div>
    </div>
</div>
<div className="pb-6">
    <div
        className="text-center lg:text-left max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h3 className="text-2xl md:text-3xl leading-9 font-bold md:font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            Ready to Open Doors to New Opportunities <br/>
            <span className="text-emerald-500 font-semibold text-xl ">Create CareerSync Account.</span>
        </h3>
        <div className="justify-center lg:justify-left mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex">
                <Link href=".login" target="_blank"
                    className="inline-flex items-center justify-center px-5 py-3 text-base leading-6 font-medium text-emerald-600 hover:text-emerald-500 focus:outline-none transition duration-150 ease-in-out">
                    Log In
                </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
                <Link href="/signin"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Sign In
                </Link>
            </div>
        </div>
    </div>
</div>
</section>
    </div>
  )
}
