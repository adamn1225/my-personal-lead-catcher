'use client';
import { FaAnglesUp } from "react-icons/fa6";
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className='px-4 w-2/3 md:w-1/4 py-2 bg-sky-700 flex gap-2 justify-center items-center text-white font-bold rounded-md shadow-lg z-50'
        >
            <FaAnglesUp /> GET A QUOTE <FaAnglesUp />
        </button>
    );
};

export default ScrollToTopButton;