import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const hotelUrl = "Light bright stylish apartment & safe stay".toLowerCase().split(" ").join('-');

    return (
        <>
            <div className="w-full flex items-center">
                <Link to={`/hotel/${hotelUrl}`}><img className="object-cover w-56 h-40 rounded-xl" src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/bSNv2CBSgmV_6w3yDTXz0UGMdw3aOfNo.jpg" alt="" /></Link>
                <div className="lg:w-1/2 max-h-44 flex flex-col px-4 py-0.5">
                    <Link to={`/hotel/${hotelUrl}`} className="pb-1 text-md font-bold text-gray-900 dark:text-white capitalize">Light bright stylish apartment & safe stay</Link>
                    <p className="pb-1 text-sm font-light text-gray-500 dark:text-gray-300 lowercase">4 Guests, 2 Bedrooms, 2 beds</p>
                    <p className="pb-4 text-sm font-light text-gray-500 dark:text-gray-300 lowercase">Wifi, Air-conditioning, Television</p>
                    <p className="pb-3 text-sm font-normal text-gray-500 dark:text-gray-300 capitalize">Cancellation Flexibility Available</p>
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