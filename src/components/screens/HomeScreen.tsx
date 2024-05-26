import React from 'react';
import Carousel from '../carousel/carousel';
import SlideOne from '../carousel/slideOne';
import SlideThree from '../carousel/slideThree';
import SlideTwo from '../carousel/slideTwo';
import FindOrder from '../order/FindOrder';
import BookTable from '../Other/Book';
import Founder from '../Other/Founder';




export default function HomeScreen() {
    return (
        <>
            <div className='flex justify-center gap-4'>
                <div className='grid grid-row-2 grid-flow-row'>
                    <div className='bg-white rounded-lg shadow-md p-4'>
                        <Carousel>
                            <SlideOne />
                            <SlideTwo />
                            <SlideThree />
                        </Carousel>
                    </div>
                    <div className='md:col-span-2 lg:col-span-1 bg-white rounded-lg shadow-md p-4'>
                        <FindOrder />
                    </div>
                </div>
                <div className='grid grid-row-2 grid-flow-row gap-4'>
                    <div>
                        <BookTable />
                    </div>

                    <div className='bg-white rounded-lg shadow-md p-4'>
                        <Founder />
                    </div>
                </div>

            </div>

        </>
    )
}