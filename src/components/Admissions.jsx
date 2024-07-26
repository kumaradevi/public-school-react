import React from 'react'
import two from "../assets/images/cla3.jpg"
function Admissions() {
  return (
    <div>
      <div >
          <img src={two} alt="" className='w-screen h-[500px] object-cover' />
          <h1 className='font-bold text-4xl text-white' style={{position:"absolute",top:"300px",left:"680px"}}>ADMISSIONS</h1>
        </div>
        <div className='flex flex-col gap-12 justify-center items-center p-12 text-center'>
      <div >
        <h1 className='text-3xl uppercase font-medium text-indigo-900' style={{textDecoration:"underline",textUnderlineOffset:"4px"}}>
          Process:
        </h1>
        <p className='text-gray-900 pt-8 text-lg'>Admission forms are available for download. Submit the completed form along with required documents at the school office</p>
      </div>
      <div>
        <h1 className='text-3xl uppercase font-medium text-indigo-900' style={{textDecoration:"underline",textUnderlineOffset:"4px"}}>Criteria: </h1>
        <p className='text-gray-900 pt-8 text-lg'>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      </div>
      <div>
        <h1 className='text-3xl uppercase font-medium text-indigo-900' style={{textDecoration:"underline",textUnderlineOffset:"4px"}}>Important Dates</h1>
        <ul className='text-gray-900 pt-8 text-lg font-medium text-l'>
          <li>Admission Form Availability: <span className='text-indigo-600'>March 1st</span></li>
          <li>Last Date for Submission: <span className='text-indigo-600'>March 31st</span></li>
          <li>"Entrance Test: <span className='text-indigo-600'>April 15th</span></li>
          <li>"Announcement of Results: <span className='text-indigo-600'>April 30th</span></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Admissions