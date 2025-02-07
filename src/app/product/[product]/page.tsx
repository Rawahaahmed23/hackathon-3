// 'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import arrow from '@/app/public/assets/contents/arrow.png'
import line5 from "@/app/public/assets/contents/Line 5.svg" 
import outDoorSofa from "@/app/public/assets/contents/Outdoor sofa set 2.png"
import asgaard from "@/app/public/assets/contents/Asgaard sofa 1.png"
import rating from "@/app/public/assets/contents/Group 88.svg"
import rectangle42 from "@/app/public/assets/contents/Rectangle 42.png"
import rectangle43 from "@/app/public/assets/contents/Rectangle 43.png"
import rectangle44 from "@/app/public/assets/contents/Rectangle 44.png"
import { getProduct } from '../../../sanity/sanity-utils'
import { Button } from '@/components/ui/button'
import { useCart } from '@/app/context/CartContext'
import { AddToCartButton } from '@/app/components/AddToCartButton'


type Props = {
    params: {product: string}
}

const page = async ({ params }: Props) => {
    // const { addToCart } = useCart();

    const slug = params.product
    const prod = await getProduct(slug)
    // const handleAddToCart = () => {
    //     addToCart({
    //       _id: prod._id,
    //       name: prod.name,
    //       price: prod.price,
    //       image: prod.image,
    //       quantity: 1
    //     });
    //   };

    return (
        <div key={prod._id} className='flex flex-col justify-center items-center'>
            <div className='w-full h-20'>
            </div> 
                {/* first line */}
                <div className='flex w-full px-20 flex-row gap-2 py-10 justify-start items-center'>
                    <h1 className='text-lg text-[#9F9F9F] font-normal'>Home</h1>
                    <Image src={arrow} alt='arrow' width={25} height={25} className='mx-2'/>
                    <h1 className='text-lg text-[#9F9F9F] font-normal'>Shop</h1>
                    <Image src={arrow} alt='arrow' width={25} height={25} className='mx-2'/>
                    <Image src={line5} height={30} width={10} alt='line5' className='h-8 justify-center ml-5 text-black'/>
                    <h1 className='text-lg ml-8 text-black font-semibold'>{prod.name}</h1>
                </div>
                {/* Product details */}
                <div className='felx flex-row w-full p-24 items-center  border-2 justify-between'>
                    
                    <div className='flex flex-row gap-10 '>
                        {/* side images */}
                        <div className='flex flex-col gap-10 p-8'>
                            <div className='flex flex-wrap flex-col h-[80px] w-[76px] rounded-lg bg-[#FFF9E5] items-center justify-center'>
                                <Image src={prod.image} height={100} width={100} alt='outdoor sofa' className='mb-2 mr-1  h-auto w-auto justify-center '/>
                            </div>
                            <div className='flex flex-wrap flex-col gap-3 h-[80px] w-[76px] rounded-lg bg-[#FFF9E5] items-center justify-center'>
                                <Image src={prod.image} height={100} width={100} alt='outdoor sofa' className='mb-2 mr-1  h-auto w-auto justify-center '/>
                            </div>
                            <div className='flex flex-wrap flex-col gap-3 h-[80px] w-[76px] rounded-lg bg-[#FFF9E5] items-center justify-center'>
                                <Image src={prod.image} height={100} width={100} alt='outdoor sofa' className='mb-2 mr-1  h-auto w-auto justify-center '/>
                            </div>
                            <div className='flex flex-wrap flex-col gap-3 h-[80px] w-[76px] rounded-lg bg-[#FFF9E5] items-center justify-center'>
                                <Image src={prod.image} height={100} width={100} alt='outdoor sofa' className='mb-2 mr-1  h-auto w-auto justify-center '/>
                            </div>
                        </div>
                        {/* big image */}
                        <div className='h-[500px] w-[423px] rounded-lg flex items-center bg-[#FFF9E5]'>
                            <Image src={prod.image} height={1000} width={1000} alt='outdoor sofa' className='my-2  h-auto w-full justify-center '/>
                        </div>
                        <div className='flex flex-col gap-6 px-10 py-3 items-start'>
                            <h1 className='text-5xl font-medium'>{prod.name}</h1>
                            <h1 className='text-3xl font-medium text-[#9F9F9F]'>Rs. {prod.price}</h1>
                                <div className='flex flex-row'>
                                    <Image src={rating} height={1000} width={1000} className='h-auto w-[150px]' alt='rating'/>
                                    <Image src={line5} height={30} width={10} alt='line5' className='h-8 justify-center ml-5 text-black'/>
                                    <h1 className='text-lg ml-8 text-[#9F9F9F] font-normal'>5 Customer reviews</h1>
                                </div>
                                <p className='text-wrap w-[424px]'>{prod.description}</p>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-[#9F9F9F]'>Size</span>
                                    <div className='flex flex-row w-[123px] sm:gap-3 gap-0 h-[60px] justify-between '> 
                                        <div className='bg-[#FBEBB5] sm:h-[30px] h-[30px] sm:w-[30px] w-[30px] text-sm rounded-lg py-1 px-3'>L</div>
                                        <div className='bg-[#FAF4F4] sm:h-[30px] h-[30px] sm:w-[30px] w-[30px] text-sm rounded-lg py-1 px-2'>XL</div>
                                        <div className='bg-[#FAF4F4] sm:h-[30px] h-[30px] sm:w-[30px] w-[30px] text-sm rounded-lg py-1 px-2'>XS</div>
                                    </div>
                                    <span className='text-[#9F9F9F]'>Color</span>
                                    <div className='flex flex-row w-[123px] sm:gap-3 gap-0 h-[60px] justify-between '> 
                                        <Image src={rectangle42} height={1000} width={1000} className='h-[30px] w-[30px]' alt='rating'/>
                                        <Image src={rectangle43} height={1000} width={1000} className='h-[30px] w-[30px]' alt='rating'/>
                                        <Image src={rectangle44} height={1000} width={1000} className='h-[30px] w-[30px]' alt='rating'/>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center justify between'>
                                    {/* <Button className='hover:bg-transparent bg-transparent h-16 w-30 border-2 border-gray-700 text-black font-semibold text-xl' onClick={handleAddToCart}>Add To Cart</Button> */}
                                    <AddToCartButton product={prod} />
                                </div>
                        </div>
                    </div>
                </div>
        </div>
      )
}

export default page