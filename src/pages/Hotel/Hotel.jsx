import React from 'react';
import { Link } from 'react-router-dom';
import ButtonBlue from '../../component/ButtonBlue';
import BookingCart from './BookingCart';

const Hotel = () => {
    return (
        <div>
            <div className="flex justify-center gap-2 mt-1">
                <img src="https://i.ibb.co/BVHcmTg/photo-1560347876-aeef00ee58a1.jpg" className='object-cover w-1/2 h-64 lg:h-[420px] rounded-md' alt="Hotel Img 1" />
                <img src="https://i.ibb.co/nBRRn8Y/photo-1522708323590-d24dbb6b0267.jpg" className='object-cover w-1/2 h-64 lg:h-[420px] rounded-md' alt="Hotel Img 2" />
            </div>

            <div className='lg:w-3/4 mx-auto flex flex-col lg:flex-row justify-between gap-14 mt-8 mb-28'>
                <div className='lg:w-7/12'>
                    <h1 className='text-2xl font-semibold mb-3'>Light bright stylish apartment & safe stay</h1>
                    <p className='text-sm text-gray-500 mb-1'>Dhaka, Bangladesh</p>
                    <p className='text-sm text-gray-500 mb-2'>4 Guests, 2 Bedrooms, 2 beds</p>
                    <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />

                    <div className='my-5'>
                        <p className="text-gray-500 font-bold text-sm mb-4 flex items-center"><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg> Wifi Available</p>
                        <p className="text-gray-500 font-bold text-sm mb-4 flex items-center"><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Cancellation Flexibility</p>
                        <p className="text-gray-500 font-bold text-sm mb-4 flex items-center"><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> Self Check-in</p>
                        <p className="text-gray-500 font-bold text-sm mb-4 flex items-center"><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> Sparkling Clean</p>

                    </div>
                    <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 mb-4" />
                    <div>
                        <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ut, aspernatur harum dolorum aut alias numquam fuga fugit! Natus temporibus possimus aut aliquam libero, fuga vel assumenda eos magnam consequatur corporis voluptatem. Facere cumque assumenda quia atque explicabo ullam consequatur.</p>
                        <p className="text-gray-500 my-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse soluta saepe praesentium voluptatem, vitae sequi necessitatibus ea in voluptates quos. Magnam, explicabo. Aliquid, ipsam? Et odit tempora laudantium eius commodi.</p>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae neque ratione eum enim rem sint libero suscipit itaque quaerat, voluptas dolor provident? Veritatis doloremque fuga tempora consectetur at, quisquam aliquid veniam numquam voluptatibus similique facere perferendis commodi, dolores maiores vel voluptas eaque sint, iusto nihil impedit. Reprehenderit, perspiciatis maxime?</p>
                    </div>
                    <h2 className='text-md font-bold text-blue-600 mt-3 mb-6'>Read more about the space</h2>
                    <h2 className='text-md font-bold mb-0.5'>Reviews</h2>
                    <p className='text-sm flex items-center'><svg className="mr-1 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> <b>4.8</b> (20 reviews)</p>
                </div>
                <div className='lg:w-5/12'>
                    <BookingCart>
                        <Link to='/hotel/booking'>
                            <button type="button" className="w-full text-white font-bold bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg text-sm px-3 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Reserve</button>
                        </Link>
                        <p className='text-xs text-gray-400 text-center'>You won't be charged yet.</p>
                    </BookingCart>
                </div>
            </div>
        </div>
    );
};

export default Hotel;