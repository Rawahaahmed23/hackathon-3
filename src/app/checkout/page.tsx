import Image from 'next/image'
import React from 'react'
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'
import arrow from '@/app/public/assets/contents/arrow.png'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const page = () => {
  return (
    <div className='flex flex-col w-full justify-between '>
      {/* Hero */}
        <div className='w-full h-20'/> 
          <div className='flex flex-col w-full h-[316px] justify-center items-center'>
            <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
            <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-semibold absolute mt-26'>Checkout</h1>
          <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
              <h2 className='font-medium'>Home</h2>
              <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
              <h2 className='font-light'>Checkout</h2>
          </div>
        </div>
        {/* form */}
      <div className='flex flex-row w-full justify-between gap-2 p-10 '>

        <div className='flex flex-row w-[45%]  p-4 justify-center items-start '>
          <div className='flex flex-col w-[45%] gap-10 '>
            <h1 className='text-4xl font-bold'>Billing Details</h1>
            <div className="space-y-6">
            
            <form className=" space-y-16 mt-10 ">
              <div className='flex flex-row gap-5'>
                <div className='flex flex-col'>
                  <label htmlFor="name" className="block text-xl font-semibold text-black">First Name</label><br />
                  <input
                    id="name"
                    type="text"
                    placeholder=""
                    className="mt-1 block w-[211px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="name" className="block text-xl font-semibold text-black"> Name</label><br />
                      <input
                        id="name"
                        type="text"
                        placeholder=""
                        className="mt-1 block w-[211px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                      />
                    </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xl font-semibold text-black">Company Name (Optional)</label><br />
                  <input
                    id="email"
                    type="email"
                    placeholder=""
                    className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                    />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xl font-semibold text-black">Country / Region</label><br />
                  <select name="country" id="country" className='w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]'>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="USA">USA</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>                                    
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xl font-semibold text-black">Street Address</label><br />
                  <input
                    id="subject"
                    type="text"
                    placeholder=""
                    className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xl font-semibold text-black">Town / City</label><br />
                  <input
                    id="subject"
                    type="text"
                    placeholder=""
                    className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                    />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xl font-semibold text-black">Privonce</label><br />
                  <input
                    id="subject"
                    type="text"
                    placeholder=""
                    className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                    />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xl font-semibold text-black">Zip code</label><br />
                  <input
                    id="subject"
                    type="text"
                    placeholder=""
                    className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xl font-semibold text-black">Phone</label><br />
                  <input
                    id="subject"
                    type="text"
                    placeholder=""
                    className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                  />
                </div>  <div>
                  <label htmlFor="message" className="block text-xl font-semibold text-black">Email</label><br />
                  <input
                    id="subject"
                    type="text"
                    placeholder=""
                    className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
                    />
                </div>

               
            </form>
          </div>
          {/* form end */}
          </div>
        </div>
          <div className='flex flex-col w-[45%] h-full p-4 top-0 justify-self-end gap-5 items-center '>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col p-4 gap-8 justify-between items-start '>
                <h1 className='text-3xl font-semibold'>Product</h1>
                <div className='flex flex-row justify-between gap-3 items-center'>
                  <h1 className='text-[#9F9F9F] font-medium text-xl'>Asgaard Sofa</h1>
                  <h1 className=' text-xl'>x</h1>
                  <h1 className=' text-xl'>1</h1>
                </div>
                <h1 className='text-black font-medium text-xl'>Subtotal</h1>
                <h1 className='text-black font-medium text-xl'>Total</h1>
              </div>
              <div className='flex flex-col p-4 gap-8 justify-between items-end '>
                <h1 className='text-3xl font-semibold'>Subtotal</h1>
                <div className='flex flex-row justify-between gap-3 items-center'>
                  <h1 className='text-[black font-normal text-xl'>RS. 25,000.00</h1>
                </div>
                <h1 className='text-black font-normal text-xl'>RS. 25,000.00</h1>
                <h1 className='text-[#B88E2F] font-bold text-3xl'>RS. 25,000.00</h1>
              </div>
            </div>
            <div className='flex flex-col w-full justify-between items-center'>
            <RadioGroup defaultValue="option-one" className='gap-4'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <label >Direct Bank Transfer</label>
              </div>
                <p className='px-5 text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              <div className="flex items-center space-x-2">
                <RadioGroupItem disabled value="option-two" id="option-two" />
                <label className='text-[#9F9F9F]'>Direct Bank Transfer</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem disabled value="option-two" id="option-two" />
                <label className='text-[#9F9F9F]'>Cash on delivery</label>
              </div>
            </RadioGroup>

            </div>  
            <div className='text-center'>
              <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our </p><p className='font-medium'>privacy policy.</p>
            </div>     
            <button
                  type="submit"
                  className="w-[318px] h-[64px] py-2 bg-transparent text-black font-medium text-xl rounded-xl hover:bg-transparent border-2 border-black"
                >
                  Place order
                </button>     
          </div>
      </div>
          {/* pink section */}
          <div className='flex flex-row justify-center items-center gap-8 p-24 w-full h-[300px] bg-[#FAF4F4]'>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl font-semibold'>Free Delivery</h1>
                <h2 className='text-xl font-normal text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</h2>
              </div>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl font-semibold'>90 Days Return</h1>
                <h2 className='text-xl text-[#9F9F9F] font-normal'>If goods have problems, consectetur adipim scing elit.</h2>
              </div>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl  font-semibold'>Secure Payment</h1>
                <h2 className='text-xl text-[#9F9F9F] font-normal'>100% secure payment, consectetur adipim scing elit.</h2>
              </div>
        </div>
    </div>
  )
}

export default page