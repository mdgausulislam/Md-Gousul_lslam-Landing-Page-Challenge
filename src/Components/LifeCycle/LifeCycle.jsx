import React from 'react';
import './LifeCycle.css';
import { CgSearch } from "react-icons/cg";
import { PiSunglassesFill } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const LifeCycle = () => {
    return (
        <div className="LifeCycle-container">
            <LifeCycleStep
                icon={<CgSearch />}
                title="Search your sunglass"
                description="Shop Stylish Eyewear Now"
                stepClass="hr"
                dotClass="dots-sml"
                offset={55} // Adjust this offset for each step
            />
            <LifeCycleStep
                icon={<PiSunglassesFill />}
                title="Selected Sunglass"
                description="Shade Your Style now"
                stepClass="hr1"
                dotClass="dots-sml1"
                offset={70} // Adjust this offset for each step
            />
            <LifeCycleStep
                icon={<MdOutlinePayment />}
                title="Make Payment"
                description="Securely Checkout"
                stepClass="hr2"
                dotClass="dots-sml2"
                offset={85} // Adjust this offset for each step
            />
            <LifeCycleStep
                icon={<TbTruckDelivery />}
                title="Received Product"
                description="See the World Clearly"
                stepClass=""
                dotClass=""
                offset={180} // Adjust this offset for each step
            />
        </div>
    );
};


const LifeCycleStep = ({ icon, title, description, stepClass, dotClass, offset }) => (
    <div className="relative mb-8 md:mb-0">
        <div className="flex flex-col items-center">
            <span className="icon-container">
                {icon}
            </span>
            {stepClass && <hr className={stepClass} style={{ left: `calc(90% + ${offset}px)`, bottom: '73%' }} />}
            {dotClass && <span className={dotClass} style={{ right: `calc(-40% - ${offset}px)`, bottom: '70.5%' }}></span>}
        </div>
        <h6 className='font-bold'>{title}</h6>
        <p>{description}</p>
    </div>
);



export default LifeCycle;
