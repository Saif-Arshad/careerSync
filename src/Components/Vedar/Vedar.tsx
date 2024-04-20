import React from 'react'
import './vedar.css'
function Vedar(props:any) {
  return (
      <>
      <div className='w-full  relative items-center flex flex-col'>
      <div id="loader">
  <div className="ls-particles ls-part-1"></div>
  <div className="ls-particles ls-part-2"></div>
  <div className="ls-particles ls-part-3"></div>
  <div className="ls-particles ls-part-4"></div>
  <div className="ls-particles ls-part-5"></div>
  <div className="lightsaber ls-left ls-green"></div>
  <div className="lightsaber ls-right ls-red"></div>
</div>
<p className="mt-24 flex flex-col items-center">
  {props.show === false ? (
    <>
      <span className='text'>Search Your New Job with </span>
      <span className='font-semibold text-emerald-600 text-lg'>CareerSync</span>
    </>
  ) : (
    <>
    <span className='font-semibold mt-9 md:mt-0 text-center md:text-lg'>We cannot find any jobs for a {props.search}</span>
    <span className='font-semibold text-emerald-600 text-lg'>Search Using other Keyword</span>
    </>

  )}
</p>
  </div>
</>
)
}

export default Vedar
