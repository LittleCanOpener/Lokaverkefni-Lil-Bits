import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import tiny from '../../app/images/pexels-shvetsa-5217956.jpg';

export default function BookTable() {
    return (
        <> <div className='relative border-solid border-2 border-black'>
            <Image className="h-full max-w-80 bg-cover bg-center" src={tiny} alt="tiny pineapple" />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                <h2 className='flex flex-col m-6 h-96 text-2xl'>Book Table</h2>
                <Link to="/food">
                    <button className="mb-14 bg-slate-800 text-white ml-4 block py-2 px-3 rounded hover:bg-[#C16757] md:border-0">Book Now!
                    </button>
                </Link>
            </div>

        </div>

        </>
    );
};