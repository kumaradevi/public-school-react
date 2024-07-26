import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sports from "../assets/images/b1.jpg"
import science from "../assets/images/b3.jpg"
import cultural from "../assets/images/b6.jpg"
import Footer from './Footer';
import two from "../assets/images/cla3.jpg"

function Home() {

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    }
  };
  return (
    <div className='w-screen'>
      <div >
          <img src={two} alt="" className='w-screen h-[500px] object-cover' />
          </div>
      <div className='w-screen h-[300px] object-cover py-12'>
        <Carousel showDots={true} responsive={responsive}  >
          <div >
            <img src={sports} alt="no-image"  className='w-screen h-[500px] object-contain' />

          </div>
          <div>
            <img src={science} alt="no-image"  className='w-screen h-[500px] object-contain'/>
          </div>
          <div>
            <img src={cultural} alt="no-image" className='w-screen h-[500px] object-contain' />
          </div>



        </Carousel>
      
      <div style={{ position: "absolute", top: "200px", left: "520px" }} className='text-white'>
        <h1 className='font-bold text-6xl text-center uppercase p-6'>Introduction</h1>
       
      </div>
      <p className='font-medium text-xl pt-10 text-center px-32 pb-12'>"Welcome to Springdale Public School, where we nurture young minds for a brighter future.We are providing
        quality education and holistic development to the students."</p>
        <Footer/>
    </div>
    
    </div>

  )
}

export default Home