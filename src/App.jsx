import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar.jsx";
import './App.css'
import shoes from "./assets/images/image-product-1.jpg";
import shoe1 from "./assets/images/image-product-1.jpg";
import shoe2 from "./assets/images/image-product-2.jpg";
import shoe3 from "./assets/images/image-product-3.jpg";
import shoe4 from "./assets/images/image-product-4.jpg";
import cart from "./assets/images/icon-cart.svg";

import product1 from "./assets/images/image-product-1-thumbnail.jpg";
import product2 from "./assets/images/image-product-2-thumbnail.jpg";
import product3 from "./assets/images/image-product-3-thumbnail.jpg";
import product4 from "./assets/images/image-product-4-thumbnail.jpg";



const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const [selectedImage, setSelectedImage] = useState(shoe1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleAddToCart = () => {
    if (quantity === 0) return;
    const item = {
      name: "Fall Limited Edition Sneakers",
      price: 125,
      quantity,
      image: shoe1,
    };
    setCartItems(prevItems => {
      const existing = prevItems.find(i => i.name === item.name);
      if (existing) {
        return prevItems.map(i =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prevItems, item];
    });
    setQuantity(0);
  };


  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  const handleThumbnailClick = (img) => setSelectedImage(img);
  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);



  useEffect(() => {
  const removeItem = (e) => {
    setCartItems(prev => prev.filter(item => item.name !== e.detail));
  };

  window.addEventListener("deleteFromCart", removeItem);
  return () => window.removeEventListener("deleteFromCart", removeItem);
}, []);







  return (
    <>
    <div className='px-6 sm:px-20 lg:px-60 mb-10'>


    <NavBar cartItems =  {cartItems}/>





    <div className='mt-16 flex flex-col md:flex-row gap-10 items-center justify-between'>

<div className='w-full md:w-1/2'>

        
      

      <img src={selectedImage} onClick={openLightbox} alt="" className='rounded-2xl h-100 w-100'/>
      <div className='mt-4 flex gap-4'>
        {[shoe1, shoe2, shoe3, shoe4].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => handleThumbnailClick(img)}
                  className={`rounded-2xl w-20 cursor-pointer border-2 ${
                    selectedImage === img ? "border-amber-600" : "border-transparent"
                  }`}
                />
              ))}
              </div>
              </div>
              
              <div className='w-full md:w-1/2'>

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

        <div className='mb-4'>
          <div className='flex items-center gap-4'>
          <span className='font-bold text-3xl gap-'>$125.00</span>
          <span className='bg-black text-blue-50 p-2.5 rounded-2xl'>50%</span>
          </div>
          <p className='mt-2.5 opacity-60'>$250.00</p>

          <div className='flex flex-row gap-10'>
            <div className='flex items-center justify-between w-48 p-2.5 bg-amber-100 rounded-2xl mt-2'>
            <button onClick={handleIncrement} className='px-2 py-1 text-lg font-bold hover:bg-gray-200 rounded-2xl'>+</button>
            <span>{quantity}</span>
            <button onClick={handleDecrement} className='px-2 py-1 text-lg font-bold hover:bg-gray-200 rounded-2xl'>-</button>
            
            </div>
            <button onClick={handleAddToCart} disabled={quantity === 0} className='bg-amber-600 rounded-2xl w-76 font-bold mt-2 flex flex-row justify-center gap-5 p-2.5'>
              <img src={cart} alt='' className='w-5 h-5 bold'/>
            add to cart</button>
            </div>
        
      </div>

      </div>
      {/* <div className='gap-5 flex flex-row w-21.5'>
        <img src={shoe1} alt="" className='rounded-2xl'/>
        <img src={shoe2} alt="" className='rounded-2xl'/>
        <img src={shoe3} alt="" className='rounded-2xl'/>
        <img src={shoe4} alt="" className='rounded-2xl'/>
      </div> */}
      </div>

      

    </div>


    
    

    
    


    
      
    </>
  )
}

export default App
