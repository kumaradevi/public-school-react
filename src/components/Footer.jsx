import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-gray-900 text-white flex justify-around items-center text-center'>
                <div className='p-8'>
                    <h1 className='text-2xl font-bold p-5'>Address </h1>
                    <p>Springdale Public School ,</p><p>123 Education Lane,</p>Cityville,<p></p> State,<p>ZIP Code</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold p-5' >Phone</h1>
                    <p>+1 (123) 456-7890</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold p-5'>Email</h1>
                    <p>info@springdale.edu</p>
                </div>

            </div>
            <div>
                <p className='text-white bg-gray-900 text-center p-4'>&copy;Springdale public school</p>
            </div>

        </>
    )
}

export default Footer