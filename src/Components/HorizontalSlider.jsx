import React, { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
            }
        });
        
        tl.to(sliderRef.current, {
            x: -1450, // Adjust this value based on your content width
            ease: 'none',
        });
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
  return (
    <div className="max-w-screen-2xl  mx-auto h-[110vh] ">
      <div className="upper flex flex-row items-center  w-full px-10 h-1/3 ">
        <div className="left w-[55%] h-full flex flex-col  items-start justify-center">
          <div className="caseStudy  flex flex-row items-center justify-start w-auto">
            <h1 className="text-xl font-semibold text-red-600 whitespace-nowrap">
              CASE STUDY
            </h1>
            <div className="line w-[10rem] h-[1px] bg-black ml-2"></div>
          </div>
          <h1 className="text-6xl font-semibold text-black mb-10">
            <span className="font-normal ">Our</span> projects
          </h1>
          <p className="text-lg text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            voluptas tenetur, est illum distinctio quas quidem quisquam in harum
            dolore ipsa amet suscipit veniam dignissimos excepturi perspiciatis
            unde hic! Cum distinctio adipisci laborum consequatur neque harum
            reiciendis necessitatibus quod modi fugiat odio, numquam doloremque
            quia mollitia rem saepe ipsa iste.
          </p>
        </div>
        <div className="right w-[45%] h-full flex flex-col  items-end justify-center">
          <div className="btn w-[11rem] hover:bg-red-600 transition-all duration-300 rounded-full border-2 border-red-600 h-[4rem] flex flex-row items-center justify-between px-4 cursor-pointer group">
            <h1 className="text-lg font-semibold text-red-600 group-hover:text-white transition-all duration-300">
              View All
            </h1>
            <div className="icon w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-red-600 group-hover:bg-white transition-all duration-300 group-hover:scale-110">
              <FaArrowRight className="text-white text-xl group-hover:text-red-600 group-hover:-rotate-45 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="bottom w-full -mr-30 h-[75%] overflow-hidden p-10 ">
        <div ref={sliderRef} className="flex flex-row gap-10 items-center" style={{ width: 'max-content' }}>
          <div className="imgContainer w-[30rem] h-[32rem] bg-red-200 shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="img w-full h-full bg-blue-200">
              <img
                src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="imgContainer w-[30rem] h-[32rem] bg-red-200 shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="img w-full h-full bg-blue-200">
              <img
                src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="imgContainer w-[30rem] h-[32rem] bg-red-200 shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="img w-full h-full bg-blue-200">
              <img
                src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="imgContainer w-[30rem] h-[32rem] bg-red-200 shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="img w-full h-full bg-blue-200">
              <img
                src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="imgContainer w-[30rem] h-[32rem] bg-red-200 shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="img w-full h-full bg-blue-200">
              <img
                src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
