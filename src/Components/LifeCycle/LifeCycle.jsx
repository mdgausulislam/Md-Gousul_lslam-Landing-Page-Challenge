import React from 'react';
import './LifeCycle.css';
import { CgSearch } from "react-icons/cg";
import { PiSunglassesFill } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const LifeCycle = () => {
    return (
        <div className="LifeCycle-container flex flex-col md:flex-row items-center justify-between text-center px-6 md:px-36 absolute top-[665px] z-30 w-full">
            <LifeCycleStep
                icon={<CgSearch />}
                title="Search your sunglass"
                description="Shop Stylish Eyewear Now"
                stepClass="hr"
                dotClass="dots-sml"
            />
            <LifeCycleStep
                icon={<PiSunglassesFill />}
                title="Selected Sunglass"
                description="Shade Your Style now"
                stepClass="hr1"
                dotClass="dots-sml1"
            />
            <LifeCycleStep
                icon={<MdOutlinePayment />}
                title="Make Payment"
                description="Securely Checkout"
                stepClass="hr2"
                dotClass="dots-sml2"
            />
            <LifeCycleStep
                icon={<TbTruckDelivery />}
                title="Received Product"
                description="See the World Clearly"
                stepClass=""
                dotClass=""
            />
        </div>
    );
};

const LifeCycleStep = ({ icon, title, description, stepClass, dotClass }) => (
    <div className="mb-8 md:mb-0">
        <div className="flex flex-col items-center">
            <span className="icon-container flex items-center justify-center bg-[#FED29C] border border-[#FED29C] w-[90px] h-[90px] rounded-full mb-8">
                {icon}
            </span>
            {stepClass && <hr className={`w-[160px] border-t-2 border-dashed border-gray-800 absolute bottom-[130px] ${stepClass}`} />}
            {dotClass && <span className={`w-[15px] h-[15px] bg-[#FED29C] border border-[#FED29C] rounded-full absolute bottom-[125.5px] ${dotClass}`}></span>}
        </div>
        <h6 className="text-sm md:text-xl font-bold text-gray-800">{title}</h6>
        <p className="text-xs md:text-base text-gray-600">{description}</p>
    </div>
);

export default LifeCycle;
