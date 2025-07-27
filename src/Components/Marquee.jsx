import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
    const direction = "left";
    
    // Free brand logo images from reliable sources
    const brandLogos = [
        {
            id: 1,
            name: "Nike",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nike/nike-original.svg",
            alt: "Nike Logo"
        },
        {
            id: 2,
            name: "Apple",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
            alt: "Apple Logo"
        },
        {
            id: 3,
            name: "Google",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
            alt: "Google Logo"
        },
        {
            id: 4,
            name: "Microsoft",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
            alt: "Microsoft Logo"
        },
        {
            id: 5,
            name: "Amazon",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg",
            alt: "Amazon Logo"
        },
        {
            id: 6,
            name: "Facebook",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
            alt: "Facebook Logo"
        },
        {
            id: 7,
            name: "Twitter",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
            alt: "Twitter Logo"
        },
        {
            id: 8,
            name: "Instagram",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg",
            alt: "Instagram Logo"
        },
        {
            id: 9,
            name: "LinkedIn",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
            alt: "LinkedIn Logo"
        },
        {
            id: 10,
            name: "YouTube",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg",
            alt: "YouTube Logo"
        },
        {
            id: 11,
            name: "Netflix",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg",
            alt: "Netflix Logo"
        },
        {
            id: 12,
            name: "Spotify",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg",
            alt: "Spotify Logo"
        }
    ];

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center py-8 overflow-hidden gap-10">
            {/* First strip - moves left to right */}
            <div className="w-full overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 200 }}
                    className="flex flex-shrink-0 gap-16 items-center  h-fit py-10"
                >
                    {brandLogos.map((brand) => (
                        <div key={brand.id} className="flex-shrink-0 ">
                            <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                                <img 
                                    src={brand.logo} 
                                    alt={brand.alt} 
                                    className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                                    onError={(e) => {
                                        console.log(`Failed to load image for ${brand.name}`);
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                    {brandLogos.map((brand) => (
                        <div key={`duplicate-${brand.id}`} className="flex-shrink-0">
                            <div className="w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                                <img 
                                    src={brand.logo} 
                                    alt={brand.alt} 
                                    className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                                    onError={(e) => {
                                        console.log(`Failed to load image for ${brand.name}`);
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Second strip - moves right to left (opposite direction) */}
            <div className="w-full overflow-hidden">
                <motion.div
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 200 }}
                    className="flex flex-shrink-0 gap-16 items-center  h-fit py-10"
                >
                    {brandLogos.map((brand) => (
                        <div key={`bottom-${brand.id}`} className="flex-shrink-0">
                            <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="w-24 h-24 flex items-center justify-center  rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                                <img 
                                    src={brand.logo} 
                                    alt={brand.alt} 
                                    className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                                    onError={(e) => {
                                        console.log(`Failed to load image for ${brand.name}`);
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                    {/* Duplicate logos for seamless loop */}
                    {brandLogos.map((brand) => (
                        <div key={`bottom-duplicate-${brand.id}`} className="flex-shrink-0">
                            <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                                <img 
                                    src={brand.logo} 
                                    alt={brand.alt} 
                                    className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                                    onError={(e) => {
                                        console.log(`Failed to load image for ${brand.name}`);
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Marquee