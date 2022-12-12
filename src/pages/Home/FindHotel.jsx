import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DateInput from '../../component/DateInput';
import TextInput from '../../component/TextInput';

const FindHotel = () => {
    const whereRef = useRef('');
    const checkinRef = useRef('');
    const checkoutRef = useRef('');
    const travelerRef = useRef(1);

    const navigate = useNavigate();

    const handleFindHotel = () => {
        const location = whereRef.current.value;
        const checkin = checkinRef.current.value;
        const checkout = checkoutRef.current.value;
        const traveler = travelerRef.current.value;
        const validate = where && checkin && checkout && traveler;
        if (validate) {
            // console.log(location, checkin, checkout, traveler)
            const url = `/hotels?location=${location}&checkin=${checkin}&checkout=${checkout}&traveler=${traveler}`;
            navigate(url, { replace: true });
        }

    }
    return (
        <div className='my-20 lg:w-4/6 mx-auto px-3'>
            <div className='p-12 border-2 border-yellow-400 rounded-3xl lg:rounded-full grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <TextInput id='where' inputRef={whereRef} placeholder='Location' label='Where' />
                <DateInput id='checkin' inputRef={checkinRef} label='Check in' />
                <DateInput id='checkout' inputRef={checkoutRef} label='Check out' />
                <TextInput type='number' inputRef={travelerRef} id='traveler' placeholder='Traveler' label='Traveler' />
            </div>
            <div className='text-center mt-[-30px]'>
                <button
                    onClick={handleFindHotel}
                    className="text-white bg-yellow-400 hover:text-gray-100 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-8 py-3 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Search</button>
            </div>
        </div>
    );
};

export default FindHotel;