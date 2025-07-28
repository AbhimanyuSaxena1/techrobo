import React, { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    
    // Dynamic project data
    const projects = [
      {
        id: 1,
        title: "AI-Powered E-commerce Platform",
        description: "Modern e-commerce solution with AI recommendations",
        image: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Web Development",
        tech: ["React", "Node.js", "AI/ML"]
      },
      {
        id: 2,
        title: "Mobile Banking App",
        description: "Secure and intuitive banking application",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Mobile Development",
        tech: ["React Native", "Firebase", "Blockchain"]
      },
      {
        id: 3,
        title: "Cloud Infrastructure Dashboard",
        description: "Real-time monitoring and management system",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Cloud Solutions",
        tech: ["AWS", "Docker", "Kubernetes"]
      },
      {
        id: 4,
        title: "Data Analytics Platform",
        description: "Advanced analytics and visualization tools",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Data Science",
        tech: ["Python", "TensorFlow", "Tableau"]
      },
      {
        id: 5,
        title: "IoT Smart Home System",
        description: "Connected home automation platform",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "IoT Development",
        tech: ["IoT", "MongoDB", "Node.js"]
      }
    ];
    
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 15%',
                end: 'bottom 50%',
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
    <div className="max-w-screen-2xl flex flex-col md:gap-10 gap-20 mx-auto  md:h-[130vh] h-[200vh]  ">
      <div className="upper  flex md:flex-row flex-col items-center gap-10 md:gap-0   w-full px-10 h-[100vh] md:h-1/3 ">
        <div className="left md:w-[55%] w-full h-full flex flex-col  items-start justify-center">
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
        <div className="right w-full md:w-[45%] h-full flex flex-col  items-start justify-start md:items-end  md:justify-center">
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
      <div ref={containerRef} className="bottom  w-full   md:-mr-30 h-[100vh] md:h-[100%] overflow-hidden p-10 ">
        <div ref={sliderRef} className="flex flex-row gap-10 items-center" style={{ width: 'max-content' }}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="imgContainer md:w-[30rem] w-[20rem] md:h-[34rem] h-[40rem] bg-red-200 shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="img w-full h-full bg-blue-200 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Project overlay with details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <span className="text-sm font-medium text-red-400">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-white/20 rounded-full text-xs text-white backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
