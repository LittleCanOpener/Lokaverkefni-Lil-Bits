import React from 'react';
import { Link } from 'react-router-dom';

export default function BookTable() {
    return (
        <>
            <div className=' m-6 h-96 bg-[#e2e299] rounded-md shadow-md'>
                <div className='relative flex flex-col items-center justify-center text-center'>
                    <h2 className='flex flex-col text-2xl pt-6 pb-44'>Find you're Order here.</h2>
                    <Link to="/food">
                        <button className="transition duration-300 ease-in-out hover:scale-110 font-bold shadow-md bg-[#3E6053] text-white ml-4 block py-5 px-5 rounded-md hover:bg-[#C16757] md:border-0">Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};