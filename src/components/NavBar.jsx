import React from 'react'
import { Link } from "react-router-dom"
function NavBar() {
    return (
        <div className='flex bg-indigo-400 h-[90px] justify-around items-center z-10 sticky top-0 flex-wrap'>
            
                <h2 className='text-3xl font-medium uppercase text-white'>Springdale public school</h2>
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" className='text-white md:hidden' />
</svg>

                <nav className='hidden md:flex'>
                    <ul className='flex gap-6 text-md text-white font-medium '>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About Us</Link>
                        <Link to={"/academics"}>Academics</Link>
                        <Link to={"/Admissions"}>Admissions</Link>
                        <Link to={"/faculty"}>Faculty</Link>
                        <Link to={"/students"}>Students</Link>
                        <Link to={"/gallery"}>Gallery</Link>
                        <Link to={"/contact"}>Contact Us</Link>

                    </ul>
                </nav>
            
        </div>
    )
}

export default NavBar