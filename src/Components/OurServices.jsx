import React from "react";
import { RxArrowTopRight, RxCornerTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

// Dynamic Service Card Component
const ServiceCard = ({ 
  service, 
  letter, 
  title, 
  subtitle, 
  description, 
  tags, 
  imageUrl, 
  linkTo = "/" 
}) => {
  return (
    <Link to={linkTo}>
      <div className="card md:w-[100%] overflow-hidden w-full p-5 h-[auto] bg-white shadow-xl rounded-lg" style={{ flexShrink: 0 ,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className="top-side w-full h-[25%] flex flex-row items-center justify-center">
          <div className="alphabet relative h-full md:w-[50%] w-[80%] flex items-center justify-start overflow-hidden">
            <div 
              className="md:text-[10rem] text-[8rem] font-bold leading-none text-transparent bg-clip-text bg-cover"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              {letter}
            </div>
          </div>
          <div className="fullform h-full flex flex-row items-center justify-end w-[50%]">
            <h1 className="text-[1.4rem] h-full w-fit text-zinc-600 font-semibold">
              {title}
            </h1>
          </div>
        </div>
        
        <div className="center-side mt-20 w-full h-[10%] bg-white flex flex-row items-center justify-center">
          <div className="left-side w-[50%] h-full">
            <h1 className="text-2xl font-normal text-black">
              {service} <span className="font-semibold text-black">{subtitle}</span>
            </h1>
          </div>
          <div className="right-side w-[50%] h-full flex flex-row items-start justify-end">
            <RxCornerTopRight className="text-black text-2xl" />
          </div>
        </div>
        
        <div className="tags w-full md:h-[10%] h-auto mb-10 mt-10 flex flex-row flex-wrap  items-center justify-start px-5 gap-5">
          {tags.map((tag, index) => (
            <div key={index} className="tag w-auto px-2 gap-2 rounded-md py-2 h-[2rem] shadow-md bg-zinc-200 flex flex-row items-center justify-center">
              <h1 className="text-lg font-normal text-zinc-500">+</h1>
              <h1 className="text-lg font-normal text-zinc-500">{tag}</h1>
            </div>
          ))}
        </div>
        
        <div className="para">
          <p className="text-md text-zinc-500">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const OurServices = () => {
  // Service data array
  const services = [
    {
      id: 1,
      letter: "W",
      title: "WEBSITE",
      service: "Website",
      subtitle: "creation",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet asperiores temporibus non aliquam aut, totam iure nulla ducimus aliquid. Ad, omnis nulla earum, velit rerum numquam ea fuga reprehenderit non iusto delectus eos. Obcaecati deserunt a placeat veritatis quisquam.",
      tags: ["showcase", "e-commerce", "wordpress", "ui/ux design", "website revamp"],
      imageUrl: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/website"
    },
    {
      id: 2,
      letter: "A",
      title: "APP",
      service: "Mobile",
      subtitle: "development",
      description: "Create stunning mobile applications with modern technologies. We specialize in React Native, Flutter, and native iOS/Android development. Our apps are designed for performance and user experience.",
      tags: ["ios", "android", "react native", "flutter", "pwa"],
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/app"
    },
    {
      id: 3,
      letter: "D",
      title: "DESIGN",
      service: "Creative",
      subtitle: "design",
      description: "Transform your brand with our creative design services. From logos to complete brand identity, we create visually stunning designs that communicate your message effectively.",
      tags: ["branding", "logo design", "ui/ux", "illustration", "print design"],
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/design"
    },
    {
      id: 4,
      letter: "M",
      title: "MARKETING",
      service: "Digital",
      subtitle: "marketing",
      description: "Boost your online presence with our comprehensive digital marketing services. From SEO to social media management, we help you reach your target audience effectively.",
      tags: ["seo", "social media", "ppc", "content marketing", "analytics"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/marketing"
    },
    {
      id: 5,
      letter: "C",
      title: "CONSULTING",
      service: "Tech",
      subtitle: "consulting",
      description: "Get expert advice on technology strategy and digital transformation. Our consulting services help businesses make informed decisions about their technology investments.",
      tags: ["strategy", "digital transformation", "audit", "planning", "optimization"],
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/consulting"
    }
  ];

  return (
    <div className="min-h-screen  ">
      <div className="flex min-h-screen md:flex-row  gap-40 md:gap-10 flex-col  p-10">  
        <div
          className="left-side py-22 md:sticky md:top-0 md:w-[40%] w-full h-screen"
          style={{ flexShrink: 0 }}
        >
          <div className="caseStudy px-5 pt-5 flex flex-row items-center justify-start w-auto">
            <h1 className="text-xl font-semibold text-red-600 whitespace-nowrap">
              WHAT WE OFFER
            </h1>
            <div className="line w-[15rem] h-[1px] bg-black ml-2"></div>
          </div>
          <div className="bottom-side p-5 flex flex-col gap-5">
            <h1 className="text-6xl mb-5 text-black font-normal">
              Our <span className="font-medium">Services</span>
            </h1>
            <div className="para flex flex-col gap-5">
              <p className="text-md text-black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                voluptas tenetur, est illum distinctio quas quidem quisquam in
                harum dolore ipsa amet suscipit veniam dignissimos excepturi
                perspiciatis unde hic! Cum distinctio adipisci laborum
                consequatur neque harum
              </p>
              <p className="text-md text-black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                voluptas tenetur, est illum distinctio quas quidem quisquam in
                harum
              </p>
              <p className="text-md text-black font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
                in.
              </p>
            </div>
            <Link to="/">
                              <div className="seeServices w-full flex flex-row items-center py-8 px-5 justify-start gap-5">
                <div className="w-[12rem] relative p-5 h-[12rem] border-2 group border-red-600  group-hover:border-white transition-all duration-300 rounded-full flex flex-row  items-center justify-center cursor-pointer">
                  <h1 className="text-2xl z-10 text-black group-hover:text-white font-normal p-4">
                    See our <span className="font-medium">Services</span>
                  </h1>
                  <RxArrowTopRight className="text-red-600 z-10 text-6xl group-hover:text-white transition-all duration-300" />
                  <div className="circle absolute top-0 left-0 z-0 bg-red-600 w-full h-full border-2 group scale-0 group-hover:scale-100 transition-all duration-300 rounded-full flex flex-row  items-center justify-center cursor-pointer"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="right-side min-h-screen mt-10 md:mt-0  md:w-[60%] w-full flex flex-col gap-5 flex-1"
          style={{ flexShrink: 0 }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              letter={service.letter}
              title={service.title}
              service={service.service}
              subtitle={service.subtitle}
              description={service.description}
              tags={service.tags}
              imageUrl={service.imageUrl}
              linkTo={service.linkTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
