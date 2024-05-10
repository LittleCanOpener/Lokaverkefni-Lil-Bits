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
        <div className="flex flex-col items-center border-solid border-2 border-black">
            <div className="overflow-hidden relative" style={{ width: "100%", height: "300px" }}>
                <div className="flex transition-transform ease-in-out duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {children.map((slide, index) => (
                        <div key={index} className="flex-none w-full" style={{ opacity: currentSlide === index ? 1 : 0 }}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <button onClick={() => handleSlideChange(-1)} className="px-4 py-2 bg-gray-200 text-gray-800 mr-2 rounded hover:bg-[#C16757] md:border-0 text-2xl">Left</button>
                <button onClick={() => handleSlideChange(1)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-[#C16757] md:border-0 text-2xl">Right</button>
            </div>
        </div>
    );
};

export default Carousel;

