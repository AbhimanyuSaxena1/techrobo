import React from 'react'
import { RxArrowTopRight } from 'react-icons/rx'

// Card Component
const FeatureCard = ({ title, description, icon, index }) => {
  return (
    <div className="card w-full bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="flex flex-col items-start justify-start gap-4 h-full">
        <div className="icon-container w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl text-red-600 font-bold">{index}</span>
        </div>
        <h1 className='text-xl font-semibold text-black leading-tight'>{title}</h1>
        <p className='text-sm text-gray-600 leading-relaxed flex-1'>{description}</p>
        <div className="w-full flex justify-end">
          <RxArrowTopRight className="text-red-600 text-xl hover:rotate-45 transition-all duration-300" />
        </div>
      </div>
    </div>
  )
}

const WhyUs = () => {
  // Left strip data
  const leftStripData = [
    {
      id: 1,
      title: "Advanced and Scalable Google SEO",
      description: "Our comprehensive SEO strategies ensure your website ranks higher in search results. We implement advanced techniques including keyword optimization, technical SEO, and content marketing to drive organic traffic and improve your online visibility."
    },
    {
      id: 2,
      title: "Professional Web Development",
      description: "We create modern, responsive websites using cutting-edge technologies. Our development team ensures fast loading times, mobile optimization, and seamless user experience across all devices and browsers."
    },
    {
      id: 3,
      title: "Creative Design Solutions",
      description: "Our design team creates stunning visual experiences that capture your brand's essence. From logos to complete brand identity, we deliver creative solutions that make lasting impressions."
    }
  ]

  // Right strip data
  const rightStripData = [
    {
      id: 4,
      title: "Digital Marketing Excellence",
      description: "Comprehensive digital marketing services including PPC, social media management, and content marketing. We help you reach your target audience and achieve measurable results."
    },
    {
      id: 5,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support ensures your website and applications run smoothly. Our dedicated team is always ready to help with any technical issues or questions."
    },
    {
      id: 6,
      title: "Data-Driven Analytics",
      description: "Advanced analytics and reporting help you understand your audience and optimize your digital presence. We provide detailed insights to drive informed business decisions."
    }
  ]

  return (
    <div className='w-full min-h-screen bg-gray-50 px-4 sm:px-8 lg:px-15 flex flex-col lg:flex-row'>
      {/* Left Side - Sticky on desktop */}
      <div className="left lg:w-[40%] w-full px-4 md:px-5 md:sticky md:top-0 lg:h-screen h-auto flex flex-col justify-start order-1 lg:order-1">
        <div className="WhyUs pt-5 flex flex-row items-center justify-start w-auto">
          <h1 className='text-lg sm:text-xl font-semibold text-red-600 whitespace-nowrap'>
            WHY CHOOSE US
          </h1>
          <div className="line w-[8rem] sm:w-[12rem] lg:w-[15rem] h-[1px] bg-black ml-2"></div>
        </div>
        
        <h1 className='text-3xl sm:text-4xl lg:text-5xl mt-5 font-normal text-black'>
          A web Agency in <span className='font-medium'>India</span> ?
        </h1>
        
        <div className="para w-full px-4 sm:px-10 mt-6 border-l-2 border-red-600 pl-4">
          <p className='text-sm sm:text-md font-normal leading-6 text-gray-700 mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestias non consequuntur rerum tempore corrupti possimus velit, ut recusandae inventore ipsum nobis error. Modi eum vel mollitia ad temporibus aspernatur.
          </p>
          <p className='text-sm sm:text-md font-normal leading-6 text-gray-700'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestias non consequuntur rerum tempore corrupti possimus velit, ut recusandae inventore ipsum nobis error.
          </p>
        </div>
        
        <div className="seeServices w-full flex flex-row items-center py-6 sm:py-8 px-2 sm:px-5 justify-center gap-3 sm:gap-5 mt-8">
          <div className="w-[8rem] sm:w-[10rem] lg:w-[12rem] relative p-3 sm:p-5 h-[8rem] sm:h-[10rem] lg:h-[12rem] border-2 group border-red-600 group-hover:border-white transition-all duration-300 rounded-full flex flex-row items-center justify-center cursor-pointer">
            <h1 className="text-lg sm:text-xl lg:text-2xl z-10 text-black group-hover:text-white font-normal p-2 sm:p-4 text-center">
              See our <span className="font-medium">Services</span>
            </h1>
            <RxArrowTopRight className="text-red-600 rotate-45 group-hover:rotate-0 z-10 text-4xl sm:text-5xl lg:text-6xl group-hover:text-white transition-all duration-300" />
            <div className="circle absolute top-0 left-0 z-0 bg-red-600 w-full h-full border-2 group scale-0 group-hover:scale-100 transition-all duration-300 rounded-full flex flex-row items-center justify-center cursor-pointer"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Cards Layout */}
      <div className="right lg:w-[60%] w-full min-h-screen flex flex-col top-10 lg:flex-row gap-6 lg:gap-20 relative order-2 lg:order-2">
        {/* Left Strip */}
        <div className="leftStrip flex flex-col lg:w-[50%] w-full gap-6 lg:gap-8">
          {leftStripData.map((item, index) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              index={item.id}
            />
          ))}
        </div>

        {/* Right Strip */}
        <div className="rightStrip flex flex-col lg:w-[50%] w-full gap-6 lg:gap-8 mt-6 lg:mt-0">
          {rightStripData.map((item, index) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              index={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUs