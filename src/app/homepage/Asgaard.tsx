import Image from 'next/image'
import React from 'react'
import asgaard from '../public/assets/contents/Asgaard sofa 1.png'
import { Button } from '@/components/ui/button'

const Asgaard = () => {
  return (
    <div className='flex sm:flex-row flex-col sm:p-0 p-5 justify-between w-full h-[639px] bg-[#FFF9E5]'>
        <Image src={asgaard} width={1000} height={1000} alt='sofa' className='sm:h-[1000px] h-[400px] sm:w-[1000px] w-[400px]'/>
            <div className='flex flex-col justify-center items-center gap-4 mr-20'>
                <h1 className='text-xl font-normal'>New Arrivals</h1>
                <h1 className='text-6xl font-semibold'>Asgaard Sofa</h1><br />
                <Button className='bg-transparent text-black border-black border-2 sm:w-[255px] w-[155px] h-[62px] hover:bg-transparent text-2xl rounded-none'>Order Now</Button>
            </div>
    </div>
  )
}

export default Asgaard