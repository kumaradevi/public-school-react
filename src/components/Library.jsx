import React from 'react'
import one from "../assets/images/l.jpg"
import two from "../assets/images/l2.jpg"
import three from "../assets/images/l3.jpg"
import four from "../assets/images/l4.jpg"
function Library() {
    return (
        <div>
            <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Library</h1>
            <div className='flex justify-center items-center gap-8 p-4 flex-wrap'>
                <div>
                    <img src={one} alt="" />
                </div>
                <div>
                    <img src={two} alt="" />
                </div>
                <div>
                    <img src={three} alt="" />
                </div>
                <div>
                    <img src={four} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Library