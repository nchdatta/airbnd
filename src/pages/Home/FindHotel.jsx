import React from 'react';
import { Link } from 'react-router-dom';
import DateInput from '../../component/DateInput';
import TextInput from '../../component/TextInput';

const FindHotel = () => {
    return (
        <div className='my-20 lg:w-4/6 mx-auto px-3'>
            <div className='p-8 border-2 border-yellow-400 rounded-3xl lg:rounded-full grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <TextInput id='where' placeholder='Location' label='Where' />
                <DateInput id='checkin' label='Check in' />
                <DateInput id='checkout' label='Check out' />
                <TextInput type='number' id='traveler' placeholder='Traveler' label='Traveler' />
            </div>
            <div className='text-center mt-[-15px]'>
                <Link to='/' className="text-white bg-yellow-400 hover:text-gray-100 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-8 py-3 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Search</Link>
            </div>
        </div>
    );
};

export default FindHotel;