import React from 'react';
import Carousel from '@/components/carousel/carousel';
import SlideOne from '@/components/carousel/slideOne';
import SlideThree from '@/components/carousel/slideThree';
import SlideTwo from '@/components/carousel/slideTwo';
import FindOrder from '../order/FindOrder';
import BookTable from '../Other/Book';
import Founder from '../Other/Founder';




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