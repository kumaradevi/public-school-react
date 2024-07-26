import React from 'react'
import one from "../assets/images/sp.jpg"
import two from "../assets/images/vice.jpg"
import three from "../assets/images/secretary.jpg"
function StudentCouncil() {
  return (
    <div className='bg-indigo-50'>
        <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>STUDENT COUNCIL</h1>
        <div className='flex justify-center items-center gap-10  p-4  font-medium text-center flex-wrap'>
            <div  >
                <div><img src={one} alt="" /></div>
                <div className=''>
                    <h2 className=' text-2xl pb-4'>President</h2>
                    <p className='text-gray-800 text-md'>Amy Parker,</p>
                    <span className='text-gray-700'>Grade 12</span>
                </div>
            </div>

            <div>
                <div><img src={two} alt="" className='w-[230px] h-[225px] object-fill'/></div>
                <div>
                    <h2 className=' text-2xl pb-4'>Vice President</h2>
                    <p className='text-gray-800 text-md'>Rajiv Mehta,</p>
                    <span className='text-gray-700'>Grade 11</span>
                </div>
            </div>

            <div>
                <div><img src={three} alt="" className='w-[230px] h-[225px] object-fill'/></div>
                <div>
                    <h2 className=' text-2xl pb-4'>Secretary</h2>
                    <p className='text-gray-800 text-md'>Lisa Wong,</p>
                    <span className='text-gray-700'>Grde 10</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default StudentCouncil