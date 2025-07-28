import React, { useEffect, useRef, useState } from "react";
import { RxCornerTopRight } from "react-icons/rx";
import { gsap } from "gsap";

const HeroSection = () => {
  const barRef = useRef(null);
  const barItemsRef = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVisibleItem, setCurrentVisibleItem] = useState(0);

  // Array of background images - using simpler, more reliable URLs
  const backgroundImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  ];

  // Dynamic bar items data
  const barItems = [
    { id: 0, title: "Advanced AI Technology Solutions" },
    { id: 1, title: "Cloud Infrastructure Management" },
    { id: 2, title: "Data Analytics & Insights" },
    { id: 3, title: "Cybersecurity & Threat Protection" },
    { id: 4, title: "Mobile App Development" },
    { id: 5, title: "Digital Transformation Consulting" },
    { id: 6, title: "Blockchain & Web3 Solutions" },
    { id: 7, title: "IoT & Smart Device Integration" },
  ];
  useEffect(() => {
    // Create a timeline for the animation
    const tl = gsap.timeline({ repeat: -1 }); // -1 means infinite repeat

    // Get all bar items
    const barItems = barItemsRef.current;
    const itemHeight = 80; // Height of each item (h-16 = 64px + padding)
    const totalItems = barItems.length;

    // Set initial position
    gsap.set(barRef.current, { y: 0 });

    // Create the animation
    for (let i = 0; i < totalItems; i++) {
      tl.to(barRef.current, {
        y: -(i + 1) * itemHeight,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 2, // 2 second delay between each movement
        onComplete: () => {
          // Update image index when animation completes
          const newIndex = (i + 1) % backgroundImages.length;
          setCurrentImageIndex(newIndex);
          setCurrentVisibleItem(i + 1);
          console.log("Image changed to:", newIndex);
        },
      });
    }

    // Reset to beginning after all items
    tl.to(barRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onUpdate: () => {
        setCurrentImageIndex(0);
        setCurrentVisibleItem(0);
      },
    });

    return () => {
      tl.kill(); // Clean up animation on unmount
    };
  }, [backgroundImages.length]);

  const addToRefs = (el) => {
    if (el && !barItemsRef.current.includes(el)) {
      barItemsRef.current.push(el);
    }
  };

  return (
    <div className="md:h-[80vh]  mb-[50vh] mt-20 md:mt-20 md:mb-0 md:flex md:flex-row  md:items-center md:justify-center ">
      <div className="left-0 w-full md:w-1/2 h-[100vh] md:h-full md:p-10 p-5 flex items-start justify-start flex-col ">
        <h1 className="text-4xl md:text-6xl w-full !text-left font-bold !text-black">
          Heading 1
        </h1>
        <p className=" w-full !text-left text-black !text-xl md:!text-2xl mb-4 md:mb-0 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <ul className="text-black md:text-3xl w-full !text-left ">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div
        className="right-0 relative px-10 w-full md:w-1/2 !mb-30 md:mb-0 h-full"
        
      >
        <div className="absolute  md:inline-block rounded-xl -top-10 left-15 z-8 md:top-10 md:-left-10 w-[25rem] h-[27rem]">
          <img
            src={backgroundImages[currentImageIndex]}
            className="absolute rounded-lg w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
            alt={`Background ${currentImageIndex + 1}`}
            onLoad={() => console.log("Image loaded:", currentImageIndex)}
            onError={(e) =>
              console.error("Image failed to load:", e.target.src)
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          <div className="absolute hidden top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm backdrop-blur-sm transition-all duration-300">
            Image {currentImageIndex + 1} of {backgroundImages.length}
          </div>
        </div>
        <div className="absolute  md:inline-block rounded-xl -bottom-0 z-10 right-20 md:bottom-10 md:right-10 w-[25rem] h-[27rem]">
          <img
            src={
              backgroundImages[
                (currentImageIndex + 1) % backgroundImages.length
              ]
            }
            className="absolute rounded-xl  w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
            alt={`Background ${
              ((currentImageIndex + 1) % backgroundImages.length) + 1
            }`}
            onLoad={() =>
              console.log(
                "Next image loaded:",
                (currentImageIndex + 1) % backgroundImages.length
              )
            }
            onError={(e) =>
              console.error("Next image failed to load:", e.target.src)
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          <div className="absolute hidden top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm backdrop-blur-sm transition-all duration-300">
            Image {((currentImageIndex + 1) % backgroundImages.length) + 1} of{" "}
            {backgroundImages.length}
          </div>
        </div>
        <div className="container absolute  top-[60%] md:top-[50%] -translate-y-[60%] left-1/2 -translate-x-1/2 md:translate-y-[-50%] md:w-auto md:h-[25rem] w-auto h-[25rem] z-10">0
          <div className="bar w-auto min-w-[15rem]  h-full overflow-hidden flex flex-col whitespace-nowrap rounded-2xl p-6 transition-all duration-500 ease-in-out hover:bg-white/15 hover:shadow-3xl hover:border-white/30">
                         <div ref={barRef} className="flex flex-col gap-4">
               {barItems.map((item) => (
                 <div
                   key={item.id}
                   ref={addToRefs}
                   className="relative flex w-auto gap-4 items-center justify-between bar-item text-left p-4 rounded-lg text-black bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg h-16 min-h-[5rem] transition-all duration-300 ease-in-out hover:bg-white/95 hover:shadow-xl hover:scale-105 hover:border-white/40 cursor-pointer group"
                 >
                   <h1 className={`text-lg w-fit font-semibold transition-all duration-300 ${currentVisibleItem === item.id ? 'text-red-600' : 'group-hover:text-blue-600'}`}>
                     {item.title}
                   </h1>
<div className="icon flex items-start h-full justify-center">
<RxCornerTopRight className="text-gray-500  transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110" />

</div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
