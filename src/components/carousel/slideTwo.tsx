import React from 'react';
import Image from 'next/image';
import slideTwoFood from '../../app/images/ImageDrink.jpg';

const SlideTwo = () => (
    <>
        <>
            <h1>
                Slide Two
            </h1>
            <p>
                A short paragraph with some descriptive text.
            </p>
        </>
        <Image className="max-h-96 w-auto" src={slideTwoFood} alt="Image of drinks" />
    </>
);

export default SlideTwo;