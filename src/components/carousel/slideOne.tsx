import React from 'react';
import Image from 'next/image';
import slideOneFood from '../../app/images/ImageFood.jpg';

const SlideOne = () => (
    <>
        <>
            <h1>
                Slide One
            </h1>
            <p>
                A short paragraph with some descriptive text.
            </p>
        </>
        <Image className="max-h-96 w-auto" src={slideOneFood} alt="Image of a burger and fries" />
    </>
);

export default SlideOne;