import React from 'react';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const scrollCallback = () => {
            const scrolledFromTop = window.scrollY;
            setShown(() => scrolledFromTop > 300);
        };
        window.addEventListener('scroll', scrollCallback);
        scrollCallback();
        // clean-up function
        return () => {
            window.removeEventListener('scroll', scrollCallback);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <button
            aria-label='scroll to top'
            onClick={scrollToTop}
            className={`${shown ? 'scale-100' : 'scale-0'
                } w-12 h-12 transition-transform duration-200 flex fixed right-10 bottom-10 bg-primary rounded-full shadow-lg shadow-[#3E6053] justify-center items-center hover:bg-[#C16757] overflow-hidden cursor-pointer max-w-xs ease-in-out hover:scale-110`}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-6 h-6'
            >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
            </svg>
        </button >
    );
};
export default ScrollToTopButton;