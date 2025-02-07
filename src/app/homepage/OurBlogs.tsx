import Image from 'next/image'
import React from 'react'
import rectangle13 from '../public/assets/contents/Rectangle 13.png'
import rectangle14 from '../public/assets/contents/Rectangle 14.png'
import rectangle15 from '../public/assets/contents/Rectangle 15.png'
import group from '../public/assets/contents/Group.svg'
import calendar from '../public/assets/contents/uil_calender.svg'
import line1 from '../public/assets/contents/Line 1.png'

const OurBlogs = () => {
  return (
    <main className='flex flex-col items-contain justify-center w-full h-full bg-main'>
        <div className='flex flex-col justify-center sm:text-base text-center items-center w-full h-[200px] '>
            <h1 className='text-5xl'>Our Blogs</h1><br />
            <p className='text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection</p>
        </div>
        <div className='flex sm:flex-row flex-col gap-5 sm:gap-3 justify-center sm:items-center items-end w-full h-full '>
            <div className='flex flex-col justify-center items-center w-full h-full gap-4 ml-40'>
                <Image src={rectangle13} alt='rectangle13' width={1000} height={1000} className='sm:h-[393px] h-[300px] sm:w-[393px] w-[300px]'/>
                <h1 className='text-xl'>Going all-in with millennial design</h1>
                <h1 className='sm:text-3xl text-xl font-normal'>Read More</h1>
                <Image src={line1} alt='line1' width={100} height={10} />
                <div className='flex flex-row gap-2'>
                    <Image src={group} alt='group' width={20} height={20} />
                    <h1 className='font-light'>5 Mins</h1>
                    <Image src={calendar} alt='group' width={20} height={20} />
                    <h1 className='font-light'>12th October 2012</h1>                    
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-full gap-4'>
                <Image src={rectangle14} alt='rectangle13' width={1000} height={1000} className='sm:h-[393px] h-[300px] sm:w-[393px] w-[300px]'/>
                <h1 className='text-xl'>Going all-in with millennial design</h1>
                <h1 className='sm:text-3xl text-xl font-normal'>Read More</h1>
                <Image src={line1} alt='line1' width={100} height={10} />
                <div className='flex flex-row gap-2'>
                    <Image src={group} alt='group' width={20} height={20} />
                    <h1 className='font-light'>5 Mins</h1>
                    <Image src={calendar} alt='group' width={20} height={20} />
                    <h1 className='font-light'>12th October 2012</h1>                    
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-full gap-4 sm:mr-40 mr-0'>
                <Image src={rectangle15} alt='rectangle13' width={1000} height={1000} className='sm:h-[393px] h-[300px] sm:w-[393px] w-[300px]'/>
                <h1 className='text-xl'>Going all-in with millennial design</h1>
                <h1 className='sm:text-3xl text-xl font-normal'>Read More</h1>
                <Image src={line1} alt='line1' width={100} height={10} />
                <div className='flex flex-row gap-2'>
                    <Image src={group} alt='group' width={20} height={20} />
                    <h1 className='font-light'>5 Mins</h1>
                    <Image src={calendar} alt='group' width={20} height={20} />
                    <h1 className='font-light'>12th October 2012</h1>                    
                </div>
            </div>
        </div><br /><br /><br />
        <div className='flex flex-col justify-center items-center w-full h-[200px] '>
            <h1 className='text-2xl'>View All Posts</h1><br />
            <Image src={line1} width={160} height={100} alt='line' className='text-xl mb-20'/>
        </div>
    </main>
  )
}

export default OurBlogs