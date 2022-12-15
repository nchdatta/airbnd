import React from 'react';

const BookingCart = ({ children }) => {
    return (
        <div className='w-full border rounded-xl shadow-md p-6'>
            <h2 className='text-xl font-normal mb-1'><b>$34</b>/ night</h2>
            <p className='text-xs text-gray-700 mb-3 inline-flex items-center'><svg className="mr-1 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> <b>4.9</b> (20 reviews)</p>
            <p className='text-sm text-gray-800 mb-1'>Dates</p>
            <div className='border rounded-md px-4 py-2  text-gray-700 flex items-center justify-between mb-3'>
                <p className='text-sm'>4/12//2022</p>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <p className='text-sm'>4/17//2022</p>
            </div>
            <p className='text-sm text-gray-800 mb-1'>Guests</p>
            <div className='border rounded-md px-4 py-1.5 mb-5 text-gray-700'>
                <p className='text-sm'>3 Guests</p>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-1">
                <p>$34 <span className='text-xs'>&#x2716;</span> 4 nights</p>
                <p>$136</p>
            </div>
            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 mb-3" />
            <div className="flex justify-between text-sm text-gray-500 mb-1">
                <p>Cleaning fee</p>
                <p>$10</p>
            </div>
            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 mb-3" />
            <div className="flex justify-between text-sm text-gray-500 mb-1">
                <p>Service fee</p>
                <p>$21</p>
            </div>
            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 mb-3" />
            <div className="flex justify-between font-bold mb-4">
                <p>Total</p>
                <p>$167</p>
            </div>
            {children}
        </div>
    );
};

export default BookingCart;