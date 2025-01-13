import React from 'react'
import wpimg from '../components/wp.svg'
import goimg from '../components/google.svg'
import inimg from '../components/link.svg'
import gtimg from '../components/github.svg'
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import img11 from '../components/homepic.jpeg'
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
    <div className='lg:h-full lg:w-[100%] md:h-full md:w-[100%] lg:flex lg:flex-row md:flex sm:flex sm:flex-col sm:h-full sm:w-full bg-[#015761] sm:justify-center w-full h-full  justify-center pt-10 overflow-y-hidden'>
        <div className='lg:w-[50%] lg:h-[700px] md:w-[50%] md:h-full sm:w-full sm:h-full w-full h-full'>
            <img  data-aos="flip-left"  data-aos-duration="2000" className='lg:h-full lg:w-full md:object-cover sm:object-cover object-cover lg:object-cover md:h-[600px] md:w-[2000px] sm:h-full sm:w-[400px] h-full w-[280px] sm:m-5 ml-6 lg:ml-9  md:ml-48 ' src={img11} alt="" />
        </div>
        <div className='w-[50%] h-[100vh] pl-12 bottom-0 lg:pt-2 md:ml-32  md:pt-32 sm:pt-24 pt-16'>
            <div>
                <h1 data-aos="fade-down-right" data-aos-duration="1000" className='text-6xl font-bold text-[#d9cc51]'>Contact</h1>
            </div>
            <div className='text-white h-full'>
                {/* <h1 data-aos="fade-right" data-aos-duration="600" className='text-3xl font-semibold mt-10 '>..</h1> */}
                <h1 data-aos="fade-right" data-aos-duration="700" className=' font-bold mt-16'><img className='h-12' src={gtimg} alt="" /></h1>
                <h1 data-aos="fade-right" data-aos-duration="800" className=' font-thin text-2xl'>Haider Siddique</h1>
                {/* <h1 data-aos="fade-right" data-aos-duration="900" className=' font-thin text-[15px]'></h1> */}
                {/* <h1 data-aos="fade-right" data-aos-duration="1000" className=' font-thin text-[15px]'>..</h1> */}
                <h1 data-aos="fade-right" data-aos-duration="1100" className=' font-bold mt-9'> <img className='h-9' src={inimg} alt="" /></h1>
                <h1 data-aos="fade-right" data-aos-duration="1200" className=' font-thin text-2xl mt-1'> Haider Siddique</h1>
                {/* <h1 data-aos="fade-right" data-aos-duration="700" className=' font-thin text-[15px]'>..</h1> */}
                {/* <h1 data-aos="fade-right" data-aos-duration="800" className=' font-thin text-[15px]'>..</h1> */}
                <h1 data-aos="fade-right" data-aos-duration="900" className=' font-bold mt-9'><img className='h-8' src={goimg} alt="" /></h1>
                <h1 data-aos="fade-right" data-aos-duration="1000" className=' font-thin text-2xl mt-1'>siddiquhaider674@gmail.com</h1>
                <h1 data-aos="fade-right" data-aos-duration="1100" className=''><img className='h-9 mt-8' src={wpimg} alt="" /></h1>
                <h1 data-aos="fade-right" data-aos-duration="1200" className=' font-thin text-[20px]'>03298223304</h1>
            </div>
        </div>
    </div>

 </section>
)
}

export default Contact