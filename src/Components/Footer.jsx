import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TiMessage, TiArrowRight } from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='max-w-screen-3xl relative flex flex-row gap-10 items-center justify-between px-20 mx-auto mt-70 min-h-screen bg-black -mb-10 flex flex-row'>
    <div className="left text-white flex flex-col items-start justify-center w-[40%] ">
    <div className="logo w-full flex flex-row items-center justify-start bg-black h-[10vh]">
        {/* <img src={""} alt="logo" />
         */}
         <h1 className='text-6xl font-medium'>Robotech</h1>
    </div>
    <div className="para w-full flex flex-row items-center justify-start bg-black h-[10vh]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
    <div className="social w-full flex flex-row items-center justify-start bg-black h-[10vh]">
        <div className="icon flex flex-row items-center justify-start gap-5">
            <FaFacebookF className='text-2xl' />
            <FaInstagram className='text-2xl' />
            <FaTwitter className='text-2xl' />
            <FaLinkedin className='text-2xl' />
        </div>
    </div>
    <h1>Copyright © 2025 All rights reserved</h1>
    </div> 
     <div className="right w-[60%] h-[50%] items-center justify-center grid grid-cols-2 grid-rows-2 gap-10 bg-black">
              <div className="company col-span-1 row-span-1 flex flex-col items-start justify-start gap-2">
                <h1 className='text-2xl text-white font-medium'>Company</h1>
                <ul className='flex flex-col items-start justify-start gap-2'>
                    <Link to="/about"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>About</li></Link>
                    <Link to="/services"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>Services</li></Link>
                    <Link to="/contact"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>Contact</li></Link>
                </ul>
                </div>  
                <div className="Explore col-span-1 row-span-1 flex flex-col items-start justify-start gap-2">
                    <h1 className='text-2xl text-white font-medium'>Explore</h1>
                    <ul className='flex flex-col items-start justify-start gap-2'>
                        <Link to="/about"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>About</li></Link>
                        <Link to="/services"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>Services</li></Link>
                        <Link to="/contact"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>Contact</li></Link>
                    </ul>
                </div>
                <div className="company col-span-1 row-span-2 flex flex-col items-start justify-start gap-2">
                    <h1 className='text-2xl text-white font-medium'>Contact</h1>
                    <ul className='flex flex-col items-start justify-start gap-2'>
                        <Link to="/about"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>About</li></Link>
                        <Link to="/services"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>Services</li></Link>
                        <Link to="/contact"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>Contact</li></Link>
                    </ul>
                </div>
                <div className="company col-span-1 row-span-2 flex flex-col items-start justify-start gap-2">
                    <h1 className='text-2xl text-white font-medium'>Contact</h1>
                    <ul className='flex flex-col items-start justify-start gap-2'>
                        <Link to="tel:+919876543210"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>+91 9876543210</li></Link>
                        <Link to="tel:+919876543210"><li className='text-md font-normal hover:text-red-500 transition-colors duration-300 cursor-pointer'>+91 9876543210</li></Link>
                    </ul>
                </div>
     </div>
     <div className="absolute -top-22 rounded-full left-0  w-[80%] !mx-40 h-[24vh] flex flex-row px-12 items-center justify-start bg-white" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
     <div className="left w-[70%] h-full flex flex-col items-start justify-center">
     <div className="letsTalk   flex flex-row items-center justify-start w-auto">
            <h1 className="text-xl font-semibold text-red-600 whitespace-nowrap">
LET'S TALK            </h1>
            <div className="line w-[15rem] h-[1px] bg-black ml-2"></div>
          </div>
          <h1 className='text-2xl text-black font-medium'>HAVE A QUESTION ?</h1>
          <p className='text-md text-black font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi quaerat reiciendis in cumque pariatur odio sapiente cupiditate soluta a.</p>
        
     </div>
     <div className="right w-[30%] h-full flex flex-col items-center justify-center">
    <Link to="/">
    <div className="btn relative overflow-hidden w-auto gap-2 hover:bg-red-600 transition-all duration-300 rounded-full border-2 border-red-600 h-[4rem] flex flex-row items-center justify-between px-4 cursor-pointer group">
                            <h1 className="text-lg z-10 font-semibold text-red-600 whitespace-nowrap group-hover:text-white transition-all duration-300">
Talk to us                            </h1>
                            <div className="icon z-10 w-[2rem] h-[2rem] flex items-center justify-center  rounded-full bg-red-600 transition-all duration-300 group-hover:scale-110">
                                <TiArrowRight className="text-white text-xl group-hover:-rotate-45  transition-all duration-500" />
                            </div>
                            <div className="cover absolute rounded-full transition-all duration-500 translate-x-[-100%] group-hover:translate-x-0 z-0 top-0 left-0 w-full h-full bg-red-600"></div>
                        </div>
    </Link>
     </div>
     </div>
     </div>
  )
}

export default Footer