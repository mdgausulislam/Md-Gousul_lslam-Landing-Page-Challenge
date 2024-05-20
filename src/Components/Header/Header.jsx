import React from 'react';
import logo from '../../assets/EyeGlass.png'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './Header.css'

const Header = () => {
    return (
        <header className='flex items-center justify-between'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex items-center justify-center gap-8 header-info'>
                <Link>Home</Link>
                <Link>About Us</Link>
                <Link>Products</Link>
                <Link>Features</Link>
                <Link>Reviews</Link>
                <Link>Contact Us</Link>
            </div>
            <div className='flex items-center justify-center gap-4 header-icons'>
                <Link><FaShoppingCart /></Link>
                <Link><FaUser /></Link>
            </div>

        </header>
    );
};

export default Header;