import React from 'react';

const TextField = ({ id, label, placeholder }) => {
    return (
        <>
            <label htmlFor={id} className="mb-1 text-sm text-gray-800 dark:text-gray-100">
                {label}
            </label>
            <input type="text" id={id} name={id} required className="mb-4 w-full border border-gray-300 dark:border-gray-700 pl-3 py-2 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-300 text-gray-500 dark:text-gray-400" placeholder={placeholder} />

        </>
    );
};

export default TextField;