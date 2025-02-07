import React from 'react'
import Hero from './Hero';
import Shop2 from './Shop2';
import Shop3 from './Shop3';
import Asgaard from './Asgaard';
import OurBlogs from './OurBlogs';
import Ourinsta from './Ourinsta';
import Footer from './Footer';

const HomePage = () => {
  return (
    <main id='home' className="flex min-h-screen flex-col gap-2 items-center right-0 justify-between font-poppins">
        <Hero />
        <Shop2 />        
        <Shop3 />
        <Asgaard />
        <OurBlogs />
        <Ourinsta />
    </main>  
  )
}

export default HomePage