import React from 'react'
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import bgimg from '../components/haider10.jpg'


const Home = () => {
       useEffect(() => {
              AOS.init();
              AOS.refresh();
            }, []);
  
  return (
  <section className='lg:h-[100vh] md:h-full sm:h-full h-full  w-full top-0 lg:flex lg:flex-row md:flex md:flex-row sm:flex-col flex-col '>
    <div className=' lg:w-[50%] bg-[#015761]  w-full'>
        <div className=' lg:pl-20 md:pl-16 sm:pl-12 pt-9 pl-9'>
            <h1 data-aos="zoom-out-right"data-aos-duration="800" className='text-[#d9cc51] lg:text-5xl md:text-4xl sm:text-2xl text-2xl'>
            Hey, I’m</h1>
            <h1   data-aos="zoom-out-right"data-aos-duration="1000" className='lg:text-9xl md:text-7xl sm:text-6xl text-6xl font-bold text-white pt-5'>
             Haider
             </h1>
             <h1 data-aos="zoom-out-right"data-aos-duration="2000" className='lg:text-9xl md:text-7xl sm:text-6xl text-6xl font-bold text-white pt-4'>
             Siddique
             </h1>
             <h1 className='text-white pt-12 font-thin lg:text-[18px] sm:text-[16] text-[10]'>
             Web Developer/Programmer
             </h1>
        </div>
    </div>
    <div  className=' lg:h-full lg:w-[50%] sm:w-full  w-full'>
        <div class="haider">
          <div><img src={bgimg} alt="" /></div>
        </div>
    </div>
    <hr />
    <hr />
    <hr />
  </section>
)
}

export default Home