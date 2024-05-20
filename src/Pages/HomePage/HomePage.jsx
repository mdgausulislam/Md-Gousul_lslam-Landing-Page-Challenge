import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Product from '../../Components/Product/Product';
import LifeCycle from '../../Components/LifeCycle/LifeCycle';
import About from '../About/About';

const HomePage = () => {
    return (
        <div>
            <BannerSection />
            <LifeCycle />
            <About />
            <Product />
        </div>
    );
};

export default HomePage;