import React from 'react';

const Founder = () => (
    <>
        <div>
            <div className='relative w-auto flex flex-col items-center shadow-lg overflow-hidden'>
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center">
                    <div className="w-full h-24 bg-black bg-opacity-50 flex flex-col items-center justify-center p-2">
                        <h2 className="text-white">Founder & CEO</h2>
                        <q className="text-white">We've got tiny lasagna, tiny pizza, tiny pie. Mmm! Little tiny fried eggs!</q>
                    </div>
                </div>
                <img className="w-auto rounded-md" src="/images/lil-bits-CEO.webp" alt="CEO" />
            </div>
        </div>
    </>
);

export default Founder;