import React, { useState, useRef, useContext } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import './CartItem.css';
import { CartContext } from '../../Context/CartContext';

const CartItem = ({ product }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef();
    const { addToCart } = useContext(CartContext)

    const handleDotClick = (slideIndex) => {
        setActiveSlide(slideIndex);
        const slideWidth = carouselRef.current.clientWidth;
        carouselRef.current.scrollTo({
            left: slideWidth * slideIndex,
            behavior: 'smooth'
        });
    };

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.productName} has been added to the cart`);
    };

    return (
        <div className="card card1 w-[340px] h-[500px] bg-base-100 px-8 py-8 shadow-lg">
            <div className="absolute top-2 left-2 productDiscount">
                <span>{Math.round(((product.oldPrice - product.netPrice) / product.oldPrice) * 100)}%</span>
            </div>
            {/* Loveheart icon */}
            <div className="absolute top-2 right-2">
                <div className="react-icons1">
                    <span className='text-3xl font-bold'><FaRegHeart /></span>
                </div>
            </div>

            <div ref={carouselRef} className="carousel w-full overflow-x-hidden">
                {product.images.map((image, index) => (
                    <div key={index} className={`carousel-item w-full mt-10 ${activeSlide === index ? 'active' : ''}`} style={{ display: 'inline-block' }}>
                        <img src={image} alt={`Product ${index + 1}`} className="w-full h-full transform hover:scale-110" />

                    </div>
                ))}
            </div>
            <div className="flex justify-center w-full mt-8 py-6 gap-2">
                {product.images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`carousel-dot ${activeSlide === index ? 'carousel-dot-active' : ''}`}
                    />
                ))}
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.productName}</h2>
                <div className='flex justify-center space-x-2'>
                    <span className='line-through old-price'>${product.oldPrice}</span>
                    <span className='text-black font-bold'>${product.netPrice}</span>
                </div>
                <div className="card-actions">
                    <button className="buyButton2" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

