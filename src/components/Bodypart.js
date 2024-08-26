import React from 'react';
import GoldenBridge from '../Assets/image.png';

const PartnershipSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between mx-auto px-0 py-8 gap-20">

      <div className="flex-1 max-w-xl">

        <h2 className="text-6xl text-teal-950 font-anek font-medium mb-16 lg:mb-24">Commited to a <br/>
            Win-Win Partnership
        </h2>

        <p className="text-4xl text-green-50 text-wrap:pretty font-anek font-medium ">
           We deliver products with<br/><br/>   
        </p>

        <h2 className="text-3xl text-teal-950 font-anek font-medium text-left">
            {/* <strong>Highly Competitive Pricing</strong><br/>  */}
            {/* Providing exceptional value for our partners and customers.<br/> */}
            {/* <strong>Fast Fulfillment Times</strong><br/>  */}
            {/* Reducing wait times and maximizing operational efficiency.<br/> */}
            {/* <strong>Flexible and Customizable Configurations</strong><br/>  */}
            {/* Crafting tailored solutions to meet specific needs.<br/><br/> */}
            Highly Competitive Pricing<br/> 
            {/* Providing exceptional value for our partners and customers.<br/> */}
            Fast Fulfillment Times<br/> 
            {/* Reducing wait times and maximizing operational efficiency.<br/> */}
            Flexible and Customizable Configurations<br/> 
            {/* Crafting tailored solutions to meet specific needs.<br/><br/> */}
            
            <br/>
        </h2>

        <p className="text-xl text-teal-950 text-wrap:pretty font-extralight mb-5">
          We are dedicated to building win-win partnerships and becoming a trusted ally for product distributors and industry solution integrators. 
        </p>
            
        {/* <button className="bg-green-50 hover:bg-green-600 text-white font-sans font-medium py-2 px-4 rounded-sm transition duration-300">
          Team up to improve
        </button> */}

      </div>

      <div className="flex-1">
        <img className="w-full h-full lg:block hidden" 
            src={GoldenBridge} alt="Water" 
        />
    </div>

    </section>
  );
};

export default PartnershipSection;
