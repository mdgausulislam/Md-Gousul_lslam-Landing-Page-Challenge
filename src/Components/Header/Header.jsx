import React, { useContext, useState, useRef, useEffect } from 'react';
import logo from '../../assets/EyeGlass.png';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import './Header.css';
import { CartContext } from '../../Context/CartContext';
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems ? cartItems.length : 0;

    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const closeDropdown = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', closeDropdown);

        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdownOnItemClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="navbar md:py-8 md:px-24 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown" ref={dropdownRef}>
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
                        <IoReorderThreeOutline className='text-2xl'/>
                    </div>
                    {isDropdownOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-96">
                            <li><Link to="/" onClick={closeDropdownOnItemClick}>Home</Link></li>
                            <li><Link to="/about" onClick={closeDropdownOnItemClick}>About Us</Link></li>
                            <li><Link to="/products" onClick={closeDropdownOnItemClick}>Products</Link></li>
                            <li><Link to="/features" onClick={closeDropdownOnItemClick}>Features</Link></li>
                            <li><Link to="/reviews" onClick={closeDropdownOnItemClick}>Reviews</Link></li>
                            <li><Link to="/contact" onClick={closeDropdownOnItemClick}>Contact Us</Link></li>
                        </ul>
                    )}
                </div>
                <Link to={'/'} className="btn text-xl"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 header-info">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">Features</Link></li>
                    <li><Link to="/">Reviews</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-8 header-icons">
                <Link to="/cart" className="relative">
                    <FaShoppingCart />
                    {cartCount > 0 && (
                        <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
                    )}
                </Link>
                <Link to="/login"><FaUser /></Link>
            </div>
        </div>
    );
};

export default Header;
