import React from 'react'
import { NavbarDemo } from './Components/Navbar.jsx'
import HeroSection from './Components/HeroSection.jsx'
import HorizontalSlider from './Components/HorizontalSlider.jsx'
import Partners from './Components/Partners.jsx'
import OurServices from './Components/OurServices.jsx'
import OurReviews from './Components/OurReviews.jsx'
import WhoWeAre from './Components/WhoWeAre.jsx'
import Marquee from './Components/Marquee.jsx'
import WhyUs from './Components/WhyUs.jsx'
import Footer from './Components/Footer.jsx'
const App = () => {
  return (
    <div className='min-h-screen relative '>
      <div className="top overflow-hidden">
      <NavbarDemo className='w-full' />
      <HeroSection />
      <HorizontalSlider  />
      <div className='h-[100vh] w-[80vw] mx-auto'>
      </div>
      <Partners />
      
      </div>
      <OurServices />
      <OurReviews />
      <WhoWeAre />
      <Marquee />
      <WhyUs />
      <div className='flex flex-col gap-10 overflow-hidden'>
      <Footer />
      </div>
    </div>
  )
}

export default App