import React from 'react'
import one from "../assets/images/l2.jpg"
function Curriculam() {
    return (
        <div>
            <div>
                <h1 className='font-medium text-2xl text-center px-4 py-8 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>curriculam</h1>
                <div>
                    <div className='flex justify-around flex-wrap'>
                        <div>
                            <h1 className='font-medium text-2xl text-center px-4 py-8 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Primary (Grades 1-5)</h1>
                            <p>English,</p>
                            <p>Mathematics,</p>
                            <p>Science,</p>
                            <p>Social Studies,</p>
                            <p>Art,</p>
                            <p>Physical Education</p>
                        </div>
                        <div>
                            <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Secondary (Grades 6-10)</h1>
                            <p> English,</p>
                            <p>Mathematics,</p>
                            <p>Science
                                <li>Physics</li>
                                <li>Chemistry</li>
                                <li>Biology</li>
                            </p>
                            <p> Social Studies,</p>
                            <p>Computer Science, </p>
                            <p>Physical Education,</p>
                            <p>Art
                            </p>
                        </div>

                        <div>
                            <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Senior Secondary (Grades 11-12)</h1>
                            <div className='flex justify-center items-center gap-8'>

                                <div >
                                    <h2>Science Stream</h2>
                                    <p>Physics</p>
                                    <p>Chemistry</p>
                                    <p> Biology</p>
                                    <p>Mathematics</p>
                                    <p>Computer Science</p>
                                    <p>English
                                    </p>
                                </div>
                                <div>
                                    <h1>Commerce Stream</h1>
                                    <p>Accountancy</p>
                                    <p> Business Studies, </p>
                                    <p>Economics, </p>
                                    <p>Mathematics,</p>
                                    <p> English
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Curriculam