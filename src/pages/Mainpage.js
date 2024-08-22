import React from 'react';
import Navbar from '../components/Navbar.js';
import PartnershipSection from '../components/Bodypart.js';
import ProductShowcase from '../components/ProductShowcase.js';
import Footer from '../components/Footer.js';

const WebsiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto p-4 pt-10">
          <PartnershipSection />
        </div>
        {/* <hr className="border-t border-gray-300 my-8" /> */}
        <div className="container mx-auto p-4">
          <ProductShowcase />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default WebsiteLayout;