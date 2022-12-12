import React from 'react';
import OutlineButton from '../../component/OutlineButton';
import Card from './Card';

const HotelResults = () => {
    return (
        <div>
            <p className='text-xs font-medium text-blue-600'>Apr 12 - Apr 15</p>
            <h2 className='text-xl font-semibold'>Stay in <span className='capitalize'>Dhaka</span> </h2>

            <div className='mt-3 mb-6 grid grid-cols-2 lg:grid-cols-5 gap-4'>
                <OutlineButton name='Cancellation Flexibility' />
                <OutlineButton name='Price' />
                <OutlineButton name='Instant Book' />
                <OutlineButton name='Cash on Delivery' />
                <OutlineButton name='Lunch Facility' />
            </div>
            <Card />
            <Card />
        </div>
    );
};

export default HotelResults;