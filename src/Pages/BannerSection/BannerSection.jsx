import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import banner1 from '../../assets/slider-1.png';
import banner2 from '../../assets/slider-2.png';
import './banner.css';

const BannerSection = () => {
    return (
        <div className="banner">
            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="circle"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="circle"></div>
                </SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>
        </div>
    );
};

export default BannerSection;
