import React from 'react';
import './LifeCycle.css';
import { CgSearch } from "react-icons/cg";
import { PiSunglassesFill } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const LifeCycle = () => {
    return (
        <div className="LifeCycle-container">
            <div className='text-center'>
                <div className='flex items-start justify-center z-10'>
                    <span className="icon-container"><CgSearch /></span>
                    <hr className='hr' />
                    <span className='dots-sml'></span>
                </div>
                <h6 className='text-xl font-bold'>Search your sunglass</h6>
                <p className='text-base font-normal'>Shop Stylish Eyewear Now</p>
            </div>

            <div className=''>
                <div className='flex items-start justify-center z-10'>
                    <span className="icon-container"><PiSunglassesFill /></span>
                    <hr className='hr1' />
                    <span className='dots-sml1'></span>
                </div>
                <h6 className='text-xl font-bold'>Select Sunglass </h6>
                <p className='text-base font-normal'>Shade Your Style</p>
            </div>
            <div className=''>
                <div className='flex items-start justify-center z-10'>
                    <span className="icon-container"><MdOutlinePayment /></span>
                    <hr className='hr2' />
                    <span className='dots-sml2'></span>
                </div>
                <h6 className='text-xl font-bold'>Make Payment</h6>
                <p className='text-base font-normal'>Securely Checkout Now</p>
            </div>
            <div className=''>
                <div className='flex items-start justify-center z-10'>
                    <span className="icon-container"><TbTruckDelivery /></span>
                </div>
                <h6 className='text-xl font-bold'>Received Product </h6>
                <p className='text-base font-normal'>See the World Clearly</p>
            </div>
        </div>
    );
};

export default LifeCycle;


