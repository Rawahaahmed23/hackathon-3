// import Image from 'next/image'
// import React from 'react'
// import filter from '@/app/public/assets/contents/system-uicons_filtering.png'
// import grid from '@/app/public/assets/contents/ci_grid-big-round.png'
// import viewList from '@/app/public/assets/contents/bi_view-list.png'
// import line5 from "@/app/public/assets/contents/Line 5.svg"


// const page = () => {
  //   return (
    //     <main className='flex flex-col items-center justify-center'>
    //       {/* hero section */}
    //       <div className='w-full h-20'/> 
    //         <div className='flex flex-col w-full h-[316px] justify-center items-center'>
    //           <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
    //           <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
    //           <h1 className='text-5xl font-semibold absolute mt-26'>Blog</h1>
    //             <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
    //               <h2 className='font-normal'>Home</h2>
    //               <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
    //               <h2 className='font-light'>Blog</h2>
    //             </div>
    //         </div>
    //       </main>
    //   )
    // }
    
    // export default page
'use client'
    
import Image, { StaticImageData } from "next/image"
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import arrow from '@/app/public/assets/contents/arrow.png'
import Link from "next/link"
import shopheader from "@/app/public/assets/contents/Rectangle-1.png"
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search } from 'lucide-react'
import mainlaptop from "@/app/public/assets/contents/Rectangle 70.png"
import blogbook from "@/app/public/assets/contents/Rectangle 68.png"
import blog from "@/app/public/assets/contents/Rectangle 68.png"
import { Button } from "@/components/ui/button"
import { recentPosts } from "../public/constants"
import { categories } from "../public/constants"
import dashAdmin from "@/app/public/assets/contents/dashicons_admin-users.svg"



export default function BlogPost() {
  return (
    <>
          {/* hero section */}
    <div className='w-full h-20'/> 
        <div className='flex flex-col w-full h-[316px] justify-center items-center'>
           <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
           <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
             <h1 className='text-5xl font-semibold absolute mt-26'>Blog</h1>
             <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
              <h2 className='font-medium'>Home</h2>
               <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
               <h2 className='font-light'>Blog</h2>
        </div>
    </div>
    <div className="container mx-auto px-4 py-8 lg:px-6">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <main className="lg:col-span-8">
          <div className="space-y-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                    <Image src={dashAdmin} height={20} width={20} alt="admin"/>
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-semibold tracking-tight">{post.title}</h2>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <Link
                    href=''
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline" 
                  >
                    Read more
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </main>

        <section className="lg:col-span-4">
          <div className="sticky top-8 space-y-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search posts..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href=''
                    className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted" 
                  >
                    <span className="text-muted-foreground">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Recent Posts</h2>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <Link
                    key={index}
                    href=''
                    className="group flex gap-4" 
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium leading-snug group-hover:underline">
                        {post.title}
                      </h3>
                      <time className="text-sm text-muted-foreground">{post.date}</time>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div className="w-full space-y-20">
    <div className='flex flex-row items-center justify-center w-full mt-10'>
        <div className='flex flex-row sm:w-[400px] w-[200px] sm:gap-3 gap-0 h-[80px] justify-between '> 
            <div className='bg-[#FBEBB5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>1</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>2</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>3</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[90px] w-[55px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>Next</div>
          </div>
    </div>
      {/* Features */}
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
    </>
  )
}
