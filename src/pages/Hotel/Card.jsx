import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>
            <div className="w-full flex items-center">
                <Link to=''><img className="object-cover w-56 h-40 rounded-xl" src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/bSNv2CBSgmV_6w3yDTXz0UGMdw3aOfNo.jpg" alt="" /></Link>
                <div className="lg:w-1/2 flex flex-col px-4 py-0.5">
                    <Link to='' className="mb-1 text-md font-bold text-gray-900 dark:text-white capitalize">Light bright stylish apartment & safe stay</Link>
                    <p className="mb-1 text-sm font-light text-gray-500 dark:text-gray-300 lowercase">4 Guests, 2 Bedrooms, 2 beds</p>
                    <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-300 lowercase">Wifi, Air-conditioning, Television</p>
                    <p className="mb-3 text-sm font-normal text-gray-500 dark:text-gray-300 capitalize">Cancellation Flexibility Available</p>
                    <div className='flex justify-between'>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-300 lowercase">4.9 (20)</p>
                        <p className="text-sm font-normal text-gray-800 dark:text-gray-300 lowercase"><b>$34</b>/ night</p>
                    </div>
                </div>
            </div>
            <hr className='my-6 border-gray-200 dark:border-gray-700' />
        </>
    );
};

export default Card;