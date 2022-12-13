import React from 'react';
import { useSignOut, useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../component/ButtonPrimary';
import Loading from '../component/Loading';
import NavItem from '../component/NavItem';
import auth from '../utils/firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    if (loading) { return <Loading /> }

    return (
        <nav className="bg-white border-gray-200 py-2 lg:py-0 dark:bg-gray-900 border-b">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img src="/images/logo.png" className="h-8 mr-1" alt="airbnd" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-orange-500 dark:text-white">Airbnd</span>
                </Link>
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavItem name='Host your hotel' to='/host-hotel' />
                        <NavItem name='Host your experience' to='/host-experience' />
                        <NavItem name='Help' to='/help' />
                        {user ?
                            <>
                                <NavItem name='Dashboard' to='/dashboard' />
                                <button onClick={async () => await signOut()}
                                    className='text-white hover:text-gray-200 bg-gray-400 px-4 rounded-full'>Sign out</button>
                            </>
                            : <>
                                <NavItem name='Log in' to='/login' />
                                <ButtonPrimary to='/signup' text='Sign up' />
                            </>}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;