'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import hero from '../public/assets/contents/hero.png'
import useMediaQuery from 'react-responsive'
import { type } from 'node:os'
import line1 from '../public/assets/contents/Line 1.png'

const Hero = () => {
    const [isDesktop, setIsDesktop] = useState< 'small' | 'medium' | 'large' >('small')

    let windowsWidth : number
    const checkWindowSize = () => {
        if(typeof window !== 'undefined') {
           windowsWidth = window.innerWidth
        }
        if (windowsWidth <= 1024) {
            setIsDesktop('medium')
        }
        else if (windowsWidth >=1024){
                setIsDesktop('large')
        }
        else if(windowsWidth <= 768){
            setIsDesktop('small')            
        }
    }

    useEffect(() => {
      checkWindowSize()
      
    }, [isDesktop])
    
  return (
    <main className='flex sm:flex-row flex-col   justify-between w-full sm:h-[1000px] h-[800px] bg-[#FBEBB5]'>
        <div className='flex flex-col sm:translate-y-[300px] translate-y-[500px] sm:max-w-fit max-w-64 sm:translate-x-[300px] translate-x-[50px]'>
            <div className='sm:text-[60px] text-[40px] font-medium'>
            <h1>Rocket Single</h1>
            <h1>seater</h1>
            </div><br />
            <div className='text-[25px]'>
               <h2>Shop Now</h2>
            </div>
            <Image src={line1} width={100} height={100} alt='line' className='text-xl'/>
        </div>
        <br className='sm:hidden'/>
        <div className='flex flex-col items-end justify-between object-cover self-end mt-[-100px] cm:mr-20 mr-10 top-0 h-[900px] w-[800px]'>
            <Image src={hero} width={1000} height={1000} alt='sofa' className={isDesktop === 'large'?'h-[700px] w-[700px]' : 'h-[300px] w-[300px] mb-[-30px]'}/>
        </div>
    </main>
  )
}

export default Hero