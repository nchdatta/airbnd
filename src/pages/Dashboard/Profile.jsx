import React from 'react';
import ButtonBlue from '../../component/ButtonBlue';
import ButtonYellow from '../../component/ButtonYellow';
import PageMeta from '../../component/PageMeta';

const Profile = () => {
    return (
        <div>
            <PageMeta title='Profile - Dashboard' />
            <h2 className='text-md font-bold text-blue-500'>Profile</h2>
            <div>
                <div className="inline-flex overflow-hidden relative justify-center items-center w-28 h-28 bg-gray-100 rounded-full dark:bg-gray-600 my-3">
                    <span className="text-4xl font-medium text-gray-600 dark:text-gray-300">N</span>
                </div>

                <h2 className='mb-2 text-xl font-semibold'>Nayan Chandra Datta</h2>
                <p className='mb-1 text-sm font-medium text-gray-600'>Email: nayanchdatta02@gmail.com</p>
                <p className='mb-1 text-sm font-medium text-gray-600'>Phone: +8801300421748</p>
                <p className='mb-1 text-sm font-medium text-gray-600'>Country: Bangladesh</p>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-3 lg:grid-cols-3 gap-2 my-4">
                <ButtonBlue name='Update Profile' />
                <ButtonYellow name='Change Password' />
                <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete Account</button>
            </div>
        </div>
    );
};

export default Profile;