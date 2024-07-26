import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import two from "../assets/images/sc2.jpg"
import three from "../assets/images/sc3.jpg"
import four from "../assets/images/sc4.jpg"
import five from "../assets/images/sc-5.jpg"
import six from "../assets/images/sc6.jpg"
import seven from "../assets/images/sc7.jpg"
import eight from "../assets/images/sc8.jpg"

function SciencePic() {
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
        <h1 className='font-medium text-2xl text-center px-4 py-14 uppercase text-gray-800' style={{textDecoration:"underline",textUnderlineOffset:"4px"}}>science exhibhition</h1>
        <div className='px-12 m-12' >
            <Carousel responsive={responsive} className='px-12 m-12'>
                <div>
                    <img src={seven } alt="img" />
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
                <div>
                    <img src={eight} alt="" />
                </div>
            </Carousel>
        </div>
    </div>
    )
}

export default SciencePic