import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ImageSlider() {

    let primaryColor = 'bg-emerald-400'

    const sliderImages = [
        {
            image: "https://cdnprod.mafretailproxy.com/assets/images/Carrefour_Web_Banner_2464x560_85468e9cc2.png"
        },
        {
            image: "https://cdnprod.mafretailproxy.com/assets/images/WEB_d8dcc00f3a.png"
        },
        {
            image: "https://cdnprod.mafretailproxy.com/assets/images/web_hb_rb_upto15off_37205558a2.png"
        },
        {
            image: "https://cdnprod.mafretailproxy.com/assets/images/web_cheapest_290bc75dd5.png"
        },
        {
            image: "https://cdnprod.mafretailproxy.com/assets/images/web_banner_for_nonfood_99dc53e1b6.png"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [sliderImages.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };

    return (
        <div className='w-full h-52 flex justify-evenly items-center '>
            <div className=''>
                <button onClick={goToPrevious} className={`text-white hover:text-emerald-400 duration-300`}>
                    <span className=' text-5xl'>&#10094;</span>
                </button>
            </div>

            <div className='w-4/5 h-full flex justify-center group hover:cursor-pointer'>
                {sliderImages.map((slider, index) => (
                    <div
                        key={slider.image}
                        className={`absolute w-4/5 h-52 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={slider.image} alt={`Slide ${index}`} className='w-full h-full group-hover:scale-105 duration-200' />
                    </div>
                ))}

                <div className='z-10 flex
                 items-end mb-3 '>
                    {sliderImages.map((_, index) => (
                        <div
                            key={index}
                            className={`mx-1 rounded-full ${index === currentIndex ? `${primaryColor} duration-200 w-2 px-2 h-2  tran ` : 'w-2 h-2  bg-gray-200'}`}
                        ></div>
                    ))}
                </div>
            </div>

            <div className=''>
                <button onClick={goToNext} className={`text-white hover:text-emerald-400 duration-300`}>
                <span className=' text-5xl'>&#10095;</span>
                </button>
            </div>
        </div>
    );
}

export default ImageSlider;
