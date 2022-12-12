import React from 'react';
import Banner from './Banner';
import FindHotel from './FindHotel';
import FooterBanner from './FooterBanner';
import PopularPacks from './PopularPacks';

const Home = () => {
    return (
        <div>
            <FindHotel />
            <Banner />
            <PopularPacks />
            <FooterBanner />
        </div>
    );
};

export default Home;