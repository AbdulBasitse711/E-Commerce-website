/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function ProductCard({ data, initialVisibleCount,i }) {
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
    const [products] = useState(data[i].recommendedProducts);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 12);
    };

    const handleSeeLess = () => {
        setVisibleCount(prevCount => prevCount - 12);
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-wrap justify-center gap-4'>
                {products.slice(0, visibleCount).map((d, k) => (
                    <div key={k} className='h-[330px] bg-white w-[200px] rounded-xl flex flex-col group hover:bg-emerald-400/15'>
                        <button onClick={() => { /* Add your click handler logic here */ }}>
                            <div className='pt-2'>
                                <div className='flex justify-center w-full h-40'>
                                    <img className='aspect-video object-contain border-none scale-75 group-hover:scale-100 animate-pulse group-hover:animate-none duration-200' src={d.links.images && d.links.images[0].href} alt="" />
                                </div>
                            </div>
                            <div className='w-5/6 ml-4'>
                                <div className='w-full h-2/6'>
                                    <div className='pt-1 pl-2 flex justify-center'>
                                        <p className='text-3xl '>
                                            {d.price.discount ? d.price.discount.price : d.price.price}
                                        </p>
                                        <div className='flex flex-col'>
                                            <span className='text-sm pl-1 pt-[2px]'>.00</span>
                                            <span className='text-xs pl-1 font-thin -mt-1'>PKR</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='pl-2 pt-1 w-full h-auto flex justify-center gap-4'>
                                    {d.price.discount && <p className='text-gray-500 text-sm line-through'>{d.price.formattedValue}</p>}
                                    <span className='text-sm text-red-600'>{d.price.discount && Math.floor(100 - d.price.discount.price * 100 / d.price.price) + '% OFF'}</span>
                                </div>
                                <div className={`${!d.price.discount && "pt-4"} text-sm text-ellipsis font-thin pl-2 w-full h-auto flex gap-1 text-center`}>
                                    {d.name.length > 60 ? d.name.substr(0, 60) + "...." : d.name}
                                </div>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-center mt-4'>
                {visibleCount < products.length && (
                    <button onClick={handleViewMore} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2'>
                        View More
                    </button>
                )}
                {visibleCount > initialVisibleCount && (
                    <button onClick={handleSeeLess} className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'>
                        See Less
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
