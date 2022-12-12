import React from 'react';
import PageMeta from '../../component/PageMeta';
import Banner from './Banner';
import FindHotel from './FindHotel';
import FooterBanner from './FooterBanner';
import PopularPacks from './PopularPacks';

const Home = () => {
    return (
        <div>
            <PageMeta title='Find Best Rooms, Hotels & Enjoy the Vacation' />
            <FindHotel />
            <Banner />
            <PopularPacks />
            <FooterBanner />
        </div>
    );
};

export default Home;