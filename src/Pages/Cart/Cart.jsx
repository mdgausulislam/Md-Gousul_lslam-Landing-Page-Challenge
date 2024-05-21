import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };

    return (
        <div className="container mx-auto py-5 px-4 lg:px-28">
            <h1 className="text-3xl font-bold pb-3">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cartItems.map((product, index) => (
                        <div key={index} className="card w-[340px] h-[500px] bg-base-100 px-8 py-8 shadow-lg">
                            <div className="carousel w-full overflow-x-hidden">
                                {product.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className="carousel-item w-full mt-10">
                                        <img src={image} alt={`Product ${imgIndex + 1}`} className="w-full h-full" />
                                    </div>
                                ))}
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.productName}</h2>
                                <div className='flex justify-center space-x-2'>
                                    <span className='text-black font-bold'>${product.netPrice}</span>
                                </div>
                                <div className="card-actions">
                                    <button className="buyButton2" onClick={() => handleRemoveFromCart(product)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
