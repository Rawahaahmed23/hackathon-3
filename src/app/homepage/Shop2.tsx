import Image from 'next/image'
import React from 'react'
import graniteTable from '../public/assets/contents/Granite square side table 1.png'
import cloudSofa from '../public/assets/contents/Cloud sofa three seater + ottoman_3 1.png'
import line1 from '../public/assets/contents/Line 1.png'



const Shop2 = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center bg-[#FAF4F4] w-full sm:h-screen h-fit'>
        <div className='flex flex-col justify-center mr-10 pt-10 items-center'>
            <Image src={graniteTable} height={1000} width={1000} alt='granite table' className='sm:h-[600px] h-[300px] sm:w-[600px] w-[300px]'/><br />
            <div className=' sm:translate-y-[-150px] translate-y-[-80px] mb-0'>
            <h1 className='sm:text-[40px] text-[30px]'>Rocket Single</h1>
                <div className='sm:text-[25px] text-[20px] mt-0 traslate-y-[-200px]'>
                <h2>Shop Now</h2>
                <Image src={line1} width={120} height={100} alt='line' className='text-xl'/>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-between items-center mr-10 pt-10 object-cover'>
            <Image src={cloudSofa} height={1000} width={1000} alt='granite table' className='sm:h-[600px] h-[300px] sm:w-[600px] w-[300px]'/><br />
            <div className='sm:translate-y-[-150px] translate-y-[-80px] mb-0'>
            <h1 className='sm:text-[40px] text-[30px]'>Rocket Single</h1>
                <div className='sm:text-[25px] text-[20px] mt-0 traslate-y-[-200px]'>
                <h2>Shop Now</h2>
                <Image src={line1} width={120} height={100} alt='line' className='text-xl'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Shop2