import React from 'react';
import { Link } from 'react-router-dom';
import TourPack from './TourPack';

const PopularPacks = () => {
    const packages = [
        { _id: 110, img: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/bSNv2CBSgmV_6w3yDTXz0UGMdw3aOfNo.jpg", packgs: 2, name: "Cox's Bazar", cost: 2999 },
        { _id: 111, img: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/RgD037o2SyhU8D78y4nHKiGNz13SAVI8.jpg", packgs: 4, name: "Kathmandu", cost: 4499 },
        { _id: 112, img: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/GK7Tuyz6ZwV5vpFEc1JYSLtxezF7sKOG.jpg", packgs: 7, name: "Bangkok", cost: 6999 },
        { _id: 113, img: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/Y0rpYEtbOQRTDB_os8Q1VROJP4yWySqg.jpg", packgs: 1, name: "Dubai", cost: 11999 },
    ];
    return (
        <div className='my-4'>
            <h2 className='text-2xl font-semibold mb-3'>Most Popular Packages</h2>
            <Link to='#' className='relative'>
                <img src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/bcp7c66dHeB9vZPY1RSJq1Jm_fnqXAXS.jpg" alt="pack-maldives" className='rounded-md w-full h-80 object-cover' />
                <div className='absolute left-8 bottom-5 text-white'>
                    <p className='text-md'>2 Packages</p>
                    <h1 className='text-3xl font-bold'>Istambul, Turkey</h1>
                    <h2 className='mt-3 text-md'>Starts From <b>BDT 7999</b></h2>
                </div>
            </Link>
            <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    packages.map(packg => <TourPack key={packg._id} img={packg.img} packgs={packg.packgs} name={packg.name} cost={packg.cost} />)
                }
            </div>
        </div>
    );
};

export default PopularPacks;