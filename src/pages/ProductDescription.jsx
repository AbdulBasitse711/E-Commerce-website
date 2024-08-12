/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Container } from '../components';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function ProductDescription() {
    const { data, productId, productIndex } = useSelector(state => state.products);

    const product = data[productId]
    const navigate = useNavigate()

    const [imgURL, setImgURL] = useState(
        product && product.recommendedProducts[productIndex].links.images[0]?.href.slice(0, product.recommendedProducts[productIndex].links.images[0]?.href.length - 10)
    )

    const [buttonColor, setButtonColor] = useState('bg-[#0e63b8]');
    const [textColor, setTextColor] = useState('text-white');
    const [buttonText, setButtonText] = useState('ADD TO CART');
    const [counter, setCounter] = useState(1);
    const [showCartedPrice, setShowCartedPrice] = useState('hidden');
    const [itemAddedToCart, setItemAddedToCart] = useState(false);
    const [activeIMG, setActiveIMG] = useState(0);

    class CartProductsArray {
        constructor(image, Name, quantity, price, productNumber) {
            this.image = image;
            this.Name = Name;
            this.quantity = quantity;
            this.price = price;
            this.productNumber = productNumber;
        }
    }

    function isPresent(arr, value) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].Name === value) return true;
        }
        return false;
    }

    const handleAddToCart = () => {
        if (showCartedPrice === 'hidden') {
            setButtonColor('bg-gray-50');
            setTextColor('text-black');
            setButtonText('ITEM ADDED TO CART');
            setShowCartedPrice('block');
            setItemAddedToCart(true);
            // Add additional logic for updating cart
        }
    };

    const handleIncrement = () => {
        if (counter < 10) {
            setCounter(counter + 1);
            // Add logic to update quantity in cart if needed
        }
    };

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            // Add logic to update quantity in cart if needed
        }
    };


    return (
        <div className='pb-28'>
            <Container>

                <div className='w-full h-auto flex gap-3 text-gray-500  mt-16 pt-2'>
                    <Link to={'/'} className='hover:text-black'>
                        Home
                    </Link>
                    <span>&#10217;</span>
                    <button disabled={true} onClick={() => navigate(``)} className={'text-emerald-400'}>
                        {product && product.recommendedProducts[productIndex]?.name}
                    </button>


                </div>

                <div className='w-full h-auto bg-gray-100'>
                    <div className='w-full h-auto grid sm:grid-cols-10 '>

                        <div className=' sm:col-span-3 w-full   mt-6'>
                            <div>

                                <img
                                    src={imgURL}
                                    className='w-full aspect-square object-contain '
                                    alt=""
                                />
                            </div>
                            <div className='w-full  flex gap-2'>
                                {
                                    product && product.recommendedProducts[productIndex].links.images.map((image, k) => (
                                        <div key={k} className='py-2'>
                                            <button
                                                onClick={() => {
                                                    setImgURL(() => image.href.slice(0, image.href.length - 10))
                                                    setActiveIMG(k)
                                                }}>
                                                <img
                                                    src={image.href}
                                                    alt="" className={`h-20  ${k == activeIMG ? 'opacity-100' : 'opacity-50'} duration-200 transition-all`} />
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <div className=' sm:col-span-4 pr-6 w-full h-auto bg-grey-100'>
                            <div className='ml-7 mt-2'>
                                <h3 className=' text-2xl text-gray-800 pt-3'>
                                    {product && product.recommendedProducts[productIndex]?.name}
                                </h3>
                                {product.recommendedProducts[productIndex].size && (
                                    <h4 className='text-m mt-1'>
                                        Pack size : {product.recommendedProducts[productIndex].size}
                                    </h4>
                                )}
                                <div className='flex items-center gap-2 py-2 '>
                                    <div className='flex'>
                                        <img className='h-4' src="//laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png" alt="" />
                                        <img className='h-4' src="//laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png" alt="" />
                                        <img className='h-4' src="//laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png" alt="" />
                                        <img className='h-4' src="//laz-img-cdn.alicdn.com/tfs/TB1yQX4Ah9YBuNjy0FfXXXIsVXa-30-30.png" alt="" />
                                        <img className='h-4' src="//laz-img-cdn.alicdn.com/tfs/TB1Nx3Lz3mTBuNjy1XbXXaMrVXa-30-30.png" alt="" />
                                    </div>

                                    <div>
                                        <p className='text-sm text-emerald-400'>242 ratings</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-gray-500 text-sm'>Brand:</p>
                                    <p className='text-emerald-400 text-sm'>No Brand
                                    </p>
                                </div>

                                <div className='w-full border my-4  '></div>

                                {product && (
                                    product.recommendedProducts[productIndex].price.discount ? (
                                        <div className='flex items-center mt-2'>
                                            <p className='text-2xl font-bold text-red-600'>
                                                {product.recommendedProducts[productIndex].price.discount.formattedValue}
                                            </p>
                                            <p className='text-gray-600 line-through pt-1 pl-2'>
                                                {product.recommendedProducts[productIndex].price.formattedValue}
                                            </p>
                                            <span className='font-thin text-sm pl-1 pt-1'>(inc. VAT)</span>
                                        </div>
                                    ) : (
                                        <div className='flex items-center'>
                                            <p className='text-xl font-bold mt-2'>
                                                {product && product.recommendedProducts[productIndex].price.formattedValue}
                                            </p>
                                            <span className='font-thin text-sm pl-2 pt-2'>(inc. VAT)</span>
                                        </div>
                                    )
                                )}
                                {product?.recommendedProducts[productIndex]?.price.discount && (
                                    <div className='w-4/5 h-8 bg-red-50 mt-2 border-red-500 border-[1px] rounded-sm text-red-500 text-left pt-[3px] p-1 flex gap-1'>
                                        <p className='font-bold pl-1'>
                                            {product.recommendedProducts[productIndex].price.discount.value}% OFF
                                        </p>
                                        <span className='text-thin'>ends on {product.recommendedProducts[productIndex].price.discount.endDate}</span>
                                    </div>
                                )}

                                <div className=' mt-4'>
                                    <div className='w-full h-auto bg-gray-50 rounded-lg pb-4'>
                                        <p className='p-4 text-lg font-bold'>Get it delivered by:</p>
                                        <div className='flex w-full h-12 px-4'>
                                            <div className='w-full h-full border-gray-300 border-[2px] rounded-lg flex items-center'>
                                                <img
                                                    src="https://www.svgrepo.com/show/22694/delivery-truck.svg"
                                                    className='w-9 h-9 ml-3'
                                                    alt=""
                                                />
                                                <p className='text-xl font-semibold ml-5'>Tomorrow 10 AM - 11 PM</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-12 flex justify-evenly mt-4'>
                                            <div className='flex items-center justify-center bg-white w-2/6 rounded-lg cursor-pointer border-2 shadow-md'>
                                                <button className='w-1/2 text-xl' onClick={handleDecrement}>-</button>
                                                <span className='text-xl mb-1'>{counter}</span>
                                                <button className='w-1/2 text-xl' disabled={counter === 10} onClick={handleIncrement}>+</button>
                                            </div>
                                            <div className={`${buttonColor} w-3/6 rounded-lg cursor-pointer shadow-md flex justify-center items-center`}>
                                                <button
                                                    onClick={handleAddToCart}
                                                    className={`w-full h-full ${textColor}`}
                                                >
                                                    {buttonText}
                                                </button>
                                            </div>
                                        </div>
                                        <div className={`text-center py-4 text-red-600 ${showCartedPrice}`}>
                                            {/* Show carted price or additional messages here */}
                                        </div>
                                    </div>
                                </div>
                                <div className=' mt-4 flex justify-between  font-light text-sm px-2 text-gray-500'>
                                    <p className='hover:text-gray-400 cursor-pointer'>Add to wishlist</p>
                                    <p className='hover:text-gray-400 cursor-pointer'>Share</p>
                                </div>
                            </div>

                        </div>

                        <div className=' sm:col-span-3 mt-6 w-full'>
                            <div className='bg-white pb-2'> 
                                <div className='w-full flex justify-between items-center gap-4 p-4 h-auto '>
                                    <div className=''>
                                        <img src="../../src/assets/placeholder.png" className='w-5' alt="" />
                                    </div>
                                    <div className='text-sm'>
                                        <p>Islamabad, Islamabad - I-8, Markaz</p>
                                    </div>
                                    <div>
                                        <button className={`bg-[#0e63b8] hover:text-gray-300 duration-200 p-2 rounded-lg text-white`}>Change</button>
                                    </div>
                                </div>

                                <div className='w-full flex justify-center'>
                                    <div className='w-[90%]  border'></div>
                                </div>

                                <div className='w-full flex justify-between items-center p-4 h-auto '>
                                    <div className=''>
                                        <img src="https://www.svgrepo.com/show/22694/delivery-truck.svg" className='w-5' alt="" />
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm '>Standard Delivery <span className='font-thin'>28 Jul - 30 Jul <br /><span className='text-xs text-gray-500'>4 - 6 day(s)</span></span></p>
                                    </div>
                                    <div>
                                        <p className='text-m font-semibold p-4'>RS. 135</p>
                                    </div>
                                </div>

                                <div className='w-full flex gap-5 items-center px-4 pb-4 h-auto '>
                                    <div className=''>
                                        <img src="../../src/assets/payment-method.png" className='w-5' alt="" />
                                    </div>
                                    <div>
                                        <p className=' text-sm '>Cash on Delivery Available</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white mt-2'>
                                <div className='p-4'>
                                    <p className='pb-1 text-sm text-gray-500'>Sold by</p>
                                    <p>Store_Name (Location)</p>
                                </div>

                                <div className='w-full flex justify-center pb-4'>
                                    <button className='text-emerald-400 hover:text-emerald-200'>Visit Store</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProductDescription;
