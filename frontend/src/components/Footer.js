import React from 'react';
import { Link } from 'react-router-dom';
import BayMetersLogo from './BayMetersLogo';

const Footer = () => {
  return (
    <footer className="bg-navy-800 font-sans">
      <div className="container px-4 sm:px-6 py-8 sm:py-12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mx-4 sm:mx-20 gap-8">
          <div className="flex flex-col flex-auto min-w-44">
            <Link to="/" >
                    <span className="sr-only">Your Company</span>
                    <div className='mb-4'><BayMetersLogo/></div>
                </Link>
            <p className='text-white text-sm font-extralight mb-5'>
              BayMeters LLC<br/>
              160 E Tasman Drive<br/>
              San Jose, CA 95134<br/>
              866 305-7799
            </p>
          </div>

          <div className='flex flex-col justify-between text-base sm:text-lg text-teal-600 font-extralight'>
            <div>
              <p className="text-xl mb-5">Quick Link</p>
              <div className="flex flex-row gap-4 sm:gap-8">
                <Link to="/" className="transition-colors duration-300 hover:underline hover:text-teal-200">Home</Link>
                <Link to="/about" className="transition-colors duration-300 hover:underline hover:text-teal-200">About</Link>
                <Link to='/contact' className="transition-colors duration-300 hover:underline hover:text-teal-200">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between mx-4 sm:mx-20 mt-8 sm:mt-10 text-teal-600 font-extralight text-xs sm:text-sm'>
          <p className="mb-2 sm:mb-0">© 2024 BayMeters LLC. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-10">
            <Link to='/privacy' className="transition-colors duration-300 hover:underline hover:text-teal-200">Privacy Notice</Link>
            <Link to='/service-terms' className="transition-colors duration-300 hover:underline hover:text-teal-200">Service Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;