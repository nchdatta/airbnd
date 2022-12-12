import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../component/NavItem';

const Navbar = () => {
    const navs = [
        { id: 1121, name: 'Host your hotel', to: '/host-hotel' },
        { id: 1122, name: 'Host your experience', to: '/host-experience' },
        { id: 1123, name: 'Help', to: '/help' },
        { id: 1124, name: 'Log in', to: '/login' }
    ];
    return (
        <nav className="bg-white border-gray-200 py-2 lg:py-0 dark:bg-gray-900 border-b">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img src="/public/images/logo.png" className="h-8 mr-1" alt="airbnd" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-orange-500 dark:text-white">Airbnd</span>
                </Link>
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navs.map(nav => <NavItem key={nav.id} to={nav.to}>{nav.name}</NavItem>)}
                        <Link to='/signup' className='w-1/2 lg:w-auto btn flex items-center justify-center px-6 py-2 rounded-full font-semibold text-white hover:text-gray-100 bg-gradient-to-r from-blue-600 to-blue-500 mt-2 lg:mt-0'>Sign up</Link>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;