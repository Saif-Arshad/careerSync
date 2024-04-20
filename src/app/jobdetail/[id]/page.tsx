/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

function page(params: any)  {
  
const [data,setdata]= useState([])

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/job-details',
  params: {
    job_id:  `${params.params.id} `,
    extended_publisher_details: 'false'
  },
  headers: {
    'X-RapidAPI-Key': '4090cb66a7msha88ef8c2c823903p14d462jsn6331b31644fe',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};
useEffect( ()=>{
  try {
    const func =async ()=>{
    // const response = await axios.request(options);
  //  const res =  response.data
  //  console.log(res);
   
    }
    func()
  } catch (error) {
    console.error(error);
  }
},[]);

  return (
    <div>
        <h1>Hello {params.params.id} </h1>
    </div>
  )
}

export default page
