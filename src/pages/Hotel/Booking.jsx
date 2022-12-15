import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import BookingCart from './BookingCart';
import Pay from './Pay';
import ReviewRules from './ReviewRules';
import PersonalInfo from './PersonalInfo';

const Booking = () => {
    const location = useLocation();


    return (
        <div className='min-h-screen lg:w-3/4 mx-auto '>
            <nav className="flex my-4">
                <div className="flex">
                    <p className="text-md font-bold text-blue-600">1. Review hotel rules</p>
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <p className={`ml-1 text-md font-bold ${location.pathname === '/hotel/booking/confirm-and-pay' ? 'text-blue-600' : 'text-gray-700'}`}>2. Personal Info</p>
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <p className="ml-1 text-md font-bold text-gray-700">3. Confirm and pay</p>
                </div>
            </nav>

            <div className='flex flex-col lg:flex-row justify-between gap-14 mt-8 mb-28'>
                <div className='lg:w-7/12'>
                    <Routes>
                        <Route index element={<ReviewRules />} />
                        <Route path="personal-info" element={<PersonalInfo />} />
                        <Route path='confirm-and-pay' element={<Pay />} />
                    </Routes>
                </div>
                <div className='lg:w-5/12'>
                    <BookingCart />
                </div>
            </div>

        </div>
    );
};

export default Booking;