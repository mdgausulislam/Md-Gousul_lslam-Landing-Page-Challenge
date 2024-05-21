// import React from 'react';
// import logo from '../../assets/EyeGlass.png'
// import { Link } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import './Header.css'

// const Header = () => {
//     return (
//         <div className="navbar md:py-8 md:px-24  bg-base-100">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-96">
//                         <li><Link>Home</Link></li>
//                         <li><Link>About Us</Link></li>
//                         <li><Link>Products</Link></li>
//                         <li><Link>Features</Link></li>
//                         <li><Link>Reviews</Link></li>
//                         <li><Link>Contact Us</Link></li>
//                     </ul>
//                 </div>
//                 <a className="btn text-xl"><img src={logo} alt="" /></a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1 gap-4 header-info">
//                     <li><Link>Home</Link></li>
//                     <li><Link>About Us</Link></li>
//                     <li><Link>Products</Link></li>
//                     <li><Link>Features</Link></li>
//                     <li><Link>Reviews</Link></li>
//                     <li><Link>Contact Us</Link></li>
//                 </ul>
//             </div>
//             <div className="navbar-end gap-8 header-icons">
//                 <Link><FaShoppingCart /></Link>
//                 <Link><FaUser /></Link>
//             </div>
//         </div>
//     );
// };

// export default Header;


import React from 'react';
import logo from '../../assets/EyeGlass.png'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './Header.css'

const Header = () => {
    return (
        <div className="navbar md:py-8 md:px-24 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-96">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <a className="btn text-xl"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 header-info">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-8 header-icons">
                <Link to="/cart" className="relative">
                    <FaShoppingCart />
                    <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">3</span>
                </Link>
                <Link to="/profile"><FaUser /></Link>
            </div>
        </div>
    );
};

export default Header;

