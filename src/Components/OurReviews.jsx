import React, { useEffect, useRef } from 'react'
import { TiMessage } from "react-icons/ti";
import gsap from 'gsap'

const OurReviews = () => {
    const containerRef = useRef(null);
    const bottomContainerRef = useRef(null);

    // Dynamic reviews data
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            title: "Web Developer",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus!",
            image: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name: "Jane Smith",
            title: "UI/UX Designer",
            review: "Amazing work! The team delivered exactly what we needed. The attention to detail and creative solutions exceeded our expectations.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name: "Mike Johnson",
            title: "Project Manager",
            review: "Professional service from start to finish. The communication was excellent and the final product was outstanding.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            name: "Sarah Wilson",
            title: "Marketing Director",
            review: "The team's creativity and technical expertise helped us achieve our goals. Highly recommended for any project!",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            name: "David Brown",
            title: "CEO",
            review: "Outstanding results! The team transformed our vision into reality with exceptional quality and attention to detail.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 6,
            name: "Emily Davis",
            title: "Creative Director",
            review: "Incredible work ethic and innovative solutions. They truly understand our brand and delivered beyond expectations.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 7,
            name: "Alex Thompson",
            title: "Software Engineer",
            review: "Exceptional technical skills and problem-solving abilities. The team delivered a robust solution that exceeded our requirements.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 8,
            name: "Lisa Chen",
            title: "Product Manager",
            review: "The attention to user experience and intuitive design made our product stand out. Highly professional team!",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 9,
            name: "Robert Martinez",
            title: "Business Analyst",
            review: "Clear communication and thorough understanding of our business needs. The final deliverable was exactly what we envisioned.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 10,
            name: "Sophie Anderson",
            title: "Design Lead",
            review: "Creative excellence and technical precision combined perfectly. The team's innovative approach brought our ideas to life beautifully.",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    useEffect(() => {
        let topAnimation = null;
        let bottomAnimation = null;
        
        const initAnimation = () => {
            // Top strip animation (right to left)
            const topContainer = containerRef.current;
            if (topContainer) {
                const topReviewElements = topContainer.querySelectorAll('.review1');
                if (topReviewElements.length > 0) {
                    let topTotalWidth = 0;
                    topReviewElements.forEach(review => {
                        topTotalWidth += review.offsetWidth + 40;
                    });

                    // Clone reviews for seamless loop
                    topReviewElements.forEach(review => {
                        const clone = review.cloneNode(true);
                        topContainer.appendChild(clone);
                    });

                    // Create top animation (right to left) using GSAP
                    topAnimation = gsap.timeline({ repeat: -1 });
                    topAnimation.to(topContainer, {
                        x: -topTotalWidth,
                        duration: 250,
                        ease: "none",
                        onComplete: () => {
                            // Reset position for seamless loop
                            gsap.set(topContainer, { x: 0 });
                        }
                    });
                }
            }

            // Bottom strip animation (left to right)
            const bottomContainer = bottomContainerRef.current;
            if (bottomContainer) {
                const bottomReviewElements = bottomContainer.querySelectorAll('.review1');
                if (bottomReviewElements.length > 0) {
                    let bottomTotalWidth = 0;
                    bottomReviewElements.forEach(review => {
                        bottomTotalWidth += review.offsetWidth + 40;
                    });

                    // Clone reviews for seamless loop
                    bottomReviewElements.forEach(review => {
                        const clone = review.cloneNode(true);
                        bottomContainer.appendChild(clone);
                    });

                    // Create bottom animation (left to right) using GSAP
                    bottomAnimation = gsap.timeline({ repeat: -1 });
                    bottomAnimation.to(bottomContainer, {
                        x: bottomTotalWidth,
                        duration: 250,
                        ease: "none",
                        onComplete: () => {
                            // Reset position for seamless loop
                            gsap.set(bottomContainer, { x: 0 });
                        }
                    });
                }
            }
        };

        // Initialize animation after a short delay to ensure DOM is ready
        const timer = setTimeout(initAnimation, 1000);

        // Cleanup function
        return () => {
            clearTimeout(timer);
            if (topAnimation) {
                topAnimation.kill();
            }
            if (bottomAnimation) {
                bottomAnimation.kill();
            }
        };
    }, []);

    return (
        <div className='w-full  md:h-auto flex flex-col items-center justify-center gap-10 h-auto px-10 md:mt-20 mt-10 bg-white'>
            <div className='top  w-full h-fit'>
                <div className="ClientSay  px-5 pt-5 flex flex-row items-center justify-start w-auto">
                    <h1 className="text-xl uppercase font-semibold text-red-600 whitespace-nowrap">
                        What our clients say
                    </h1>
                    <div className="line w-[10rem] h-[1px] bg-black ml-2"></div>
                </div>
                <div className="heading flex flex-col md:flex-row mt-4 gap-15 md:gap-0 w-full md:h-[40vh] h-auto">
                    <div className="left md:w-1/2 w-full px-5 h-full">
                        <h1 className='text-6xl font-normal text-black'>Our <span className='font-medium'>Reviews</span></h1>
                        <p className='text-md font-normal leading-6 text-black md:w-[80%] w-full mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium eius iste, debitis sint facilis repellendus eaque perspiciatis laudantium? Ipsa, quisquam! Repudiandae perspiciatis dolores quaerat at eligendi. Reiciendis, doloremque. Odio!</p>
                    </div>
                    <div className="right md:w-1/2 w-full h-full flex flex-row md:items-start justify-center md:justify-end">
                        <div className="btn relative overflow-hidden w-auto gap-2 hover:bg-red-600 transition-all duration-300 rounded-full border-2 border-red-600 h-[4rem] flex flex-row items-center justify-between px-4 cursor-pointer group">
                            <h1 className="text-lg z-10 font-semibold text-red-600 whitespace-nowrap group-hover:text-white transition-all duration-300">
                                Leave a Comment
                            </h1>
                            <div className="icon z-10 w-[2rem] h-[2rem] flex items-center justify-center rounded-full bg-red-600 transition-all duration-300 group-hover:scale-110">
                                <TiMessage className="text-white text-xl group-hover:-rotate-45 transition-all duration-300" />
                            </div>
                            <div className="cover absolute rounded-full transition-all duration-500 translate-x-[-100%] group-hover:translate-x-0 z-0 top-0 left-0 w-full h-full bg-red-600"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom w-full  overflow-hidden h-fit">
                <div className="card w-full h-[80vh] flex flex-col items-center justify-center gap-10 p-10 rounded-lg">
                    <div ref={containerRef} className="top-strip flex flex-row w-fit gap-10" style={{flexWrap: "nowrap"}}>
                        {reviews.map((review) => (
                            <div key={review.id} className="review1 p-5 max-w-[30rem] w-auto flex flex-col items-start justify-start rounded-lg min-h-[14rem] flex-shrink-0" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                <div className="user w-full flex flex-row items-center justify-start gap-2">
                                    <div className="image w-[4rem] h-[4rem] rounded-md overflow-hidden">
                                        <img src={review.image} alt={review.name} className='w-full h-full object-cover rounded-md' />
                                    </div>
                                    <div className="name">
                                        <h1 className='text-lg font-semibold text-black'>{review.name}</h1>
                                        <h1 className='text-sm font-normal text-black'>{review.title}</h1>
                                    </div>
                                </div>
                                <div className="review w-full">
                                    <h1 className='text-md font-normal leading-6 text-black w-[80%] mt-5'>{review.review}</h1>
                                </div>
                            </div>
                        ))}
                    </div>  
                    <div ref={bottomContainerRef} className="bottom-strip flex flex-row w-fit gap-10" style={{flexWrap: "nowrap"}}>
                        {reviews.map((review) => (
                            <div key={`bottom-${review.id}`} className="review1 p-5 max-w-[30rem] w-auto flex flex-col items-start justify-start rounded-lg min-h-[14rem] flex-shrink-0" style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                <div className="user w-full flex flex-row items-center justify-start gap-2">
                                    <div className="image w-[4rem] h-[4rem] rounded-md overflow-hidden">
                                        <img src={review.image} alt={review.name} className='w-full h-full object-cover rounded-md' />
                                    </div>
                                    <div className="name">
                                        <h1 className='text-lg font-semibold text-black'>{review.name}</h1>
                                        <h1 className='text-sm font-normal text-black'>{review.title}</h1>
                                    </div>
                                </div>
                                <div className="review w-full">
                                    <h1 className='text-md font-normal leading-6 text-black w-[80%] mt-5'>{review.review}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurReviews