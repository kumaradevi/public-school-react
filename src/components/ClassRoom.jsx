import React from 'react'
import one from "../assets/images/cla2.jpg"
import two from "../assets/images/cla4.jpg"
import three from "../assets/images/cla5.jpg"


function ClassRoom() {
    return (
        <div>
            <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>A Glimpse of our interactive classrooms</h1>
           <div className='flex justify-center items-center gap-8 flex-wrap '>
            <div className='w-[400px] h-[220px]'>
                <img src={one} alt="" />
            </div>
            <div  className='w-[400px] h-[220px]'>
                <img src={two} alt="" />
            </div>
            <div className='w-[400px] h-[220px]'>
                <img src={three} alt="" />
            </div>
            
            
        </div>
        </div>
    )
}

export default ClassRoom