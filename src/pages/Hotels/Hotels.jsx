import React, { Suspense } from 'react';
import Loading from '../../component/Loading';
import SideBar from './SideBar';
const HotelResults = React.lazy(() => import('./HotelResults'))

const Hotels = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row my-6 px-2'>
            {/* left-side content */}
            <SideBar />
            {/* main content area*/}
            <Suspense fallback={<Loading />}><HotelResults /></Suspense>

        </div>
    );
};

export default Hotels;