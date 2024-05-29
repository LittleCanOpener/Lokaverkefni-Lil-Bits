import React, { useState, useEffect } from "react";

interface IProps {
    children: JSX.Element[];
}

const Carousel: React.FC<IProps> = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [timer, setTimer] = useState<NodeJS.Timeout>();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % children.length);
        }, 24000); // Timer

        setTimer(interval);

        return () => clearInterval(interval);
    }, [currentSlide, children.length]);

    const handleSlideChange = (direction: number) => {
        clearInterval(timer!);
        setCurrentSlide((currentSlide + direction + children.length) % children.length);
        setTimer(undefined);
    };

    return (
        <div className="relative overflow-hidden text-center">
            <div className="flex transition-transform ease-in-out duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {children.map((slide, index) => (
                    <div key={index} className="flex-none flex justify-center items-center w-full" style={{ opacity: currentSlide === index ? 1 : 0 }}>
                        {slide}
                    </div>
                ))}
            </div>
            <div className="bottom-4 left-0 right-0 flex justify-center m-3 p-3">
                <button onClick={() => handleSlideChange(-1)} className="px-4 py-2 bg-[#3E6053] text-white rounded hover:bg-[#C16757] md:border-0 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <button onClick={() => handleSlideChange(1)} className="px-4 py-2 bg-[#3E6053] text-white rounded hover:bg-[#C16757] md:border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;


