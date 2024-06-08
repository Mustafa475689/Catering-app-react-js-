import React, { useState } from 'react'
import './navbar.scss'
// import logo
import logo from '../../assets/logo.jpg'
// import Icons
import { BiSolidDish } from "react-icons/bi";
// Link for routes
import { Link } from 'react-router-dom';
// navigate for routes
// import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [active, setActive] = useState("home")

  // handle click for handle two or more onclick functions
  const handleNavigation = (page) => {
    setActive(page);
    // Yahaan navigation ke related actions kar sakte hain
    console.log(`Navigating to ${page}`);
  };



  return (
    <>
      <nav className='navbar'>
        <div className='main'>
          <Link to='/' className="right">
            <img src={logo} />
          </Link>

          <div className="middle">
            <ul>
              <li>
                <Link to='/' className={`link ${active === 'home' ? 'active' : ""}`}
                  onClick={() => handleNavigation('home')}>Home</Link>
              </li>

              <li>
                <Link to='/Menu' className={`link ${active === 'menu' ? 'active' : ""}`}
                  onClick={() => handleNavigation('menu')}>Menu</Link>
              </li>

              <li>
                <Link to='/Contact' className={`link ${active === 'contact' ? 'active' : ""}`}
                  onClick={() => handleNavigation('contact')}>Contact-us</Link>
              </li>

              <li>
                <Link to='/About' className={`link ${active === 'about' ? 'active' : ""}`}
                  onClick={() => handleNavigation('about')}>About-us</Link>
              </li>

            </ul>
          </div>

          <div className="left">
            <div className='cart'>
              <Link to='/Cart' className={`link ${active === 'cart' ? 'active' : ""}`}
                onClick={() => handleNavigation('cart')}>
                <BiSolidDish />
              </Link>
            </div>
            <div className='btn'>
              <Link to='/PlaceOrder' className={active === 'placeOrder' ? 'active' : ""}
                onClick={() => handleNavigation('placeOrder')}>
                <button>Order Now</button>
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
