import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import bannerImg from '../../assets/banner-overlay.png';
import { FaShoppingCart } from "react-icons/fa";
import './banner.css';

const BannerSection = () => {
    return (
        <>
            <div className="banner mb-60">
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <span className="circle"></span>
                        <img src={bannerImg} alt="" className='bannerImg' />
                        <div className='bannerInfo'>
                            <h3>Personalized Eyeglass <br />Shopping</h3>

                            <button class="buyButton">
                                <FaShoppingCart className='mr-2' />
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="circle"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="circle"></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default BannerSection;

