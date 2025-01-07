import React from 'react'
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import img11 from '../components/haider.jpg'
const Contact = () => {
     useEffect(() => {
            AOS.init();
            AOS.refresh();
          }, []);
  return (
 <section className=' bottom-0'>
    <hr />
    <hr />
    <hr />
    <div className='lg:h-full lg:w-[100%] md:h-full md:w-[100%] lg:flex lg:flex-row md:flex sm:flex sm:flex-col sm:h-full sm:w-full bg-[#015761] sm:justify-center w-full h-full  justify-center pt-20 overflow-y-hidden'>
        <div className='lg:w-[50%] lg:h-full md:w-[50%] md:h-full sm:w-full sm:h-full w-full h-full'>
            <img  data-aos="flip-left"  data-aos-duration="2000" className='lg:h-full lg:w-full md:object-cover sm:object-cover object-cover lg:object-cover md:h-[600px] md:w-[2000px] sm:h-full sm:w-[500px] h-full w-[400px] sm:m-5 m-6 lg:ml-9  md:ml-48 ' src={img11} alt="" />
        </div>
        <div className='w-[50%] h-[100vh] pl-20 bottom-0 lg:pt-10 md:ml-32 md:pt-32 sm:pt-24 pt-16'>
            <div>
                <h1 data-aos="fade-down-right" data-aos-duration="1000" className='text-6xl font-bold text-[#d9cc51]'>Contact</h1>
            </div>
            <div className='text-white h-full'>
                <h1 data-aos="fade-right" data-aos-duration="600" className='text-3xl font-semibold mt-10 '>Representation</h1>
                <h1 data-aos="fade-right" data-aos-duration="700" className=' font-bold mt-2'></h1>
                <h1 data-aos="fade-right" data-aos-duration="800" className=' font-thin text-[15px]'>Bruce Robertson</h1>
                <h1 data-aos="fade-right" data-aos-duration="900" className=' font-thin text-[15px]'>Email - siddi.com</h1>
                <h1 data-aos="fade-right" data-aos-duration="1000" className=' font-thin text-[15px]'>Tel - 123-456-7890</h1>
                <h1 data-aos="fade-right" data-aos-duration="1100" className=' font-bold mt-2'>Commercial Agent</h1>
                <h1 data-aos="fade-right" data-aos-duration="1200" className=' font-thin text-[15px] mt-1'>Magnum - Steven Macfee</h1>
                <h1 data-aos="fade-right" data-aos-duration="700" className=' font-thin text-[15px]'>Email - info@mysite.com</h1>
                <h1 data-aos="fade-right" data-aos-duration="800" className=' font-thin text-[15px]'>Tel - 123-456-7890</h1>
                <h1 data-aos="fade-right" data-aos-duration="900" className=' font-bold mt-2'>SF Agent</h1>
                <h1 data-aos="fade-right" data-aos-duration="1000" className=' font-thin text-[15px] mt-1'>Pinnacle - Nathan Kelly</h1>
                <h1 data-aos="fade-right" data-aos-duration="1100" className=' font-thin text-[15px]'>Email - info@mysite.com</h1>
                <h1 data-aos="fade-right" data-aos-duration="1200" className=' font-thin text-[15px]'>Tel - 123-456-7890</h1>
            </div>
        </div>
    </div>

 </section>
)
}

export default Contact