import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Product from '../../Components/Product/Product';
import LifeCycle from '../../Components/LifeCycle/LifeCycle';

const HomePage = () => {
    return (
        <div>
            <BannerSection />
            <LifeCycle />
            <Product />
        </div>
    );
};

export default HomePage;