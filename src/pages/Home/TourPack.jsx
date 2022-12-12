import React from 'react';
import { Link } from 'react-router-dom';

const TourPack = ({ img, packgs, name, cost }) => {
    return (
        <div>
            <Link to="#" className="flex flex-col items-start justify-centerbg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-lg h-72" src={img} alt={name} />
                <div className="py-3">
                    <h2 className="text-sm font-light tracking-tight text-gray-600 dark:text-white">{packgs} Packages</h2>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-gray-400">{name}</h1>
                    <h2 className="mt-2 text-md font-light tracking-tight text-gray-600 dark:text-white"><span className='text-sm text-blue-800'>Starts From</span> BDT {cost}</h2>
                </div>
            </Link>
        </div>
    );
};

export default TourPack;