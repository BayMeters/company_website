import React from 'react';
import { Link } from 'react-router-dom';

const BayMetersLogo = () => (
    <div className="flex items-center">
      <span className="text-green-50 text-3xl font-anek mb-4">BayMeters</span>  
    </div>
  );

const Footer = () => {
  return (
    <footer className="bg-navy-800 font-sans">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mx-20 gap-10">
          <div className="flex flex-col flex-auto min-w-44">
            <Link to="/" >
                    <span className="sr-only">Your Company</span>
                    <BayMetersLogo />
                </Link>
            <p className='text-white text-sm font-extralight mb-5'>
              BayMeters LLC<br/>
              Corporate Commons<br/>
              6200 Stoneridge Mall Road, 3rd Floor<br/>
              Pleasanton, CA 94568<br/>
              866 305-7799
            </p>
          </div>

          <div className='flex flex-col justify-between text-lg text-teal-600 font-extralight'>
            <div>
              <p className="text-xl mb-5">Quick Link</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link to="/" className="transition-colors duration-300 hover:underline hover:text-teal-200">Home</Link>
                {/* <Link to="/comingsoon" className="transition-colors duration-300 hover:underline hover:text-teal-200">Quick Pay</Link> */}
                <Link to="/about" className="transition-colors duration-300 hover:underline hover:text-teal-200">About</Link>
                <Link to='/contact' className="transition-colors duration-300 hover:underline hover:text-teal-200">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col sm:flex-row justify-between mx-20 mt-10 text-teal-600 font-extralight text-sm'>
          <p className="">© 2024 BayMeters LLC. All rights reserved.</p>
          <div className="flex gap-10">
            <Link to='/privacy' className=" transition-colors duration-300 hover:underline hover:text-teal-200 ">Privacy Notice</Link>
            <Link to='/service-terms' className=" transition-colors duration-300 hover:underline hover:text-teal-200 ">Service Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;