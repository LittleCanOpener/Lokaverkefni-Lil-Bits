import React from 'react';
import Image from 'next/image';
import slideTwoFood from '../../app/images/ImageDrink.jpg';

const SlideTwo = () => (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
        <div className="inline-block justify-center w-2/4 sm:text-left sm:mr-4">
            <h1 className='text-3xl font-serif border-b-4 m-4'>
                Smoky Oak Barrel Reserve
            </h1>
            <p>
                Savor the rich and complex flavors of our Smoky Oak Barrel Reserve whiskey
            </p>
            <q>
                Crafted to perfection for connoisseurs like you.
            </q>
        </div >
        <div className='sm:mt-0'>
            <Image className="rounded max-h-96 w-auto p-7" src={slideTwoFood} alt="Image of drinks" />
        </div>
    </div >
);

export default SlideTwo;