import React from 'react'

function Map() {
  return (
    <div className='flex justify-center items-center p-12 '>
         <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086877312304!2d144.96332!3d-37.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1599294413761!5m2!1sen!2sus"
    width="620"
    height="350"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen
    aria-hidden="false"
    tabIndex={0}
  ></iframe>
    </div>
  )
}

export default Map