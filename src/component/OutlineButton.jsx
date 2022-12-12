import React from 'react';

const OutlineButton = ({ name }) => {
    return (
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 font-light rounded-full text-xs px-4 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{name}</button>
    );
};

export default OutlineButton;