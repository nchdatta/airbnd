import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IconNav from '../../component/IconNav';
import HotelBookings from './HotelBookings';
import MyDashboard from './MyDashboard';
import Profile from './Profile';
const profileIcon = <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>;
const dashboardIcon = <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>;

const Dashboard = () => {
    return (
        <div className='flex flex-col lg:flex-row min-h-screen'>
            {/* sidebar area  */}
            <aside className="w-full lg:w-1/5" aria-label="Sidebar">
                <div className="overflow-y-auto lg:min-h-screen py-4 px-2 bg-gray-50 rounded dark:bg-gray-800 flex flex-row lg:flex-col flex-wrap gap-2">
                    <IconNav to='/dashboard' name='Profile' icon={profileIcon} />
                    <IconNav to='/dashboard/my-dashboard' name='Dashboard' icon={dashboardIcon} />
                    <IconNav to='/dashboard/hotel-bookings' name='Hotel Bookings' icon={dashboardIcon} />
                </div>
            </aside>

            {/* Main content area  */}
            <div className='w-full lg:w-4/5 p-3 lg:p-5'>
                <Routes>
                    <Route index element={<Profile />} />
                    <Route path='my-dashboard' element={<MyDashboard />} />
                    <Route path='hotel-bookings' element={<HotelBookings />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;