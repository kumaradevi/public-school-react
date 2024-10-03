import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveNavbar = ({sidebarOpen,setSidebarOpen}) => {
  return (
    <div>
<nav className='block md:hidden relative '>
                    <ul className='flex  flex-col gap-6 text-md  font-medium px-3 '>
                        <Link to={"/"} onClick={()=>setSidebarOpen(false)}>Home</Link>
                        <Link to={"/about"} onClick={()=>setSidebarOpen(false)}>About Us</Link>
                        <Link to={"/academics"} onClick={()=>setSidebarOpen(false)}>Academics</Link>
                        <Link to={"/Admissions"} onClick={()=>setSidebarOpen(false)}>Admissions</Link>
                        <Link to={"/faculty"} onClick={()=>setSidebarOpen(false)}>Faculty</Link>
                        <Link to={"/students"} onClick={()=>setSidebarOpen(false)}>Students</Link>
                        <Link to={"/gallery"} onClick={()=>setSidebarOpen(false)}>Gallery</Link>
                        <Link to={"/contact"} onClick={()=>setSidebarOpen(false)}>Contact Us</Link>

                    </ul>
                </nav>

    </div>
  )
}

export default ResponsiveNavbar