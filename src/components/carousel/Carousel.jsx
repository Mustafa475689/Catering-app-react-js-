import React, { useState } from 'react'
import './carousel.scss'
// react icons
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

// inport images for slider
// import Biryani from "../../assets/biryani.png"


const Carousel = ({ data }) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    return (
        <>
            {/* <div className="slider">
                <div className="arrow">
                    <CiCircleChevLeft className='slider-arrow btn-left' />
                    <img src={Biryani} />
                    <CiCircleChevRight className='slider-arrow btn-right' />
                </div>
            </div> */}

            <div className="slider">
                <CiCircleChevLeft className='slider-arrow btn-left' onClick={prevSlide} />
                {data.map((item, index) => {
                    return <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />
                })}
                <CiCircleChevRight className='slider-arrow btn-right' onClick={nextSlide} />
                <span className='indicators'>
                    {data.map((_, index) => {
                        return <button key={index} onClick={() => setSlide(index) } 
                        className={slide === index ? "indicator" : "indicator indicator-inactive"} ></button>
                    })}
                </span>
            </div>


        </>
    )
}

export default Carousel
