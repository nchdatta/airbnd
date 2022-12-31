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

    const navs =
        <>
            <NavItem name='Host your hotel' to='/host-hotel' />
            <NavItem name='Host your experience' to='/host-experience' />
            <NavItem name='Help' to='/help' />
            {user ?
                <>
                    <NavItem name='Dashboard' to='/dashboard' />
                    <button onClick={async () => await signOut()}
                        className='text-white hover:text-gray-200 bg-gray-400 px-4 py-2 mt-4 lg:mt-0 rounded-full'>Sign out</button>
                </>
                : <>
                    <NavItem name='Log in' to='/login' />
                    <ButtonPrimary to='/signup' text='Sign up' />
                </>}
        </>;

    return (
        <nav className="bg-white border-gray-200 py-2 lg:py-0 dark:bg-gray-900 border-b">
            <div className="px-2 lg:w-4/5 mx-auto flex flex-wrap items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src="/images/logo.png" className="h-8 mr-1" alt="airbnd" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-orange-500 dark:text-white">Airbnd</span>
                </Link>
                {/* drawer init and toggle */}
                <div className="text-center block lg:hidden">
                    <button className="p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                {/* drawer component */}
                <div id="drawer-right-example" className="lg:hidden fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
                    {/* <h5 id="drawer-right-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Right drawer</h5> */}
                    <button type="button" data-drawer-dismiss="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="flex flex-col">
                        <NavItem name='Home' to='/' />
                        {navs}
                    </div>
                </div>

                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
                    <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navs}
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;