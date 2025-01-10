import React from 'react'
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";


const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
 <section className=' h-full p-3 w-full bg-[#015761]'>
    <div  className='text-center pt-20'>
        <h1  data-aos="zoom-out-down" data-aos-duration="2000" className='text-6xl text-[#d9cc51] font-bold'>About Me</h1>
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="8000" className='font-medium text-[19px] pt-11 text-white'>
     I'm a versatile programmer passionate about designing websites for all kinds of<br />
     projects. Whether it's e-commerce, blogs, portfolios, or anything in between, I<br />
     create functional, user-friendly sites tailored to your needs. With a strong <br />
     focus on clean code and responsive design, I bring ideas to life on the web,<br />
     no matter the subject.
        </h1>
    </div>
    <div className='flex justify-center pt-16'>
        <h1  data-aos="zoom-out-up" data-aos-duration="2000" className='text-3xl text-[#d9cc51] font-serif pb-20'>Thank You</h1>
    </div>
    <hr />
    <hr />
    <hr />
 </section>
)
}

export default About