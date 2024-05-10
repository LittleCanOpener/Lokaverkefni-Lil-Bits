import Carousel from '@/components/carousel/carousel';
import SlideOne from '@/components/carousel/slideOne';
import SlideThree from '@/components/carousel/slideThree';
import SlideTwo from '@/components/carousel/slideTwo';
import React from 'react';

export default function HomeScreen() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <Carousel>
                    <SlideOne />
                    <SlideTwo />
                    <SlideThree />
                </Carousel>
            </div>
        </>
    )
}