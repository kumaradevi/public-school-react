import React from 'react'
import two from "../assets/images/cla3.jpg"
import one from "../assets/images/ws3.jpg"
import three from "../assets/images/w2.png"
import four from "../assets/images/w7.jpg"
import StudentCouncil from './StudentCouncil'
function Students() {
  return (
    <div className='bg-indigo-50 '>
      <div>
        <div >
          <img src={two} alt="" className='w-screen h-[500px] object-cover' />
          <h1 className='font-bold text-4xl text-white' style={{ position: "absolute", top: "300px", left: "600px" }}>OUR ACHIEVEMENTS</h1>
        </div>
        <div className=' flex'>
          <div>
            <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Life At Springdale</h1>
            <ul className='px-8'>
              <li className='font-medium '><b className='text-xl pb-12'>Extracurricular Activities:</b>
                <li>Music,</li>
                <li>Dance,</li>
                <li>Art,</li>
                <li>Sports,</li>
                <li>Robotics,</li>
                <li>Debate Club,</li>
                <li>Science Club</li>
              </li>
              <li className='pt-4 font-medium'><b className='text-xl pb-12'>Clubs and Societies: </b>
                <li>Literary Society,</li>
                <li>Environmental Club,</li>
                <li>Environmental Club</li></li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Achievements</h1>
            <div className='flex px-8  gap-3 text-gray-800 font-medium text-center flex-wrap'>
              <div  >
                <div className='w-[300px] h-[200px]  '>
                  <img src={one} alt="" className='w-[240px]' />
                </div>
                <h3 className='text-xl pt-12 pb-4 '>John Smith</h3>
                <p>National Level Math Olympiad Winner</p>
              </div>

              <div className=' h-[240px]'>
                <div className='w-[300px] h-[200px] p-2'>
                  <img src={three} alt="" />
                </div>
                <h3 className='text-xl pt-12 pb-4'>Sarah Lee</h3>
                <p>Gold Medalist in State Swimming Championship</p>
              </div>
              <div>
                <div className='w-[300px] h-[200px] p-2'>
                  <img src={four} alt="" />
                </div>
                <h3 className='text-xl pt-12 pb-4'>Tech Innovators Club</h3>
                <p>Winners of Inter-School Robotics Competition</p>
              </div>
            </div>
          </div>
        </div>
        <StudentCouncil />
      </div>

    </div>
  )
}

export default Students