import React from 'react';
import GoldenBridge from '../Assets/image.png';


const PartnershipSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto px-10 py-10 gap-20">

      <div className="flex-1 max-w-xl">

        <h2 className="text-6xl text-teal-950 font-anek font-medium mb-16 lg:mb-20">Your Best Value in Process Automation
        </h2>

        <p className="text-4xl text-green-50 text-wrap:pretty font-anek font-medium ">
          Delivering Excellence with<br/><br/>   
        </p>

        <h2 className="text-3xl text-teal-950 font-anek font-medium text-left">
            {/* <strong>Highly Competitive Pricing</strong><br/>  */}
            {/* Providing exceptional value for our partners and customers.<br/> */}
            {/* <strong>Fast Fulfillment Times</strong><br/>  */}
            {/* Reducing wait times and maximizing operational efficiency.<br/> */}
            {/* <strong>Flexible and Customizable Configurations</strong><br/>  */}
            {/* Crafting tailored solutions to meet specific needs.<br/><br/> */}
            •	Competitive Pricing<br/> 
            {/* Providing exceptional value for our partners and customers.<br/> */}
            •	Quick Fulfillment<br/> 
            {/* Reducing wait times and maximizing operational efficiency.<br/> */}
            •	Customizable Configurations<br/> 
            {/* Crafting tailored solutions to meet specific needs.<br/><br/> */}
            
            <br/>
        </h2>

        <p className="text-xl text-teal-950 text-wrap:pretty font-extralight mb-14">
          Committed to forging win-win partnerships and becoming a trusted ally for distributors and solution integrators.
        </p>
            
        <a href="https://drive.google.com/file/d/1nQb8ZkotynIIJf_8REBcV0gE3GhviSo3/view" target="_blank" rel="noopener noreferrer" className="bg-green-50 hover:bg-green-600 text-white font-sans font-medium py-3 px-7 rounded-sm transition duration-300">
          Download Product Catalog
        </a>

      </div>

      <div className="flex-1">
        <img className="w-full h-full lg:block hidden" 
            src={GoldenBridge} alt="Water"/>
      </div>  

    </div>
  );
};

export default PartnershipSection;