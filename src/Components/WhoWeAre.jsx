import React from 'react'

const WhoWeAre = () => {
  return (
    <div className='w-full h-screen px-15 mt-[20rem]  flex flex-row items-center justify-center gap-10'>
        <div className="left w-1/2 h-full ">
            <img src={"https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" className='w-full h-full object-cover' />
        </div>
        <div className="right w-[60%] h-full ">
        <div className="WhoWeAre px-5 pt-5 flex flex-row items-center justify-start w-auto">
            <h1 className="text-xl font-semibold text-red-600 whitespace-nowrap">
WHO WE ARE            </h1>
            <div className="line w-[15rem] h-[1px] bg-black ml-2"></div>
          </div>
          <div className="heading flex flex-col mt-4 w-full px-5 h-fit">
            <h1 className='text-6xl font-normal uppercase text-black'>Your web agency in <span className='font-medium'>INDIA</span></h1>
    
          </div>
          <div className="para w-full px-10 ml-15  border-l-1 border-black ">
    <p className='text-md font-normal leading-6 text-black w-[80%] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
    <p className='text-md font-normal leading-6 text-black w-[80%] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
    <p className='text-md font-normal leading-6 text-black w-[80%] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>


    </div>
        </div>
    </div>
  )
}

export default WhoWeAre