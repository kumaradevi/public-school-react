import React from 'react'
import Map from './Map'
import Footer from './Footer'
import ContactForm from './ContactForm'
import two from "../assets/images/cla3.jpg"
function Contact() {
  return (
    <div className='bg-indigo-100 '>
      <div >
          <img src={two} alt="" className='w-screen h-[500px] object-cover' />
          <h1 className='font-bold text-4xl text-white' style={{position:"absolute",top:"300px",left:"670px"}}>CONTACT US</h1>
        </div>
      <div className='flex justify-around items-center gap-5 flex-wrap p-12'>
      <ContactForm/>
        <Map />
      </div>
      
      <Footer />
     
      
    </div>
  )
}

export default Contact