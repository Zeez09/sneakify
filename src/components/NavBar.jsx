import React from "react";
import { useState, useEffect } from 'react';
import logo from "../assets/images/logo.svg"
import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import Hamburger from "hamburger-react";
import deleteI from "../assets/images/icon-delete.svg"





const navLinks = ["Collection", "Men", "Women", "About", "Contact"];




const NavBar = ({ cartItems }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    

    return (
    <>
    <div className="w-full p-4 border-b border-gray-200">
        <nav className="flex items-center justify-between text-black max-w-7xl mx-auto">
        <div className="flex items-center gap-4 sm:gap-6">

            <div className="sm:hidden">
                <Hamburger toggled={sidebarOpen} toggle={setSidebarOpen} size={16} />
                        
            </div>

    <img src = {logo} alt="" className="h-5 sm:h-6"/>
    <ul className="hidden sm:flex list-none gap-6 text-sm text-gray-500">
        {navLinks.map((link, index) => (
    <li key={index} className="hover:text-black cursor-pointer capitalize">
        {link}
    </li>
))}
</ul>
    </div>

    <div className="flex items-center gap-6 relative">
        <div className="relative cursor-pointer" onClick={() => setShowCart(!showCart)}>
        <img src={cart} alt="Cart" className="h-6 w-6 hover:border-orange-500 cursor-pointer" />
        {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full px-2">
                {cartItems[0].quantity}
                </span>
            )}
</div>

        <img src={avatar} alt="" className=" h-8 w-8 "/>

    </div>
    </nav>
    </div>

    {sidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 sm:hidden transition-all">
            <div className="mb-6">
                <button onClick={() => setSidebarOpen(false)} className="text-2xl font-bold text-gray-600 hover:text-black">
                    &times;
                    </button>
                    </div>
            <ul className="flex flex-col gap-4 text-lg font-semibold">
                {navLinks.map((link, index) => (
                    <li key={index} onClick={toggleSidebar} className="hover:text-orange-500 cursor-pointer capitalize">
                        {link}
                        </li>
                    ))}

        </ul>
        </div>
    )}

    {showCart && (
        <div className="absolute right-4 top-20 w-80 bg-white shadow-xl p-4 rounded-lg z-50">
        <div className="flex items-center justify-between border-b pb-2 mb-2">
            <h3 className="font-bold  pb-2">Cart</h3>
            <button className="text-gray-500 hover:text-black text-lg font-bold" onClick={() => setShowCart(false)} aria-label="Close cart">
        &times;
            </button>
        </div>
            {cartItems.length === 0 ? (
                <p className="py-6 text-center text-gray-500">Your cart is empty.</p>
            ) : (
                

            <div className="flex items-center justify-between mt-4">
                <img src={cartItems[0].image} alt="product" className="w-12 h-12 rounded-md" />
                <div className="text-sm text-gray-700">
                    <p>{cartItems[0].name}</p>
                    <p>
                        ${cartItems[0].price} x {cartItems[0].quantity}{" "}
                        <span className="font-bold">
                            = ${cartItems[0].price * cartItems[0].quantity}
                            </span>
                            </p>
                            </div>
                            <img src={deleteI} alt="" className="w-4 h-4 ml-auto cursor-pointer" onClick={() => {const event = new CustomEvent("deleteFromCart", {detail: cartItems[0].name,
                    });
                    window.dispatchEvent(event);
                }} 
                />
                </div>
                
                )}
                    </div>
                )}




    
    </>
);
};

export default NavBar





