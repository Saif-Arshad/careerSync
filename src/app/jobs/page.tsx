"use client"
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { ImLocation } from "react-icons/im";
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';



function page() {  
  const [data,setdata]= useState([])
const [title,settitle] = useState("")
const [city,setcity] = useState("")
const [country,setcountry] = useState("")

const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: `${title} in ${city}, ${country}`,
    page: '1',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': '4090cb66a7msha88ef8c2c823903p14d462jsn6331b31644fe',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

  const searchSubmit = (e:any)=>{
    e.preventDefault();
    if(!title || !country  || !city){
      toast.error('These Fields are required')
      return ;
    }
    try {
      ( async function() {
      
      // const response = await axios.request(options);
      // setdata(response.data.data)
    // console.log(response.data.data);
    toast.success(options.params.query);
    })();
     
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='min-h-screen w-full'>
      <div className='flex flex-col justify-center items-center w-full'>
    <div className="search w-8/12 mt-8">

<form onSubmit={searchSubmit} className="flex items-center space-x-2 flex-wrap">   

    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none  text-gray-500 dark:text-gray-400">
        <ImLocation size={20} />
        </div>
        <input type="text" value={country} onChange={(e:any)=>setcountry(e.target.value)} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country name" />
     
    </div>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" value={title} onChange={(e:any)=>settitle(e.target.value)} id="voice-search" className="rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title or Keyword" />
     
    </div>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none  text-gray-500 dark:text-gray-400">
        <ImLocation size={20} />
        </div>
        <input type="text" value={city} onChange={(e:any)=>setcity(e.target.value)} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City or State" />
     
    </div>
    <button type="submit" className="rounded-lg inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-emerald-500 border border-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>

    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="true"
        >
          Options
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-10 w-full h-full bg-black opacity-50 cursor-default"
        ></div>
      )}

      <div
        className={`absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          isOpen ? 'block' : 'hidden'
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            
            id="menu-item-1"
          >
            Support
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            
            id="menu-item-2"
          >
            License
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
              role="menuitem"
              
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>

</form>
  
    </div>
      <h1>Hi i am from job</h1>
      </div>
    </div>
  )
}

export default page
