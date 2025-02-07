import React from 'react'
import Image from 'next/image'
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import arrow from '@/app/public/assets/contents/arrow.png'
import filter from '@/app/public/assets/contents/system-uicons_filtering.png'
import grid from '@/app/public/assets/contents/ci_grid-big-round.png'
import viewList from '@/app/public/assets/contents/bi_view-list.png'
import line5 from "@/app/public/assets/contents/Line 5.svg"
import Productlist from './Productlist'
import Footer from '../homepage/Footer'

const page = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      {/* hero section */}
      <div className='w-full h-20'/> 
        <div className='flex flex-col w-full h-[316px] justify-center items-center'>
          <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
          <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-semibold absolute mt-26'>Shop</h1>
            <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
              <h2 className='font-medium'>Home</h2>
              <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
              <h2 className='font-light'>Shop</h2>
            </div>
        </div>
        {/* pink bar */}
        <div className='flex sm:flex-row flex-col items-center mt-16 sm:h-[100px] h-[130px] sm:pt-0 pt-5 w-full bg-[#FAF4F4]'> 
          <div className='flex flex-row sm:ml-80 ml-0 gap-3 justify-center w-[30px] '>
            <Image src={filter} height={25} width={25} alt='filter'  className='sm:h-[25px] h-[20px] w-[25px]'/>
            <h2>Filter</h2>
            <Image src={grid} height={25} width={25} alt='grid' className='sm:h-[25px] h-[20px] w-[25px]'/>
            <Image src={viewList} height={25} width={25} alt='viewList' className='sm:h-[25px] h-[20px] w-[25px]'/>
            <Image src={line5} height={10} width={25} alt='line5' className='h-6 justify-start ml-5 text-black'/>
          <div className='flex flex-row justify-'>
              <h2 className='text-nowrap sm:text-lg text-sm'>Showing 1–16 of 32 </h2>
          </div>
          </div>
          {/* <div className='flex flex-row ml-24 gap-3 justify-start w-[85px]'>
          </div> */}
          <div className='flex flex-row justify-center items-center gap-4 ml-20'>
            <h1 className='lg:translate-x-[500px] sm:translate-x-[100px]'>Show</h1>
            <div className='bg-main sm:w-[55px] w-[30px] sm:h-[55px] h-[35px] justify-between items-center lg:translate-x-[100px] sm:translate-x-[500px]'>
              <h2 className='sm:mt-3 mt-1 sm:ml-4 ml-2 sm:text-xl text-md text-[#9F9F9F]'>16</h2>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-4 ml-20'>
            <h1 className='lg:translate-x-[450px] sm:translate-x-[100px]'>Sort By</h1>
            <div className='bg-main sm:w-[188px] w-[80px] sm:h-[55px] h-[30px] justify-between items-center lg:translate-x-[450px] sm:translate-x-[100px]'>
              <h2 className='sm:mt-3 mt-1 sm:ml-4 ml-2 sm:text-xl text-md text-[#9F9F9F]'>Default</h2>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 mx-20 w-full bg-main'>
          <div className='flex flex-col items-center justify-center w-[287px] '></div>
        </div>
        <Productlist/><br /><br />
        {/* Nav options */}
        
          <div className='flex flex-row sm:w-[400px] w-[200px] sm:gap-3 gap-0 h-[80px] justify-between '> 
            <div className='bg-[#FBEBB5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>1</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>2</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>3</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[90px] w-[55px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>Next</div>
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
        
    </main>
  )
}

export default page