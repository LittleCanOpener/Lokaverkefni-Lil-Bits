import React from 'react';
import FindOrder from '../order/FindOrder';
import BookTable from '../Other/Book';
import Founder from '../Other/Founder';
import Carousel from '../carousel/carousel';
import SlideOne from '../carousel/slideOne';
import SlideThree from '../carousel/slideThree';
import SlideTwo from '../carousel/slideTwo';

const HomeScreen: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="flex flex-col md:flex-row flex-grow">
                <div className="md:flex md:flex-col">
                    <div className="bg-[#e2e299] m-2 md:m-5 shadow-2xl rounded-lg">
                        <Carousel>
                            <SlideOne />
                            <SlideTwo />
                            <SlideThree />
                        </Carousel>
                    </div>
                    <div className="p-4 md:p-7">
                        <FindOrder />
                    </div>
                </div>
                <div className="p-4 md:p-7 flex-grow">
                    <div className="mb-2 md:mb-4">
                        <BookTable />
                    </div>
                    <div className="rounded-lg shadow-md">
                        <Founder />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;