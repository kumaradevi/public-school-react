import React from 'react'
import SciencePic from './SciencePic'
import SportsPic from './SportsPic'
import CulturalFestPic from './CulturalFestPic'
import ClassRoom from './ClassRoom'
import Library from './Library'
import two from "../assets/images/cla3.jpg"
import VideoComponent from './VideoComponent'
function Gallery() {
  return (
    <div className='bg-indigo-50 '>
       <div >
          <img src={two} alt="" className='w-screen h-[500px] object-cover' />
          <h1 className='font-bold text-4xl text-white' style={{position:"absolute",top:"300px",left:"650px"}}>OUR GALLERY</h1>
        </div>
      <div >
      <SciencePic/>
      <SportsPic/>
      <CulturalFestPic/>
      <ClassRoom/>
      <Library/>
      <VideoComponent/>
      </div>
    </div>
  )
}

export default Gallery