import BookTable from '@/components/book';
import Carousel from '@/components/carousel/carousel';
import SlideOne from '@/components/carousel/slideOne';
import SlideThree from '@/components/carousel/slideThree';
import SlideTwo from '@/components/carousel/slideTwo';
import Founder from '@/components/founder';
import React from 'react';
import FindOrder from '../../components/FindOrder';

export default function HomeScreen() {
    return (
        <>
            <div className='flex justify-center gap-4'>
                <div className='grid grid-row-2 grid-flow-row'>
                    <div >
                        <Carousel>
                            <SlideOne />
                            <SlideTwo />
                            <SlideThree />
                        </Carousel>
                    </div>
                    <div>
                        <FindOrder />
                    </div>
                </div>
                <div className='grid grid-row-2 grid-flow-row gap-4'>
                    <div>
                        <BookTable />
                    </div>

                    <div>
                        <Founder />
                    </div>
                </div>

            </div>

        </>
    )
}