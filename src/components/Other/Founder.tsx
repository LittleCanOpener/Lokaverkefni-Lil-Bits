import React from 'react';
import Image from 'next/image';
import CEO from '../../app/images/lil-bits-CEO.webp';

export default function Founder() {
    return (
        <>
            <div className='relative w-auto flex flex-col items-center shadow-lg border-solid border-2 border-black'>
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center">
                    <div className="w-full h-24 bg-black bg-opacity-50 flex flex-col items-center justify-center p-2">
                        <h2 className="text-white">Founder & CEO</h2>
                        <q className="text-white">We've got tiny lasagna, tiny pizza, tiny pie. Mmm! Little tiny fried eggs!</q>
                    </div>
                </div>
                <Image className="max-h-96 w-auto" src={CEO} alt="CEO" />
            </div>
        </>
    );
};