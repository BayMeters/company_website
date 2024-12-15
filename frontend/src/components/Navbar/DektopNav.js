// components/navigation/DesktopNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import BayMetersLogo from '../BayMetersLogo';

export const DesktopNav = ({ 
  products, 
  isDropdownOpen, 
  buttonRef, 
  dropdownRef, 
  handleMouseEnter, 
  handleMouseLeave 
}) => (
  <nav className="hidden lg:flex items-center justify-between w-full mx-auto">
    <div className="flex items-center gap-x-20">
      <Link to="/" className="pt-2">
        <span className="sr-only">BayMeters</span>
        <BayMetersLogo />
      </Link>

      <div 
        className="relative"
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center cursor-pointer">
          <Link
            to="/products"
            className="text-xl font-extralight leading-6 text-gray-900 hover:font-normal duration-100"
          >
            Product
          </Link>
          <ChevronDownIcon className="h-5 w-5 ml-1 text-gray-600" />
        </div>

        <div 
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute left-0 z-50 mt-5 w-screen max-w-sm overflow-hidden bg-white shadow-2xl rounded-md
            transition-all duration-300 ease-in-out transform
            ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <div className="p-3">
            {products.map((item) => (
              <Link 
                key={item} 
                to={`/products/${encodeURIComponent(item)}`}
                className="group flex items-center justify-between gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-green-100 transition-colors duration-200"
              >
                <span className="text-lg font-extralight text-gray-700">{item}</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-600" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link to="/about" className="text-xl font-extralight leading-6 text-gray-900 hover:font-normal duration-100">
        About
      </Link>
    </div>

    <Link 
      to="/contact" 
      className="text-medium font-normal leading-6 text-white px-4 py-2 bg-teal-900 hover:bg-teal-600 rounded-sm"
    >
      Contact Us
    </Link>
  </nav>
);