import React from 'react'
import two from "../assets/images/cla3.jpg"
function About() {
  return (
    <div  className='bg-indigo-50' >

      <div >
          <img src={two} alt="" className='w-screen h-[500px] object-cover' />
          <h1 className='font-bold text-4xl text-white' style={{position:"absolute",top:"300px",left:"650px"}}>ABOUT US</h1>
        </div>
<div className='flex flex-col p-12 m-8 text-center'>
      <h1 className='text-3xl font-bold uppercase pb-8 text-center text-amber-500'>History</h1>
      <p className='text-lg font-medium text-gray-800 pb-14'>"Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."
      </p>
      <div className='flex justify-around items-center'>
        <div>
      <h1 className='text-3xl font-bold uppercase pb-8 text-center text-amber-500' >Vision</h1>
      <p className='text-lg  text-gray-800 pb-14'> "To create a learning environment that fosters academic excellence, critical thinking, and ethical values."
      </p>
      </div>
      <div>
      <h1 className='text-3xl font-bold uppercase pb-8 text-center text-amber-500'>Mission</h1>
      <p className='text-lg  text-gray-800 pb-14'>"To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."
      </p>
      </div>
      </div>
      <div className='flex flex-col justify-center items-center pt-14'>
      <h1 className='text-3xl font-bold uppercase pb-8 text-amber-500'>Principal's Message</h1>
      <p className='text-lg  text-gray-800 pb-14'>"At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.The purpose of 
        education is to make good human beings with skill and expective enlighted human beings can be created by teachers"</p>
      </div>
      <div className='text-center'>
      <h1 className='text-3xl font-bold uppercase pb-8 text-amber-500'>Infrastructure and Facilities</h1>
      
      <div>
      <ul className='flex flex-col '>
        <li>"State-of-the-art science and computer labs"</li>
        <li>"Spacious and well-equipped classrooms"</li>
        <li>"Library with a vast collection of books and digital resources"
        </li>
        <li>"Sports facilities including a playground, gymnasium, and swimming pool"
        </li>
      </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default About