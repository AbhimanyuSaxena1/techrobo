
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
        <NavBody className="bg-[rgba(255, 255, 255, 0.73)] backdrop-blur-xl border-[rgba(255, 255, 255, 0.903)] rounded-md min-w-[320px] sm:min-w-[600px] lg:min-w-[800px] xl:min-w-[1000px] px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 mx-4 sm:mx-8 lg:mx-auto">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <NavbarButton variant="primary" className="text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3">Login</NavbarButton>
            <NavbarButton variant="primary" className="text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 py-1 sm:py-2 lg:py-3">Contact</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 text-lg sm:text-xl py-2 sm:py-3 hover:text-red-500 transition-colors duration-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-3 sm:gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full text-sm sm:text-base py-2 sm:py-3">
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-sm sm:text-base py-2 sm:py-3">
                Contact
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
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 pt-20 sm:pt-24">
     
    </div>
  );
};
