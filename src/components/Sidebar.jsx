import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div>
      <div className="flex justify-end z-50 bg-[#015761] sticky">
      <button className="bg-[#d9cc51] lg:text-2xl md:text-[15px] sm:text-[12px] lg:pl-5 text-[10px] md:pl-9 
      sm:pl-6 pl-2 fixed lg:flex lg:justify-center lg:items-center z-50 text-[#015761] top-0 cursor-pointer flex-col border-none md:w-32 sm:w-24  w-12 md:h-[73px]  sm:h-[70px] sm:flex-row-reverse h-[67px]  lg:h-[76px] lg:w-36 hover:bg-[#024555] hover:text-[#d9cc51]" onClick={toggleSidebar}>
        {isOpen ? "Close" : "View Resume"}
      </button>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <section>
          <div>
            <div className="lg:flex md:flex sm:flex flex  lg:gap-32 lg:pl-16 lg:pt-10 md:gap-10 sm:gap-16 gap-6 md:pl-5 sm:pl-4 pl-1 md:pt-10 sm:pt-9 pt-7 ">
              <div>
                <h1 className=" lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#d9cc51]">Resume</h1>
                <h1 className="font-thin lg:pt-5 md:pt-5 sm:pt-3 pt-2 text lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px] ">Born: 2006</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Height: 5”7</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Eye Color: Black</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Hair Color: Black</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Languages: English, Urdu</h1>
              </div>
              <div>
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-[17px] pt-2 font-bold text-[#d9cc51]">Special Skills</h1>
                <div className="flex lg:gap-16 md:gap-16 sm:gap-10 gap-6 lg:pt-5 md:pt-4 sm:pt-3 pt-2 pl-5">
                <div>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">HTML</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">CSS</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Bootstrap</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Javascript</h1>
                </div>
                <div>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Tailwind</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">React.js</h1>
                <h1 className="font-thin lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Next.js</h1>
              
                </div>
                
                </div>
                </div>
                
            </div>
            <br />
            <br />
            <hr />
            <div className=" lg:flex lg:flex-row md:flex sm:flex-col flex-col gap-20 lg:pt-10 md:pt-8 sm:pt-6 pt-3 lg:pl-16 md:pl-12 sm:pl-8 pl-5">
              <div>
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-[17px] font-bold text-[#d9cc51]">Education & Training</h1>
                <div className="flex lg:gap-16 md:gap-14 sm:gap-10 gap-8 pt-5">
                <div>
                <h1 className="font-thin lg:text-[20px] md:text-[17px]
                sm:text-[13px] text-[9px]">Pass Inter
                  <br /> Exam By
                  <br /> Punjab Group <br /> Of Colleges</h1>
                
                </div>
                  <div>
                  <h1 className="font-thin lg:text-[20px] md:text-[17px]
                sm:text-[13px] text-[9px]">Training At </h1>
                  <h1 className="text-green-500 font-bold lg:text-[25px] md:text-[20px]
                sm:text-[15px] text-[9px]">Code Pulse</h1>
                
                  </div>
                
                </div>
                  </div>
              <div>
                <div>
                  <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-[25px] lg:pt-2 font-extrabold text-[#d9cc51]"> Location</h1>
                  <h1 className="font-semibold lg:text-[20px] md:text-[16] sm:text-[12px] text-[10px] pt-3">Lahore,Punjab,<br />pakistan</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
