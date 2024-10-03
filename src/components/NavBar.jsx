import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ResponsiveNavbar from './ResponsiveNavbar';

function NavBar() {
    const[sidebarOpen,setSidebarOpen]=useState(false);
    return (
        <div className='sticky top-0 z-10'>
            <div className='flex bg-indigo-400 h-[90px] justify-around mx-auto items-center   flex-wrap relative '>
            
                <h2 className='text-lg md:text-3xl font-medium uppercase text-white'>Springdale public school</h2>
               

                <nav className='hidden md:flex relative'>
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
            
                <div className='text-white block md:hidden' onClick={()=>setSidebarOpen(!sidebarOpen)}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                {sidebarOpen&& <div className='absolute bg-whiteabsolute top-[100px] right-0 w-[50%] bg-white shadow-md md:hidden'><ResponsiveNavbar sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}/></div>}
       </div>
        </div>
    )
}

export default NavBar