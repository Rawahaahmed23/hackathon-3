import React from 'react'
import rectangle from '../public/assets/contents/Rectangle_17.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const Ourinsta = () => {
  
  return (
    <main className='flex flex-col border-2 justify-between sm:pt-0  gap-0 items-center w-full sm:h-[450px] h-[350px]' style={{ backgroundImage: `url("../
    public/assets/contents/Rectangle_17.png")`, backgroundSize: 'cover'}} >
      <div className='flex flex-col justify-center items-center h-full w-full sm:gap-10 gap-0'>
        <Image src={rectangle} width={1000} height={1000} alt='rectangle' className='sm:h-inherit h-[350px] sm:w-full bg-cover absolute'>
        </Image>
          <h1 className='sm:text-8xl text-5xl sm:translate-y-0 translate-y-[-50px] font-semibold absolute'>Our Instagram</h1> <br />
          <h1 className='absolute sm:mt-10 mt-3 sm:translate-y-[80px] translate-y-[10px] sm:text-2xl text-xl font-light'>Follow our store on Instagram</h1>
          
          <button className='rounded-full absolute mt-10 sm:translate-y-[160px] translate-y-[100px] bg-[#FAF4F4] h-[50px] w-[200px] text-black drop-shadow-md'>Follow Us</button>
      </div>
    </main>
  )
}

export default Ourinsta