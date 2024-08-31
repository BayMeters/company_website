import React from 'react';
import Layout from '../components/Layout.js';
import PartnershipSection from '../components/Bodypart.js';
import ProductShowcase from '../components/ProductShowcase.js';

const WebsiteLayout = () => {
  return (
    <Layout>
      <div className="container mx-auto">
          <PartnershipSection />
      </div>
        {/* <hr className="border-t border-gray-300 " /> */}
      <div className="container mx-auto p-4">
          <ProductShowcase />
      </div>
    </Layout>
  );
};

export default WebsiteLayout;