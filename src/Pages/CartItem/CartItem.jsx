import React, { useState, useRef } from 'react';
import product1 from '../../assets/Product image/1.png';
import product2 from '../../assets/Product image/2.png';
import { FaRegHeart } from "react-icons/fa6";
import './CartItem.css';

const CartItem = ({ id }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef();

    const handleDotClick = (slideIndex) => {
        setActiveSlide(slideIndex);
        const slideWidth = carouselRef.current.clientWidth;
        carouselRef.current.scrollTo({
            left: slideWidth * slideIndex,
            behavior: 'smooth'
        });
    };

    return (
        <div className="card card1 w-[340px] h-[500px] bg-base-100 px-8 py-8 shadow-lg">
            <div className="absolute top-2 left-2 productDiscount">
                <span>10%</span>
            </div>
            {/* Loveheart icon */}
            <div className="absolute top-2 right-2">
                <div className="react-icons1">
                    <span className='text-3xl font-bold'><FaRegHeart /></span>
                </div>
            </div>

            <div ref={carouselRef} className="carousel w-full overflow-x-hidden">
                <div className={`carousel-item w-full mt-10 ${activeSlide === 0 ? 'active' : ''}`} style={{ display: 'inline-block' }}>
                    <img src={product1} alt="Product 1" className="w-full h-full transform hover:scale-110" />
                </div>
                <div className={`carousel-item w-full mt-10 ${activeSlide === 1 ? 'active' : ''}`} style={{ display: 'inline-block' }}>
                    <img src={product2} alt="Product 2" className="w-full h-full transform hover:scale-110" />
                </div>
                <div className={`carousel-item w-full mt-10 ${activeSlide === 2 ? 'active' : ''}`} style={{ display: 'inline-block' }}>
                    <img src={product1} alt="Product 3" className="w-full h-full transform hover:scale-110" />
                </div>
            </div>
            <div className="flex justify-center w-full mt-8 py-6 gap-2">
                <button
                    onClick={() => handleDotClick(0)}
                    className={`carousel-dot ${activeSlide === 0 ? 'carousel-dot-active' : ''}`}
                />
                <button
                    onClick={() => handleDotClick(1)}
                    className={`carousel-dot ${activeSlide === 1 ? 'carousel-dot-active' : ''}`}
                />
                <button
                    onClick={() => handleDotClick(2)}
                    className={`carousel-dot ${activeSlide === 2 ? 'carousel-dot-active' : ''}`}
                />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Bravo Sunglasses</h2>
                <div className='flex justify-center space-x-2'>
                    <span className='line-through old-price'>$150</span>
                    <span className='text-black font-bold'>$100</span>
                </div>
                <div className="card-actions">
                    <button className="buyButton2">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
