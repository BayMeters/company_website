import React from 'react';
import Layout from '../components/Layout.js';
import PartnershipSection from '../components/Bodypart.js';
import ProductShowcase from '../components/ProductShowcase.js';
import { ArrowRight } from 'lucide-react';


const WebsiteLayout = () => {
  return (
    <Layout>
      <div className="container mx-auto">
          <PartnershipSection />
      </div>
      <div className="container mx-auto p-4">
          <ProductShowcase />
      </div>
    </Layout>
  );
};

export default WebsiteLayout;