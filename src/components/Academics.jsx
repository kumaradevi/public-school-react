import React from 'react'
import two from "../assets/images/cla3.jpg"
import Curriculam from './Curriculam'
function Academics() {
  return (
    <div className='bg-indigo-50'>
      <div >
          <img src={two} alt="" className='w-screen h-[500px] object-cover' />
          <h1 className='font-bold text-4xl text-white' style={{position:"absolute",top:"300px",left:"640px"}}>ACADEMICS</h1>
        </div>
      <Curriculam/>
      <div className='flex justify-around item-center'>
      <div>
        <h1 className='font-medium text-2xl text-center px-4 py-8 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Teaching Methodologies:</h1>
        <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles</p>
      </div>
      <div>
        <h1 className='font-medium text-2xl text-center px-4 py-8 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Educational Resources:</h1>
        <p className='pb-8'>Digital classrooms, interactive learning modules, and access to online educational platforms</p>
      </div>
    </div>
    </div>
  )
}

export default Academics