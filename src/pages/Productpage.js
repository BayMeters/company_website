import React from 'react';
import Navbar from '../components/Navbar.js';
import Layout from '../components/Layout.js';

const WebsiteLayout = () => {
  return (
    <Layout>
      <Navbar />
        <h1 className="text-4xl text-center font-bold text-gray-900 p-8">
            Full Product page
        </h1>
    </Layout>
  );
};

export default WebsiteLayout;