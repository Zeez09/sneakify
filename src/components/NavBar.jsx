import React from "react";
import logo from "../assets/images/logo.svg"
import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"



const NavBar = () => {
  return (
    <>
    <div className="w-full p-4 border-b border-gray-200">

      <nav className="flex items-center justify-between text-black">
        <div className="flex items-center gap-15">

    <img src = {logo} alt="" className=""/>
    <ul className="flex list-none gap-4 text-sm">
        <li>
            collection
        </li>
        <li>
            men
        </li>
        <li>
            women
        </li>
        <li>
            About
        </li>
        <li>
            contact
        </li>
    </ul>
    </div>

    <div className="flex items-center gap-10">
        <img src={cart} alt="" className=""/>
        <img src={avatar} alt="" className=""/>

    </div>
    </nav>
        </div>
   


    
    </>
  )
}

export default NavBar





