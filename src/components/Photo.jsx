import React from 'react'
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import img from '../components/haider66.png'
import img3 from '../components/haider77.png'
import img4 from '../components/haider222.jpg'
import img5 from '../components/haider333.png'
import img6 from '../components/haider444.png'

const Photo = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
<section className='bg-[#015761] pb-20'>
    <div className='flex justify-center pt-16'>
        <h1 className='font-bold text-7xl text-[#d9cc51]'>Our work</h1>
    </div>
    <div className='pt-24 flex justify-around'>
        <img data-aos="fade-up"data-aos-duration="1000" className='lg:h-[400px] lg:w-[700px] md:h-full md:w-[700px] md:object-cover sm:h-[200px] sm:w-[90px]  object-cover ' src={img3} alt="" />
    </div>
    <div className=' lg:flex lg:justify-around lg:flex-row lg:pt-16 md:flex md:justify-around sm:flex sm:justify-center sm:flex-col flex-col flex justify-center '>
        <img  data-aos="zoom-out-right" data-aos-duration="1000" className='lg:h-[230px] lg:mt-44 lg:w-[440px] lg:ml-20 md:ml-[140px] md:h-[280px] md:w-[600px] md:object-cover sm:h-[170px] sm:m-5 sm:object-cover m-4 object-cover' src={img4} alt="" />
        <img data-aos="zoom-out-left" data-aos-duration="7000" className='lg:h-[300px] lg:w-[570px] lg:mt-32 md:h-[280px] md:w-[600px] md:object-cover md:ml-[140px] sm:m-5 sm:object-cover m-4 object-cover' src={img} alt="" />
    </div>
    <div className='lg:flex lg:flex-row lg:justify-around lg:pt-16 md:flex md:justify-around sm:flex sm:flex-col flex-col '>
        <img  data-aos="zoom-out-right" data-aos-duration="1000" className='lg:h-[300px] lg:mt-[-40px] md:h-[280px] md:w-[600px] md:mt-[110px] md:ml-[140px] sm:w-[200px] sm:object-cover sm:m-20 w-[300px] h-full object-cover m-5' src={img5} alt="" />
        <img data-aos="zoom-out-left" data-aos-duration="7000" className='lg:h-[210px] lg:ml-11 md:h-[270px] md:mt-[-35px] md:ml-[140px] md:w-[600px] sm:object-cover sm:m-20 w-[300px] h-full object-cover m-4' src={img6} alt="" />
    </div>

</section>
)
}

export default Photo