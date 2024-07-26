import React from 'react'

function ContactForm() {
  return (
    <div className='w-[400px] h-[350px] bg-transparent p-4' style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",borderRadius:"10px"}}>
<form action="">
    <div className='flex flex-col justify-between items-center w-[400px] gap-7 '>
    <h1 className='font-medium text-xl p-2 uppercase text-indigo-700'>Contact form</h1>
    <input type="text"  placeholder='Enter your name here' className='capitalize p-2' style={{width:"80%"}}/>
    <input type="email" placeholder='Enter your email here'className='capitalize p-2' style={{width:"80%"}}/>
    <input type="textarea" placeholder='your message here' className='capitalize p-2' style={{width:"80%"}}/>
    <button className='border bg-indigo-700 p-2 text-white capitalize font-medium '>submit</button>
    </div>
</form>

    </div>
  )
}

export default ContactForm