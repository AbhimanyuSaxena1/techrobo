import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdChatBubbleOutline } from "react-icons/md";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Services",
      link: "#pricing",
    },
    {
      name: "By The Way",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className="!bg-[#FFFFFF]  !text-black backdrop-blur-xl border-[rgba(255, 255, 255, 0.903)] rounded-md min-w-[320px] sm:min-w-[600px] lg:min-w-[800px] xl:min-w-[1000px] px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 mx-4 sm:mx-8 lg:mx-auto">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex  items-center gap-2 sm:gap-3 lg:gap-4">
            <NavbarButton
            
              className="text-xs rounded-full sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3"
            >
              
              <Link to="/">
                <div className="btn relative  overflow-hidden w-auto gap-2 transition-all duration-300 rounded-full border-2 border-red-600  h-[3rem] flex flex-row items-center justify-between px-4 cursor-pointer group">
                  <h1 className="md:text-lg text-md z-10 font-semibold text-black whitespace-nowrap group-hover:text-red-600 transition-all duration-300">
                    Contact Us{" "}
                  </h1>
                  <div className="icon z-10 w-[2rem] h-[2rem] flex items-center justify-center  rounded-full transition-all duration-300 group-hover:scale-110">
                    <MdChatBubbleOutline className="md:text-xl text-lg text-black group-hover:-rotate-30 group-hover:text-red-600  transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="!bg-white !text-black">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu 
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 text-lg sm:text-xl py-2 sm:py-3 hover:text-red-500 transition-colors duration-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-3 sm:gap-4 mt-4">
             
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-xs rounded-full sm:text-sm lg:text-base px-1 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3"
              >
                <Link to="/" className="w-full">
                  <div className="btn relative overflow-hidden w-full gap-2 transition-all duration-300 rounded-full border-2 border-red-600 h-[3rem] flex flex-row items-center justify-between px-4 cursor-pointer group">
                    <h1 className="md:text-lg text-md z-10 font-semibold text-black whitespace-nowrap group-hover:text-red-600 transition-all duration-300">
                      Contact Us{" "}
                    </h1>
                    <div className="icon z-10 w-[2rem] h-[2rem] flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
                      <MdChatBubbleOutline className="md:text-xl text-lg text-black group-hover:-rotate-30 group-hover:text-red-600 transition-all duration-500" />
                    </div>
                  </div>
                </Link>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 pt-20 sm:pt-24"></div>
  );
};
