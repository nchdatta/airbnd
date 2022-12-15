import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FindHotel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        const { location, checkin, checkout, traveler } = data;
        const validate = location && checkin && checkout && traveler;
        if (validate) {
            // console.log(location, checkin, checkout, traveler)
            const url = `/hotels?location=${location}&checkin=${checkin}&checkout=${checkout}&traveler=${traveler}`;
            navigate(url, { replace: true });
        }

    }
    return (
        <div className='my-20 lg:w-4/6 mx-auto px-3'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='p-12 border-2 border-yellow-400 rounded-3xl lg:rounded-full grid grid-cols-2 lg:grid-cols-4 gap-4'>

                    <div className="relative">
                        <label htmlFor='where' className="absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Where</label>
                        <input type='text' {...register('location', { required: true })} min='1' required max='10' id='where' placeholder='Location' className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
                    </div>
                    <div className="relative">
                        <label htmlFor='checkin' className="absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Check in</label>
                        <input type='date' {...register('checkin', { required: true })} id='checkin' required className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
                    </div>
                    <div className="relative">
                        <label htmlFor='checkout' className="absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Check out</label>
                        <input type='date' {...register('checkout', { required: true })} id='checkout' required className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
                    </div>
                    <div className="relative">
                        <label htmlFor='traveler' className="absolute text-lg font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Where</label>
                        <input type='number' {...register('traveler', { required: true })} min='1' required max='10' id='traveler' placeholder='Location' className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
                    </div>
                </div>
                <div className='text-center mt-[-25px]'>
                    <button type='submit' onClick={handleSubmit(onSubmit)}
                        className="text-white bg-yellow-400 hover:text-gray-100 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-8 py-3 text-center dark:focus:ring-yellow-900">Search</button>
                </div>
            </form>
        </div>
    );
};

export default FindHotel;