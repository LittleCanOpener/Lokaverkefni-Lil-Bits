import BookTable from '@/components/book';
import Carousel from '@/components/carousel/carousel';
import SlideOne from '@/components/carousel/slideOne';
import SlideThree from '@/components/carousel/slideThree';
import SlideTwo from '@/components/carousel/slideTwo';
import Founder from '@/components/founder';
import React from 'react';
import FindOrder from './FindOrder';

export default function HomeScreen() {
    return (
        <>
            <div className='grid grid-cols-2 grid-flow-row justify-items-center'>
                <div>
                    <Carousel>
                        <SlideOne />
                        <SlideTwo />
                        <SlideThree />
                    </Carousel>
                </div>
                <div>
                    <BookTable />
                </div>
                <div>
                    <FindOrder />
                </div>
                <div>
                    <Founder />
                </div>
            </div>

        </>
    )
}