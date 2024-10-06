import React from 'react';
import Layout from '../components/Layout.js';
import PartnershipSection from '../components/Bodypart.js';
import ProductShowcase from '../components/ProductShowcase.js';


const WebsiteLayout = () => {
  return (
    <Layout>
      <div className="min-h-screen"> 
        <div className="container mx-auto">
          <PartnershipSection />
        </div>
        <div className="container mx-auto px-4">
          <ProductShowcase />
        </div>
        <div className="container mx-auto px-8 pb-8">
          <p className="text-xl text-teal-950 font-extralight text-wrap:pretty mb-8">
            You can download our <a href="https://drive.google.com/file/d/1_x6LxJMQKxtu-NOKI0z6KhJCTKwwx9Ol/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className='text-green-50 transition-colors duration-300 hover:font-semibold hover:text-green-600'>
            product catalog</a> to learn about our full product line.
          </p>
          {/* <a href="https://drive.google.com/file/d/1_x6LxJMQKxtu-NOKI0z6KhJCTKwwx9Ol/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className=" bg-green-50 hover:bg-green-600 text-white font-sans font-medium py-3 px-7 rounded-sm transition duration-300">
            Product Catalog
          </a> 
          <div className='mb-6'></div> */}
        </div>
      </div>
    </Layout>
  );
};

export default WebsiteLayout;