import React, { useState } from 'react';

const Pay = () => {
    const [pay, setPay] = useState(null);
    return (
        <div>
            <h2 className='text-xl font-semibold mb-4'>Payment method</h2>
            <img src="/images/payment-methods.png" alt="Payment" />

            <div className="flex justify-end mt-4">
                <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Continue to pay</button>
            </div>
        </div>
    );
};

export default Pay;