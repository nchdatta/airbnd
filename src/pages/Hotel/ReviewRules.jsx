import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRules = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold mb-4'>Review hotel rules</h2>
            <p className='text-md font-semibold text-gray-700 mb-3'>3 nights in Dhaka</p>
            <div className="flex gap-16">
                <div className="flex gap-2">
                    <div className='bg-gray-200 font-bold text-sm px-3 py-0.5 text-center rounded-sm'>
                        <p>Apr</p>
                        <p>13</p>
                    </div>
                    <div className="text-sm text-gray-500 flex flex-col justify-between py-0.5">
                        <p>Monday check-in</p>
                        <p>After 12:00 PM</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className='bg-gray-200 font-bold text-sm px-3 py-0.5 text-center rounded-sm'>
                        <p>Apr</p>
                        <p>17</p>
                    </div>
                    <div className="text-sm text-gray-500 flex flex-col justify-between py-0.5">
                        <p>Thursday check-out</p>
                        <p>Before 11:00 AM</p>
                    </div>
                </div>
            </div>
            <p className='text-sm text-gray-500 mt-10 mb-4'>Self check-in with hotel staff.</p>
            <hr className="mb-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <h3 className='text-md font-semibold mt-3 mb-5'>Things to keep in mind</h3>

            <div className='flex items-center gap-3 mb-3'>
                <img src="/images/ic_child_friendly_48px.png" className='w-8 h-8 border rounded-sm p-2' alt="Child" />
                <p>Suitable for children and infants</p>
            </div>
            <div className='flex items-center gap-3 mb-3'>
                <img src="/images/ic_pets_48px.png" className='w-8 h-8 border rounded-sm p-2' alt="Pets" />
                <p>Pets allowed</p>
            </div>
            <div className='flex items-center gap-3 mb-3'>
                <img src="/images/forbidden.png" className='w-8 h-8 border rounded-sm p-2' alt="Event" />
                <p>No parties or events</p>
            </div>
            <div className='flex items-center gap-3 mb-6'>
                <img src="/images/ic_smoking_rooms_48px.png" className='w-8 h-8 border rounded-sm p-2' alt="Smoking" />
                <p>Smoking not allowed</p>
            </div>
            <Link to="/hotel/booking/personal-info"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Agree and continue</button></Link>

        </div>
    );
};

export default ReviewRules;