import React from 'react';

const PartnershipSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-4 sm:px-8 py-6 sm:py-10 gap-10 lg:gap-20">

      <div className="flex-1 max-w-xl">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-teal-950 font-anek font-medium mb-8 sm:mb-12 lg:mb-20">
          Your Best Value in Process Automation
        </h2>

        <p className="text-2xl sm:text-3xl lg:text-4xl text-green-50 text-wrap:pretty font-anek font-medium mb-4 sm:mb-14">
          Delivering Excellence with
        </p>

        <h2 className="text-xl sm:text-2xl lg:text-3xl text-teal-950 font-anek font-medium text-left mb-4 sm:mb-14">
            •	Competitive Pricing<br/> 
            •	Quick Fulfillment<br/> 
            •	Customizable Configurations<br/> 
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-teal-950 font-extralight text-wrap:pretty">
          Committed to forging win-win partnerships and becoming a trusted ally for distributors and solution integrators.
        </p>

      </div>

      <div className="flex-1 lg:mt-6">
        <img className="w-full h-auto max-w-sm md:max-w-none" 
            src={'/Assets/goldenbridge.png'} alt="Water"/>
      </div>  
      
      

    </div>
  );
};

export default PartnershipSection;
