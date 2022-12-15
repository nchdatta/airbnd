import React from 'react';

const ButtonBlue = ({ name }) => {
    return (
        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {name}</button>
    );
};

export default ButtonBlue;