import React from 'react'
import { RxArrowTopRight } from 'react-icons/rx'

const WhyUs = () => {
  return (
    <div className='w-full min-h-screen  px-15 flex flex-row'>
        <div className="left w-[40%] px-5 sticky top-0 h-screen flex flex-col justify-start">
            <div className="WhyUs pt-5 flex flex-row items-center justify-start w-auto">
                <h1 className='text-xl font-semibold text-red-600 whitespace-nowrap'>
                    WHY CHOOSE US
                </h1>
        
                <div className="line w-[15rem] h-[1px] bg-black ml-2"></div>
            </div>
            <h1 className='text-5xl mt-5 font-normal text-black'>A web Agency in <span className='font-medium'>India</span> ?</h1>
            <div className="para w-full px-10 ml-15 border-l-1 border-black">
                <p className='text-md font-normal leading-6 text-black w-[80%] mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestias non consequuntur rerum tempore corrupti possimus velit, ut recusandae inventore ipsum nobis error. Modi eum vel mollitia ad temporibus aspernatur.</p>
                <p className='text-md font-normal leading-6 text-black w-[80%] mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestias non consequuntur rerum tempore corrupti possimus velit, ut recusandae inventore ipsum nobis error. Modi eum vel mollitia ad temporibus aspernatur.</p>
            </div>
            <div className="seeServices w-full flex flex-row items-center py-8 px-5 justify-center gap-5">
                <div className="w-[12rem] relative p-5 h-[12rem] border-2 group border-red-600 group-hover:border-white transition-all duration-300 rounded-full flex flex-row items-center justify-center cursor-pointer">
                  <h1 className="text-2xl z-10 text-black group-hover:text-white font-normal p-4">
                    See our <span className="font-medium">Services</span>
                  </h1>
                  <RxArrowTopRight className="text-red-600 rotate-45 group-hover:rotate-0 z-10 text-6xl group-hover:text-white transition-all duration-300" />
                  <div className="circle absolute top-0 left-0 z-0 bg-red-600 w-full h-full border-2 group scale-0 group-hover:scale-100 transition-all duration-300 rounded-full flex flex-row items-center justify-center cursor-pointer"></div>
                </div>
              </div>
        </div>
        <div className="right w-[60%] min-h-screen flex flex-row gap-20 relative">
            <div className="leftStrip flex flex-col w-[50%] gap-20 items-start justify-start h-full">
                <div className="card w-full h-full flex flex-col items-start justify-start gap-5">
                    <h1 className='text-2xl font-medium text-black'> Advanced and scalable Google SEO</h1>
                    <p className='text-md font-normal leading-6 text-black w-[80%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
                </div>   
                <div className="card w-full h-full flex flex-col items-start justify-start gap-5">
                    <h1 className='text-2xl font-medium text-black'> Advanced and scalable Google SEO</h1>
                    <p className='text-md font-normal leading-6 text-black w-[80%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
                </div>  
                <div className="card w-full h-full flex flex-col items-start justify-start gap-5">
                    <h1 className='text-2xl font-medium text-black'> Advanced and scalable Google SEO</h1>
                    <p className='text-md font-normal leading-6 text-black w-[80%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
                </div>  
            </div>
            <div className="rightStrip mt-50 flex flex-col w-[50%] gap-20 items-start justify-start h-full">
                <div className="card w-full h-full flex flex-col items-start justify-start gap-5">
                    <h1 className='text-2xl font-medium text-black'> Advanced and scalable Google SEO</h1>
                    <p className='text-md font-normal leading-6 text-black w-[80%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
                </div>   
                <div className="card w-full h-full flex flex-col items-start justify-start gap-5">
                    <h1 className='text-2xl font-medium text-black'> Advanced and scalable Google SEO</h1>
                    <p className='text-md font-normal leading-6 text-black w-[80%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
                </div>  
                <div className="card w-full h-full flex flex-col items-start justify-start gap-5">
                    <h1 className='text-2xl font-medium text-black'> Advanced and scalable Google SEO</h1>
                    <p className='text-md font-normal leading-6 text-black w-[80%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default WhyUs