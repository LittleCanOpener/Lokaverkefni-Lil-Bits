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
            <div className='flex flex-col md:flex-row justify-center gap-4 text-[#C16757] font-serif font-bold'>
                <div className='grid grid-cols-1 md:grid-rows-2 grid-flow-row'>
                    <div className='bg-[#e2e299] m-5 shadow-2xl rounded-lg'>
                        <Carousel>
                            <SlideOne />
                            <SlideTwo />
                            <SlideThree />
                        </Carousel>
                    </div>
                    <div className='p-7'>
                        <FindOrder />
                    </div>
                </div>
                <div className='p-7'>
                    <div>
                        <BookTable />
                    </div>
                    <div className='rounded-lg shadow-md '>
                        <Founder />
                    </div>
                </div>
            </div>
        </>
    );
}
