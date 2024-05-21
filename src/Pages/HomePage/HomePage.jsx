import React from 'react';
import LifeCycle from '../../Components/LifeCycle/LifeCycle';
import About from '../About/About';
import GlassDiscount from '../../Components/GlassDiscount/GlassDiscount';
import Product from '../../Components/Product/Product'
import BannerSection from '../BannerSection/BannerSection';

const HomePage = () => {
    return (
        <div>
            <BannerSection />
            <GlassDiscount />
            <About />
            <Product />
        </div>
    );
};

export default HomePage;