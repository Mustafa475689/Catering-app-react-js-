import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar';
// Import pages
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx'
import Contact from './pages/contact-us/Contact.jsx';
import Menu from './pages/menu/Menu.jsx';
import Cart from './pages/cart/Cart.jsx';
import PlaceOrder  from './pages/placeOrder/PlaceOrder.jsx';
// Immport react routes
import { Route, Routes } from 'react-router-dom'

const App = () => {


  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        </Routes>
      
      </div>
    </>
  )
}

export default App
