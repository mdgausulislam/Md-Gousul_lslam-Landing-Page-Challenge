import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Product from '../../Components/Product/Product';
import LifeCycle from '../../Components/LifeCycle/LifeCycle';
import About from '../About/About';
import GlassDiscount from '../../Components/GlassDiscount/GlassDiscount';

const HomePage = () => {
    return (
        <div>
            <BannerSection />
            <LifeCycle />
            <GlassDiscount />
            <About />
            <Product />
        </div>
    );
};

export default HomePage;