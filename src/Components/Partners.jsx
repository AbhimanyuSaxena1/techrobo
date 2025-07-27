import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Partners = () => {
    useEffect(() => {
        // First line animation
        const firstLine = gsap.from(".first-line", {
            translateX: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".first-line",
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1,
            }
        });

        // Second line animation
        const secondLine = gsap.from(".second-line", {
            translateX: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".second-line",
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1,
            }
        });

        // Third line animation
        const thirdLine = gsap.from(".third-line", {
            translateX: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".third-line",
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1,
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='max-w-screen-2xl mx-auto  h-[100vh]'>
            <div className='flex flex-col overflow-hidden items-center justify-center h-full w-full'>
                <div className="container w-1/2 overflow-hidden">
                    <div className='first-line min-w-[50%] whitespace-nowrap px-10 gap-2 h-[10vh] flex flex-row items-center '>
                        <h1 className='text-4xl text-black font-semibold'>YOUR <span className='text-blue-500'>PARTNERS</span></h1>
                        <div className='image group relative group-hover:bg-red-600 w-[20%] h-[50%] rounded-full overflow-hidden flex items-center justify-center'>
                            <div className="cursor-pointer">
                                <img src={"https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
                                <div className='absolute group-hover:left-0 transition-all-ease-in-out rounded-full duration-500 top-0 -left-100 w-full h-full bg-red-600 flex items-center justify-center'>
                                    <h1 className='text-white opacity-0 transition-all duration-500 group-hover:opacity-100 text-lg font-semibold'>PARTNER</h1>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-4xl text-black font-semibold'>IN CREATION </h1>
                    </div>
                    <div className='second-line min-w-[50%] whitespace-nowrap px-5 gap-2 h-[10vh] flex flex-row items-center '>
                        <h1 className='text-4xl text-black font-semibold'>FROM <span className='text-blue-500'>WEBSITE</span></h1>
                        <div className='image group relative group-hover:bg-red-600 w-[20%] h-[50%] rounded-full overflow-hidden flex items-center justify-center'>
                            <div className="cursor-pointer">
                                <img src={"https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
                                <div className='absolute group-hover:left-0 transition-all-ease-in-out rounded-full duration-500 top-0 -left-100 w-full h-full bg-red-600 flex items-center justify-center'>
                                    <h1 className='text-white opacity-0 transition-all duration-500 group-hover:opacity-100 text-lg font-semibold'>PARTNER</h1>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-4xl text-black font-semibold'>FOR A <span className='text-blue-500'>PRESENCE</span></h1>
                    </div>
                    <div className='third-line min-w-[50%] whitespace-nowrap px-15 gap-2 h-[10vh] flex flex-row items-center '>
                        <h1 className='text-4xl text-black font-semibold'>FOXGLOVE <span className='text-blue-500'>IMPACTFUL</span></h1>
                        <div className='image group relative group-hover:bg-red-600 w-[20%] h-[50%] rounded-full overflow-hidden flex items-center justify-center'>
                            <div className="cursor-pointer">
                                <img src={"https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
                                <div className='absolute group-hover:left-0 transition-all-ease-in-out rounded-full duration-500 top-0 -left-100 w-full h-full bg-red-600 flex items-center justify-center'>
                                    <h1 className='text-white opacity-0 transition-all duration-500 group-hover:opacity-100 text-lg font-semibold'>PARTNER</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners