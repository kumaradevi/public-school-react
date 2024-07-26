import React from 'react'

function VideoComponent() {
    return (
        <div>

            <div className='flex justify-around p-7 flex-wrap'>
                <div className='flex flex-col'>
                    <h1 className='text-center'>School tour</h1>
                    <div className="flex justify-center items-center bg-gray-100 p-4">

                        <div className="aspect-w-16 aspect-h-9 w-full">
                            <video className="w-[400px] h-[300px]" controls>
                                <source src="path_to_your_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-center'>annual function</h1>
                    <div className="flex justify-center items-center bg-gray-100 p-4">

                        <div className="aspect-w-16 aspect-h-9 w-full">
                            <video className="w-[400px] h-[300px]" controls>
                                <source src="path_to_your_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoComponent