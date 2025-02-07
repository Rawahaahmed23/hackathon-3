'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import navicon1 from '../public/assets/contents/navicon1.svg'
import navicon2 from '../public/assets/contents/navicon2.svg'
import navicon3 from '../public/assets/contents/navicon3.svg'
import navicon4 from '../public/assets/contents/navicon4.svg'
import Link from 'next/link';
import { navLinks } from '../public/constants';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation'
import navClose from '../public/assets/contents/nav-close.svg'
import line11 from '../public/assets/contents/Line 11.svg'
import rectangle from '../public/assets/contents/Rectangle 14.png'
import cartClose from '../public/assets/contents/cart-close.svg'
import '../hamburger.css'
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';



const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(0)
  const [navToggle, setNavToggle] = useState(false)
  const [navActive, setNavActive] = useState(0)
  const { totalItems, totalPrice, items } = useCart();

  const router = useRouter()
  
  return (
    <div className='flex flex-row justify-between w-full h-8 sm:h-20 sm:px-4 p-2 absolute'>
        <div className='hidden sm:flex flex-row justify-between font-normal text-xl justify-self-center sm:ml-[500px] items-center w-[30%] h-20 px-4 z-'>
            {navLinks.map((cart) => (
                <Link key={cart.id} href={`/${cart.link}`} className='font-medium'>{cart.title}</Link>
            ))}
            
        </div>
        <div className='flex flex-row justify-self-end items-center sm:space-x-12 mt-6 sm:mt-0 space-x-9'>
            <Image src={navicon1} width={30} height={30} alt="account"/>
            <Image src={navicon2} width={30} height={30} alt="account"/>
            <Image src={navicon3} width={30} height={30} alt="account"/>
            <Image src={navicon4} width={30} height={30} alt="account" />

        </div>
        {/* mobile nav */}
        <div className='sm:hidden flex flex-1 justify-end'>
          <button onClick={() => setNavToggle((prev) => !prev)} className={`hamburger hamburger--collapse z-20 ${navToggle ? 'is-active' : 'hamburger--collapse-r'}`} type='button'>
            <div className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </div>
          </button>
          <div className={`${navToggle ? 'flex scale-up-tr' : 'scale-out-tr hidden'} flex-col fixed bg-gray-800 bg-opacity-70 backdrop-blur-md w-full h-full top-0 z-10 right-0 `}> 
          <ul className='list-none flex flex-col justify-center top-10 items-center h-full'>
            {navLinks.map((nav, i) => (
              <li key={nav.link} onClick={() => {setNavActive(i); setNavToggle(false)}} className={`font-poppins font-normal cursor-pointer text-[30px] mb-4 ${i === navActive && 'navbtn rounded-md'} text-white`}>
                <Link href={`/${nav.link}`} className='block'>
                  {nav.title}
                </Link>
              </li>
            ))}

          </ul>
          </div>

        </div>

          
        {/* Cart */}
        <div className={toggle ? 'flex flex-col scale-up-tr drop-shadow-lg rounded-md fixed bg-main sm:w-[450px] w-full sm:h-[746px] h-full z-30 right-0 ' : 'scale-out-tr hidden'}> 
          <div className=' flex flex-col justify-start items-center h-full'>
              <div className='flex flex-row justify-between items-center w-full h-20 px-4 '>
                <h1 className='text-3xl font-semibold'>Shopping Cart</h1>
                <Image src={navClose} width={30} height={30} alt="account" onClick={() => setToggle(false)}/>
              </div>
              {/* cart product */}
              <div className='flex flex-row w-full h-[150px] py-2 px-6 mt-10 '>
                <Image src={rectangle} width={100} height={100} className='rounded-md h-[130px] w-[130px]' alt="account"/>
                  <div className='flex flex-col justify-center items-center w-full h-full'>
                    <h1 className='text-2xl font-semibold'>Asgaard Sofa</h1>
                    <div className='flex flex-row gap-3 justify-center items-center '>
                      <h1 className='text-xl font-medium'>1</h1>
                      <h1 className='text-xl font-light'>x</h1>
                      <h1 className='text-lg font-normal text-[#B88E2F]'>Rs. 250,000.00</h1>
                    </div>
                  </div>
                      <Image src={cartClose} width={30} height={30} alt="account"/>
              </div>
          </div>
          <div className='flex flex-row justify-between items-center w-full h-20 px-4 '>
            <h1 className='text-2xl font-normal justify-start'>Subtotal</h1>
            <h1 className='text-lg font-bold justify-center mr-20 text-[#B88E2F]'>R. 250,000.00</h1>
          </div>
            <div className='flex flex-row justify-start gap-3  items-center w-full h-20 px-4 '>
              <Link href='/cart' onClick={() => setToggle(false)}><Button className='bg-transparent text-black border-black border-2 rounded-full w-[130px] hover:bg-transparent'>View Cart</Button></Link>
              <Link href={'/checkout'} onClick={() => setToggle(false)}><Button className='bg-transparent text-black border-black border-2 rounded-full w-[130px] hover:bg-transparent'>Checkout</Button></Link>
            </div>
          </div>
        </div>
    
  )
}

export default Navbar