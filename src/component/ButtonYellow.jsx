import React from 'react';

const ButtonYellow = ({ name }) => {
    return (
        <button type="button" className="w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-full text-sm px-2.5 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
            {name}</button>
    );
};

export default ButtonYellow;