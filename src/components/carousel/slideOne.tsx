import React from 'react';
import Image from 'next/image';
import slideOneFood from '../../app/images/ImageFood.jpg';

const SlideOne = () => (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
        <div className="w-full sm:w-2/4 sm:text-left sm:mr-4">
            <h1 className="text-3xl font-serif border-b-4 m-4">
                Silly Sauce Supreme Burger
            </h1>
            <p>Experience the joy of a perfectly crafted burger</p>
            <q>where every bite brings a taste of happiness and a smile to your face</q>
        </div>
        <div className="sm:mt-4">
            <Image className="rounded max-h-96 w-full sm:w-auto" src={slideOneFood} alt="Image of a burger and fries" />
        </div>
    </div>
);


export default SlideOne;
