import React from 'react'
import one from '../../../public/image/Companies/one.png'
import two from '../../../public/image/Companies/two.png'
import three from '../../../public/image/Companies/three.png'
import four from '../../../public/image/Companies/four.png'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='min-h-screen w-full overflow-x-hidden flex justify-center'>
      <div className='w-11/12 md:10/12 mt-10 md:mt-20'>
      <h1 className='text-2xl md:text-4xl font-semibold md:font-bold '>About CareerSync</h1>
      <p className='mt-9 w-12/12 md:w-10/12 '>
      So, what is  <span className='font-semibold text-emerald-600 text-lg'>CareerSync</span>? We’re a thriving community for workplace conversations, driven by a simple mission: helping people everywhere find jobs and companies they love.

But the way we do it? That’s not so simple.

Every day, we’re inspired by a vision to make positive workplace change through radical transparency. Through the products we make and the communities we create, we’re breaking down barriers that lead to discrimination, pay gaps, and toxic work environments. Together, we’re fostering a world where people have the support and resources they need to find a job that loves them back.
      </p>

      <section className="bg-white py-0 dark:bg-dark ">
      <h1 className='text-2xl mt-20 md:text-4xl text-center font-semibold md:font-bold'>Trusted By World Class Companies</h1>
        
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
      <div className='flex flex-col items-center'>
      <h1 className='text-2xl mt-20 md:text-4xl font-bold'>What we do</h1>
      <p className='mt-9 w-12/12 md:w-7/12 text-center'>Wherever you are on your career journey, CareerSync makes it easier for workers and companies to find the perfect match.</p>
      <p className='text-center mt-4 w-12/12 md:w-10/12'>
      At careerSync, our mission is to help people get jobs. We have more than ~13,000 global employees passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workplace that strives to create the best experience for job seekers.
      </p>
      </div>
      
   
        <div
   className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-bold md:font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
        <span className="block">Ready to get started?</span>
        <span className="block font-bold  bg-emerald-500 bg-clip-text text-lg mt-3 md:mt-0 md:text-xl text-transparent">Start With Creating Your Account</span>
    </h2>
    <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
        <Link href="/signin"
           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10">Get
            started
        </Link>
    </div>
</div>
      </div>
    </div>
  )
}
