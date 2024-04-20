/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Link from 'next/link';
import { useState } from 'react';
import { ImLocation } from "react-icons/im";
import React from 'react';
// import jsonData from '../../file.json'
import axios from 'axios';
import { CgAddR } from "react-icons/cg";
import Vedar from '@/Components/Vedar/Vedar';
import toast from 'react-hot-toast';

function Page() { 
  const [data, setData] = useState([]); 
  // const [data, setData] = useState(jsonData); 
  const [filter, setFilter] = useState(false);
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  // filter states  
  const [postingdate, setPostingDate] = useState("all");
  const [requirement, setRequirement] = useState("");
  const [jobType, setJobType] = useState("");
  const [employment, setEmployment] = useState("");
  
// pagination  

  const [currentPage,setCurrentPage] = useState(1);

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: `${title} in ${city}, ${country}`,
      page: currentPage,
      num_pages: '1',
      date_posted: postingdate,
      remote_jobs_only: jobType,
      employment_types: employment,
      job_requirements: requirement
    },
    headers: {
      'X-RapidAPI-Key': '4090cb66a7msha88ef8c2c823903p14d462jsn6331b31644fe',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const searchSubmit = async (e?: any) => {
    if (e) e.preventDefault();
    setData([]); 
    if (!title || !country || !city) {
      toast.error('These Fields are required');
      return;
    }
    try {
      const response = await axios.request(options);
      if (!response) {
        alert("Something went wrong");
        return;
      }
      
      const notdata = response.data;
      const finaldata = notdata.data;
      setData(finaldata); 
      console.log(data);
        console.log(notdata);
        
    } catch (error:any) {
      // throw error.message;
      console.log(error);
      
    }
  };
  
  const moreFilter = () => {
    setFilter(true);
  };
  const prev = () => {
    setCurrentPage(currentPage - 1)  
    searchSubmit(); 

  }
  const next = () => {
    setCurrentPage(currentPage + 1)
    searchSubmit(); 
  }
  

  return   (
    <div className='min-h-screen flex flex-col items-center w-full'>
      <div className="search w-11/12  lg:w-8/12 mt-8 flex flex-col items-center ">
        <form onSubmit={searchSubmit} className="flex items-center flex-col gap-y-5 justify-center flex-wrap">   
          <div className='flex items-center gap-x-3 gap-y-2 justify-center flex-wrap'>
            <div className="relative w-32 sm:w-40">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none  text-gray-500 dark:text-gray-400">
                <ImLocation size={20} />
              </div>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country name" />
            </div>
            <div className="relative w-36 sm:w-52">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="voice-search" className="rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title or Keyword" />
            </div>
            <div className="relative w-32 sm:w-40">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none  text-gray-500 dark:text-gray-400">
                <ImLocation size={20} />
              </div>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City or State" />
            </div>
          </div>

          <button type="submit" className="rounded-lg w-6/12 inline-flex justify-center items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-emerald-500 border border-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
          </button>

          {!filter ?
            <div className='w-full cursor-pointer flex justify-start  text-emerald-600'>
              <button onClick={moreFilter}  type='button' className='flex gap-x-1 justify-start items-center'>
                <CgAddR  size={20}/>
                <h4 className='text-sm md:text-normal '>Add More Filters </h4>
              </button>
            </div>
            :
            <div className='w-full flex justify-start items-center flex-wrap gap-x-3 gap-y-2'>
              <div className='flex flex-col'>
                <label htmlFor="date" className='font-semibold'>Date Posted</label>
                <select id="date"  onChange={(e) => setPostingDate(e.target.value)}   className='border-2 text-sm rounded-lg border-emerald-500 mt-2 outline-none'>
                  <option value="all">all</option>
                  <option value="today">today</option>
                  <option value="3days">3days</option>
                  <option value="week">week</option>
                  <option value="month">month</option>
                </select>
              </div>
              <div className='flex flex-col items-center'>
                <label htmlFor="requirements" className='font-semibold'>Requirement</label>
                <select id="requirements" onChange={(e) => setRequirement(e.target.value)}  className='border-2 text-sm rounded-lg border-emerald-500 mt-2 outline-none'>
                  <option value="">Select Experience</option>
                  <option value="under_3_years_experience">under 3 years experience</option>
                  <option value="more_than_3_years_experience">more than 3 years experience</option>
                  <option value="no_experience">no experience</option>
                  <option value="no_degree">no degree</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="remote" className='font-semibold'>Job Type</label>
                <select id="remote"  onChange={(e) => setJobType(e.target.value)}  className='border-2 text-sm rounded-lg border-emerald-500 mt-2 outline-none'>
                  <option value="false">OnSite</option>
                  <option value="true">Remote</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="employment" className='font-semibold'>Employment</label>
                <select id="employment"  onChange={(e) => setEmployment(e.target.value)}  className='border-2 text-sm rounded-lg border-emerald-500 mt-2 outline-none'>
                  <option value="">Select Employment</option>
                  <option value="FULLTIME">FullTime</option>
                  <option value="CONTRACTOR">Contractor</option>
                  <option value="PARTTIME">PartTime</option>
                  <option value="INTERN">Intern</option>
                </select>
              </div>
            </div>
          }
        </form>
      </div>
  
     <div className='w-11/12 mt-10 flex justify-center items-center '>
      {data.length>0 ? 
       <div className="Maincard flex flex-row flex-wrap gap-x-10 gap-y-6  justify-center ">

{
    data.map((item:any, index:any) => (
          <div key={index} id={item.job_id} className='Card-item w-12/12 md:w-5/12 bg-slate-50 border border-emerald-50 rounded-lg px-4 py-5'>
           <div className='top flex justify-between '>
           <p>{item.job_posted_at_datetime_utc.substring(0, 10)}</p>

           {item.job_is_remote?<span className='bg-emerald-500 px-2 py-1 rounded-xl text-white font-semibold box-border' >Remote</span>:<span className='bg-emerald-500 px-2 py-1 rounded-xl text-white font-semibold box-border' >OnSite</span> }
           </div>
        <Link href={`/jobdetail/${item.job_id}`}>   <h1 className='text-xl font-semibold hover:underline mt-3'>{item.job_title}</h1></Link> 
            <div className='company flex justify-between px-3 mt-2  text-gray-600'>
            <span>{item.employer_name}</span>
              <span>{item.job_city}</span>

            </div>
            <p className='mt-4'>{item.job_description.length > 150 ?  `${item.job_description.substring(0,134)}...`: item.job_description }</p>

            <div className="flex gap-4 mt-8">

<Link href={item.job_apply_link} target='_blank' className="px-6 py-2 min-w-[120px] text-center text-white bg-emerald-500  border border-emerald-500  rounded active:text-violet-500 hover:bg-transparent hover:text-emerald-500  focus:outline-none focus:ring"
  >
  Apply Now
</Link>

<Link className="px-6 py-2 min-w-[120px] text-center text-emerald-500  border border-emerald-500  rounded hover:bg-emerald-500  hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
 href={`/jobdetail/${item.job_id}`}>
  view
</Link>

</div>
            

          </div>
 ))
}

          </div>
 : <Vedar/>}
     </div>



     <div className="flex mt-20">
      { currentPage===1 ? "" : 
  <button onClick={prev  } className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    Previous
  </button>
 }
 {
  data.length ===10 ?
<button  onClick={next} className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </button>
  : ""
}
</div>
    </div>
  );
}

export default Page; 
