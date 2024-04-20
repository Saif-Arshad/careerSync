import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen w-full flex justify-center'>
      <div className='w-11/12 md:10/12 mt-10 md:mt-20'>
      <h1 className='text-xl md:text-4xl font-semibold md:font-bold '>About CareerSync</h1>
      <p className='mt-9 w-12/12 md:w-10/12 '>
      So, what is  <span className='font-semibold text-emerald-600 text-lg'>CareerSync</span>? We’re a thriving community for workplace conversations, driven by a simple mission: helping people everywhere find jobs and companies they love.

But the way we do it? That’s not so simple.

Every day, we’re inspired by a vision to make positive workplace change through radical transparency. Through the products we make and the communities we create, we’re breaking down barriers that lead to discrimination, pay gaps, and toxic work environments. Together, we’re fostering a world where people have the support and resources they need to find a job that loves them back.
      </p>
      <div className='flex flex-col items-center'>
      <h1 className='text-xl mt-20 md:text-4xl font-semibold md:font-bold'>What we do</h1>
      <p className='mt-9 w-12/12 md:w-7/12 text-center'>Wherever you are on your career journey, CareerSync makes it easier for workers and companies to find the perfect match.</p>
      </div>
      </div>
    </div>
  )
}
