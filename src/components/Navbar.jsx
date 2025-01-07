import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
  <nav className='flex top-0 w-[90%] z-50 sticky justify-start flex-col pl-4 bg-[#024555] text-[#d9cc51] '>
          <div>
          <h1 className='text-[#d9cc51] text-2xl flex justify-start'> Daniel Martinez</h1>
          <ul className='text-white flex z-50 gap-8 pt-2 pl-4 pb-3 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-thin'>
          <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>about</li></Link>
              <Link to="/photo"><li>photo</li></Link>
              <Link to="/contact"><li>contact</li></Link>
              </ul>
            </div>    
          </nav>
          
          
)
}

export default Navbar