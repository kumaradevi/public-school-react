import React from 'react'
import two from "../assets/images/cla3.jpg"
import one from "../assets/images/pr.jpg"
import three from "../assets/images/vp.jpg"
import four from "../assets/images/maths.jpg"
import five from "../assets/images/sci.jpg"
import six from "../assets/images/cs.jpg"
import seven from "../assets/images/eng.jpg"
function Faculty() {
  return (
    <div>
      <div >
        <img src={two} alt="" className='w-screen h-[500px] object-cover' />
        <h1 className='font-bold text-4xl text-white' style={{ position: "absolute", top: "300px", left: "670px" }}>FACULTY</h1>
      </div>
      {/*<div className='flex justify-around items-center'></div>*/}
      <div>
        <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Our  Faculties </h1>
      </div>
      <div className='flex justify-center items-center p-12 text-center gap-12 flex-wrap'>
        <div className='flex flex-col  '>
          <div>
            <img src={one} alt="" className='border-4 border-indigo-900'/>
          </div>
          <div  >
            <h1 className='font-medium text-3xl p-3 '>John Doe</h1>
            <h3 className='text-2xl font-medium text-gray-800 p-2'>Principal,</h3>
            <p> M.Ed, </p><span>20 years of experience in educational administration</span>
          </div>
        </div>


        <div className='flex flex-col  '>
          <div>
            <img src={three} alt="" />
          </div>
          <div >
            <h1 className='font-medium text-3xl p-3'>Jane Smith</h1>
            <h3 className='text-2xl font-medium text-gray-800 p-2'>Vice Principal,</h3>
            <p> M.Sc in Physics,</p> <span> 15 years of teaching experience</span>
          </div>
        </div>

       
      </div>
      <div className='flex justify-center items-center p-8 text-center gap-12 flex-wrap'>
        
        <div className='flex flex-col  '>
          <div>
            <img src={five} alt="" className='border-4 border-indigo-900'/>
          </div>
          <div >
            <h1 className='font-medium text-3xl p-3 '>Emily Johnson</h1>
            <h3 className='text-2xl font-medium text-gray-800 p-2'>English Teacher,</h3>
            <p>  M.A in English,</p> <span> 10 years of teaching experience</span>
            
          </div>
        </div>


        <div className='flex flex-col  '>
          <div>
            <img src={four} alt="" className='border-4 border-indigo-900' />
          </div>
          <div >
            <h1 className='font-medium text-3xl p-3'>Michael Brown</h1>
            <h3 className='text-2xl font-medium text-gray-800 p-2'>Mathematics Teacher,</h3>
            <p> M.Sc in Mathematics, </p> <span> 8 years of teaching experience</span>
           
          </div>
        </div>


        <div className='flex flex-col  '>
          <div>
            <img src={seven} alt="" className='border-4 border-indigo-900'/>
          </div>
          <div >
            <h1 className='font-medium text-3xl p-3 '>Sophia Davis</h1>
            <h3 className='text-2xl font-medium text-gray-800 p-2'>Science Teacher,</h3>
            <p> M.Sc in Chemistry,</p> <span> 12 years of teaching experience</span>
            
          </div>
        </div>

        
        <div className='flex flex-col  '>
          <div>
            <img src={six} alt="" className='border-4 border-indigo-900'/>
          </div>
          <div >
            <h1 className='font-medium text-3xl p-3'>David Wilson</h1>
            <h3 className='text-2xl font-medium text-gray-800 p-2'>Computer Science Teacher, </h3>
            <p> B.Tech in Computer Science,  </p> <span> 5 years of teaching experience</span>

          
          </div>
        </div>


      </div>
    </div>
  )
}

export default Faculty