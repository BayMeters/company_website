import React from 'react';
import WaterImage from '../Assets/Water.jpg';

const PartnershipSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mx-auto px-0 py-8 gap-20">
      <div className="flex-1 max-w-xl">
        <h2 className="text-7xl text-teal-950 font-anek font-medium mb-24">The power of partnerships</h2>
        <p className="text-xl text-teal-950 text-wrap:pretty font-extralight mb-14">
            BayMeters LLC is located California’s Bay Area. Leveraging cutting-edge cloud computing and IoT technologies.<br /><br />
            We offer top-tier products and solutions in the field of process automation, 
            combined with the best value instrumentation.
        </p>
        <button className="bg-green-50 hover:bg-green-600 text-white font-sans font-medium py-2 px-4 rounded transition duration-300">
          Team up to improve
        </button>
      </div>
      <div className="flex-1">
        <img className="w-full h-full"
            src={WaterImage} alt="Water" 
        />
      </div>
    </section>
  );
};

export default PartnershipSection;
