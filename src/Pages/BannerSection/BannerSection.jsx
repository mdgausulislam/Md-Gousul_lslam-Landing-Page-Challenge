import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import bannerImg from '../../assets/banner-overlay.png';
import { FaShoppingCart } from "react-icons/fa";
import './banner.css';
import LifeCycle from '../../Components/LifeCycle/LifeCycle';

const BannerSection = () => {
    return (
        <div className="banner mb-60 relative flex items-center justify-center bg-gray-200 h-[600px] md:h-[400px]">
            <Swiper
                direction={'vertical'}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper w-full h-full"
            >
                <SwiperSlide className="flex items-center justify-center relative">
                    <span className="circle absolute w-[500px] h-[500px] md:w-[300px] md:h-[300px] bg-[#FED29C] rounded-full"></span>
                    <img src={bannerImg} alt="" className="bannerImg absolute bottom-0 w-[550px] h-[560px] md:w-[300px] md:h-[300px] z-10" />
                    <div className="bannerInfo absolute z-20 text-gray-800 left-[200px] md:left-[50px]">
                        <h3 className="title font-bold mb-4">Personalized Eyeglass <br />Shopping</h3>
                        <button className="buyButton flex items-center justify-center w-[184px] h-[54px] bg-gray-800 text-white rounded-md hover:bg-gray-700">
                            <FaShoppingCart className="mr-2 h-[18px] w-[18px]" />
                            <span className="font-bold">Buy Now</span>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="circle"></div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                    <div className="circle"></div>
                </SwiperSlide>
            </Swiper>
            <LifeCycle />
        </div>
    );
};

export default BannerSection;
