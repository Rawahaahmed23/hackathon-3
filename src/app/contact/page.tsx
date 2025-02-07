import Image from 'next/image'
import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'
import arrow from '@/app/public/assets/contents/arrow.png'

const page = () => {
  return (
    <div className='flex flex-col w-full'>
      {/* Hero */}
      <div className='w-full h-20'/> 
        <div className='flex flex-col w-full h-[316px] justify-center items-center'>
          <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
          <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-semibold absolute mt-26'>Contact</h1>
            <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
              <h2 className='font-medium'>Home</h2>
              <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
              <h2 className='font-light'>Contact</h2>
            </div>
        </div>
      {/* Contact page */}
      <div className="flex-grow px-4 py-12">
            <div className='w-fill flex flex-col gap-4 justify-center items-center'>
                <h2 className="text-5xl font-semibold">Get In Touch With Us</h2>
                <div className='sm:w-[644px] w-full items-center justify-center'>
                    <p className="text-[#9F9F9F] text-center">
                      For more information about our products and services, please feel free to drop us an email.</p>
                      <p className='text-[#9F9F9F] text-center'> Our staff will always be there to help you out.</p>
                </div>
            </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-36">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-black text-2xl" />
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-black text-2xl" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                  <p className="text-gray-600">Hotline: (+84) 456-6789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaClock className="text-black text-2xl" />
                <div>
                  <h3 className="text-lg font-medium">Working Time</h3>
                  <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="abc@email.com"
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Optional"
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about!"
                  rows={4}
                  className="mt-1 block w-full border rounded-md px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                />
              </div>

              <button
                type="submit"
                className="w-[237px] py-2 bg-transparent text-black font-normal rounded-md hover:bg-[#9F9F9F] border-2 border-black"
              >
                Submit
              </button>
            </form>
          </div>
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