import React from 'react';
import Layout from '../components/Layout.js';
import PartnershipSection from '../components/Bodypart.js';
import ProductShowcase from '../components/ProductShowcase.js';
import { ArrowRight } from 'lucide-react';

const ViewMoreButton = ({ className }) => (
  <a href='https://www.supmeaauto.com/products' target="_blank" rel="noopener noreferrer" className={`${className} gap-10 flex justify-between text-left cursor-pointer bg-white p-4 rounded-sm hover:border border-teal-200 hover:shadow-lg`}>
    {/* <h3 className="pt-1 text-xl font-anek text-green-50 mb-2">View more products</h3> */}
    <div>
      <h2 className="text-xl font-normal text-teal-900 mb-3">More products...</h2>
      <p className="text-sm text-teal-900 font-extralight mb-2">Will be redirected to Supmea’s product website</p>
    </div>
    <div> <ArrowRight className="text-teal-500" size={24} /></div>
    
  </a>
);

const WebsiteLayout = () => {
  return (
    <Layout>
      <div className="container mx-auto">
          <PartnershipSection />
      </div>
      <div className="container mx-auto my-24">
          <ViewMoreButton />
      </div>
      {/* <div className="container mx-auto p-4">
          <ProductShowcase />
      </div> */}
    </Layout>
  );
};

export default WebsiteLayout;