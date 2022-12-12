import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({ to, text }) => {
    return (
        <Link to={to} className='w-1/2 lg:w-auto btn flex items-center justify-center px-6 py-2 rounded-full font-semibold text-white hover:text-gray-100 bg-gradient-to-r from-blue-600 to-blue-500 mt-2 lg:mt-0'>{text}</Link>

    );
};

export default ButtonPrimary;