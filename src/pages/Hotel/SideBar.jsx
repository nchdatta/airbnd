import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        const { location, checkin, checkout, traveler } = data;
        if (data) {
            // console.log(location, checkin, checkout, traveler)
            const url = `/hotels?location=${location}&checkin=${checkin}&checkout=${checkout}&traveler=${traveler}`;
            navigate(url, { replace: true });
        }
    }

    return (
        <aside className='w-full lg:w-1/4 px-0 lg:px-8 hidden lg:block'>
            <h2 className='text-lg font-semibold text-blue-500 dark:text-gray-200 mb-5'>Where you want to go?</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-2'>
                    <label htmlFor="location" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Location</label>
                    <input type="text" id="location" {...register("location", { required: true })} placeholder='Location' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className='mb-2'>
                    <label htmlFor="checkin" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Check in</label>
                    <input type="date" id="checkin" {...register("checkin", { required: true })} placeholder='Check in' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className='mb-2'>
                    <label htmlFor="checkout" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Check out</label>
                    <input type="date" id="checkout" {...register("checkout", { required: true })} placeholder='Check out' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="traveler" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Traveler</label>
                    <input type="number" id="traveler" {...register("traveler", { required: true })} min='1' max='10' placeholder='Traveler' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type='button' className='w-full flex items-center justify-center px-6 py-2 rounded-full font-semibold text-white hover:text-gray-100 bg-gradient-to-r from-blue-600 to-blue-500 mt-2'>Find</button>
            </form>
        </aside>
    );
};

export default SideBar;