'use client'
import Image from 'next/image'
import React from 'react'
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'
import arrow from '@/app/public/assets/contents/arrow.png'
import asgaard from '@/app/public/assets/contents/Asgaard sofa 1.png'
import yellowDelete from '@/app/public/assets/contents/yellow-delete.svg'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { CheckoutButton } from '../components/checkout-button'

const page = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  console.log("items are: " + items);
  
  return (
    <div className='flex flex-col  w-full justify-between '>
      {/* Hero */}
        <div className='w-full h-20'/> 
          <div className='flex flex-col w-full h-[316px] justify-center items-center'>
            <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
            <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-semibold absolute mt-26'>Cart</h1>
          <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
              <h2 className='font-medium'>Home</h2>
              <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
              <h2 className='font-light'>Cart</h2>
          </div>
        </div>
        {/* form */}
        <div className='flex contain-layout sm:flex-row flex-col w-full h-[525px] justify-between  items-center gap-3 p-10 mb-32'>
          <div className='flex flex-row sm:flex-row justify-between items-center'>
            <div className='sm:w-[817px] w-[400px] h-[216px] translate-y-[-100px] flex flex-col '>
              <div className='w-full h-[55px] bg-[#FFF9E5] p-4 font-medium  justify-center flex flex-row sm:gap-16 gap-7'>
                <h1>Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Subtotal</h1>
              </div>
              {items.map(item => (
              <div key={item._id} className='w-full h-[55px] bg-main p-4 flex flex-row sm:gap-16 gap-38 pb-20'>
                <Image src={item.image} height={100} width={100} alt='asgaard' className='bg-[#FBEBB5] rounded-md sm:h-[60px] h-[100px] sm:w-[106px] w-[50px]'/>
                <div className='flex flex-row justify-start pt-16 items-end sm:gap-16 gap-10'>
                  <h1 className='text-[#9F9F9F] sm:text-base text-sm'>Asgaard Sofa</h1>
                  <h1 className='text-[#9F9F9F] sm:text-base text-sm'>{item.price}</h1>
                  <div className='border-2 sm:h-[32px] h-[26px] sm:w-[32px] w-[26px] sm:text-base text-sm rounded-lg text-black px-2 translate-y-1' >{item.quantity}</div>
                  <h1 className='text-black sm:text-base text-sm' >Rs. {totalPrice.toFixed(2)}</h1>
                  <Image src={yellowDelete} height={20} width={20} alt='delete' className='sm:mt-1 mt-0' onClick={() => removeFromCart(item._id)}/>
                </div>
              </div>
              ))}
            </div>
          </div>
          {/* 2nd div */}
          <div className='sm:h-[390px] h-[390px] sm:w-[393px] w-[300px] bg-[#FFF9E5] rounded-lg flex flex-col mx-20 sm:gap-8 gap-2 justify-center items-center'>
            <h1 className='sm:text-4xl text-2xl font-bold'>Cart Totals</h1>
            <div className='flex flex-row justify-center items-start w-full p-3 gap-16 '>
              <h1 className='font-medium sm:text-lg text-sm'>Subtotal</h1>
              <h1 className='font-medium sm:text-lg text-sm text-[#9F9F9F]'>RS. {totalPrice.toFixed(2)}</h1>
            </div>
            <div className='flex flex-row justify-center items-start w-full p-3 gap-16'>
              <h1 className='font-medium  text-lg'>Total</h1>
              <h1 className='font-medium text-2xl text-[#B88E2F]'>RS.{totalPrice.toFixed(2)}</h1>
            </div>
              {/* <Link href={'/checkout'}><Button className='bg-transparent hover:bg-transparent text-black sm:w-[222px] w-[150px] sm:h-[59px] h-[40px] border-2 border-black rounded-2xl sm:text-xl text-base'>Checkout</Button></Link> */}
              <CheckoutButton/>
          </div>
        </div>      
          {/* pink section */}
          <div className='flex sm:flex-row flex-col justify-center items-center gap-8 p-24 w-full sm:h-[300px] h-fit bg-[#FAF4F4]'>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl font-semibold sm:text-nowrap text-center'>Free Delivery</h1>
                <h2 className='text-xl font-normal text-center text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</h2>
              </div>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl font-semibold sm:text-nowrap text-center'>90 Days Return</h1>
                <h2 className='text-xl text-[#9F9F9F] text-center font-normal'>If goods have problems, consectetur adipim scing elit.</h2>
              </div>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl  font-semibold sm:text-nowrap text-center'>Secure Payment</h1>
                <h2 className='text-xl text-[#9F9F9F] text-center font-normal'>100% secure payment, consectetur adipim scing elit.</h2>
              </div>
        </div>
    </div>
  )
}

export default page