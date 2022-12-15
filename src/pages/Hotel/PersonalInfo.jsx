import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailField from './InputFields/EmailField';
import TextField from './InputFields/TextField';

const PersonalInfo = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/hotel/booking/confirm-and-pay", { replace: true });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-white dark:bg-gray-800 mt-1">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 pb-2">
                        <div className="flex items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Personal Information</p>
                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto pt-4">
                        <div className="container ">
                            <TextField id='name' label='Full Name' placeholder='Daniel Martin' />
                            <EmailField />
                            <TextField id='address' label='Address' placeholder='32 A Mall Road, New coloni' />
                            <TextField id='state' label='State/Province' placeholder='California' />

                            <div className="flex flex-col mb-4">
                                <label htmlFor="country" className="pb-1 text-sm text-gray-800 dark:text-gray-100">
                                    Country
                                </label>
                                <select id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <TextField id='zip' label='ZIP/Postal Code' placeholder='86745' />
                        </div>
                    </div>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Continue to next step</button>
            </div>
        </form>
    );
};

export default PersonalInfo;