import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../assets/images/s-1.jpg"
import two from "../assets/images/s2.jpg"
import three from "../assets/images/s3.jpg"
import four from "../assets/images/s4.jpg"
import five from "../assets/images/s5.jpg"
import six from "../assets/images/s6.jpg"
import seven from "../assets/images/s7.jpg"
function SportsPic() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1249 },
            items: 3
           
        },
        tablet: {
            breakpoint: { max: 1249, min: 798 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 798, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{textDecoration:"underline",textUnderlineOffset:"4px"}}>Sports Day</h1>
            <div className='px-12 m-12' >
                <Carousel responsive={responsive} className='px-12 m-12'>
                    <div>
                        <img src={one } alt="img" />
                    </div>
                    <div>
                        <img src={two } alt="" />
                    </div>
                    <div>
                        <img src={three } alt="" />
                    </div>
                    <div>
                        <img src={four } alt="" />
                    </div>
                    <div>
                        <img src={five } alt="" />
                    </div>
                    <div>
                        <img src={six } alt="" />
                    </div>
                    <div>
                        <img src={seven } alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default SportsPic