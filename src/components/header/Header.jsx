import React, { useState } from 'react'
import './header.scss'
// Import Carousel/Slider
import Carousel from '../carousel/Carousel.jsx'

// import slides
import {slides} from "../carousel/carouselData.json"




const Header = () => {

  // const [slider, setSlider] = useState()

  

  return (
    <>
    <div className='header'>
          <div className="header-right">
            <h1>Noman <span>Catering</span> </h1>
            <p>Bringing the best flavour to you</p>
            <button>Order Now</button>
          </div>

          <div className="header-left">
          <Carousel data={slides} />
          </div>
    </div>
    </>
  )
}

export default Header
