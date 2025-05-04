import React from 'react';
import NavBar from "./components/NavBar.jsx";
import './App.css'
import shoes from "./assets/images/image-product-1.jpg";
import shoe1 from "./assets/images/image-product-1-thumbnail.jpg";
import shoe2 from "./assets/images/image-product-2-thumbnail.jpg";
import shoe3 from "./assets/images/image-product-3-thumbnail.jpg";
import shoe4 from "./assets/images/image-product-4-thumbnail.jpg";
import cart from "./assets/images/icon-cart.svg";
import { useState, useEffect } from 'react';
import Hamburger from "hamburger-react";

const App = () => {

const [sidebarOpen, setSidebarOpen] = useState(false);
const toggleSidebar = () => setSidebarOpen(!sidebarOpen);




  return (
    <>
    <div className='px-60 mb-10'>


    <NavBar/>

    {/* {mobile-view} */}
    <div className="flex w-full items-center justify-between sm:hidden py-3 px-6">
            <button onClick={toggleSidebar}>
              <Hamburger toggled={sidebarOpen} toggle={setSidebarOpen} size={16} />
            </button>
            </div>

            {/* {side bar actions} */}
            {sidebarOpen && (
  <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 sm:hidden transition-all">
    <ul className="flex flex-col gap-4 text-lg font-semibold">
      <li className="hover:text-orange-500 cursor-pointer">collection</li>
      <li className="hover:text-orange-500 cursor-pointer">men</li>
      <li className="hover:text-orange-500 cursor-pointer">women</li>
      <li className="hover:text-orange-500 cursor-pointer">About</li>
      <li className="hover:text-orange-500 cursor-pointer">contact</li>
      
    </ul>
  </div>
)}




    <div className='px-5 mt-15'>
      <div className="flex flex-row justify-between gap-20"> 
      

      <img src={shoes} alt="" className='rounded-2xl h-100 w-100'/>
      <div className='mt-15'>
        <h1 className='red-hat-text-400'>
          SNEAKER COMPANY
        </h1>
        <h3 className='red-hat-text-700 font-bold text-7xl '>
          Fall Limited Edition <br/>
          sneakers
        </h3>
        <p className='mt-5'>These low-profile sneakers are your perfect casual wear <br/>
        companion. Featuring a durable rubber outer sole, they'll<br/>
        withstand everything the weather can offer
        </p>

        
          <h3 className='mt-5 font-bold text-3xl gap-'>$125.00 <span className='bg-black text-blue-50 p-2.5 rounded-2xl'>50%</span></h3>
          <p className='mt-2.5 opacity-60'>$250.00</p>
          <div className='flex flex-row gap-10'>
           <div className='flex items-center justify-between w-48 p-2.5 bg-amber-100 rounded-2xl mt-2'>
            <button className='px-2 py-1 text-lg font-bold hover:bg-gray-200 rounded-2xl'>+</button>
            <span>0</span>
            <button className='px-2 py-1 text-lg font-bold hover:bg-gray-200 rounded-2xl'>-</button>
            
            </div>
            <button className='bg-amber-600 rounded-2xl w-76 font-bold mt-2 flex flex-row justify-center gap-5 p-2.5'><img src={cart} alt='' className='w-5 h-5 bold'/>
            add to cart</button>
            </div>
        
      </div>

      </div>
      <div className='gap-5 flex flex-row w-21.5'>
        <img src={shoe1} alt="" className='rounded-2xl'/>
        <img src={shoe2} alt="" className='rounded-2xl'/>
        <img src={shoe3} alt="" className='rounded-2xl'/>
        <img src={shoe4} alt="" className='rounded-2xl'/>
      </div>
      </div>

    </div>


    
    

    
      <h1></h1>


    
      
    </>
  )
}

export default App
