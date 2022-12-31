import notFoundSvg from '/images/react.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="grid h-screen px-4 bg-white place-content-center dark:bg-gray-900">
            <div className="text-center">
                {/* <h1 className="font-black text-gray-200 text-9xl dark:text-gray-700">404</h1> */}
                <img src={notFoundSvg} className="w-full mb-4" alt="Not found" />

                <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Uh-oh!</p>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    We can't find that page.</p>

                <Link to="/"
                    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring">
                    Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;