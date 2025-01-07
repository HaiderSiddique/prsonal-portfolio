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
     data-aos-duration="8000" className='font-thin text-[18px] pt-11 text-white'>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click <br /> me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like <br /> on your page. I’m a great place for you to tell a story and let your users know a little more about you.
<br />
<br />
<br />
This is a great space to write a long text about your company and your services. You can use this space to go <br /> into a little more detail about your company. Talk about your team and what services you provide. Tell your <br /> visitors the story of how you came up with the idea for your business and what makes you different from your <br /> competitors. Make your company stand out and show your visitors who you are.
        </h1>
    </div>
    <div className='flex justify-center pt-24'>
        <h1  data-aos="zoom-out-up" data-aos-duration="2000" className='text-3xl text-[#d9cc51] font-serif pb-20'>Thank You</h1>
    </div>
    <hr />
    <hr />
    <hr />
 </section>
)
}

export default About