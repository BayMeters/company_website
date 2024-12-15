import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { DesktopNav } from './Navbar/DektopNav';
import { MobileNav } from './Navbar/MobileNav';
import ProductList from './ProductCategoryList';
import BayMetersLogo from './BayMetersLogo';

// Custom hook to handle scroll behavior
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScroll, setPrevScroll] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        setScrollDirection("up");
        return;
      }

      if (Math.abs(currentScroll - prevScroll) < 10) {
        return;
      }

      const direction = currentScroll > prevScroll ? "down" : "up";
      setScrollDirection(direction);
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return scrollDirection;
};

export default function Navbar() {
  const products = ProductList();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const scrollDirection = useScrollDirection();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 100);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!buttonRef.current?.contains(event.target) && !dropdownRef.current?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header 
      className={`bg-white border sticky top-0 z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <link href="https://fonts.googleapis.com/css2?family=Anek+Odia:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      <div className="h-16 mx-auto flex max-w-full items-center justify-between p-8 lg:px-10">
        {/* Mobile Logo */}
        <div className="flex lg:hidden">
          <Link to="/" className="">
            <span className="sr-only">BayMeters</span>
            <BayMetersLogo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav
          products={products}
          isDropdownOpen={isDropdownOpen}
          buttonRef={buttonRef}
          dropdownRef={dropdownRef}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6 mb-2" />
        </button>

        {/* Mobile Navigation */}
        <MobileNav
          products={products}
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}