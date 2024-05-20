// import React from 'react';
// import logo from '../../assets/EyeGlass.png'
// import { Link } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import './Header.css'

// const Header = () => {
//     return (
//         <header className='flex items-center justify-between'>
//             <div>
//                 <img src={logo} alt="" />
//             </div>
//             <div className='flex items-center justify-center gap-8 header-info'>
//                 <Link>Home</Link>
//                 <Link>About Us</Link>
//                 <Link>Products</Link>
//                 <Link>Features</Link>
//                 <Link>Reviews</Link>
//                 <Link>Contact Us</Link>
//             </div>
//             <div className='flex items-center justify-center gap-4 header-icons'>
//                 <Link><FaShoppingCart /></Link>
//                 <Link><FaUser /></Link>
//             </div>

//         </header>
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
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-96">
                        <li><Link>Home</Link></li>
                        <li><Link>About Us</Link></li>
                        <li><Link>Products</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Reviews</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <a className="btn text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 header-info">
                    <li><Link>Home</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Link>Products</Link></li>
                    <li><Link>Features</Link></li>
                    <li><Link>Reviews</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-6 header-icons">
                <Link><FaShoppingCart /></Link>
                <Link><FaUser /></Link>
            </div>
        </div>
    );
};

export default Header;